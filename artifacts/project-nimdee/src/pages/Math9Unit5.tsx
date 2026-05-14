import { Link } from "wouter";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ChevronRight, Hash, Sigma, Triangle, BarChart3 } from "lucide-react";
import PracticeProblems, { type Problem } from "@/components/PracticeProblems";
import { UnitCompleteToggle } from "@/components/UnitCompleteToggle";
import GeneratedPractice from "@/components/GeneratedPractice";
import { generateUnit5 } from "@/utils/math9Generators";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };

const unitNav = [
  { label: "Unit 1: Rational Numbers", href: "/resources/math-9/unit-1", icon: <Hash className="w-4 h-4" /> },
  { label: "Unit 2: Powers", href: "/resources/math-9/unit-2", icon: <Sigma className="w-4 h-4" /> },
  { label: "Unit 3: Polynomials", href: "/resources/math-9/unit-3", icon: <Hash className="w-4 h-4" /> },
  { label: "Unit 4: Geometry", href: "/resources/math-9/unit-4", icon: <Triangle className="w-4 h-4" /> },
  { label: "Unit 5: Linear Relations", href: "/resources/math-9/unit-5", icon: <Sigma className="w-4 h-4" />, active: true },
  { label: "Unit 6: Equations", href: "/resources/math-9/unit-6", icon: <Hash className="w-4 h-4" /> },
  { label: "Unit 7: Circles", href: "/resources/math-9/unit-7", icon: <Triangle className="w-4 h-4" /> },
  { label: "Unit 8: Data", href: "/resources/math-9/unit-8", icon: <BarChart3 className="w-4 h-4" /> },
];

const slopeTypes = [
  { type: "Positive", symbol: "m > 0", description: "Line rises from left to right", example: "m = 3/2" },
  { type: "Negative", symbol: "m < 0", description: "Line falls from left to right", example: "m = −2/3" },
  { type: "Zero", symbol: "m = 0", description: "Horizontal line — no rise", example: "y = 4" },
  { type: "Undefined", symbol: "m = ?", description: "Vertical line — no run (division by zero)", example: "x = 3" },
];

export const unit5Problems: Problem[] = [
  {
    level: "Basic",
    question: "Determine whether y = 3x + 1 is linear, and find the y-intercept and slope.",
    steps: [
      "The equation is in y = mx + b form → it is linear",
      "Slope m = 3",
      "y-intercept b = 1 → point (0, 1)",
    ],
    answer: "Linear; slope = 3, y-intercept = 1",
  },
  {
    level: "Basic",
    question: "Find the slope of the line passing through (0, 2) and (4, 10).",
    steps: [
      "m = (y₂ − y₁) / (x₂ − x₁)",
      "= (10 − 2) / (4 − 0)",
      "= 8 / 4",
    ],
    answer: "m = 2",
  },
  {
    level: "Basic",
    question: "A table of values shows x: 0, 1, 2, 3 and y: 5, 8, 11, 14. Is this linear? If so, write the equation.",
    steps: [
      "Check first differences: 8−5=3, 11−8=3, 14−11=3 → constant, so linear",
      "Slope m = 3 (difference per step)",
      "When x=0, y=5 → y-intercept b = 5",
    ],
    answer: "Yes, linear. y = 3x + 5",
  },
  {
    level: "Intermediate",
    question: "Find the slope and y-intercept, then write the equation: line through (−2, 1) and (4, 10).",
    steps: [
      "m = (10 − 1) / (4 − (−2)) = 9/6 = 3/2",
      "Use point (4, 10): 10 = (3/2)(4) + b → 10 = 6 + b → b = 4",
    ],
    answer: "y = (3/2)x + 4",
  },
  {
    level: "Intermediate",
    question: "Using y = −2x + 7, interpolate the value of y when x = 2.5.",
    steps: [
      "Substitute x = 2.5 into the equation",
      "y = −2(2.5) + 7 = −5 + 7",
    ],
    answer: "y = 2",
  },
  {
    level: "Intermediate",
    question: "A taxi charges $3.00 base fee plus $1.50 per km. Write an equation for total cost C in terms of km k, and find the cost for 12 km.",
    steps: [
      "C = 1.50k + 3.00 (partial variation; b = 3 is the fixed fee)",
      "C = 1.50(12) + 3.00 = 18.00 + 3.00",
    ],
    answer: "C = 1.50k + 3; cost for 12 km = $21.00",
  },
  {
    level: "Challenge",
    question: "A line has slope −3/4 and passes through the point (8, −1). Write its equation and find the x-intercept.",
    steps: [
      "y = (−3/4)x + b; substitute (8, −1): −1 = (−3/4)(8) + b → −1 = −6 + b → b = 5",
      "Equation: y = (−3/4)x + 5",
      "x-intercept: set y = 0: 0 = (−3/4)x + 5 → (3/4)x = 5 → x = 20/3 ≈ 6.67",
    ],
    answer: "y = (−3/4)x + 5; x-intercept at x = 20/3",
  },
  {
    level: "Challenge",
    question: "Identify the type of variation and write the equation: (0, 0), (2, 6), (5, 15). Then extrapolate y when x = 8.",
    steps: [
      "Check: y/x = 6/2 = 3, 15/5 = 3 → constant → direct variation (b = 0)",
      "Equation: y = 3x",
      "Extrapolate: y = 3(8) = 24",
    ],
    answer: "Direct variation: y = 3x; when x = 8, y = 24",
  },
];

export default function Math9Unit5() {
  return (
    <Layout>
      <div className="bg-muted/40 border-b">
        <div className="container mx-auto px-4 md:px-6 py-3 flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
          <Link href="/resources" className="hover:text-primary transition-colors flex items-center gap-1"><ArrowLeft className="w-4 h-4" />Resources</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/resources/math-9" className="hover:text-primary transition-colors">Math 9</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground font-medium">Unit 5: Linear Relations</span>
        </div>
      </div>

      <div className="bg-muted/30 border-b overflow-x-auto">
        <div className="container mx-auto px-4 md:px-6 py-0 flex items-stretch min-w-max md:min-w-0">
          {unitNav.map((u) => (
            <Link key={u.href} href={u.href}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
                u.active ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
              }`}>
              {u.icon}{u.label}
            </Link>
          ))}
        </div>
      </div>

      <section className="relative bg-secondary overflow-hidden py-16 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(var(--primary)/0.15),transparent_60%)]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="inline-block bg-primary/20 text-primary-foreground/80 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">Alberta Math 9 — Patterns & Relations</span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-secondary-foreground mb-4 leading-tight">Unit 5: Linear Relations</h1>
            <p className="text-secondary-foreground/75 text-lg leading-relaxed mb-8 max-w-2xl">
              Linear relations describe constant rates of change. Connect tables of values, graphs, and equations — and learn to extract meaning from slope, intercepts, and the shape of a line.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Table of Values", "Graphing", "Slope", "y = mx + b", "Domain & Range", "Interpolation", "Extrapolation", "Direct vs Partial Variation"].map((t) => (
                <span key={t} className="text-xs font-semibold px-3 py-1 rounded-full bg-secondary-foreground/10 text-secondary-foreground/80 border border-secondary-foreground/15">{t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="py-14 bg-background">
        <div className="container mx-auto px-4 md:px-6 space-y-16">

          {/* 1 — Outcomes */}
          <motion.section variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl md:text-3xl font-serif font-bold whitespace-nowrap">Alberta Program Outcomes</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="space-y-3">
              {[
                { num: "PR9.3", text: "Demonstrate an understanding of linear relations by: graphing the relations, analysing the graph, interpolating and extrapolating, and solving problems." },
                { num: "PR9.4", text: "Explain and illustrate strategies to solve single variable linear inequalities with rational coefficients within a problem-solving context." },
                { num: "PR9.5", text: "Demonstrate an understanding of the characteristics of a linear relation, including the slope and y-intercept of the graph." },
              ].map((o, i) => (
                <motion.div key={i} variants={fadeUp} className="flex gap-3 p-4 rounded-xl bg-muted/40 border border-l-4 border-l-violet-600">
                  <span className="font-bold text-violet-700 text-sm shrink-0 mt-0.5">{o.num}:</span>
                  <p className="text-sm text-foreground/80 leading-relaxed">{o.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* 2 — What Makes a Relation Linear */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-violet-700 flex items-center justify-center text-white font-bold text-lg shrink-0">2</div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold">What Makes a Relation Linear?</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-violet-500 shadow-sm">
                <CardContent className="p-5">
                  <h3 className="font-serif font-bold mb-3">Constant Rate of Change</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">A relation is <strong className="text-foreground">linear</strong> if the dependent variable changes by a <strong className="text-foreground">constant amount</strong> for each equal change in the independent variable. When you plot the points, they form a straight line.</p>
                  <p className="text-sm text-muted-foreground">In a table of values, check that the <strong className="text-foreground">first differences</strong> (differences between consecutive y-values) are constant.</p>
                </CardContent>
              </Card>
              <Card className="shadow-sm">
                <CardContent className="p-5">
                  <h3 className="font-serif font-bold mb-3">Recognizing from a Table of Values</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm font-mono">
                      <thead>
                        <tr className="bg-muted/50">
                          <th className="px-3 py-2 text-left font-semibold">x</th>
                          <th className="px-3 py-2 text-left font-semibold">y</th>
                          <th className="px-3 py-2 text-left font-semibold">Δy</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[[0, 3, "—"], [1, 5, "+2"], [2, 7, "+2"], [3, 9, "+2"], [4, 11, "+2"]].map(([x, y, d], i) => (
                          <tr key={i} className="border-t">
                            <td className="px-3 py-2">{x}</td>
                            <td className="px-3 py-2">{y}</td>
                            <td className={`px-3 py-2 font-bold ${d !== "—" ? "text-primary" : "text-muted-foreground"}`}>{d}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">Δy = +2 every time → linear! Equation: y = 2x + 3</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* 3 — Table → Graph → Equation */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-teal-700 flex items-center justify-center text-white font-bold text-lg shrink-0">3</div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold">Table → Graph → Equation Connection</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <Card className="shadow-sm">
              <CardContent className="p-5">
                <p className="text-sm text-muted-foreground mb-5">The same relationship can be represented three ways. Each representation shows the same information in a different form.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3 pb-2 border-b">1 — Table of Values</p>
                    <table className="w-full text-sm font-mono">
                      <thead><tr className="bg-muted/40"><th className="px-3 py-2">x</th><th className="px-3 py-2">y</th></tr></thead>
                      <tbody>
                        {[[-2,-1],[-1,1],[0,3],[1,5],[2,7]].map(([x,y],i) => (
                          <tr key={i} className="border-t text-center"><td className="px-3 py-2">{x}</td><td className="px-3 py-2 font-bold text-primary">{y}</td></tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3 pb-2 border-b">2 — Graph Description</p>
                    <div className="bg-muted/40 rounded-lg p-4 border text-sm text-muted-foreground space-y-2">
                      <p>Plot each (x, y) pair on the Cartesian plane.</p>
                      <p>Connect the points — they form a straight line.</p>
                      <p>The line crosses the y-axis at <strong className="text-foreground">(0, 3)</strong> — this is the y-intercept.</p>
                      <p>For every 1 step right, the line goes 2 steps up.</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3 pb-2 border-b">3 — Equation</p>
                    <div className="bg-muted/40 rounded-lg p-4 border text-sm space-y-2">
                      <p className="font-mono text-xl font-bold text-primary text-center">y = 2x + 3</p>
                      <p className="text-muted-foreground">Slope m = 2 (rate of change)</p>
                      <p className="text-muted-foreground">y-intercept b = 3 (starting value)</p>
                      <p className="text-muted-foreground">Check: x = 2 → y = 2(2)+3 = 7 ✓</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* 4 — Slope */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-blue-700 flex items-center justify-center text-white font-bold text-lg shrink-0">4</div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold">Slope</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Card className="bg-secondary shadow-sm">
                <CardContent className="p-5">
                  <h3 className="font-bold text-secondary-foreground text-sm uppercase tracking-wide mb-3">Slope Formula</h3>
                  <div className="font-mono text-2xl font-bold text-center py-4 text-secondary-foreground">m = rise/run = Δy/Δx</div>
                  <div className="font-mono text-sm text-center text-secondary-foreground/70">m = (y₂ − y₁) / (x₂ − x₁)</div>
                  <p className="text-xs text-secondary-foreground/60 mt-3 text-center">Rise = vertical change | Run = horizontal change</p>
                </CardContent>
              </Card>
              <Card className="shadow-sm">
                <CardContent className="p-5">
                  <h3 className="font-serif font-bold mb-3">Calculating Slope from Two Points</h3>
                  <p className="text-xs text-muted-foreground mb-2">Find the slope of the line through (2, 5) and (6, 13)</p>
                  <div className="bg-muted/40 rounded p-3 border font-mono text-xs space-y-1">
                    <p>m = (y₂ − y₁)/(x₂ − x₁)</p>
                    <p>= (13 − 5)/(6 − 2)</p>
                    <p>= 8/4</p>
                    <p className="font-bold text-primary">m = 2</p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">The slope is 2 — for every 1 unit right, the line goes 2 units up.</p>
                </CardContent>
              </Card>
            </div>
            <Card className="shadow-sm overflow-hidden">
              <div className="bg-muted/50 px-5 py-3 border-b font-bold text-sm">Types of Slope</div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-secondary text-secondary-foreground">
                      <th className="text-left px-4 py-3 font-semibold">Type</th>
                      <th className="text-left px-4 py-3 font-semibold">Symbol</th>
                      <th className="text-left px-4 py-3 font-semibold">Description</th>
                      <th className="text-left px-4 py-3 font-semibold">Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    {slopeTypes.map((row, i) => (
                      <tr key={i} className="border-t hover:bg-muted/30 transition-colors">
                        <td className="px-4 py-3 font-bold text-primary">{row.type}</td>
                        <td className="px-4 py-3 font-mono">{row.symbol}</td>
                        <td className="px-4 py-3 text-muted-foreground">{row.description}</td>
                        <td className="px-4 py-3 font-mono text-muted-foreground">{row.example}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </section>

          {/* 5 — Slope-Intercept Form */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-amber-600 flex items-center justify-center text-white font-bold text-lg shrink-0">5</div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold">Slope-Intercept Form: y = mx + b</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <Card className="border-l-4 border-l-amber-500 shadow-sm mb-6">
              <CardContent className="p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="font-mono text-3xl font-bold text-primary mb-3">y = mx + b</div>
                    <p className="text-sm text-muted-foreground"><strong className="text-foreground">m</strong> = slope (rate of change)</p>
                    <p className="text-sm text-muted-foreground"><strong className="text-foreground">b</strong> = y-intercept (where the line crosses the y-axis; value of y when x = 0)</p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p className="text-muted-foreground">From y = −3x + 7:</p>
                    <p>m = <strong className="text-primary">−3</strong> (slope: 3 down, 1 right)</p>
                    <p>b = <strong className="text-primary">7</strong> (y-intercept: point (0, 7))</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-sm">
              <CardContent className="p-5">
                <h3 className="font-serif font-bold mb-4">Graphing from Slope-Intercept Form</h3>
                <p className="text-sm text-muted-foreground mb-4">Graph y = (2/3)x − 1</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="bg-muted/40 rounded p-4 border font-mono text-xs space-y-2">
                    <p><span className="text-muted-foreground">Step 1:</span> Identify b = −1 → plot (0, −1)</p>
                    <p><span className="text-muted-foreground">Step 2:</span> m = 2/3 → rise 2, run 3</p>
                    <p><span className="text-muted-foreground">Step 3:</span> From (0, −1), go right 3, up 2 → (3, 1)</p>
                    <p><span className="text-muted-foreground">Step 4:</span> From (0, −1), go left 3, down 2 → (−3, −3)</p>
                    <p className="font-bold text-primary">Step 5: Draw line through all points</p>
                  </div>
                  <div className="space-y-2 text-xs text-muted-foreground">
                    <p className="font-semibold text-foreground">Check points on the line:</p>
                    <p>x = 0: y = 2/3(0) − 1 = −1 ✓</p>
                    <p>x = 3: y = 2/3(3) − 1 = 2 − 1 = 1 ✓</p>
                    <p>x = 6: y = 2/3(6) − 1 = 4 − 1 = 3 ✓</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* 6 — Domain & Range */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-sky-700 flex items-center justify-center text-white font-bold text-lg shrink-0">6</div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold">Domain and Range</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-sky-500 shadow-sm">
                <CardContent className="p-5">
                  <h3 className="font-serif font-bold mb-3">Definitions</h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p><strong className="text-foreground">Domain:</strong> The set of all possible <em>input values</em> (x-values) for a relation.</p>
                    <p><strong className="text-foreground">Range:</strong> The set of all possible <em>output values</em> (y-values) for a relation.</p>
                    <p>For a continuous linear relation with no restrictions, both the domain and range are all real numbers.</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-sm">
                <CardContent className="p-5">
                  <h3 className="font-serif font-bold mb-3">Notation</h3>
                  <div className="space-y-3 text-sm">
                    <div className="bg-muted/40 rounded p-3 border">
                      <p className="font-semibold text-foreground mb-1">Set Notation</p>
                      <p className="font-mono text-xs text-muted-foreground">&#123;x | x ∈ ℝ&#125; — all real numbers</p>
                      <p className="font-mono text-xs text-muted-foreground">&#123;x | x ≥ 0, x ∈ ℝ&#125; — non-negative reals</p>
                    </div>
                    <div className="bg-muted/40 rounded p-3 border">
                      <p className="font-semibold text-foreground mb-1">Interval Notation</p>
                      <p className="font-mono text-xs text-muted-foreground">(−∞, ∞) — all real numbers</p>
                      <p className="font-mono text-xs text-muted-foreground">[0, ∞) — zero and above</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* 7 — Interpolation & Extrapolation */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-emerald-700 flex items-center justify-center text-white font-bold text-lg shrink-0">7</div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold">Interpolating and Extrapolating</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Card className="border-l-4 border-l-emerald-500 shadow-sm">
                <CardContent className="p-5">
                  <h3 className="font-serif font-bold mb-2">Interpolation</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">Estimating a value <strong className="text-foreground">between</strong> two known data points on a graph. You are reading a value within the range of the collected data.</p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-violet-500 shadow-sm">
                <CardContent className="p-5">
                  <h3 className="font-serif font-bold mb-2">Extrapolation</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">Predicting a value <strong className="text-foreground">beyond</strong> the known data points by extending the line. Extrapolation is less reliable than interpolation — real-world patterns may not continue.</p>
                </CardContent>
              </Card>
            </div>
            <Card className="shadow-sm">
              <CardContent className="p-5">
                <p className="font-semibold text-primary mb-2">Example: Car Trip</p>
                <p className="text-xs text-muted-foreground mb-4">A car travels at a constant speed. After 2 hours, it has gone 160 km. After 5 hours, it has gone 400 km.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="bg-muted/40 rounded p-3 border space-y-1">
                    <p className="font-bold text-foreground">Find the equation:</p>
                    <p>Slope = (400−160)/(5−2) = 240/3 = 80 km/h</p>
                    <p>Using (2, 160): 160 = 80(2) + b → b = 0</p>
                    <p className="font-bold text-primary">y = 80x (direct variation)</p>
                  </div>
                  <div className="bg-muted/40 rounded p-3 border space-y-1">
                    <p className="font-bold text-foreground">Interpolate: distance at 3.5 hours?</p>
                    <p>y = 80(3.5) = 280 km ← within data range</p>
                    <p className="font-bold text-foreground mt-2">Extrapolate: distance at 8 hours?</p>
                    <p>y = 80(8) = 640 km ← beyond data range</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* 8 — Direct vs Partial Variation */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-rose-700 flex items-center justify-center text-white font-bold text-lg shrink-0">8</div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold">Direct vs Partial Variation</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <Card className="shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-secondary text-secondary-foreground">
                      <th className="text-left px-4 py-3 font-semibold">Feature</th>
                      <th className="text-left px-4 py-3 font-semibold">Direct Variation</th>
                      <th className="text-left px-4 py-3 font-semibold">Partial Variation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Equation form", "y = mx (b = 0)", "y = mx + b (b ≠ 0)"],
                      ["Graph", "Line passes through origin (0, 0)", "Line crosses y-axis at b ≠ 0"],
                      ["Starting value", "Zero (no initial value)", "b = fixed initial amount"],
                      ["Example", "Distance = speed × time", "Cost = 5n + 20 (flat fee + per unit)"],
                      ["Table check", "y/x is constant for all points", "First differences are constant but y/x varies"],
                    ].map(([feat, dir, part], i) => (
                      <tr key={i} className="border-t hover:bg-muted/30 transition-colors">
                        <td className="px-4 py-3 font-semibold text-muted-foreground">{feat}</td>
                        <td className="px-4 py-3">{dir}</td>
                        <td className="px-4 py-3">{part}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </section>

          <PracticeProblems problems={unit5Problems} accentClass="border-l-violet-500" />
          <GeneratedPractice generateProblem={generateUnit5} unitTitle="Linear Relations" accentColor="border-l-violet-500" />

          <UnitCompleteToggle unitId="math-9-unit-5" />

          {/* Continue */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-xl font-serif font-bold whitespace-nowrap">Continue to Next Unit</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {unitNav.filter(u => !u.active).slice(4, 7).map((u) => (
                <Link key={u.href} href={u.href}>
                  <Card className="h-full hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer border-2 hover:border-primary/30">
                    <CardContent className="p-5 flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">{u.icon}</div>
                      <div>
                        <p className="font-semibold text-sm text-foreground">{u.label}</p>
                        <p className="text-xs text-muted-foreground">View unit →</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
