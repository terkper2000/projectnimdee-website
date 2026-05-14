import { Link } from "wouter";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ChevronRight, Hash, Sigma, Triangle, BarChart3 } from "lucide-react";
import PracticeProblems, { type Problem } from "@/components/PracticeProblems";
import GeneratedPractice from "@/components/GeneratedPractice";
import { generateUnit4 } from "@/utils/math9Generators";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };

const unitNav = [
  { label: "Unit 1: Rational Numbers", href: "/resources/math-9/unit-1", icon: <Hash className="w-4 h-4" /> },
  { label: "Unit 2: Powers", href: "/resources/math-9/unit-2", icon: <Sigma className="w-4 h-4" /> },
  { label: "Unit 3: Polynomials", href: "/resources/math-9/unit-3", icon: <Hash className="w-4 h-4" /> },
  { label: "Unit 4: Geometry", href: "/resources/math-9/unit-4", icon: <Triangle className="w-4 h-4" />, active: true },
  { label: "Unit 5: Linear Relations", href: "/resources/math-9/unit-5", icon: <Sigma className="w-4 h-4" /> },
  { label: "Unit 6: Equations", href: "/resources/math-9/unit-6", icon: <Hash className="w-4 h-4" /> },
  { label: "Unit 7: Circles", href: "/resources/math-9/unit-7", icon: <Triangle className="w-4 h-4" /> },
  { label: "Unit 8: Data", href: "/resources/math-9/unit-8", icon: <BarChart3 className="w-4 h-4" /> },
];

const lineSymmetry = [
  { shape: "Equilateral Triangle", lines: "3", note: "One through each vertex and midpoint of opposite side" },
  { shape: "Square", lines: "4", note: "2 through midpoints, 2 through vertices" },
  { shape: "Rectangle (non-square)", lines: "2", note: "Through midpoints of opposite sides only" },
  { shape: "Regular Pentagon", lines: "5", note: "One through each vertex" },
  { shape: "Regular Hexagon", lines: "6", note: "3 through vertices, 3 through midpoints" },
  { shape: "Circle", lines: "Infinite", note: "Any diameter is a line of symmetry" },
  { shape: "Scalene Triangle", lines: "0", note: "No lines of symmetry" },
  { shape: "Isosceles Triangle", lines: "1", note: "Through the vertex angle and midpoint of base" },
];

const rotationSymmetry = [
  { shape: "Equilateral Triangle", order: "3", angle: "120°" },
  { shape: "Square", order: "4", angle: "90°" },
  { shape: "Rectangle (non-square)", order: "2", angle: "180°" },
  { shape: "Regular Pentagon", order: "5", angle: "72°" },
  { shape: "Regular Hexagon", order: "6", angle: "60°" },
  { shape: "Circle", order: "Infinite", angle: "Any angle" },
  { shape: "Scalene Triangle", order: "1 (none)", angle: "360° only" },
];

export const unit4Problems: Problem[] = [
  {
    level: "Basic",
    question: "How many lines of symmetry does a regular pentagon have?",
    steps: [
      "A regular polygon with n sides has n lines of symmetry",
      "A regular pentagon has 5 sides",
    ],
    answer: "5 lines of symmetry",
  },
  {
    level: "Basic",
    question: "What is the order of rotation symmetry for a regular hexagon, and what is its angle of rotation?",
    steps: [
      "A regular hexagon has 6 sides → order of rotation = 6",
      "Angle = 360° ÷ 6 = 60°",
    ],
    answer: "Order 6, angle of rotation 60°",
  },
  {
    level: "Basic",
    question: "A map has a scale of 1:25 000. A park is 6 cm on the map. What is its actual length?",
    steps: [
      "Actual = diagram length × scale denominator",
      "= 6 cm × 25 000 = 150 000 cm",
      "Convert: 150 000 cm ÷ 100 = 1500 m = 1.5 km",
    ],
    answer: "1.5 km",
  },
  {
    level: "Intermediate",
    question: "Triangle ABC ~ Triangle DEF. AB = 8 cm, BC = 10 cm. DE = 12 cm. Find EF.",
    steps: [
      "Scale factor = DE ÷ AB = 12 ÷ 8 = 3/2",
      "EF = BC × scale factor = 10 × 3/2 = 15 cm",
    ],
    answer: "EF = 15 cm",
  },
  {
    level: "Intermediate",
    question: "A building is 30 m tall. On a blueprint it is drawn 5 cm tall. What is the scale factor?",
    steps: [
      "Convert to same units: 30 m = 3000 cm",
      "Scale factor = diagram ÷ actual = 5 ÷ 3000 = 1/600",
    ],
    answer: "Scale 1:600",
  },
  {
    level: "Intermediate",
    question: "A rectangular prism has dimensions 5 m × 3 m × 2 m. Find its surface area.",
    steps: [
      "SA = 2(lw + lh + wh)",
      "= 2(5×3 + 5×2 + 3×2)",
      "= 2(15 + 10 + 6)",
      "= 2(31) = 62 m²",
    ],
    answer: "62 m²",
  },
  {
    level: "Challenge",
    question: "A composite object: a cube (4 m sides) sits on top of a rectangular prism (8 m × 8 m × 3 m). Find the total exposed surface area.",
    steps: [
      "SA of large prism alone: 2(8×8 + 8×3 + 8×3) = 2(64+24+24) = 2(112) = 224 m²",
      "SA of cube alone: 6 × 4² = 6 × 16 = 96 m²",
      "Hidden faces: top of prism under cube = 4×4 = 16 m², bottom of cube = 16 m² → subtract 2×16 = 32 m²",
      "Total = 224 + 96 − 32 = 288 m²",
    ],
    answer: "288 m²",
  },
  {
    level: "Challenge",
    question: "Two similar rectangles: the first is 6 cm × 10 cm, the second has a shorter side of 9 cm. Find the longer side of the second rectangle.",
    steps: [
      "Scale factor = 9 ÷ 6 = 3/2",
      "Longer side = 10 × 3/2 = 15 cm",
    ],
    answer: "15 cm",
  },
];

export default function Math9Unit4() {
  return (
    <Layout>
      <div className="bg-muted/40 border-b">
        <div className="container mx-auto px-4 md:px-6 py-3 flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
          <Link href="/resources" className="hover:text-primary transition-colors flex items-center gap-1"><ArrowLeft className="w-4 h-4" />Resources</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/resources/math-9" className="hover:text-primary transition-colors">Math 9</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground font-medium">Unit 4: Polygon Geometry</span>
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
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-secondary-foreground mb-4 leading-tight">Unit 4: Polygon Geometry</h1>
            <p className="text-secondary-foreground/75 text-lg leading-relaxed mb-8 max-w-2xl">
              From the surface area of composite 3-D objects to the symmetry of regular polygons, this unit develops spatial reasoning and connects geometry to scale, proportion, and design.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Surface Area", "Composite Objects", "Similar Polygons", "Scale Diagrams", "Line Symmetry", "Rotation Symmetry"].map((t) => (
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
                { num: "SS9.1", text: "Demonstrate an understanding of similarity of polygons by: identifying similar polygons and explaining why, determining the scale factor, solving problems involving scale diagrams." },
                { num: "SS9.2", text: "Draw and interpret scale diagrams of 2-D shapes using a given scale factor." },
                { num: "SS9.3", text: "Determine the surface area of composite 3-D objects to solve problems." },
                { num: "SS9.4", text: "Demonstrate an understanding of line and rotation symmetry." },
              ].map((o, i) => (
                <motion.div key={i} variants={fadeUp} className="flex gap-3 p-4 rounded-xl bg-muted/40 border border-l-4 border-l-blue-600">
                  <span className="font-bold text-blue-700 text-sm shrink-0 mt-0.5">{o.num}:</span>
                  <p className="text-sm text-foreground/80 leading-relaxed">{o.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* 2 — Surface Area of Composite Objects */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-blue-700 flex items-center justify-center text-white font-bold text-lg shrink-0">2</div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold">Surface Area of Composite Objects</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <Card className="bg-blue-50 border-blue-200 shadow-sm mb-6">
              <CardContent className="p-5">
                <h3 className="font-bold text-blue-900 mb-2">Strategy</h3>
                <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside leading-relaxed">
                  <li>Identify and <strong>decompose</strong> the composite object into its simpler component shapes (rectangular prism, cylinder, cone, pyramid, etc.).</li>
                  <li>Calculate the total surface area of each component as if it were separate.</li>
                  <li><strong>Subtract</strong> any faces that are hidden (shared/joined between the two shapes — these are not exposed).</li>
                  <li>Add up all exposed areas.</li>
                </ol>
              </CardContent>
            </Card>
            <Card className="shadow-sm">
              <CardContent className="p-5">
                <h3 className="font-serif font-bold mb-4">Worked Example: Two rectangular prisms stacked</h3>
                <p className="text-sm text-muted-foreground mb-4">A large prism (6 m × 4 m × 3 m) has a smaller prism (2 m × 2 m × 2 m) sitting on top of it.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-primary mb-2">Step 1: Surface area of large prism (alone)</p>
                    <div className="bg-muted/40 rounded p-3 border font-mono text-xs space-y-1">
                      <p>SA = 2(lw + lh + wh)</p>
                      <p>= 2(6×4 + 6×3 + 4×3)</p>
                      <p>= 2(24 + 18 + 12)</p>
                      <p>= 2(54) = 108 m²</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-2">Step 2: Surface area of small prism (alone)</p>
                    <div className="bg-muted/40 rounded p-3 border font-mono text-xs space-y-1">
                      <p>SA = 2(2×2 + 2×2 + 2×2)</p>
                      <p>= 2(4 + 4 + 4) = 24 m²</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-2">Step 3: Subtract shared/hidden faces</p>
                    <div className="bg-muted/40 rounded p-3 border font-mono text-xs space-y-1">
                      <p>Shared face = 2 × 2 = 4 m²</p>
                      <p>Subtract 2× (top of large, bottom of small)</p>
                      <p>= 2 × 4 = 8 m² removed</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-2">Step 4: Total exposed surface area</p>
                    <div className="bg-muted/40 rounded p-3 border font-mono text-xs space-y-1">
                      <p>SA = 108 + 24 − 8</p>
                      <p className="font-bold text-primary">= 124 m²</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* 3 — Similar Polygons */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-teal-700 flex items-center justify-center text-white font-bold text-lg shrink-0">3</div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold">Similar Polygons</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Card className="border-l-4 border-l-teal-500 shadow-sm">
                <CardContent className="p-5">
                  <h3 className="font-serif font-bold mb-3">Definition & Conditions</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">Two polygons are <strong className="text-foreground">similar</strong> if:</p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>All <strong className="text-foreground">corresponding angles are equal</strong></li>
                    <li>All <strong className="text-foreground">corresponding sides are proportional</strong> (same ratio)</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-3">The ratio of corresponding sides is the <strong className="text-foreground">scale factor</strong>.</p>
                </CardContent>
              </Card>
              <Card className="shadow-sm">
                <CardContent className="p-5">
                  <h3 className="font-serif font-bold mb-3">Worked Example</h3>
                  <p className="text-sm text-muted-foreground mb-3">Triangle ABC ~ Triangle DEF. AB = 6, BC = 8, AC = 10. DE = 9. Find EF and DF.</p>
                  <div className="bg-muted/40 rounded p-3 border font-mono text-xs space-y-1">
                    <p>Scale factor = DE/AB = 9/6 = 3/2</p>
                    <p>EF = BC × 3/2 = 8 × 3/2 = 12</p>
                    <p>DF = AC × 3/2 = 10 × 3/2 = 15</p>
                    <p className="font-bold text-primary">EF = 12, DF = 15</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* 4 — Scale Diagrams */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-amber-600 flex items-center justify-center text-white font-bold text-lg shrink-0">4</div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold">Scale Diagrams</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <Card className="bg-amber-50 border-amber-200 shadow-sm mb-6">
              <CardContent className="p-5">
                <h3 className="font-bold text-amber-900 mb-2">Key Relationships</h3>
                <div className="font-mono text-sm text-center space-y-2 text-amber-800 py-2">
                  <p>Scale Factor = Diagram Length ÷ Actual Length</p>
                  <p>Actual Length = Diagram Length ÷ Scale Factor</p>
                  <p>Diagram Length = Actual Length × Scale Factor</p>
                </div>
              </CardContent>
            </Card>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="shadow-sm">
                <CardContent className="p-5">
                  <p className="font-semibold text-primary mb-2">Example 1: Reading a Scale Diagram</p>
                  <p className="text-xs text-muted-foreground mb-3">A map uses a scale of 1:50 000. A road measures 4.5 cm on the map. What is the actual length?</p>
                  <div className="bg-muted/40 rounded p-3 border font-mono text-xs space-y-1">
                    <p>Actual = 4.5 cm × 50 000</p>
                    <p>= 225 000 cm</p>
                    <p className="font-bold text-primary">= 2250 m = 2.25 km</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-sm">
                <CardContent className="p-5">
                  <p className="font-semibold text-primary mb-2">Example 2: Finding the Scale Factor</p>
                  <p className="text-xs text-muted-foreground mb-3">A building is 45 m tall. In a blueprint, it is drawn 9 cm tall. What is the scale factor?</p>
                  <div className="bg-muted/40 rounded p-3 border font-mono text-xs space-y-1">
                    <p>Convert: 45 m = 4500 cm</p>
                    <p>Scale factor = 9/4500 = 1/500</p>
                    <p className="font-bold text-primary">Scale = 1:500</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* 5 — Line Symmetry */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-violet-700 flex items-center justify-center text-white font-bold text-lg shrink-0">5</div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold">Line Symmetry</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <Card className="border-l-4 border-l-violet-500 shadow-sm mb-6">
              <CardContent className="p-5">
                <h3 className="font-serif font-bold mb-2">Definition</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">A shape has <strong className="text-foreground">line symmetry</strong> (also called reflectional symmetry) if a line (the <em>line of symmetry</em>) divides it into two congruent halves that are mirror images of each other. A shape can have zero, one, or many lines of symmetry.</p>
              </CardContent>
            </Card>
            <Card className="shadow-sm overflow-hidden">
              <div className="bg-muted/50 px-5 py-3 border-b font-bold text-sm">Lines of Symmetry by Shape</div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-secondary text-secondary-foreground">
                      <th className="text-left px-4 py-3 font-semibold">Shape</th>
                      <th className="text-left px-4 py-3 font-semibold">Lines of Symmetry</th>
                      <th className="text-left px-4 py-3 font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {lineSymmetry.map((row, i) => (
                      <tr key={i} className="border-t hover:bg-muted/30 transition-colors">
                        <td className="px-4 py-3 font-semibold">{row.shape}</td>
                        <td className="px-4 py-3 font-bold text-primary text-center">{row.lines}</td>
                        <td className="px-4 py-3 text-muted-foreground text-xs">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </section>

          {/* 6 — Rotation Symmetry */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-sky-700 flex items-center justify-center text-white font-bold text-lg shrink-0">6</div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold">Rotation Symmetry</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Card className="border-l-4 border-l-sky-500 shadow-sm">
                <CardContent className="p-5">
                  <h3 className="font-serif font-bold mb-3">Key Definitions</h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p><strong className="text-foreground">Order of Rotation:</strong> The number of times a shape looks identical to its original position as it is rotated 360° about its centre.</p>
                    <p><strong className="text-foreground">Angle of Rotation:</strong> The minimum angle needed to rotate the shape to match its original position. <br/><span className="font-mono text-primary">Angle = 360° ÷ Order</span></p>
                    <p>A shape with order 1 has NO rotation symmetry (it must complete a full 360° rotation to match itself).</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-sm overflow-hidden">
                <div className="bg-muted/50 px-5 py-3 border-b font-bold text-sm">Rotation Symmetry by Shape</div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-muted/30">
                        <th className="text-left px-4 py-2 font-semibold text-muted-foreground">Shape</th>
                        <th className="text-left px-4 py-2 font-semibold text-muted-foreground">Order</th>
                        <th className="text-left px-4 py-2 font-semibold text-muted-foreground">Angle</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rotationSymmetry.map((row, i) => (
                        <tr key={i} className="border-t">
                          <td className="px-4 py-2.5 font-semibold text-sm">{row.shape}</td>
                          <td className="px-4 py-2.5 font-bold text-primary text-center">{row.order}</td>
                          <td className="px-4 py-2.5 font-mono text-sm text-muted-foreground">{row.angle}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
            <Card className="bg-amber-50 border-amber-200 shadow-sm">
              <CardContent className="p-5">
                <h3 className="font-bold text-amber-900 mb-2">Relationship to Regular Polygons</h3>
                <p className="text-sm text-amber-800 leading-relaxed">A regular polygon with <em>n</em> sides has <strong>n lines of symmetry</strong> and a rotation symmetry of <strong>order n</strong> with an angle of rotation of <strong>360° ÷ n</strong>. For example, a regular hexagon (6 sides) has 6 lines of symmetry, order 6, and rotates by 60°.</p>
              </CardContent>
            </Card>
          </section>

          <PracticeProblems problems={unit4Problems} accentClass="border-l-blue-500" />
          <GeneratedPractice generateProblem={generateUnit4} unitTitle="Geometry" accentColor="border-l-blue-500" />

          {/* Continue */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-xl font-serif font-bold whitespace-nowrap">Continue to Next Unit</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {unitNav.filter(u => !u.active).slice(3, 6).map((u) => (
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
