import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Calendar, Clock } from "lucide-react";
import { calculateZiwei, type ZiweiResult } from "@/lib/ziwei";
import { toast } from "sonner";

const Ziwei = () => {
  const [formData, setFormData] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
    hour: new Date().getHours(),
    minute: new Date().getMinutes(),
    gender: "male" as "male" | "female",
  });

  const [result, setResult] = useState<ZiweiResult | null>(null);
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

      const ziweiResult = calculateZiwei({
        year: formData.year,
        month: formData.month,
        day: formData.day,
        hour: formData.hour,
        minute: formData.minute || 0,
        gender: formData.gender,
      });

      setResult(ziweiResult);
      toast.success("紫微斗数排盘成功！");
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
                <Star className="w-4 h-4 text-star-purple" />
                <span className="text-sm text-muted-foreground">紫微斗数排盘</span>
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                紫微<span className="text-gradient-gold">斗数</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                排列十二宫位命盘，解读十四主星与四化飞星，深入分析人生各领域能量分布
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* 输入表单 */}
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    出生信息
                  </CardTitle>
                  <CardDescription>请输入准确的出生年月日时</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-4">
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

                    <Button
                      type="submit"
                      className="w-full bg-star-purple text-white hover:bg-star-purple/90"
                      disabled={isCalculating}
                    >
                      {isCalculating ? "计算中..." : "开始排盘"}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* 命盘显示 */}
              <div className="lg:col-span-2">
                {result ? (
                  <Card>
                    <CardHeader>
                      <CardTitle>紫微斗数命盘</CardTitle>
                      <CardDescription>
                        命宫：{result.mingGong} | 身宫：{result.shenGong}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {/* 十二宫位网格 */}
                      <div className="grid grid-cols-4 gap-2">
                        {result.palaces.map((palace, index) => (
                          <div
                            key={palace.name}
                            className={`p-4 rounded-lg border ${
                              palace.diZhi === result.mingGong
                                ? "bg-primary/10 border-primary"
                                : palace.diZhi === result.shenGong
                                ? "bg-star-purple/10 border-star-purple"
                                : "bg-muted border-border"
                            }`}
                          >
                            <div className="text-xs text-muted-foreground mb-1">{palace.name}</div>
                            <div className="text-sm font-medium mb-2">{palace.diZhi}</div>

                            {/* 主星 */}
                            {palace.mainStars.length > 0 && (
                              <div className="mb-2">
                                <div className="text-xs text-muted-foreground mb-1">主星</div>
                                <div className="flex flex-wrap gap-1">
                                  {palace.mainStars.map((star) => (
                                    <span
                                      key={star.name}
                                      className={`px-2 py-0.5 text-xs rounded ${
                                        star.siHua === "禄"
                                          ? "bg-green-500/20 text-green-600"
                                          : star.siHua === "权"
                                          ? "bg-red-500/20 text-red-600"
                                          : star.siHua === "科"
                                          ? "bg-blue-500/20 text-blue-600"
                                          : star.siHua === "忌"
                                          ? "bg-orange-500/20 text-orange-600"
                                          : "bg-primary/20 text-primary"
                                      }`}
                                    >
                                      {star.name}
                                      {star.siHua && (
                                        <span className="ml-1 text-[10px]">({star.siHua})</span>
                                      )}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* 辅星 */}
                            {palace.minorStars.length > 0 && (
                              <div>
                                <div className="text-xs text-muted-foreground mb-1">辅星</div>
                                <div className="flex flex-wrap gap-1">
                                  {palace.minorStars.map((star) => (
                                    <span
                                      key={star.name}
                                      className={`px-2 py-0.5 text-xs rounded ${
                                        star.siHua === "禄"
                                          ? "bg-green-500/20 text-green-600"
                                          : star.siHua === "权"
                                          ? "bg-red-500/20 text-red-600"
                                          : star.siHua === "科"
                                          ? "bg-blue-500/20 text-blue-600"
                                          : star.siHua === "忌"
                                          ? "bg-orange-500/20 text-orange-600"
                                          : "bg-muted text-muted-foreground"
                                      }`}
                                    >
                                      {star.name}
                                      {star.siHua && (
                                        <span className="ml-1 text-[10px]">({star.siHua})</span>
                                      )}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* 四化说明 */}
                      {result.siHua && (
                        <div className="mt-4 p-3 bg-muted rounded-lg">
                          <div className="text-xs font-medium mb-2">四化飞星</div>
                          <div className="grid grid-cols-4 gap-2 text-xs">
                            <div>
                              <span className="text-green-600">禄：</span>
                              {result.siHua.禄.join("、") || "无"}
                            </div>
                            <div>
                              <span className="text-red-600">权：</span>
                              {result.siHua.权.join("、") || "无"}
                            </div>
                            <div>
                              <span className="text-blue-600">科：</span>
                              {result.siHua.科.join("、") || "无"}
                            </div>
                            <div>
                              <span className="text-orange-600">忌：</span>
                              {result.siHua.忌.join("、") || "无"}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* 宫位说明 */}
                      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-primary/10 border border-primary rounded" />
                          <span>命宫</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-star-purple/10 border border-star-purple rounded" />
                          <span>身宫</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <Card>
                    <CardContent className="flex items-center justify-center h-full min-h-[400px]">
                      <div className="text-center text-muted-foreground">
                        <Clock className="w-12 h-12 mx-auto mb-4 opacity-50" />
                        <p>请输入出生信息并点击"开始排盘"</p>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>

            {/* 说明 */}
            <Card className="mt-8">
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="text-primary font-medium">*</span> 本工具基于传统紫微斗数理论计算，结果仅供参考。
                  实际排盘应使用准确的农历日期和时辰。命宫为个人性格与命运的核心，身宫为后天发展的重要参考。
                  主星代表主要能量，辅星起辅助作用。
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

export default Ziwei;
