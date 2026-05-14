import { Link } from "wouter";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ChevronRight, Hash, Sigma, Triangle, BarChart3 } from "lucide-react";
import PracticeProblems, { type Problem } from "@/components/PracticeProblems";

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
  { label: "Unit 5: Linear Relations", href: "/resources/math-9/unit-5", icon: <Sigma className="w-4 h-4" /> },
  { label: "Unit 6: Equations", href: "/resources/math-9/unit-6", icon: <Hash className="w-4 h-4" />, active: true },
  { label: "Unit 7: Circles", href: "/resources/math-9/unit-7", icon: <Triangle className="w-4 h-4" /> },
  { label: "Unit 8: Data", href: "/resources/math-9/unit-8", icon: <BarChart3 className="w-4 h-4" /> },
];

const inequalitySymbols = [
  { symbol: "<", meaning: "is less than", numberLine: "Open circle, arrow left" },
  { symbol: ">", meaning: "is greater than", numberLine: "Open circle, arrow right" },
  { symbol: "≤", meaning: "is less than or equal to", numberLine: "Closed circle, arrow left" },
  { symbol: "≥", meaning: "is greater than or equal to", numberLine: "Closed circle, arrow right" },
];

export const unit6Problems: Problem[] = [
  {
    level: "Basic",
    question: "Solve: x + 7 = −3",
    steps: [
      "Subtract 7 from both sides",
      "x = −3 − 7",
    ],
    answer: "x = −10 (check: −10 + 7 = −3 ✓)",
  },
  {
    level: "Basic",
    question: "Solve: x/4 = −6",
    steps: [
      "Multiply both sides by 4",
      "x = −6 × 4",
    ],
    answer: "x = −24 (check: −24/4 = −6 ✓)",
  },
  {
    level: "Basic",
    question: "Solve: 3x − 5 = 16",
    steps: [
      "Add 5 to both sides: 3x = 21",
      "Divide both sides by 3: x = 7",
    ],
    answer: "x = 7 (check: 3(7)−5 = 16 ✓)",
  },
  {
    level: "Intermediate",
    question: "Solve: (2/3)x − 4 = 2",
    steps: [
      "Add 4 to both sides: (2/3)x = 6",
      "Multiply both sides by 3/2: x = 6 × (3/2) = 9",
    ],
    answer: "x = 9 (check: (2/3)(9)−4 = 6−4 = 2 ✓)",
  },
  {
    level: "Intermediate",
    question: "Solve: 5x − 2 = 3x + 10",
    steps: [
      "Subtract 3x from both sides: 2x − 2 = 10",
      "Add 2 to both sides: 2x = 12",
      "Divide by 2: x = 6",
    ],
    answer: "x = 6 (check: 5(6)−2 = 28, 3(6)+10 = 28 ✓)",
  },
  {
    level: "Intermediate",
    question: "Solve the inequality: −3x + 4 > 13",
    steps: [
      "Subtract 4 from both sides: −3x > 9",
      "Divide both sides by −3 → FLIP the inequality symbol!",
      "x < −3",
    ],
    answer: "x < −3 (open circle at −3, arrow pointing left)",
  },
  {
    level: "Challenge",
    question: "Solve: 2(3x − 1) = 4(x + 3)",
    steps: [
      "Distribute: 6x − 2 = 4x + 12",
      "Subtract 4x: 2x − 2 = 12",
      "Add 2: 2x = 14",
      "Divide by 2: x = 7",
    ],
    answer: "x = 7 (check: 2(20) = 40, 4(10) = 40 ✓)",
  },
  {
    level: "Challenge",
    question: "A cell phone plan costs $25/month plus $0.10 per text. Maria's bill was $43. How many texts did she send? Write and solve an equation.",
    steps: [
      "Let t = number of texts",
      "Equation: 25 + 0.10t = 43",
      "Subtract 25: 0.10t = 18",
      "Divide by 0.10: t = 180",
    ],
    answer: "Maria sent 180 texts",
  },
];

export default function Math9Unit6() {
  return (
    <Layout>
      <div className="bg-muted/40 border-b">
        <div className="container mx-auto px-4 md:px-6 py-3 flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
          <Link href="/resources" className="hover:text-primary transition-colors flex items-center gap-1"><ArrowLeft className="w-4 h-4" />Resources</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/resources/math-9" className="hover:text-primary transition-colors">Math 9</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground font-medium">Unit 6: Equations & Inequalities</span>
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
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-secondary-foreground mb-4 leading-tight">Unit 6: Equations & Inequalities</h1>
            <p className="text-secondary-foreground/75 text-lg leading-relaxed mb-8 max-w-2xl">
              From solving multi-step equations with rational coefficients to graphing solution sets on a number line, this unit gives you the algebraic tools to model and solve real-world problems.
            </p>
            <div className="flex flex-wrap gap-2">
              {["One-Step Equations", "Two-Step Equations", "Rational Coefficients", "Variables on Both Sides", "Inequalities", "Number Line", "Word Problems"].map((t) => (
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
                { num: "PR9.1", text: "Model and solve problems, using linear equations of the form ax = b; x/a = b; ax + b = c; x/a + b = c; a(x + b) = c where a, b, and c are rational numbers." },
                { num: "PR9.2", text: "Explain and illustrate strategies to solve single variable linear inequalities with rational coefficients within a problem-solving context." },
              ].map((o, i) => (
                <motion.div key={i} variants={fadeUp} className="flex gap-3 p-4 rounded-xl bg-muted/40 border border-l-4 border-l-emerald-600">
                  <span className="font-bold text-emerald-700 text-sm shrink-0 mt-0.5">{o.num}:</span>
                  <p className="text-sm text-foreground/80 leading-relaxed">{o.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* 2 — Solving Linear Equations */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-emerald-700 flex items-center justify-center text-white font-bold text-lg shrink-0">2</div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold">Solving Linear Equations</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <Card className="bg-emerald-50 border-emerald-200 shadow-sm mb-6">
              <CardContent className="p-5">
                <h3 className="font-bold text-emerald-900 mb-2">Golden Rule</h3>
                <p className="text-sm text-emerald-800 leading-relaxed">Whatever you do to one side of the equation, you must do to the other side. The goal is to <strong>isolate the variable</strong> — get x (or whatever variable) alone on one side.</p>
              </CardContent>
            </Card>
            <div className="space-y-4">
              {[
                {
                  type: "One-Step", q: "x/3 = −5",
                  steps: ["Multiply both sides by 3:", "x = −5 × 3", "x = −15"],
                  check: "Check: (−15)/3 = −5 ✓",
                },
                {
                  type: "Two-Step", q: "2x − 7 = 11",
                  steps: ["Add 7 to both sides: 2x = 18", "Divide both sides by 2:", "x = 9"],
                  check: "Check: 2(9) − 7 = 18 − 7 = 11 ✓",
                },
                {
                  type: "Rational Coefficients", q: "(3/4)x + 2 = −1",
                  steps: ["Subtract 2: (3/4)x = −3", "Multiply both sides by 4/3:", "x = −3 × (4/3) = −4"],
                  check: "Check: (3/4)(−4) + 2 = −3 + 2 = −1 ✓",
                },
                {
                  type: "Multi-Step with Brackets", q: "3(2x − 4) = 18",
                  steps: ["Distribute: 6x − 12 = 18", "Add 12: 6x = 30", "Divide by 6: x = 5"],
                  check: "Check: 3(2(5) − 4) = 3(6) = 18 ✓",
                },
              ].map((ex, i) => (
                <Card key={i} className="shadow-sm">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full shrink-0 mt-0.5 ${
                        ex.type === "One-Step" ? "bg-green-100 text-green-800" :
                        ex.type === "Two-Step" ? "bg-amber-100 text-amber-800" :
                        ex.type === "Rational Coefficients" ? "bg-blue-100 text-blue-800" :
                        "bg-violet-100 text-violet-800"
                      }`}>{ex.type}</span>
                      <div className="flex-1">
                        <p className="font-mono text-sm font-bold text-primary mb-3">{ex.q}</p>
                        <div className="bg-muted/40 rounded p-3 border font-mono text-xs space-y-1 mb-2">
                          {ex.steps.map((s, si) => <p key={si}>{s}</p>)}
                        </div>
                        <p className="text-xs text-emerald-700 font-mono">{ex.check}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* 3 — Variables on Both Sides */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-blue-700 flex items-center justify-center text-white font-bold text-lg shrink-0">3</div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold">Variables on Both Sides</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <Card className="border-l-4 border-l-blue-500 shadow-sm mb-4">
              <CardContent className="p-5">
                <h3 className="font-serif font-bold mb-2">Strategy</h3>
                <p className="text-sm text-muted-foreground">Collect all variable terms on one side and all constant terms on the other. It doesn't matter which side the variable ends up on — just be consistent and show every step.</p>
              </CardContent>
            </Card>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { q: "5x − 3 = 2x + 9", steps: ["Subtract 2x: 3x − 3 = 9", "Add 3: 3x = 12", "Divide by 3: x = 4"], check: "5(4)−3 = 17, 2(4)+9 = 17 ✓" },
                { q: "4(x − 2) = 3x + 7", steps: ["Distribute: 4x − 8 = 3x + 7", "Subtract 3x: x − 8 = 7", "Add 8: x = 15"], check: "4(13) = 52, 3(15)+7 = 52 ✓" },
              ].map((ex, i) => (
                <Card key={i} className="shadow-sm">
                  <CardContent className="p-5">
                    <p className="font-mono text-sm font-bold text-primary mb-3">{ex.q}</p>
                    <div className="bg-muted/40 rounded p-3 border font-mono text-xs space-y-1 mb-2">
                      {ex.steps.map((s, si) => <p key={si}>{s}</p>)}
                    </div>
                    <p className="text-xs text-emerald-700 font-mono">Check: {ex.check}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* 4 — Inequalities */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-amber-600 flex items-center justify-center text-white font-bold text-lg shrink-0">4</div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold">Linear Inequalities</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <Card className="shadow-sm overflow-hidden mb-6">
              <div className="bg-muted/50 px-5 py-3 border-b font-bold text-sm">Inequality Symbols</div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-secondary text-secondary-foreground">
                      <th className="text-left px-4 py-3 font-semibold">Symbol</th>
                      <th className="text-left px-4 py-3 font-semibold">Meaning</th>
                      <th className="text-left px-4 py-3 font-semibold">Number Line Graph</th>
                    </tr>
                  </thead>
                  <tbody>
                    {inequalitySymbols.map((row, i) => (
                      <tr key={i} className="border-t hover:bg-muted/30 transition-colors">
                        <td className="px-4 py-3 font-mono text-xl font-bold text-primary">{row.symbol}</td>
                        <td className="px-4 py-3">{row.meaning}</td>
                        <td className="px-4 py-3 text-muted-foreground text-xs">{row.numberLine}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
            <Card className="bg-rose-50 border-rose-200 shadow-sm mb-6">
              <CardContent className="p-5">
                <h3 className="font-bold text-rose-800 mb-2">Critical Rule: Multiplying/Dividing by a Negative</h3>
                <p className="text-sm text-rose-700 leading-relaxed">When you <strong>multiply or divide both sides by a negative number</strong>, you must <strong>flip (reverse) the inequality symbol</strong>.</p>
                <div className="mt-3 font-mono text-xs bg-white rounded p-3 border border-rose-200 space-y-1">
                  <p>−2x &lt; 8</p>
                  <p>Divide both sides by −2 → flip the sign!</p>
                  <p className="font-bold text-rose-700">x &gt; −4</p>
                </div>
              </CardContent>
            </Card>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { q: "3x + 5 ≤ 14", steps: ["Subtract 5: 3x ≤ 9", "Divide by 3 (positive — no flip!): x ≤ 3"], graph: "Closed circle at 3, arrow pointing left", ans: "x ≤ 3" },
                { q: "−2x + 1 > 7", steps: ["Subtract 1: −2x > 6", "Divide by −2 → FLIP the sign!", "x < −3"], graph: "Open circle at −3, arrow pointing left", ans: "x < −3" },
                { q: "4x − 3 ≥ 2x + 5", steps: ["Subtract 2x: 2x − 3 ≥ 5", "Add 3: 2x ≥ 8", "Divide by 2: x ≥ 4"], graph: "Closed circle at 4, arrow pointing right", ans: "x ≥ 4" },
                { q: "(x/3) − 2 < 1", steps: ["Add 2: x/3 < 3", "Multiply by 3 (positive — no flip!): x < 9"], graph: "Open circle at 9, arrow pointing left", ans: "x < 9" },
              ].map((ex, i) => (
                <Card key={i} className="shadow-sm">
                  <CardContent className="p-5">
                    <p className="font-mono text-sm font-bold text-primary mb-3">{ex.q}</p>
                    <div className="bg-muted/40 rounded p-3 border font-mono text-xs space-y-1 mb-2">
                      {ex.steps.map((s, si) => <p key={si}>{s}</p>)}
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Graph: {ex.graph}</p>
                    <p className="text-xs font-bold text-primary mt-1">Solution: {ex.ans}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* 5 — Word Problems */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-violet-700 flex items-center justify-center text-white font-bold text-lg shrink-0">5</div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold">Modelling with Equations</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <Card className="border-l-4 border-l-violet-500 shadow-sm mb-6">
              <CardContent className="p-5">
                <h3 className="font-serif font-bold mb-3">Word Problem Strategy</h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  {["Define the variable (what does x represent?)", "Write an equation from the problem description", "Solve the equation algebraically", "Verify the answer makes sense in context", "Write a sentence answering the question"].map((s, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs font-bold shrink-0 mt-0.5">{i + 1}</div>
                      <p>{s}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="shadow-sm">
                <CardContent className="p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Example 1</p>
                  <p className="text-sm text-muted-foreground mb-3">A plumber charges a $75 call-out fee plus $50 per hour. A customer's total bill is $275. How many hours did the plumber work?</p>
                  <div className="bg-muted/40 rounded p-3 border font-mono text-xs space-y-1">
                    <p>Let h = number of hours</p>
                    <p>75 + 50h = 275</p>
                    <p>50h = 200</p>
                    <p className="font-bold text-primary">h = 4 hours</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-sm">
                <CardContent className="p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Example 2</p>
                  <p className="text-sm text-muted-foreground mb-3">Two friends are saving money. Anika has $120 and saves $15/week. Bolu has $40 and saves $25/week. When will they have the same amount?</p>
                  <div className="bg-muted/40 rounded p-3 border font-mono text-xs space-y-1">
                    <p>Let w = weeks</p>
                    <p>120 + 15w = 40 + 25w</p>
                    <p>80 = 10w</p>
                    <p className="font-bold text-primary">w = 8 weeks</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* 6 — Common Errors */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-xl font-serif font-bold whitespace-nowrap">Common Errors to Avoid</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { err: "Forgetting to flip the inequality", detail: "When dividing or multiplying by a negative, the inequality symbol MUST be reversed. This is the most common error on tests.", bg: "border-l-rose-500 bg-rose-50" },
                { err: "Not distributing correctly", detail: "In 3(2x − 5), the 3 must multiply BOTH terms: 6x − 15, not 6x − 5.", bg: "border-l-amber-500 bg-amber-50" },
                { err: "Adding/subtracting to only one side", detail: "Every operation must be done to BOTH sides of the equation equally. Forgetting this breaks the equality.", bg: "border-l-blue-500 bg-blue-50" },
                { err: "Not checking the solution", detail: "Always substitute your answer back into the original equation to verify. One minute of checking saves marks on every test.", bg: "border-l-emerald-500 bg-emerald-50" },
              ].map((card, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <Card className={`h-full border-l-4 shadow-sm ${card.bg}`}>
                    <CardContent className="p-5">
                      <h3 className="font-bold mb-2 text-sm">{card.err}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{card.detail}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </section>

          <PracticeProblems problems={unit6Problems} accentClass="border-l-emerald-500" />

          {/* Continue */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-xl font-serif font-bold whitespace-nowrap">Continue to Next Unit</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {unitNav.filter(u => !u.active).slice(5, 7).map((u) => (
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
