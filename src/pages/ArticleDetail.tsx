import { useParams, Link, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Tag, Calendar, User } from "lucide-react";
import { getArticleById, articles } from "@/data/articles";

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const article = id ? getArticleById(parseInt(id)) : undefined;

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-16">
          <div className="flex min-h-[60vh] items-center justify-center">
            <div className="text-center">
              <h1 className="mb-4 text-4xl font-bold">404</h1>
              <p className="mb-4 text-xl text-muted-foreground">文章未找到</p>
              <Button asChild>
                <Link to="/blog">返回博客</Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // 获取相关文章（同分类的其他文章）
  const relatedArticles = articles
    .filter((a) => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  // 将Markdown内容转换为HTML（简化版）
  const formatContent = (content: string) => {
    let inList = false;
    let listItems: string[] = [];
    
    const result = content
      .split("\n")
      .map((line, index) => {
        // 标题
        if (line.startsWith("# ")) {
          if (inList) {
            inList = false;
            const listHtml = `<ul class="list-disc list-inside mb-4 space-y-2 text-muted-foreground">${listItems.join("")}</ul>`;
            listItems = [];
            return listHtml + `<h1 class="text-3xl font-serif font-bold mb-4 mt-8 text-gradient-gold">${line.substring(2)}</h1>`;
          }
          return `<h1 class="text-3xl font-serif font-bold mb-4 mt-8 text-gradient-gold">${line.substring(2)}</h1>`;
        }
        if (line.startsWith("## ")) {
          if (inList) {
            inList = false;
            const listHtml = `<ul class="list-disc list-inside mb-4 space-y-2 text-muted-foreground">${listItems.join("")}</ul>`;
            listItems = [];
            return listHtml + `<h2 class="text-2xl font-serif font-bold mb-3 mt-6 text-foreground">${line.substring(3)}</h2>`;
          }
          return `<h2 class="text-2xl font-serif font-bold mb-3 mt-6 text-foreground">${line.substring(3)}</h2>`;
        }
        if (line.startsWith("### ")) {
          if (inList) {
            inList = false;
            const listHtml = `<ul class="list-disc list-inside mb-4 space-y-2 text-muted-foreground">${listItems.join("")}</ul>`;
            listItems = [];
            return listHtml + `<h3 class="text-xl font-semibold mb-2 mt-4 text-foreground">${line.substring(4)}</h3>`;
          }
          return `<h3 class="text-xl font-semibold mb-2 mt-4 text-foreground">${line.substring(4)}</h3>`;
        }
        // 列表
        if (line.startsWith("- ")) {
          if (!inList) {
            inList = true;
          }
          listItems.push(`<li class="mb-1">${line.substring(2)}</li>`);
          return "";
        }
        // 表格
        if (line.includes("|") && !line.startsWith("|")) {
          if (inList) {
            inList = false;
            const listHtml = `<ul class="list-disc list-inside mb-4 space-y-2 text-muted-foreground">${listItems.join("")}</ul>`;
            listItems = [];
            return listHtml;
          }
          return "";
        }
        // 空行
        if (line.trim() === "") {
          if (inList) {
            inList = false;
            const listHtml = `<ul class="list-disc list-inside mb-4 space-y-2 text-muted-foreground">${listItems.join("")}</ul>`;
            listItems = [];
            return listHtml + "<br />";
          }
          return "<br />";
        }
        // 普通段落
        if (inList) {
          inList = false;
          const listHtml = `<ul class="list-disc list-inside mb-4 space-y-2 text-muted-foreground">${listItems.join("")}</ul>`;
          listItems = [];
          return listHtml + `<p class="mb-4 text-muted-foreground leading-relaxed">${line}</p>`;
        }
        return `<p class="mb-4 text-muted-foreground leading-relaxed">${line}</p>`;
      })
      .filter((html) => html !== "")
      .join("");
    
    // 处理最后的列表
    if (inList && listItems.length > 0) {
      return result + `<ul class="list-disc list-inside mb-4 space-y-2 text-muted-foreground">${listItems.join("")}</ul>`;
    }
    
    return result;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-16">
        {/* Hero */}
        <section className="py-12 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-starfield opacity-30" />
          <div className="container px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate(-1)}
                className="mb-6 group"
              >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                返回博客
              </Button>

              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary" className="text-xs">
                  {article.category}
                </Badge>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {article.readTime}
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {article.date}
                </span>
                {article.author && (
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {article.author}
                  </span>
                )}
              </div>

              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                {article.title}
              </h1>

              <p className="text-lg text-muted-foreground mb-6">{article.excerpt}</p>

              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container px-4 max-w-4xl mx-auto">
            <article className="prose prose-invert max-w-none">
              <div
                className="article-content text-foreground [&_h1]:text-3xl [&_h1]:font-serif [&_h1]:font-bold [&_h1]:mb-4 [&_h1]:mt-8 [&_h1]:text-gradient-gold [&_h2]:text-2xl [&_h2]:font-serif [&_h2]:font-bold [&_h2]:mb-3 [&_h2]:mt-6 [&_h2]:text-foreground [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mb-2 [&_h3]:mt-4 [&_h3]:text-foreground [&_p]:mb-4 [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:list-inside [&_ul]:mb-4 [&_ul]:space-y-2 [&_ul]:text-muted-foreground [&_li]:mb-1 [&_table]:w-full [&_table]:my-4 [&_table]:border-collapse [&_th]:border [&_th]:border-border [&_th]:p-2 [&_th]:bg-muted [&_td]:border [&_td]:border-border [&_td]:p-2"
                dangerouslySetInnerHTML={{ __html: formatContent(article.content) }}
              />
            </article>

            {/* 相关文章 */}
            {relatedArticles.length > 0 && (
              <div className="mt-16 pt-12 border-t border-border">
                <h3 className="text-2xl font-serif font-bold mb-6">
                  相关<span className="text-gradient-gold">文章</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedArticles.map((related) => (
                    <Link
                      key={related.id}
                      to={`/blog/${related.id}`}
                      className="group block p-4 bg-card rounded-lg border border-border hover:border-primary/30 transition-all duration-300 card-hover"
                    >
                      <Badge variant="secondary" className="text-xs mb-2">
                        {related.category}
                      </Badge>
                      <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {related.title}
                      </h4>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {related.excerpt}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ArticleDetail;
