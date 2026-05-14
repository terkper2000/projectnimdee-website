import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Youtube, FlaskConical, Zap, Leaf, Globe, ChevronRight } from "lucide-react";
import { UnitCompleteBadge } from "@/components/UnitCompleteToggle";

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
    title: "Energy & Matter in Chemical Change",
    description:
      "Analyze chemical reactions, balance equations, explore conservation of matter and energy, and investigate how chemistry shapes technology and environment.",
    topics: ["Atomic Theory", "Chemical Reactions", "Balancing Equations", "Acids & Bases"],
    outcome: "Outcome 10-A",
    href: "/resources/science-10/unit-a",
    icon: <FlaskConical className="w-6 h-6" />,
    accent: "from-blue-900 to-blue-500",
    tagBg: "bg-blue-50 text-blue-800",
    border: "border-t-blue-700",
    numColor: "text-blue-800",
  },
  {
    num: "Unit B",
    title: "Energy Flow in Technological Systems",
    description:
      "Investigate thermodynamics, heat transfer mechanisms, and how energy transformations apply to real-world engineering and technological design.",
    topics: ["Thermodynamics", "Heat Transfer", "Efficiency", "Thermal Energy"],
    outcome: "Outcome 10-B",
    href: "/resources/science-10/unit-b",
    icon: <Zap className="w-6 h-6" />,
    accent: "from-amber-900 to-amber-500",
    tagBg: "bg-amber-50 text-amber-800",
    border: "border-t-amber-600",
    numColor: "text-amber-800",
  },
  {
    num: "Unit C",
    title: "Matter Cycling in Living Systems",
    description:
      "Examine cellular processes including photosynthesis, respiration, and the cycling of matter and energy through ecosystems from cell to biosphere.",
    topics: ["Photosynthesis", "Cellular Respiration", "Nutrient Cycles", "Ecosystems"],
    outcome: "Outcome 10-C",
    href: "/resources/science-10/unit-c",
    icon: <Leaf className="w-6 h-6" />,
    accent: "from-emerald-900 to-emerald-500",
    tagBg: "bg-emerald-50 text-emerald-800",
    border: "border-t-emerald-600",
    numColor: "text-emerald-800",
  },
  {
    num: "Unit D",
    title: "Global Energy Systems",
    description:
      "Understand Earth's energy balance, atmospheric dynamics, ocean circulation, and the science behind climate change and Alberta's role in global energy.",
    topics: ["Climate Systems", "Solar Radiation", "Ocean Currents", "Greenhouse Effect"],
    outcome: "Outcome 10-D",
    href: "/resources/science-10/unit-d",
    icon: <Globe className="w-6 h-6" />,
    accent: "from-sky-900 to-sky-500",
    tagBg: "bg-sky-50 text-sky-800",
    border: "border-t-sky-600",
    numColor: "text-sky-800",
  },
];

const outcomes = [
  "Balance chemical equations and predict reaction products using the law of conservation of mass",
  "Classify chemical reactions and explain energy changes in exothermic and endothermic processes",
  "Analyze energy transformations in technological systems and calculate efficiency",
  "Explain conduction, convection, and radiation as mechanisms of heat transfer",
  "Describe photosynthesis and cellular respiration and their roles in cycling matter and energy",
  "Analyze how matter and energy flow through ecosystems, including trophic levels and biogeochemical cycles",
  "Investigate factors affecting Earth's climate, including solar energy, the greenhouse effect, and ocean circulation",
  "Evaluate the environmental and social impacts of energy use, extraction, and technology",
  "Apply scientific inquiry and experimental design skills, including controls, variables, and data analysis",
  "Incorporate Indigenous and local knowledge perspectives in understanding natural systems",
  "Communicate scientific findings clearly using appropriate terminology, graphs, and reports",
  "Demonstrate safe and responsible laboratory practices throughout all investigations",
];

type ResourceColor = "blue" | "green" | "purple" | "amber" | "slate" | "sky";

interface WebResource {
  name: string;
  description: string;
  tag: string;
  url: string;
  href: string;
  color: ResourceColor;
}

const colorMap: Record<ResourceColor, { border: string; tag: string; dot: string }> = {
  blue:   { border: "border-l-blue-500",   tag: "bg-blue-50 text-blue-800",   dot: "bg-blue-500" },
  green:  { border: "border-l-emerald-500", tag: "bg-emerald-50 text-emerald-800", dot: "bg-emerald-500" },
  purple: { border: "border-l-violet-500",  tag: "bg-violet-50 text-violet-800",  dot: "bg-violet-500" },
  amber:  { border: "border-l-amber-500",   tag: "bg-amber-50 text-amber-800",   dot: "bg-amber-500" },
  slate:  { border: "border-l-slate-500",   tag: "bg-slate-100 text-slate-700",  dot: "bg-slate-500" },
  sky:    { border: "border-l-sky-500",     tag: "bg-sky-50 text-sky-800",     dot: "bg-sky-500" },
};

const webResourceCategories: { label: string; resources: WebResource[] }[] = [
  {
    label: "Interactive Simulations & Labs",
    resources: [
      { name: "PhET Interactive Simulations", description: "University of Colorado's free simulations for chemistry, physics, biology, and Earth science. Ideal for visualizing reactions, energy, and climate concepts.", tag: "Simulations", url: "phet.colorado.edu", href: "https://phet.colorado.edu/", color: "blue" },
      { name: "Gizmos by ExploreLearning", description: "Interactive science and math simulations aligned directly to curriculum outcomes. Excellent for lab-style exploration of chemical reactions and ecosystems.", tag: "Virtual Labs", url: "explorelearning.com", href: "https://www.explorelearning.com/", color: "green" },
      { name: "LabXchange", description: "Harvard-developed platform with virtual lab simulations, interactive content, and pathways for biology, chemistry, and climate science.", tag: "Virtual Labs", url: "labxchange.org", href: "https://www.labxchange.org/", color: "purple" },
    ],
  },
  {
    label: "Learning Platforms",
    resources: [
      { name: "Khan Academy — Science", description: "Free, high-quality video lessons and practice exercises covering chemistry, biology, and physics at the Grade 10 level and beyond.", tag: "Video + Practice", url: "khanacademy.org/science", href: "https://www.khanacademy.org/science", color: "green" },
      { name: "CK-12", description: "Free digital textbooks, practice problems, and adaptive assessments for chemistry, biology, physics, and Earth science. Customizable for Alberta curriculum.", tag: "Textbook + Practice", url: "ck12.org", href: "https://www.ck12.org/", color: "blue" },
      { name: "Science Buddies", description: "Step-by-step guidance for science fair projects and independent investigations. Excellent for connecting course content to real scientific inquiry.", tag: "Projects & Inquiry", url: "sciencebuddies.org", href: "https://www.sciencebuddies.org/", color: "amber" },
    ],
  },
  {
    label: "Chemistry",
    resources: [
      { name: "Chemguide", description: "Clear, thorough written explanations of chemistry concepts including atomic structure, bonding, reactions, and acid-base chemistry at the senior high level.", tag: "Reference", url: "chemguide.co.uk", href: "https://www.chemguide.co.uk/", color: "blue" },
      { name: "Ptable — Interactive Periodic Table", description: "A dynamic, interactive periodic table showing electron configurations, properties, orbitals, isotopes, and compounds for every element.", tag: "Reference Tool", url: "ptable.com", href: "https://ptable.com/", color: "purple" },
      { name: "Wolfram Alpha", description: "Computational engine for solving chemistry equations, molecular properties, stoichiometry problems, and unit conversions. Shows step-by-step solutions.", tag: "Problem Solver", url: "wolframalpha.com", href: "https://wolframalpha.com/", color: "slate" },
    ],
  },
  {
    label: "Earth Science & Climate",
    resources: [
      { name: "NASA Climate Science", description: "Real NASA data on Earth's temperature, sea level, ice sheets, carbon dioxide, and climate systems. Directly relevant to Unit D Global Energy Systems.", tag: "Real Data", url: "climate.nasa.gov", href: "https://climate.nasa.gov/", color: "sky" },
      { name: "NOAA Climate.gov", description: "National Oceanic and Atmospheric Administration's resource for climate science, weather patterns, ocean circulation, and climate data visualizations.", tag: "Climate Data", url: "climate.gov", href: "https://www.climate.gov/", color: "sky" },
      { name: "NASA Earth Observatory", description: "Stunning satellite imagery and science articles about Earth's climate, land, oceans, and atmosphere. Connects global science to visible real-world change.", tag: "Earth Science", url: "earthobservatory.nasa.gov", href: "https://earthobservatory.nasa.gov/", color: "sky" },
    ],
  },
  {
    label: "Biology & Ecosystems",
    resources: [
      { name: "Nature Education Scitable", description: "Free biology library from Nature Publishing covering genetics, ecology, cell biology, and evolution at an approachable level for senior high students.", tag: "Biology Reference", url: "nature.com/scitable", href: "https://www.nature.com/scitable/", color: "green" },
      { name: "Bioman Biology", description: "Fun biology games and virtual labs covering photosynthesis, respiration, cells, and ecosystems. Great for reviewing Unit C concepts interactively.", tag: "Games & Labs", url: "biomanbio.com", href: "https://www.biomanbio.com/", color: "green" },
      { name: "Biodiversity Heritage Library", description: "A massive open-access library of natural history and biological science literature. Great for deep dives into ecological and environmental topics.", tag: "Research", url: "biodiversitylibrary.org", href: "https://www.biodiversitylibrary.org/", color: "amber" },
    ],
  },
];

interface YtChannel {
  name: string;
  handle: string;
  href: string;
  description: string;
  units: string[];
}

const youtubeCategories: { label: string; channels: YtChannel[] }[] = [
  {
    label: "Chemistry",
    channels: [
      { name: "Tyler DeWitt", handle: "@tylerdewittvids", href: "https://www.youtube.com/@tylerdewittvids", description: "Makes chemistry accessible and engaging through humour and clear visual explanations. One of the best channels for understanding chemical reactions, stoichiometry, and atomic structure at the Grade 10 level.", units: ["Unit A", "Chemistry"] },
      { name: "Periodic Videos", handle: "@periodicvideos", href: "https://www.youtube.com/@periodicvideos", description: "University of Nottingham chemists explore every element on the periodic table with real experiments. Excellent for understanding element properties and chemical reactions visually.", units: ["Unit A", "Chemistry"] },
      { name: "Professor Dave Explains", handle: "@ProfessorDaveExplains", href: "https://www.youtube.com/@ProfessorDaveExplains", description: "Comprehensive, clearly-paced tutorials on chemistry, biology, and physics. Covers balancing equations, thermodynamics, and cellular biology with worked examples.", units: ["Unit A", "Unit B", "Unit C"] },
    ],
  },
  {
    label: "Physics & Energy",
    channels: [
      { name: "Veritasium", handle: "@veritasium", href: "https://www.youtube.com/@veritasium", description: "Thought-provoking videos on physics, energy, and science misconceptions. Derek Muller's approach challenges assumptions and builds deep understanding of how energy actually works.", units: ["Unit B", "Unit D", "General Science"] },
      { name: "MinutePhysics", handle: "@minutephysics", href: "https://www.youtube.com/@minutephysics", description: "Concise, visually driven explanations of physics concepts — energy, thermodynamics, and heat — in under 5 minutes. Perfect for quick concept reviews.", units: ["Unit B", "Physics"] },
      { name: "Kurzgesagt", handle: "@kurzgesagt", href: "https://www.youtube.com/@kurzgesagt", description: "Beautifully animated explainers covering energy systems, climate science, and global challenges. Connects Unit D material to broader real-world context with stunning clarity.", units: ["Unit D", "Climate", "Energy"] },
    ],
  },
  {
    label: "Biology & Earth Science",
    channels: [
      { name: "Amoeba Sisters", handle: "@AmoebaSisters", href: "https://www.youtube.com/@AmoebaSisters", description: "Friendly, clear biology videos with memorable visuals covering photosynthesis, cellular respiration, nutrient cycles, and ecosystems — directly aligned to Unit C.", units: ["Unit C", "Biology"] },
      { name: "SciShow", handle: "@scishow", href: "https://www.youtube.com/@scishow", description: "Wide-ranging science explainers covering biology, chemistry, Earth science, and current research. Great for connecting Science 10 topics to real-world discoveries.", units: ["Unit C", "Unit D", "General Science"] },
      { name: "NASA Goddard", handle: "@NASAGoddard", href: "https://www.youtube.com/@NASAGoddard", description: "NASA visualizations and data-driven videos on Earth's climate, atmosphere, ocean systems, and energy balance. Essential for Unit D Global Energy Systems.", units: ["Unit D", "Earth Science"] },
    ],
  },
];

const studyTips = [
  { num: "1", tip: "Draw and label diagrams for every major process — photosynthesis, cellular respiration, and heat transfer are much easier to understand visually than from text alone." },
  { num: "2", tip: "Practice balancing equations by working through 5–10 examples daily. Pattern recognition builds faster than memorizing rules." },
  { num: "3", tip: "Connect units to each other: the energy that drives chemical reactions (Unit A) is the same kind that flows through ecosystems (Unit C) and powers Earth's climate (Unit D)." },
  { num: "4", tip: "Use PhET simulations before labs — they let you explore variables safely and build intuition that makes the real lab make more sense." },
  { num: "5", tip: "When studying climate science, use real NASA data rather than just reading about it. Seeing actual temperature graphs makes the concepts concrete." },
  { num: "6", tip: "Review your notes within 24 hours of class. Science 10 builds on itself — gaps in Unit A will make Unit B harder." },
  { num: "7", tip: "Form study groups for outcomes you find challenging. Explaining a concept to a classmate is one of the most effective ways to solidify your own understanding." },
  { num: "8", tip: "Keep a vocabulary list for each unit. Science 10 introduces a lot of precise terminology — knowing the exact meaning of each term helps on exams." },
];

type Tab = "websites" | "youtube" | "tips";

export default function Science10() {
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
          <span className="text-foreground font-medium">Science 10</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-secondary overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.22),transparent_60%)]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="inline-block bg-primary/20 text-primary text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
              Alberta Science 10
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-secondary-foreground mb-5 leading-tight">
              Science 10
            </h1>
            <p className="text-secondary-foreground/80 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              A course that bridges chemistry, physics, biology, and Earth science. Explore chemical reactions, energy transformations, living systems, and global climate — all connected through Alberta's Program of Studies.
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                { val: "4", label: "Course Units" },
                { val: "STS", label: "Science, Technology & Society" },
                { val: "INI", label: "Indigenous & Local Knowledge" },
                { val: "Gr. 10", label: "Alberta Curriculum" },
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

      {/* Unit Nav */}
      <div className="bg-muted/30 border-b">
        <div className="container mx-auto px-4 md:px-6 py-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <span className="font-bold text-muted-foreground flex items-center gap-2 text-xs uppercase tracking-wider">
            Science 10 Units
          </span>
          {units.map((u) => (
            <a key={u.num} href={`#${u.num.toLowerCase().replace(" ", "-")}`} className="text-foreground/70 hover:text-primary transition-colors font-medium">
              {u.num}: {u.title.split(" ").slice(0, 3).join(" ")}…
            </a>
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
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {units.map((unit, i) => (
                <motion.div key={i} variants={fadeUp} id={unit.num.toLowerCase().replace(" ", "-")}>
                  <Card className={`h-full border-t-4 ${unit.border} shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1`} data-testid={`card-unit-${i}`}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3 mb-4">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${unit.accent} text-white shrink-0`}>
                          {unit.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap mb-1">
                            <p className={`text-xs font-bold uppercase tracking-widest ${unit.numColor}`}>{unit.num}</p>
                            <UnitCompleteBadge unitId={unit.href.replace('/resources/', '').replace(/\//g, '-')} />
                          </div>
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border overflow-hidden shadow-sm">
                <div className="bg-gradient-to-r from-secondary to-secondary/80 px-6 py-5">
                  <h3 className="font-serif font-bold text-xl text-secondary-foreground mb-1">What You Will Learn</h3>
                  <p className="text-secondary-foreground/70 text-sm">Key knowledge and skills from the Alberta Program of Studies — Science 10</p>
                </div>
                <CardContent className="p-6">
                  <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-3"
                  >
                    {outcomes.map((outcome, i) => (
                      <motion.div key={i} variants={fadeUp} className="flex items-start gap-3 p-3 rounded-lg bg-muted/40 border">
                        <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                        <p className="text-sm text-foreground/80 leading-relaxed">{outcome}</p>
                      </motion.div>
                    ))}
                  </motion.div>
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

            {/* Tab bar */}
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

            {/* Websites tab */}
            {activeTab === "websites" && (
              <motion.div
                key="websites"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="space-y-10"
              >
                {webResourceCategories.map((cat, ci) => (
                  <div key={ci}>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4 pb-2 border-b">{cat.label}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {cat.resources.map((res, ri) => {
                        const c = colorMap[res.color];
                        return (
                          <a
                            key={ri}
                            href={res.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid={`link-resource-${ci}-${ri}`}
                            className={`group block bg-background border border-l-4 ${c.border} rounded-xl p-4 hover:-translate-y-1 hover:shadow-md transition-all duration-200`}
                          >
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
                ))}
              </motion.div>
            )}

            {/* YouTube tab */}
            {activeTab === "youtube" && (
              <motion.div
                key="youtube"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="space-y-10"
              >
                {youtubeCategories.map((cat, ci) => (
                  <div key={ci}>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4 pb-2 border-b">{cat.label}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {cat.channels.map((ch, chi) => (
                        <a
                          key={chi}
                          href={ch.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-testid={`link-yt-${ci}-${chi}`}
                          className="group block bg-background border border-t-4 border-t-red-600 rounded-xl p-4 hover:-translate-y-1 hover:shadow-md transition-all duration-200"
                        >
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

            {/* Study Tips tab */}
            {activeTab === "tips" && (
              <motion.div
                key="tips"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
              >
                <div className="bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-200 rounded-2xl p-6 md:p-8">
                  <h3 className="font-serif font-bold text-xl text-sky-900 mb-6">Study Smart for Science 10</h3>
                  <motion.div
                    variants={stagger}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    {studyTips.map((tip, i) => (
                      <motion.div key={i} variants={fadeUp} className="flex items-start gap-3">
                        <div className="w-7 h-7 bg-sky-800 rounded-full flex items-center justify-center shrink-0 mt-0.5">
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
