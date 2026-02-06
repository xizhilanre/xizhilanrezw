import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, BookOpen, Compass, Star, Users } from "lucide-react";
import { BaguaIcon } from "../icons/BaguaIcon";
import { Button } from "../ui/button";

const navItems = [
  { label: "博客", href: "/blog", icon: BookOpen },
  { label: "八字排盘", href: "/bazi", icon: Compass },
  { label: "紫微斗数", href: "/ziwei", icon: Star },
  { label: "知识库", href: "/knowledge", icon: BookOpen },
  { label: "关于", href: "/about", icon: Users },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <BaguaIcon className="w-9 h-9 text-primary animate-spin-slow" />
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-serif font-bold text-gradient-gold tracking-widest">
                玄枢阁
              </span>
              <span className="text-[10px] text-muted-foreground tracking-wider hidden sm:block">
                XUANSHU PAVILION
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute inset-0 bg-muted rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              订阅
            </Button>
            <Button size="sm" className="bg-gradient-gold text-primary-foreground hover:opacity-90">
              开始排盘
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in-up">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              ))}
              <div className="flex gap-2 mt-4 px-4">
                <Button variant="outline" className="flex-1" size="sm">
                  订阅
                </Button>
                <Button className="flex-1 bg-gradient-gold text-primary-foreground" size="sm">
                  开始排盘
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
