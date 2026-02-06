import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Compass, Star, Users, Heart, Lightbulb } from "lucide-react";
import { BaguaIcon } from "@/components/icons/BaguaIcon";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-16">
        {/* Hero */}
        <section className="py-16 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-starfield opacity-30" />
          <div className="container px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-muted/50 backdrop-blur-sm rounded-full border border-border mb-6">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">关于我们</span>
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                关于<span className="text-gradient-gold">玄枢阁</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                探索千年智慧，读懂真实自己
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container px-4 max-w-4xl mx-auto space-y-12">
            {/* 项目介绍 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BaguaIcon className="w-6 h-6 text-primary" />
                  项目介绍
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  玄枢阁是一个专注于中华传统命理文化的博客平台，致力于以现代视角解读古老的命理智慧。
                  我们相信，命理学不是预言未来的水晶球，而是一面帮助你认识自我、理解人生节奏的明镜。
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  在这里，你可以学习八字排盘、探索紫微斗数、阅读深度文章，通过系统化的知识库建立完整的命理知识体系。
                  我们坚持去玄学化、重理解的原则，将传统命理与心理学、职业规划等现代学科相结合，让每个人都能轻松入门、深度探索。
                </p>
              </CardContent>
            </Card>

            {/* 核心价值 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-6 h-6 text-primary" />
                  核心价值
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      icon: Lightbulb,
                      title: "去玄学化",
                      description: "以理性、科学的态度解读传统命理文化，去除迷信色彩",
                    },
                    {
                      icon: BookOpen,
                      title: "系统学习",
                      description: "从基础知识到深度应用，建立完整的命理知识体系",
                    },
                    {
                      icon: Compass,
                      title: "实用工具",
                      description: "提供八字排盘、紫微斗数等在线工具，方便实践应用",
                    },
                    {
                      icon: Star,
                      title: "现代视角",
                      description: "结合心理学、职业规划等现代学科，让传统智慧焕发新意",
                    },
                  ].map((value) => (
                    <div key={value.title} className="p-4 bg-muted rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <value.icon className="w-5 h-5 text-primary" />
                        <h3 className="font-medium">{value.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 功能特色 */}
            <Card>
              <CardHeader>
                <CardTitle>功能特色</CardTitle>
                <CardDescription>玄枢阁提供的核心功能</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "八字排盘",
                      description: "输入出生时间，自动生成四柱八字，解析十神关系与五行分布",
                    },
                    {
                      title: "紫微斗数",
                      description: "排列十二宫位命盘，解读十四主星与四化飞星，分析人生各领域能量",
                    },
                    {
                      title: "知识库",
                      description: "系统化的命理知识库，涵盖天干地支、十神、主星等核心概念",
                    },
                    {
                      title: "深度文章",
                      description: "以现代视角解读传统命理，结合心理学与职业规划等实用内容",
                    },
                  ].map((feature) => (
                    <div key={feature.title} className="flex items-start gap-4 p-4 border border-border rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                      <div>
                        <h3 className="font-medium mb-1">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 免责声明 */}
            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle>重要声明</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  本站所有内容仅为传统文化探讨与个人兴趣分享，旨在弘扬中华传统命理文化，促进文化理解与自我认知。
                  所有命盘分析与文章观点均为学术研究与娱乐参考，不构成任何人生、财务、健康、婚恋等方面的决策依据。
                  命理学是古人观察自然与人事的思维模型，请以理性态度看待，切勿迷信。
                </p>
              </CardContent>
            </Card>

            {/* 联系方式 */}
            <Card>
              <CardHeader>
                <CardTitle>联系我们</CardTitle>
                <CardDescription>如有问题或建议，欢迎与我们联系</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  我们致力于打造一个理性、开放、有深度的命理文化学习平台。
                  如果你有任何问题、建议或想要投稿，欢迎通过以下方式联系我们。
                </p>
                <div className="mt-4 space-y-2">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">邮箱：</span>contact@xuanshu.dev
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">网站：</span>www.xuanshu.dev
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
