import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Crown, Cog, Sun, Moon, Coins, Swords, Shield, Heart, Sparkles, Flame, Zap, BookOpen, Users, Wind } from "lucide-react";

const ziweiStars = [
  {
    name: "紫微",
    icon: Crown,
    group: "紫微星系",
    color: "text-primary",
    bgColor: "bg-primary/10",
    keywords: ["尊贵", "领导", "自尊", "气度", "主观"],
    brief: "帝王之星，气度非凡，天生领袖气质，但需防高处不胜寒",
    traits: "紫微为北斗主星，象征尊贵与权威。紫微坐命者气质华贵，有领导魅力，重视面子与尊严。适合管理、决策类工作。",
    psychology: "内心渴望被尊重与认可，有责任感但也可能过于自负。学习放下身段，才能真正赢得人心。",
  },
  {
    name: "天机",
    icon: Cog,
    group: "紫微星系",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    keywords: ["灵动", "善变", "谋略", "敏感", "多虑"],
    brief: "智慧之星，思维敏捷，适合策划教育，忌思虑过度",
    traits: "天机为智慧之星，主思考与变动。天机坐命者聪明灵活，善于分析，但想法多变。适合策划、教育、咨询类工作。",
    psychology: "内心敏感多思，喜欢分析问题但容易陷入思虑。学习在思考与行动之间找到平衡。",
  },
  {
    name: "太阳",
    icon: Sun,
    group: "紫微星系",
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
    keywords: ["热情", "博爱", "付出", "光明", "消耗"],
    brief: "光明之星，热情慷慨，乐于付出，但需防过度消耗自己",
    traits: "太阳为光明之星，主热情与付出。太阳坐命者心胸开阔，乐于助人，有公益心。适合服务、教育、公共事务类工作。",
    psychology: "内心有照亮他人的使命感，但要学习也让别人照顾自己，避免燃尽。",
  },
  {
    name: "武曲",
    icon: Coins,
    group: "紫微星系",
    color: "text-amber-400",
    bgColor: "bg-amber-400/10",
    keywords: ["财星", "刚毅", "果断", "务实", "孤独"],
    brief: "财帛之星，果断务实，理财能力强，但可能显得过于强势",
    traits: "武曲为财帛之星，主财富与决断。武曲坐命者性格刚毅，做事果断，有理财天赋。适合金融、军警、商业类工作。",
    psychology: "内心重视实际成果，喜欢用数字说话。学习在效率之外也关注人情温度。",
  },
  {
    name: "天同",
    icon: Heart,
    group: "紫微星系",
    color: "text-pink-400",
    bgColor: "bg-pink-400/10",
    keywords: ["温和", "享福", "随和", "懒散", "情感"],
    brief: "福星之星，温和有福，人缘极佳，但需防过于安逸",
    traits: "天同为福德之星，主享受与和谐。天同坐命者温和亲切，人缘好，知足常乐。适合服务、艺术、休闲类工作。",
    psychology: "内心追求舒适与和谐，不喜欢冲突。学习在舒适区之外也能保持动力。",
  },
  {
    name: "廉贞",
    icon: Flame,
    group: "紫微星系",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    keywords: ["情感", "复杂", "魅力", "桃花", "极端"],
    brief: "情感之星，魅力十足，感情丰富，需疏导情绪避免极端",
    traits: "廉贞为次桃花星，主情感与复杂。廉贞坐命者情感丰富，有个人魅力，但内心复杂。适合艺术、公关、演艺类工作。",
    psychology: "内心情感强烈，渴望深度连接。学习管理情绪波动，避免走极端。",
  },
  {
    name: "天府",
    icon: Shield,
    group: "天府星系",
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
    keywords: ["稳重", "保守", "储蓄", "包容", "安全"],
    brief: "库藏之星，稳重可靠，善于守成，但可能过于保守",
    traits: "天府为南斗主星，主稳定与储蓄。天府坐命者稳重大方，善于理财守成，重视安全感。适合金融、行政、管理类工作。",
    psychology: "内心重视安全与稳定，喜欢有计划地生活。学习在稳健之余也接受一些变化。",
  },
  {
    name: "太阴",
    icon: Moon,
    group: "天府星系",
    color: "text-indigo-400",
    bgColor: "bg-indigo-400/10",
    keywords: ["细腻", "内敛", "艺术", "母性", "情绪"],
    brief: "阴柔之星，情感细腻，适合艺术服务，需注意情绪管理",
    traits: "太阴为阴柔之星，主细腻与内省。太阴坐命者感受力强，有艺术天赋，心思缜密。适合艺术、护理、心理类工作。",
    psychology: "内心敏感柔软，容易受环境影响。学习建立情绪边界，保护自己的能量。",
  },
  {
    name: "贪狼",
    icon: Sparkles,
    group: "天府星系",
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    keywords: ["欲望", "多才", "桃花", "变化", "贪婪"],
    brief: "欲望之星，多才多艺，人缘极佳，需防贪多嚼不烂",
    traits: "贪狼为桃花之星，主欲望与才艺。贪狼坐命者多才多艺，社交能力强，兴趣广泛。适合演艺、销售、创意类工作。",
    psychology: "内心渴望丰富多彩的人生，害怕无聊。学习专注，在广度与深度之间找平衡。",
  },
  {
    name: "巨门",
    icon: BookOpen,
    group: "天府星系",
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
    keywords: ["口才", "是非", "研究", "质疑", "口舌"],
    brief: "言语之星，口才出众，适合演说谈判，需防口舌是非",
    traits: "巨门为暗曜，主言语与是非。巨门坐命者口才好，善于表达与分析，但可能招惹是非。适合律师、主持、教学类工作。",
    psychology: "内心喜欢追问「为什么」，有批判性思维。学习在质疑之余也给予肯定。",
  },
  {
    name: "天相",
    icon: Users,
    group: "天府星系",
    color: "text-teal-400",
    bgColor: "bg-teal-400/10",
    keywords: ["辅佐", "服务", "人缘", "依赖", "协调"],
    brief: "贵人之星，善于辅佐协调，人缘好，但需防过度依赖",
    traits: "天相为印星，主服务与辅佐。天相坐命者待人亲和，善于协调人际关系，有服务精神。适合秘书、人事、服务类工作。",
    psychology: "内心喜欢被需要的感觉，善于照顾他人。学习也要照顾好自己的需求。",
  },
  {
    name: "天梁",
    icon: Shield,
    group: "天府星系",
    color: "text-slate-400",
    bgColor: "bg-slate-400/10",
    keywords: ["保护", "正义", "孤高", "清贵", "逢凶化吉"],
    brief: "荫星，遇难呈祥，适合医疗慈善，但可能显得孤傲",
    traits: "天梁为荫星，主保护与化解。天梁坐命者正义感强，有贵人运，遇事能化险为夷。适合医疗、慈善、顾问类工作。",
    psychology: "内心有保护弱者的使命感，但可能因此显得高高在上。学习平等相待。",
  },
  {
    name: "七杀",
    icon: Swords,
    group: "天府星系",
    color: "text-red-400",
    bgColor: "bg-red-400/10",
    keywords: ["魄力", "开创", "孤独", "压力", "革命"],
    brief: "将星，魄力十足，适合开创事业，但需学会与人合作",
    traits: "七杀为将星，主魄力与开创。七杀坐命者有胆识，敢于冒险，适合在压力中成长。适合军警、创业、运动类工作。",
    psychology: "内心有征服世界的欲望，不甘平庸。学习在独立之余也接受帮助与合作。",
  },
  {
    name: "破军",
    icon: Wind,
    group: "天府星系",
    color: "text-violet-400",
    bgColor: "bg-violet-400/10",
    keywords: ["变动", "破坏", "开创", "冲动", "不安定"],
    brief: "变动之星，破旧立新，适合改革创新，需防过度动荡",
    traits: "破军为耗星，主变动与破坏。破军坐命者不安于现状，喜欢改变与创新，人生多起伏。适合改革、创业、探险类工作。",
    psychology: "内心渴望突破与改变，害怕一成不变。学习在变动中也能建立稳定的根基。",
  },
];

export const ZiweiStarsSection = () => {
  return (
    <div className="space-y-8">
      <div className="max-w-3xl">
        <h2 className="text-2xl font-serif font-bold mb-4">十四主星</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          紫微斗数以十四颗主星为核心，分为「紫微星系」和「天府星系」两大系统。
          主星落入不同宫位，会展现不同面向的人生能量。
        </p>
        <p className="text-muted-foreground leading-relaxed">
          以下解读聚焦于每颗星的核心特质与心理模式，帮助你理解紫微斗数的基本框架。
        </p>
      </div>

      {/* 紫微星系 */}
      <div>
        <h3 className="text-lg font-medium text-primary mb-4 flex items-center gap-2">
          <Crown className="w-5 h-5" />
          紫微星系（北斗）
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ziweiStars.filter(s => s.group === "紫微星系").map((star) => (
            <StarCard key={star.name} star={star} />
          ))}
        </div>
      </div>

      {/* 天府星系 */}
      <div>
        <h3 className="text-lg font-medium text-jade mb-4 flex items-center gap-2">
          <Shield className="w-5 h-5" />
          天府星系（南斗）
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ziweiStars.filter(s => s.group === "天府星系").map((star) => (
            <StarCard key={star.name} star={star} />
          ))}
        </div>
      </div>
    </div>
  );
};

const StarCard = ({ star }: { star: typeof ziweiStars[0] }) => {
  const Icon = star.icon;
  return (
    <Card className="bg-card border-border hover:border-primary/30 transition-colors">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 ${star.bgColor} rounded-lg flex items-center justify-center`}>
            <Icon className={`w-5 h-5 ${star.color}`} />
          </div>
          <CardTitle className="text-base">{star.name}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex flex-wrap gap-1">
          {star.keywords.map((kw) => (
            <span key={kw} className={`px-1.5 py-0.5 ${star.bgColor} ${star.color} text-[10px] rounded`}>
              {kw}
            </span>
          ))}
        </div>
        <p className={`text-sm font-medium ${star.color}`}>
          {star.brief}
        </p>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {star.traits}
        </p>
        <div className="pt-2 border-t border-border">
          <p className="text-xs text-muted-foreground italic">
            💡 {star.psychology}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
