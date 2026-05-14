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
  { label: "Unit 1: Rational Numbers", href: "/resources/math-9/unit-1", icon: <Hash className="w-4 h-4" />, active: true },
  { label: "Unit 2: Powers", href: "/resources/math-9/unit-2", icon: <Sigma className="w-4 h-4" /> },
  { label: "Unit 3: Polynomials", href: "/resources/math-9/unit-3", icon: <Hash className="w-4 h-4" /> },
  { label: "Unit 4: Geometry", href: "/resources/math-9/unit-4", icon: <Triangle className="w-4 h-4" /> },
  { label: "Unit 5: Linear Relations", href: "/resources/math-9/unit-5", icon: <Sigma className="w-4 h-4" /> },
  { label: "Unit 6: Equations", href: "/resources/math-9/unit-6", icon: <Hash className="w-4 h-4" /> },
  { label: "Unit 7: Circles", href: "/resources/math-9/unit-7", icon: <Triangle className="w-4 h-4" /> },
  { label: "Unit 8: Data", href: "/resources/math-9/unit-8", icon: <BarChart3 className="w-4 h-4" /> },
];

const rationalExamples = [
  { category: "Integers", examples: "−5, −1, 0, 3, 12", asDecimal: "−5.0, −1.0, 0.0, 3.0", note: "Whole numbers (pos/neg/zero)" },
  { category: "Fractions", examples: "1/2, −3/4, 7/3, −11/5", asDecimal: "0.5, −0.75, 2.333…, −2.2", note: "Ratio of two integers (b ≠ 0)" },
  { category: "Terminating Decimals", examples: "0.25, −0.8, 3.125", asDecimal: "1/4, −4/5, 25/8", note: "Decimal ends (finite digits)" },
  { category: "Repeating Decimals", examples: "0.333…, 0.181818…", asDecimal: "1/3, 2/11", note: "One or more digits repeat forever" },
];

export const unit1Problems: Problem[] = [
  {
    level: "Basic",
    question: "Convert −0.45 to a fraction in lowest terms.",
    steps: [
      "Write over 100: −0.45 = −45/100",
      "Find GCF of 45 and 100: GCF = 5",
      "Divide numerator and denominator by 5: −45/100 = −9/20",
    ],
    answer: "−9/20",
  },
  {
    level: "Basic",
    question: "Order from least to greatest: −1/2, 0.4, −0.75, 3/4",
    steps: [
      "Convert all to decimals: −1/2 = −0.5, 0.4 = 0.4, −0.75 = −0.75, 3/4 = 0.75",
      "Order the decimals: −0.75 < −0.5 < 0.4 < 0.75",
    ],
    answer: "−3/4 < −1/2 < 0.4 < 3/4",
  },
  {
    level: "Basic",
    question: "Calculate: 2/3 + (−5/6)",
    steps: [
      "LCD of 3 and 6 = 6",
      "2/3 = 4/6",
      "4/6 + (−5/6) = −1/6",
    ],
    answer: "−1/6",
  },
  {
    level: "Basic",
    question: "Calculate: −3/4 − (−1/2)",
    steps: [
      "Subtracting a negative = adding: −3/4 + 1/2",
      "LCD = 4: −3/4 + 2/4 = −1/4",
    ],
    answer: "−1/4",
  },
  {
    level: "Intermediate",
    question: "Calculate: (−5/6) × (3/10)",
    steps: [
      "Multiply numerators: −5 × 3 = −15",
      "Multiply denominators: 6 × 10 = 60",
      "= −15/60",
      "Simplify (GCF = 15): −15/60 = −1/4",
    ],
    answer: "−1/4",
  },
  {
    level: "Intermediate",
    question: "Calculate: (−2/3) ÷ (4/9)",
    steps: [
      "Multiply by the reciprocal: (−2/3) × (9/4)",
      "= (−2 × 9) / (3 × 4) = −18/12",
      "Simplify (GCF = 6): −18/12 = −3/2",
    ],
    answer: "−3/2 or −1 1/2",
  },
  {
    level: "Intermediate",
    question: "Evaluate using BEDMAS: 1/2 + (1/3 − 1/4) × 2",
    steps: [
      "B: (1/3 − 1/4) — LCD = 12: 4/12 − 3/12 = 1/12",
      "M: 1/12 × 2 = 2/12 = 1/6",
      "A: 1/2 + 1/6 — LCD = 6: 3/6 + 1/6 = 4/6 = 2/3",
    ],
    answer: "2/3",
  },
  {
    level: "Challenge",
    question: "Evaluate: (−3/4)² ÷ (3/8) + (−1/2)",
    steps: [
      "E: (−3/4)² = 9/16",
      "D: (9/16) ÷ (3/8) = (9/16) × (8/3) = 72/48 = 3/2",
      "A/S: 3/2 + (−1/2) = 3/2 − 1/2 = 2/2 = 1",
    ],
    answer: "1",
  },
];

export default function Math9Unit1() {
  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-muted/40 border-b">
        <div className="container mx-auto px-4 md:px-6 py-3 flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
          <Link href="/resources" className="hover:text-primary transition-colors flex items-center gap-1"><ArrowLeft className="w-4 h-4" />Resources</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/resources/math-9" className="hover:text-primary transition-colors">Math 9</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground font-medium">Unit 1: Rational Numbers</span>
        </div>
      </div>

      {/* Unit Nav */}
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

      {/* Hero */}
      <section className="relative bg-secondary overflow-hidden py-16 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(var(--primary)/0.15),transparent_60%)]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="inline-block bg-primary/20 text-primary-foreground/80 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">Alberta Math 9 — Number Strand</span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-secondary-foreground mb-4 leading-tight">Unit 1: Rational Numbers</h1>
            <p className="text-secondary-foreground/75 text-lg leading-relaxed mb-8 max-w-2xl">
              How do we represent, compare, and operate on numbers that aren't whole? Rational numbers extend our number system to fractions, decimals, and negatives — and the rules of arithmetic adapt with them.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Fractions & Decimals", "Ordering Rationals", "Add & Subtract", "Multiply & Divide", "BEDMAS with Rationals", "Sign Rules"].map((t) => (
                <span key={t} className="text-xs font-semibold px-3 py-1 rounded-full bg-secondary-foreground/10 text-secondary-foreground/80 border border-secondary-foreground/15">{t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="py-14 bg-background">
        <div className="container mx-auto px-4 md:px-6 space-y-16">

          {/* 1 — Program Outcomes */}
          <motion.section variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl md:text-3xl font-serif font-bold whitespace-nowrap">Alberta Program Outcomes</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="space-y-3">
              {[
                { num: "N9.1", text: "Demonstrate an understanding of powers with integral bases (excluding base 0) and whole number exponents by representing repeated multiplication, using patterns to show that a power with an exponent of zero is equal to one, and solving problems." },
                { num: "N9.2", text: "Demonstrate an understanding of rational numbers by comparing and ordering rational numbers and solving problems that involve arithmetic operations on rational numbers." },
                { num: "N9.3", text: "Explain and apply the order of operations, including exponents, with and without technology." },
              ].map((o, i) => (
                <motion.div key={i} variants={fadeUp} className="flex gap-3 p-4 rounded-xl bg-muted/40 border border-l-4 border-l-amber-500">
                  <span className="font-bold text-amber-700 text-sm shrink-0 mt-0.5">{o.num}:</span>
                  <p className="text-sm text-foreground/80 leading-relaxed">{o.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* 2 — What is a Rational Number */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-amber-600 flex items-center justify-center text-white font-bold text-lg shrink-0">2</div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold">What is a Rational Number?</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <Card className="mb-6 border-l-4 border-l-amber-500 shadow-sm">
              <CardContent className="p-5">
                <h3 className="font-serif font-bold mb-2">Definition</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">A <strong className="text-foreground">rational number</strong> is any number that can be written as a fraction <strong className="text-foreground">a/b</strong>, where <em>a</em> and <em>b</em> are integers and <em>b ≠ 0</em>. Rational numbers include all integers, fractions, terminating decimals, and repeating decimals.</p>
              </CardContent>
            </Card>
            <Card className="shadow-sm overflow-hidden mb-6">
              <div className="bg-muted/50 px-5 py-3 border-b font-bold text-sm">Types of Rational Numbers</div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-secondary text-secondary-foreground">
                      <th className="text-left px-4 py-3 font-semibold">Category</th>
                      <th className="text-left px-4 py-3 font-semibold">Examples</th>
                      <th className="text-left px-4 py-3 font-semibold">As Decimal / Fraction</th>
                      <th className="text-left px-4 py-3 font-semibold">Key Property</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rationalExamples.map((row, i) => (
                      <tr key={i} className="border-t hover:bg-muted/30 transition-colors">
                        <td className="px-4 py-3 font-semibold text-amber-700">{row.category}</td>
                        <td className="px-4 py-3 font-mono">{row.examples}</td>
                        <td className="px-4 py-3 font-mono text-muted-foreground">{row.asDecimal}</td>
                        <td className="px-4 py-3 text-muted-foreground text-xs">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-amber-50 border-amber-200 shadow-sm">
                <CardContent className="p-5">
                  <h3 className="font-bold text-amber-900 mb-2 text-sm">Number Line Placement</h3>
                  <p className="text-sm text-amber-800 leading-relaxed mb-3">To place a rational number on a number line: convert to a decimal first, then locate it between the nearest integers. Negative values are to the left of zero.</p>
                  <div className="font-mono text-xs bg-white rounded p-2 border border-amber-200 space-y-1">
                    <p>−3/4 = −0.75 → between −1 and 0 (closer to −1)</p>
                    <p>7/4 = 1.75 → between 1 and 2 (closer to 2)</p>
                    <p>−5/3 ≈ −1.667 → between −2 and −1</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-teal-500 shadow-sm">
                <CardContent className="p-5">
                  <h3 className="font-serif font-bold mb-3">Converting Between Forms</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p><strong className="text-foreground">Fraction → Decimal:</strong> Divide numerator by denominator. If it terminates or repeats → rational.</p>
                    <p><strong className="text-foreground">Terminating decimal → Fraction:</strong> Write over a power of 10 (10, 100, 1000…) and simplify.</p>
                    <div className="font-mono text-xs bg-muted/40 rounded p-3 border space-y-1 mt-2">
                      <p>0.6 = 6/10 = <strong>3/5</strong></p>
                      <p>0.35 = 35/100 = <strong>7/20</strong></p>
                      <p>−0.125 = −125/1000 = <strong>−1/8</strong></p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* 3 — Ordering Rational Numbers */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-teal-700 flex items-center justify-center text-white font-bold text-lg shrink-0">3</div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold">Ordering Rational Numbers</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <Card className="shadow-sm mb-6">
              <CardContent className="p-5">
                <h3 className="font-serif font-bold mb-4">Strategy: Convert to Decimals or Common Denominators</h3>
                <div className="space-y-5 text-sm">
                  <div>
                    <p className="font-semibold text-primary mb-2">Example 1: Order −2/3, 1/2, −3/4, 0.6 from least to greatest</p>
                    <div className="bg-muted/40 rounded p-4 border font-mono text-xs space-y-1">
                      <p className="text-muted-foreground">Step 1: Convert all to decimals</p>
                      <p>−2/3 ≈ −0.667 | 1/2 = 0.500 | −3/4 = −0.750 | 0.6 = 0.600</p>
                      <p className="text-muted-foreground">Step 2: Order the decimals</p>
                      <p>−0.750 &lt; −0.667 &lt; 0.500 &lt; 0.600</p>
                      <p className="font-bold text-primary">Answer: −3/4 &lt; −2/3 &lt; 1/2 &lt; 0.6</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-2">Example 2: Order 5/6, 7/8, 2/3 using common denominators</p>
                    <div className="bg-muted/40 rounded p-4 border font-mono text-xs space-y-1">
                      <p className="text-muted-foreground">LCD = 24</p>
                      <p>5/6 = 20/24 | 7/8 = 21/24 | 2/3 = 16/24</p>
                      <p className="font-bold text-primary">Answer: 2/3 &lt; 5/6 &lt; 7/8</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-amber-50 border-amber-200 shadow-sm">
              <CardContent className="p-5">
                <h3 className="font-bold text-amber-900 mb-2">Key Rule for Negatives</h3>
                <p className="text-sm text-amber-800 leading-relaxed">When comparing negative fractions, the one with the <strong>larger absolute value</strong> is actually <strong>smaller</strong> (further left on the number line). For example: −3/4 &lt; −1/2 because |−3/4| &gt; |−1/2|.</p>
              </CardContent>
            </Card>
          </section>

          {/* 4 — Operations */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-blue-700 flex items-center justify-center text-white font-bold text-lg shrink-0">4</div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold">Operations with Rational Numbers</h2>
              <div className="flex-1 h-px bg-border" />
            </div>

            <div className="space-y-8">
              {/* Addition & Subtraction */}
              <Card className="shadow-sm overflow-hidden">
                <div className="bg-muted/50 px-5 py-3 border-b font-bold text-sm">Addition & Subtraction of Fractions</div>
                <CardContent className="p-5">
                  <p className="text-sm text-muted-foreground mb-4">Find a <strong className="text-foreground">common denominator</strong>, convert both fractions, then add or subtract numerators. Keep the denominator. Simplify.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-primary mb-2">Example: 2/3 + (−1/4)</p>
                      <div className="bg-muted/40 rounded p-3 border font-mono text-xs space-y-1">
                        <p>LCD of 3 and 4 = 12</p>
                        <p>2/3 = 8/12</p>
                        <p>−1/4 = −3/12</p>
                        <p>8/12 + (−3/12) = 5/12</p>
                        <p className="font-bold text-primary">Answer: 5/12</p>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-primary mb-2">Example: −3/4 − 1/6</p>
                      <div className="bg-muted/40 rounded p-3 border font-mono text-xs space-y-1">
                        <p>LCD of 4 and 6 = 12</p>
                        <p>−3/4 = −9/12</p>
                        <p>1/6 = 2/12</p>
                        <p>−9/12 − 2/12 = −11/12</p>
                        <p className="font-bold text-primary">Answer: −11/12</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Multiplication & Division */}
              <Card className="shadow-sm overflow-hidden">
                <div className="bg-muted/50 px-5 py-3 border-b font-bold text-sm">Multiplication & Division of Fractions</div>
                <CardContent className="p-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                    <div>
                      <p className="font-semibold mb-2">Multiplication: Multiply numerators × numerators, denominators × denominators</p>
                      <div className="bg-muted/40 rounded p-3 border font-mono text-xs space-y-1 mb-3">
                        <p>3/5 × (−2/7)</p>
                        <p>= (3 × −2) / (5 × 7)</p>
                        <p>= −6/35</p>
                        <p className="font-bold text-primary">Answer: −6/35</p>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">Division: Multiply by the <strong>reciprocal</strong> (flip the second fraction)</p>
                      <div className="bg-muted/40 rounded p-3 border font-mono text-xs space-y-1 mb-3">
                        <p>(−4/5) ÷ (2/3)</p>
                        <p>= (−4/5) × (3/2)</p>
                        <p>= (−4 × 3) / (5 × 2)</p>
                        <p>= −12/10 = −6/5</p>
                        <p className="font-bold text-primary">Answer: −6/5 or −1 1/5</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <h4 className="font-bold text-amber-900 text-sm mb-2">Sign Rules for Multiplication & Division</h4>
                    <div className="grid grid-cols-2 gap-2 text-xs text-amber-800 font-mono">
                      <p>(+) × (+) = (+)</p>
                      <p>(+) × (−) = (−)</p>
                      <p>(−) × (+) = (−)</p>
                      <p>(−) × (−) = (+)</p>
                    </div>
                    <p className="text-xs text-amber-800 mt-2">Same rules apply to division. An even number of negatives → positive result. Odd number of negatives → negative result.</p>
                  </div>
                </CardContent>
              </Card>

              {/* Operations with negative rationals */}
              <Card className="shadow-sm">
                <CardContent className="p-5">
                  <h3 className="font-serif font-bold mb-3">Operations with Negative Rationals — Mixed Examples</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    {[
                      { q: "(−2/3) × (−3/8)", steps: ["= (−2 × −3) / (3 × 8)", "= 6/24", "= 1/4"], ans: "1/4" },
                      { q: "(5/6) ÷ (−10/3)", steps: ["= (5/6) × (3/(−10))", "= 15/(−60)", "= −1/4"], ans: "−1/4" },
                      { q: "−1/2 + 3/4 − 1/3", steps: ["LCD = 12", "= −6/12 + 9/12 − 4/12", "= (−6 + 9 − 4)/12 = −1/12"], ans: "−1/12" },
                      { q: "(−3/5) × (10/9)", steps: ["= (−3 × 10) / (5 × 9)", "= −30/45", "= −2/3"], ans: "−2/3" },
                    ].map((ex, i) => (
                      <div key={i}>
                        <p className="font-semibold text-primary mb-1 font-mono text-xs">{ex.q}</p>
                        <div className="bg-muted/40 rounded p-3 border font-mono text-xs space-y-1">
                          {ex.steps.map((s, si) => <p key={si}>{s}</p>)}
                          <p className="font-bold text-primary">= {ex.ans}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* 5 — BEDMAS */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-violet-700 flex items-center justify-center text-white font-bold text-lg shrink-0">5</div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold">Order of Operations (BEDMAS) with Rational Numbers</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Card className="bg-secondary shadow-sm">
                <CardContent className="p-5">
                  <h3 className="font-bold text-secondary-foreground text-sm uppercase tracking-wide mb-4">BEDMAS Order</h3>
                  <div className="space-y-2">
                    {[
                      { letter: "B", word: "Brackets", note: "Innermost first" },
                      { letter: "E", word: "Exponents", note: "Powers and roots" },
                      { letter: "D", word: "Division", note: "Left to right" },
                      { letter: "M", word: "Multiplication", note: "Left to right (same priority as D)" },
                      { letter: "A", word: "Addition", note: "Left to right" },
                      { letter: "S", word: "Subtraction", note: "Left to right (same priority as A)" },
                    ].map((row) => (
                      <div key={row.letter} className="flex items-center gap-3">
                        <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center font-bold text-primary-foreground text-sm shrink-0">{row.letter}</div>
                        <span className="font-semibold text-secondary-foreground text-sm">{row.word}</span>
                        <span className="text-secondary-foreground/60 text-xs ml-auto">{row.note}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <div className="space-y-4">
                <Card className="shadow-sm">
                  <CardContent className="p-5">
                    <p className="font-semibold text-primary mb-2 text-sm">Worked Example 1</p>
                    <p className="text-xs text-muted-foreground font-mono mb-2">3/4 + (1/2 − 1/3) × 6</p>
                    <div className="bg-muted/40 rounded p-3 border font-mono text-xs space-y-1">
                      <p className="text-muted-foreground">Step 1 — Brackets: (1/2 − 1/3)</p>
                      <p>= 3/6 − 2/6 = 1/6</p>
                      <p className="text-muted-foreground">Step 2 — Multiply: 1/6 × 6</p>
                      <p>= 6/6 = 1</p>
                      <p className="text-muted-foreground">Step 3 — Add: 3/4 + 1</p>
                      <p className="font-bold text-primary">= 7/4 = 1 3/4</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="shadow-sm">
                  <CardContent className="p-5">
                    <p className="font-semibold text-primary mb-2 text-sm">Worked Example 2</p>
                    <p className="text-xs text-muted-foreground font-mono mb-2">(−2/3)² ÷ (1/2) − 1/6</p>
                    <div className="bg-muted/40 rounded p-3 border font-mono text-xs space-y-1">
                      <p className="text-muted-foreground">Step 1 — Exponent: (−2/3)²</p>
                      <p>= 4/9</p>
                      <p className="text-muted-foreground">Step 2 — Divide: (4/9) ÷ (1/2)</p>
                      <p>= 4/9 × 2/1 = 8/9</p>
                      <p className="text-muted-foreground">Step 3 — Subtract: 8/9 − 1/6</p>
                      <p>= 16/18 − 3/18 = 13/18</p>
                      <p className="font-bold text-primary">= 13/18</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* 6 — Key Rules */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-xl font-serif font-bold whitespace-nowrap">Key Rules to Remember</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Reciprocal (for Division)", content: "The reciprocal of a/b is b/a. To divide by a fraction, multiply by its reciprocal. Never divide by zero.", color: "border-l-amber-500 bg-amber-50" },
                { title: "Sign Rules (Multiply/Divide)", content: "Same signs → positive result. Different signs → negative result. Count negatives: even = positive, odd = negative.", color: "border-l-teal-500 bg-teal-50" },
                { title: "Adding Negatives", content: "Adding a negative is the same as subtracting: 3/4 + (−1/4) = 3/4 − 1/4. Rewrite first if it helps.", color: "border-l-blue-500 bg-blue-50" },
              ].map((card, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <Card className={`h-full border-l-4 shadow-sm ${card.color}`}>
                    <CardContent className="p-5">
                      <h3 className="font-bold mb-2 text-sm">{card.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{card.content}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </section>

          <PracticeProblems problems={unit1Problems} accentClass="border-l-amber-500" />

          {/* Continue to Next Unit */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-xl font-serif font-bold whitespace-nowrap">Continue to Next Unit</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {unitNav.filter(u => !u.active).slice(0, 3).map((u) => (
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
