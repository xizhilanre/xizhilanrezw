import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { CompassIcon, StarIcon } from "../icons/BaguaIcon";

export const ToolsPreview = () => {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      <div className="container px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-medium tracking-wider">在线工具</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-4">
            生成你的<span className="text-gradient-gold">专属命盘</span>
          </h2>
          <p className="text-muted-foreground">
            输入出生信息，即刻获得传统命理分析。所有解读基于古籍理论，供文化参考。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* 八字排盘卡片 */}
          <div className="group relative p-8 bg-background rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 overflow-hidden card-hover">
            {/* 背景装饰 */}
            <div className="absolute -top-20 -right-20 w-40 h-40 opacity-5 group-hover:opacity-10 transition-opacity">
              <CompassIcon className="w-full h-full text-primary" />
            </div>

            <div className="relative z-10">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CompassIcon className="w-8 h-8 text-primary" />
              </div>

              <h3 className="text-2xl font-serif font-bold mb-3">八字排盘</h3>
              <p className="text-muted-foreground mb-6">
                根据出生年月日时，排列四柱八字，分析天干地支组合，解读十神关系与五行强弱。
              </p>

              {/* 四柱预览 */}
              <div className="grid grid-cols-4 gap-2 mb-6">
                {["年柱", "月柱", "日柱", "时柱"].map((pillar) => (
                  <div
                    key={pillar}
                    className="p-3 bg-muted rounded-lg text-center"
                  >
                    <div className="text-xs text-muted-foreground mb-1">{pillar}</div>
                    <div className="text-lg font-serif text-primary">甲</div>
                    <div className="text-lg font-serif">子</div>
                  </div>
                ))}
              </div>

              <Button className="w-full group/btn bg-gradient-gold text-primary-foreground hover:opacity-90">
                开始排盘
                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* 紫微斗数卡片 */}
          <div className="group relative p-8 bg-background rounded-2xl border border-border hover:border-star-purple/50 transition-all duration-500 overflow-hidden card-hover">
            {/* 背景装饰 */}
            <div className="absolute -top-20 -right-20 w-40 h-40 opacity-5 group-hover:opacity-10 transition-opacity">
              <StarIcon className="w-full h-full text-star-purple" />
            </div>

            <div className="relative z-10">
              <div className="w-16 h-16 bg-star-purple/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <StarIcon className="w-8 h-8 text-star-purple" />
              </div>

              <h3 className="text-2xl font-serif font-bold mb-3">紫微斗数</h3>
              <p className="text-muted-foreground mb-6">
                排列十二宫位命盘，解读十四主星与四化飞星，深入分析人生各领域能量分布。
              </p>

              {/* 十二宫预览 */}
              <div className="relative w-full aspect-square max-w-[200px] mx-auto mb-6">
                <div className="absolute inset-0 rounded-full border border-border" />
                <div className="absolute inset-4 rounded-full border border-border/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-xs text-muted-foreground">命宫</div>
                    <div className="text-lg font-serif text-star-purple">紫微</div>
                  </div>
                </div>
                {/* 宫位指示点 */}
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-star-purple/30 rounded-full"
                    style={{
                      top: `${50 - 45 * Math.cos((i * 30 * Math.PI) / 180)}%`,
                      left: `${50 + 45 * Math.sin((i * 30 * Math.PI) / 180)}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                ))}
              </div>

              <Button className="w-full group/btn bg-star-purple text-white hover:bg-star-purple/90">
                开始排盘
                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>

        {/* 提示 */}
        <p className="text-center text-sm text-muted-foreground mt-8 max-w-xl mx-auto">
          <span className="text-primary">*</span> 所有命盘分析基于传统命理理论，仅供文化学习与娱乐参考，请理性看待。
        </p>
      </div>
    </section>
  );
};
