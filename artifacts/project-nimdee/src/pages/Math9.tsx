import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Youtube, ChevronRight, Hash, Sigma, Triangle, BarChart3 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const units = [
  {
    num: "Unit 1",
    title: "Rational Numbers",
    description: "Compare, order, and perform operations with rational numbers including fractions, decimals, and integers. Master BEDMAS with rational coefficients.",
    topics: ["Fractions", "Decimals", "Integers", "BEDMAS"],
    outcome: "Number Strand",
    href: "/resources/math-9/unit-1",
    icon: <Hash className="w-6 h-6" />,
    accent: "from-amber-900 to-amber-500",
    tagBg: "bg-amber-50 text-amber-800",
    border: "border-t-amber-600",
    numColor: "text-amber-800",
  },
  {
    num: "Unit 2",
    title: "Powers & Exponents",
    description: "Represent repeated multiplication using powers and apply the exponent laws — product, quotient, power of a power, zero exponent, and negative exponents.",
    topics: ["Exponent Laws", "Zero Exponent", "Negative Exponents", "Simplifying"],
    outcome: "Number Strand",
    href: "/resources/math-9/unit-2",
    icon: <Sigma className="w-6 h-6" />,
    accent: "from-orange-900 to-orange-500",
    tagBg: "bg-orange-50 text-orange-800",
    border: "border-t-orange-600",
    numColor: "text-orange-800",
  },
  {
    num: "Unit 3",
    title: "Polynomial Operations",
    description: "Understand and perform addition, subtraction, multiplication, and division of polynomials up to degree 2. Apply the distributive property.",
    topics: ["Like Terms", "Distributive Property", "Multiply", "Divide"],
    outcome: "Patterns & Relations Strand",
    href: "/resources/math-9/unit-3",
    icon: <Hash className="w-6 h-6" />,
    accent: "from-teal-900 to-teal-600",
    tagBg: "bg-teal-50 text-teal-800",
    border: "border-t-teal-600",
    numColor: "text-teal-800",
  },
  {
    num: "Unit 4",
    title: "Polygon Geometry",
    description: "Determine surface area of composite 3-D objects, explore similar polygons and scale diagrams, and investigate line and rotation symmetry.",
    topics: ["Surface Area", "Similar Polygons", "Scale Diagrams", "Symmetry"],
    outcome: "Shape & Space Strand",
    href: "/resources/math-9/unit-4",
    icon: <Triangle className="w-6 h-6" />,
    accent: "from-blue-900 to-blue-500",
    tagBg: "bg-blue-50 text-blue-800",
    border: "border-t-blue-600",
    numColor: "text-blue-800",
  },
  {
    num: "Unit 5",
    title: "Linear Relations",
    description: "Graph and analyze linear relations. Explore slope, slope-intercept form, domain and range, and distinguish direct from partial variation.",
    topics: ["Slope", "y = mx + b", "Graphing", "Interpolation"],
    outcome: "Patterns & Relations Strand",
    href: "/resources/math-9/unit-5",
    icon: <Sigma className="w-6 h-6" />,
    accent: "from-violet-900 to-violet-500",
    tagBg: "bg-violet-50 text-violet-800",
    border: "border-t-violet-600",
    numColor: "text-violet-800",
  },
  {
    num: "Unit 6",
    title: "Equations & Inequalities",
    description: "Solve linear equations with rational coefficients and variables on both sides. Solve and graph linear inequalities on a number line.",
    topics: ["Linear Equations", "Inequalities", "Word Problems", "Number Line"],
    outcome: "Patterns & Relations Strand",
    href: "/resources/math-9/unit-6",
    icon: <Hash className="w-6 h-6" />,
    accent: "from-emerald-900 to-emerald-600",
    tagBg: "bg-emerald-50 text-emerald-800",
    border: "border-t-emerald-600",
    numColor: "text-emerald-800",
  },
  {
    num: "Unit 7",
    title: "Circle Geometry",
    description: "Investigate the four circle properties: perpendicular from centre bisects a chord, central and inscribed angles, and tangent-radius relationships.",
    topics: ["Inscribed Angles", "Central Angles", "Chords", "Tangents"],
    outcome: "Shape & Space Strand",
    href: "/resources/math-9/unit-7",
    icon: <Triangle className="w-6 h-6" />,
    accent: "from-sky-900 to-sky-500",
    tagBg: "bg-sky-50 text-sky-800",
    border: "border-t-sky-600",
    numColor: "text-sky-800",
  },
  {
    num: "Unit 8",
    title: "Data & Probability",
    description: "Analyze factors that affect data collection, compare population and sample, and investigate theoretical versus experimental probability.",
    topics: ["Data Collection", "Sample vs Population", "Probability", "Tree Diagrams"],
    outcome: "Statistics & Probability Strand",
    href: "/resources/math-9/unit-8",
    icon: <BarChart3 className="w-6 h-6" />,
    accent: "from-rose-900 to-rose-500",
    tagBg: "bg-rose-50 text-rose-800",
    border: "border-t-rose-600",
    numColor: "text-rose-800",
  },
];

const outcomes = [
  // Number
  "Compare and order rational numbers, including integers, fractions, and terminating/repeating decimals",
  "Perform operations (addition, subtraction, multiplication, division) on rational numbers with and without technology",
  "Apply order of operations (BEDMAS) to expressions involving rational numbers",
  "Represent repeated multiplication using powers with integer and variable bases",
  "Apply the exponent laws: product, quotient, power of a power, power of a product, power of a quotient",
  "Evaluate expressions involving zero exponents and negative integer exponents",
  // Patterns & Relations
  "Model situations using linear equations with rational coefficients and variables on both sides",
  "Solve linear equations using algebraic methods and verify solutions",
  "Solve and graph linear inequalities, noting that multiplying/dividing by a negative flips the inequality",
  "Add, subtract, and multiply polynomials of degree ≤ 2; divide a polynomial by a monomial",
  "Generalize and graph linear relations; determine slope from a graph or two points",
  "Interpolate and extrapolate values from graphs and distinguish between direct and partial variation",
  // Shape & Space
  "Determine the surface area of composite 3-D objects; decompose objects into their component shapes",
  "Identify and apply the properties of similar polygons including scale factor and corresponding parts",
  "Draw and interpret scale diagrams; solve problems using scale factors and proportions",
  "Determine line and rotation symmetry of 2-D shapes and relate to regular polygons",
  // Geometry
  "Apply the four circle properties: perpendicular bisector of chord, central and inscribed angles, tangent",
  "Use the Pythagorean theorem in combination with circle geometry properties to solve problems",
  // Statistics & Probability
  "Critique data collection methods for bias, ethics, language, cost, timing, and cultural sensitivity",
  "Distinguish between a population and a sample; evaluate when sampling is appropriate",
  "Determine theoretical and experimental probability using fractions, decimals, and percents",
  "Represent sample spaces with lists, tables, and tree diagrams; solve probability problems",
];

type ResourceColor = "blue" | "green" | "purple" | "amber" | "slate" | "sky" | "teal" | "rose";
interface WebResource {
  name: string; description: string; tag: string; url: string; href: string; color: ResourceColor;
}
const colorMap: Record<ResourceColor, { border: string; tag: string; dot: string }> = {
  blue:   { border: "border-l-blue-500",   tag: "bg-blue-50 text-blue-800",   dot: "bg-blue-500" },
  green:  { border: "border-l-emerald-500", tag: "bg-emerald-50 text-emerald-800", dot: "bg-emerald-500" },
  purple: { border: "border-l-violet-500",  tag: "bg-violet-50 text-violet-800",  dot: "bg-violet-500" },
  amber:  { border: "border-l-amber-500",   tag: "bg-amber-50 text-amber-800",   dot: "bg-amber-500" },
  slate:  { border: "border-l-slate-500",   tag: "bg-slate-100 text-slate-700",  dot: "bg-slate-500" },
  sky:    { border: "border-l-sky-500",     tag: "bg-sky-50 text-sky-800",     dot: "bg-sky-500" },
  teal:   { border: "border-l-teal-500",    tag: "bg-teal-50 text-teal-800",    dot: "bg-teal-500" },
  rose:   { border: "border-l-rose-500",    tag: "bg-rose-50 text-rose-800",    dot: "bg-rose-500" },
};

const webResourceCategories: { label: string; resources: WebResource[] }[] = [
  {
    label: "Graphing & Algebra Tools",
    resources: [
      { name: "Desmos Graphing Calculator", description: "The gold-standard free graphing calculator for linear relations, exploring slope, y-intercept, and functions. Directly relevant to Units 5 and 6.", tag: "Graphing", url: "desmos.com/calculator", href: "https://www.desmos.com/calculator", color: "blue" },
      { name: "Desmos Math 9 Activities", description: "Self-paced Desmos activities built for Grade 9 math topics including polynomial operations, linear relations, and inequalities — all with instant feedback.", tag: "Interactive Activities", url: "teacher.desmos.com", href: "https://teacher.desmos.com/", color: "blue" },
      { name: "GeoGebra", description: "Free dynamic mathematics software for geometry, algebra, graphing, and 3D objects. Excellent for Unit 4 polygon geometry and Unit 7 circle properties.", tag: "Geometry & Algebra", url: "geogebra.org", href: "https://www.geogebra.org/", color: "green" },
    ],
  },
  {
    label: "Learning Platforms",
    resources: [
      { name: "Khan Academy — Grade 9 Math", description: "Free video lessons and exercises aligned to Grade 9 topics: rational numbers, exponents, polynomials, linear equations, and basic statistics.", tag: "Video + Practice", url: "khanacademy.org/math", href: "https://www.khanacademy.org/math", color: "green" },
      { name: "Mathigon", description: "Story-driven, interactive math explorations covering number theory, algebra, geometry, and probability. Engaging for students who prefer narrative learning.", tag: "Interactive", url: "mathigon.org", href: "https://mathigon.org/", color: "purple" },
      { name: "CK-12", description: "Free digital textbooks and practice problems for Grade 9 math. Customizable to the Alberta curriculum with adaptive assessments.", tag: "Textbook + Practice", url: "ck12.org", href: "https://www.ck12.org/", color: "teal" },
    ],
  },
  {
    label: "Problem Solving & Reference",
    resources: [
      { name: "Wolfram Alpha", description: "Computational engine that solves equations, simplifies expressions, calculates probability, and shows step-by-step solutions for any Math 9 problem.", tag: "Problem Solver", url: "wolframalpha.com", href: "https://wolframalpha.com/", color: "slate" },
      { name: "NCTM Illuminations", description: "Standards-based math activities and interactives from the National Council of Teachers of Mathematics. Strong algebra and geometry tools.", tag: "Activities", url: "illuminations.nctm.org", href: "https://illuminations.nctm.org/", color: "amber" },
      { name: "ExploreLearning Gizmos", description: "Virtual math simulations aligned to curriculum. Particularly effective for exploring linear relations, polynomial models, and probability experiments.", tag: "Virtual Labs", url: "explorelearning.com", href: "https://www.explorelearning.com/", color: "blue" },
    ],
  },
];

interface YtChannel { name: string; handle: string; href: string; description: string; units: string[]; }
const youtubeCategories: { label: string; channels: YtChannel[] }[] = [
  {
    label: "Number & Algebra",
    channels: [
      { name: "Math with Mr. J", handle: "@MathwithMrJ", href: "https://www.youtube.com/@MathwithMrJ", description: "Clear, step-by-step videos on fractions, rational numbers, exponents, and polynomials at the Grade 7–9 level. One of the most beginner-friendly channels for Alberta Math 9 topics.", units: ["Unit 1", "Unit 2", "Unit 3"] },
      { name: "Mario's Math Tutoring", handle: "@MariosMathTutoring", href: "https://www.youtube.com/@MariosMathTutoring", description: "Concise, worked-example videos covering exponent laws, polynomial operations, linear equations, and inequalities. Excellent for working through practice problems step by step.", units: ["Unit 2", "Unit 3", "Unit 6"] },
      { name: "tecmath", handle: "@tecmath", href: "https://www.youtube.com/@tecmath", description: "Fast-paced mental math and number sense videos. Great for building fluency with rational number operations, fraction arithmetic, and order of operations.", units: ["Unit 1", "General Math"] },
    ],
  },
  {
    label: "Geometry & Relations",
    channels: [
      { name: "PatrickJMT", handle: "@patrickjmt", href: "https://www.youtube.com/@patrickjmt", description: "Hundreds of short math tutorials covering linear equations, graphing, slope, inequalities, and geometry. PatrickJMT is particularly strong for Unit 5 and Unit 6 content.", units: ["Unit 5", "Unit 6", "Algebra"] },
      { name: "The Organic Chemistry Tutor", handle: "@TheOrganicChemistryTutor", href: "https://www.youtube.com/@TheOrganicChemistryTutor", description: "Despite the name, this channel covers all of Grade 9 math thoroughly — rational numbers, exponents, polynomials, graphing, equations, and probability — with detailed worked examples.", units: ["Unit 1", "Unit 2", "Unit 5", "Unit 6"] },
      { name: "Professor Leonard", handle: "@ProfessorLeonard", href: "https://www.youtube.com/@ProfessorLeonard", description: "Deeply thorough math lectures. Excellent for linear relations and equations (Unit 5 and 6) if you want to go deeper than the classroom covers.", units: ["Unit 5", "Unit 6"] },
    ],
  },
  {
    label: "Conceptual Understanding",
    channels: [
      { name: "3Blue1Brown", handle: "@3blue1brown", href: "https://www.youtube.com/@3blue1brown", description: "Beautiful visual mathematics. \"Essence of Linear Algebra\" and videos on number theory give deep conceptual insight into why the math works — not just how to do it.", units: ["Unit 5", "Conceptual"] },
      { name: "Numberphile", handle: "@numberphile", href: "https://www.youtube.com/@numberphile", description: "Mathematicians explain fascinating number properties, patterns, and puzzles. Builds mathematical curiosity and connects classroom math to the wider world of mathematics.", units: ["Unit 1", "Unit 2", "General"] },
      { name: "Stand-up Maths", handle: "@standupmaths", href: "https://www.youtube.com/@standupmaths", description: "Engaging, often funny explorations of interesting math problems. Great for seeing how probability, geometry, and algebra apply in unexpected real-world situations.", units: ["Unit 7", "Unit 8", "General"] },
    ],
  },
];

const studyTips = [
  { num: "1", tip: "Show every step when solving equations. A single missing step is the most common cause of mistakes on tests — and it makes it impossible to spot where an error occurred." },
  { num: "2", tip: "For rational number operations, always convert mixed numbers to improper fractions before computing. It prevents sign errors and keeps the work clean." },
  { num: "3", tip: "When working with exponent laws, write out each law by name before applying it. This slows you down just enough to catch errors like multiplying exponents instead of adding." },
  { num: "4", tip: "Graph every linear relation by hand at least once before using Desmos. Drawing the slope and y-intercept manually builds lasting intuition that technology alone doesn't give you." },
  { num: "5", tip: "Circle geometry has exactly four properties. Learn the name and statement of each one before working on problems — most errors come from mixing up which property applies." },
  { num: "6", tip: "For probability, always write out the sample space first (as a list or tree diagram) before calculating. Skipping this step leads to missed outcomes." },
  { num: "7", tip: "Review the previous unit before starting a new one. Math 9 units build on each other — exponents inform polynomials, which inform linear equations." },
  { num: "8", tip: "When studying, use a mix of re-reading notes, doing practice problems without notes, and checking your answers. The \"testing effect\" — retrieving information from memory — builds retention far better than re-reading alone." },
];

type Tab = "websites" | "youtube" | "tips";

export default function Math9() {
  const [activeTab, setActiveTab] = useState<Tab>("websites");

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-muted/40 border-b">
        <div className="container mx-auto px-4 md:px-6 py-3 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/resources" className="hover:text-primary transition-colors flex items-center gap-1" data-testid="link-back-resources">
            <ArrowLeft className="w-4 h-4" />
            Resources
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground font-medium">Math 9</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-secondary overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.22),transparent_60%)]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <span className="inline-block bg-primary/20 text-primary text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
              Alberta Grade 9 Mathematics
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-secondary-foreground mb-5 leading-tight">
              Math 9
            </h1>
            <p className="text-secondary-foreground/80 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              A rigorous, accessible Alberta-aligned course covering number, algebra, geometry, and statistics — built for students who want to truly understand mathematics, not just memorize procedures.
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                { val: "8", label: "Course Units" },
                { val: "Number", label: "& Algebra Strand" },
                { val: "Geometry", label: "& Statistics Strand" },
                { val: "Gr. 9", label: "Alberta Curriculum" },
              ].map((stat, i) => (
                <div key={i} className="bg-secondary-foreground/10 border border-secondary-foreground/15 rounded-xl px-5 py-3">
                  <div className="text-2xl font-serif font-bold text-secondary-foreground">{stat.val}</div>
                  <div className="text-xs text-secondary-foreground/55 uppercase tracking-wider mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Unit Nav strip */}
      <div className="bg-muted/30 border-b overflow-x-auto">
        <div className="container mx-auto px-4 md:px-6 py-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <span className="font-bold text-muted-foreground flex items-center gap-2 text-xs uppercase tracking-wider">Math 9 Units</span>
          {units.map((u) => (
            <Link key={u.num} href={u.href} className="text-foreground/70 hover:text-primary transition-colors font-medium whitespace-nowrap">
              {u.num}: {u.title}
            </Link>
          ))}
        </div>
      </div>

      <div className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6 space-y-20">

          {/* Course Units */}
          <section>
            <div className="flex items-center gap-4 mb-10">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">Course Units</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {units.map((unit, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <Card className={`h-full border-t-4 ${unit.border} shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1`} data-testid={`card-unit-${i}`}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3 mb-4">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${unit.accent} text-white shrink-0`}>{unit.icon}</div>
                        <div>
                          <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${unit.numColor}`}>{unit.num}</p>
                          <h3 className="font-serif font-bold text-lg text-foreground leading-snug">{unit.title}</h3>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{unit.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {unit.topics.map((t, ti) => (
                          <span key={ti} className={`text-xs font-semibold px-2.5 py-1 rounded-full ${unit.tagBg}`}>{t}</span>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t flex justify-between items-center">
                        <span className="text-xs text-muted-foreground font-medium">{unit.outcome}</span>
                        <Link href={unit.href} className="text-xs text-primary font-semibold hover:underline flex items-center gap-1">
                          Explore unit <ChevronRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Outcomes */}
          <section>
            <div className="flex items-center gap-4 mb-10">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">Alberta Curriculum Outcomes</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Card className="border overflow-hidden shadow-sm">
                <div className="bg-gradient-to-r from-secondary to-secondary/80 px-6 py-5">
                  <h3 className="font-serif font-bold text-xl text-secondary-foreground mb-1">What You Will Learn</h3>
                  <p className="text-secondary-foreground/70 text-sm">Specific outcomes from the Alberta Program of Studies — Grade 9 Mathematics</p>
                </div>
                <CardContent className="p-6">
                  {[
                    { strand: "Number Strand", items: outcomes.slice(0, 6), color: "bg-amber-500" },
                    { strand: "Patterns & Relations Strand", items: outcomes.slice(6, 12), color: "bg-teal-600" },
                    { strand: "Shape & Space Strand", items: outcomes.slice(12, 18), color: "bg-blue-600" },
                    { strand: "Statistics & Probability Strand", items: outcomes.slice(18), color: "bg-rose-600" },
                  ].map((group, gi) => (
                    <div key={gi} className="mb-8 last:mb-0">
                      <div className="flex items-center gap-2 mb-4">
                        <div className={`w-3 h-3 rounded-full ${group.color}`} />
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{group.strand}</p>
                      </div>
                      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {group.items.map((outcome, i) => (
                          <motion.div key={i} variants={fadeUp} className="flex items-start gap-3 p-3 rounded-lg bg-muted/40 border">
                            <div className={`w-2 h-2 rounded-full ${group.color} mt-1.5 shrink-0`} />
                            <p className="text-sm text-foreground/80 leading-relaxed">{outcome}</p>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </section>

          {/* Student Resources */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">Student Resources</h2>
              <div className="flex-1 h-px bg-border" />
            </div>

            <div className="flex gap-2 mb-8 flex-wrap" data-testid="resource-tabs">
              {(["websites", "youtube", "tips"] as Tab[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  data-testid={`tab-${tab}`}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold border-2 transition-all duration-200 ${
                    activeTab === tab
                      ? "bg-primary text-primary-foreground border-primary shadow-sm"
                      : "bg-background text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                  }`}
                >
                  {tab === "youtube" && <Youtube className="w-4 h-4" />}
                  {tab === "websites" && <ExternalLink className="w-4 h-4" />}
                  {tab === "tips" && <span className="text-base">✦</span>}
                  {tab === "websites" ? "Websites & Tools" : tab === "youtube" ? "YouTube Channels" : "Study Tips"}
                </button>
              ))}
            </div>

            {activeTab === "websites" && (
              <motion.div key="websites" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="space-y-10">
                {webResourceCategories.map((cat, ci) => {
                  return (
                    <div key={ci}>
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4 pb-2 border-b">{cat.label}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {cat.resources.map((res, ri) => {
                          const c = colorMap[res.color];
                          return (
                            <a key={ri} href={res.href} target="_blank" rel="noopener noreferrer" data-testid={`link-resource-${ci}-${ri}`}
                              className={`group block bg-background border border-l-4 ${c.border} rounded-xl p-4 hover:-translate-y-1 hover:shadow-md transition-all duration-200`}>
                              <p className="font-bold text-sm text-foreground mb-1.5 group-hover:text-primary transition-colors">{res.name}</p>
                              <p className="text-xs text-muted-foreground leading-relaxed mb-3">{res.description}</p>
                              <div className="flex items-center justify-between">
                                <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${c.tag}`}>{res.tag}</span>
                                <span className="text-xs text-muted-foreground/60">{res.url}</span>
                              </div>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            )}

            {activeTab === "youtube" && (
              <motion.div key="youtube" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="space-y-10">
                {youtubeCategories.map((cat, ci) => (
                  <div key={ci}>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4 pb-2 border-b">{cat.label}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {cat.channels.map((ch, chi) => (
                        <a key={chi} href={ch.href} target="_blank" rel="noopener noreferrer" data-testid={`link-yt-${ci}-${chi}`}
                          className="group block bg-background border border-t-4 border-t-red-600 rounded-xl p-4 hover:-translate-y-1 hover:shadow-md transition-all duration-200">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 bg-red-600 rounded-md flex items-center justify-center shrink-0">
                              <Youtube className="w-4 h-4 text-white" />
                            </div>
                            <div>
                              <p className="font-bold text-sm text-foreground group-hover:text-primary transition-colors">{ch.name}</p>
                              <p className="text-xs text-muted-foreground">{ch.handle}</p>
                            </div>
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed mb-3">{ch.description}</p>
                          <div className="flex flex-wrap gap-1.5">
                            {ch.units.map((u, ui) => (
                              <span key={ui} className="text-xs font-semibold px-2 py-0.5 rounded-full bg-red-50 text-red-700">{u}</span>
                            ))}
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === "tips" && (
              <motion.div key="tips" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6 md:p-8">
                  <h3 className="font-serif font-bold text-xl text-amber-900 mb-6">Study Smart for Math 9</h3>
                  <motion.div variants={stagger} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {studyTips.map((tip, i) => (
                      <motion.div key={i} variants={fadeUp} className="flex items-start gap-3">
                        <div className="w-7 h-7 bg-amber-800 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-white text-xs font-bold">{tip.num}</span>
                        </div>
                        <p className="text-sm text-slate-700 leading-relaxed">{tip.tip}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            )}
          </section>

        </div>
      </div>
    </Layout>
  );
}
