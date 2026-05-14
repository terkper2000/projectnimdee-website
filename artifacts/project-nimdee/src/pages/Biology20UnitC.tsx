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
  { label: "Unit A", title: "Energy & Matter", href: "/resources/biology-20/unit-a", active: false },
  { label: "Unit B", title: "Ecosystems", href: "/resources/biology-20/unit-b", active: false },
  { label: "Unit C", title: "Photosynthesis", href: "/resources/biology-20/unit-c", active: true },
  { label: "Unit D", title: "Human Systems", href: "/resources/biology-20/unit-d", active: false },
];

export default function Biology20UnitC() {
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
          <span className="text-foreground font-medium">Unit C — Photosynthesis &amp; Cellular Respiration</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-secondary overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(45,90%,35%,0.28),transparent_65%)]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <span className="inline-block bg-amber-500/20 text-amber-300 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              Biology 20 — Unit C
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-secondary-foreground mb-4 leading-tight">
              Photosynthesis &amp; Cellular Respiration
            </h1>
            <p className="text-secondary-foreground/75 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
              Discover how chloroplasts capture solar energy to build glucose, and how mitochondria break glucose down to produce ATP — the complementary energy engines of all life on Earth.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Pigments", "Light Reactions", "Calvin Cycle", "C3 vs C4", "Glycolysis", "Krebs Cycle", "ETC", "ATP Yield", "Fermentation", "Chromatography"].map((t) => (
                <span key={t} className="text-xs font-semibold bg-amber-500/20 text-amber-200 px-3 py-1 rounded-full">{t}</span>
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
              className={`px-4 py-3 text-sm font-semibold border-b-2 whitespace-nowrap transition-colors ${u.active ? "border-amber-600 text-amber-700" : "border-transparent text-muted-foreground hover:text-foreground"}`}>
              <span className="font-bold">{u.label}</span>
              <span className="hidden sm:inline text-xs font-normal ml-1 opacity-70">— {u.title}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="py-14 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6 space-y-16">

          {/* Outcomes */}
          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">Program Outcomes</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "Describe the types of photosynthetic pigments and explain their roles in absorbing light energy",
                "Distinguish between absorption spectra and action spectra, and explain their relationship",
                "Explain paper chromatography and calculate Rf values for pigment separation",
                "Describe the light-dependent reactions including the role of photosystems I and II, water splitting, and ATP/NADPH synthesis",
                "Explain the Calvin cycle (light-independent reactions) including carbon fixation, reduction, and regeneration of RuBP",
                "Compare C3, C4, and CAM photosynthesis adaptations and their ecological significance",
                "Outline the stages of cellular respiration: glycolysis, pyruvate oxidation, Krebs cycle, and electron transport chain",
                "Explain chemiosmosis and the role of ATP synthase in ATP production",
                "Calculate and compare the theoretical ATP yield from aerobic respiration vs fermentation",
                "Describe anaerobic fermentation pathways (lactic acid and alcoholic) and their applications",
              ].map((o, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted/40 border">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                  <p className="text-sm text-foreground/80 leading-relaxed">{o}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Section 1: Pigments & Light */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <span className="bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">Section 1</span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">Photosynthetic Pigments &amp; Light</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="space-y-6">
              <motion.div variants={fadeUp}>
                <Card className="border-l-4 border-l-amber-500">
                  <CardContent className="p-6">
                    <h3 className="font-serif font-bold text-lg mb-4 text-amber-800">Photosynthetic Pigments</h3>
                    <div className="overflow-x-auto mb-4">
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr className="bg-amber-50">
                            <th className="border border-amber-200 px-3 py-2 text-left font-bold text-amber-800">Pigment</th>
                            <th className="border border-amber-200 px-3 py-2 text-left font-bold text-amber-800">Color Seen</th>
                            <th className="border border-amber-200 px-3 py-2 text-left font-bold text-amber-800">Wavelengths Absorbed</th>
                            <th className="border border-amber-200 px-3 py-2 text-left font-bold text-amber-800">Location / Role</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            ["Chlorophyll a", "Bright green", "Violet-blue (430 nm) & red (680 nm)", "Primary pigment; directly drives light reactions in PS I & II"],
                            ["Chlorophyll b", "Yellow-green", "Blue (453 nm) & orange-red (642 nm)", "Accessory pigment; broadens wavelength absorption range"],
                            ["Beta-carotene", "Orange", "Blue-violet (400–500 nm)", "Accessory; also photoprotective (prevents chlorophyll bleaching)"],
                            ["Xanthophylls", "Yellow", "Blue-violet (400–500 nm)", "Accessory pigments; visible in autumn when chlorophyll breaks down"],
                            ["Phycobilins", "Red / Blue", "Green & yellow (500–600 nm)", "In red algae & cyanobacteria; capture light unavailable to chlorophyll"],
                          ].map(([pig, color, wave, role], i) => (
                            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-amber-50/20"}>
                              <td className="border border-amber-100 px-3 py-2 font-semibold text-amber-700">{pig}</td>
                              <td className="border border-amber-100 px-3 py-2 text-muted-foreground">{color}</td>
                              <td className="border border-amber-100 px-3 py-2 text-muted-foreground text-xs font-mono">{wave}</td>
                              <td className="border border-amber-100 px-3 py-2 text-muted-foreground text-xs">{role}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                        <p className="text-xs font-bold text-amber-800 mb-2">Absorption Spectrum vs Action Spectrum</p>
                        <p className="text-xs text-amber-900 leading-relaxed">
                          <strong>Absorption spectrum:</strong> Shows which wavelengths a specific pigment absorbs (measured with a spectrophotometer). Peaks at violet-blue and red for chlorophyll a.<br /><br />
                          <strong>Action spectrum:</strong> Shows which wavelengths drive the most photosynthesis (measured by O₂ production or CO₂ uptake). Closely mirrors absorption spectrum — confirms that absorbed wavelengths drive the reaction. Green light is least effective (reflected).
                        </p>
                      </div>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <p className="text-xs font-bold text-green-800 mb-2">Chromatography &amp; Rf Values</p>
                        <p className="text-xs text-green-900 leading-relaxed mb-2">Paper chromatography separates pigments by their solubility in a solvent. Less polar pigments travel farther (higher Rf). More polar pigments are attracted to the paper and travel less (lower Rf).</p>
                        <p className="text-xs font-mono text-green-900 bg-green-100 rounded p-2">
                          Rf = distance pigment travelled ÷ distance solvent front travelled<br /><br />
                          Typical Rf: carotene ~0.95 | xanthophylls ~0.70 | chlorophyll a ~0.65 | chlorophyll b ~0.45
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </section>

          {/* Section 2: Photosynthesis */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <span className="bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">Section 2</span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">Photosynthesis</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="space-y-6">
              <motion.div variants={fadeUp}>
                <Card className="border-l-4 border-l-green-500">
                  <CardContent className="p-6">
                    <h3 className="font-serif font-bold text-lg mb-3 text-green-800">Overall Equation &amp; Chloroplast Structure</h3>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                      <p className="text-xs font-bold text-green-800 mb-2">Overall Photosynthesis Equation</p>
                      <p className="text-sm font-mono text-green-900">6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider mb-3">Chloroplast Compartments</p>
                        <div className="space-y-2">
                          {[
                            { part: "Outer & inner membranes", role: "Enclose and protect the chloroplast; control molecule entry/exit" },
                            { part: "Intermembrane space", role: "Between outer and inner membranes" },
                            { part: "Stroma", role: "Fluid-filled interior; site of Calvin cycle (light-independent reactions)" },
                            { part: "Thylakoid membranes", role: "Folded internal membranes; site of light-dependent reactions" },
                            { part: "Grana (sing. granum)", role: "Stacks of thylakoids; maximises membrane surface area for light capture" },
                            { part: "Thylakoid lumen", role: "Interior space of thylakoid; H⁺ (proton) reservoir for chemiosmosis" },
                          ].map((c) => (
                            <div key={c.part} className="text-xs">
                              <span className="font-bold text-green-700">{c.part}: </span>
                              <span className="text-muted-foreground">{c.role}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                        <p className="text-xs font-bold text-amber-800 mb-2">The Two Stages — Summary</p>
                        <div className="space-y-2 text-xs">
                          <div className="bg-white border rounded p-2">
                            <p className="font-bold text-amber-700">Light-Dependent Reactions</p>
                            <p className="text-muted-foreground">Location: thylakoid membranes<br />Inputs: H₂O, light energy (photons)<br />Outputs: ATP, NADPH, O₂<br />Key events: water splitting (photolysis), electron transport, chemiosmosis</p>
                          </div>
                          <div className="bg-white border rounded p-2">
                            <p className="font-bold text-green-700">Calvin Cycle (Light-Independent)</p>
                            <p className="text-muted-foreground">Location: stroma<br />Inputs: CO₂, ATP, NADPH<br />Outputs: G3P (used to build glucose), ADP, NADP⁺<br />Key event: carbon fixation by RuBisCO</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeUp}>
                <Card className="border-l-4 border-l-green-500">
                  <CardContent className="p-6">
                    <h3 className="font-serif font-bold text-lg mb-4 text-green-800">Light-Dependent Reactions (Thylakoid)</h3>
                    <div className="space-y-4">
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                          <thead>
                            <tr className="bg-green-50">
                              <th className="border border-green-200 px-3 py-2 text-left font-bold text-green-800">Step</th>
                              <th className="border border-green-200 px-3 py-2 text-left font-bold text-green-800">What Happens</th>
                              <th className="border border-green-200 px-3 py-2 text-left font-bold text-green-800">Products</th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              ["1. Photosystem II (P680)", "Chlorophyll absorbs light; excited electrons leave the reaction centre; water is split (photolysis) to replace electrons: 2H₂O → 4H⁺ + 4e⁻ + O₂", "O₂ released; electrons energized; H⁺ released into lumen"],
                              ["2. Electron Transport Chain (ETC) I", "Excited electrons from PSII pass through a series of protein carriers in the thylakoid membrane, losing energy; this energy pumps H⁺ across the membrane into the lumen", "H⁺ gradient (proton motive force) built up"],
                              ["3. Chemiosmosis & ATP Synthase", "H⁺ flows back through ATP synthase (lumen → stroma) down concentration gradient; this drives ATP synthesis", "ATP produced (from ADP + Pᵢ)"],
                              ["4. Photosystem I (P700)", "Electrons from the ETC arrive at PSI; another photon excites them again to a higher energy level", "Electrons re-energized"],
                              ["5. NADP⁺ Reduction", "High-energy electrons from PSI are captured by NADP⁺ + H⁺ to form NADPH (electron carrier)", "NADPH — carries electrons to Calvin cycle"],
                            ].map(([step, what, prod], i) => (
                              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-green-50/20"}>
                                <td className="border border-green-100 px-3 py-2 font-semibold text-green-700 text-xs">{step}</td>
                                <td className="border border-green-100 px-3 py-2 text-muted-foreground text-xs leading-relaxed">{what}</td>
                                <td className="border border-green-100 px-3 py-2 text-muted-foreground text-xs font-semibold">{prod}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                        <p className="text-xs font-bold text-amber-800 mb-1">Remember: PSII comes first</p>
                        <p className="text-xs text-amber-900">Despite the numbers, Photosystem II occurs before Photosystem I in the sequence. Think of it as the order of discovery, not the reaction order.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeUp}>
                <Card className="border-l-4 border-l-green-500">
                  <CardContent className="p-6">
                    <h3 className="font-serif font-bold text-lg mb-4 text-green-800">Calvin Cycle (Stroma)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      {[
                        { phase: "Carbon Fixation", num: "1", desc: "CO₂ is attached to RuBP (a 5-carbon acceptor molecule) by the enzyme RuBisCO. Produces unstable 6C compound that immediately splits into two 3-PGA (3-carbon) molecules.", inputs: "3 CO₂ + 3 RuBP", outputs: "6 × 3-PGA" },
                        { phase: "Reduction", num: "2", desc: "3-PGA is reduced using ATP and NADPH from the light reactions to produce G3P (glyceraldehyde-3-phosphate). G3P is the sugar product — the first stable organic molecule made.", inputs: "6 ATP + 6 NADPH + 6 3-PGA", outputs: "6 × G3P" },
                        { phase: "Regeneration of RuBP", num: "3", desc: "5 of the 6 G3P molecules are used to regenerate 3 RuBP molecules using ATP. The cycle can continue fixing more CO₂. 1 G3P exits to build glucose and other organic molecules.", inputs: "5 G3P + 3 ATP", outputs: "3 RuBP (cycle continues)" },
                      ].map((p) => (
                        <div key={p.phase} className="bg-green-50 border border-green-200 rounded-xl p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-6 h-6 bg-green-700 rounded-full flex items-center justify-center shrink-0">
                              <span className="text-white text-xs font-bold">{p.num}</span>
                            </div>
                            <p className="font-bold text-sm text-green-800">{p.phase}</p>
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed mb-2">{p.desc}</p>
                          <p className="text-xs font-mono text-green-900 bg-green-100 rounded p-1 mb-1">IN: {p.inputs}</p>
                          <p className="text-xs font-mono text-green-900 bg-green-100 rounded p-1">OUT: {p.outputs}</p>
                        </div>
                      ))}
                    </div>
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                      <p className="text-xs font-bold text-amber-800 mb-1">To produce one glucose (6C), the Calvin cycle must turn 6 times</p>
                      <p className="text-xs text-amber-900">6 CO₂ fixed → 12 G3P produced → 10 used to regenerate RuBP → 2 G3P exit → combined to form 1 glucose. Net cost: 18 ATP + 12 NADPH per glucose.</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeUp}>
                <Card className="border-l-4 border-l-green-500">
                  <CardContent className="p-6">
                    <h3 className="font-serif font-bold text-lg mb-4 text-green-800">C3, C4, and CAM Plants</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr className="bg-green-50">
                            <th className="border border-green-200 px-3 py-2 text-left font-bold text-green-800">Feature</th>
                            <th className="border border-green-200 px-3 py-2 text-left font-bold text-green-800">C3 Plants</th>
                            <th className="border border-green-200 px-3 py-2 text-left font-bold text-green-800">C4 Plants</th>
                            <th className="border border-green-200 px-3 py-2 text-left font-bold text-green-800">CAM Plants</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            ["First product", "3-PGA (3C)", "OAA (4C)", "OAA (4C)"],
                            ["CO₂ fixation location", "Mesophyll cells only", "Mesophyll cells (CO₂ captured as OAA) → bundle sheath cells (Calvin cycle)", "Mesophyll cells — stomata open at night"],
                            ["Stomata timing", "Open during day", "Open during day", "Open at night (CO₂ stored as organic acid), closed during day"],
                            ["Photorespiration", "High in hot, dry conditions", "Minimized — CO₂ concentrated near RuBisCO", "Minimized — CO₂ stored and released internally"],
                            ["Water efficiency", "Lowest", "Moderate-high", "Highest (but slow growth)"],
                            ["Habitat", "Temperate climates (wheat, soybeans, most trees)", "Hot, sunny climates (corn/maize, sugarcane, sorghum)", "Arid/desert or dry seasons (cacti, pineapple, agave)"],
                          ].map(([feat, c3, c4, cam], i) => (
                            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-green-50/20"}>
                              <td className="border border-green-100 px-3 py-2 font-semibold text-green-700 text-xs">{feat}</td>
                              <td className="border border-green-100 px-3 py-2 text-muted-foreground text-xs">{c3}</td>
                              <td className="border border-green-100 px-3 py-2 text-muted-foreground text-xs">{c4}</td>
                              <td className="border border-green-100 px-3 py-2 text-muted-foreground text-xs">{cam}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </section>

          {/* Section 3: Cellular Respiration */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <span className="bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">Section 3</span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">Cellular Respiration</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="space-y-6">
              <motion.div variants={fadeUp}>
                <Card className="border-l-4 border-l-orange-500">
                  <CardContent className="p-6">
                    <h3 className="font-serif font-bold text-lg mb-3 text-orange-800">Overview &amp; Overall Equation</h3>
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
                      <p className="text-xs font-bold text-orange-800 mb-2">Overall Aerobic Respiration Equation</p>
                      <p className="text-sm font-mono text-orange-900">C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ~36–38 ATP</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {[
                        { stage: "Glycolysis", location: "Cytoplasm", o2: "No O₂ needed", atp: "Net 2 ATP" },
                        { stage: "Pyruvate Oxidation", location: "Mitochondrial matrix", o2: "Requires O₂", atp: "0 ATP" },
                        { stage: "Krebs Cycle", location: "Mitochondrial matrix", o2: "Requires O₂", atp: "2 ATP" },
                        { stage: "ETC + Chemiosmosis", location: "Inner mitoch. membrane", o2: "Requires O₂", atp: "~32–34 ATP" },
                      ].map((s) => (
                        <div key={s.stage} className="bg-muted/40 border rounded-lg p-3">
                          <p className="font-bold text-xs text-foreground mb-1">{s.stage}</p>
                          <p className="text-xs text-muted-foreground">{s.location}</p>
                          <p className="text-xs text-orange-700 font-semibold mt-1">{s.atp}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{s.o2}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeUp}>
                <Card className="border-l-4 border-l-orange-500">
                  <CardContent className="p-6">
                    <h3 className="font-serif font-bold text-lg mb-4 text-orange-800">Stage 1: Glycolysis (Cytoplasm)</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      Glucose (6C) is split into two pyruvate molecules (3C each). This occurs in the cytoplasm and does NOT require oxygen — it is anaerobic. It is the oldest metabolic pathway, found in virtually all living cells.
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr className="bg-orange-50">
                            <th className="border border-orange-200 px-3 py-2 text-left font-bold text-orange-800">Inputs</th>
                            <th className="border border-orange-200 px-3 py-2 text-left font-bold text-orange-800">Outputs</th>
                            <th className="border border-orange-200 px-3 py-2 text-left font-bold text-orange-800">Notes</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-orange-100 px-3 py-2">1 glucose (6C)<br />2 ATP (investment phase)</td>
                            <td className="border border-orange-100 px-3 py-2 font-semibold text-orange-700">2 pyruvate (3C each)<br />4 ATP (gross) → net 2 ATP<br />2 NADH</td>
                            <td className="border border-orange-100 px-3 py-2 text-xs text-muted-foreground">ATP investment then payoff; NADH carries electrons to ETC; occurs in cytoplasm; no O₂ required</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeUp}>
                <Card className="border-l-4 border-l-orange-500">
                  <CardContent className="p-6">
                    <h3 className="font-serif font-bold text-lg mb-4 text-orange-800">Stage 2: Pyruvate Oxidation &amp; Krebs Cycle (Matrix)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-orange-700 mb-3">Pyruvate Oxidation</p>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-2">Each pyruvate (3C) enters the mitochondrial matrix and is converted to Acetyl-CoA (2C):</p>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>• CO₂ is released (decarboxylation)</li>
                          <li>• NAD⁺ is reduced to NADH</li>
                          <li>• Coenzyme A (CoA) attaches to form Acetyl-CoA</li>
                          <li>• Per glucose: 2 pyruvate → 2 Acetyl-CoA + 2 CO₂ + 2 NADH</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-orange-700 mb-3">Krebs Cycle (Citric Acid Cycle) — per turn</p>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-2">Acetyl-CoA enters the cycle and carbons are fully oxidized to CO₂. Per cycle turn:</p>
                        <div className="text-xs font-mono bg-orange-50 border border-orange-200 rounded p-2 space-y-0.5">
                          <p>Input: 1 Acetyl-CoA (2C) + oxaloacetate (4C)</p>
                          <p>Forms: citrate (6C)</p>
                          <p>Releases: 2 CO₂</p>
                          <p>Produces: 3 NADH, 1 FADH₂, 1 ATP (or GTP)</p>
                          <p>Regenerates: oxaloacetate (4C)</p>
                          <p className="font-bold text-orange-700">Per glucose (2 turns): 6 NADH, 2 FADH₂, 2 ATP</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeUp}>
                <Card className="border-l-4 border-l-orange-500">
                  <CardContent className="p-6">
                    <h3 className="font-serif font-bold text-lg mb-4 text-orange-800">Stage 3: Electron Transport Chain &amp; Chemiosmosis (Inner Mitochondrial Membrane)</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      NADH and FADH₂ donate electrons to a series of protein complexes embedded in the inner mitochondrial membrane. As electrons move through the chain toward oxygen, energy is released and used to pump H⁺ from the matrix into the intermembrane space, creating a proton gradient.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="space-y-2 text-sm">
                        {[
                          ["NADH input", "Each NADH → ~2.5 ATP"],
                          ["FADH₂ input", "Each FADH₂ → ~1.5 ATP"],
                          ["Final electron acceptor", "O₂ → reduced to H₂O"],
                          ["Proton flow through ATP synthase", "H⁺ flows from intermembrane space → matrix; ATP synthase uses this gradient to phosphorylate ADP → ATP"],
                        ].map(([k, v]) => (
                          <div key={k} className="flex gap-2 bg-muted/30 rounded p-2">
                            <span className="text-xs font-bold text-orange-700 shrink-0">{k}:</span>
                            <span className="text-xs text-muted-foreground">{v}</span>
                          </div>
                        ))}
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-orange-700 mb-3">Total ATP Yield per Glucose</p>
                        <div className="overflow-x-auto">
                          <table className="w-full text-xs border-collapse">
                            <thead>
                              <tr className="bg-orange-50">
                                <th className="border border-orange-200 px-2 py-1.5 text-left font-bold">Stage</th>
                                <th className="border border-orange-200 px-2 py-1.5 text-right font-bold">ATP</th>
                              </tr>
                            </thead>
                            <tbody>
                              {[
                                ["Glycolysis", "2"],
                                ["Pyruvate Oxidation", "0"],
                                ["Krebs Cycle (×2)", "2"],
                                ["ETC from 10 NADH", "~25"],
                                ["ETC from 2 FADH₂", "~3"],
                                ["TOTAL", "~32–38"],
                              ].map(([stage, atp], i) => (
                                <tr key={i} className={stage === "TOTAL" ? "bg-orange-100 font-bold" : i % 2 === 0 ? "bg-white" : "bg-orange-50/30"}>
                                  <td className="border border-orange-100 px-2 py-1.5">{stage}</td>
                                  <td className="border border-orange-100 px-2 py-1.5 text-right font-mono text-orange-700 font-bold">{atp}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeUp}>
                <Card className="border-l-4 border-l-amber-500">
                  <CardContent className="p-6">
                    <h3 className="font-serif font-bold text-lg mb-4 text-amber-800">Anaerobic Respiration: Fermentation</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      When oxygen is absent, cells cannot use the ETC. Pyruvate from glycolysis is converted via fermentation to regenerate NAD⁺, allowing glycolysis to continue producing ATP (just 2 ATP net — far less than aerobic respiration).
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                        <p className="font-bold text-yellow-800 mb-2">Lactic Acid Fermentation</p>
                        <p className="text-xs font-mono bg-yellow-100 rounded p-2 mb-2">Pyruvate + NADH → Lactic acid + NAD⁺</p>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>• Occurs in: muscle cells during intense exercise, some bacteria</li>
                          <li>• Lactic acid accumulation causes muscle fatigue and soreness</li>
                          <li>• Applications: yogurt, cheese, sauerkraut, sourdough (bacterial fermentation)</li>
                          <li>• Lactic acid converted back to glucose in liver when O₂ available (Cori cycle)</li>
                        </ul>
                      </div>
                      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                        <p className="font-bold text-amber-800 mb-2">Alcoholic Fermentation</p>
                        <p className="text-xs font-mono bg-amber-100 rounded p-2 mb-2">Pyruvate → Acetaldehyde + CO₂<br />Acetaldehyde + NADH → Ethanol + NAD⁺</p>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>• Occurs in: yeast, some plant cells</li>
                          <li>• CO₂ produced causes bread to rise</li>
                          <li>• Ethanol produced is the alcohol in beer and wine</li>
                          <li>• Applications: baking, brewing, biofuel production, wine-making</li>
                          <li>• Ethanol is toxic to yeast at ~15% — limits wine alcohol content</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 bg-muted/30 border rounded-lg p-4">
                      <p className="text-xs font-bold mb-2">Aerobic vs Anaerobic Comparison</p>
                      <div className="overflow-x-auto">
                        <table className="w-full text-xs border-collapse">
                          <thead>
                            <tr className="bg-muted/40">
                              <th className="border px-2 py-1.5 text-left">Feature</th>
                              <th className="border px-2 py-1.5 text-left">Aerobic Respiration</th>
                              <th className="border px-2 py-1.5 text-left">Lactic Acid Fermentation</th>
                              <th className="border px-2 py-1.5 text-left">Alcoholic Fermentation</th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              ["O₂ required?", "Yes", "No", "No"],
                              ["ATP yield", "~36–38 ATP", "2 ATP", "2 ATP"],
                              ["End products", "CO₂ + H₂O", "Lactic acid", "Ethanol + CO₂"],
                              ["Efficiency", "High", "Very low", "Very low"],
                              ["Duration", "Sustained", "Short term only", "Short term only"],
                            ].map(([f, ae, la, al], i) => (
                              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-muted/20"}>
                                <td className="border px-2 py-1.5 font-semibold">{f}</td>
                                <td className="border px-2 py-1.5">{ae}</td>
                                <td className="border px-2 py-1.5">{la}</td>
                                <td className="border px-2 py-1.5">{al}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </section>

          {/* Section 4: Factors & Applications */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <span className="bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">Section 4</span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">Factors Affecting Photosynthesis</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Card>
                <CardContent className="p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-amber-50">
                          <th className="border border-amber-200 px-3 py-2 text-left font-bold text-amber-800">Limiting Factor</th>
                          <th className="border border-amber-200 px-3 py-2 text-left font-bold text-amber-800">Effect When Increased</th>
                          <th className="border border-amber-200 px-3 py-2 text-left font-bold text-amber-800">Effect When Too High/Low</th>
                          <th className="border border-amber-200 px-3 py-2 text-left font-bold text-amber-800">Practical Application</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Light Intensity", "Photosynthesis rate increases until saturation point", "Saturation: rate plateaus; high UV can damage pigments", "Greenhouses use supplemental lighting to extend growing seasons"],
                          ["CO₂ Concentration", "Increases Calvin cycle rate (more substrate for RuBisCO)", "Saturation: rate plateaus; excess CO₂ acidifies cell fluid", "CO₂ injection in commercial greenhouses increases crop yield"],
                          ["Temperature", "Enzyme activity increases; rate rises with temperature", "Too high: enzymes denature; rate drops sharply above ~40°C", "Climate change shifts optimal growing ranges northward in Alberta"],
                          ["Water Availability", "Water is split in photolysis to release O₂ and H⁺", "Drought closes stomata → CO₂ entry blocked → rate drops sharply", "Irrigation systems and soil moisture management in agriculture"],
                          ["Wavelength of Light", "Red (~680 nm) and blue (~430 nm) light most effective", "Green light least effective (reflected — that's why plants look green)", "LED grow lights tuned to red and blue maximize efficiency"],
                        ].map(([f, inc, high, app], i) => (
                          <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-amber-50/20"}>
                            <td className="border border-amber-100 px-3 py-2 font-semibold text-amber-700">{f}</td>
                            <td className="border border-amber-100 px-3 py-2 text-muted-foreground text-xs">{inc}</td>
                            <td className="border border-amber-100 px-3 py-2 text-muted-foreground text-xs">{high}</td>
                            <td className="border border-amber-100 px-3 py-2 text-muted-foreground text-xs">{app}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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
                ["Chlorophyll a", "Primary photosynthetic pigment; absorbs violet-blue and red light; drives light reactions"],
                ["Photosystem I/II", "Protein complexes in thylakoid membrane containing chlorophyll; P700 and P680 reaction centres"],
                ["Photolysis", "Light-driven splitting of water in PSII; releases O₂, H⁺, and electrons"],
                ["Calvin Cycle", "Light-independent reactions in stroma; fixes CO₂ into G3P using ATP and NADPH"],
                ["RuBisCO", "Enzyme that catalyzes CO₂ fixation in Calvin cycle; most abundant protein on Earth"],
                ["Chemiosmosis", "ATP synthesis driven by H⁺ flowing through ATP synthase down a concentration gradient"],
                ["NADH / NADPH", "Electron carrier molecules; carry high-energy electrons from one stage to the next"],
                ["Glycolysis", "Splitting of glucose (6C) into 2 pyruvate (3C); net 2 ATP; occurs in cytoplasm; anaerobic"],
                ["Krebs Cycle", "Citric acid cycle in mitochondrial matrix; completely oxidizes Acetyl-CoA; produces NADH, FADH₂, ATP, CO₂"],
                ["ETC", "Electron transport chain; uses NADH/FADH₂ electrons to pump H⁺ and drive ATP synthesis; requires O₂"],
                ["Fermentation", "Anaerobic pathway producing 2 ATP; regenerates NAD⁺ so glycolysis can continue"],
                ["Rf Value", "Ratio of pigment distance to solvent front in chromatography; identifies pigment type"],
              ].map(([term, def], i) => (
                <motion.div key={i} variants={fadeUp} className="bg-muted/40 border rounded-lg p-3">
                  <p className="text-xs font-bold text-amber-700 mb-1">{term}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{def}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          <UnitCompleteToggle unitId="biology-20-unit-c" />

          {/* Other Units Nav */}
          <section className="border-t pt-10">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Continue Exploring Biology 20</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "Unit A", title: "Energy & Matter Exchange in the Biosphere", href: "/resources/biology-20/unit-a" },
                { label: "Unit B", title: "Ecosystems & Population Change", href: "/resources/biology-20/unit-b" },
                { label: "Unit D", title: "Human Systems", href: "/resources/biology-20/unit-d" },
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
