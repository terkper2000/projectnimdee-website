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
  { label: "Unit 3: Polynomials", href: "/resources/math-9/unit-3", icon: <Hash className="w-4 h-4" />, active: true },
  { label: "Unit 4: Geometry", href: "/resources/math-9/unit-4", icon: <Triangle className="w-4 h-4" /> },
  { label: "Unit 5: Linear Relations", href: "/resources/math-9/unit-5", icon: <Sigma className="w-4 h-4" /> },
  { label: "Unit 6: Equations", href: "/resources/math-9/unit-6", icon: <Hash className="w-4 h-4" /> },
  { label: "Unit 7: Circles", href: "/resources/math-9/unit-7", icon: <Triangle className="w-4 h-4" /> },
  { label: "Unit 8: Data", href: "/resources/math-9/unit-8", icon: <BarChart3 className="w-4 h-4" /> },
];

const vocab = [
  { term: "Term", def: "A number, variable, or product of numbers and variables.", example: "5x, −3y², 7" },
  { term: "Coefficient", def: "The numerical factor in a term.", example: "In 5x, the coefficient is 5" },
  { term: "Degree of a Term", def: "The sum of the exponents of the variables in the term.", example: "3x²y has degree 3" },
  { term: "Degree of a Polynomial", def: "The degree of its highest-degree term.", example: "4x² + 3x − 1 has degree 2" },
  { term: "Constant", def: "A term with no variable part.", example: "−7 in x² − 7" },
  { term: "Monomial", def: "A polynomial with exactly one term.", example: "5x²" },
  { term: "Binomial", def: "A polynomial with exactly two terms.", example: "3x + 4" },
  { term: "Trinomial", def: "A polynomial with exactly three terms.", example: "x² − 2x + 1" },
];

const unit3Problems: Problem[] = [
  {
    level: "Basic",
    question: "State the degree of the polynomial: 4x² − 7x + 2",
    steps: [
      "Find the highest exponent among all terms",
      "Terms: 4x² (degree 2), −7x (degree 1), 2 (degree 0)",
      "Highest degree = 2",
    ],
    answer: "Degree 2 (trinomial)",
  },
  {
    level: "Basic",
    question: "Identify and collect like terms: 5x² + 3x − 2x² + x − 4",
    steps: [
      "Group like terms: (5x² − 2x²) + (3x + x) + (−4)",
      "Combine: 3x² + 4x − 4",
    ],
    answer: "3x² + 4x − 4",
  },
  {
    level: "Basic",
    question: "Add: (2x² − 3x + 1) + (x² + 5x − 6)",
    steps: [
      "Remove brackets: 2x² − 3x + 1 + x² + 5x − 6",
      "Group like terms: (2x² + x²) + (−3x + 5x) + (1 − 6)",
      "Combine: 3x² + 2x − 5",
    ],
    answer: "3x² + 2x − 5",
  },
  {
    level: "Intermediate",
    question: "Subtract: (4x² + x − 3) − (2x² − 3x + 5)",
    steps: [
      "Distribute the negative: 4x² + x − 3 − 2x² + 3x − 5",
      "Group like terms: (4x² − 2x²) + (x + 3x) + (−3 − 5)",
      "Combine: 2x² + 4x − 8",
    ],
    answer: "2x² + 4x − 8",
  },
  {
    level: "Intermediate",
    question: "Multiply: 3x(4x² − 2x + 5)",
    steps: [
      "Distribute 3x to each term",
      "3x × 4x² = 12x³",
      "3x × (−2x) = −6x²",
      "3x × 5 = 15x",
      "= 12x³ − 6x² + 15x",
    ],
    answer: "12x³ − 6x² + 15x",
  },
  {
    level: "Intermediate",
    question: "Divide: (8x³ − 12x²) ÷ 4x",
    steps: [
      "Divide each term separately by 4x",
      "8x³ ÷ 4x = 2x²",
      "−12x² ÷ 4x = −3x",
    ],
    answer: "2x² − 3x",
  },
  {
    level: "Challenge",
    question: "Simplify: −2y(3y² − y + 4) + (5y³ − 2y)",
    steps: [
      "Distribute −2y: −6y³ + 2y² − 8y",
      "Add the second polynomial: −6y³ + 2y² − 8y + 5y³ − 2y",
      "Group like terms: (−6y³ + 5y³) + 2y² + (−8y − 2y)",
      "Combine: −y³ + 2y² − 10y",
    ],
    answer: "−y³ + 2y² − 10y",
  },
  {
    level: "Challenge",
    question: "Divide: (15a³ − 10a² + 5a) ÷ (−5a)",
    steps: [
      "Divide each term by −5a",
      "15a³ ÷ (−5a) = −3a²",
      "−10a² ÷ (−5a) = 2a",
      "5a ÷ (−5a) = −1",
    ],
    answer: "−3a² + 2a − 1",
  },
];

export default function Math9Unit3() {
  return (
    <Layout>
      <div className="bg-muted/40 border-b">
        <div className="container mx-auto px-4 md:px-6 py-3 flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
          <Link href="/resources" className="hover:text-primary transition-colors flex items-center gap-1"><ArrowLeft className="w-4 h-4" />Resources</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/resources/math-9" className="hover:text-primary transition-colors">Math 9</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground font-medium">Unit 3: Polynomial Operations</span>
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
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-secondary-foreground mb-4 leading-tight">Unit 3: Polynomial Operations</h1>
            <p className="text-secondary-foreground/75 text-lg leading-relaxed mb-8 max-w-2xl">
              Polynomials are the building blocks of algebra. Learn to classify, add, subtract, multiply, and divide polynomial expressions — the skills that unlock all of senior high mathematics.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Vocabulary", "Like Terms", "Add & Subtract", "Multiply by Monomial", "Divide by Monomial", "Common Mistakes"].map((t) => (
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
                { num: "PR9.1", text: "Model and solve problems, using linear equations of the form: ax = b; x/a = b, a ≠ 0; ax + b = c; x/a + b = c, a ≠ 0; a(x + b) = c — where a, b, and c are rational numbers." },
                { num: "PR9.2", text: "Demonstrate an understanding of polynomials (limited to polynomials of degree ≤ 2): by modelling polynomials, recognizing like and unlike terms, adding/subtracting polynomials, multiplying/dividing a polynomial by a monomial." },
              ].map((o, i) => (
                <motion.div key={i} variants={fadeUp} className="flex gap-3 p-4 rounded-xl bg-muted/40 border border-l-4 border-l-teal-600">
                  <span className="font-bold text-teal-700 text-sm shrink-0 mt-0.5">{o.num}:</span>
                  <p className="text-sm text-foreground/80 leading-relaxed">{o.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* 2 — Vocabulary */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-teal-700 flex items-center justify-center text-white font-bold text-lg shrink-0">2</div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold">Polynomial Vocabulary</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <Card className="shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-secondary text-secondary-foreground">
                      <th className="text-left px-4 py-3 font-semibold">Term</th>
                      <th className="text-left px-4 py-3 font-semibold">Definition</th>
                      <th className="text-left px-4 py-3 font-semibold">Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    {vocab.map((row, i) => (
                      <tr key={i} className="border-t hover:bg-muted/30 transition-colors">
                        <td className="px-4 py-3 font-bold text-teal-700">{row.term}</td>
                        <td className="px-4 py-3 text-muted-foreground">{row.def}</td>
                        <td className="px-4 py-3 font-mono text-sm">{row.example}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </section>

          {/* 3 — Adding & Subtracting */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-blue-700 flex items-center justify-center text-white font-bold text-lg shrink-0">3</div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold">Adding & Subtracting Polynomials</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <Card className="bg-amber-50 border-amber-200 shadow-sm mb-6">
              <CardContent className="p-5">
                <h3 className="font-bold text-amber-900 mb-2">Collecting Like Terms</h3>
                <p className="text-sm text-amber-800 leading-relaxed"><strong>Like terms</strong> have the same variable(s) with the same exponent(s). Only like terms can be combined. Add/subtract their coefficients; the variable part stays the same.</p>
                <div className="mt-3 font-mono text-xs text-amber-800 space-y-1">
                  <p>Like terms: 3x² and −5x² (both have x²)</p>
                  <p>Unlike terms: 3x² and 3x (different exponents)</p>
                </div>
              </CardContent>
            </Card>
            <div className="space-y-4">
              {[
                {
                  label: "Addition Example",
                  q: "(3x² + 5x − 2) + (x² − 3x + 7)",
                  steps: [
                    "Remove brackets: 3x² + 5x − 2 + x² − 3x + 7",
                    "Group like terms: (3x² + x²) + (5x − 3x) + (−2 + 7)",
                    "Combine: 4x² + 2x + 5",
                  ],
                  ans: "4x² + 2x + 5",
                },
                {
                  label: "Subtraction Example",
                  q: "(5x² − 2x + 3) − (2x² + 4x − 1)",
                  steps: [
                    "Distribute the negative: 5x² − 2x + 3 − 2x² − 4x + 1",
                    "Group like terms: (5x² − 2x²) + (−2x − 4x) + (3 + 1)",
                    "Combine: 3x² − 6x + 4",
                  ],
                  ans: "3x² − 6x + 4",
                  note: "Key: Subtracting changes the sign of EVERY term in the subtracted polynomial.",
                },
              ].map((ex, i) => (
                <Card key={i} className="shadow-sm">
                  <CardContent className="p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">{ex.label}</p>
                    <p className="font-mono text-sm font-semibold text-primary mb-3">{ex.q}</p>
                    <div className="bg-muted/40 rounded p-4 border font-mono text-xs space-y-2">
                      {ex.steps.map((s, si) => (
                        <div key={si}>
                          <span className="text-muted-foreground text-xs">Step {si + 1}: </span>
                          <span>{s}</span>
                        </div>
                      ))}
                      <p className="font-bold text-primary mt-2">Answer: {ex.ans}</p>
                    </div>
                    {ex.note && <p className="mt-3 text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded p-2">{ex.note}</p>}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* 4 — Multiplying by Monomial */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-violet-700 flex items-center justify-center text-white font-bold text-lg shrink-0">4</div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold">Multiplying a Polynomial by a Monomial</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <Card className="border-l-4 border-l-violet-500 shadow-sm mb-6">
              <CardContent className="p-5">
                <h3 className="font-serif font-bold mb-2">The Distributive Property</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Multiply the monomial by <strong>each term</strong> of the polynomial. Apply exponent laws where needed.</p>
                <div className="font-mono text-center text-lg text-primary py-3">a(b + c) = ab + ac</div>
              </CardContent>
            </Card>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { q: "3x(2x − 5)", steps: ["= 3x × 2x + 3x × (−5)", "= 6x² − 15x"], ans: "6x² − 15x" },
                { q: "−2y²(y + 4)", steps: ["= −2y² × y + (−2y²) × 4", "= −2y³ − 8y²"], ans: "−2y³ − 8y²" },
                { q: "4a(3a² − 2a + 1)", steps: ["= 4a×3a² + 4a×(−2a) + 4a×1", "= 12a³ − 8a² + 4a"], ans: "12a³ − 8a² + 4a" },
                { q: "−5m(2m² − m − 3)", steps: ["= −10m³ + 5m² + 15m"], ans: "−10m³ + 5m² + 15m" },
              ].map((ex, i) => (
                <Card key={i} className="shadow-sm">
                  <CardContent className="p-5">
                    <p className="font-mono text-sm font-semibold text-primary mb-2">{ex.q}</p>
                    <div className="bg-muted/40 rounded p-3 border font-mono text-xs space-y-1">
                      {ex.steps.map((s, si) => <p key={si}>{s}</p>)}
                      <p className="font-bold text-primary">= {ex.ans}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* 5 — Dividing by Monomial */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-emerald-700 flex items-center justify-center text-white font-bold text-lg shrink-0">5</div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold">Dividing a Polynomial by a Monomial</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <Card className="border-l-4 border-l-emerald-500 shadow-sm mb-6">
              <CardContent className="p-5">
                <h3 className="font-serif font-bold mb-2">Term-by-Term Division</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Divide each term of the polynomial separately by the monomial. Apply exponent laws (Quotient Law) to the variable parts.</p>
                <div className="font-mono text-center text-lg text-primary py-3">(a + b) ÷ c = a/c + b/c</div>
              </CardContent>
            </Card>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { q: "(6x² + 9x) ÷ 3x", steps: ["= 6x²/3x + 9x/3x", "= 2x + 3"], ans: "2x + 3" },
                { q: "(10a³ − 15a²) ÷ 5a²", steps: ["= 10a³/5a² − 15a²/5a²", "= 2a − 3"], ans: "2a − 3" },
                { q: "(12y³ + 8y² − 4y) ÷ 4y", steps: ["= 12y³/4y + 8y²/4y − 4y/4y", "= 3y² + 2y − 1"], ans: "3y² + 2y − 1" },
                { q: "(−6m³ + 9m²) ÷ (−3m)", steps: ["= −6m³/(−3m) + 9m²/(−3m)", "= 2m² − 3m"], ans: "2m² − 3m" },
              ].map((ex, i) => (
                <Card key={i} className="shadow-sm">
                  <CardContent className="p-5">
                    <p className="font-mono text-sm font-semibold text-primary mb-2">{ex.q}</p>
                    <div className="bg-muted/40 rounded p-3 border font-mono text-xs space-y-1">
                      {ex.steps.map((s, si) => <p key={si}>{s}</p>)}
                      <p className="font-bold text-primary">= {ex.ans}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* 6 — Common Mistakes */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-xl font-serif font-bold whitespace-nowrap">Common Mistakes to Avoid</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { mistake: "Sign Errors when Subtracting", wrong: "(3x + 2) − (x − 5) = 3x + 2 − x − 5", right: "(3x + 2) − (x − 5) = 3x + 2 − x + 5 = 2x + 7", fix: "Subtracting changes the sign of EVERY term in the brackets." },
                { mistake: "Not Distributing to All Terms", wrong: "3x(x + 4) = 3x² + 4", right: "3x(x + 4) = 3x² + 12x", fix: "The monomial must multiply EVERY term inside the brackets." },
                { mistake: "Combining Unlike Terms", wrong: "4x² + 3x = 7x²", right: "4x² + 3x cannot be simplified (different degrees)", fix: "x² and x are unlike terms — they have different exponents." },
                { mistake: "Exponent Error in Multiplication", wrong: "3x × 2x = 6x", right: "3x × 2x = 6x²", fix: "Apply the Product Law: x × x = x¹⁺¹ = x²" },
              ].map((card, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <Card className="h-full border-l-4 border-l-rose-500 shadow-sm">
                    <CardContent className="p-5">
                      <h3 className="font-bold text-rose-700 mb-3 text-sm">{card.mistake}</h3>
                      <div className="space-y-2 text-xs font-mono">
                        <div className="bg-rose-50 rounded p-2 border border-rose-200">
                          <p className="text-rose-600 font-semibold mb-1">✗ Wrong:</p>
                          <p className="text-rose-700">{card.wrong}</p>
                        </div>
                        <div className="bg-emerald-50 rounded p-2 border border-emerald-200">
                          <p className="text-emerald-700 font-semibold mb-1">✓ Correct:</p>
                          <p className="text-emerald-800">{card.right}</p>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-3 leading-relaxed">{card.fix}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </section>

          <PracticeProblems problems={unit3Problems} accentClass="border-l-teal-500" />

          {/* Continue */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-xl font-serif font-bold whitespace-nowrap">Continue to Next Unit</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {unitNav.filter(u => !u.active).slice(2, 5).map((u) => (
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
