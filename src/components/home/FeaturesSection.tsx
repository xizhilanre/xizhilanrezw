import { Compass, Star, BookOpen, Calendar, Users, Lightbulb } from "lucide-react";
import { BaguaIcon } from "../icons/BaguaIcon";

const features = [
  {
    icon: Compass,
    title: "八字排盘",
    description: "输入出生时间，即刻生成四柱命盘，解析年月日时八字与十神关系",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Star,
    title: "紫微斗数",
    description: "十二宫位与十四主星的完整命盘，探索人生各领域的能量分布",
    color: "text-star-purple",
    bgColor: "bg-star-purple/10",
  },
  {
    icon: BookOpen,
    title: "深度文章",
    description: "去玄学化的现代解读，将传统命理与心理学、职业规划相结合",
    color: "text-jade",
    bgColor: "bg-jade/10",
  },
  {
    icon: Calendar,
    title: "节气运势",
    description: "结合二十四节气与干支能量，提供当下时令的生活参考",
    color: "text-vermillion",
    bgColor: "bg-vermillion/10",
  },
  {
    icon: Lightbulb,
    title: "术语知识库",
    description: "天干地支、十神、主星等核心概念的系统化解释",
    color: "text-gold",
    bgColor: "bg-gold/10",
  },
  {
    icon: Users,
    title: "读者社区",
    description: "分享学习心得，探讨命理文化，共同成长的兴趣空间",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5">
        <BaguaIcon className="w-full h-full text-primary" />
      </div>

      <div className="container px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-medium tracking-wider">功能特色</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-4">
            古老智慧，<span className="text-gradient-gold">现代呈现</span>
          </h2>
          <p className="text-muted-foreground">
            将两千年的命理文化以现代方式重新演绎，让每个人都能轻松入门、深度探索
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 bg-background rounded-xl border border-border hover:border-primary/30 transition-all duration-300 card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
