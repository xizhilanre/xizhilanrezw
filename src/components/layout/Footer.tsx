import { Link } from "react-router-dom";
import { BaguaIcon } from "../icons/BaguaIcon";
import { Mail, MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      {/* 免责声明 */}
      <div className="bg-muted/50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <p className="text-xs text-muted-foreground text-center leading-relaxed max-w-4xl mx-auto">
            <span className="text-primary font-medium">重要声明：</span>
            本站所有内容仅为传统文化探讨与个人兴趣分享，旨在弘扬中华传统命理文化，促进文化理解与自我认知。
            所有命盘分析与文章观点均为学术研究与娱乐参考，不构成任何人生、财务、健康、婚恋等方面的决策依据。
            命理学是古人观察自然与人事的思维模型，请以理性态度看待，切勿迷信。
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <BaguaIcon className="w-8 h-8 text-primary" />
              <span className="text-lg font-serif font-bold text-gradient-gold tracking-widest">
                玄枢阁
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              探索千年智慧，读懂真实自己。<br />
              传统文化与现代视角的交汇之地。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-foreground mb-4">探索</h4>
            <ul className="space-y-2">
              {["博客文章", "八字排盘", "紫微斗数", "知识库"].map((item) => (
                <li key={item}>
                  <Link
                    to="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-medium text-foreground mb-4">专题</h4>
            <ul className="space-y-2">
              {["十神解析", "十四主星", "流年运势", "古籍摘录"].map((item) => (
                <li key={item}>
                  <Link
                    to="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-medium text-foreground mb-4">命理简报</h4>
            <p className="text-sm text-muted-foreground mb-4">
              每月一封命理文化简报，助你读懂自己。
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-3 py-2 bg-muted border border-border rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm hover:opacity-90 transition-opacity">
                订阅
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2024 玄枢阁 · 保留所有权利 · 内容仅供文化参考
          </p>
          <div className="flex items-center gap-4">
            <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
              <MessageCircle className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
