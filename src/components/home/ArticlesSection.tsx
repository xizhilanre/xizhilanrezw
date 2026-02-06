import { ArrowRight, Clock, Tag } from "lucide-react";
import { Button } from "../ui/button";

const articles = [
  {
    id: 1,
    title: "从八字看性格倾向：食神与伤官的区别",
    excerpt: "食神与伤官同属「泄身」之神，却展现出截然不同的生命能量。食神如山间清泉，温润自得；伤官似烈火烹油，锋芒毕露...",
    category: "十神解析",
    readTime: "8 分钟",
    date: "2024-01-15",
    featured: true,
  },
  {
    id: 2,
    title: "紫微斗数中的「夫妻宫」究竟能看出什么？",
    excerpt: "夫妻宫并非预言婚姻对象的模样，而是揭示你在亲密关系中的行为模式与心理需求...",
    category: "紫微专题",
    readTime: "10 分钟",
    date: "2024-01-12",
    featured: false,
  },
  {
    id: 3,
    title: "为什么现代人仍需要了解命理文化？",
    excerpt: "在科技飞速发展的今天，命理学的价值不在于「算命」，而在于提供一套独特的自我认知框架...",
    category: "现代应用",
    readTime: "6 分钟",
    date: "2024-01-10",
    featured: false,
  },
  {
    id: 4,
    title: "八字中的「正官格」：天生的管理者？",
    excerpt: "正官代表规则、秩序与责任感，但这并不意味着正官格的人都适合当领导...",
    category: "十神解析",
    readTime: "7 分钟",
    date: "2024-01-08",
    featured: false,
  },
];

export const ArticlesSection = () => {
  return (
    <section className="py-24 bg-background relative">
      <div className="container px-4">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-primary text-sm font-medium tracking-wider">精选文章</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2">
              命理<span className="text-gradient-gold">新知</span>
            </h2>
          </div>
          <Button variant="ghost" className="group hidden sm:flex">
            查看全部
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 特色文章 */}
          <div className="lg:row-span-2">
            <article className="group h-full p-8 bg-gradient-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 card-hover flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
                  {articles[0].category}
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {articles[0].readTime}
                </span>
              </div>
              
              <h3 className="text-2xl font-serif font-bold mb-4 group-hover:text-primary transition-colors">
                {articles[0].title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed flex-1">
                {articles[0].excerpt}
              </p>
              
              <div className="flex items-center justify-between mt-6 pt-6 border-t border-border">
                <span className="text-sm text-muted-foreground">{articles[0].date}</span>
                <Button variant="ghost" size="sm" className="group/btn">
                  阅读全文
                  <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </article>
          </div>

          {/* 其他文章 */}
          {articles.slice(1).map((article) => (
            <article
              key={article.id}
              className="group p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300 card-hover"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded">
                  {article.category}
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {article.readTime}
                </span>
              </div>
              
              <h3 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {article.title}
              </h3>
              
              <p className="text-sm text-muted-foreground line-clamp-2">
                {article.excerpt}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Button variant="outline">
            查看全部文章
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};
