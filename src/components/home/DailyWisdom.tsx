import { useState, useEffect } from "react";
import { Sparkles, RefreshCw } from "lucide-react";
import { Button } from "../ui/button";

const wisdomList = [
  { content: "甲木日主喜见癸水，如春雨润木，生机盎然。", category: "八字" },
  { content: "紫微坐命，气质华贵，天生具有领导魅力。", category: "紫微" },
  { content: "食神生财，以才华换取财富，最宜从事创意行业。", category: "八字" },
  { content: "破军星在迁移宫，一生多变动，宜拥抱变化。", category: "紫微" },
  { content: "正官透干，规则意识强，适合体制内发展。", category: "八字" },
  { content: "天机星化忌，思虑过重，宜修身养性。", category: "紫微" },
  { content: "七杀有制，压力即动力，适合开创性事业。", category: "八字" },
  { content: "太阴在命宫，情感细腻，适合艺术与服务行业。", category: "紫微" },
  { content: "伤官配印，才华横溢且有分寸，易成大器。", category: "八字" },
  { content: "廉贞星主情感丰富，宜疏导情绪，避免极端。", category: "紫微" },
  { content: "日支为正财，婚姻中重视实际与稳定。", category: "八字" },
  { content: "巨门星化权，言辞有力，适合演说与谈判。", category: "紫微" },
];

export const DailyWisdom = () => {
  const [wisdom, setWisdom] = useState(wisdomList[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const getRandomWisdom = () => {
    setIsAnimating(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * wisdomList.length);
      setWisdom(wisdomList[randomIndex]);
      setIsAnimating(false);
    }, 300);
  };

  useEffect(() => {
    // 页面加载时随机选择一条
    getRandomWisdom();
  }, []);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-2xl mx-auto">
          <div className="relative p-8 bg-gradient-card rounded-2xl border border-border overflow-hidden">
            {/* 装饰 */}
            <div className="absolute top-4 right-4 opacity-10">
              <Sparkles className="w-24 h-24 text-primary" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">每日一悟</span>
                <span className="px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded ml-2">
                  {wisdom.category}
                </span>
              </div>

              <p
                className={`text-lg md:text-xl font-serif text-foreground leading-relaxed transition-all duration-300 ${
                  isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
                }`}
              >
                「{wisdom.content}」
              </p>

              <div className="mt-6 flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  命理小知识，助你理解自己
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={getRandomWisdom}
                  className="group"
                  disabled={isAnimating}
                >
                  <RefreshCw
                    className={`w-4 h-4 mr-2 transition-transform ${
                      isAnimating ? "animate-spin" : "group-hover:rotate-180"
                    }`}
                  />
                  换一条
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
