// 农历和节气计算工具

// 二十四节气表（1900-2100年的近似值，实际应使用精确天文计算）
const SOLAR_TERMS = [
  // 每月两个节气，共24个
  "小寒", "大寒", "立春", "雨水", "惊蛰", "春分",
  "清明", "谷雨", "立夏", "小满", "芒种", "夏至",
  "小暑", "大暑", "立秋", "处暑", "白露", "秋分",
  "寒露", "霜降", "立冬", "小雪", "大雪", "冬至",
];

// 节气对应的月份（从立春开始）
const TERM_MONTHS = [2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 1, 1];

/**
 * 计算指定年份的节气时间（简化算法，使用近似公式）
 * 实际应使用精确的天文计算
 */
function getSolarTermDate(year: number, termIndex: number): Date {
  // 使用简化公式计算节气日期（基于1900年的数据）
  // 实际应使用精确的天文算法
  const baseYear = 1900;
  const baseDates: number[] = [
    6, 20, 4, 19, 6, 21, 5, 20, 6, 21, 6, 22, // 上半年
    7, 23, 8, 23, 8, 23, 9, 23, 8, 22, 7, 22, // 下半年
  ];

  const day = baseDates[termIndex];
  const month = TERM_MONTHS[termIndex] - 1; // JavaScript月份从0开始

  // 简化处理：每年节气日期会有1-2天的浮动
  return new Date(year, month, day);
}

/**
 * 判断日期是否在某个节气之后
 */
function isAfterSolarTerm(date: Date, termIndex: number): boolean {
  const termDate = getSolarTermDate(date.getFullYear(), termIndex);
  return date >= termDate;
}

/**
 * 根据节气确定八字月份
 * 八字月份从立春开始：立春-惊蛰为正月，惊蛰-清明为二月...
 */
export function getBaziMonth(year: number, month: number, day: number): number {
  const date = new Date(year, month - 1, day);

  // 检查是否在立春之前（2月4日左右）
  const liChun = getSolarTermDate(year, 2); // 立春是第3个节气（索引2）
  if (date < liChun) {
    // 如果还没到立春，属于上一年的十二月
    return 12;
  }

  // 从立春开始，每两个节气为一个月
  // 立春(2)-惊蛰(4): 正月(1)
  // 惊蛰(4)-清明(6): 二月(2)
  // 清明(6)-立夏(8): 三月(3)
  // 立夏(8)-芒种(10): 四月(4)
  // 芒种(10)-小暑(12): 五月(5)
  // 小暑(12)-立秋(14): 六月(6)
  // 立秋(14)-白露(16): 七月(7)
  // 白露(16)-寒露(18): 八月(8)
  // 寒露(18)-立冬(20): 九月(9)
  // 立冬(20)-大雪(22): 十月(10)
  // 大雪(22)-小寒(24): 十一月(11)
  // 小寒(0)-立春(2): 十二月(12)

  // 节气索引：0小寒, 1大寒, 2立春, 3雨水, 4惊蛰, 5春分, 6清明, 7谷雨, 8立夏, 9小满, 10芒种, 11夏至,
  //          12小暑, 13大暑, 14立秋, 15处暑, 16白露, 17秋分, 18寒露, 19霜降, 20立冬, 21小雪, 22大雪, 23冬至

  // 从立春(2)开始，每两个节气为一个月
  for (let i = 0; i < 12; i++) {
    const termStartIndex = i * 2 + 2; // 立春开始
    const termEndIndex = (i + 1) * 2 + 2;
    
    const termStart = getSolarTermDate(year, termStartIndex);
    
    if (i === 11) {
      // 最后一个月（十二月），到下一年立春
      const nextLiChun = getSolarTermDate(year + 1, 2);
      if (date >= termStart && date < nextLiChun) {
        return 12;
      }
    } else {
      const termEnd = getSolarTermDate(year, termEndIndex);
      if (date >= termStart && date < termEnd) {
        return i + 1;
      }
    }
  }

  return 1; // 默认返回正月
}

/**
 * 根据节气确定八字年份
 * 如果日期在立春之前，属于上一年
 */
export function getBaziYear(year: number, month: number, day: number): number {
  const date = new Date(year, month - 1, day);
  const liChun = getSolarTermDate(year, 2); // 立春

  if (date < liChun) {
    return year - 1;
  }
  return year;
}

/**
 * 计算准确的日柱
 * 使用1900年1月1日为甲子日的基准
 */
export function calculateDayPillarAccurate(year: number, month: number, day: number): {
  tianGan: string;
  diZhi: string;
} {
  // 1900年1月1日为甲子日（天干索引0，地支索引0）
  const baseDate = new Date(1900, 0, 1);
  const targetDate = new Date(year, month - 1, day);

  // 计算天数差
  const timeDiff = targetDate.getTime() - baseDate.getTime();
  const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  // 天干地支循环
  const TIAN_GAN = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
  const DI_ZHI = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];

  const tianGanIndex = (daysDiff % 10 + 10) % 10;
  const diZhiIndex = (daysDiff % 12 + 12) % 12;

  return {
    tianGan: TIAN_GAN[tianGanIndex],
    diZhi: DI_ZHI[diZhiIndex],
  };
}

/**
 * 将公历小时转换为时辰
 */
export function getShiChen(hour: number, minute: number = 0): number {
  // 时辰划分：
  // 子时: 23:00-00:59
  // 丑时: 01:00-02:59
  // 寅时: 03:00-04:59
  // 卯时: 05:00-06:59
  // 辰时: 07:00-08:59
  // 巳时: 09:00-10:59
  // 午时: 11:00-12:59
  // 未时: 13:00-14:59
  // 申时: 15:00-16:59
  // 酉时: 17:00-18:59
  // 戌时: 19:00-20:59
  // 亥时: 21:00-22:59

  if (hour === 23 || hour === 0) return 0; // 子时
  return Math.floor((hour + 1) / 2);
}
