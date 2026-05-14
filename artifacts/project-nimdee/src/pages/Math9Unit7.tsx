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
  { label: "Unit 6: Equations", href: "/resources/math-9/unit-6", icon: <Hash className="w-4 h-4" /> },
  { label: "Unit 7: Circles", href: "/resources/math-9/unit-7", icon: <Triangle className="w-4 h-4" />, active: true },
  { label: "Unit 8: Data", href: "/resources/math-9/unit-8", icon: <BarChart3 className="w-4 h-4" /> },
];

const vocab = [
  { term: "Centre", def: "The fixed point equidistant from all points on the circle.", symbol: "O" },
  { term: "Radius", def: "A line segment from the centre to any point on the circle.", symbol: "r" },
  { term: "Diameter", def: "A chord that passes through the centre. d = 2r.", symbol: "d" },
  { term: "Chord", def: "A line segment connecting any two points on the circle.", symbol: "AB" },
  { term: "Arc", def: "Part of the circumference between two points.", symbol: "⌢AB" },
  { term: "Central Angle", def: "An angle with its vertex at the centre, formed by two radii.", symbol: "∠AOB" },
  { term: "Inscribed Angle", def: "An angle with its vertex on the circle, formed by two chords.", symbol: "∠APB" },
  { term: "Tangent", def: "A line that touches the circle at exactly one point (point of tangency).", symbol: "t" },
  { term: "Secant", def: "A line that intersects the circle at exactly two points.", symbol: "s" },
];

const unit7Problems: Problem[] = [
  {
    level: "Basic",
    question: "Name the part of a circle: a line segment connecting the centre to any point on the circle.",
    steps: [
      "A line segment from the centre to the circle = radius",
    ],
    answer: "Radius",
  },
  {
    level: "Basic",
    question: "A central angle ∠AOB = 96°. An inscribed angle ∠APB subtends the same arc. Find ∠APB.",
    steps: [
      "Property 2: Central angle = 2 × Inscribed angle",
      "∠APB = ∠AOB ÷ 2 = 96° ÷ 2",
    ],
    answer: "∠APB = 48°",
  },
  {
    level: "Basic",
    question: "Points P, Q, and R are all on a circle. ∠PAQ = 31°. Find ∠PBQ where B is also on the same arc.",
    steps: [
      "Property 3: Inscribed angles subtended by the same arc are equal",
      "∠PBQ = ∠PAQ = 31°",
    ],
    answer: "∠PBQ = 31°",
  },
  {
    level: "Intermediate",
    question: "A circle has radius 13 cm. A chord is 24 cm long. How far is the chord from the centre?",
    steps: [
      "Property 1: Perpendicular from centre bisects the chord",
      "Half chord = 24 ÷ 2 = 12 cm",
      "Using Pythagorean theorem: d² + 12² = 13²",
      "d² = 169 − 144 = 25",
      "d = 5 cm",
    ],
    answer: "5 cm from the centre",
  },
  {
    level: "Intermediate",
    question: "An inscribed angle ∠APB = 55°. The arc AB subtends a central angle ∠AOB. Find ∠AOB.",
    steps: [
      "Property 2: Central angle = 2 × Inscribed angle",
      "∠AOB = 2 × 55° = 110°",
    ],
    answer: "∠AOB = 110°",
  },
  {
    level: "Intermediate",
    question: "A tangent from external point T touches a circle (centre O, radius 8 cm) at point P. OT = 17 cm. Find PT.",
    steps: [
      "Property 4: Tangent ⊥ radius → right angle at P",
      "PT² + OP² = OT²",
      "PT² + 8² = 17²",
      "PT² = 289 − 64 = 225",
      "PT = 15 cm",
    ],
    answer: "PT = 15 cm",
  },
  {
    level: "Challenge",
    question: "In a circle, ∠AOB = 130° (central angle). P is on the major arc. Triangle APB is isosceles with AP = BP. Find ∠APB and ∠PAB.",
    steps: [
      "Property 2: ∠APB = ∠AOB ÷ 2 = 130° ÷ 2 = 65°",
      "Triangle APB: angles sum to 180°",
      "AP = BP → isosceles → ∠PAB = ∠PBA",
      "2∠PAB + 65° = 180° → 2∠PAB = 115° → ∠PAB = 57.5°",
    ],
    answer: "∠APB = 65°, ∠PAB = ∠PBA = 57.5°",
  },
  {
    level: "Challenge",
    question: "A circle has centre O and radius 6 cm. A tangent meets the circle at P and ∠OTP = 25° where T is the external point. Find ∠POT.",
    steps: [
      "Property 4: ∠OPT = 90° (tangent ⊥ radius)",
      "Triangle OPT: angles sum to 180°",
      "∠POT = 180° − 90° − 25° = 65°",
    ],
    answer: "∠POT = 65°",
  },
];

export default function Math9Unit7() {
  return (
    <Layout>
      <div className="bg-muted/40 border-b">
        <div className="container mx-auto px-4 md:px-6 py-3 flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
          <Link href="/resources" className="hover:text-primary transition-colors flex items-center gap-1"><ArrowLeft className="w-4 h-4" />Resources</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/resources/math-9" className="hover:text-primary transition-colors">Math 9</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground font-medium">Unit 7: Circle Geometry</span>
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
            <span className="inline-block bg-primary/20 text-primary-foreground/80 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">Alberta Math 9 — Shape & Space</span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-secondary-foreground mb-4 leading-tight">Unit 7: Circle Geometry</h1>
            <p className="text-secondary-foreground/75 text-lg leading-relaxed mb-8 max-w-2xl">
              Discover the elegant relationships that govern circles. Four powerful properties connect chords, angles, arcs, and tangents — and once you know them, missing angles become straightforward to find.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Perpendicular Bisector", "Central Angles", "Inscribed Angles", "Tangent-Radius", "Pythagorean Theorem", "Angle Problems"].map((t) => (
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
                { num: "SS9.5", text: "Demonstrate an understanding of the properties of circles by: describing the relationship between the perpendicular from the centre of a circle and a chord, relating the central angle and the inscribed angle subtended by the same arc, describing the relationship between inscribed angles subtended by the same arc, and tangent to a circle." },
              ].map((o, i) => (
                <motion.div key={i} variants={fadeUp} className="flex gap-3 p-4 rounded-xl bg-muted/40 border border-l-4 border-l-sky-600">
                  <span className="font-bold text-sky-700 text-sm shrink-0 mt-0.5">{o.num}:</span>
                  <p className="text-sm text-foreground/80 leading-relaxed">{o.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* 2 — Vocabulary */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-sky-700 flex items-center justify-center text-white font-bold text-lg shrink-0">2</div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold">Circle Vocabulary</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <Card className="shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-secondary text-secondary-foreground">
                      <th className="text-left px-4 py-3 font-semibold">Term</th>
                      <th className="text-left px-4 py-3 font-semibold">Definition</th>
                      <th className="text-left px-4 py-3 font-semibold">Symbol</th>
                    </tr>
                  </thead>
                  <tbody>
                    {vocab.map((row, i) => (
                      <tr key={i} className="border-t hover:bg-muted/30 transition-colors">
                        <td className="px-4 py-3 font-bold text-sky-700">{row.term}</td>
                        <td className="px-4 py-3 text-muted-foreground">{row.def}</td>
                        <td className="px-4 py-3 font-mono text-sm">{row.symbol}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </section>

          {/* The Four Properties */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-blue-700 flex items-center justify-center text-white font-bold text-lg shrink-0">3</div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold">The Four Circle Properties</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="space-y-8">

              {/* Property 1 */}
              <Card className="shadow-sm border-t-4 border-t-blue-600">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm shrink-0">P1</div>
                    <h3 className="font-serif font-bold text-lg">Perpendicular from Centre Bisects a Chord</h3>
                  </div>
                  <Card className="bg-blue-50 border-blue-200 mb-4">
                    <CardContent className="p-4">
                      <p className="text-sm text-blue-900 font-semibold">Theorem Statement:</p>
                      <p className="text-sm text-blue-800 leading-relaxed mt-1">The perpendicular drawn from the centre of a circle to a chord bisects the chord (divides it into two equal halves). Conversely, the line from the centre that bisects a chord is perpendicular to it.</p>
                    </CardContent>
                  </Card>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-muted/40 rounded-lg p-4 border text-sm text-muted-foreground">
                      <p className="font-semibold text-foreground mb-2">Diagram Description</p>
                      <p>Circle with centre O. Chord AB. Line from O perpendicular to AB hits it at point M. By P1: AM = MB (M is the midpoint of AB).</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground mb-2">Worked Example (using Pythagorean Theorem)</p>
                      <p className="text-xs text-muted-foreground mb-2">A circle has radius 10 cm. A chord is 12 cm long. How far is the chord from the centre?</p>
                      <div className="bg-muted/40 rounded p-3 border font-mono text-xs space-y-1">
                        <p>P1: perpendicular bisects chord</p>
                        <p>Half chord = 12/2 = 6 cm</p>
                        <p>Radius = 10 cm (hypotenuse)</p>
                        <p>d² + 6² = 10²</p>
                        <p>d² = 100 − 36 = 64</p>
                        <p className="font-bold text-primary">d = 8 cm from centre</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Property 2 */}
              <Card className="shadow-sm border-t-4 border-t-teal-600">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-sm shrink-0">P2</div>
                    <h3 className="font-serif font-bold text-lg">Central Angle = 2 × Inscribed Angle</h3>
                  </div>
                  <Card className="bg-teal-50 border-teal-200 mb-4">
                    <CardContent className="p-4">
                      <p className="text-sm text-teal-900 font-semibold">Theorem Statement:</p>
                      <p className="text-sm text-teal-800 leading-relaxed mt-1">The central angle subtended by an arc is twice the inscribed angle subtended by the same arc. If ∠AOB is the central angle and ∠APB is an inscribed angle (P on the circle, on the major arc side), then <strong>∠AOB = 2 × ∠APB</strong>.</p>
                    </CardContent>
                  </Card>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground mb-2">Example 1: Find the inscribed angle</p>
                      <div className="bg-muted/40 rounded p-3 border font-mono text-xs space-y-1">
                        <p>Central angle ∠AOB = 80°</p>
                        <p>∠APB = ∠AOB ÷ 2</p>
                        <p className="font-bold text-primary">∠APB = 40°</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground mb-2">Example 2: Find the central angle</p>
                      <div className="bg-muted/40 rounded p-3 border font-mono text-xs space-y-1">
                        <p>Inscribed angle ∠APB = 35°</p>
                        <p>∠AOB = 2 × ∠APB</p>
                        <p className="font-bold text-primary">∠AOB = 70°</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Property 3 */}
              <Card className="shadow-sm border-t-4 border-t-violet-600">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center text-white font-bold text-sm shrink-0">P3</div>
                    <h3 className="font-serif font-bold text-lg">Inscribed Angles Subtended by the Same Arc Are Equal</h3>
                  </div>
                  <Card className="bg-violet-50 border-violet-200 mb-4">
                    <CardContent className="p-4">
                      <p className="text-sm text-violet-900 font-semibold">Theorem Statement:</p>
                      <p className="text-sm text-violet-800 leading-relaxed mt-1">All inscribed angles subtended by the same arc (or equal arcs) are equal. If P, Q, and R are all on the circle and all look at the same chord AB, then <strong>∠APB = ∠AQB = ∠ARB</strong>.</p>
                    </CardContent>
                  </Card>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground mb-2">Example: Find the unknown angle</p>
                      <div className="bg-muted/40 rounded p-3 border font-mono text-xs space-y-1">
                        <p>∠APB = 52° (inscribed in arc AB)</p>
                        <p>∠AQB = ? (also inscribed in same arc AB)</p>
                        <p>By P3: ∠AQB = ∠APB</p>
                        <p className="font-bold text-primary">∠AQB = 52°</p>
                      </div>
                    </div>
                    <div className="bg-muted/40 rounded-lg p-4 border text-sm text-muted-foreground">
                      <p className="font-semibold text-foreground mb-2">Special Case</p>
                      <p>If the inscribed angle is in a semicircle (the arc is a diameter), the inscribed angle = 90°. This is a direct result of P2: central angle = 180° (straight line), so inscribed angle = 90°.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Property 4 */}
              <Card className="shadow-sm border-t-4 border-t-amber-600">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-amber-600 rounded-lg flex items-center justify-center text-white font-bold text-sm shrink-0">P4</div>
                    <h3 className="font-serif font-bold text-lg">Tangent is Perpendicular to the Radius at the Point of Tangency</h3>
                  </div>
                  <Card className="bg-amber-50 border-amber-200 mb-4">
                    <CardContent className="p-4">
                      <p className="text-sm text-amber-900 font-semibold">Theorem Statement:</p>
                      <p className="text-sm text-amber-800 leading-relaxed mt-1">A tangent line to a circle is perpendicular to the radius drawn to the point of tangency. If t is tangent at point P, and O is the centre, then <strong>OP ⊥ t</strong>, meaning ∠OPT = 90°.</p>
                    </CardContent>
                  </Card>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground mb-2">Worked Example</p>
                      <p className="text-xs text-muted-foreground mb-2">A tangent from external point T touches circle (centre O, radius 5 cm) at P. OT = 13 cm. Find PT.</p>
                      <div className="bg-muted/40 rounded p-3 border font-mono text-xs space-y-1">
                        <p>P4: OP ⊥ PT → right angle at P</p>
                        <p>Triangle OPT is right-angled at P</p>
                        <p>PT² + OP² = OT²</p>
                        <p>PT² + 5² = 13²</p>
                        <p>PT² = 169 − 25 = 144</p>
                        <p className="font-bold text-primary">PT = 12 cm</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground mb-2">Finding a missing angle</p>
                      <div className="bg-muted/40 rounded p-3 border font-mono text-xs space-y-1">
                        <p>Tangent at P, radius OP</p>
                        <p>∠OPT = 90° (P4)</p>
                        <p>In triangle OPT: ∠POT = 58°</p>
                        <p>∠OTP = 180° − 90° − 58° = 32°</p>
                        <p className="font-bold text-primary">∠OTP = 32°</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Multi-property problems */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-emerald-700 flex items-center justify-center text-white font-bold text-lg shrink-0">4</div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold">Multi-Property Problems</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="shadow-sm">
                <CardContent className="p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Using P2 + Angles in Triangle</p>
                  <p className="text-xs text-muted-foreground mb-3">In a circle with centre O, ∠AOB = 110°. P is on the circle. Find ∠APB and ∠PAB if triangle APB is isosceles with AP = PB.</p>
                  <div className="bg-muted/40 rounded p-3 border font-mono text-xs space-y-1">
                    <p>P2: ∠APB = ∠AOB ÷ 2 = 55°</p>
                    <p>Triangle APB: angles sum = 180°</p>
                    <p>AP = PB → ∠PAB = ∠PBA (isosceles)</p>
                    <p>2∠PAB + 55° = 180°</p>
                    <p>2∠PAB = 125°</p>
                    <p className="font-bold text-primary">∠PAB = 62.5°</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-sm">
                <CardContent className="p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Using P3 + Triangle Angle Sum</p>
                  <p className="text-xs text-muted-foreground mb-3">Points A, B, P, Q all on circle. ∠PAQ = 35°, ∠AQB = 48°. Find ∠PBQ.</p>
                  <div className="bg-muted/40 rounded p-3 border font-mono text-xs space-y-1">
                    <p>P3: ∠PBQ = ∠PAQ = 35° (same arc PQ)</p>
                    <p>Check: ∠APB and ∠AQB subtend same arc AB</p>
                    <p>So ∠APB = ∠AQB = 48°</p>
                    <p className="font-bold text-primary">∠PBQ = 35°</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <PracticeProblems problems={unit7Problems} accentClass="border-l-sky-500" />

          {/* Continue */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-xl font-serif font-bold whitespace-nowrap">Continue to Next Unit</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4 max-w-sm">
              {unitNav.filter(u => !u.active).slice(6).map((u) => (
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
