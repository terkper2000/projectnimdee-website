import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Youtube, ChevronRight, Brain, Baby, Dna, TreePine } from "lucide-react";

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
    title: "Nervous and Endocrine Systems",
    description: "Study how the nervous and endocrine systems coordinate communication, maintain homeostasis, and help the body respond to internal and external stimuli.",
    topics: ["Neurons", "Synapses", "Reflex Arcs", "Hormones", "Homeostasis"],
    outcome: "Outcome 30-A",
    icon: <Brain className="w-6 h-6" />,
    accent: "from-indigo-900 to-indigo-500",
    tagBg: "bg-indigo-50 text-indigo-800",
    border: "border-t-indigo-600",
    numColor: "text-indigo-700",
  },
  {
    num: "Unit B",
    title: "Reproduction and Development",
    description: "Examine human reproductive systems, hormonal regulation, embryonic and fetal development, and the societal impact of reproductive technologies.",
    topics: ["Hormones", "Pregnancy", "Development", "IVF", "Ethics"],
    outcome: "Outcome 30-B",
    icon: <Baby className="w-6 h-6" />,
    accent: "from-rose-900 to-rose-500",
    tagBg: "bg-rose-50 text-rose-800",
    border: "border-t-rose-600",
    numColor: "text-rose-700",
  },
  {
    num: "Unit C",
    title: "Cell Division, Genetics and Molecular Biology",
    description: "Explore mitosis, meiosis, inheritance patterns, DNA structure, protein synthesis, mutations, and the foundations of biotechnology.",
    topics: ["Mitosis", "Meiosis", "Punnett Squares", "DNA", "Mutation"],
    outcome: "Outcome 30-C",
    icon: <Dna className="w-6 h-6" />,
    accent: "from-emerald-900 to-emerald-500",
    tagBg: "bg-emerald-50 text-emerald-800",
    border: "border-t-emerald-600",
    numColor: "text-emerald-700",
  },
  {
    num: "Unit D",
    title: "Population and Community Dynamics",
    description: "Analyze how populations change over time, how species interact within communities, and how ecological models help us understand environmental change.",
    topics: ["Population Growth", "Communities", "Succession", "Predation", "Sustainability"],
    outcome: "Outcome 30-D",
    icon: <TreePine className="w-6 h-6" />,
    accent: "from-amber-900 to-amber-500",
    tagBg: "bg-amber-50 text-amber-800",
    border: "border-t-amber-600",
    numColor: "text-amber-800",
  },
];

const outcomes = [
  "Explain how neurons generate and transmit impulses, how synapses communicate signals, and how the nervous system coordinates physiological responses.",
  "Describe the roles of the central and peripheral nervous systems, sensory receptors, reflex arcs, and major structures of the eye and ear.",
  "Explain how endocrine glands and hormones such as insulin, glucagon, thyroxine, ADH, and cortisol help maintain homeostasis through feedback systems.",
  "Describe the structures and functions of the male and female reproductive systems and explain how reproduction supports survival of the species.",
  "Analyze hormonal regulation of the menstrual cycle, pregnancy, parturition, and lactation, and evaluate reproductive technologies from multiple perspectives.",
  "Describe fertilization, implantation, embryonic and fetal development, and the influence of environmental factors and teratogens on development.",
  "Compare mitosis and meiosis, explain chromosome behaviour, and analyze the significance of crossing over, nondisjunction, and chromosome number.",
  "Solve genetics problems involving monohybrid, dihybrid, sex-linked, incomplete dominance, codominance, multiple alleles, and polygenic inheritance.",
  "Explain DNA replication, transcription, and translation, and connect mutations to protein synthesis, inheritance, and genetic disorders.",
  "Analyze population growth models, limiting factors, species interactions, and community change to explain ecological dynamics over time.",
  "Interpret biological data, graphs, simulations, and published evidence to support conclusions and evaluate the reliability of sources and methods.",
  "Assess how science, technology, and society intersect in areas such as hormone therapy, reproduction, biotechnology, genetics, and environmental stewardship.",
];

const attitudeOutcomes = [
  { title: "Interest in Science", desc: "Build curiosity about biological systems, pursue meaningful questions, and explore future pathways in science, health, research, and biotechnology." },
  { title: "Mutual Respect", desc: "Recognize that scientific understanding grows through collaboration, multiple perspectives, and thoughtful discussion of ethical and social issues." },
  { title: "Scientific Inquiry", desc: "Seek evidence, test ideas carefully, question assumptions, and use biological reasoning when interpreting data, models, and scientific claims." },
  { title: "Collaboration", desc: "Work effectively with others during labs, discussions, investigations, and presentations while valuing shared responsibility and communication." },
  { title: "Stewardship", desc: "Consider the environmental and long-term consequences of scientific and technological decisions, especially in genetics, reproduction, and ecology." },
  { title: "Safety", desc: "Demonstrate safe and responsible behaviour in laboratory work, simulations, dissections, and all science learning environments." },
];

type RColor = "indigo" | "rose" | "green" | "amber" | "blue" | "purple";
const colorMap: Record<RColor, { border: string; tag: string }> = {
  indigo: { border: "border-l-indigo-500", tag: "bg-indigo-50 text-indigo-800" },
  rose:   { border: "border-l-rose-500",   tag: "bg-rose-50 text-rose-800" },
  green:  { border: "border-l-emerald-500",tag: "bg-emerald-50 text-emerald-800" },
  amber:  { border: "border-l-amber-500",  tag: "bg-amber-50 text-amber-800" },
  blue:   { border: "border-l-blue-500",   tag: "bg-blue-50 text-blue-800" },
  purple: { border: "border-l-violet-500", tag: "bg-violet-50 text-violet-800" },
};

interface WebRes { name: string; desc: string; tag: string; url: string; href: string; color: RColor; }
const webCategories: { label: string; items: WebRes[] }[] = [
  {
    label: "Nervous & Endocrine Systems (Unit A)",
    items: [
      { name: "Visible Body Learn", desc: "Detailed 3D anatomy explanations for the brain, nervous pathways, endocrine glands, and major sensory organs. Excellent for Unit A review.", tag: "3D Anatomy", url: "visiblebody.com/learn", href: "https://www.visiblebody.com/learn", color: "indigo" },
      { name: "Khan Academy — Human Biology", desc: "Clear lessons on neurons, synapses, hormones, blood glucose regulation, and feedback systems that support the core concepts of Unit A.", tag: "Video + Practice", url: "khanacademy.org", href: "https://www.khanacademy.org/science/biology/human-biology", color: "blue" },
      { name: "PhET Simulations", desc: "Use biology and health-related simulations to reinforce homeostasis, membrane transport, graph interpretation, and systems thinking.", tag: "Interactive", url: "phet.colorado.edu", href: "https://phet.colorado.edu/", color: "purple" },
    ],
  },
  {
    label: "Reproduction & Development (Unit B)",
    items: [
      { name: "HHMI BioInteractive", desc: "High-quality interactives, videos, and short readings for development, genetics, embryo growth, and modern biotechnology applications.", tag: "Interactive + Film", url: "biointeractive.org", href: "https://www.hhmi.org/biointeractive", color: "rose" },
      { name: "LabXchange", desc: "Virtual labs and biology learning pathways covering hormones, reproduction, heredity, and molecular biology with real data and guided exploration.", tag: "Virtual Labs", url: "labxchange.org", href: "https://www.labxchange.org/", color: "blue" },
      { name: "MedlinePlus Medical Encyclopedia", desc: "Reliable, student-friendly medical reference pages for reproductive health, endocrine disorders, pregnancy, and development-related vocabulary.", tag: "Reference", url: "medlineplus.gov", href: "https://medlineplus.gov/encyclopedia.html", color: "amber" },
    ],
  },
  {
    label: "Genetics & Molecular Biology (Unit C)",
    items: [
      { name: "Learn.Genetics", desc: "Outstanding animations and interactives for meiosis, DNA replication, inheritance, mutations, pedigrees, and biotechnology. One of the best Unit C resources.", tag: "Genetics Interactive", url: "learn.genetics.utah.edu", href: "https://learn.genetics.utah.edu/", color: "green" },
      { name: "Bioman Biology", desc: "Engaging games and review tools for cell division, genetics vocabulary, DNA structure, transcription, translation, and mutations.", tag: "Games + Review", url: "biomanbio.com", href: "https://www.biomanbio.com/", color: "indigo" },
      { name: "CK-12 Biology", desc: "Free digital textbook and practice platform that can be searched by topic for heredity, biotechnology, molecular genetics, and ecological dynamics.", tag: "Textbook + Practice", url: "ck12.org", href: "https://www.ck12.org/student/", color: "purple" },
    ],
  },
  {
    label: "Population & Community Dynamics (Unit D)",
    items: [
      { name: "iNaturalist", desc: "Use real observations to explore biodiversity, distribution, ecosystems, community interactions, and field biology connected to Unit D.", tag: "Field Biology", url: "inaturalist.org", href: "https://www.inaturalist.org/", color: "green" },
      { name: "IUCN Red List", desc: "Investigate conservation status, threats to species, and biodiversity trends using real-world ecological data and species profiles.", tag: "Biodiversity Data", url: "iucnredlist.org", href: "https://www.iucnredlist.org/", color: "rose" },
      { name: "Global Forest Watch", desc: "Track deforestation, habitat change, and ecological pressure using live maps and datasets that connect population dynamics to human impact.", tag: "Real Data", url: "globalforestwatch.org", href: "https://www.globalforestwatch.org/", color: "amber" },
    ],
  },
];

interface YtCh { name: string; handle: string; href: string; desc: string; tags: string[]; }
const ytCategories: { label: string; channels: YtCh[] }[] = [
  {
    label: "All Units",
    channels: [
      { name: "Amoeba Sisters", handle: "@AmoebaSisters", href: "https://www.youtube.com/@AmoebaSisters", desc: "Still one of the most useful channels for concise explanations of neurons, hormones, meiosis, DNA, mutations, and natural selection — covering all four Biology 30 units.", tags: ["All Units", "Most Recommended"] },
      { name: "Crash Course Biology", handle: "@crashcourse", href: "https://www.youtube.com/@crashcourse", desc: "Fast-paced but excellent for high-level review of the nervous system, reproduction, genetics, DNA, evolution, and ecology before quizzes or exams.", tags: ["All Units", "Exam Review"] },
      { name: "Khan Academy", handle: "@khanacademy", href: "https://www.youtube.com/@khanacademy", desc: "Slower-paced and thorough — great for building foundational understanding of any Biology 30 concept, especially genetics problem-solving and human physiology.", tags: ["All Units", "In-Depth"] },
    ],
  },
  {
    label: "Nervous, Endocrine & Reproduction (Units A & B)",
    channels: [
      { name: "Nucleus Medical Media", handle: "@NucleusMedicalMedia", href: "https://www.youtube.com/@NucleusMedicalMedia", desc: "Stunning 3D animations of the nervous system, hormonal pathways, reproduction, and development. One of the clearest visual resources for Units A and B.", tags: ["Unit A", "Unit B", "3D Anatomy"] },
      { name: "Professor Dave Explains", handle: "@ProfessorDaveExplains", href: "https://www.youtube.com/@ProfessorDaveExplains", desc: "Detailed walkthroughs of neuron function, endocrine signaling, the menstrual cycle, pregnancy, and development at a pace that suits careful learners.", tags: ["Unit A", "Unit B", "In-Depth"] },
      { name: "TED-Ed", handle: "@TEDEd", href: "https://www.youtube.com/@TEDEd", desc: "High-quality animated videos covering how the brain works, how hormones regulate the body, and the science of human development and reproduction.", tags: ["Unit A", "Unit B", "Conceptual"] },
    ],
  },
  {
    label: "Genetics & Ecology (Units C & D)",
    channels: [
      { name: "Bozeman Science", handle: "@bozemanscience", href: "https://www.youtube.com/@bozemanscience", desc: "AP Biology-level tutorials on genetics — inheritance patterns, meiosis, DNA replication, transcription, translation, and mutations — with worked problem examples.", tags: ["Unit C", "Genetics"] },
      { name: "HHMI BioInteractive", handle: "@HHMIBioInteractive", href: "https://www.youtube.com/@HHMIBioInteractive", desc: "Short research films and data-based content on evolution, population genetics, ecological change, and biotechnology — directly relevant to Units C and D.", tags: ["Unit C", "Unit D", "Research-Based"] },
      { name: "SciShow", handle: "@scishow", href: "https://www.youtube.com/@scishow", desc: "Engaging short videos on genetics discoveries, CRISPR, population ecology, and evolutionary biology that connect Biology 30 content to current science.", tags: ["Unit C", "Unit D", "Current Science"] },
    ],
  },
];

const studyTips = [
  { num: "1", tip: "Draw a neuron from memory and trace an impulse from dendrite to axon terminal, including the action potential steps. Reproduce it three times without notes." },
  { num: "2", tip: "Make a hormone reference sheet for Unit A: list each major hormone, its gland, target organ, and effect. Endocrine content is much easier to study from a self-made table." },
  { num: "3", tip: "For Unit B, trace the hormonal changes through the menstrual cycle on a blank timeline. Connecting FSH, LH, estrogen, and progesterone to cycle phases is a common exam focus." },
  { num: "4", tip: "Practice Punnett squares daily for Unit C — start with monohybrid, then dihybrid, then sex-linked and incomplete dominance. Genetics is a skill that builds through repetition." },
  { num: "5", tip: "Write out the steps of transcription and translation in your own words. Students who can narrate the process rather than just recall vocabulary score significantly better." },
  { num: "6", tip: "For Unit D, create a concept map linking population growth curves, carrying capacity, limiting factors, and species interactions. Showing the connections is the key to exam success." },
  { num: "7", tip: "Biology 30 builds directly on Biology 20. If Unit C genetics feels difficult, review cell division and DNA basics from last year before pushing forward." },
  { num: "8", tip: "Use Learn.Genetics for Unit C practice — the meiosis and pedigree interactives are some of the best free tools available for senior high genetics review." },
];

type Tab = "websites" | "youtube" | "attitudes" | "tips";

export default function Biology30() {
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
          <span className="text-foreground font-medium">Biology 30</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-secondary overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(var(--primary)/0.20),transparent_60%)]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <span className="inline-block bg-indigo-500/20 text-indigo-200 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
              Alberta Biology 30
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-secondary-foreground mb-5 leading-tight">Biology 30</h1>
            <p className="text-secondary-foreground/80 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              Dive deeper into the complexity of living systems through homeostasis, reproduction, genetics, molecular biology, and population dynamics. Biology 30 builds on Biology 20 and prepares students to think critically about the human body, heredity, biotechnology, and ecological change.
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                { val: "4", label: "Course Units" },
                { val: "Bio 30", label: "Alberta Diploma Course" },
                { val: "STS", label: "Science, Tech & Society" },
                { val: "Gr. 12", label: "Senior Biology" },
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
          <span className="font-bold text-muted-foreground text-xs uppercase tracking-wider">Biology 30 Units</span>
          {units.map((u) => (
            <a key={u.num} href={`#${u.num.toLowerCase().replace(" ", "-")}`} className="text-foreground/70 hover:text-primary transition-colors font-medium">
              {u.num}: {u.title.split(" ").slice(0, 3).join(" ")}…
            </a>
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
                        <span className="text-xs text-primary font-semibold">Resources below</span>
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
                  <p className="text-secondary-foreground/70 text-sm">Key understandings and skills drawn from the Alberta Biology 30 program of studies.</p>
                </div>
                <CardContent className="p-6">
                  <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {outcomes.map((o, i) => (
                      <motion.div key={i} variants={fadeUp} className="flex items-start gap-3 p-3 rounded-lg bg-muted/40 border">
                        <div className="w-2 h-2 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
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
                      <Card className="h-full border-l-4 border-l-indigo-500 shadow-sm" data-testid={`card-attitude-${i}`}>
                        <CardContent className="p-5">
                          <h4 className="font-bold text-indigo-700 mb-2">{a.title}</h4>
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
                <div className="bg-gradient-to-br from-indigo-50 to-violet-50 border border-indigo-200 rounded-2xl p-6 md:p-8">
                  <h3 className="font-serif font-bold text-xl text-indigo-900 mb-6">Study Smart for Biology 30</h3>
                  <motion.div variants={stagger} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {studyTips.map((tip, i) => (
                      <motion.div key={i} variants={fadeUp} className="flex items-start gap-3">
                        <div className="w-7 h-7 bg-indigo-700 rounded-full flex items-center justify-center shrink-0 mt-0.5">
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
