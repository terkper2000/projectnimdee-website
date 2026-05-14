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
  { label: "Unit C", title: "Photosynthesis", href: "/resources/biology-20/unit-c", active: false },
  { label: "Unit D", title: "Human Systems", href: "/resources/biology-20/unit-d", active: true },
];

export default function Biology20UnitD() {
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
          <span className="text-foreground font-medium">Unit D — Human Systems</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-secondary overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(340,75%,35%,0.28),transparent_65%)]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <span className="inline-block bg-rose-500/20 text-rose-300 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              Biology 20 — Unit D
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-secondary-foreground mb-4 leading-tight">
              Human Systems
            </h1>
            <p className="text-secondary-foreground/75 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
              Examine the structure, function, and integration of the major human body systems — digestive, respiratory, circulatory, excretory, immune, and motor — and how they work together to maintain homeostasis.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Digestive", "Enzymes", "Respiratory", "Circulatory", "Blood Types", "Excretory", "Immune", "Muscle Contraction"].map((t) => (
                <span key={t} className="text-xs font-semibold bg-rose-500/20 text-rose-200 px-3 py-1 rounded-full">{t}</span>
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
              className={`px-4 py-3 text-sm font-semibold border-b-2 whitespace-nowrap transition-colors ${u.active ? "border-rose-600 text-rose-700" : "border-transparent text-muted-foreground hover:text-foreground"}`}>
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
                "Describe the structures and processes of the digestive system including physical and chemical digestion of carbohydrates, proteins, and lipids",
                "Explain the role of enzymes in digestion and describe how competitive, non-competitive, and irreversible inhibitors affect enzyme function",
                "Describe the structures of the respiratory system and explain gas exchange mechanisms at alveoli and tissues",
                "Describe the structure and function of the heart, blood vessels, and blood components; trace blood flow through pulmonary and systemic circuits",
                "Explain the ABO and Rh blood group systems, including the role of antigens and antibodies, and the risk of hemolytic disease",
                "Describe the three lines of defence in the immune system and the role of lymphocytes in specific immunity",
                "Describe the structures of the urinary system and explain nephron function in filtration, reabsorption, secretion, and excretion",
                "Explain how ADH and aldosterone regulate water and ion balance",
                "Describe the three types of muscle tissue and explain the sliding filament model of muscle contraction",
              ].map((o, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted/40 border">
                  <div className="w-2 h-2 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                  <p className="text-sm text-foreground/80 leading-relaxed">{o}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Section 1: Digestive System */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <span className="bg-rose-600 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">Section 1</span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">Digestive System</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="space-y-6">
              <motion.div variants={fadeUp}>
                <Card className="border-l-4 border-l-rose-500">
                  <CardContent className="p-6">
                    <h3 className="font-serif font-bold text-lg mb-4 text-rose-800">Digestive Structures &amp; Functions</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr className="bg-rose-50">
                            <th className="border border-rose-200 px-3 py-2 text-left font-bold text-rose-800">Structure</th>
                            <th className="border border-rose-200 px-3 py-2 text-left font-bold text-rose-800">Physical Digestion</th>
                            <th className="border border-rose-200 px-3 py-2 text-left font-bold text-rose-800">Chemical Digestion / Secretion</th>
                            <th className="border border-rose-200 px-3 py-2 text-left font-bold text-rose-800">Absorption</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            ["Mouth", "Teeth crush/tear food; tongue moves it; chewing (mastication)", "Salivary amylase begins starch digestion; saliva lubricates bolus", "None"],
                            ["Esophagus", "Peristalsis — rhythmic smooth muscle contractions push food down", "None", "None"],
                            ["Stomach", "Churning by smooth muscle wall; produces chyme", "Gastric juice: HCl (pH 1–2) kills bacteria, denatures protein; pepsin digests proteins", "Some water, alcohol, aspirin"],
                            ["Small Intestine", "Segmentation mixes chyme with digestive juices", "Pancreatic enzymes (amylase, lipase, proteases); bile from liver emulsifies fats; intestinal enzymes", "Main absorption site: glucose, amino acids, fatty acids, vitamins — via villi and microvilli (brush border)"],
                            ["Large Intestine", "Peristalsis; no significant mechanical digestion", "Gut bacteria ferment undigested material; produce vitamin K and some B vitamins", "Water, ions (Na⁺, Cl⁻), vitamins K and B₁₂"],
                            ["Liver", "—", "Produces bile (stored in gallbladder); detoxifies blood; produces plasma proteins; glycogen storage", "—"],
                            ["Pancreas", "—", "Secretes pancreatic juice: amylase, lipase, trypsin, chymotrypsin, bicarbonate (neutralizes stomach acid)", "—"],
                          ].map(([s, p, c, a], i) => (
                            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-rose-50/20"}>
                              <td className="border border-rose-100 px-3 py-2 font-semibold text-rose-700 text-xs">{s}</td>
                              <td className="border border-rose-100 px-3 py-2 text-muted-foreground text-xs">{p}</td>
                              <td className="border border-rose-100 px-3 py-2 text-muted-foreground text-xs">{c}</td>
                              <td className="border border-rose-100 px-3 py-2 text-muted-foreground text-xs">{a}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeUp}>
                <Card className="border-l-4 border-l-rose-500">
                  <CardContent className="p-6">
                    <h3 className="font-serif font-bold text-lg mb-4 text-rose-800">Macromolecule Digestion Summary</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr className="bg-rose-50">
                            <th className="border border-rose-200 px-3 py-2 text-left font-bold text-rose-800">Macromolecule</th>
                            <th className="border border-rose-200 px-3 py-2 text-left font-bold text-rose-800">Enzymes</th>
                            <th className="border border-rose-200 px-3 py-2 text-left font-bold text-rose-800">Location</th>
                            <th className="border border-rose-200 px-3 py-2 text-left font-bold text-rose-800">End Products Absorbed</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            ["Carbohydrates (starch)", "Salivary amylase (mouth), pancreatic amylase (SI), maltase/sucrase/lactase (SI brush border)", "Mouth → Small intestine", "Monosaccharides (glucose, fructose, galactose)"],
                            ["Proteins", "Pepsin (stomach, pH 2), trypsin + chymotrypsin (SI, from pancreas), peptidases (SI brush border)", "Stomach → Small intestine", "Amino acids"],
                            ["Lipids (fats)", "Lingual lipase (mouth, minor), pancreatic lipase (SI); bile salts emulsify fat droplets", "Small intestine (mainly)", "Fatty acids + glycerol (form micelles for absorption into lacteals)"],
                            ["Nucleic Acids", "Nucleases from pancreas", "Small intestine", "Nucleotides → nucleosides → nitrogenous bases + sugars + phosphates"],
                          ].map(([mol, enz, loc, prod], i) => (
                            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-rose-50/20"}>
                              <td className="border border-rose-100 px-3 py-2 font-semibold text-rose-700">{mol}</td>
                              <td className="border border-rose-100 px-3 py-2 text-muted-foreground text-xs">{enz}</td>
                              <td className="border border-rose-100 px-3 py-2 text-muted-foreground text-xs">{loc}</td>
                              <td className="border border-rose-100 px-3 py-2 text-muted-foreground text-xs font-semibold">{prod}</td>
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

          {/* Section 2: Enzyme Action & Inhibition */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <span className="bg-rose-600 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">Section 2</span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">Enzyme Action &amp; Inhibition</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="space-y-6">
              <motion.div variants={fadeUp}>
                <Card className="border-l-4 border-l-violet-500">
                  <CardContent className="p-6">
                    <h3 className="font-serif font-bold text-lg mb-4 text-violet-800">How Enzymes Work</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <ul className="text-sm text-muted-foreground space-y-2 leading-relaxed">
                          <li><strong>Active site:</strong> Specific region on enzyme where substrate binds; complementary shape to substrate (like a lock and key)</li>
                          <li><strong>Induced fit model:</strong> Enzyme changes shape slightly when substrate binds — more accurate than lock and key</li>
                          <li><strong>Enzyme-substrate complex:</strong> Formed when substrate enters active site; lowers activation energy</li>
                          <li><strong>Catalytic cycle:</strong> After reaction, products leave; enzyme is unchanged and can be reused</li>
                          <li><strong>Specificity:</strong> Each enzyme acts on specific substrate(s) — determined by active site shape</li>
                        </ul>
                      </div>
                      <div className="bg-violet-50 border border-violet-200 rounded-xl p-4">
                        <p className="text-xs font-bold text-violet-800 mb-2">Factors Affecting Enzyme Activity</p>
                        <div className="space-y-2 text-xs">
                          {[
                            ["Temperature", "Rate increases to optimum (~37°C human), then drops sharply as enzyme denatures (shape changes irreversibly)"],
                            ["pH", "Each enzyme has an optimal pH; extremes alter ionization of active site amino acids → denaturation. Pepsin: pH 2; trypsin: pH 8"],
                            ["Substrate concentration", "Rate increases until all enzyme active sites are occupied (saturation point); then rate plateaus"],
                            ["Enzyme concentration", "More enzyme molecules → more active sites available → higher rate (if substrate is not limiting)"],
                          ].map(([f, d]) => (
                            <div key={f}>
                              <span className="font-bold text-violet-700">{f}: </span>
                              <span className="text-muted-foreground">{d}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        { type: "Competitive Inhibition", color: "blue", desc: "Inhibitor molecule is similar in shape to substrate. Competes with substrate for the active site. Effect can be overcome by adding more substrate (increase substrate concentration = less inhibition). Active site is blocked but NOT permanently altered.", example: "Statins (cholesterol drugs) block the active site of HMG-CoA reductase" },
                        { type: "Non-Competitive Inhibition", color: "amber", desc: "Inhibitor binds to an allosteric site (different site from active site). Changes the shape of the active site so substrate can no longer bind properly. Adding more substrate does NOT overcome inhibition — because the active site shape itself is altered.", example: "Many metabolic poisons; nerve agents bind to allosteric sites of acetylcholinesterase" },
                        { type: "Irreversible Inhibition", color: "red", desc: "Inhibitor permanently binds to the enzyme (often covalently), permanently disabling it. No amount of substrate can restore activity. The enzyme must be replaced by the cell.", example: "Aspirin permanently inhibits COX enzymes (prostaglandin synthesis); sarin gas permanently inhibits acetylcholinesterase" },
                      ].map((inh) => (
                        <div key={inh.type} className={`bg-${inh.color}-50 border border-${inh.color}-200 rounded-xl p-4`}>
                          <p className={`font-bold text-${inh.color}-800 text-sm mb-2`}>{inh.type}</p>
                          <p className="text-xs text-muted-foreground leading-relaxed mb-2">{inh.desc}</p>
                          <p className={`text-xs text-${inh.color}-700 font-semibold italic`}>Example: {inh.example}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </section>

          {/* Section 3: Respiratory System */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <span className="bg-rose-600 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">Section 3</span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">Respiratory System</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="space-y-6">
              <motion.div variants={fadeUp}>
                <Card className="border-l-4 border-l-sky-500">
                  <CardContent className="p-6">
                    <h3 className="font-serif font-bold text-lg mb-4 text-sky-800">Structures &amp; Functions</h3>
                    <div className="overflow-x-auto mb-4">
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr className="bg-sky-50">
                            <th className="border border-sky-200 px-3 py-2 text-left font-bold text-sky-800">Structure</th>
                            <th className="border border-sky-200 px-3 py-2 text-left font-bold text-sky-800">Function</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            ["Nasal cavity / Mouth", "Warms, moistens, and filters incoming air; mucus traps particles; cilia sweep debris toward throat"],
                            ["Pharynx", "Common passageway for air and food; epiglottis covers glottis during swallowing to prevent aspiration"],
                            ["Larynx (voice box)", "Contains vocal cords; produces sound through vibration; connects pharynx to trachea"],
                            ["Trachea (windpipe)", "Reinforced by C-shaped cartilage rings to prevent collapse; lined with ciliated mucous membrane"],
                            ["Bronchi / Bronchioles", "Trachea divides into two bronchi (one per lung); bronchi → bronchioles → alveolar ducts; smooth muscle in bronchioles allows diameter regulation"],
                            ["Alveoli", "Tiny air sacs (300 million per lung); 1-cell thick walls; surrounded by capillaries — site of gas exchange; extremely large total surface area (~70 m²)"],
                            ["Diaphragm", "Dome-shaped muscle below lungs; contracts to increase thoracic volume → air rushes in (inhalation); relaxes → thoracic volume decreases → air pushed out"],
                            ["Pleural membranes", "Double membrane surrounding each lung; fluid between membranes reduces friction and maintains negative pressure for lung expansion"],
                          ].map(([s, f], i) => (
                            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-sky-50/20"}>
                              <td className="border border-sky-100 px-3 py-2 font-semibold text-sky-700 text-sm">{s}</td>
                              <td className="border border-sky-100 px-3 py-2 text-muted-foreground text-xs leading-relaxed">{f}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-sky-50 border border-sky-200 rounded-xl p-4">
                        <p className="text-xs font-bold text-sky-800 mb-2">Gas Exchange at Alveoli</p>
                        <p className="text-xs text-sky-900 leading-relaxed">Gas exchange occurs by <strong>diffusion</strong> along concentration gradients. O₂ diffuses from alveolar air (high pO₂) → blood in pulmonary capillaries (low pO₂). CO₂ diffuses from blood (high pCO₂) → alveolar air (low pCO₂). Gases transported as: O₂ bound to hemoglobin (HbO₂), CO₂ mainly as bicarbonate ions (HCO₃⁻) in plasma.</p>
                      </div>
                      <div className="bg-sky-50 border border-sky-200 rounded-xl p-4">
                        <p className="text-xs font-bold text-sky-800 mb-2">Breathing Mechanics</p>
                        <p className="text-xs text-sky-900 leading-relaxed">
                          <strong>Inhalation (active):</strong> Diaphragm contracts (moves down) + external intercostals contract (ribs rise) → thoracic volume increases → lung pressure drops below atmospheric → air flows in.<br /><br />
                          <strong>Exhalation (passive at rest):</strong> Diaphragm and intercostals relax → thoracic volume decreases → lung pressure rises above atmospheric → air flows out. During exercise, internal intercostals and abdominal muscles actively assist exhalation.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </section>

          {/* Section 4: Circulatory System */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <span className="bg-rose-600 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">Section 4</span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">Circulatory System</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="space-y-6">
              <motion.div variants={fadeUp}>
                <Card className="border-l-4 border-l-red-500">
                  <CardContent className="p-6">
                    <h3 className="font-serif font-bold text-lg mb-4 text-red-800">Heart Structure &amp; Blood Flow</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-red-700 mb-3">Heart Chambers &amp; Valves</p>
                        <div className="space-y-2 text-xs text-muted-foreground">
                          {[
                            ["Right Atrium", "Receives deoxygenated blood from body via superior/inferior vena cava"],
                            ["Right Ventricle", "Pumps deoxygenated blood to lungs via pulmonary artery"],
                            ["Left Atrium", "Receives oxygenated blood from lungs via pulmonary veins"],
                            ["Left Ventricle", "Pumps oxygenated blood to body via aorta; has thickest walls (high pressure)"],
                            ["AV Valves (tricuspid, mitral)", "Between atria and ventricles; prevent backflow into atria during ventricular contraction"],
                            ["Semilunar Valves (aortic, pulmonary)", "Between ventricles and arteries; prevent backflow into ventricles"],
                          ].map(([part, func]) => (
                            <div key={part}><span className="font-bold text-red-700">{part}: </span>{func}</div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                        <p className="text-xs font-bold text-red-800 mb-2">Two Circulation Circuits</p>
                        <div className="space-y-3 text-xs">
                          <div className="bg-white border rounded p-2">
                            <p className="font-bold text-blue-700 mb-1">Pulmonary Circuit</p>
                            <p className="text-muted-foreground font-mono text-xs">Right ventricle → pulmonary arteries → lungs (gas exchange) → pulmonary veins → left atrium</p>
                            <p className="text-muted-foreground mt-1">Blood picks up O₂, releases CO₂ at alveoli</p>
                          </div>
                          <div className="bg-white border rounded p-2">
                            <p className="font-bold text-red-700 mb-1">Systemic Circuit</p>
                            <p className="text-muted-foreground font-mono text-xs">Left ventricle → aorta → arteries → arterioles → capillaries (body tissues) → venules → veins → vena cava → right atrium</p>
                            <p className="text-muted-foreground mt-1">Delivers O₂/nutrients; picks up CO₂/wastes</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr className="bg-red-50">
                            <th className="border border-red-200 px-3 py-2 text-left font-bold text-red-800">Vessel Type</th>
                            <th className="border border-red-200 px-3 py-2 text-left font-bold text-red-800">Structure</th>
                            <th className="border border-red-200 px-3 py-2 text-left font-bold text-red-800">Function</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            ["Arteries", "Thick walls with elastic fibres + smooth muscle; no valves; carry blood away from heart", "Withstand high pressure; elastic recoil maintains blood flow between heartbeats"],
                            ["Arterioles", "Smaller diameter; significant smooth muscle; innervated", "Regulate blood flow to capillary beds by vasoconstriction/vasodilation; major control of blood pressure"],
                            ["Capillaries", "1-cell thick endothelium only; no muscle layer; smallest vessels; form capillary beds", "Gas, nutrient, and waste exchange between blood and tissues"],
                            ["Venules", "Small thin-walled vessels collecting from capillaries", "Drain capillary beds; join to form veins"],
                            ["Veins", "Thin walls; low pressure; have valves; carry blood toward heart", "Return blood to heart; skeletal muscle contractions assist flow; valves prevent backflow"],
                          ].map(([v, s, f], i) => (
                            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-red-50/20"}>
                              <td className="border border-red-100 px-3 py-2 font-semibold text-red-700">{v}</td>
                              <td className="border border-red-100 px-3 py-2 text-muted-foreground text-xs">{s}</td>
                              <td className="border border-red-100 px-3 py-2 text-muted-foreground text-xs">{f}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeUp}>
                <Card className="border-l-4 border-l-red-500">
                  <CardContent className="p-6">
                    <h3 className="font-serif font-bold text-lg mb-4 text-red-800">Blood Composition &amp; Blood Groups</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-red-700 mb-3">Blood Components (~5L total)</p>
                        <div className="space-y-2 text-xs">
                          {[
                            { comp: "Plasma (55%)", desc: "Water (90%), dissolved proteins (albumin, fibrinogen, antibodies), glucose, hormones, CO₂ (as HCO₃⁻), ions, wastes" },
                            { comp: "Red Blood Cells / Erythrocytes (44%)", desc: "Biconcave discs; no nucleus at maturity; contain hemoglobin; carry O₂ as oxyhemoglobin; lifespan ~120 days; made in red bone marrow" },
                            { comp: "White Blood Cells / Leukocytes (<1%)", desc: "Neutrophils (phagocytosis), lymphocytes (B cells make antibodies; T cells attack pathogens directly), monocytes, eosinophils, basophils" },
                            { comp: "Platelets / Thrombocytes (<1%)", desc: "Cell fragments; initiate blood clotting; release clotting factors when vessel damaged" },
                          ].map((c) => (
                            <div key={c.comp} className="bg-muted/30 border rounded p-2">
                              <p className="font-bold text-red-700">{c.comp}</p>
                              <p className="text-muted-foreground mt-0.5">{c.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-red-700 mb-3">ABO Blood Group System</p>
                        <div className="overflow-x-auto mb-3">
                          <table className="w-full text-xs border-collapse">
                            <thead>
                              <tr className="bg-red-50">
                                <th className="border border-red-200 px-2 py-1.5 font-bold">Blood Type</th>
                                <th className="border border-red-200 px-2 py-1.5 font-bold">Antigen on RBC</th>
                                <th className="border border-red-200 px-2 py-1.5 font-bold">Antibody in Plasma</th>
                                <th className="border border-red-200 px-2 py-1.5 font-bold">Can Receive</th>
                              </tr>
                            </thead>
                            <tbody>
                              {[
                                ["A", "A", "Anti-B", "A, O"],
                                ["B", "B", "Anti-A", "B, O"],
                                ["AB (Universal Recipient)", "A and B", "Neither", "A, B, AB, O"],
                                ["O (Universal Donor)", "Neither", "Anti-A and Anti-B", "O only"],
                              ].map(([bt, ag, ab, rec], i) => (
                                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-red-50/20"}>
                                  <td className="border border-red-100 px-2 py-1.5 font-bold text-red-700">{bt}</td>
                                  <td className="border border-red-100 px-2 py-1.5">{ag}</td>
                                  <td className="border border-red-100 px-2 py-1.5">{ab}</td>
                                  <td className="border border-red-100 px-2 py-1.5">{rec}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                          <p className="text-xs font-bold text-amber-800 mb-1">Rh Factor &amp; Hemolytic Disease</p>
                          <p className="text-xs text-amber-900 leading-relaxed">Rh⁺ = has Rh antigen on RBCs; Rh⁻ = lacks it. If Rh⁻ mother carries Rh⁺ fetus: during birth, fetal blood enters mother → mother makes anti-Rh antibodies. In subsequent Rh⁺ pregnancies, these antibodies cross placenta → attack fetal RBCs → hemolytic disease of the newborn (erythroblastosis fetalis). Prevented by RhoGAM injection (anti-D immunoglobulin) given to Rh⁻ mothers after delivery.</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </section>

          {/* Section 5: Immune System */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <span className="bg-rose-600 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">Section 5</span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">Immune System</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Card className="border-l-4 border-l-emerald-500">
                <CardContent className="p-6">
                  <h3 className="font-serif font-bold text-lg mb-4 text-emerald-800">Three Lines of Defence</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      {
                        line: "1st Line — Non-specific External Barriers",
                        color: "emerald",
                        components: ["Skin (intact): physical barrier; sweat contains lysozyme and lactic acid (antibacterial)", "Mucous membranes lining respiratory, digestive, urinary tracts", "Mucus traps pathogens; cilia sweep them out", "Stomach acid (pH 1–2) kills most ingested pathogens", "Normal microbiome competes with pathogens (e.g., gut bacteria)"],
                      },
                      {
                        line: "2nd Line — Non-specific Internal Defences",
                        color: "blue",
                        components: ["Phagocytosis: neutrophils and macrophages engulf and destroy pathogens", "Inflammation: damaged cells release histamine → vasodilation → redness, heat, swelling, pain; brings immune cells to site", "Fever: elevated body temperature inhibits pathogen growth; enhances enzyme activity of immune cells", "Natural Killer (NK) cells: destroy virus-infected and cancerous cells", "Interferons: proteins released by virus-infected cells to warn neighboring cells", "Complement proteins: tag pathogens for destruction, punch holes in pathogen membranes"],
                      },
                      {
                        line: "3rd Line — Specific (Adaptive) Immunity",
                        color: "violet",
                        components: ["Lymphocytes are specific — each recognizes one antigen", "B lymphocytes: produce antibodies (immunoglobulins) specific to one antigen; differentiate into plasma cells (antibody factories) and memory B cells", "T lymphocytes: Helper T cells activate B cells and cytotoxic T cells; Cytotoxic T cells directly kill infected or cancerous cells", "Memory cells: persist after infection; allow rapid response to future exposure (immunological memory — basis of vaccination)", "Active immunity: from infection or vaccination; long-lasting", "Passive immunity: antibodies received (e.g., breast milk, injection); short-lasting"],
                      },
                    ].map((l) => (
                      <div key={l.line} className={`bg-${l.color}-50 border border-${l.color}-200 rounded-xl p-4`}>
                        <p className={`font-bold text-${l.color}-800 text-sm mb-3`}>{l.line}</p>
                        <ul className="space-y-1">
                          {l.components.map((c) => (
                            <li key={c} className={`text-xs text-${l.color}-900 flex items-start gap-1`}>
                              <span className="mt-0.5 shrink-0">•</span><span>{c}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </section>

          {/* Section 6: Excretory System */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <span className="bg-rose-600 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">Section 6</span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">Excretory System</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="space-y-6">
              <motion.div variants={fadeUp}>
                <Card className="border-l-4 border-l-amber-500">
                  <CardContent className="p-6">
                    <h3 className="font-serif font-bold text-lg mb-4 text-amber-800">Excretory Organs &amp; Metabolic Wastes</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-2">Metabolic Waste Products</p>
                        <div className="space-y-2 text-xs">
                          {[
                            { waste: "Urea", source: "Amino acid catabolism: liver converts NH₃ (toxic) → urea (less toxic); excreted by kidneys in urine" },
                            { waste: "CO₂", source: "Cellular respiration; excreted by lungs" },
                            { waste: "Uric acid", source: "Nucleic acid catabolism; excreted in urine" },
                            { waste: "Water", source: "Metabolic water produced; excreted via kidneys, lungs, skin" },
                            { waste: "Bile pigments (bilirubin)", source: "Hemoglobin breakdown; excreted in feces via bile" },
                            { waste: "Salts & ions", source: "Excess Na⁺, K⁺, Cl⁻ — excreted by kidneys and in sweat" },
                          ].map((w) => (
                            <div key={w.waste} className="flex gap-2">
                              <span className="font-bold text-amber-700 shrink-0">{w.waste}:</span>
                              <span className="text-muted-foreground">{w.source}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-2">Excretory Organs</p>
                        <div className="space-y-2 text-xs">
                          {[
                            ["Kidneys (main)", "Filter blood; produce urine; regulate water, ion balance, and blood pH"],
                            ["Lungs", "Excrete CO₂ and water vapour"],
                            ["Skin (sweat glands)", "Excrete water, NaCl, small amounts of urea — thermoregulation also"],
                            ["Liver", "Converts toxic NH₃ to urea (not an excretion organ but performs detoxification)"],
                          ].map(([org, func]) => (
                            <div key={org} className="bg-amber-50 border border-amber-100 rounded p-2">
                              <span className="font-bold text-amber-700">{org}: </span>
                              <span className="text-muted-foreground">{func}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <Card className="border border-amber-200 bg-amber-50/40">
                      <CardContent className="p-4">
                        <h4 className="font-bold text-sm text-amber-800 mb-3">Nephron Structure &amp; Urine Formation</h4>
                        <div className="overflow-x-auto">
                          <table className="w-full text-xs border-collapse">
                            <thead>
                              <tr className="bg-amber-100">
                                <th className="border border-amber-200 px-2 py-1.5 text-left font-bold">Nephron Region</th>
                                <th className="border border-amber-200 px-2 py-1.5 text-left font-bold">Process</th>
                                <th className="border border-amber-200 px-2 py-1.5 text-left font-bold">What Moves</th>
                              </tr>
                            </thead>
                            <tbody>
                              {[
                                ["Glomerulus / Bowman's Capsule", "Pressure filtration (non-selective)", "Water, glucose, amino acids, urea, ions, small molecules filtered from blood into tubule (proteins and cells stay in blood)"],
                                ["Proximal Convoluted Tubule (PCT)", "Reabsorption (active + passive)", "Glucose (all), amino acids (all), Na⁺, Cl⁻, water, bicarbonate reabsorbed into peritubular capillaries"],
                                ["Loop of Henle (descending)", "Water reabsorption", "Water exits by osmosis into hyperosmotic medulla; tubule fluid becomes concentrated"],
                                ["Loop of Henle (ascending)", "Ion reabsorption (no water)", "Na⁺ and Cl⁻ pumped out; tubule is impermeable to water; fluid becomes dilute"],
                                ["Distal Convoluted Tubule (DCT)", "Selective reabsorption + secretion", "Na⁺ reabsorption (aldosterone), K⁺ and H⁺ secretion; fine-tuning of blood composition"],
                                ["Collecting Duct", "Water reabsorption (ADH-dependent)", "ADH (antidiuretic hormone) makes duct permeable to water → concentrated urine; without ADH → dilute urine"],
                              ].map(([region, proc, what], i) => (
                                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-amber-50/30"}>
                                  <td className="border border-amber-100 px-2 py-1.5 font-semibold text-amber-700">{region}</td>
                                  <td className="border border-amber-100 px-2 py-1.5 text-muted-foreground">{proc}</td>
                                  <td className="border border-amber-100 px-2 py-1.5 text-muted-foreground">{what}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div className="bg-blue-50 border border-blue-200 rounded p-3">
                            <p className="text-xs font-bold text-blue-800 mb-1">ADH (Antidiuretic Hormone)</p>
                            <p className="text-xs text-blue-900">Released by posterior pituitary when blood osmolarity rises (dehydration). Makes collecting duct permeable to water → more water reabsorbed → concentrated urine, less urine volume. Alcohol inhibits ADH → increased urine output (diuresis).</p>
                          </div>
                          <div className="bg-orange-50 border border-orange-200 rounded p-3">
                            <p className="text-xs font-bold text-orange-800 mb-1">Aldosterone</p>
                            <p className="text-xs text-orange-900">Steroid hormone from adrenal cortex. Released when blood Na⁺ is low or blood pressure drops. Increases Na⁺ reabsorption (and water follows) in DCT → raises blood pressure and volume. Part of the Renin-Angiotensin-Aldosterone System (RAAS).</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </section>

          {/* Section 7: Motor System */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <span className="bg-rose-600 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">Section 7</span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">Motor System &amp; Muscle Contraction</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="space-y-6">
              <motion.div variants={fadeUp}>
                <Card className="border-l-4 border-l-rose-500">
                  <CardContent className="p-6">
                    <h3 className="font-serif font-bold text-lg mb-4 text-rose-800">Types of Muscle Tissue</h3>
                    <div className="overflow-x-auto mb-4">
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr className="bg-rose-50">
                            <th className="border border-rose-200 px-3 py-2 text-left font-bold text-rose-800">Feature</th>
                            <th className="border border-rose-200 px-3 py-2 text-left font-bold text-rose-800">Skeletal Muscle</th>
                            <th className="border border-rose-200 px-3 py-2 text-left font-bold text-rose-800">Cardiac Muscle</th>
                            <th className="border border-rose-200 px-3 py-2 text-left font-bold text-rose-800">Smooth Muscle</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            ["Location", "Attached to bones via tendons", "Heart wall only", "Walls of hollow organs (stomach, intestine, bladder, blood vessels, uterus)"],
                            ["Control", "Voluntary (conscious control)", "Involuntary — autorhythmic (pacemaker cells); modified by autonomic NS", "Involuntary — controlled by autonomic NS and hormones"],
                            ["Striations", "Striated (banded appearance)", "Striated but shorter fibres", "Non-striated (smooth appearance)"],
                            ["Cell structure", "Long fibres; multinucleate; no intercalated discs", "Branched fibres; uninucleate; connected by intercalated discs and gap junctions", "Spindle-shaped; uninucleate; densely packed"],
                            ["Speed of contraction", "Fastest; tires quickly", "Intermediate; sustained rhythm", "Slowest; long sustained contractions"],
                            ["Fatigue", "Fatigues rapidly", "Highly resistant to fatigue (mitochondria-rich)", "Resistant to fatigue"],
                          ].map(([f, sk, ca, sm], i) => (
                            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-rose-50/20"}>
                              <td className="border border-rose-100 px-3 py-2 font-semibold text-rose-700 text-xs">{f}</td>
                              <td className="border border-rose-100 px-3 py-2 text-muted-foreground text-xs">{sk}</td>
                              <td className="border border-rose-100 px-3 py-2 text-muted-foreground text-xs">{ca}</td>
                              <td className="border border-rose-100 px-3 py-2 text-muted-foreground text-xs">{sm}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                      <h4 className="font-bold text-rose-800 mb-3">Sliding Filament Model of Muscle Contraction</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">Muscle contraction occurs when thick (myosin) and thin (actin) filaments slide past each other — the sarcomere shortens but neither filament changes length.</p>
                      <div className="space-y-2">
                        {[
                          { step: "1. Nerve impulse → motor end plate", desc: "Action potential reaches neuromuscular junction; ACh (acetylcholine) released from motor neuron → binds receptors on muscle fibre → triggers action potential in muscle" },
                          { step: "2. Ca²⁺ release from SR", desc: "Sarcoplasmic reticulum (SR) releases Ca²⁺ ions into cytoplasm (sarcoplasm)" },
                          { step: "3. Tropomyosin shifts", desc: "Ca²⁺ binds troponin on thin (actin) filament → tropomyosin shifts → exposes myosin-binding sites on actin" },
                          { step: "4. Cross-bridge formation", desc: "Myosin heads bind exposed sites on actin, forming cross-bridges (requires ATP to cock the myosin head first)" },
                          { step: "5. Power stroke", desc: "Myosin head pivots → pulls actin filament toward centre of sarcomere → sarcomere shortens → muscle contracts" },
                          { step: "6. Cross-bridge detachment (ATP)", desc: "ATP binds myosin head → cross-bridge released; ATP hydrolysis re-cocks the head → cycle repeats as long as Ca²⁺ and ATP are available" },
                          { step: "7. Relaxation", desc: "Nerve impulse stops → ACh breaks down → SR pumps Ca²⁺ back → tropomyosin covers binding sites → myosin cannot bind → muscle relaxes (ATP needed for active Ca²⁺ reuptake)" },
                        ].map((s) => (
                          <div key={s.step} className="flex gap-3 text-xs">
                            <span className="font-bold text-rose-700 shrink-0 min-w-[8rem]">{s.step}:</span>
                            <span className="text-muted-foreground leading-relaxed">{s.desc}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-3 bg-amber-50 border border-amber-200 rounded p-3">
                        <p className="text-xs font-bold text-amber-800 mb-1">ATP's Three Roles in Muscle</p>
                        <p className="text-xs text-amber-900">1. Cocks (energizes) myosin head for power stroke. 2. Detaches myosin from actin after power stroke. 3. Powers Ca²⁺ pump to reabsorb Ca²⁺ into SR (relaxation). Rigor mortis occurs after death because no ATP → cross-bridges cannot detach → muscles locked in contracted state.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
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
                ["Peristalsis", "Wave-like smooth muscle contractions that move food through the digestive tract"],
                ["Villi / Microvilli", "Finger-like projections in small intestine that vastly increase surface area for absorption"],
                ["Active site", "Specific region on enzyme where substrate binds; complementary in shape to substrate"],
                ["Competitive inhibition", "Inhibitor mimics substrate, blocks active site; reversible with more substrate"],
                ["Alveoli", "Tiny air sacs in lungs; site of gas exchange between air and blood by diffusion"],
                ["Hemoglobin", "Protein in red blood cells that binds O₂ (forms oxyhemoglobin) for transport"],
                ["Antigen", "Molecule (usually protein) on cell surface that triggers immune response"],
                ["Antibody", "Protein produced by B cells; specific to one antigen; marks pathogens for destruction"],
                ["Nephron", "Functional unit of the kidney; filters blood and produces urine through filtration, reabsorption, secretion"],
                ["ADH", "Antidiuretic hormone; promotes water reabsorption in collecting duct; concentrates urine"],
                ["Sarcomere", "Basic unit of muscle contraction; region between two Z-lines containing actin and myosin"],
                ["Sliding Filament", "Model explaining muscle contraction: actin filaments slide over myosin — sarcomere shortens"],
              ].map(([term, def], i) => (
                <motion.div key={i} variants={fadeUp} className="bg-muted/40 border rounded-lg p-3">
                  <p className="text-xs font-bold text-rose-700 mb-1">{term}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{def}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          <UnitCompleteToggle unitId="biology-20-unit-d" />

          {/* Other Units Nav */}
          <section className="border-t pt-10">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Continue Exploring Biology 20</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "Unit A", title: "Energy & Matter Exchange in the Biosphere", href: "/resources/biology-20/unit-a" },
                { label: "Unit B", title: "Ecosystems & Population Change", href: "/resources/biology-20/unit-b" },
                { label: "Unit C", title: "Photosynthesis & Cellular Respiration", href: "/resources/biology-20/unit-c" },
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
