import { Link } from "wouter";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ChevronRight, FlaskConical, Zap, Leaf, Globe } from "lucide-react";
import { UnitCompleteToggle } from "@/components/UnitCompleteToggle";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };

const unitNav = [
  { label: "Unit A: Chemistry", href: "/resources/science-10/unit-a", icon: <FlaskConical className="w-4 h-4" />, active: true },
  { label: "Unit B: Physics", href: "/resources/science-10/unit-b", icon: <Zap className="w-4 h-4" /> },
  { label: "Unit C: Biology", href: "/resources/science-10/unit-c", icon: <Leaf className="w-4 h-4" /> },
  { label: "Unit D: Biosphere", href: "/resources/science-10/unit-d", icon: <Globe className="w-4 h-4" /> },
];

const atomicModels = [
  { scientist: "Dalton", year: "1803", model: "Solid sphere (\"billiard ball\")", evidence: "Law of definite and multiple proportions" },
  { scientist: "Thomson", year: "1897", model: "\"Plum pudding\" — electrons embedded in positive mass", evidence: "Discovery of the electron via cathode ray tube" },
  { scientist: "Rutherford", year: "1911", model: "Nuclear model — dense positive nucleus, electrons orbit far away", evidence: "Gold foil experiment (alpha particle scattering)" },
  { scientist: "Bohr", year: "1913", model: "Planetary model — electrons in fixed energy levels/shells", evidence: "Hydrogen emission spectrum" },
  { scientist: "Modern (Quantum)", year: "1926+", model: "Electron cloud/orbital model", evidence: "Wave mechanics, Schrödinger equation" },
];

const particles = [
  { name: "Proton", symbol: "p⁺", charge: "+1", location: "Nucleus", mass: "1" },
  { name: "Neutron", symbol: "n⁰", charge: "0", location: "Nucleus", mass: "1" },
  { name: "Electron", symbol: "e⁻", charge: "−1", location: "Electron shells", mass: "1/1836" },
];

const periodicGroups = [
  { group: "Group 1: Alkali Metals", traits: "Highly reactive metals. 1 valence electron.", charge: "+1" },
  { group: "Group 2: Alkaline Earth Metals", traits: "Reactive metals. 2 valence electrons.", charge: "+2" },
  { group: "Groups 3–12: Transition Metals", traits: "Complex electron arrangements, multivalent.", charge: "Variable (+2, +3)" },
  { group: "Group 17: Halogens", traits: "Highly reactive non-metals. 7 valence electrons.", charge: "−1" },
  { group: "Group 18: Noble Gases", traits: "Unreactive, stable. Full valence shell (8 electrons).", charge: "0" },
];

const reactionTypes = [
  { type: "Synthesis", pattern: "A + B → AB", example: "2Na + Cl₂ → 2NaCl", desc: "Two or more substances combine to form one new product." },
  { type: "Decomposition", pattern: "AB → A + B", example: "2H₂O → 2H₂ + O₂", desc: "One compound breaks apart into two or more simpler substances." },
  { type: "Single Displacement", pattern: "A + BC → AC + B", example: "Zn + 2HCl → ZnCl₂ + H₂", desc: "One element displaces another in a compound. Requires activity series." },
  { type: "Double Displacement", pattern: "AB + CD → AD + CB", example: "NaCl + AgNO₃ → AgCl + NaNO₃", desc: "Two compounds exchange ions, often producing a precipitate or water." },
  { type: "Combustion", pattern: "Fuel + O₂ → CO₂ + H₂O", example: "CH₄ + 2O₂ → CO₂ + 2H₂O", desc: "A hydrocarbon fuel reacts with oxygen to release energy. Complete combustion produces CO₂ and H₂O." },
];

export default function Science10UnitA() {
  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-muted/40 border-b">
        <div className="container mx-auto px-4 md:px-6 py-3 flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
          <Link href="/resources" className="hover:text-primary transition-colors flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" />Resources
          </Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/resources/science-10" className="hover:text-primary transition-colors">Science 10</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground font-medium">Unit A: Chemistry</span>
        </div>
      </div>

      {/* Unit Nav */}
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

      {/* Hero */}
      <section className="relative bg-secondary overflow-hidden py-16 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(var(--primary)/0.15),transparent_60%)]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="inline-block bg-primary/20 text-primary-foreground/80 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">Alberta Science 10</span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-secondary-foreground mb-4 leading-tight">Unit A: Energy & Matter in Chemical Change</h1>
            <p className="text-secondary-foreground/75 text-lg leading-relaxed mb-8 max-w-2xl">
              How has knowledge of the structure of matter led to scientific advancements? How do elements combine, and how can we classify, predict, and quantify the products of chemical change?
            </p>
            <div className="flex flex-wrap gap-2">
              {["IUPAC Nomenclature", "Atomic Models", "Chemical Reactions", "Conservation of Mass", "Mole Concept", "WHMIS Safety"].map((t) => (
                <span key={t} className="text-xs font-semibold px-3 py-1 rounded-full bg-secondary-foreground/10 text-secondary-foreground/80 border border-secondary-foreground/15">{t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="py-14 md:py-18 bg-background">
        <div className="container mx-auto px-4 md:px-6 space-y-16">

          {/* Program Outcomes */}
          <motion.section variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl md:text-3xl font-serif font-bold whitespace-nowrap">Program Outcomes</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="space-y-3">
              {[
                { num: "Outcome 1", text: "Describe the basic particles that make up matter; evidence-based development of the atomic model (Dalton, Thomson, Rutherford, Bohr); chemistry-based careers." },
                { num: "Outcome 2", text: "Explain using the periodic table how elements combine; IUPAC naming of ionic/molecular compounds and acids; WHMIS; solubility; molecular structure and properties." },
                { num: "Outcome 3", text: "Identify and classify chemical changes; write balanced chemical equations; Lavoisier's law of conservation of mass; mole concept; Avogadro's number (6.02 × 10²³)." },
              ].map((o, i) => (
                <motion.div key={i} variants={fadeUp} className="flex gap-3 p-4 rounded-xl bg-muted/40 border border-l-4 border-l-primary">
                  <span className="font-bold text-primary text-sm shrink-0 mt-0.5">{o.num}:</span>
                  <p className="text-sm text-foreground/80 leading-relaxed">{o.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Atomic Theory */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg shrink-0">2</div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold">Atomic Theory</h2>
              <div className="flex-1 h-px bg-border" />
            </div>

            <Card className="mb-6 overflow-hidden shadow-sm">
              <div className="bg-muted/50 px-5 py-3 border-b font-bold text-sm">History of the Atomic Model</div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-secondary text-secondary-foreground">
                      <th className="text-left px-4 py-3 font-semibold">Scientist</th>
                      <th className="text-left px-4 py-3 font-semibold">Year</th>
                      <th className="text-left px-4 py-3 font-semibold">Model</th>
                      <th className="text-left px-4 py-3 font-semibold">Evidence</th>
                    </tr>
                  </thead>
                  <tbody>
                    {atomicModels.map((row, i) => (
                      <tr key={i} className="border-t hover:bg-muted/30 transition-colors">
                        <td className="px-4 py-3 font-semibold">{row.scientist}</td>
                        <td className="px-4 py-3 text-muted-foreground font-mono">{row.year}</td>
                        <td className="px-4 py-3">{row.model}</td>
                        <td className="px-4 py-3 text-muted-foreground">{row.evidence}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-sm overflow-hidden">
                <div className="bg-muted/50 px-5 py-3 border-b font-bold text-sm">Subatomic Particles</div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-muted/30">
                        <th className="text-left px-4 py-2 font-semibold text-muted-foreground">Particle</th>
                        <th className="text-left px-4 py-2 font-semibold text-muted-foreground">Symbol</th>
                        <th className="text-left px-4 py-2 font-semibold text-muted-foreground">Charge</th>
                        <th className="text-left px-4 py-2 font-semibold text-muted-foreground">Location</th>
                        <th className="text-left px-4 py-2 font-semibold text-muted-foreground">Rel. Mass</th>
                      </tr>
                    </thead>
                    <tbody>
                      {particles.map((p, i) => (
                        <tr key={i} className="border-t">
                          <td className="px-4 py-3 font-semibold">{p.name}</td>
                          <td className="px-4 py-3 font-mono">{p.symbol}</td>
                          <td className={`px-4 py-3 font-bold ${p.charge.includes("+") ? "text-emerald-600" : p.charge === "0" ? "text-muted-foreground" : "text-red-600"}`}>{p.charge}</td>
                          <td className="px-4 py-3 text-muted-foreground">{p.location}</td>
                          <td className="px-4 py-3 font-mono text-muted-foreground">{p.mass}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>

              <div className="space-y-4">
                <Card className="border-l-4 border-l-primary shadow-sm">
                  <CardContent className="p-5">
                    <h3 className="font-serif font-bold mb-3">Atomic Number, Mass Number & Isotopes</h3>
                    <div className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                      <p><strong className="text-foreground">Atomic Number (Z):</strong> Number of protons — defines the element.</p>
                      <p><strong className="text-foreground">Mass Number (A):</strong> Total protons + neutrons in the nucleus.</p>
                      <p><strong className="text-foreground">Isotopes:</strong> Same element (same protons), different neutrons.</p>
                      <div className="mt-3 bg-muted/40 rounded-lg p-3 border">
                        <p className="font-semibold text-foreground text-xs uppercase tracking-wide mb-2">Example: Carbon Isotopes</p>
                        <p>Carbon-12: 6p, 6n (mass = 12)</p>
                        <p>Carbon-14: 6p, 8n (mass = 14)</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-amber-50 border-amber-200 shadow-sm">
                  <CardContent className="p-5">
                    <h3 className="font-bold text-amber-900 mb-2 text-sm">Bohr Diagram Rules</h3>
                    <ul className="text-sm text-amber-800 space-y-1 list-disc list-inside leading-relaxed">
                      <li>Nucleus holds protons and neutrons in the centre</li>
                      <li>Electrons fill shells from lowest energy first</li>
                      <li><strong>Shell 1:</strong> max 2 electrons</li>
                      <li><strong>Shell 2:</strong> max 8 electrons</li>
                      <li><strong>Shell 3:</strong> max 8 electrons</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Periodic Table & Compounds */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-amber-600 flex items-center justify-center text-white font-bold text-lg shrink-0">3</div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold">Periodic Table & Compounds</h2>
              <div className="flex-1 h-px bg-border" />
            </div>

            <Card className="mb-6 shadow-sm overflow-hidden">
              <div className="bg-muted/50 px-5 py-3 border-b font-bold text-sm">Periodic Table Groups and Trends</div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-secondary text-secondary-foreground">
                      <th className="text-left px-4 py-3 font-semibold">Group / Category</th>
                      <th className="text-left px-4 py-3 font-semibold">Characteristics & Valence Electrons</th>
                      <th className="text-left px-4 py-3 font-semibold">Typical Ion Charge</th>
                    </tr>
                  </thead>
                  <tbody>
                    {periodicGroups.map((g, i) => (
                      <tr key={i} className="border-t hover:bg-muted/30 transition-colors">
                        <td className="px-4 py-3 font-semibold">{g.group}</td>
                        <td className="px-4 py-3 text-muted-foreground">{g.traits}</td>
                        <td className="px-4 py-3 font-mono font-bold text-center">{g.charge}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-blue-500 shadow-sm">
                <div className="bg-muted/50 px-5 py-3 border-b font-bold text-sm">IUPAC Naming — Ionic Compounds (Metal + Non-metal)</div>
                <CardContent className="p-5">
                  <p className="text-sm text-muted-foreground mb-2">Name = metal name + non-metal name (ending changed to <strong className="text-foreground">-ide</strong>). Use Roman numerals for variable-charge metals.</p>
                  <div className="bg-muted/40 rounded-lg p-3 font-mono text-sm border space-y-1">
                    <p>NaCl = sodium chloride</p>
                    <p>FeCl₂ = iron(II) chloride</p>
                    <p>FeCl₃ = iron(III) chloride</p>
                    <p>CaCO₃ = calcium carbonate</p>
                    <p>Al₂(SO₄)₃ = aluminum sulfate</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-emerald-500 shadow-sm">
                <div className="bg-muted/50 px-5 py-3 border-b font-bold text-sm">IUPAC Naming — Molecular Compounds (Non-metal + Non-metal)</div>
                <CardContent className="p-5">
                  <p className="text-sm text-muted-foreground mb-2">Use Greek prefixes: <strong className="text-foreground">mono, di, tri, tetra, penta, hexa, hepta, octa, nona, deca</strong>. Second element always gets a prefix and ends in <strong className="text-foreground">-ide</strong>.</p>
                  <div className="bg-muted/40 rounded-lg p-3 font-mono text-sm border space-y-1">
                    <p>CO = carbon monoxide</p>
                    <p>CO₂ = carbon dioxide</p>
                    <p>N₂O₄ = dinitrogen tetroxide</p>
                    <p>PCl₅ = phosphorus pentachloride</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Chemical Reactions */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-teal-700 flex items-center justify-center text-white font-bold text-lg shrink-0">4</div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold">Chemical Reactions & Conservation of Mass</h2>
              <div className="flex-1 h-px bg-border" />
            </div>

            <Card className="mb-6 bg-amber-50 border-amber-200 shadow-sm">
              <CardContent className="p-5">
                <h3 className="font-bold text-amber-900 mb-2">Lavoisier's Law of Conservation of Mass</h3>
                <p className="text-sm text-amber-800 leading-relaxed">In any chemical reaction, the total mass of the reactants equals the total mass of the products. Matter is neither created nor destroyed — only rearranged. This is why chemical equations must be balanced.</p>
              </CardContent>
            </Card>

            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {reactionTypes.map((r, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <Card className="h-full shadow-sm">
                    <CardContent className="p-5">
                      <h4 className="font-bold text-primary mb-1">{r.type}</h4>
                      <div className="font-mono text-sm bg-muted/40 rounded px-2 py-1 mb-2 text-center">{r.pattern}</div>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-2">{r.desc}</p>
                      <div className="font-mono text-xs bg-secondary/30 rounded px-2 py-1 text-secondary-foreground/80">{r.example}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Mole Concept */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-violet-700 flex items-center justify-center text-white font-bold text-lg shrink-0">5</div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold">The Mole Concept</h2>
              <div className="flex-1 h-px bg-border" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <Card className="shadow-sm">
                  <CardContent className="p-5">
                    <h3 className="font-serif font-bold mb-3">Key Definitions</h3>
                    <div className="space-y-3 text-sm">
                      <div className="p-3 bg-muted/40 rounded-lg border">
                        <p className="font-bold text-foreground">Avogadro's Number</p>
                        <p className="text-muted-foreground">1 mol = <span className="font-mono font-bold text-primary">6.02 × 10²³</span> particles (atoms, molecules, or formula units)</p>
                      </div>
                      <div className="p-3 bg-muted/40 rounded-lg border">
                        <p className="font-bold text-foreground">Molar Mass (M)</p>
                        <p className="text-muted-foreground">Mass of 1 mole of a substance in g/mol. Found by summing atomic masses from the periodic table.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-secondary shadow-sm">
                  <CardContent className="p-5">
                    <h3 className="font-bold text-secondary-foreground mb-4 text-sm uppercase tracking-wide">Mole Formulas</h3>
                    <div className="space-y-3 font-mono text-center">
                      <div className="bg-secondary-foreground/10 rounded-xl py-3 px-4">
                        <div className="text-xl font-bold text-secondary-foreground">n = m / M</div>
                        <div className="text-xs text-secondary-foreground/60 mt-1">moles = mass (g) ÷ molar mass (g/mol)</div>
                      </div>
                      <div className="bg-secondary-foreground/10 rounded-xl py-3 px-4">
                        <div className="text-xl font-bold text-secondary-foreground">n = N / Nₐ</div>
                        <div className="text-xs text-secondary-foreground/60 mt-1">moles = number of particles ÷ 6.02 × 10²³</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                <Card className="shadow-sm">
                  <CardContent className="p-5">
                    <h3 className="font-serif font-bold mb-3">Worked Examples</h3>
                    <div className="space-y-4 text-sm">
                      <div>
                        <p className="font-semibold text-primary mb-1">How many moles are in 36 g of water (H₂O)?</p>
                        <div className="bg-muted/40 rounded p-3 font-mono space-y-1 border text-xs">
                          <p>M(H₂O) = 2(1.01) + 16.00 = 18.02 g/mol</p>
                          <p>n = m / M = 36 g ÷ 18.02 g/mol</p>
                          <p className="font-bold text-primary">n = 2.00 mol</p>
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold text-primary mb-1">How many atoms are in 2 mol of carbon?</p>
                        <div className="bg-muted/40 rounded p-3 font-mono space-y-1 border text-xs">
                          <p>N = n × Nₐ</p>
                          <p>N = 2 × 6.02 × 10²³</p>
                          <p className="font-bold text-primary">N = 1.20 × 10²⁴ atoms</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-amber-500 bg-amber-50 shadow-sm">
                  <CardContent className="p-5">
                    <h3 className="font-bold text-amber-900 mb-2 text-sm">WHMIS Safety Awareness</h3>
                    <p className="text-sm text-amber-800 leading-relaxed mb-2">WHMIS (Workplace Hazardous Materials Information System) uses standardized symbols to communicate chemical hazards. Key symbols include:</p>
                    <div className="grid grid-cols-2 gap-2 text-xs text-amber-800">
                      {["Flammable", "Oxidizing", "Corrosive", "Toxic", "Explosive", "Biohazardous", "Compressed Gas", "Environmental Hazard"].map((s) => (
                        <div key={s} className="flex items-center gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-amber-600 shrink-0" />
                          {s}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <UnitCompleteToggle unitId="science-10-unit-a" />

          {/* Nav to other units */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-xl font-serif font-bold whitespace-nowrap">Continue to Next Unit</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {unitNav.filter(u => !u.active).map((u) => (
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
