import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Shield, Award, AlertTriangle } from "lucide-react";

const siHua = [
  {
    name: "化禄",
    icon: TrendingUp,
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
    symbol: "禄",
    meaning: "财禄、机会、顺遂",
    description: "化禄为吉化，代表财富、机会与顺利。星曜化禄后，其正面能量增强，带来财运、人缘或机遇。化禄落入的宫位，往往是人生中较为顺遂、资源丰富的领域。",
    interpretation: "化禄不等于「必然发财」，而是代表该领域容易获得资源与机会。关键在于是否能把握机会，将潜力转化为实际成果。",
    examples: [
      "天机化禄：思维敏捷，策划能力带来机会",
      "武曲化禄：理财能力强，财运亨通",
      "太阳化禄：人缘好，贵人运旺",
    ],
  },
  {
    name: "化权",
    icon: Shield,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    symbol: "权",
    meaning: "权力、掌控、主导",
    description: "化权为吉化，代表权力、掌控与影响力。星曜化权后，增强其主导能力与决断力。化权落入的宫位，往往是人生中需要自己做主、承担责任的领域。",
    interpretation: "化权代表「有能力掌控」，但同时也意味着需要承担相应的责任与压力。权力越大，责任越重。",
    examples: [
      "紫微化权：领导能力强，适合管理岗位",
      "巨门化权：言辞有力，适合演说与谈判",
      "廉贞化权：个人魅力强，有掌控局面的能力",
    ],
  },
  {
    name: "化科",
    icon: Award,
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    symbol: "科",
    meaning: "名声、贵人、考试",
    description: "化科为吉化，代表名声、学业与贵人。星曜化科后，增强其文雅与名望。化科落入的宫位，往往是人生中容易获得认可、有贵人相助的领域。",
    interpretation: "化科代表「被看见、被认可」的机会，也与考试、证照、学术成就有关。但名声需要实力支撑，否则可能虚有其表。",
    examples: [
      "文昌化科：学业优秀，考试运佳",
      "天同化科：人缘好，容易获得帮助",
      "太阴化科：有艺术天赋，名声清雅",
    ],
  },
  {
    name: "化忌",
    icon: AlertTriangle,
    color: "text-vermillion",
    bgColor: "bg-vermillion/10",
    symbol: "忌",
    meaning: "阻碍、执着、课题",
    description: "化忌为凶化，代表阻碍、执着与人生课题。星曜化忌后，其负面能量被激发，可能带来困难或纠结。化忌落入的宫位，往往是人生中需要特别留意、反复学习的领域。",
    interpretation: "化忌不是「注定不幸」，而是指出需要修炼的功课。正视化忌，反而能将阻力转化为成长的动力。逃避只会让问题反复出现。",
    examples: [
      "天机化忌：思虑过重，容易焦虑内耗",
      "太阳化忌：付出过多却得不到回报的感觉",
      "巨门化忌：容易有口舌是非，言语招祸",
    ],
  },
];

export const SiHuaSection = () => {
  return (
    <div className="space-y-8">
      <div className="max-w-3xl">
        <h2 className="text-2xl font-serif font-bold mb-4">四化星</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          「四化」是紫微斗数的核心概念之一，指的是化禄、化权、化科、化忌四种星曜变化。
          四化由年干（出生年份的天干）决定，使特定星曜发生质变，影响整体命盘格局。
        </p>
        <p className="text-muted-foreground leading-relaxed">
          四化就像是给星曜加上「滤镜」——化禄、化权、化科增强正面能量，化忌则揭示需要修炼的课题。
          理解四化，是解读紫微命盘的关键。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {siHua.map((hua) => (
          <Card key={hua.name} className={`bg-card border-border hover:border-primary/30 transition-colors ${hua.name === "化忌" ? "md:col-span-2" : ""}`}>
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 ${hua.bgColor} rounded-xl flex items-center justify-center`}>
                  <hua.icon className={`w-7 h-7 ${hua.color}`} />
                </div>
                <div>
                  <CardTitle className="text-xl">{hua.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{hua.meaning}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                {hua.description}
              </p>
              
              <div className={`p-4 ${hua.bgColor} rounded-lg`}>
                <p className={`text-sm ${hua.color} font-medium mb-2`}>现代解读</p>
                <p className="text-sm text-muted-foreground">
                  {hua.interpretation}
                </p>
              </div>

              <div>
                <p className="text-sm font-medium mb-2">应用示例：</p>
                <ul className="space-y-1">
                  {hua.examples.map((ex, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className={hua.color}>•</span>
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 四化表 */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-lg">年干四化速查表</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-2 px-3 text-left font-medium">年干</th>
                  <th className="py-2 px-3 text-left font-medium text-emerald-400">化禄</th>
                  <th className="py-2 px-3 text-left font-medium text-blue-400">化权</th>
                  <th className="py-2 px-3 text-left font-medium text-purple-400">化科</th>
                  <th className="py-2 px-3 text-left font-medium text-vermillion">化忌</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50"><td className="py-2 px-3 font-medium text-foreground">甲</td><td className="py-2 px-3">廉贞</td><td className="py-2 px-3">破军</td><td className="py-2 px-3">武曲</td><td className="py-2 px-3">太阳</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3 font-medium text-foreground">乙</td><td className="py-2 px-3">天机</td><td className="py-2 px-3">天梁</td><td className="py-2 px-3">紫微</td><td className="py-2 px-3">太阴</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3 font-medium text-foreground">丙</td><td className="py-2 px-3">天同</td><td className="py-2 px-3">天机</td><td className="py-2 px-3">文昌</td><td className="py-2 px-3">廉贞</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3 font-medium text-foreground">丁</td><td className="py-2 px-3">太阴</td><td className="py-2 px-3">天同</td><td className="py-2 px-3">天机</td><td className="py-2 px-3">巨门</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3 font-medium text-foreground">戊</td><td className="py-2 px-3">贪狼</td><td className="py-2 px-3">太阴</td><td className="py-2 px-3">右弼</td><td className="py-2 px-3">天机</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3 font-medium text-foreground">己</td><td className="py-2 px-3">武曲</td><td className="py-2 px-3">贪狼</td><td className="py-2 px-3">天梁</td><td className="py-2 px-3">文曲</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3 font-medium text-foreground">庚</td><td className="py-2 px-3">太阳</td><td className="py-2 px-3">武曲</td><td className="py-2 px-3">太阴</td><td className="py-2 px-3">天同</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3 font-medium text-foreground">辛</td><td className="py-2 px-3">巨门</td><td className="py-2 px-3">太阳</td><td className="py-2 px-3">文曲</td><td className="py-2 px-3">文昌</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3 font-medium text-foreground">壬</td><td className="py-2 px-3">天梁</td><td className="py-2 px-3">紫微</td><td className="py-2 px-3">左辅</td><td className="py-2 px-3">武曲</td></tr>
                <tr><td className="py-2 px-3 font-medium text-foreground">癸</td><td className="py-2 px-3">破军</td><td className="py-2 px-3">巨门</td><td className="py-2 px-3">太阴</td><td className="py-2 px-3">贪狼</td></tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
