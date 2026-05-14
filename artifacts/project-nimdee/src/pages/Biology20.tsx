import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Youtube, ChevronRight, Globe, Leaf, Zap, Heart, ArrowRight } from "lucide-react";

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
    num: "Unit A",
    title: "Energy and Matter Exchange in the Biosphere",
    description: "Explore how energy flows through ecosystems and how matter cycles continuously through the biosphere, maintaining equilibrium over time.",
    topics: ["Energy Flow", "Food Webs", "Carbon Cycle", "Nitrogen Cycle", "Human Impact"],
    outcome: "Outcome 20-A",
    icon: <Globe className="w-6 h-6" />,
    accent: "from-teal-900 to-teal-500",
    tagBg: "bg-teal-50 text-teal-800",
    border: "border-t-teal-600",
    numColor: "text-teal-700",
    href: "/resources/biology-20/unit-a",
  },
  {
    num: "Unit B",
    title: "Ecosystems and Population Change",
    description: "Study how species interact within ecosystems, how populations change over time, and how biodiversity shapes living communities across Alberta and the world.",
    topics: ["Populations", "Niches & Habitats", "Taxonomy", "Natural Selection", "Evolution"],
    outcome: "Outcome 20-B",
    icon: <Leaf className="w-6 h-6" />,
    accent: "from-lime-900 to-lime-600",
    tagBg: "bg-lime-50 text-lime-800",
    border: "border-t-lime-600",
    numColor: "text-lime-800",
    href: "/resources/biology-20/unit-b",
  },
  {
    num: "Unit C",
    title: "Photosynthesis and Cellular Respiration",
    description: "Investigate how cells capture light energy, build organic molecules, and extract ATP through photosynthesis and cellular respiration — the complementary engines of life.",
    topics: ["Chloroplasts", "Calvin Cycle", "Mitochondria", "ATP Production", "Fermentation"],
    outcome: "Outcome 20-C",
    icon: <Zap className="w-6 h-6" />,
    accent: "from-amber-900 to-amber-500",
    tagBg: "bg-amber-50 text-amber-800",
    border: "border-t-amber-600",
    numColor: "text-amber-800",
    href: "/resources/biology-20/unit-c",
  },
  {
    num: "Unit D",
    title: "Human Systems",
    description: "Examine the structure, function, and interactions of the major human body systems, from digestion and respiration to circulation, excretion, and immune defence.",
    topics: ["Digestive System", "Respiratory System", "Circulatory System", "Excretory System", "Immune Defence"],
    outcome: "Outcome 20-D",
    icon: <Heart className="w-6 h-6" />,
    accent: "from-rose-900 to-rose-500",
    tagBg: "bg-rose-50 text-rose-800",
    border: "border-t-rose-600",
    numColor: "text-rose-800",
    href: "/resources/biology-20/unit-d",
  },
];

const outcomes = [
  "Explain the constant flow of energy through the biosphere, including trophic levels, food chains, and ecological pyramids",
  "Explain the cycling of matter — carbon, oxygen, nitrogen, phosphorus — through biotic and abiotic components of ecosystems",
  "Analyze how energy and matter exchange in the biosphere maintains equilibrium and how humans disrupt this balance",
  "Describe the biotic and abiotic characteristics that define ecosystems and explain species interactions including competition, predation, and symbiosis",
  "Explain the mechanisms involved in population change, including limiting factors, carrying capacity, and population growth models",
  "Describe taxonomy and binomial nomenclature, and classify organisms into the major kingdoms",
  "Explain the mechanisms of natural selection and evaluate evidence supporting evolutionary theory",
  "Investigate photosynthesis: the role of light reactions, the Calvin cycle, and how plants convert solar energy into chemical energy",
  "Investigate cellular respiration: glycolysis, the Krebs cycle, the electron transport chain, and ATP yield from aerobic and anaerobic pathways",
  "Analyze how the structure of organelles (chloroplasts, mitochondria) supports their function in energy transformation",
  "Describe the structure and function of the digestive, respiratory, circulatory, excretory, and immune systems and explain how they interact to maintain homeostasis",
  "Incorporate Indigenous and local knowledge perspectives in understanding living systems and stewardship of Alberta's ecosystems",
];

const attitudeOutcomes = [
  { title: "Interest in Science", desc: "Show curiosity about biology-related questions, issues, and careers, and appreciate science as a dynamic and evolving process of inquiry." },
  { title: "Mutual Respect", desc: "Appreciate that scientific understanding is enriched by diverse perspectives, cultures, and knowledge systems, including Indigenous ways of knowing." },
  { title: "Scientific Inquiry", desc: "Seek evidence, ask questions, and think critically when exploring biological concepts, experimental results, and real-world biological claims." },
  { title: "Collaboration", desc: "Work respectfully and effectively with others when planning investigations, analysing data, and communicating findings in biology." },
  { title: "Stewardship", desc: "Demonstrate responsibility toward environmental sustainability, biodiversity conservation, and the long-term health of Alberta's ecosystems." },
  { title: "Safety", desc: "Show consistent concern for safety in laboratory and field settings, including proper handling of biological materials and responsible disposal." },
];

type RColor = "teal" | "green" | "blue" | "amber" | "purple" | "rose";
const colorMap: Record<RColor, { border: string; tag: string }> = {
  teal:   { border: "border-l-teal-500",   tag: "bg-teal-50 text-teal-800" },
  green:  { border: "border-l-emerald-500", tag: "bg-emerald-50 text-emerald-800" },
  blue:   { border: "border-l-blue-500",   tag: "bg-blue-50 text-blue-800" },
  amber:  { border: "border-l-amber-500",  tag: "bg-amber-50 text-amber-800" },
  purple: { border: "border-l-violet-500", tag: "bg-violet-50 text-violet-800" },
  rose:   { border: "border-l-rose-500",   tag: "bg-rose-50 text-rose-800" },
};

interface WebRes { name: string; desc: string; tag: string; url: string; href: string; color: RColor; }
const webCategories: { label: string; items: WebRes[] }[] = [
  {
    label: "Interactive Simulations & Virtual Labs",
    items: [
      { name: "PhET Interactive Simulations", desc: "University of Colorado free simulations covering photosynthesis, natural selection, gene expression, and ecosystems. Directly supports Units A, B, and C.", tag: "Simulations", url: "phet.colorado.edu", href: "https://phet.colorado.edu/", color: "teal" },
      { name: "HHMI BioInteractive", desc: "Howard Hughes Medical Institute's free biology resources including Click and Learn interactives, short films, and data-based labs on evolution, ecology, and cell biology.", tag: "Interactive + Film", url: "biointeractive.org", href: "https://www.biointeractive.org/", color: "green" },
      { name: "Cells Alive!", desc: "Animated cell biology models showing organelle function, cell division, and immune responses. Excellent for visualising Unit C and Unit D concepts.", tag: "Cell Biology", url: "cellsalive.com", href: "https://www.cellsalive.com/", color: "blue" },
    ],
  },
  {
    label: "Learning Platforms",
    items: [
      { name: "Khan Academy — Biology", desc: "Free video lessons and practice on ecology, photosynthesis, cellular respiration, evolution, and human body systems. Well-paced for self-study at the Biology 20 level.", tag: "Video + Practice", url: "khanacademy.org/science/biology", href: "https://www.khanacademy.org/science/biology", color: "teal" },
      { name: "CK-12 Biology", desc: "Free digital biology textbooks with adaptive practice. Search for specific concepts like \"cellular respiration\" or \"food webs\" for custom reading and quizzes.", tag: "Textbook + Practice", url: "ck12.org", href: "https://www.ck12.org/student/", color: "blue" },
      { name: "LabXchange", desc: "Harvard-built platform with virtual biology labs for photosynthesis, genetics, ecology, and human biology. Simulates real experimental procedures with data collection.", tag: "Virtual Labs", url: "labxchange.org", href: "https://www.labxchange.org/", color: "purple" },
    ],
  },
  {
    label: "Ecology & Ecosystems (Units A & B)",
    items: [
      { name: "Global Forest Watch", desc: "Real-time satellite monitoring of forest cover, deforestation, and fire. Connects biosphere equilibrium concepts (Unit A) to current real-world data.", tag: "Real Data", url: "globalforestwatch.org", href: "https://www.globalforestwatch.org/", color: "green" },
      { name: "IUCN Red List", desc: "The world's most comprehensive inventory of species conservation status. Perfect for Unit B research on biodiversity, population decline, and human impact on species.", tag: "Biodiversity Data", url: "iucnredlist.org", href: "https://www.iucnredlist.org/", color: "amber" },
      { name: "iNaturalist", desc: "Citizen science platform for identifying and recording organisms in Alberta and worldwide. Supports taxonomy and biodiversity studies in Unit B and field investigation skills.", tag: "Field Biology", url: "inaturalist.org", href: "https://www.inaturalist.org/", color: "green" },
    ],
  },
  {
    label: "Cell Biology & Biochemistry (Unit C)",
    items: [
      { name: "Bioman Biology", desc: "Games and virtual labs specifically covering photosynthesis, cellular respiration, and cell organelles. Engaging and interactive for reviewing Unit C material.", tag: "Games & Labs", url: "biomanbio.com", href: "https://www.biomanbio.com/", color: "teal" },
      { name: "Nature Education Scitable", desc: "Free biology library from Nature Publishing covering cell biology, genetics, evolution, and ecology. Well-written articles pitched at the senior high to first-year university level.", tag: "Reference", url: "nature.com/scitable", href: "https://www.nature.com/scitable/", color: "green" },
      { name: "RCSB Protein Data Bank — 3D View", desc: "Interactive 3D viewer of biological molecules including enzymes, ATP synthase, and chlorophyll. Brings molecular structure to life for Unit C enzyme and ATP discussions.", tag: "Molecular Biology", url: "rcsb.org", href: "https://www.rcsb.org/3d-view", color: "purple" },
    ],
  },
  {
    label: "Human Body Systems (Unit D)",
    items: [
      { name: "Visible Body Learn Site", desc: "Detailed 3D anatomy articles covering digestive, respiratory, circulatory, excretory, and immune systems. High-quality diagrams and explanations aligned with Unit D.", tag: "Human Anatomy", url: "visiblebody.com/learn", href: "https://www.visiblebody.com/learn/", color: "rose" },
      { name: "InnerBody Research", desc: "Interactive diagrams of all major human organ systems with detailed descriptions of structures and functions. Good for reviewing specific Unit D systems before tests.", tag: "Anatomy Reference", url: "innerbody.com", href: "https://www.innerbody.com/", color: "rose" },
      { name: "Healthline Body Maps", desc: "Medically reviewed interactive maps of human body systems. Useful for visualising organ locations, blood flow pathways, and digestive/excretory system routes.", tag: "Body Maps", url: "healthline.com/human-body-maps", href: "https://www.healthline.com/human-body-maps", color: "rose" },
    ],
  },
];

interface YtCh { name: string; handle: string; href: string; desc: string; tags: string[]; }
const ytCategories: { label: string; channels: YtCh[] }[] = [
  {
    label: "Biology — All Units",
    channels: [
      { name: "Amoeba Sisters", handle: "@AmoebaSisters", href: "https://www.youtube.com/@AmoebaSisters", desc: "The go-to channel for clear, friendly explanations of photosynthesis, cellular respiration, ecology, evolution, and human body systems. Directly aligned with all four Biology 20 units.", tags: ["All Units", "Most Recommended"] },
      { name: "Crash Course Biology", handle: "@crashcourse", href: "https://www.youtube.com/@crashcourse", desc: "Fast-paced, entertaining review of major biology topics including ecosystems, evolution, cellular biology, and human anatomy. Perfect for exam review across all units.", tags: ["All Units", "Exam Review"] },
      { name: "Professor Dave Explains", handle: "@ProfessorDaveExplains", href: "https://www.youtube.com/@ProfessorDaveExplains", desc: "Thorough tutorial-style videos on biochemistry, cell biology, ecology, and human physiology with worked explanations. Great for Unit C energy concepts.", tags: ["Unit C", "Unit D", "In-Depth"] },
    ],
  },
  {
    label: "Ecology & Evolution (Units A & B)",
    channels: [
      { name: "HHMI BioInteractive", handle: "@HHMIBioInteractive", href: "https://www.youtube.com/@HHMIBioInteractive", desc: "Short, data-driven films from leading researchers covering evolution, natural selection, population dynamics, and biodiversity — directly relevant to Units A and B.", tags: ["Unit A", "Unit B", "Evolution"] },
      { name: "Kurzgesagt", handle: "@kurzgesagt", href: "https://www.youtube.com/@kurzgesagt", desc: "Beautifully animated explainers on ecosystems, climate, biodiversity, and the biology of life at a systems level. Excellent for Unit A big-picture understanding.", tags: ["Unit A", "Ecosystems"] },
      { name: "SciShow", handle: "@scishow", href: "https://www.youtube.com/@scishow", desc: "Wide-ranging biology and environmental science videos covering real-world ecology, population events, evolution, and scientific discoveries across all units.", tags: ["Unit B", "General Biology"] },
    ],
  },
  {
    label: "Cell Biology & Human Systems (Units C & D)",
    channels: [
      { name: "Nucleus Medical Media", handle: "@NucleusMedicalMedia", href: "https://www.youtube.com/@NucleusMedicalMedia", desc: "Stunning 3D medical animations of human body systems, cellular processes, and physiological mechanisms. Invaluable for visualising Unit D human systems content.", tags: ["Unit D", "Human Systems"] },
      { name: "TED-Ed", handle: "@TEDEd", href: "https://www.youtube.com/@TEDEd", desc: "Short, high-quality animated lessons on biology, health, and science. Excellent for units on cellular processes, evolution, the immune system, and ecology.", tags: ["Unit C", "Unit D", "Conceptual"] },
      { name: "Bozeman Science", handle: "@bozemanscience", href: "https://www.youtube.com/@bozemanscience", desc: "AP Biology-level video explanations of photosynthesis, respiration, cell division, and ecology — detailed but clear, great for pushing understanding deeper.", tags: ["Unit C", "Unit B", "In-Depth"] },
    ],
  },
];

const studyTips = [
  { num: "1", tip: "Draw the biosphere energy pyramid for Unit A from memory. Include trophic levels, energy percentages, and biomass. Reproducing it yourself is far more effective than reading it." },
  { num: "2", tip: "Trace the carbon, nitrogen, and phosphorus cycles on blank paper without notes. If you can draw them correctly, you understand them." },
  { num: "3", tip: "For Unit B, create a comparison table of species interactions — mutualism, commensalism, parasitism, predation, competition — with one real Alberta example for each." },
  { num: "4", tip: "Unit C is dense with biochemistry. Learn the inputs and outputs of photosynthesis and respiration first, then layer in the specific steps (light reactions, Calvin cycle, glycolysis, Krebs, ETC)." },
  { num: "5", tip: "Use PhET's natural selection and photosynthesis simulations before writing notes on Units B and C. Seeing the processes makes the terminology much more meaningful." },
  { num: "6", tip: "For Unit D human systems, learn structure before function. Know what each organ looks like and where it sits before memorising what it does." },
  { num: "7", tip: "Connect units to each other: the energy flow from Unit A powers the cellular processes in Unit C, which sustain the body systems in Unit D. Biology 20 is one continuous story." },
  { num: "8", tip: "Review your outcomes list regularly. For each outcome, write two sentences summarizing your understanding. If you can not, that is the gap to address before the exam." },
];

type Tab = "websites" | "youtube" | "tips" | "attitudes";

export default function Biology20() {
  const [activeTab, setActiveTab] = useState<Tab>("websites");

  return (
    <Layout>
      <div className="bg-muted/40 border-b">
        <div className="container mx-auto px-4 md:px-6 py-3 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/resources" className="hover:text-primary transition-colors flex items-center gap-1" data-testid="link-back-resources">
            <ArrowLeft className="w-4 h-4" />
            Resources
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground font-medium">Biology 20</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-secondary overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.20),transparent_60%)]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <span className="inline-block bg-teal-500/20 text-teal-200 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
              Alberta Biology 20
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-secondary-foreground mb-5 leading-tight">Biology 20</h1>
            <p className="text-secondary-foreground/80 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              Explore how living systems function at every scale — from the biochemistry of a single cell to the dynamics of global ecosystems. Biology 20 connects energy, matter, populations, and the human body through Alberta's Program of Studies.
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                { val: "4", label: "Course Units" },
                { val: "STS", label: "Science, Technology & Society" },
                { val: "INI", label: "Indigenous & Local Knowledge" },
                { val: "Gr. 11", label: "Alberta Curriculum" },
              ].map((s, i) => (
                <div key={i} className="bg-secondary-foreground/10 border border-secondary-foreground/15 rounded-xl px-5 py-3">
                  <div className="text-2xl font-serif font-bold text-secondary-foreground">{s.val}</div>
                  <div className="text-xs text-secondary-foreground/55 uppercase tracking-wider mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Unit quick nav */}
      <div className="bg-muted/30 border-b">
        <div className="container mx-auto px-4 md:px-6 py-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <span className="font-bold text-muted-foreground text-xs uppercase tracking-wider">Biology 20 Units</span>
          {units.map((u) => (
            <Link key={u.num} href={u.href} className="text-foreground/70 hover:text-primary transition-colors font-medium">
              {u.num}: {u.title.split(" ").slice(0, 3).join(" ")}…
            </Link>
          ))}
        </div>
      </div>

      <div className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6 space-y-20">

          {/* Units */}
          <section>
            <div className="flex items-center gap-4 mb-10">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">Course Units</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {units.map((unit, i) => (
                <motion.div key={i} variants={fadeUp} id={unit.num.toLowerCase().replace(" ", "-")}>
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
                        <Link href={unit.href} className="text-xs text-primary font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                          Explore unit <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Study Tools Banner */}
          <section className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">Study Tools</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/resources/biology-20/flashcards"
                className="group relative overflow-hidden rounded-2xl border-2 border-teal-200 bg-teal-50 hover:border-teal-400 hover:shadow-md transition-all duration-200 p-6 flex flex-col gap-2">
                <div className="flex items-start justify-between">
                  <span className="text-2xl">🃏</span>
                  <span className="text-xs font-bold text-teal-700 bg-teal-100 px-2 py-0.5 rounded-full">64 cards</span>
                </div>
                <h3 className="text-lg font-serif font-bold text-teal-900 mt-1">Flashcards</h3>
                <p className="text-sm text-teal-800/70 leading-relaxed flex-1">Interactive flip cards with 6 inline SVG diagrams. Shuffle, filter by unit, and track your progress through all four units.</p>
                <span className="text-sm font-bold text-teal-700 group-hover:text-teal-900 flex items-center gap-1 mt-1">
                  Open Flashcards <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
              <Link href="/resources/biology-20/quiz"
                className="group relative overflow-hidden rounded-2xl border-2 border-amber-200 bg-amber-50 hover:border-amber-400 hover:shadow-md transition-all duration-200 p-6 flex flex-col gap-2">
                <div className="flex items-start justify-between">
                  <span className="text-2xl">📝</span>
                  <span className="text-xs font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">40 questions</span>
                </div>
                <h3 className="text-lg font-serif font-bold text-amber-900 mt-1">Practice Quiz</h3>
                <p className="text-sm text-amber-800/70 leading-relaxed flex-1">40 multiple-choice questions with detailed explanations. Filter by unit and track your score — great for exam prep.</p>
                <span className="text-sm font-bold text-amber-700 group-hover:text-amber-900 flex items-center gap-1 mt-1">
                  Start Quiz <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
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
                  <p className="text-secondary-foreground/70 text-sm">Key knowledge and skills from the Alberta Program of Studies — Biology 20</p>
                </div>
                <CardContent className="p-6">
                  <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {outcomes.map((o, i) => (
                      <motion.div key={i} variants={fadeUp} className="flex items-start gap-3 p-3 rounded-lg bg-muted/40 border">
                        <div className="w-2 h-2 rounded-full bg-teal-500 mt-1.5 shrink-0" />
                        <p className="text-sm text-foreground/80 leading-relaxed">{o}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </section>

          {/* Resources */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">Student Resources</h2>
              <div className="flex-1 h-px bg-border" />
            </div>

            <div className="flex gap-2 mb-8 flex-wrap" data-testid="resource-tabs">
              {(["websites", "youtube", "attitudes", "tips"] as Tab[]).map((tab) => (
                <button key={tab} onClick={() => setActiveTab(tab)} data-testid={`tab-${tab}`}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold border-2 transition-all duration-200 ${
                    activeTab === tab
                      ? "bg-primary text-primary-foreground border-primary shadow-sm"
                      : "bg-background text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                  }`}>
                  {tab === "youtube" && <Youtube className="w-4 h-4" />}
                  {tab === "websites" && <ExternalLink className="w-4 h-4" />}
                  {tab === "websites" ? "Websites & Tools" : tab === "youtube" ? "YouTube Channels" : tab === "attitudes" ? "Attitude Outcomes" : "Study Tips"}
                </button>
              ))}
            </div>

            {activeTab === "websites" && (
              <motion.div key="websites" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="space-y-10">
                {webCategories.map((cat, ci) => (
                  <div key={ci}>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4 pb-2 border-b">{cat.label}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {cat.items.map((res, ri) => {
                        const c = colorMap[res.color];
                        return (
                          <a key={ri} href={res.href} target="_blank" rel="noopener noreferrer" data-testid={`link-web-${ci}-${ri}`}
                            className={`group block bg-background border border-l-4 ${c.border} rounded-xl p-4 hover:-translate-y-1 hover:shadow-md transition-all duration-200`}>
                            <p className="font-bold text-sm text-foreground mb-1.5 group-hover:text-primary transition-colors">{res.name}</p>
                            <p className="text-xs text-muted-foreground leading-relaxed mb-3">{res.desc}</p>
                            <div className="flex items-center justify-between">
                              <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${c.tag}`}>{res.tag}</span>
                              <span className="text-xs text-muted-foreground/60">{res.url}</span>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === "youtube" && (
              <motion.div key="youtube" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="space-y-10">
                {ytCategories.map((cat, ci) => (
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
                          <p className="text-xs text-muted-foreground leading-relaxed mb-3">{ch.desc}</p>
                          <div className="flex flex-wrap gap-1.5">
                            {ch.tags.map((t, ti) => (
                              <span key={ti} className="text-xs font-semibold px-2 py-0.5 rounded-full bg-red-50 text-red-700">{t}</span>
                            ))}
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === "attitudes" && (
              <motion.div key="attitudes" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
                <motion.div variants={stagger} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {attitudeOutcomes.map((a, i) => (
                    <motion.div key={i} variants={fadeUp}>
                      <Card className="h-full border-l-4 border-l-teal-500 shadow-sm" data-testid={`card-attitude-${i}`}>
                        <CardContent className="p-5">
                          <h4 className="font-bold text-teal-700 mb-2">{a.title}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}

            {activeTab === "tips" && (
              <motion.div key="tips" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
                <div className="bg-gradient-to-br from-teal-50 to-emerald-50 border border-teal-200 rounded-2xl p-6 md:p-8">
                  <h3 className="font-serif font-bold text-xl text-teal-900 mb-6">Study Smart for Biology 20</h3>
                  <motion.div variants={stagger} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {studyTips.map((tip, i) => (
                      <motion.div key={i} variants={fadeUp} className="flex items-start gap-3">
                        <div className="w-7 h-7 bg-teal-700 rounded-full flex items-center justify-center shrink-0 mt-0.5">
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
