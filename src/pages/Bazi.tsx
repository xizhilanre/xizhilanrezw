import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Compass, Calendar, Clock, Sparkles, Star, TrendingUp, Shield, Zap, BookOpen, Info, Lightbulb } from "lucide-react";
import { calculateBazi, type BaziResult } from "@/lib/bazi";
import { toast } from "sonner";

const Bazi = () => {
  const [formData, setFormData] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
    hour: new Date().getHours(),
    minute: new Date().getMinutes(),
    gender: "male" as "male" | "female",
  });

  const [result, setResult] = useState<BaziResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCalculating(true);

    try {
      // 验证输入
      if (formData.year < 1900 || formData.year > 2100) {
        toast.error("请输入1900-2100年之间的年份");
        setIsCalculating(false);
        return;
      }

      if (formData.month < 1 || formData.month > 12) {
        toast.error("请输入有效的月份");
        setIsCalculating(false);
        return;
      }

      if (formData.day < 1 || formData.day > 31) {
        toast.error("请输入有效的日期");
        setIsCalculating(false);
        return;
      }

      if (formData.hour < 0 || formData.hour > 23) {
        toast.error("请输入有效的小时");
        setIsCalculating(false);
        return;
      }

      const baziResult = calculateBazi({
        year: formData.year,
        month: formData.month,
        day: formData.day,
        hour: formData.hour,
        minute: formData.minute || 0,
        gender: formData.gender,
      });

      setResult(baziResult);
      toast.success("八字排盘成功！");
    } catch (error) {
      toast.error("计算失败，请检查输入信息");
      console.error(error);
    } finally {
      setIsCalculating(false);
    }
  };

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
                <Compass className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">八字排盘工具</span>
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                八字<span className="text-gradient-gold">排盘</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                输入出生年月日时，自动计算四柱八字、十神关系与五行分布
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container px-4 max-w-7xl mx-auto">
            {/* 输入表单 - 顶部 */}
            <div className={`mb-8 transition-all duration-500 ease-in-out ${result ? "w-full" : "max-w-2xl mx-auto"}`}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    出生信息
                  </CardTitle>
                  <CardDescription>请输入准确的出生年月日时</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className={`grid gap-4 transition-all duration-700 ease-in-out ${result ? "grid-cols-2 md:grid-cols-6" : "grid-cols-2 md:grid-cols-3"}`}>
                      <div>
                        <Label htmlFor="year">年份</Label>
                        <Input
                          id="year"
                          type="number"
                          value={formData.year}
                          onChange={(e) =>
                            setFormData({ ...formData, year: parseInt(e.target.value) || 2000 })
                          }
                          min={1900}
                          max={2100}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="month">月份</Label>
                        <Input
                          id="month"
                          type="number"
                          value={formData.month}
                          onChange={(e) =>
                            setFormData({ ...formData, month: parseInt(e.target.value) || 1 })
                          }
                          min={1}
                          max={12}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="day">日期</Label>
                        <Input
                          id="day"
                          type="number"
                          value={formData.day}
                          onChange={(e) =>
                            setFormData({ ...formData, day: parseInt(e.target.value) || 1 })
                          }
                          min={1}
                          max={31}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="hour">小时</Label>
                        <Input
                          id="hour"
                          type="number"
                          value={formData.hour}
                          onChange={(e) =>
                            setFormData({ ...formData, hour: parseInt(e.target.value) || 0 })
                          }
                          min={0}
                          max={23}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="minute">分钟</Label>
                        <Input
                          id="minute"
                          type="number"
                          value={formData.minute}
                          onChange={(e) =>
                            setFormData({ ...formData, minute: parseInt(e.target.value) || 0 })
                          }
                          min={0}
                          max={59}
                        />
                      </div>
                      <div>
                        <Label>性别</Label>
                        <div className="flex gap-4 mt-2">
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="gender"
                              value="male"
                              checked={formData.gender === "male"}
                              onChange={(e) =>
                                setFormData({ ...formData, gender: e.target.value as "male" | "female" })
                              }
                              className="w-4 h-4"
                            />
                            <span>男</span>
                          </label>
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="gender"
                              value="female"
                              checked={formData.gender === "female"}
                              onChange={(e) =>
                                setFormData({ ...formData, gender: e.target.value as "male" | "female" })
                              }
                              className="w-4 h-4"
                            />
                            <span>女</span>
                          </label>
                        </div>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-gold text-primary-foreground hover:opacity-90"
                      disabled={isCalculating}
                    >
                      {isCalculating ? "计算中..." : "开始排盘"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* 结果显示 - 全宽布局 */}
            {result && (
              <div className="space-y-6 animate-fade-in-up">
                {/* 四柱八字 - 炫酷版 */}
                <Card className="relative overflow-hidden border-2 border-primary/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
                  <CardHeader className="relative">
                    <CardTitle className="flex items-center gap-2">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Sparkles className="w-5 h-5 text-primary" />
                      </div>
                      <span className="bg-gradient-gold bg-clip-text text-transparent">四柱命盘</span>
                    </CardTitle>
                    <CardDescription>天干地支，阴阳五行，尽在其中</CardDescription>
                  </CardHeader>
                  <CardContent className="relative">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { label: "年柱", pillar: result.yearPillar, desc: "祖上根基" },
                        { label: "月柱", pillar: result.monthPillar, desc: "父母宫位" },
                        { label: "日柱", pillar: result.dayPillar, desc: "日主本命" },
                        { label: "时柱", pillar: result.hourPillar, desc: "子女宫位" },
                      ].map(({ label, pillar, desc }) => (
                        <div
                          key={label}
                          className="group relative p-5 bg-gradient-to-br from-background to-muted/50 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                        >
                          <div className="absolute top-2 right-2 w-2 h-2 bg-primary/20 rounded-full group-hover:bg-primary/40 transition-colors" />
                          <div className="text-xs text-muted-foreground mb-1 font-medium">{label}</div>
                          <div className="text-[10px] text-muted-foreground/70 mb-3">{desc}</div>
                          <div className="text-3xl font-serif font-bold text-primary mb-1 tracking-wider">
                            {pillar.tianGan}
                          </div>
                          <div className="text-3xl font-serif font-bold mb-2 tracking-wider">{pillar.diZhi}</div>
                          {pillar.shiShen && (
                            <div className="mt-2 px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                              {pillar.shiShen}
                            </div>
                          )}
                          {pillar.cangGan && pillar.cangGan.length > 0 && (
                            <div className="mt-1 text-[10px] text-muted-foreground">
                              藏：{pillar.cangGan.join("、")}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 p-4 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 rounded-lg border border-primary/20">
                      <div className="flex items-center justify-center gap-3">
                        <div className="text-center">
                          <div className="text-xs text-muted-foreground mb-1">日主</div>
                          <div className="text-2xl font-serif font-bold text-gradient-gold">{result.dayMaster}</div>
                        </div>
                        <div className="w-px h-8 bg-border" />
                        <div className="text-center">
                          <div className="text-xs text-muted-foreground mb-1">五行</div>
                          <div className="text-2xl font-serif font-bold text-primary">{result.dayMasterWuXing}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* 分析结果 - 左右分栏 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* 格局分析 */}
                  <Card className="border-2 border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Star className="w-5 h-5 text-primary" />
                        </div>
                        <span>命格分析</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* 格局 */}
                      <div className="p-4 bg-gradient-to-r from-primary/10 to-transparent rounded-lg border border-primary/20">
                        <div className="flex items-start gap-3">
                          <TrendingUp className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <div className="flex-1">
                            <div className="text-xs text-muted-foreground mb-1 font-medium">格局</div>
                            <div className="text-base font-semibold text-foreground leading-relaxed">
                              {result.analysis.geJu}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 旺衰 */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 bg-muted/50 rounded-lg border border-border">
                          <div className="text-xs text-muted-foreground mb-1">日主旺衰</div>
                          <div className={`text-xl font-bold ${
                            result.wangShuai === "旺" ? "text-green-600" :
                            result.wangShuai === "相" ? "text-blue-600" :
                            result.wangShuai === "休" ? "text-yellow-600" :
                            result.wangShuai === "囚" ? "text-orange-600" : "text-red-600"
                          }`}>
                            {result.wangShuai}
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">
                            {result.wangShuai === "旺" ? "得令得地，气势强盛" :
                             result.wangShuai === "相" ? "得令或得地，气势尚可" :
                             result.wangShuai === "休" ? "失令失地，需生扶" :
                             result.wangShuai === "囚" ? "受克严重，急需扶助" : "极度衰弱，急需生扶"}
                          </div>
                        </div>

                        <div className="p-3 bg-muted/50 rounded-lg border border-border">
                          <div className="text-xs text-muted-foreground mb-1">五行平衡</div>
                          <div className="text-base font-semibold text-foreground">
                            {result.analysis.wuXingBalance}
                          </div>
                        </div>
                      </div>

                      {/* 用神忌神 */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                          <div className="flex items-center gap-2 mb-2">
                            <Shield className="w-4 h-4 text-green-600" />
                            <div className="text-xs font-medium text-green-600">用神</div>
                          </div>
                          <div className="text-sm font-semibold text-foreground">
                            {result.analysis.yongShen}
                          </div>
                        </div>

                        <div className="p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                          <div className="flex items-center gap-2 mb-2">
                            <Zap className="w-4 h-4 text-red-600" />
                            <div className="text-xs font-medium text-red-600">忌神</div>
                          </div>
                          <div className="text-sm font-semibold text-foreground">
                            {result.analysis.jiShen}
                          </div>
                        </div>
                      </div>

                      {/* 特点 */}
                      {result.analysis.teDian && result.analysis.teDian.length > 0 && (
                        <div className="pt-3 border-t border-border">
                          <div className="text-xs text-muted-foreground mb-2 font-medium">命格特点</div>
                          <div className="flex flex-wrap gap-2">
                            {result.analysis.teDian.map((te, index) => (
                              <span
                                key={index}
                                className="px-3 py-1.5 bg-primary/10 text-primary text-xs rounded-full border border-primary/20 font-medium"
                              >
                                {te}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  {/* 五行分布 */}
                  <Card className="border-2 border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Sparkles className="w-4 h-4 text-primary" />
                        </div>
                        <span>五行分布</span>
                      </CardTitle>
                      <CardDescription>天干地支五行统计（含藏干）</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-5 gap-3">
                        {Object.entries(result.wuXingCount).map(([wx, count]) => {
                          const colors: Record<string, string> = {
                            木: "from-green-500/20 to-green-600/10 border-green-500/30 text-green-600",
                            火: "from-red-500/20 to-red-600/10 border-red-500/30 text-red-600",
                            土: "from-yellow-500/20 to-yellow-600/10 border-yellow-500/30 text-yellow-600",
                            金: "from-blue-500/20 to-blue-600/10 border-blue-500/30 text-blue-600",
                            水: "from-cyan-500/20 to-cyan-600/10 border-cyan-500/30 text-cyan-600",
                          };
                          return (
                            <div
                              key={wx}
                              className={`text-center p-4 bg-gradient-to-br ${colors[wx]} rounded-xl border-2 transition-all duration-300 hover:scale-105`}
                            >
                              <div className="text-2xl font-bold mb-1">{wx}</div>
                              <div className="text-lg font-semibold">{count}</div>
                            </div>
                          );
                        })}
                      </div>

                      {/* 五行分析 */}
                      <div className="pt-4 border-t border-border space-y-3">
                        <div className="text-xs font-medium text-muted-foreground mb-2">五行分析</div>
                        {(() => {
                          const entries = Object.entries(result.wuXingCount).sort((a, b) => b[1] - a[1]);
                          const max = entries[0];
                          const min = entries[entries.length - 1];
                          const wuXingNames: Record<string, string> = {
                            木: "木行",
                            火: "火行",
                            土: "土行",
                            金: "金行",
                            水: "水行",
                          };
                          const wuXingDesc: Record<string, string> = {
                            木: "主仁，代表生长、发展",
                            火: "主礼，代表热情、活力",
                            土: "主信，代表稳定、包容",
                            金: "主义，代表刚强、果断",
                            水: "主智，代表智慧、流动",
                          };
                          
                          return (
                            <div className="space-y-2 text-xs">
                              <div className="p-2 bg-muted/50 rounded-lg">
                                <div className="font-medium text-foreground mb-1">
                                  最强：{wuXingNames[max[0]]} ({max[1]})
                                </div>
                                <div className="text-muted-foreground">{wuXingDesc[max[0]]}</div>
                              </div>
                              {max[1] !== min[1] && (
                                <div className="p-2 bg-muted/30 rounded-lg">
                                  <div className="font-medium text-foreground mb-1">
                                    最弱：{wuXingNames[min[0]]} ({min[1]})
                                  </div>
                                  <div className="text-muted-foreground">{wuXingDesc[min[0]]}</div>
                                </div>
                              )}
                              <div className="pt-2 text-muted-foreground leading-relaxed">
                                {result.analysis.wuXingBalance}
                              </div>
                            </div>
                          );
                        })()}
                      </div>

                      {/* 五行相生相克关系 */}
                      <div className="pt-4 border-t border-border space-y-3">
                        <div className="text-xs font-medium text-muted-foreground mb-2">五行关系</div>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="p-2 bg-green-500/10 rounded-lg border border-green-500/20">
                            <div className="font-medium text-green-600 mb-1">相生</div>
                            <div className="text-muted-foreground">木→火→土→金→水</div>
                          </div>
                          <div className="p-2 bg-red-500/10 rounded-lg border border-red-500/20">
                            <div className="font-medium text-red-600 mb-1">相克</div>
                            <div className="text-muted-foreground">木→土→水→火→金</div>
                          </div>
                        </div>
                        <div className="p-2 bg-muted/30 rounded-lg text-xs text-muted-foreground">
                          五行流通为佳，偏颇需调和。根据日主五行，选择相生或相克的五行作为用神。
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* 第二行 - 十神分布和新板块 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* 十神分布 */}
                  <Card className="border-2 border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Star className="w-4 h-4 text-primary" />
                        </div>
                        <span>十神分布</span>
                      </CardTitle>
                      <CardDescription>以日主为基准的十神关系</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="text-xs text-muted-foreground mb-2">{result.analysis.shiShenAnalysis}</div>
                        <div className="flex flex-wrap gap-2">
                          {Object.entries(result.shiShenCount)
                            .sort((a, b) => b[1] - a[1])
                            .map(([ss, count]) => (
                              <div
                                key={ss}
                                className="group relative px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 text-primary rounded-lg text-sm font-medium border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105"
                              >
                                <span className="relative z-10">{ss}</span>
                                <span className="ml-2 text-primary/70">×{count}</span>
                                <div className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                              </div>
                            ))}
                        </div>
                      </div>

                      {/* 十神作用 */}
                      <div className="pt-4 border-t border-border space-y-2">
                        <div className="text-xs font-medium text-muted-foreground mb-2">十神作用</div>
                        <div className="space-y-2 text-xs">
                          <div className="p-2 bg-muted/50 rounded-lg">
                            <div className="font-medium text-foreground mb-1">官杀：</div>
                            <div className="text-muted-foreground">正官主贵，七杀主威，需制化</div>
                          </div>
                          <div className="p-2 bg-muted/50 rounded-lg">
                            <div className="font-medium text-foreground mb-1">财星：</div>
                            <div className="text-muted-foreground">正财稳定，偏财灵活，需身强</div>
                          </div>
                          <div className="p-2 bg-muted/50 rounded-lg">
                            <div className="font-medium text-foreground mb-1">食伤：</div>
                            <div className="text-muted-foreground">食神温和，伤官锐利，需配印</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* 四柱详解 */}
                  <Card className="border-2 border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Compass className="w-4 h-4 text-primary" />
                        </div>
                        <span>四柱详解</span>
                      </CardTitle>
                      <CardDescription>年、月、日、时四柱的含义</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="p-3 bg-gradient-to-r from-primary/10 to-transparent rounded-lg border border-primary/20">
                          <div className="font-medium text-foreground mb-1 text-sm">年柱</div>
                          <div className="text-xs text-muted-foreground">
                            代表祖上根基、父母宫位，影响早年运势和家庭背景
                          </div>
                          <div className="mt-2 text-xs font-medium text-primary">
                            {result.yearPillar.tianGan}{result.yearPillar.diZhi}
                            {result.yearPillar.shiShen && ` · ${result.yearPillar.shiShen}`}
                          </div>
                        </div>

                        <div className="p-3 bg-gradient-to-r from-primary/10 to-transparent rounded-lg border border-primary/20">
                          <div className="font-medium text-foreground mb-1 text-sm">月柱</div>
                          <div className="text-xs text-muted-foreground">
                            代表父母、兄弟，影响青年运势和事业发展，是判断旺衰的关键
                          </div>
                          <div className="mt-2 text-xs font-medium text-primary">
                            {result.monthPillar.tianGan}{result.monthPillar.diZhi}
                            {result.monthPillar.shiShen && ` · ${result.monthPillar.shiShen}`}
                          </div>
                        </div>

                        <div className="p-3 bg-gradient-to-r from-primary/10 to-transparent rounded-lg border border-primary/20">
                          <div className="font-medium text-foreground mb-1 text-sm">日柱</div>
                          <div className="text-xs text-muted-foreground">
                            代表自己（日主），是命盘的核心，影响性格和整体运势
                          </div>
                          <div className="mt-2 text-xs font-medium text-primary">
                            {result.dayPillar.tianGan}{result.dayPillar.diZhi}
                            {result.dayPillar.shiShen && ` · ${result.dayPillar.shiShen}`}
                          </div>
                        </div>

                        <div className="p-3 bg-gradient-to-r from-primary/10 to-transparent rounded-lg border border-primary/20">
                          <div className="font-medium text-foreground mb-1 text-sm">时柱</div>
                          <div className="text-xs text-muted-foreground">
                            代表子女、晚年，影响晚年运势和子女缘分
                          </div>
                          <div className="mt-2 text-xs font-medium text-primary">
                            {result.hourPillar.tianGan}{result.hourPillar.diZhi}
                            {result.hourPillar.shiShen && ` · ${result.hourPillar.shiShen}`}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {!result && (
              <div className="max-w-2xl mx-auto">
                <Card>
                  <CardContent className="flex items-center justify-center h-full min-h-[400px]">
                    <div className="text-center text-muted-foreground">
                      <Clock className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p>请输入出生信息并点击"开始排盘"</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* 相关知识 */}
            <div className="mt-8 space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-serif font-bold mb-2">
                  八字<span className="text-gradient-gold">知识</span>
                </h3>
                <p className="text-muted-foreground">深入了解八字命理的核心概念</p>
              </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* 十神知识 */}
                  <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <BookOpen className="w-4 h-4 text-primary" />
                        </div>
                        <span>十神详解</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="font-medium text-primary">正官：</span>
                          <span className="text-muted-foreground">代表规则、责任、贵气，主清正廉洁</span>
                        </div>
                        <div>
                          <span className="font-medium text-primary">七杀：</span>
                          <span className="text-muted-foreground">代表威势、魄力，需制化方能成器</span>
                        </div>
                        <div>
                          <span className="font-medium text-primary">正财：</span>
                          <span className="text-muted-foreground">代表稳定收入，善于理财</span>
                        </div>
                        <div>
                          <span className="font-medium text-primary">偏财：</span>
                          <span className="text-muted-foreground">代表投资、偏门收入，财路广阔</span>
                        </div>
                        <div>
                          <span className="font-medium text-primary">食神：</span>
                          <span className="text-muted-foreground">代表才华、享受，食神生财</span>
                        </div>
                        <div>
                          <span className="font-medium text-primary">伤官：</span>
                          <span className="text-muted-foreground">代表才华横溢，需配印方能成器</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* 五行知识 */}
                  <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Sparkles className="w-4 h-4 text-primary" />
                        </div>
                        <span>五行相生相克</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="font-medium text-green-600">相生：</span>
                          <span className="text-muted-foreground">木→火→土→金→水→木</span>
                        </div>
                        <div className="text-xs text-muted-foreground pl-4">
                          木生火，火生土，土生金，金生水，水生木
                        </div>
                        <div className="pt-2 border-t border-border">
                          <span className="font-medium text-red-600">相克：</span>
                          <span className="text-muted-foreground">木→土→水→火→金→木</span>
                        </div>
                        <div className="text-xs text-muted-foreground pl-4">
                          木克土，土克水，水克火，火克金，金克木
                        </div>
                        <div className="pt-2 border-t border-border">
                          <span className="font-medium text-primary">平衡：</span>
                          <span className="text-muted-foreground">五行平衡为佳，偏颇需调和</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* 用神忌神 */}
                  <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Shield className="w-4 h-4 text-primary" />
                        </div>
                        <span>用神与忌神</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="space-y-2 text-sm">
                        <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                          <div className="font-medium text-green-600 mb-1">用神</div>
                          <div className="text-xs text-muted-foreground">
                            身旺用克泄耗，身弱用生扶。用神得力，运势顺畅，事业有成。
                          </div>
                        </div>
                        <div className="p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                          <div className="font-medium text-red-600 mb-1">忌神</div>
                          <div className="text-xs text-muted-foreground">
                            与用神相反，需避免或制化。忌神当权，易有阻碍，需谨慎应对。
                          </div>
                        </div>
                        <div className="pt-2 text-xs text-muted-foreground">
                          <Lightbulb className="w-3 h-3 inline mr-1" />
                          用神忌神需结合整体格局判断，不可孤立看待
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* 格局知识 */}
                  <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <TrendingUp className="w-4 h-4 text-primary" />
                        </div>
                        <span>格局判断</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="font-medium text-primary">正官格：</span>
                          <span className="text-muted-foreground">适合公职，清正廉洁</span>
                        </div>
                        <div>
                          <span className="font-medium text-primary">七杀格：</span>
                          <span className="text-muted-foreground">威势过人，需制化</span>
                        </div>
                        <div>
                          <span className="font-medium text-primary">财格：</span>
                          <span className="text-muted-foreground">财源稳定，善于理财</span>
                        </div>
                        <div>
                          <span className="font-medium text-primary">食伤格：</span>
                          <span className="text-muted-foreground">才华横溢，适合创意</span>
                        </div>
                        <div>
                          <span className="font-medium text-primary">印绶格：</span>
                          <span className="text-muted-foreground">学业有成，智慧超群</span>
                        </div>
                        <div className="pt-2 border-t border-border text-xs text-muted-foreground">
                          格局需结合用神、忌神综合判断，单一格局不能定论
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* 地支藏干 */}
                  <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Info className="w-4 h-4 text-primary" />
                        </div>
                        <span>地支藏干</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="space-y-2 text-sm">
                        <div className="text-muted-foreground mb-2">
                          地支除了本气五行外，还藏有其他天干，称为"藏干"或"人元"。
                        </div>
                        <div className="space-y-1 text-xs">
                          <div><span className="font-medium">子：</span>藏癸</div>
                          <div><span className="font-medium">丑：</span>藏己、癸、辛</div>
                          <div><span className="font-medium">寅：</span>藏甲、丙、戊</div>
                          <div><span className="font-medium">卯：</span>藏乙</div>
                          <div><span className="font-medium">辰：</span>藏戊、乙、癸</div>
                          <div><span className="font-medium">巳：</span>藏丙、戊、庚</div>
                        </div>
                        <div className="pt-2 border-t border-border text-xs text-muted-foreground">
                          藏干在分析五行强弱和十神关系时起到重要作用
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* 旺衰判断 */}
                  <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Star className="w-4 h-4 text-primary" />
                        </div>
                        <span>旺衰判断</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="space-y-2 text-sm">
                        <div className="p-2 bg-green-500/10 rounded border border-green-500/20">
                          <span className="font-medium text-green-600">旺：</span>
                          <span className="text-muted-foreground text-xs">得令得地，气势强盛，宜泄宜耗</span>
                        </div>
                        <div className="p-2 bg-blue-500/10 rounded border border-blue-500/20">
                          <span className="font-medium text-blue-600">相：</span>
                          <span className="text-muted-foreground text-xs">得令或得地，气势尚可</span>
                        </div>
                        <div className="p-2 bg-yellow-500/10 rounded border border-yellow-500/20">
                          <span className="font-medium text-yellow-600">休：</span>
                          <span className="text-muted-foreground text-xs">失令失地，需生扶</span>
                        </div>
                        <div className="p-2 bg-orange-500/10 rounded border border-orange-500/20">
                          <span className="font-medium text-orange-600">囚：</span>
                          <span className="text-muted-foreground text-xs">受克严重，急需扶助</span>
                        </div>
                        <div className="p-2 bg-red-500/10 rounded border border-red-500/20">
                          <span className="font-medium text-red-600">死：</span>
                          <span className="text-muted-foreground text-xs">极度衰弱，急需生扶</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

            {/* 说明 */}
            <Card className="mt-8">
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="text-primary font-medium">*</span> 本工具基于传统八字理论计算，结果仅供参考。
                  实际排盘应使用准确的农历日期和时辰。十神关系以日主为基准计算，五行统计包含天干地支。
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Bazi;
