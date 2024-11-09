"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Check, Moon, Sun } from "lucide-react";

export default function ThemePage() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="container py-16 space-y-16">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Theme Preview</h1>
        <p className="text-xl text-muted-foreground">
          A showcase of Simply Maid's design system components and theme configuration.
        </p>
      </div>

      <div className="flex items-center gap-6">
        <Button variant="outline" size="icon" onClick={() => setTheme("light")}>
          <Sun className="h-[1.2rem] w-[1.2rem]" />
        </Button>
        <Button variant="outline" size="icon" onClick={() => setTheme("dark")}>
          <Moon className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </div>

      <Tabs defaultValue="preview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="colors">Colors</TabsTrigger>
          <TabsTrigger value="typography">Typography</TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="space-y-8">
          {/* Buttons */}
          <Card className="p-6 space-y-6">
            <h2 className="text-lg font-semibold">Buttons</h2>
            <div className="flex flex-wrap gap-4">
              <Button>Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="destructive">Destructive Button</Button>
            </div>
          </Card>

          {/* Form Elements */}
          <Card className="p-6 space-y-6">
            <h2 className="text-lg font-semibold">Form Elements</h2>
            <div className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Enter your email" />
              </div>
              <div className="flex items-center gap-4">
                <Switch id="notifications" />
                <Label htmlFor="notifications">Enable notifications</Label>
              </div>
              <div className="grid gap-2">
                <Label>Volume</Label>
                <Slider defaultValue={[50]} max={100} step={1} />
              </div>
            </div>
          </Card>

          {/* Badges */}
          <Card className="p-6 space-y-6">
            <h2 className="text-lg font-semibold">Badges</h2>
            <div className="flex flex-wrap gap-4">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
          </Card>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Standard Clean</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Regular maintenance cleaning
              </p>
              <Badge>From $120</Badge>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Deep Clean</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Thorough deep cleaning
              </p>
              <Badge>From $250</Badge>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">End of Lease</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Bond back guarantee
              </p>
              <Badge>From $350</Badge>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="colors" className="space-y-8">
          {/* Brand Colors */}
          <Card className="p-6 space-y-6">
            <h2 className="text-lg font-semibold">Brand Colors</h2>
            <div className="grid gap-4">
              <div className="space-y-2">
                <div className="h-10 w-full bg-primary rounded-md" />
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Primary</span>
                  <span className="text-sm text-muted-foreground">
                    hsl(var(--primary))
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-10 w-full bg-secondary rounded-md" />
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Secondary</span>
                  <span className="text-sm text-muted-foreground">
                    hsl(var(--secondary))
                  </span>
                </div>
              </div>
            </div>
          </Card>

          {/* UI Colors */}
          <Card className="p-6 space-y-6">
            <h2 className="text-lg font-semibold">UI Colors</h2>
            <div className="grid gap-4">
              <div className="space-y-2">
                <div className="h-10 w-full bg-muted rounded-md" />
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Muted</span>
                  <span className="text-sm text-muted-foreground">
                    hsl(var(--muted))
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-10 w-full bg-accent rounded-md" />
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Accent</span>
                  <span className="text-sm text-muted-foreground">
                    hsl(var(--accent))
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-10 w-full bg-destructive rounded-md" />
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Destructive</span>
                  <span className="text-sm text-muted-foreground">
                    hsl(var(--destructive))
                  </span>
                </div>
              </div>
            </div>
          </Card>

          {/* Chart Colors */}
          <Card className="p-6 space-y-6">
            <h2 className="text-lg font-semibold">Chart Colors</h2>
            <div className="grid gap-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="space-y-2">
                  <div 
                    className="h-10 w-full rounded-md"
                    style={{ backgroundColor: `hsl(var(--chart-${i}))` }}
                  />
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Chart {i}</span>
                    <span className="text-sm text-muted-foreground">
                      hsl(var(--chart-{i}))
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="typography" className="space-y-8">
          {/* Headings */}
          <Card className="p-6 space-y-6">
            <h2 className="text-lg font-semibold">Headings</h2>
            <div className="space-y-4">
              <div>
                <h1>Heading 1</h1>
                <span className="text-sm text-muted-foreground">
                  4xl/5xl, Extrabold, Tight tracking
                </span>
              </div>
              <Separator />
              <div>
                <h2>Heading 2</h2>
                <span className="text-sm text-muted-foreground">
                  3xl, Semibold, Tight tracking
                </span>
              </div>
              <Separator />
              <div>
                <h3>Heading 3</h3>
                <span className="text-sm text-muted-foreground">
                  2xl, Semibold, Tight tracking
                </span>
              </div>
              <Separator />
              <div>
                <h4>Heading 4</h4>
                <span className="text-sm text-muted-foreground">
                  xl, Semibold, Tight tracking
                </span>
              </div>
            </div>
          </Card>

          {/* Text Styles */}
          <Card className="p-6 space-y-6">
            <h2 className="text-lg font-semibold">Text Styles</h2>
            <div className="space-y-4">
              <div>
                <p className="lead">Lead Paragraph</p>
                <span className="text-sm text-muted-foreground">
                  xl, Regular, Muted foreground
                </span>
              </div>
              <Separator />
              <div>
                <p>Regular Paragraph</p>
                <span className="text-sm text-muted-foreground">
                  Base, Regular, Normal leading
                </span>
              </div>
              <Separator />
              <div>
                <p className="large">Large Text</p>
                <span className="text-sm text-muted-foreground">
                  lg, Semibold
                </span>
              </div>
              <Separator />
              <div>
                <p className="small">Small Text</p>
                <span className="text-sm text-muted-foreground">
                  sm, Medium, No leading
                </span>
              </div>
              <Separator />
              <div>
                <p className="muted">Muted Text</p>
                <span className="text-sm text-muted-foreground">
                  sm, Regular, Muted foreground
                </span>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}