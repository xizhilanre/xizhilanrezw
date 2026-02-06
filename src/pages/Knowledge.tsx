import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TianGanSection } from "@/components/knowledge/TianGanSection";
import { DiZhiSection } from "@/components/knowledge/DiZhiSection";
import { ShiShenSection } from "@/components/knowledge/ShiShenSection";
import { ZiweiStarsSection } from "@/components/knowledge/ZiweiStarsSection";
import { SiHuaSection } from "@/components/knowledge/SiHuaSection";
import { TwelvePalacesSection } from "@/components/knowledge/TwelvePalacesSection";
import { BookOpen, Compass, Star, Sparkles } from "lucide-react";

const categories = [
  { id: "tiangan", label: "天干", icon: Compass, description: "甲乙丙丁戊己庚辛壬癸" },
  { id: "dizhi", label: "地支", icon: Compass, description: "子丑寅卯辰巳午未申酉戌亥" },
  { id: "shishen", label: "十神", icon: BookOpen, description: "八字核心概念" },
  { id: "ziwei", label: "十四主星", icon: Star, description: "紫微斗数星曜" },
  { id: "sihua", label: "四化", icon: Sparkles, description: "化禄化权化科化忌" },
  { id: "palaces", label: "十二宫位", icon: Star, description: "命盘宫位详解" },
];

const Knowledge = () => {
  const [activeTab, setActiveTab] = useState("tiangan");

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
                <BookOpen className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">系统化学习</span>
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                命理<span className="text-gradient-gold">知识库</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                从天干地支到十神主星，以现代视角解读传统命理核心概念。<br />
                去玄学化，重理解，助你建立完整的命理知识体系。
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container px-4">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              {/* Tab Navigation */}
              <div className="mb-8 overflow-x-auto pb-2">
                <TabsList className="inline-flex h-auto p-1 bg-muted/50 rounded-xl w-full md:w-auto">
                  {categories.map((cat) => (
                    <TabsTrigger
                      key={cat.id}
                      value={cat.id}
                      className="flex-1 md:flex-none px-4 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg transition-all"
                    >
                      <cat.icon className="w-4 h-4 mr-2 hidden sm:inline" />
                      {cat.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {/* Tab Content */}
              <TabsContent value="tiangan" className="mt-0">
                <TianGanSection />
              </TabsContent>
              <TabsContent value="dizhi" className="mt-0">
                <DiZhiSection />
              </TabsContent>
              <TabsContent value="shishen" className="mt-0">
                <ShiShenSection />
              </TabsContent>
              <TabsContent value="ziwei" className="mt-0">
                <ZiweiStarsSection />
              </TabsContent>
              <TabsContent value="sihua" className="mt-0">
                <SiHuaSection />
              </TabsContent>
              <TabsContent value="palaces" className="mt-0">
                <TwelvePalacesSection />
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-8 bg-muted/30">
          <div className="container px-4">
            <p className="text-center text-sm text-muted-foreground max-w-2xl mx-auto">
              <span className="text-primary">*</span> 
              本知识库内容基于传统命理典籍整理，结合现代心理学视角进行解读，
              旨在促进文化理解与自我认知，不构成任何人生决策依据。
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Knowledge;
