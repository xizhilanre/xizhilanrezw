import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const shiShen = [
  {
    name: "正官",
    short: "官",
    relation: "克我且与我异性",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    keywords: ["规则", "责任", "地位", "约束"],
    description: "正官代表正当的管理与约束力量，如法律、上级、社会规范。正官旺的人规则意识强，做事有分寸，重视名誉与社会认可。适合在体制内发展，如公务员、管理者、法律从业者。",
    psychology: "内在有一个「监督者」的声音，时刻提醒自己要得体、要负责。需要学习的是在遵守规则的同时保持自我。",
    pros: "自律、可靠、有担当",
    cons: "可能过于拘谨、在意他人评价",
  },
  {
    name: "七杀",
    short: "杀",
    relation: "克我且与我同性",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    keywords: ["压力", "魄力", "开创", "挑战"],
    description: "七杀代表强烈的外在压力与挑战，是锻炼意志的「磨刀石」。七杀旺的人有魄力、敢拼搏，适合在竞争激烈的环境中成长。若能驾驭压力，可成就大事；若被压力压垮，则易焦虑消沉。",
    psychology: "内心有强烈的「证明自己」的欲望，喜欢挑战与征服。需要学习的是将压力转化为动力而非焦虑。",
    pros: "果断、勇敢、抗压能力强",
    cons: "可能过于强势、容易树敌",
  },
  {
    name: "正印",
    short: "印",
    relation: "生我且与我异性",
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    keywords: ["学习", "保护", "修养", "母性"],
    description: "正印代表正当的滋养与保护，如母亲的关爱、学校的教育、知识的熏陶。正印旺的人好学深思，有文化修养，重视精神生活。适合教育、学术、文化类工作。",
    psychology: "内心渴望被理解与保护，喜欢通过学习来获得安全感。需要学习的是从「吸收」走向「输出」与行动。",
    pros: "博学、包容、有涵养",
    cons: "可能过于依赖、缺乏行动力",
  },
  {
    name: "偏印",
    short: "枭",
    relation: "生我且与我同性",
    color: "text-indigo-400",
    bgColor: "bg-indigo-400/10",
    keywords: ["独创", "偏门", "悟性", "孤独"],
    description: "偏印代表非主流的知识与智慧，如玄学、艺术、小众领域。偏印旺的人思维独特，有独创能力，常对冷门学问感兴趣。适合研究、艺术、灵性相关工作，但需防过于孤僻。",
    psychology: "内心有一种「与众不同」的需求，不喜欢走寻常路。需要学习的是在独特性与社会适应之间找到平衡。",
    pros: "悟性高、创意强、独立思考",
    cons: "可能过于特立独行、难以被理解",
  },
  {
    name: "正财",
    short: "财",
    relation: "我克且与我异性",
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
    keywords: ["务实", "稳定", "理财", "勤劳"],
    description: "正财代表通过正当劳动获得的财富与回报。正财旺的人务实勤恳，善于理财，追求稳定可靠的收入来源。适合财务、商业、实业类工作。在婚姻中，正财也代表正缘配偶。",
    psychology: "内心重视物质安全感，喜欢「付出-回报」的确定性。需要学习的是在务实之余保持一些冒险精神。",
    pros: "踏实、可靠、善于积累",
    cons: "可能过于保守、缺乏冒险精神",
  },
  {
    name: "偏财",
    short: "才",
    relation: "我克且与我同性",
    color: "text-green-400",
    bgColor: "bg-green-400/10",
    keywords: ["机遇", "慷慨", "人脉", "投资"],
    description: "偏财代表意外之财与社交资源，如投资收益、人脉变现、继承等。偏财旺的人慷慨大方，人缘好，善于把握机会。适合销售、投资、社交型工作，但需防理财不当。",
    psychology: "内心对机会敏感，相信「人脉即财脉」。需要学习的是在慷慨之余也要照顾好自己的根基。",
    pros: "人缘好、眼光准、敢于尝试",
    cons: "可能过于冒险、财来财去",
  },
  {
    name: "食神",
    short: "食",
    relation: "我生且与我异性",
    color: "text-pink-400",
    bgColor: "bg-pink-400/10",
    keywords: ["才华", "享受", "温和", "创作"],
    description: "食神代表自然流露的才华与创造力，是「泄秀」之神。食神旺的人温和有福气，有艺术天赋，懂得享受生活。适合餐饮、艺术、休闲类工作。食神也与口福、子女福有关。",
    psychology: "内心追求自在与愉悦，通过创造来表达自我。需要学习的是在享受之余保持适度的进取心。",
    pros: "有福气、有才华、乐观温和",
    cons: "可能过于安逸、缺乏紧迫感",
  },
  {
    name: "伤官",
    short: "伤",
    relation: "我生且与我同性",
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
    keywords: ["表现", "反叛", "口才", "创新"],
    description: "伤官代表强烈的自我表达欲望，是「才华外溢」之神。伤官旺的人聪明伶俐，口才出众，敢于挑战权威。适合演艺、律师、创业类工作。但需注意伤官过旺可能言语伤人。",
    psychology: "内心有强烈的「被看见」需求，喜欢表现与突破常规。需要学习的是在表达之余也要顾及他人感受。",
    pros: "才华横溢、创新能力强、有个性",
    cons: "可能过于锋芒毕露、易得罪人",
  },
  {
    name: "比肩",
    short: "比",
    relation: "与我同类且同性",
    color: "text-slate-400",
    bgColor: "bg-slate-400/10",
    keywords: ["独立", "竞争", "平等", "自我"],
    description: "比肩代表与自己同类的人，如兄弟姐妹、同事、竞争对手。比肩旺的人独立自主，有竞争意识，重视平等合作。适合需要独当一面的工作，但需防过于自我。",
    psychology: "内心重视独立与自主权，不喜欢被人控制。需要学习的是在保持自我的同时也能真诚合作。",
    pros: "独立、坚强、有主见",
    cons: "可能过于固执、不愿妥协",
  },
  {
    name: "劫财",
    short: "劫",
    relation: "与我同类且异性",
    color: "text-gray-400",
    bgColor: "bg-gray-400/10",
    keywords: ["行动", "冲动", "社交", "争夺"],
    description: "劫财代表行动力与社交能力，但也暗示与人争夺资源。劫财旺的人行动力强，社交活跃，但可能因冲动而破财。适合需要快速行动的工作，如销售、运动。",
    psychology: "内心有「不甘人后」的冲劲，喜欢竞争与行动。需要学习的是在积极之余也要审时度势。",
    pros: "行动力强、社交能力好、敢拼",
    cons: "可能过于冲动、财运波动大",
  },
];

export const ShiShenSection = () => {
  return (
    <div className="space-y-8">
      <div className="max-w-3xl">
        <h2 className="text-2xl font-serif font-bold mb-4">十神详解</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          十神是八字命理的核心概念，通过日干（代表自己）与其他干支的五行生克关系来定义。
          十神分为：正官、七杀、正印、偏印、正财、偏财、食神、伤官、比肩、劫财。
        </p>
        <p className="text-muted-foreground leading-relaxed">
          以下解读侧重于心理与行为模式，帮助你从现代视角理解传统命理智慧。
          请记住，每个人的命盘都是十神的组合，单一十神的特质会受到整体格局的调和。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {shiShen.map((shen) => (
          <Card key={shen.name} className="bg-card border-border hover:border-primary/30 transition-colors">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 ${shen.bgColor} rounded-xl flex items-center justify-center`}>
                  <span className={`text-2xl font-serif font-bold ${shen.color}`}>{shen.short}</span>
                </div>
                <div>
                  <CardTitle className="text-lg">{shen.name}</CardTitle>
                  <p className="text-xs text-muted-foreground">{shen.relation}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {shen.keywords.map((kw) => (
                  <span key={kw} className={`px-2 py-1 ${shen.bgColor} ${shen.color} text-xs rounded-full`}>
                    {kw}
                  </span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {shen.description}
              </p>
              <div className="p-3 bg-muted/50 rounded-lg">
                <p className="text-xs text-muted-foreground italic">
                  💡 {shen.psychology}
                </p>
              </div>
              <div className="flex gap-4 pt-2 border-t border-border text-xs">
                <div className="flex-1">
                  <span className="text-primary">优势：</span>
                  <span className="text-muted-foreground">{shen.pros}</span>
                </div>
                <div className="flex-1">
                  <span className="text-vermillion">留意：</span>
                  <span className="text-muted-foreground">{shen.cons}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
