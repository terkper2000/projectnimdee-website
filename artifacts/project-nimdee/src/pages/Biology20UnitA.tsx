import { Link } from "wouter";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { UnitCompleteToggle } from "@/components/UnitCompleteToggle";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.09 } },
};

const unitNav = [
  { label: "Unit A", title: "Energy & Matter", href: "/resources/biology-20/unit-a", active: true },
  { label: "Unit B", title: "Ecosystems", href: "/resources/biology-20/unit-b", active: false },
  { label: "Unit C", title: "Photosynthesis", href: "/resources/biology-20/unit-c", active: false },
  { label: "Unit D", title: "Human Systems", href: "/resources/biology-20/unit-d", active: false },
];

export default function Biology20UnitA() {
  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-muted/40 border-b">
        <div className="container mx-auto px-4 md:px-6 py-3 flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
          <Link href="/resources" className="hover:text-primary transition-colors flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" />
            Resources
          </Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/resources/biology-20" className="hover:text-primary transition-colors">Biology 20</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground font-medium">Unit A — Energy &amp; Matter</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-secondary overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(168,80%,30%,0.25),transparent_65%)]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <span className="inline-block bg-teal-500/20 text-teal-300 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              Biology 20 — Unit A
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-secondary-foreground mb-4 leading-tight">
              Energy &amp; Matter Exchange in the Biosphere
            </h1>
            <p className="text-secondary-foreground/75 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
              Understand how energy flows one-way through trophic levels, how matter cycles continuously through biogeochemical cycles, and how human activity disrupts biosphere equilibrium.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Energy Flow", "10% Rule", "Food Webs", "Carbon Cycle", "Nitrogen Cycle", "Ecological Pyramids", "Human Impact", "Indigenous Knowledge"].map((t) => (
                <span key={t} className="text-xs font-semibold bg-teal-500/20 text-teal-200 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Unit nav */}
      <div className="bg-muted/30 border-b sticky top-0 z-20">
        <div className="container mx-auto px-4 md:px-6 py-0 flex items-center gap-0 overflow-x-auto">
          {unitNav.map((u) => (
            <Link key={u.label} href={u.href}
              className={`px-4 py-3 text-sm font-semibold border-b-2 whitespace-nowrap transition-colors ${u.active ? "border-teal-600 text-teal-700" : "border-transparent text-muted-foreground hover:text-foreground"}`}>
              <span className="font-bold">{u.label}</span>
              <span className="hidden sm:inline text-xs font-normal ml-1 opacity-70">— {u.title}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="py-14 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6 space-y-16">

          {/* Focusing Questions */}
          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">Program Outcomes</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "Explain that the biosphere is an open system that depends on constant energy input from the Sun",
                "Trace the one-way flow of energy through trophic levels using food chains and food webs",
                "Apply the 10% rule to calculate energy transfer efficiency between trophic levels",
                "Compare ecological pyramids of energy, biomass, and numbers",
                "Describe the cycling of carbon, nitrogen, oxygen, phosphorus, and water through the biosphere",
                "Explain how human activities (fossil fuels, agriculture, deforestation) alter biogeochemical cycles",
                "Explain net primary productivity (NPP) and gross primary productivity (GPP) across biomes",
                "Identify the role of Indigenous knowledge and traditional land stewardship in ecosystem sustainability",
              ].map((o, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted/40 border">
                  <div className="w-2 h-2 rounded-full bg-teal-500 mt-1.5 shrink-0" />
                  <p className="text-sm text-foreground/80 leading-relaxed">{o}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Section 1: Energy Flow */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <span className="bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">Section 1</span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">Energy Flow Through Ecosystems</h2>
              <div className="flex-1 h-px bg-border" />
            </div>

            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="space-y-6">
              <motion.div variants={fadeUp}>
                <Card className="border-l-4 border-l-teal-500">
                  <CardContent className="p-6">
                    <h3 className="font-serif font-bold text-lg mb-3 text-teal-800">The Biosphere as an Open System</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      The biosphere is an <strong>open system</strong> for energy — solar energy continuously enters and heat continuously exits. It is a <strong>closed system</strong> for matter — atoms are recycled and never lost. This is a fundamental distinction. Energy flows one-way; matter cycles.
                    </p>
                    <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                      <p className="text-xs font-bold text-teal-800 uppercase tracking-wider mb-2">Key Equations</p>
                      <p className="text-sm font-mono text-teal-900 mb-1">Photosynthesis: 6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂</p>
                      <p className="text-sm font-mono text-teal-900">Cellular Respiration: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeUp}>
                <Card className="border-l-4 border-l-teal-500">
                  <CardContent className="p-6">
                    <h3 className="font-serif font-bold text-lg mb-4 text-teal-800">Trophic Levels &amp; The 10% Rule</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      Energy is lost at each trophic level primarily as heat during metabolism. Only approximately 10% of energy at one level passes to the next. This limits most food chains to 4–5 levels.
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr className="bg-teal-50">
                            <th className="border border-teal-200 px-3 py-2 text-left font-bold text-teal-800">Trophic Level</th>
                            <th className="border border-teal-200 px-3 py-2 text-left font-bold text-teal-800">Organisms</th>
                            <th className="border border-teal-200 px-3 py-2 text-left font-bold text-teal-800">Role</th>
                            <th className="border border-teal-200 px-3 py-2 text-left font-bold text-teal-800">Example (Alberta Prairie)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            ["1st — Producers", "Plants, algae, cyanobacteria", "Fix solar energy via photosynthesis", "Prairie grasses, willows, cattails"],
                            ["2nd — Primary Consumers", "Herbivores", "Eat producers", "Grasshoppers, mice, bison, deer"],
                            ["3rd — Secondary Consumers", "Carnivores / omnivores", "Eat primary consumers", "Frogs, foxes, hawks"],
                            ["4th — Tertiary Consumers", "Top carnivores", "Eat secondary consumers", "Great horned owls, wolves"],
                            ["Decomposers", "Bacteria, fungi", "Break down dead organic matter", "Earthworms, bracket fungi"],
                          ].map(([level, org, role, ex], i) => (
                            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-teal-50/30"}>
                              <td className="border border-teal-100 px-3 py-2 font-semibold text-teal-700">{level}</td>
                              <td className="border border-teal-100 px-3 py-2 text-muted-foreground">{org}</td>
                              <td className="border border-teal-100 px-3 py-2 text-muted-foreground">{role}</td>
                              <td className="border border-teal-100 px-3 py-2 text-muted-foreground">{ex}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-4 bg-amber-50 border border-amber-200 rounded-lg p-4">
                      <p className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-1">Exam Tip — 10% Rule Calculation</p>
                      <p className="text-sm text-amber-900">If producers have 10,000 kJ of energy → primary consumers receive 1,000 kJ → secondary consumers receive 100 kJ → tertiary consumers receive 10 kJ. Each step = × 0.10 (or ÷ 10).</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeUp}>
                <Card className="border-l-4 border-l-teal-500">
                  <CardContent className="p-6">
                    <h3 className="font-serif font-bold text-lg mb-4 text-teal-800">Ecological Pyramids</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        {
                          type: "Pyramid of Energy",
                          always: "Always upright",
                          desc: "Shows energy (kJ/m²/yr) at each trophic level. Always decreases because of the 10% rule. This is the most reliable pyramid type.",
                          color: "teal",
                        },
                        {
                          type: "Pyramid of Biomass",
                          always: "Usually upright",
                          desc: "Shows dry mass (g/m²) at each level. Can be inverted in aquatic ecosystems where phytoplankton reproduce rapidly (low standing biomass but high productivity).",
                          color: "emerald",
                        },
                        {
                          type: "Pyramid of Numbers",
                          always: "Can be inverted",
                          desc: "Shows count of organisms. Inverted when one large producer (a tree) supports many consumers, or one host supports many parasites.",
                          color: "green",
                        },
                      ].map((p) => (
                        <div key={p.type} className={`bg-${p.color}-50 border border-${p.color}-200 rounded-xl p-4`}>
                          <p className="font-bold text-sm text-foreground mb-1">{p.type}</p>
                          <span className={`text-xs font-semibold bg-${p.color}-200 text-${p.color}-900 px-2 py-0.5 rounded-full`}>{p.always}</span>
                          <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{p.desc}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeUp}>
                <Card className="border-l-4 border-l-teal-500">
                  <CardContent className="p-6">
                    <h3 className="font-serif font-bold text-lg mb-3 text-teal-800">Productivity: GPP &amp; NPP</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr className="bg-teal-50">
                            <th className="border border-teal-200 px-3 py-2 text-left font-bold text-teal-800">Term</th>
                            <th className="border border-teal-200 px-3 py-2 text-left font-bold text-teal-800">Definition</th>
                            <th className="border border-teal-200 px-3 py-2 text-left font-bold text-teal-800">Formula / Note</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            ["Gross Primary Productivity (GPP)", "Total energy fixed by producers through photosynthesis", "All sugars made by plants"],
                            ["Net Primary Productivity (NPP)", "Energy stored in plant tissue after cellular respiration by the plant", "NPP = GPP − Plant Respiration"],
                            ["Secondary Productivity", "Energy stored in consumer tissue", "Limited by 10% rule efficiency"],
                          ].map(([t, d, f], i) => (
                            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-teal-50/30"}>
                              <td className="border border-teal-100 px-3 py-2 font-semibold text-teal-700">{t}</td>
                              <td className="border border-teal-100 px-3 py-2 text-muted-foreground">{d}</td>
                              <td className="border border-teal-100 px-3 py-2 text-muted-foreground font-mono text-xs">{f}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
                      {[
                        ["Tropical Rainforest", "~2,200 g/m²/yr", "Highest NPP"],
                        ["Temperate Forest", "~1,250 g/m²/yr", "Moderate NPP"],
                        ["Alberta Grassland", "~600 g/m²/yr", "Moderate-low"],
                        ["Open Ocean", "~125 g/m²/yr", "Nutrient limited"],
                      ].map(([biome, npp, note]) => (
                        <div key={biome} className="bg-muted/40 border rounded-lg p-3">
                          <p className="text-xs font-bold text-foreground mb-1">{biome}</p>
                          <p className="text-sm font-mono text-teal-700 font-bold">{npp}</p>
                          <p className="text-xs text-muted-foreground">{note}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </section>

          {/* Section 2: Biogeochemical Cycles */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <span className="bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">Section 2</span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">Biogeochemical Cycles</h2>
              <div className="flex-1 h-px bg-border" />
            </div>

            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="space-y-6">

              {/* Carbon Cycle */}
              <motion.div variants={fadeUp}>
                <Card className="border-l-4 border-l-slate-500">
                  <CardContent className="p-6">
                    <h3 className="font-serif font-bold text-lg mb-3">Carbon Cycle</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">Carbon moves between the atmosphere (CO₂), living organisms, soil, oceans, and geological reservoirs (fossil fuels, limestone). The key processes that move carbon are:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                      {[
                        { process: "Photosynthesis", direction: "Atmosphere → Organisms", desc: "Producers fix CO₂ into organic molecules using solar energy" },
                        { process: "Cellular Respiration", direction: "Organisms → Atmosphere", desc: "All organisms release CO₂ when they oxidize organic molecules for ATP" },
                        { process: "Decomposition", direction: "Dead matter → Atmosphere", desc: "Decomposers break down organic molecules, releasing CO₂ and nutrients" },
                        { process: "Combustion", direction: "Fossil fuels → Atmosphere", desc: "Burning releases stored carbon; greatly accelerated by human activity" },
                        { process: "Sedimentation / Fossilisation", direction: "Organisms → Geological reservoir", desc: "Dead organisms become coal, oil, gas over millions of years" },
                        { process: "Ocean exchange", direction: "Atmosphere ↔ Ocean", desc: "CO₂ dissolves in ocean water forming carbonic acid (H₂CO₃)" },
                      ].map((r) => (
                        <div key={r.process} className="flex gap-3 bg-slate-50 border rounded-lg p-3">
                          <div>
                            <p className="text-xs font-bold text-foreground">{r.process}</p>
                            <p className="text-xs text-blue-700 font-semibold mb-0.5">{r.direction}</p>
                            <p className="text-xs text-muted-foreground leading-relaxed">{r.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                      <p className="text-xs font-bold text-amber-800 mb-1">Human Impact on Carbon Cycle</p>
                      <p className="text-xs text-amber-900 leading-relaxed">Burning fossil fuels adds ~10 Gt C/yr to the atmosphere. Deforestation removes carbon sinks. Both increase atmospheric CO₂, intensifying the greenhouse effect and global warming. Atmospheric CO₂ has risen from ~280 ppm (pre-industrial) to over 420 ppm today.</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Nitrogen Cycle */}
              <motion.div variants={fadeUp}>
                <Card className="border-l-4 border-l-blue-500">
                  <CardContent className="p-6">
                    <h3 className="font-serif font-bold text-lg mb-3">Nitrogen Cycle</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      Nitrogen (N₂) makes up 78% of the atmosphere but cannot be used directly by most organisms. Specialised bacteria convert it through several steps:
                    </p>
                    <div className="overflow-x-auto mb-4">
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr className="bg-blue-50">
                            <th className="border border-blue-200 px-3 py-2 text-left font-bold text-blue-800">Process</th>
                            <th className="border border-blue-200 px-3 py-2 text-left font-bold text-blue-800">Who Does It</th>
                            <th className="border border-blue-200 px-3 py-2 text-left font-bold text-blue-800">Transformation</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            ["Nitrogen Fixation", "Rhizobium bacteria (legume roots), lightning, Azotobacter", "N₂ (atmosphere) → NH₃ / NH₄⁺ (ammonium)"],
                            ["Nitrification", "Nitrosomonas then Nitrobacter bacteria", "NH₄⁺ → NO₂⁻ → NO₃⁻ (nitrates — usable by plants)"],
                            ["Assimilation", "Plants and animals", "NO₃⁻ absorbed through roots → amino acids, proteins, nucleic acids"],
                            ["Ammonification", "Decomposers (bacteria, fungi)", "Organic N from dead matter → NH₄⁺"],
                            ["Denitrification", "Anaerobic bacteria (Pseudomonas)", "NO₃⁻ → N₂ — returns nitrogen to atmosphere"],
                          ].map(([proc, who, trans], i) => (
                            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-blue-50/30"}>
                              <td className="border border-blue-100 px-3 py-2 font-semibold text-blue-700">{proc}</td>
                              <td className="border border-blue-100 px-3 py-2 text-muted-foreground text-xs">{who}</td>
                              <td className="border border-blue-100 px-3 py-2 text-muted-foreground font-mono text-xs">{trans}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                      <p className="text-xs font-bold text-amber-800 mb-1">Human Impact</p>
                      <p className="text-xs text-amber-900 leading-relaxed">Synthetic fertilizer production (Haber-Bosch process) doubles the rate of nitrogen fixation globally. Excess nitrates run off into waterways causing eutrophication → algal blooms → hypoxia → dead zones.</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Oxygen, Phosphorus, Water */}
              <motion.div variants={fadeUp}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <Card className="border-l-4 border-l-sky-400">
                    <CardContent className="p-5">
                      <h3 className="font-bold text-base mb-2 text-sky-700">Oxygen Cycle</h3>
                      <ul className="text-sm text-muted-foreground space-y-2 leading-relaxed">
                        <li><strong>Source:</strong> Photosynthesis by plants, algae, cyanobacteria (O₂ released as byproduct)</li>
                        <li><strong>Sink:</strong> Cellular respiration (aerobic organisms), combustion, oxidation reactions</li>
                        <li><strong>Atmosphere:</strong> ~21% O₂ — maintained by balance of photosynthesis and respiration</li>
                        <li><strong>Ozone layer:</strong> O₃ in stratosphere absorbs UV radiation — disrupted by CFCs (human impact)</li>
                        <li><strong>Stromatolites:</strong> Ancient cyanobacteria responsible for the Great Oxygenation Event (~2.4 Ga ago), transforming Earth's early atmosphere</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-l-orange-400">
                    <CardContent className="p-5">
                      <h3 className="font-bold text-base mb-2 text-orange-700">Phosphorus Cycle</h3>
                      <ul className="text-sm text-muted-foreground space-y-2 leading-relaxed">
                        <li><strong>No atmospheric phase</strong> — phosphorus doesn't form a stable gas</li>
                        <li><strong>Source:</strong> Weathering of phosphate rocks (PO₄³⁻ released into soil and water)</li>
                        <li><strong>Uptake:</strong> Plant roots absorb phosphate ions from soil; animals get phosphorus from plants/animals</li>
                        <li><strong>Slowest cycle</strong> — geological timescale without human intervention</li>
                        <li><strong>Human impact:</strong> Fertilizers, detergents, sewage add phosphorus to waterways → eutrophication (algal blooms)</li>
                        <li><strong>Importance:</strong> Essential for ATP, DNA, RNA, cell membranes, and bone (Ca₃(PO₄)₂)</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-l-cyan-400">
                    <CardContent className="p-5">
                      <h3 className="font-bold text-base mb-2 text-cyan-700">Water (Hydrological) Cycle</h3>
                      <ul className="text-sm text-muted-foreground space-y-2 leading-relaxed">
                        <li><strong>Evaporation:</strong> Water from oceans/lakes → water vapour (solar energy driven)</li>
                        <li><strong>Transpiration:</strong> Plants release water vapour through stomata (significant contribution)</li>
                        <li><strong>Condensation:</strong> Water vapour → liquid droplets → clouds</li>
                        <li><strong>Precipitation:</strong> Rain, snow, sleet fall back to surface</li>
                        <li><strong>Runoff &amp; infiltration:</strong> Water flows to rivers/oceans or soaks into groundwater aquifers</li>
                        <li><strong>Human impacts:</strong> Deforestation reduces transpiration; over-extraction depletes aquifers; dams alter river flow</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </motion.div>
          </section>

          {/* Section 3: Human Impacts & Biomagnification */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <span className="bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">Section 3</span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">Human Impacts &amp; Biomagnification</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="space-y-6">
              <motion.div variants={fadeUp}>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-serif font-bold text-lg mb-3">Bioaccumulation &amp; Biomagnification</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      <strong>Bioaccumulation</strong> — a toxin (e.g., DDT, methylmercury, PCBs) accumulates in an organism's tissues because it is absorbed faster than it is excreted. <strong>Biomagnification</strong> — the concentration of a toxin <em>increases</em> at each successive trophic level because consumers accumulate the toxin from all the prey they eat.
                    </p>
                    <div className="overflow-x-auto mb-4">
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr className="bg-red-50">
                            <th className="border border-red-200 px-3 py-2 text-left font-bold text-red-800">Trophic Level</th>
                            <th className="border border-red-200 px-3 py-2 text-left font-bold text-red-800">Example</th>
                            <th className="border border-red-200 px-3 py-2 text-left font-bold text-red-800">Relative Toxin Concentration</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            ["Producers", "Phytoplankton / prairie grass", "0.000003 ppm"],
                            ["Primary Consumers", "Zooplankton / grasshoppers", "0.04 ppm (13,000×)"],
                            ["Secondary Consumers", "Small fish / mice", "0.5 ppm"],
                            ["Tertiary Consumers", "Large fish / foxes", "2 ppm"],
                            ["Top Predators", "Eagles / osprey / orca", "25 ppm (millions ×)"],
                          ].map(([lvl, ex, conc], i) => (
                            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-red-50/20"}>
                              <td className="border border-red-100 px-3 py-2 font-medium">{lvl}</td>
                              <td className="border border-red-100 px-3 py-2 text-muted-foreground text-xs">{ex}</td>
                              <td className="border border-red-100 px-3 py-2 font-mono text-xs text-red-700 font-bold">{conc}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                        <p className="text-xs font-bold text-amber-800 mb-2">Real Alberta Example — Mercury in Lake Fish</p>
                        <p className="text-xs text-amber-900 leading-relaxed">Mercury from industrial sources methylates in lake sediments. Phytoplankton absorb it; it concentrates progressively up through zooplankton → small fish → pike → bald eagles. Health advisories limit consumption of large fish in many Alberta lakes.</p>
                      </div>
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <p className="text-xs font-bold text-red-800 mb-2">Why Fat-Soluble Toxins Are Worst</p>
                        <p className="text-xs text-red-900 leading-relaxed">DDT, PCBs, and dioxins are lipophilic (fat-soluble). They are not excreted — they accumulate in fatty tissues indefinitely. Water-soluble toxins can be excreted via kidneys, so they biomagnify less severely.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeUp}>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-serif font-bold text-lg mb-4">Major Human Disruptions to the Biosphere</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { title: "Greenhouse Effect &amp; Climate Change", desc: "CO₂, CH₄, N₂O trap outgoing infrared radiation. Rising temperatures alter precipitation, shift species ranges, melt ice caps. Alberta-specific: permafrost thaw releases stored methane (a positive feedback loop).", tag: "Carbon Cycle" },
                        { title: "Acid Precipitation", desc: "SO₂ and NOₓ from fossil fuel combustion dissolve in water to form H₂SO₄ and HNO₃. Lowers lake pH, kills aquatic organisms, leaches calcium from forest soils, damages limestone. Alberta lakes vulnerable due to thin soils.", tag: "Nitrogen &amp; Sulfur" },
                        { title: "Eutrophication", desc: "Excess N and P from agriculture, sewage, and urban runoff cause algal blooms. Decomposers consume all dissolved oxygen → hypoxia → fish kills. Alberta: major issue in lakes receiving agricultural runoff.", tag: "Nitrogen &amp; Phosphorus" },
                        { title: "Deforestation", desc: "Removes carbon sinks, reduces transpiration and water cycling, destroys habitat (biodiversity loss), causes soil erosion. Alberta boreal forest is critical for water regulation and biodiversity.", tag: "Carbon &amp; Water" },
                      ].map((item, i) => (
                        <div key={i} className="bg-muted/30 border rounded-xl p-4">
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <h4 className="font-bold text-sm text-foreground" dangerouslySetInnerHTML={{ __html: item.title }} />
                            <span className="text-xs font-semibold bg-teal-100 text-teal-800 px-2 py-0.5 rounded-full whitespace-nowrap shrink-0" dangerouslySetInnerHTML={{ __html: item.tag }} />
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </section>

          {/* Section 4: Indigenous Knowledge */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <span className="bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">Section 4</span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">Indigenous &amp; Traditional Ecological Knowledge</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Card className="border-l-4 border-l-teal-500 bg-gradient-to-br from-teal-50 to-emerald-50">
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Indigenous communities across Alberta have observed and managed ecosystems for thousands of years. Traditional Ecological Knowledge (TEK) contributes meaningful understanding of long-term ecosystem dynamics and sustainable resource stewardship.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { title: "Controlled Burns (Cultural Burning)", desc: "Indigenous peoples used prescribed fire to renew prairie grasslands, promote berry growth, and manage bison habitat. Modern ecologists have recognized that periodic low-intensity burns maintain biodiversity in boreal and prairie ecosystems." },
                      { title: "Bison as a Keystone Species", desc: "Blackfoot, Cree, and other plains nations recognized the bison's role in shaping prairie ecosystems through grazing, wallowing, and nutrient cycling. Their near-extirpation caused cascading ecosystem disruptions." },
                      { title: "Indicator Species Knowledge", desc: "Many Indigenous communities tracked ecosystem health using indicator species — specific plants or animals whose presence, absence, or behaviour signals environmental change. This mirrors modern ecological monitoring." },
                      { title: "Oral Knowledge Systems", desc: "Multi-generational oral traditions document changes in species populations, migration patterns, and seasonal cycles over centuries — timescales that exceed most Western scientific datasets." },
                    ].map((item, i) => (
                      <div key={i} className="bg-white/70 border border-teal-100 rounded-lg p-4">
                        <h4 className="font-bold text-sm text-teal-800 mb-1">{item.title}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </section>

          {/* Key Terms */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-xl font-serif font-bold text-foreground whitespace-nowrap">Key Vocabulary</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                ["Biosphere", "All regions of Earth where life exists — atmosphere, hydrosphere, lithosphere"],
                ["Trophic Level", "A feeding position in a food chain or web (producer, primary consumer, etc.)"],
                ["10% Rule", "Only ~10% of energy transfers to the next trophic level; 90% lost as heat"],
                ["Ecological Pyramid", "Diagram showing energy, biomass, or numbers across trophic levels"],
                ["GPP / NPP", "Gross primary productivity; net primary productivity (GPP − plant respiration)"],
                ["Bioaccumulation", "Build-up of a substance in one organism's tissues over time"],
                ["Biomagnification", "Increasing concentration of toxin at successive trophic levels"],
                ["Nitrogen Fixation", "Conversion of N₂ → NH₃/NH₄⁺ by bacteria; makes N available to producers"],
                ["Denitrification", "Conversion of NO₃⁻ → N₂ by anaerobic bacteria; returns N to atmosphere"],
                ["Eutrophication", "Nutrient over-enrichment of water → algal blooms → oxygen depletion"],
                ["Biogeochemical Cycle", "Pathways by which matter moves through biotic and abiotic compartments"],
                ["Decomposer", "Organism that breaks down dead organic matter, recycling nutrients"],
              ].map(([term, def], i) => (
                <motion.div key={i} variants={fadeUp} className="bg-muted/40 border rounded-lg p-3">
                  <p className="text-xs font-bold text-teal-700 mb-1">{term}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{def}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          <UnitCompleteToggle unitId="biology-20-unit-a" />

          {/* Other Units Nav */}
          <section className="border-t pt-10">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Continue Exploring Biology 20</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "Unit B", title: "Ecosystems & Population Change", href: "/resources/biology-20/unit-b", color: "lime" },
                { label: "Unit C", title: "Photosynthesis & Cellular Respiration", href: "/resources/biology-20/unit-c", color: "amber" },
                { label: "Unit D", title: "Human Systems", href: "/resources/biology-20/unit-d", color: "rose" },
              ].map((u) => (
                <Link key={u.label} href={u.href}
                  className="group block bg-muted/30 border hover:border-primary/40 hover:shadow-sm rounded-xl p-4 transition-all duration-200">
                  <p className="text-xs font-bold text-muted-foreground mb-1">{u.label}</p>
                  <p className="font-serif font-bold text-sm text-foreground group-hover:text-primary transition-colors">{u.title}</p>
                  <p className="text-xs text-primary mt-2 font-semibold">Explore unit →</p>
                </Link>
              ))}
            </div>
          </section>

        </div>
      </div>
    </Layout>
  );
}
