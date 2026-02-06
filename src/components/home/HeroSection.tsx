import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { BaguaIcon, CompassIcon, StarIcon } from "../icons/BaguaIcon";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-starfield opacity-50" />
      <div className="absolute inset-0 bagua-pattern" />
      
      {/* 浮动装饰元素 */}
      <div className="absolute top-20 left-10 w-32 h-32 opacity-20 animate-float">
        <BaguaIcon className="w-full h-full text-primary" />
      </div>
      <div className="absolute bottom-20 right-10 w-24 h-24 opacity-15 animate-float animate-delay-500">
        <CompassIcon className="w-full h-full text-gold" />
      </div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 opacity-10 animate-float animate-delay-300">
        <StarIcon className="w-full h-full text-vermillion" />
      </div>
      
      {/* 光晕效果 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-radial from-star-purple/10 via-transparent to-transparent pointer-events-none blur-3xl" />

      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* 徽章 */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted/50 backdrop-blur-sm rounded-full border border-border mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">传统智慧 × 现代视角</span>
          </div>

          {/* 主标题 */}
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-fade-in-up animate-delay-100">
            <span className="text-gradient-gold">玄枢阁</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 font-serif tracking-wider mb-4 animate-fade-in-up animate-delay-200">
            探索千年智慧，读懂真实自己
          </p>

          {/* Hero 文案 */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up animate-delay-300">
            命理学是古人观察天地运行、总结人生规律的智慧结晶。
            它不是预言未来的水晶球，而是一面帮助你认识自我、理解人生节奏的明镜。
            在玄枢阁，我们以现代视角解读传统文化，助你发现内在潜能，从容面对人生选择。
          </p>

          {/* CTA 按钮 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animate-delay-500">
            <Button
              size="lg"
              className="group bg-gradient-gold text-primary-foreground hover:opacity-90 px-8 py-6 text-lg shadow-gold"
            >
              <CompassIcon className="w-5 h-5 mr-2" />
              开始八字排盘
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg border-primary/30 hover:bg-primary/10 hover:border-primary"
            >
              <StarIcon className="w-5 h-5 mr-2" />
              探索紫微斗数
            </Button>
          </div>

          {/* 统计数据 */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto animate-fade-in-up animate-delay-500">
            {[
              { value: "2000+", label: "年传承" },
              { value: "14", label: "紫微主星" },
              { value: "10", label: "八字十神" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gradient-gold mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 底部渐变 */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
