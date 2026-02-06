import { BookOpen, Star, Compass, Scroll, Calendar, Users } from "lucide-react";

const categories = [
  {
    icon: Compass,
    title: "十神解析",
    description: "八字核心概念现代解读",
    count: 12,
    color: "text-primary",
    bgColor: "bg-primary/10",
    hoverBorder: "hover:border-primary/50",
  },
  {
    icon: Star,
    title: "十四主星",
    description: "紫微斗数星曜详解",
    count: 14,
    color: "text-star-purple",
    bgColor: "bg-star-purple/10",
    hoverBorder: "hover:border-star-purple/50",
  },
  {
    icon: Calendar,
    title: "流年运势",
    description: "年度与节气运势分析",
    count: 8,
    color: "text-vermillion",
    bgColor: "bg-vermillion/10",
    hoverBorder: "hover:border-vermillion/50",
  },
  {
    icon: Scroll,
    title: "古籍摘录",
    description: "经典命理著作选读",
    count: 6,
    color: "text-gold",
    bgColor: "bg-gold/10",
    hoverBorder: "hover:border-gold/50",
  },
  {
    icon: BookOpen,
    title: "现代应用",
    description: "命理与当代生活",
    count: 10,
    color: "text-jade",
    bgColor: "bg-jade/10",
    hoverBorder: "hover:border-jade/50",
  },
  {
    icon: Users,
    title: "读者投稿",
    description: "学习心得与感悟分享",
    count: 4,
    color: "text-muted-foreground",
    bgColor: "bg-muted",
    hoverBorder: "hover:border-muted-foreground/50",
  },
];

export const CategoryNav = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium tracking-wider">内容分类</span>
          <h2 className="text-2xl md:text-3xl font-serif font-bold mt-2">
            探索感兴趣的<span className="text-gradient-gold">领域</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <button
              key={category.title}
              className={`group p-4 bg-card rounded-xl border border-border ${category.hoverBorder} transition-all duration-300 card-hover text-left`}
            >
              <div className={`w-10 h-10 ${category.bgColor} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                <category.icon className={`w-5 h-5 ${category.color}`} />
              </div>
              <h3 className="font-medium text-sm mb-1">{category.title}</h3>
              <p className="text-xs text-muted-foreground line-clamp-1">
                {category.description}
              </p>
              <div className="mt-2 text-xs text-muted-foreground">
                {category.count} 篇文章
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
