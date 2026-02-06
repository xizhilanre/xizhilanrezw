import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const tianGan = [
  {
    name: "甲",
    element: "阳木",
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
    nature: "参天大树",
    keywords: ["开创", "领导", "正直", "仁慈"],
    description: "甲木如参天大树，象征开创与生长的力量。甲木之人多具领导气质，性格正直刚毅，有担当、有抱负。适合开拓性工作，但需防过于刚直而不知变通。",
    career: "企业家、管理者、开拓者",
    psychology: "开创型人格，喜欢挑战，追求成长与突破",
  },
  {
    name: "乙",
    element: "阴木",
    color: "text-green-400",
    bgColor: "bg-green-400/10",
    nature: "花草藤蔓",
    keywords: ["柔韧", "适应", "艺术", "包容"],
    description: "乙木如花草藤蔓，柔韧而有生命力。乙木之人温和细腻，善于适应环境，具有艺术天赋。处事灵活，懂得以柔克刚，但需防优柔寡断。",
    career: "艺术家、设计师、咨询师",
    psychology: "适应型人格，善于协调，追求和谐美感",
  },
  {
    name: "丙",
    element: "阳火",
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
    nature: "太阳之火",
    keywords: ["热情", "光明", "慷慨", "表现"],
    description: "丙火如太阳，光芒万丈，温暖四方。丙火之人热情开朗，具有感染力，乐于付出。性格外向，喜欢成为焦点，但需防自我中心或过度张扬。",
    career: "演艺工作者、教育者、公关",
    psychology: "表现型人格，需要被看见，追求影响力",
  },
  {
    name: "丁",
    element: "阴火",
    color: "text-red-400",
    bgColor: "bg-red-400/10",
    nature: "烛光灯火",
    keywords: ["细腻", "温暖", "洞察", "内敛"],
    description: "丁火如烛光，虽小却温暖持久。丁火之人心思细腻，洞察力强，有文采。外表温和内心有主见，适合需要专注与洞察的工作。",
    career: "作家、心理咨询师、研究者",
    psychology: "洞察型人格，善于分析，追求深度理解",
  },
  {
    name: "戊",
    element: "阳土",
    color: "text-amber-400",
    bgColor: "bg-amber-400/10",
    nature: "高山厚土",
    keywords: ["稳重", "包容", "信用", "厚道"],
    description: "戊土如高山厚土，稳重而有承载力。戊土之人诚信可靠，心胸宽广，是值得信赖的伙伴。做事踏实，但需防过于固执或反应迟缓。",
    career: "金融、房地产、行政管理",
    psychology: "稳定型人格，重视安全，追求可靠与信任",
  },
  {
    name: "己",
    element: "阴土",
    color: "text-yellow-600",
    bgColor: "bg-yellow-600/10",
    nature: "田园沃土",
    keywords: ["滋养", "务实", "谨慎", "服务"],
    description: "己土如田园沃土，能滋养万物。己土之人细心周到，善于照顾他人，务实勤恳。适合服务型工作，但需防过度操心或自我牺牲。",
    career: "医疗、教育、服务业",
    psychology: "服务型人格，乐于助人，追求被需要的感觉",
  },
  {
    name: "庚",
    element: "阳金",
    color: "text-slate-300",
    bgColor: "bg-slate-300/10",
    nature: "刀剑金铁",
    keywords: ["刚毅", "决断", "公正", "革新"],
    description: "庚金如刀剑，锋利而有力。庚金之人果断刚毅，有魄力，重视公平正义。适合需要决断力的工作，但需防过于强势或伤人伤己。",
    career: "法律、军警、外科医生",
    psychology: "决断型人格，追求效率与公正，不喜拖泥带水",
  },
  {
    name: "辛",
    element: "阴金",
    color: "text-gray-300",
    bgColor: "bg-gray-300/10",
    nature: "珠玉首饰",
    keywords: ["精致", "敏锐", "清高", "完美"],
    description: "辛金如珠玉，精致而有价值。辛金之人品味高雅，追求完美，有独特审美。敏感细腻，适合精细工作，但需防过于挑剔或清高孤傲。",
    career: "珠宝设计、品质管理、财务",
    psychology: "完美型人格，注重细节，追求品质与格调",
  },
  {
    name: "壬",
    element: "阳水",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    nature: "江河大海",
    keywords: ["智慧", "包容", "变通", "深沉"],
    description: "壬水如江河大海，浩瀚而有深度。壬水之人聪明智慧，思维开阔，善于变通。心胸宽广能容纳百川，但需防城府过深或随波逐流。",
    career: "学术研究、策划、贸易",
    psychology: "智慧型人格，追求自由与可能性，不喜受限",
  },
  {
    name: "癸",
    element: "阴水",
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
    nature: "雨露泉水",
    keywords: ["润泽", "敏感", "内省", "滋养"],
    description: "癸水如雨露泉水，细腻而滋润万物。癸水之人感受力强，善于体察他人，有奉献精神。内省深沉，适合幕后工作，但需防过于敏感或消极。",
    career: "心理咨询、护理、文字工作",
    psychology: "感知型人格，善于共情，追求精神层面的连接",
  },
];

export const TianGanSection = () => {
  return (
    <div className="space-y-8">
      <div className="max-w-3xl">
        <h2 className="text-2xl font-serif font-bold mb-4">十天干</h2>
        <p className="text-muted-foreground leading-relaxed">
          天干是中国古代记录时间的符号系统，共有十个：甲、乙、丙、丁、戊、己、庚、辛、壬、癸。
          它们分别对应五行（木、火、土、金、水）的阴阳两面，用于描述宇宙能量的不同状态。
          在八字命理中，天干代表外在表现与行为模式。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tianGan.map((gan) => (
          <Card key={gan.name} className="bg-card border-border hover:border-primary/30 transition-colors">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 ${gan.bgColor} rounded-xl flex items-center justify-center`}>
                  <span className={`text-2xl font-serif font-bold ${gan.color}`}>{gan.name}</span>
                </div>
                <div>
                  <CardTitle className="text-lg">{gan.name} · {gan.element}</CardTitle>
                  <p className="text-sm text-muted-foreground">{gan.nature}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex flex-wrap gap-2">
                {gan.keywords.map((kw) => (
                  <span key={kw} className={`px-2 py-1 ${gan.bgColor} ${gan.color} text-xs rounded-full`}>
                    {kw}
                  </span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {gan.description}
              </p>
              <div className="pt-2 border-t border-border space-y-1">
                <p className="text-xs"><span className="text-primary">适合方向：</span>{gan.career}</p>
                <p className="text-xs"><span className="text-primary">心理特质：</span>{gan.psychology}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
