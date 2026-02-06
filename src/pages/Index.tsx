import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { ArticlesSection } from "@/components/home/ArticlesSection";
import { DailyWisdom } from "@/components/home/DailyWisdom";
import { ToolsPreview } from "@/components/home/ToolsPreview";
import { CategoryNav } from "@/components/home/CategoryNav";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ToolsPreview />
        <DailyWisdom />
        <CategoryNav />
        <ArticlesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
