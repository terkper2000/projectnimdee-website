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
  { label: "Unit 2: Powers", href: "/resources/math-9/unit-2", icon: <Sigma className="w-4 h-4" />, active: true },
  { label: "Unit 3: Polynomials", href: "/resources/math-9/unit-3", icon: <Hash className="w-4 h-4" /> },
  { label: "Unit 4: Geometry", href: "/resources/math-9/unit-4", icon: <Triangle className="w-4 h-4" /> },
  { label: "Unit 5: Linear Relations", href: "/resources/math-9/unit-5", icon: <Sigma className="w-4 h-4" /> },
  { label: "Unit 6: Equations", href: "/resources/math-9/unit-6", icon: <Hash className="w-4 h-4" /> },
  { label: "Unit 7: Circles", href: "/resources/math-9/unit-7", icon: <Triangle className="w-4 h-4" /> },
  { label: "Unit 8: Data", href: "/resources/math-9/unit-8", icon: <BarChart3 className="w-4 h-4" /> },
];

const vocab = [
  { term: "Base", def: "The number or variable being multiplied repeatedly.", example: "In 5³, the base is 5" },
  { term: "Exponent", def: "Tells how many times the base is used as a factor.", example: "In 5³, the exponent is 3" },
  { term: "Power", def: "The entire expression: base raised to an exponent.", example: "5³ is a power" },
  { term: "Value", def: "The result of evaluating the power.", example: "5³ = 5 × 5 × 5 = 125" },
];

const exponentLaws = [
  {
    name: "Product Law",
    rule: "aᵐ × aⁿ = aᵐ⁺ⁿ",
    desc: "When multiplying powers with the SAME base, ADD the exponents.",
    example: "3⁴ × 3² = 3⁶",
    worked: ["3⁴ × 3² = 3⁴⁺² = 3⁶", "3⁶ = 729"],
  },
  {
    name: "Quotient Law",
    rule: "aᵐ ÷ aⁿ = aᵐ⁻ⁿ",
    desc: "When dividing powers with the SAME base, SUBTRACT the exponents.",
    example: "5⁶ ÷ 5² = 5⁴",
    worked: ["5⁶ ÷ 5² = 5⁶⁻² = 5⁴", "5⁴ = 625"],
  },
  {
    name: "Power of a Power",
    rule: "(aᵐ)ⁿ = aᵐⁿ",
    desc: "When raising a power to another exponent, MULTIPLY the exponents.",
    example: "(2³)⁴ = 2¹²",
    worked: ["(2³)⁴ = 2³ˣ⁴ = 2¹²", "2¹² = 4096"],
  },
  {
    name: "Power of a Product",
    rule: "(ab)ᵐ = aᵐbᵐ",
    desc: "Distribute the exponent to EACH factor inside the brackets.",
    example: "(2 × 3)⁴ = 2⁴ × 3⁴",
    worked: ["(2 × 3)⁴ = 2⁴ × 3⁴", "= 16 × 81 = 1296"],
  },
  {
    name: "Power of a Quotient",
    rule: "(a/b)ᵐ = aᵐ/bᵐ",
    desc: "Distribute the exponent to both the numerator and denominator.",
    example: "(2/3)³ = 2³/3³",
    worked: ["(2/3)³ = 2³/3³", "= 8/27"],
  },
];

const unit2Problems: Problem[] = [
  {
    level: "Basic",
    question: "Evaluate: (−2)⁴",
    steps: [
      "The negative is inside brackets, so it is part of the base",
      "(−2)⁴ = (−2)(−2)(−2)(−2)",
      "= 4 × 4 = 16",
    ],
    answer: "16",
  },
  {
    level: "Basic",
    question: "Evaluate: −3² (no brackets around −3)",
    steps: [
      "Without brackets, the exponent applies only to 3",
      "−3² = −(3²) = −(9)",
    ],
    answer: "−9",
  },
  {
    level: "Basic",
    question: "Simplify using the zero exponent law: 7⁰ + (−5)⁰",
    steps: [
      "Any non-zero base to the power of 0 equals 1",
      "7⁰ = 1 and (−5)⁰ = 1",
      "1 + 1 = 2",
    ],
    answer: "2",
  },
  {
    level: "Basic",
    question: "Simplify using the Product Law: x⁴ × x⁵",
    steps: [
      "Product Law: same base → add exponents",
      "x⁴ × x⁵ = x⁴⁺⁵",
    ],
    answer: "x⁹",
  },
  {
    level: "Intermediate",
    question: "Simplify: (a³)⁴ ÷ a⁷",
    steps: [
      "Power of a Power: (a³)⁴ = a³ˣ⁴ = a¹²",
      "Quotient Law: a¹² ÷ a⁷ = a¹²⁻⁷",
    ],
    answer: "a⁵",
  },
  {
    level: "Intermediate",
    question: "Simplify: (2x²y)³",
    steps: [
      "Power of a Product: distribute the exponent to each factor",
      "= 2³ × (x²)³ × y³",
      "= 8 × x⁶ × y³",
    ],
    answer: "8x⁶y³",
  },
  {
    level: "Intermediate",
    question: "Write with a positive exponent and evaluate: 4⁻²",
    steps: [
      "Negative exponent: a⁻ⁿ = 1/aⁿ",
      "4⁻² = 1/4² = 1/16",
    ],
    answer: "1/16",
  },
  {
    level: "Challenge",
    question: "Simplify completely (positive exponents only): (3m²n)² ÷ (9m⁵)",
    steps: [
      "Power of a Product: (3m²n)² = 9m⁴n²",
      "Quotient Law: 9m⁴n² ÷ 9m⁵ = m⁴⁻⁵ × n² = m⁻¹n²",
      "Negative exponent: m⁻¹ = 1/m",
    ],
    answer: "n²/m",
  },
];

export default function Math9Unit2() {
  return (
    <Layout>
      <div className="bg-muted/40 border-b">
        <div className="container mx-auto px-4 md:px-6 py-3 flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
          <Link href="/resources" className="hover:text-primary transition-colors flex items-center gap-1"><ArrowLeft className="w-4 h-4" />Resources</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/resources/math-9" className="hover:text-primary transition-colors">Math 9</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground font-medium">Unit 2: Powers & Exponents</span>
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
            <span className="inline-block bg-primary/20 text-primary-foreground/80 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">Alberta Math 9 — Number Strand</span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-secondary-foreground mb-4 leading-tight">Unit 2: Powers & Exponents</h1>
            <p className="text-secondary-foreground/75 text-lg leading-relaxed mb-8 max-w-2xl">
              Exponents are a compact language for repeated multiplication. Master the five laws that govern how powers combine, and discover what happens when exponents are zero or negative.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Product Law", "Quotient Law", "Power of a Power", "Zero Exponent", "Negative Exponents", "Simplifying Expressions"].map((t) => (
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
                { num: "N9.1", text: "Demonstrate an understanding of powers with integral bases (excluding base 0) and whole number exponents by: representing repeated multiplication using powers, using patterns to show that a power with an exponent of zero is equal to one, and solving problems involving powers." },
                { num: "N9.4", text: "Demonstrate an understanding of the exponent laws: (aᵐ)(aⁿ) = aᵐ⁺ⁿ, aᵐ ÷ aⁿ = aᵐ⁻ⁿ, (aᵐ)ⁿ = aᵐⁿ, (ab)ᵐ = aᵐbᵐ, (a/b)ᵐ = aᵐ/bᵐ, and apply to simplify expressions with integral bases." },
              ].map((o, i) => (
                <motion.div key={i} variants={fadeUp} className="flex gap-3 p-4 rounded-xl bg-muted/40 border border-l-4 border-l-orange-500">
                  <span className="font-bold text-orange-700 text-sm shrink-0 mt-0.5">{o.num}:</span>
                  <p className="text-sm text-foreground/80 leading-relaxed">{o.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* 2 — Vocabulary */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-orange-600 flex items-center justify-center text-white font-bold text-lg shrink-0">2</div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold">Powers — Vocabulary</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <Card className="shadow-sm overflow-hidden mb-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-secondary text-secondary-foreground">
                      <th className="text-left px-4 py-3 font-semibold">Term</th>
                      <th className="text-left px-4 py-3 font-semibold">Definition</th>
                      <th className="text-left px-4 py-3 font-semibold">Example (using 5³)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {vocab.map((row, i) => (
                      <tr key={i} className="border-t hover:bg-muted/30 transition-colors">
                        <td className="px-4 py-3 font-bold text-orange-700">{row.term}</td>
                        <td className="px-4 py-3 text-muted-foreground">{row.def}</td>
                        <td className="px-4 py-3 font-mono">{row.example}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-orange-50 border-orange-200 shadow-sm">
                <CardContent className="p-5">
                  <h3 className="font-bold text-orange-900 mb-2 text-sm">Expanded Form</h3>
                  <div className="font-mono text-xs space-y-1 text-orange-800">
                    <p>2⁵ = 2 × 2 × 2 × 2 × 2 = 32</p>
                    <p>(−3)² = (−3) × (−3) = 9</p>
                    <p>−3² = −(3 × 3) = −9</p>
                    <p className="mt-2 font-bold">Note: (−3)² ≠ −3² !</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-teal-500 shadow-sm">
                <CardContent className="p-5">
                  <h3 className="font-serif font-bold mb-2">Brackets Matter!</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">When a negative base is inside brackets and raised to a power, the negative sign is part of the base. Without brackets, the exponent only applies to the positive number, and the negative sign is applied after.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* 3 — Exponent Laws */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-teal-700 flex items-center justify-center text-white font-bold text-lg shrink-0">3</div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold">The Five Exponent Laws</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4">
              {exponentLaws.map((law, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <Card className="shadow-sm">
                    <CardContent className="p-5">
                      <div className="flex flex-col md:flex-row md:items-start gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{law.name}</span>
                          </div>
                          <div className="font-mono text-lg font-bold text-primary mb-2">{law.rule}</div>
                          <p className="text-sm text-muted-foreground leading-relaxed">{law.desc}</p>
                        </div>
                        <div className="md:w-64 shrink-0">
                          <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">Worked Example</p>
                          <div className="bg-muted/40 rounded-lg p-3 border font-mono text-xs space-y-1">
                            {law.worked.map((step, si) => (
                              <p key={si} className={si === law.worked.length - 1 ? "font-bold text-primary" : ""}>{step}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* 4 — Zero & Negative Exponents */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-blue-700 flex items-center justify-center text-white font-bold text-lg shrink-0">4</div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold">Zero Exponent & Negative Exponents</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Card className="border-l-4 border-l-blue-500 shadow-sm">
                <CardContent className="p-5">
                  <h3 className="font-serif font-bold mb-3">Zero Exponent Law</h3>
                  <div className="font-mono text-2xl font-bold text-primary text-center py-3 mb-3">a⁰ = 1</div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">Any base (except 0) raised to the power of zero equals 1. This can be shown using the Quotient Law:</p>
                  <div className="bg-muted/40 rounded p-3 border font-mono text-xs space-y-1">
                    <p>aᵐ ÷ aᵐ = aᵐ⁻ᵐ = a⁰</p>
                    <p>But also: aᵐ ÷ aᵐ = 1 (anything ÷ itself = 1)</p>
                    <p className="font-bold text-primary">Therefore a⁰ = 1</p>
                  </div>
                  <div className="mt-3 font-mono text-xs text-muted-foreground space-y-0.5">
                    <p>7⁰ = 1 | (−3)⁰ = 1 | (100)⁰ = 1</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-violet-500 shadow-sm">
                <CardContent className="p-5">
                  <h3 className="font-serif font-bold mb-3">Negative Exponent Law</h3>
                  <div className="font-mono text-2xl font-bold text-primary text-center py-3 mb-3">a⁻ⁿ = 1/aⁿ</div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">A negative exponent means "take the reciprocal." The base moves to the denominator and the exponent becomes positive.</p>
                  <div className="bg-muted/40 rounded p-3 border font-mono text-xs space-y-1">
                    <p>2⁻³ = 1/2³ = 1/8</p>
                    <p>5⁻² = 1/5² = 1/25</p>
                    <p>(1/3)⁻² = 3² = 9</p>
                    <p className="font-bold text-primary">Note: negative exponent ≠ negative value!</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* 5 — Order of Operations with Powers */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-violet-700 flex items-center justify-center text-white font-bold text-lg shrink-0">5</div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold">Order of Operations with Powers</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { q: "3 × 2³ − 4²", steps: ["E: 2³ = 8, 4² = 16", "M: 3 × 8 = 24", "S: 24 − 16 = 8"], ans: "8" },
                { q: "(2 + 1)³ ÷ 3²", steps: ["B: (2 + 1) = 3", "E: 3³ = 27, 3² = 9", "D: 27 ÷ 9 = 3"], ans: "3" },
                { q: "5² − (1/2)² × 4", steps: ["E: 5² = 25, (1/2)² = 1/4", "M: 1/4 × 4 = 1", "S: 25 − 1 = 24"], ans: "24" },
                { q: "4⁻¹ + (2/3)⁰ − 1/2", steps: ["E: 4⁻¹ = 1/4, (2/3)⁰ = 1", "A/S: 1/4 + 1 − 1/2", "= 1/4 + 4/4 − 2/4 = 3/4"], ans: "3/4" },
              ].map((ex, i) => (
                <Card key={i} className="shadow-sm">
                  <CardContent className="p-5">
                    <p className="font-semibold text-primary mb-2 font-mono">{ex.q}</p>
                    <div className="bg-muted/40 rounded p-3 border font-mono text-xs space-y-1">
                      {ex.steps.map((s, si) => <p key={si}>{s}</p>)}
                      <p className="font-bold text-primary">= {ex.ans}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* 6 — Applying Laws to Simplify */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-emerald-700 flex items-center justify-center text-white font-bold text-lg shrink-0">6</div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold">Applying Exponent Laws to Simplify</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <Card className="shadow-sm">
              <CardContent className="p-5">
                <p className="text-sm text-muted-foreground mb-6">Simplify each expression using exponent laws. Express answers with positive exponents only.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { level: "Basic", q: "x⁵ × x³", steps: ["Product Law: add exponents"], ans: "x⁸" },
                    { level: "Basic", q: "a⁸ ÷ a²", steps: ["Quotient Law: subtract exponents"], ans: "a⁶" },
                    { level: "Intermediate", q: "(m²)⁵ × m³", steps: ["Power of Power: m¹⁰", "Product Law: m¹⁰ × m³ = m¹³"], ans: "m¹³" },
                    { level: "Intermediate", q: "(x³y²)⁴", steps: ["Power of Product: distribute exponent", "= x¹²y⁸"], ans: "x¹²y⁸" },
                    { level: "Advanced", q: "(2a³)² ÷ (4a⁴)", steps: ["Power of Product: 4a⁶", "Quotient Law: 4a⁶ ÷ 4a⁴", "= a²"], ans: "a²" },
                    { level: "Advanced", q: "x⁻² × x⁵ ÷ x⁰", steps: ["Product Law: x⁻²⁺⁵ = x³", "Divide by x⁰ = 1", "= x³"], ans: "x³" },
                  ].map((ex, i) => (
                    <div key={i}>
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                          ex.level === "Basic" ? "bg-green-100 text-green-800" :
                          ex.level === "Intermediate" ? "bg-amber-100 text-amber-800" :
                          "bg-rose-100 text-rose-800"
                        }`}>{ex.level}</span>
                        <p className="font-mono text-sm font-semibold">{ex.q}</p>
                      </div>
                      <div className="bg-muted/40 rounded p-3 border font-mono text-xs space-y-1">
                        {ex.steps.map((s, si) => <p key={si} className="text-muted-foreground">{s}</p>)}
                        <p className="font-bold text-primary">= {ex.ans}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          <PracticeProblems problems={unit2Problems} accentClass="border-l-orange-500" />

          {/* Continue */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-xl font-serif font-bold whitespace-nowrap">Continue to Next Unit</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {unitNav.filter(u => !u.active).slice(1, 4).map((u) => (
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
