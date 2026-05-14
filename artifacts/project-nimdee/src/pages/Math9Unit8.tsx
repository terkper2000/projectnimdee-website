import { Link } from "wouter";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ChevronRight, Hash, Sigma, Triangle, BarChart3 } from "lucide-react";
import PracticeProblems, { type Problem } from "@/components/PracticeProblems";
import { UnitCompleteToggle } from "@/components/UnitCompleteToggle";
import GeneratedPractice from "@/components/GeneratedPractice";
import { generateUnit8 } from "@/utils/math9Generators";

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
  { label: "Unit 6: Equations", href: "/resources/math-9/unit-6", icon: <Hash className="w-4 h-4" /> },
  { label: "Unit 7: Circles", href: "/resources/math-9/unit-7", icon: <Triangle className="w-4 h-4" /> },
  { label: "Unit 8: Data", href: "/resources/math-9/unit-8", icon: <BarChart3 className="w-4 h-4" />, active: true },
];

const dataFactors = [
  { factor: "Bias", desc: "When data collection or survey design favours one outcome over another.", example: "Asking 'Don't you think our school lunches are great?' leads to positive responses." },
  { factor: "Language", desc: "When survey questions use complicated vocabulary or are ambiguous.", example: "Using technical jargon that some respondents don't understand skews results." },
  { factor: "Ethics", desc: "Ensuring data collection respects participants' rights and does not cause harm.", example: "Collecting students' health information without parental consent is unethical." },
  { factor: "Cost", desc: "Financial constraints may limit sample size, tools, or geographic reach.", example: "A survey of 5 people instead of 500 due to budget limits reduces reliability." },
  { factor: "Timing", desc: "When data is collected can significantly affect results.", example: "Surveying cafeteria satisfaction right after a popular meal vs. on a bad day." },
  { factor: "Privacy", desc: "Respondents may be unwilling to answer honestly if anonymity is not guaranteed.", example: "Asking about income without anonymity leads to under-reporting." },
  { factor: "Cultural Sensitivity", desc: "Questions may be offensive or irrelevant to certain cultural groups.", example: "Asking about Christmas traditions in a culturally diverse school ignores other groups." },
];

export const unit8Problems: Problem[] = [
  {
    level: "Basic",
    question: "A bag contains 4 red, 3 blue, and 5 green marbles. What is P(red)?",
    steps: [
      "Total marbles = 4 + 3 + 5 = 12",
      "Favourable outcomes (red) = 4",
      "P(red) = 4/12 = 1/3",
    ],
    answer: "P(red) = 1/3 ≈ 33.3%",
  },
  {
    level: "Basic",
    question: "A school surveys 30 out of 600 students. Is this a population or sample? What fraction of the population was surveyed?",
    steps: [
      "Only 30 out of 600 were asked → this is a sample",
      "Fraction = 30/600 = 1/20",
    ],
    answer: "Sample; 1/20 (or 5%) of the population",
  },
  {
    level: "Basic",
    question: "A die is rolled 60 times and lands on 4 exactly 8 times. What is the experimental probability of rolling a 4?",
    steps: [
      "Experimental P = times event occurred ÷ total trials",
      "= 8 ÷ 60 = 2/15",
    ],
    answer: "Experimental P(4) = 2/15 ≈ 13.3%",
  },
  {
    level: "Intermediate",
    question: "What is the theoretical probability of rolling a 4? Compare it to the experimental result above.",
    steps: [
      "P(4) theoretically = 1/6 ≈ 16.7%",
      "Experimental was 8/60 = 2/15 ≈ 13.3%",
      "They differ because 60 trials is still a relatively small sample — results get closer to theoretical as trials increase",
    ],
    answer: "Theoretical P(4) = 1/6; experimental was 2/15, slightly lower due to random variation",
  },
  {
    level: "Intermediate",
    question: "A coin is flipped and a die is rolled. Use a tree diagram to find P(Tails and even number).",
    steps: [
      "Total outcomes = 2 × 6 = 12",
      "Favourable: (T,2), (T,4), (T,6) = 3 outcomes",
      "P(Tails and even) = 3/12 = 1/4",
    ],
    answer: "P(Tails and even) = 1/4 = 25%",
  },
  {
    level: "Intermediate",
    question: "Identify the source of bias: 'Do you agree that our school's sports teams are amazing?'",
    steps: [
      "The word 'amazing' and the leading phrasing encourage a 'yes' response",
      "This is a biased survey question — it is leading",
      "Source: Bias (and language)",
    ],
    answer: "The question is leading/biased — it uses positive language that nudges respondents toward agreement",
  },
  {
    level: "Challenge",
    question: "A bag has 2 red and 3 blue marbles. What is P(red on both draws) if you draw twice without replacing the first marble?",
    steps: [
      "P(red first) = 2/5",
      "After drawing red, 1 red and 3 blue remain → P(red second) = 1/4",
      "P(both red) = 2/5 × 1/4 = 2/20 = 1/10",
    ],
    answer: "P(both red) = 1/10 = 10%",
  },
  {
    level: "Challenge",
    question: "A bar graph shows sales figures with the y-axis starting at 800 instead of 0. One bar is 850 and another is 875. Explain how this is misleading.",
    steps: [
      "The difference is 875 − 850 = 25 (about 3% more)",
      "But with the y-axis starting at 800, the taller bar looks roughly twice as tall",
      "This makes a small difference look like a massive one",
      "This is a truncated/broken y-axis — a misleading data display",
    ],
    answer: "The truncated y-axis exaggerates a small 3% difference, making it look like a 100% difference visually",
  },
];

export default function Math9Unit8() {
  return (
    <Layout>
      <div className="bg-muted/40 border-b">
        <div className="container mx-auto px-4 md:px-6 py-3 flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
          <Link href="/resources" className="hover:text-primary transition-colors flex items-center gap-1"><ArrowLeft className="w-4 h-4" />Resources</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/resources/math-9" className="hover:text-primary transition-colors">Math 9</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground font-medium">Unit 8: Data & Probability</span>
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
            <span className="inline-block bg-primary/20 text-primary-foreground/80 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">Alberta Math 9 — Statistics & Probability</span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-secondary-foreground mb-4 leading-tight">Unit 8: Data & Probability</h1>
            <p className="text-secondary-foreground/75 text-lg leading-relaxed mb-8 max-w-2xl">
              Data is everywhere — but not all data is collected well. Learn to critically evaluate how data is gathered, understand population vs sample, and calculate probability with precision.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Data Collection Factors", "Population vs Sample", "Theoretical Probability", "Experimental Probability", "Tree Diagrams", "Misleading Graphs"].map((t) => (
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
                { num: "SP9.1", text: "Demonstrate an understanding of the role of probability in society by: identifying and explaining possible sources of variation in data collection, and critiquing the ways in which data are collected, displayed, and analyzed." },
                { num: "SP9.2", text: "Demonstrate understanding of the effect of data collection methods, population, sample, and various forms of data representation by: identifying relevant factors, comparing population and sample data, and critiquing data presentations." },
                { num: "SP9.3", text: "Demonstrate an understanding of the principles and applications of both experimental and theoretical probability by: comparing experimental and theoretical probability, explaining how the number of trials affects experimental results, and solving problems." },
              ].map((o, i) => (
                <motion.div key={i} variants={fadeUp} className="flex gap-3 p-4 rounded-xl bg-muted/40 border border-l-4 border-l-rose-600">
                  <span className="font-bold text-rose-700 text-sm shrink-0 mt-0.5">{o.num}:</span>
                  <p className="text-sm text-foreground/80 leading-relaxed">{o.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* 2 — Factors Affecting Data Collection */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-rose-700 flex items-center justify-center text-white font-bold text-lg shrink-0">2</div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold">Factors Affecting Data Collection</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <Card className="shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-secondary text-secondary-foreground">
                      <th className="text-left px-4 py-3 font-semibold">Factor</th>
                      <th className="text-left px-4 py-3 font-semibold">Description</th>
                      <th className="text-left px-4 py-3 font-semibold">Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataFactors.map((row, i) => (
                      <tr key={i} className="border-t hover:bg-muted/30 transition-colors">
                        <td className="px-4 py-3 font-bold text-rose-700 whitespace-nowrap">{row.factor}</td>
                        <td className="px-4 py-3 text-muted-foreground">{row.desc}</td>
                        <td className="px-4 py-3 text-muted-foreground text-xs italic">{row.example}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </section>

          {/* 3 — Population vs Sample */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-amber-600 flex items-center justify-center text-white font-bold text-lg shrink-0">3</div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold">Population vs Sample</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Card className="border-l-4 border-l-amber-500 shadow-sm">
                <CardContent className="p-5">
                  <h3 className="font-serif font-bold mb-3">Definitions</h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p><strong className="text-foreground">Population:</strong> The entire group you want to study or draw conclusions about.</p>
                    <p><strong className="text-foreground">Sample:</strong> A smaller subset of the population that is actually studied. Ideally representative (reflects the diversity) of the population.</p>
                    <p><strong className="text-foreground">Census:</strong> Data collected from every member of the population.</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-sm overflow-hidden">
                <div className="bg-muted/50 px-5 py-3 border-b font-bold text-sm">Population vs Sample Comparison</div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="bg-muted/30"><th className="px-4 py-2 text-left text-muted-foreground">Feature</th><th className="px-4 py-2 text-left text-muted-foreground">Population</th><th className="px-4 py-2 text-left text-muted-foreground">Sample</th></tr></thead>
                    <tbody>
                      {[
                        ["Size", "All members", "Subset of members"],
                        ["Cost", "High", "Lower"],
                        ["Time", "More time", "Less time"],
                        ["Accuracy", "Most accurate", "May have error"],
                        ["Use when", "Small group, critical decision", "Large group, estimates OK"],
                      ].map(([f,p,s],i) => (
                        <tr key={i} className="border-t">
                          <td className="px-4 py-2 font-semibold text-xs text-muted-foreground">{f}</td>
                          <td className="px-4 py-2 text-xs">{p}</td>
                          <td className="px-4 py-2 text-xs">{s}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          </section>

          {/* 4 — Theoretical vs Experimental Probability */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-blue-700 flex items-center justify-center text-white font-bold text-lg shrink-0">4</div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold">Theoretical vs Experimental Probability</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Card className="border-l-4 border-l-blue-500 shadow-sm">
                <CardContent className="p-5">
                  <h3 className="font-serif font-bold mb-3">Theoretical Probability</h3>
                  <div className="font-mono text-xl font-bold text-primary text-center py-3">P(event) = favourable outcomes / total outcomes</div>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">Based on what <em>should</em> happen logically, assuming all outcomes are equally likely. Calculated without doing the experiment.</p>
                  <div className="mt-3 font-mono text-xs bg-muted/40 rounded p-2 border space-y-1">
                    <p>P(rolling a 3 on a die) = 1/6</p>
                    <p>P(flipping heads) = 1/2 = 0.5 = 50%</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-teal-500 shadow-sm">
                <CardContent className="p-5">
                  <h3 className="font-serif font-bold mb-3">Experimental Probability</h3>
                  <div className="font-mono text-xl font-bold text-primary text-center py-3">P(event) = times event occurred / number of trials</div>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">Based on what <em>actually happened</em> in an experiment. May differ from theoretical probability, but gets closer as the number of trials increases.</p>
                  <div className="mt-3 font-mono text-xs bg-muted/40 rounded p-2 border space-y-1">
                    <p>Flipped coin 100 times, got heads 47 times</p>
                    <p>Exp. P(heads) = 47/100 = 0.47 = 47%</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <Card className="shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-secondary text-secondary-foreground">
                      <th className="text-left px-4 py-3 font-semibold">Feature</th>
                      <th className="text-left px-4 py-3 font-semibold">Theoretical Probability</th>
                      <th className="text-left px-4 py-3 font-semibold">Experimental Probability</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Based on", "Mathematical reasoning", "Actual experiment results"],
                      ["Requires", "Knowing all possible outcomes", "Running trials"],
                      ["Changes with trials?", "No — always the same ratio", "Yes — varies with each experiment"],
                      ["Accuracy", "Exact (under ideal conditions)", "Approximation; closer to theoretical with more trials"],
                    ].map(([f,t,e],i) => (
                      <tr key={i} className="border-t hover:bg-muted/30 transition-colors">
                        <td className="px-4 py-3 font-semibold text-muted-foreground">{f}</td>
                        <td className="px-4 py-3">{t}</td>
                        <td className="px-4 py-3">{e}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </section>

          {/* 5 — Probability Calculations */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-violet-700 flex items-center justify-center text-white font-bold text-lg shrink-0">5</div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold">Probability Calculations & Tree Diagrams</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="space-y-6">
              <Card className="shadow-sm">
                <CardContent className="p-5">
                  <h3 className="font-serif font-bold mb-4">Example: Rolling a Die + Flipping a Coin</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground mb-2">Tree Diagram Structure</p>
                      <div className="bg-muted/40 rounded p-4 border font-mono text-xs space-y-1">
                        <p>Roll 1 → Flip H → (1,H)</p>
                        <p>         → Flip T → (1,T)</p>
                        <p>Roll 2 → Flip H → (2,H)</p>
                        <p>         → Flip T → (2,T)</p>
                        <p>Roll 3 → Flip H → (3,H)</p>
                        <p>         → Flip T → (3,T)</p>
                        <p>Roll 4 → Flip H → (4,H)</p>
                        <p>         → Flip T → (4,T)</p>
                        <p>Roll 5 → Flip H → (5,H)</p>
                        <p>         → Flip T → (5,T)</p>
                        <p>Roll 6 → Flip H → (6,H)</p>
                        <p>         → Flip T → (6,T)</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-muted/40 rounded p-3 border text-xs space-y-2">
                        <p className="font-semibold text-foreground">Total outcomes = 6 × 2 = 12</p>
                        <p><strong className="text-primary">P(even number and Heads)</strong></p>
                        <p>Favourable: (2,H), (4,H), (6,H) = 3</p>
                        <p className="font-bold text-primary">P = 3/12 = 1/4</p>
                      </div>
                      <div className="bg-muted/40 rounded p-3 border text-xs space-y-2">
                        <p><strong className="text-primary">{"P(number > 4)"}</strong></p>
                        <p>Favourable: (5,H),(5,T),(6,H),(6,T) = 4</p>
                        <p className="font-bold text-primary">P = 4/12 = 1/3</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-sm">
                <CardContent className="p-5">
                  <h3 className="font-serif font-bold mb-4">Example: Drawing Cards</h3>
                  <p className="text-sm text-muted-foreground mb-4">A bag contains 3 red marbles, 4 blue marbles, and 2 green marbles. Find each probability.</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 font-mono text-xs">
                    {[
                      { q: "P(red)", work: "3 red / 9 total", ans: "3/9 = 1/3" },
                      { q: "P(not green)", work: "(3+4) not green / 9", ans: "7/9" },
                      { q: "P(blue or green)", work: "(4+2) / 9", ans: "6/9 = 2/3" },
                    ].map((ex, i) => (
                      <div key={i} className="bg-muted/40 rounded p-3 border space-y-1">
                        <p className="font-bold text-primary">{ex.q}</p>
                        <p className="text-muted-foreground">{ex.work}</p>
                        <p className="font-bold text-foreground">= {ex.ans}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* 6 — Misleading Graphs */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-slate-700 flex items-center justify-center text-white font-bold text-lg shrink-0">6</div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold">Interpreting & Critiquing Data Displays</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Broken/Truncated Y-Axis", desc: "Starting the y-axis at a value other than zero makes small differences look enormous. Always check where the axis starts.", lookFor: "A y-axis that doesn't start at 0 or has a break symbol (⟊)." },
                { title: "Misleading Scale", desc: "Unequal intervals on an axis distort the visual impression of the data. The bars or lines no longer accurately represent the differences.", lookFor: "Axis intervals that jump unevenly (1, 2, 5, 10, 50 instead of equal steps)." },
                { title: "Cherry-Picked Time Range", desc: "Choosing a time range that shows only the 'best' part of a trend can give a misleading impression of growth or decline.", lookFor: "A graph that starts or ends at a convenient point for the presenter." },
                { title: "Misleading Circle Graphs", desc: "3D circle graphs visually distort slice sizes due to perspective. The front slices look larger than they are.", lookFor: "Percentages that don't add to 100%, or 3D effects that make comparison difficult." },
              ].map((card, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <Card className="h-full border-l-4 border-l-slate-400 shadow-sm">
                    <CardContent className="p-5">
                      <h3 className="font-bold mb-2 text-sm">{card.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">{card.desc}</p>
                      <div className="bg-muted/40 rounded p-2 border text-xs text-muted-foreground">
                        <strong className="text-foreground">Look for: </strong>{card.lookFor}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </section>

          <PracticeProblems problems={unit8Problems} accentClass="border-l-rose-500" />
          <GeneratedPractice generateProblem={generateUnit8} unitTitle="Data & Probability" accentColor="border-l-rose-500" />

          <UnitCompleteToggle unitId="math-9-unit-8" />

          {/* Back to landing */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-xl font-serif font-bold whitespace-nowrap">You've Completed Math 9!</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <Link href="/resources/math-9">
              <Card className="hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer border-2 hover:border-primary/30 max-w-sm">
                <CardContent className="p-5 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0"><BarChart3 className="w-4 h-4" /></div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">Return to Math 9 Overview</p>
                    <p className="text-xs text-muted-foreground">View all units and resources →</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </section>
        </div>
      </div>
    </Layout>
  );
}
