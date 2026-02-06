import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Coins, Heart, Home, Briefcase, Users, MapPin, HeartPulse, Wallet, Baby, Sparkles, Building } from "lucide-react";

const palaces = [
  {
    name: "命宫",
    icon: User,
    color: "text-primary",
    bgColor: "bg-primary/10",
    position: "本命核心",
    keywords: ["性格", "潜能", "人生主轴"],
    description: "命宫是整张命盘的核心，代表一个人的本质性格、天赋潜能与人生主轴方向。命宫主星决定了你的基本人格底色，是解读命盘的起点。",
    questions: ["我是一个怎样的人？", "我的核心优势在哪里？", "我这一生的主旋律是什么？"],
  },
  {
    name: "兄弟宫",
    icon: Users,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    position: "命宫逆时针第一宫",
    keywords: ["手足", "同辈", "合作伙伴"],
    description: "兄弟宫代表与兄弟姐妹、同辈朋友的关系，也延伸到同事、合作伙伴。这个宫位反映你在平辈关系中的互动模式与资源。",
    questions: ["我与兄弟姐妹关系如何？", "我在团队合作中扮演什么角色？", "同辈朋友能给我什么帮助？"],
  },
  {
    name: "夫妻宫",
    icon: Heart,
    color: "text-pink-400",
    bgColor: "bg-pink-400/10",
    position: "命宫逆时针第二宫",
    keywords: ["婚姻", "亲密关系", "伴侣类型"],
    description: "夫妻宫代表婚姻与亲密关系。它揭示的不是「会嫁/娶谁」，而是你在亲密关系中的行为模式、需求与课题。",
    questions: ["我在感情中是什么样的人？", "我需要什么样的伴侣关系？", "婚姻中我容易遇到什么挑战？"],
  },
  {
    name: "子女宫",
    icon: Baby,
    color: "text-green-400",
    bgColor: "bg-green-400/10",
    position: "命宫逆时针第三宫",
    keywords: ["子女", "创造力", "桃花"],
    description: "子女宫代表与子女的缘分与互动，也延伸到创造力、投资、桃花运等「孕育」出来的事物。",
    questions: ["我与子女关系如何？", "我的创造力表现在哪里？", "我的桃花运怎样？"],
  },
  {
    name: "财帛宫",
    icon: Wallet,
    color: "text-amber-400",
    bgColor: "bg-amber-400/10",
    position: "命宫逆时针第四宫",
    keywords: ["财运", "赚钱方式", "金钱观"],
    description: "财帛宫代表财富运势与赚钱能力。它揭示你适合的理财方式、赚钱模式，以及对金钱的态度。",
    questions: ["我适合怎样赚钱？", "我的财运如何？", "我对金钱有什么信念？"],
  },
  {
    name: "疾厄宫",
    icon: HeartPulse,
    color: "text-red-400",
    bgColor: "bg-red-400/10",
    position: "命宫逆时针第五宫",
    keywords: ["健康", "身体弱点", "抗压能力"],
    description: "疾厄宫代表身体健康与抗压能力。它指出需要关注的身体部位，以及面对压力时的反应模式。",
    questions: ["我需要特别注意哪些健康问题？", "我的抗压能力如何？", "什么样的生活方式对我更好？"],
  },
  {
    name: "迁移宫",
    icon: MapPin,
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
    position: "命宫对宫",
    keywords: ["外出", "变动", "外在表现"],
    description: "迁移宫代表出外运、变动运与外在社交形象。它与命宫相对，命宫是内在自我，迁移宫是展现给外界的形象。",
    questions: ["我适合在外发展吗？", "别人眼中的我是什么样？", "我的人生变动多吗？"],
  },
  {
    name: "仆役宫",
    icon: Users,
    color: "text-slate-400",
    bgColor: "bg-slate-400/10",
    position: "迁移宫逆时针第一宫",
    keywords: ["下属", "朋友圈", "人际资源"],
    description: "仆役宫（又称交友宫）代表与下属、朋友的关系，以及人际网络带来的资源。这个宫位反映你的社交圈质量。",
    questions: ["我的朋友圈质量如何？", "下属/员工对我是帮助还是拖累？", "我能从人脉中获得什么？"],
  },
  {
    name: "官禄宫",
    icon: Briefcase,
    color: "text-indigo-400",
    bgColor: "bg-indigo-400/10",
    position: "迁移宫逆时针第二宫",
    keywords: ["事业", "工作", "社会地位"],
    description: "官禄宫代表事业发展与社会地位。它揭示适合的职业方向、工作态度，以及在事业上可能达到的成就。",
    questions: ["我适合什么样的工作？", "我的事业发展潜力如何？", "我在工作中容易遇到什么？"],
  },
  {
    name: "田宅宫",
    icon: Home,
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
    position: "迁移宫逆时针第三宫",
    keywords: ["房产", "家庭环境", "内心归属"],
    description: "田宅宫代表不动产、家庭环境与内心的安定感。它反映你对「家」的态度，以及置产运势。",
    questions: ["我的置产运如何？", "我的原生家庭给了我什么影响？", "什么样的环境让我感到安心？"],
  },
  {
    name: "福德宫",
    icon: Sparkles,
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    position: "迁移宫逆时针第四宫",
    keywords: ["精神生活", "兴趣爱好", "内在满足"],
    description: "福德宫代表精神层面的满足与内在幸福感。它揭示你的兴趣爱好、精神追求，以及获得内心平静的方式。",
    questions: ["什么让我感到真正快乐？", "我的精神世界丰富吗？", "我如何获得内在的满足感？"],
  },
  {
    name: "父母宫",
    icon: Building,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    position: "迁移宫逆时针第五宫",
    keywords: ["父母", "长辈", "家庭教育"],
    description: "父母宫代表与父母、长辈的关系，以及从家庭教育中获得的资源与影响。它也延伸到与权威人物的互动模式。",
    questions: ["我与父母的关系如何？", "我从原生家庭继承了什么？", "我与权威人物的互动模式是什么？"],
  },
];

export const TwelvePalacesSection = () => {
  return (
    <div className="space-y-8">
      <div className="max-w-3xl">
        <h2 className="text-2xl font-serif font-bold mb-4">十二宫位</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          紫微斗数命盘由十二个宫位组成，每个宫位代表人生的一个领域。
          主星落入不同宫位，会在该领域展现其特质。理解十二宫位，是解读命盘的基础。
        </p>
        <p className="text-muted-foreground leading-relaxed">
          十二宫位从命宫开始，逆时针排列。每个宫位都有其对宫，形成六组对应关系，
          如命宫与迁移宫、夫妻宫与官禄宫等。
        </p>
      </div>

      {/* 宫位图示 */}
      <div className="flex justify-center py-8">
        <div className="relative w-80 h-80">
          {/* 中心 */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-muted/50 border border-border flex items-center justify-center">
              <span className="text-sm text-muted-foreground text-center">命盘<br />中心</span>
            </div>
          </div>
          {/* 十二宫位点 */}
          {palaces.map((palace, i) => {
            const angle = (i * 30 - 90) * (Math.PI / 180);
            const radius = 130;
            const x = 50 + (radius / 160) * 50 * Math.cos(angle);
            const y = 50 + (radius / 160) * 50 * Math.sin(angle);
            const Icon = palace.icon;
            return (
              <div
                key={palace.name}
                className={`absolute w-12 h-12 ${palace.bgColor} rounded-full flex items-center justify-center border border-border hover:scale-110 transition-transform cursor-pointer group`}
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: "translate(-50%, -50%)",
                }}
                title={palace.name}
              >
                <Icon className={`w-5 h-5 ${palace.color}`} />
                <div className="absolute -bottom-6 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {palace.name}
                </div>
              </div>
            );
          })}
          {/* 连接线 */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" className="text-border" strokeWidth="0.5" />
          </svg>
        </div>
      </div>

      {/* 宫位详解 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {palaces.map((palace) => {
          const Icon = palace.icon;
          return (
            <Card key={palace.name} className="bg-card border-border hover:border-primary/30 transition-colors">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 ${palace.bgColor} rounded-lg flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${palace.color}`} />
                  </div>
                  <div>
                    <CardTitle className="text-base">{palace.name}</CardTitle>
                    <p className="text-xs text-muted-foreground">{palace.position}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {palace.keywords.map((kw) => (
                    <span key={kw} className={`px-2 py-0.5 ${palace.bgColor} ${palace.color} text-xs rounded-full`}>
                      {kw}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {palace.description}
                </p>
                <div className="pt-2 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-1">这个宫位回答的问题：</p>
                  <ul className="text-xs text-muted-foreground space-y-0.5">
                    {palace.questions.map((q, i) => (
                      <li key={i} className="flex items-start gap-1">
                        <span className={palace.color}>•</span>
                        {q}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
