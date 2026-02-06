import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const diZhi = [
  {
    name: "子",
    element: "水",
    animal: "鼠",
    time: "23:00-01:00",
    month: "十一月",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    keywords: ["聪慧", "机敏", "灵活", "开端"],
    description: "子时为一天之始，子水藏干癸水。子代表智慧与开端，如同黑夜中孕育的生机。子水之人思维敏捷，善于谋划，但需防城府过深。",
  },
  {
    name: "丑",
    element: "土",
    animal: "牛",
    time: "01:00-03:00",
    month: "十二月",
    color: "text-amber-400",
    bgColor: "bg-amber-400/10",
    keywords: ["勤恳", "踏实", "储蓄", "耐力"],
    description: "丑土为冬季之土，寒而湿润，藏干己土、癸水、辛金。丑代表积累与沉淀，如牛之勤恳。丑土之人务实可靠，善于积累，但需防过于保守。",
  },
  {
    name: "寅",
    element: "木",
    animal: "虎",
    time: "03:00-05:00",
    month: "正月",
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
    keywords: ["勇猛", "开创", "活力", "威严"],
    description: "寅为春之始，万物萌发。寅木藏干甲木、丙火、戊土。寅代表开创与勇气，如虎之威猛。寅木之人有魄力，敢于开拓，但需防过于冲动。",
  },
  {
    name: "卯",
    element: "木",
    animal: "兔",
    time: "05:00-07:00",
    month: "二月",
    color: "text-green-400",
    bgColor: "bg-green-400/10",
    keywords: ["温和", "艺术", "敏捷", "社交"],
    description: "卯木为仲春之木，生机盎然。卯中藏干乙木。卯代表生长与和谐，如兔之温顺。卯木之人温和有礼，善于社交，但需防优柔寡断。",
  },
  {
    name: "辰",
    element: "土",
    animal: "龙",
    time: "07:00-09:00",
    month: "三月",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    keywords: ["变化", "包容", "储存", "多面"],
    description: "辰为春末之土，藏干戊土、乙木、癸水，为水库。辰代表变化与包容，如龙之神秘。辰土之人适应力强，多才多艺，但需防想法过多。",
  },
  {
    name: "巳",
    element: "火",
    animal: "蛇",
    time: "09:00-11:00",
    month: "四月",
    color: "text-red-400",
    bgColor: "bg-red-400/10",
    keywords: ["智慧", "洞察", "精明", "神秘"],
    description: "巳火为初夏之火，藏干丙火、戊土、庚金。巳代表智慧与蜕变，如蛇之精明。巳火之人洞察力强，善于分析，但需防过于算计。",
  },
  {
    name: "午",
    element: "火",
    animal: "马",
    time: "11:00-13:00",
    month: "五月",
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
    keywords: ["热情", "行动", "光明", "自由"],
    description: "午火为盛夏之火，阳气最旺。午中藏干丁火、己土。午代表热情与行动，如马之奔放。午火之人积极主动，追求自由，但需防急躁冲动。",
  },
  {
    name: "未",
    element: "土",
    animal: "羊",
    time: "13:00-15:00",
    month: "六月",
    color: "text-amber-300",
    bgColor: "bg-amber-300/10",
    keywords: ["温顺", "滋养", "储蓄", "包容"],
    description: "未土为夏末之土，藏干己土、丁火、乙木，为木库。未代表滋养与包容，如羊之温顺。未土之人心地善良，乐于付出，但需防被人利用。",
  },
  {
    name: "申",
    element: "金",
    animal: "猴",
    time: "15:00-17:00",
    month: "七月",
    color: "text-slate-300",
    bgColor: "bg-slate-300/10",
    keywords: ["机智", "变通", "果断", "进取"],
    description: "申金为初秋之金，藏干庚金、壬水、戊土。申代表变通与进取，如猴之机敏。申金之人反应快，善于应变，但需防过于狡猾。",
  },
  {
    name: "酉",
    element: "金",
    animal: "鸡",
    time: "17:00-19:00",
    month: "八月",
    color: "text-gray-300",
    bgColor: "bg-gray-300/10",
    keywords: ["精准", "守时", "完美", "表达"],
    description: "酉金为仲秋之金，藏干辛金。酉代表精致与表达，如鸡之守时。酉金之人注重细节，善于表达，但需防过于挑剔或自负。",
  },
  {
    name: "戌",
    element: "土",
    animal: "狗",
    time: "19:00-21:00",
    month: "九月",
    color: "text-yellow-600",
    bgColor: "bg-yellow-600/10",
    keywords: ["忠诚", "守护", "正义", "可靠"],
    description: "戌土为秋末之土，藏干戊土、辛金、丁火，为火库。戌代表忠诚与守护，如狗之忠义。戌土之人重情重义，值得信赖，但需防过于固执。",
  },
  {
    name: "亥",
    element: "水",
    animal: "猪",
    time: "21:00-23:00",
    month: "十月",
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
    keywords: ["宽厚", "智慧", "享乐", "包容"],
    description: "亥水为初冬之水，藏干壬水、甲木。亥代表智慧与包容，如猪之宽厚。亥水之人心胸宽广，与人为善，但需防过于放纵或懒散。",
  },
];

export const DiZhiSection = () => {
  return (
    <div className="space-y-8">
      <div className="max-w-3xl">
        <h2 className="text-2xl font-serif font-bold mb-4">十二地支</h2>
        <p className="text-muted-foreground leading-relaxed">
          地支共有十二个：子、丑、寅、卯、辰、巳、午、未、申、酉、戌、亥，对应十二生肖与十二时辰。
          地支代表地气运行的规律，在八字中反映内在性格与潜在能量。
          每个地支都有「藏干」，即其中蕴含的天干能量。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {diZhi.map((zhi) => (
          <Card key={zhi.name} className="bg-card border-border hover:border-primary/30 transition-colors">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 ${zhi.bgColor} rounded-xl flex items-center justify-center`}>
                  <span className={`text-xl font-serif font-bold ${zhi.color}`}>{zhi.name}</span>
                </div>
                <div className="flex-1">
                  <CardTitle className="text-base">{zhi.name} · {zhi.animal} · {zhi.element}</CardTitle>
                  <p className="text-xs text-muted-foreground">{zhi.time} | {zhi.month}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex flex-wrap gap-1.5">
                {zhi.keywords.map((kw) => (
                  <span key={kw} className={`px-2 py-0.5 ${zhi.bgColor} ${zhi.color} text-xs rounded-full`}>
                    {kw}
                  </span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {zhi.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
