// 八字排盘核心算法（优化版 - 使用节气划分月份）

import { getBaziYear, getBaziMonth, calculateDayPillarAccurate, getShiChen } from "./calendar";

// 天干数组
export const TIAN_GAN = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];

// 地支数组
export const DI_ZHI = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];

// 天干五行
export const TIAN_GAN_WU_XING: Record<string, string> = {
  甲: "木", 乙: "木",
  丙: "火", 丁: "火",
  戊: "土", 己: "土",
  庚: "金", 辛: "金",
  壬: "水", 癸: "水",
};

// 地支五行（本气）
export const DI_ZHI_WU_XING: Record<string, string> = {
  子: "水", 丑: "土", 寅: "木", 卯: "木",
  辰: "土", 巳: "火", 午: "火", 未: "土",
  申: "金", 酉: "金", 戌: "土", 亥: "水",
};

// 地支藏干
export const DI_ZHI_CANG_GAN: Record<string, string[]> = {
  子: ["癸"],
  丑: ["己", "癸", "辛"],
  寅: ["甲", "丙", "戊"],
  卯: ["乙"],
  辰: ["戊", "乙", "癸"],
  巳: ["丙", "戊", "庚"],
  午: ["丁", "己"],
  未: ["己", "丁", "乙"],
  申: ["庚", "壬", "戊"],
  酉: ["辛"],
  戌: ["戊", "辛", "丁"],
  亥: ["壬", "甲"],
};

// 十神对照表（以日干为基准）
export const SHI_SHEN: Record<string, Record<string, string>> = {
  甲: { 甲: "比肩", 乙: "劫财", 丙: "食神", 丁: "伤官", 戊: "偏财", 己: "正财", 庚: "七杀", 辛: "正官", 壬: "偏印", 癸: "正印" },
  乙: { 甲: "劫财", 乙: "比肩", 丙: "伤官", 丁: "食神", 戊: "正财", 己: "偏财", 庚: "正官", 辛: "七杀", 壬: "正印", 癸: "偏印" },
  丙: { 甲: "偏印", 乙: "正印", 丙: "比肩", 丁: "劫财", 戊: "食神", 己: "伤官", 庚: "偏财", 辛: "正财", 壬: "七杀", 癸: "正官" },
  丁: { 甲: "正印", 乙: "偏印", 丙: "劫财", 丁: "比肩", 戊: "伤官", 己: "食神", 庚: "正财", 辛: "偏财", 壬: "正官", 癸: "七杀" },
  戊: { 甲: "七杀", 乙: "正官", 丙: "偏印", 丁: "正印", 戊: "比肩", 己: "劫财", 庚: "食神", 辛: "伤官", 壬: "偏财", 癸: "正财" },
  己: { 甲: "正官", 乙: "七杀", 丙: "正印", 丁: "偏印", 戊: "劫财", 己: "比肩", 庚: "伤官", 辛: "食神", 壬: "正财", 癸: "偏财" },
  庚: { 甲: "偏财", 乙: "正财", 丙: "七杀", 丁: "正官", 戊: "偏印", 己: "正印", 庚: "比肩", 辛: "劫财", 壬: "食神", 癸: "伤官" },
  辛: { 甲: "正财", 乙: "偏财", 丙: "正官", 丁: "七杀", 戊: "正印", 己: "偏印", 庚: "劫财", 辛: "比肩", 壬: "伤官", 癸: "食神" },
  壬: { 甲: "食神", 乙: "伤官", 丙: "偏财", 丁: "正财", 戊: "七杀", 己: "正官", 庚: "偏印", 辛: "正印", 壬: "比肩", 癸: "劫财" },
  癸: { 甲: "伤官", 乙: "食神", 丙: "正财", 丁: "偏财", 戊: "正官", 己: "七杀", 庚: "正印", 辛: "偏印", 壬: "劫财", 癸: "比肩" },
};

// 月柱地支（从立春开始）
export const MONTH_DI_ZHI = ["寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥", "子", "丑"];

// 时柱地支
export const HOUR_DI_ZHI = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];

// 时柱天干对照表（以日干为基准）
export const HOUR_TIAN_GAN: Record<string, string[]> = {
  甲: ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸", "甲", "乙"],
  乙: ["丙", "丁", "戊", "己", "庚", "辛", "壬", "癸", "甲", "乙", "丙", "丁"],
  丙: ["戊", "己", "庚", "辛", "壬", "癸", "甲", "乙", "丙", "丁", "戊", "己"],
  丁: ["庚", "辛", "壬", "癸", "甲", "乙", "丙", "丁", "戊", "己", "庚", "辛"],
  戊: ["壬", "癸", "甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"],
  己: ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸", "甲", "乙"],
  庚: ["丙", "丁", "戊", "己", "庚", "辛", "壬", "癸", "甲", "乙", "丙", "丁"],
  辛: ["戊", "己", "庚", "辛", "壬", "癸", "甲", "乙", "丙", "丁", "戊", "己"],
  壬: ["庚", "辛", "壬", "癸", "甲", "乙", "丙", "丁", "戊", "己", "庚", "辛"],
  癸: ["壬", "癸", "甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"],
};

// 五行相生相克
const WU_XING_SHENG = { 木: "火", 火: "土", 土: "金", 金: "水", 水: "木" };
const WU_XING_KE = { 木: "土", 火: "金", 土: "水", 金: "木", 水: "火" };

export interface BaziInput {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute?: number;
  gender?: "male" | "female";
}

export interface Pillar {
  tianGan: string;
  diZhi: string;
  wuXing: string;
  shiShen?: string;
  cangGan?: string[]; // 地支藏干
}

export interface BaziResult {
  yearPillar: Pillar;
  monthPillar: Pillar;
  dayPillar: Pillar;
  hourPillar: Pillar;
  dayMaster: string; // 日主
  dayMasterWuXing: string; // 日主五行
  wuXingCount: Record<string, number>;
  shiShenCount: Record<string, number>;
  wangShuai: string; // 旺衰：旺、相、休、囚、死
  analysis: {
    wuXingBalance: string; // 五行平衡分析
    shiShenAnalysis: string; // 十神分析
    geJu?: string; // 格局
    yongShen?: string; // 用神
    jiShen?: string; // 忌神
    teDian?: string[]; // 特点
  };
}

/**
 * 计算年柱（根据节气确定年份）
 */
function calculateYearPillar(year: number, month: number, day: number): Pillar {
  const baziYear = getBaziYear(year, month, day);
  
  // 1900年为庚子年
  const baseYear = 1900;
  const baseTianGanIndex = 6; // 庚
  const baseDiZhiIndex = 0; // 子

  const yearDiff = baziYear - baseYear;
  const tianGanIndex = (baseTianGanIndex + yearDiff + 10) % 10;
  const diZhiIndex = (baseDiZhiIndex + yearDiff + 12) % 12;

  const tianGan = TIAN_GAN[tianGanIndex];
  const diZhi = DI_ZHI[diZhiIndex];

  return {
    tianGan,
    diZhi,
    wuXing: `${TIAN_GAN_WU_XING[tianGan]}${DI_ZHI_WU_XING[diZhi]}`,
    cangGan: DI_ZHI_CANG_GAN[diZhi],
  };
}

/**
 * 计算月柱（根据节气确定月份）
 */
function calculateMonthPillar(year: number, month: number, day: number): Pillar {
  const baziYear = getBaziYear(year, month, day);
  const baziMonth = getBaziMonth(year, month, day);
  
  const yearPillar = calculateYearPillar(year, month, day);
  const yearTianGanIndex = TIAN_GAN.indexOf(yearPillar.tianGan);

  // 月干计算口诀：
  // 甲己之年丙作首，乙庚之年戊为头，丙辛之年寻庚起，丁壬壬寅顺水流，若问戊癸何处起，甲寅之上好追求
  const getMonthStartTianGan = (yearTianGanIndex: number): number => {
    const remainder = yearTianGanIndex % 10;
    if (remainder === 0 || remainder === 5) return 2; // 甲、己 -> 丙
    if (remainder === 1 || remainder === 6) return 4; // 乙、庚 -> 戊
    if (remainder === 2 || remainder === 7) return 6; // 丙、辛 -> 庚
    if (remainder === 3 || remainder === 8) return 8; // 丁、壬 -> 壬
    return 0; // 戊、癸 -> 甲
  };

  const monthStartTianGanIndex = getMonthStartTianGan(yearTianGanIndex);
  const monthIndex = baziMonth - 1; // 月份从1开始，转为索引从0开始
  const monthTianGanIndex = (monthStartTianGanIndex + monthIndex + 10) % 10;
  const monthDiZhiIndex = monthIndex;

  const tianGan = TIAN_GAN[monthTianGanIndex];
  const diZhi = MONTH_DI_ZHI[monthDiZhiIndex];

  return {
    tianGan,
    diZhi,
    wuXing: `${TIAN_GAN_WU_XING[tianGan]}${DI_ZHI_WU_XING[diZhi]}`,
    cangGan: DI_ZHI_CANG_GAN[diZhi],
  };
}

/**
 * 计算日柱（使用准确的万年历算法）
 */
function calculateDayPillar(year: number, month: number, day: number): Pillar {
  const { tianGan, diZhi } = calculateDayPillarAccurate(year, month, day);

  return {
    tianGan,
    diZhi,
    wuXing: `${TIAN_GAN_WU_XING[tianGan]}${DI_ZHI_WU_XING[diZhi]}`,
    cangGan: DI_ZHI_CANG_GAN[diZhi],
  };
}

/**
 * 计算时柱
 */
function calculateHourPillar(dayTianGan: string, hour: number, minute: number = 0): Pillar {
  const shiChen = getShiChen(hour, minute);
  const diZhi = HOUR_DI_ZHI[shiChen];
  const hourTianGan = HOUR_TIAN_GAN[dayTianGan][shiChen];

  return {
    tianGan: hourTianGan,
    diZhi,
    wuXing: `${TIAN_GAN_WU_XING[hourTianGan]}${DI_ZHI_WU_XING[diZhi]}`,
    cangGan: DI_ZHI_CANG_GAN[diZhi],
  };
}

/**
 * 计算五行数量（包含地支藏干）
 */
function calculateWuXingCount(pillars: Pillar[]): Record<string, number> {
  const count: Record<string, number> = { 木: 0, 火: 0, 土: 0, 金: 0, 水: 0 };

  pillars.forEach((pillar) => {
    // 天干五行
    const tgWx = TIAN_GAN_WU_XING[pillar.tianGan];
    if (tgWx) count[tgWx]++;

    // 地支本气五行
    const dzWx = DI_ZHI_WU_XING[pillar.diZhi];
    if (dzWx) count[dzWx]++;

    // 地支藏干五行（简化处理，只计算主要藏干）
    if (pillar.cangGan) {
      pillar.cangGan.forEach((cg) => {
        const cgWx = TIAN_GAN_WU_XING[cg];
        if (cgWx) count[cgWx] += 0.3; // 藏干权重较小
      });
    }
  });

  // 四舍五入
  Object.keys(count).forEach((wx) => {
    count[wx] = Math.round(count[wx] * 10) / 10;
  });

  return count;
}

/**
 * 计算十神
 */
function calculateShiShen(dayMaster: string, pillars: Pillar[]): Pillar[] {
  return pillars.map((pillar) => ({
    ...pillar,
    shiShen: SHI_SHEN[dayMaster]?.[pillar.tianGan] || "",
  }));
}

/**
 * 计算十神数量
 */
function calculateShiShenCount(pillars: Pillar[]): Record<string, number> {
  const count: Record<string, number> = {};

  pillars.forEach((pillar) => {
    if (pillar.shiShen) {
      count[pillar.shiShen] = (count[pillar.shiShen] || 0) + 1;
    }
  });

  return count;
}

/**
 * 分析旺衰
 */
function analyzeWangShuai(dayMasterWuXing: string, wuXingCount: Record<string, number>, monthPillar: Pillar): string {
  const monthWuXing = DI_ZHI_WU_XING[monthPillar.diZhi];
  
  // 旺衰判断：得令、得地、得势
  // 得令：日主五行与月支五行相同或相生
  const deLing = monthWuXing === dayMasterWuXing || WU_XING_SHENG[monthWuXing as keyof typeof WU_XING_SHENG] === dayMasterWuXing;
  
  // 得势：同类五行多
  const sameWuXing = wuXingCount[dayMasterWuXing] || 0;
  const deShi = sameWuXing >= 3;

  if (deLing && deShi) return "旺";
  if (deLing || deShi) return "相";
  
  // 被克
  const keWuXing = WU_XING_KE[dayMasterWuXing as keyof typeof WU_XING_KE];
  const keCount = wuXingCount[keWuXing] || 0;
  if (keCount >= 3) return "死";
  if (keCount >= 2) return "囚";
  
  return "休";
}

/**
 * 分析五行平衡
 */
function analyzeWuXingBalance(wuXingCount: Record<string, number>): string {
  const values = Object.values(wuXingCount);
  const max = Math.max(...values);
  const min = Math.min(...values);
  const diff = max - min;

  if (diff <= 1) return "五行相对平衡";
  if (diff <= 2) return "五行略有偏颇";
  if (diff <= 3) return "五行明显失衡";
  return "五行严重失衡";
}

/**
 * 分析十神
 */
function analyzeShiShen(shiShenCount: Record<string, number>): string {
  const items = Object.entries(shiShenCount).sort((a, b) => b[1] - a[1]);
  if (items.length === 0) return "十神分布均匀";

  const top = items[0];
  return `以${top[0]}为主（${top[1]}个），${items.slice(1, 3).map(([name, count]) => `${name}${count}个`).join("、")}`;
}

/**
 * 判断格局
 */
function analyzeGeJu(
  dayMaster: string,
  dayMasterWuXing: string,
  pillars: Pillar[],
  wangShuai: string,
  shiShenCount: Record<string, number>
): string {
  // 正官格
  if (shiShenCount["正官"] >= 2) {
    return "正官格：官星透干，贵气显现，主清正廉洁，适合公职";
  }

  // 七杀格
  if (shiShenCount["七杀"] >= 2) {
    return "七杀格：杀星当权，威势显赫，主魄力过人，宜制化";
  }

  // 正财格
  if (shiShenCount["正财"] >= 2) {
    return "正财格：财星得用，主财源稳定，善于理财";
  }

  // 偏财格
  if (shiShenCount["偏财"] >= 2) {
    return "偏财格：偏财透干，主财路广阔，善于投资";
  }

  // 食神格
  if (shiShenCount["食神"] >= 2) {
    return "食神格：食神生财，主才华横溢，适合创意行业";
  }

  // 伤官格
  if (shiShenCount["伤官"] >= 2) {
    return "伤官格：伤官配印，主才华出众，需有制化";
  }

  // 印绶格
  if (shiShenCount["正印"] >= 2 || shiShenCount["偏印"] >= 2) {
    return "印绶格：印星当权，主学业有成，智慧超群";
  }

  // 比劫格
  if (shiShenCount["比肩"] >= 2 || shiShenCount["劫财"] >= 2) {
    return "比劫格：比劫帮身，主朋友众多，需防破财";
  }

  // 根据旺衰判断
  if (wangShuai === "旺") {
    return "身旺格：日主得令得地，气势强盛，宜泄宜耗";
  }
  if (wangShuai === "死" || wangShuai === "囚") {
    return "身弱格：日主失令失地，气势衰弱，宜生宜扶";
  }

  return "普通格局：五行流通，十神均衡";
}

/**
 * 分析用神
 */
function analyzeYongShen(
  dayMasterWuXing: string,
  wangShuai: string,
  wuXingCount: Record<string, number>
): string {
  const WU_XING_SHENG: Record<string, string> = { 木: "火", 火: "土", 土: "金", 金: "水", 水: "木" };
  const WU_XING_KE: Record<string, string> = { 木: "土", 火: "金", 土: "水", 金: "木", 水: "火" };

  if (wangShuai === "旺" || wangShuai === "相") {
    // 身旺，用神为克、泄、耗
    const ke = WU_XING_KE[dayMasterWuXing] || "";
    const xie = WU_XING_SHENG[dayMasterWuXing] || "";
    return `身旺用${ke}、${xie}，以克泄耗为用`;
  } else {
    // 身弱，用神为生、扶
    const sheng = Object.keys(WU_XING_SHENG).find((k) => WU_XING_SHENG[k] === dayMasterWuXing) || "";
    return `身弱用${sheng}、${dayMasterWuXing}，以生扶为用`;
  }
}

/**
 * 分析忌神
 */
function analyzeJiShen(dayMasterWuXing: string, wangShuai: string): string {
  const WU_XING_SHENG: Record<string, string> = { 木: "火", 火: "土", 土: "金", 金: "水", 水: "木" };
  const WU_XING_KE: Record<string, string> = { 木: "土", 火: "金", 土: "水", 金: "木", 水: "火" };

  if (wangShuai === "旺" || wangShuai === "相") {
    const sheng = Object.keys(WU_XING_SHENG).find((k) => WU_XING_SHENG[k] === dayMasterWuXing) || "";
    return `忌${sheng}、${dayMasterWuXing}，生扶为忌`;
  } else {
    const ke = WU_XING_KE[dayMasterWuXing] || "";
    const xie = WU_XING_SHENG[dayMasterWuXing] || "";
    return `忌${ke}、${xie}，克泄耗为忌`;
  }
}

/**
 * 分析特点
 */
function analyzeTeDian(
  dayMaster: string,
  pillars: Pillar[],
  wangShuai: string,
  shiShenCount: Record<string, number>
): string[] {
  const teDian: string[] = [];

  // 旺衰特点
  if (wangShuai === "旺") {
    teDian.push("日主得令，气势强盛");
  } else if (wangShuai === "弱" || wangShuai === "死") {
    teDian.push("日主失令，需生扶");
  }

  // 十神特点
  if (shiShenCount["正官"] > 0) {
    teDian.push("正官透干，贵气显现");
  }
  if (shiShenCount["七杀"] > 0) {
    teDian.push("七杀当权，威势过人");
  }
  if (shiShenCount["正财"] > 0 || shiShenCount["偏财"] > 0) {
    teDian.push("财星得用，财源广进");
  }
  if (shiShenCount["食神"] > 0 || shiShenCount["伤官"] > 0) {
    teDian.push("食伤泄秀，才华横溢");
  }
  if (shiShenCount["正印"] > 0 || shiShenCount["偏印"] > 0) {
    teDian.push("印绶护身，智慧超群");
  }

  // 四柱特点
  if (pillars[0].tianGan === dayMaster) {
    teDian.push("年干透日主，祖上显贵");
  }
  if (pillars[2].diZhi === pillars[3].diZhi) {
    teDian.push("日时同支，根基深厚");
  }

  return teDian.length > 0 ? teDian : ["格局清纯，五行流通"];
}

/**
 * 主函数：计算八字
 */
export function calculateBazi(input: BaziInput): BaziResult {
  const minute = input.minute || 0;

  // 计算四柱（使用节气划分月份）
  const yearPillar = calculateYearPillar(input.year, input.month, input.day);
  const monthPillar = calculateMonthPillar(input.year, input.month, input.day);
  const dayPillar = calculateDayPillar(input.year, input.month, input.day);
  const hourPillar = calculateHourPillar(dayPillar.tianGan, input.hour, minute);

  const pillars = [yearPillar, monthPillar, dayPillar, hourPillar];
  const dayMaster = dayPillar.tianGan;
  const dayMasterWuXing = TIAN_GAN_WU_XING[dayMaster];

  // 计算十神
  const pillarsWithShiShen = calculateShiShen(dayMaster, pillars);

  // 计算五行数量
  const wuXingCount = calculateWuXingCount(pillars);

  // 计算十神数量
  const shiShenCount = calculateShiShenCount(pillarsWithShiShen);

  // 分析旺衰
  const wangShuai = analyzeWangShuai(dayMasterWuXing, wuXingCount, monthPillar);

  // 生成分析
  const analysis = {
    wuXingBalance: analyzeWuXingBalance(wuXingCount),
    shiShenAnalysis: analyzeShiShen(shiShenCount),
    geJu: analyzeGeJu(dayMaster, dayMasterWuXing, pillars, wangShuai, shiShenCount),
    yongShen: analyzeYongShen(dayMasterWuXing, wangShuai, wuXingCount),
    jiShen: analyzeJiShen(dayMasterWuXing, wangShuai),
    teDian: analyzeTeDian(dayMaster, pillars, wangShuai, shiShenCount),
  };

  return {
    yearPillar: pillarsWithShiShen[0],
    monthPillar: pillarsWithShiShen[1],
    dayPillar: pillarsWithShiShen[2],
    hourPillar: pillarsWithShiShen[3],
    dayMaster,
    dayMasterWuXing,
    wuXingCount,
    shiShenCount,
    wangShuai,
    analysis,
  };
}
