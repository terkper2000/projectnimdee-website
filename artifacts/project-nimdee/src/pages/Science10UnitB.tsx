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
  { label: "Unit A: Chemistry", href: "/resources/science-10/unit-a", icon: <FlaskConical className="w-4 h-4" /> },
  { label: "Unit B: Physics", href: "/resources/science-10/unit-b", icon: <Zap className="w-4 h-4" />, active: true },
  { label: "Unit C: Biology", href: "/resources/science-10/unit-c", icon: <Leaf className="w-4 h-4" /> },
  { label: "Unit D: Biosphere", href: "/resources/science-10/unit-d", icon: <Globe className="w-4 h-4" /> },
];

const historySteps = [
  { person: "Count Rumford (1798)", detail: "Observed boring cannon barrels produced heat indefinitely — challenging caloric theory. Proposed heat is a form of motion, not a substance." },
  { person: "James Prescott Joule (1840s)", detail: "Precisely measured the mechanical equivalent of heat. Showed that mechanical energy and heat are interconvertible. The joule (J) is named after him." },
  { person: "1st Law of Thermodynamics", detail: "Formalized by Clausius and others (1850). Energy is conserved in all processes — it cannot be created or destroyed." },
  { person: "2nd Law of Thermodynamics", detail: "Explains why heat engines can never be 100% efficient — heat always flows from hot to cold; disorder (entropy) increases." },
];

const engineTimeline = [
  { year: "1698", person: "Thomas Savery", contribution: "First practical steam pump (mining)" },
  { year: "1712", person: "Thomas Newcomen", contribution: "Atmospheric steam engine; very inefficient" },
  { year: "1769", person: "James Watt", contribution: "Separate condenser — dramatically improved efficiency; defined 'horsepower'" },
  { year: "1824", person: "Sadi Carnot", contribution: "Theoretical maximum efficiency of any heat engine (Carnot cycle)" },
  { year: "1850s", person: "Clausius / Kelvin", contribution: "Formal statement of both laws of thermodynamics" },
];

const energyForms = [
  { name: "Kinetic", formula: "Eₖ = ½mv²", desc: "Energy of motion. Any moving object has kinetic energy.", examples: "Moving car, wind, flowing water", color: "border-t-blue-500", tagBg: "bg-blue-50 text-blue-800" },
  { name: "Gravitational Potential", formula: "Eₚ = mgh", desc: "Energy due to position above a reference point.", examples: "Water behind a dam, ball held up high", color: "border-t-emerald-500", tagBg: "bg-emerald-50 text-emerald-800" },
  { name: "Chemical Potential", formula: "Stored in bonds", desc: "Energy stored in chemical bonds — a form of potential energy.", examples: "Gasoline, food (glucose, ATP), batteries", color: "border-t-violet-500", tagBg: "bg-violet-50 text-violet-800" },
  { name: "Thermal", formula: "Q = mcΔt", desc: "Energy from random motion of particles. Always produced as waste in conversions.", examples: "Friction, combustion heat, body heat", color: "border-t-red-500", tagBg: "bg-red-50 text-red-800" },
  { name: "Electrical", formula: "E = Pt", desc: "Energy carried by moving charges (current).", examples: "Power grid, batteries, lightning", color: "border-t-orange-500", tagBg: "bg-orange-50 text-orange-800" },
  { name: "Solar / Radiant", formula: "E = hf", desc: "Energy carried by electromagnetic waves (light).", examples: "Sunlight, infrared radiation", color: "border-t-yellow-500", tagBg: "bg-yellow-50 text-yellow-800" },
  { name: "Sound", formula: "Wave pressure", desc: "Energy carried as pressure waves through matter.", examples: "Speaker, thunder, vibration", color: "border-t-cyan-500", tagBg: "bg-cyan-50 text-cyan-800" },
  { name: "Nuclear", formula: "E = mc²", desc: "Energy stored in the nucleus, released by fission or fusion.", examples: "Nuclear power plants, the Sun", color: "border-t-pink-500", tagBg: "bg-pink-50 text-pink-800" },
];

const conversions = [
  { device: "Car Engine", input: "Chemical", output: "Kinetic", waste: "Thermal" },
  { device: "Solar Panel", input: "Solar (Radiant)", output: "Electrical", waste: "Thermal" },
  { device: "Light Bulb", input: "Electrical", output: "Solar (Radiant)", waste: "Thermal" },
  { device: "Electric Motor", input: "Electrical", output: "Kinetic", waste: "Thermal, Sound" },
  { device: "Battery", input: "Chemical", output: "Electrical", waste: "Thermal" },
  { device: "Generator", input: "Kinetic", output: "Electrical", waste: "Thermal, Sound" },
];

export default function Science10UnitB() {
  return (
    <Layout>
      <div className="bg-muted/40 border-b">
        <div className="container mx-auto px-4 md:px-6 py-3 flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
          <Link href="/resources" className="hover:text-primary transition-colors flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" />Resources
          </Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/resources/science-10" className="hover:text-primary transition-colors">Science 10</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground font-medium">Unit B: Physics</span>
        </div>
      </div>

      <div className="bg-muted/30 border-b overflow-x-auto">
        <div className="container mx-auto px-4 md:px-6 py-0 flex items-stretch min-w-max md:min-w-0">
          {unitNav.map((u) => (
            <Link key={u.href} href={u.href}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
                u.active ? "border-amber-600 text-amber-700" : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
              }`}>
              {u.icon}{u.label}
            </Link>
          ))}
        </div>
      </div>

      <section className="relative bg-secondary overflow-hidden py-16 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.12),transparent_60%)]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="inline-block bg-amber-500/20 text-amber-200 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">Alberta Science 10 — Unit B</span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-secondary-foreground mb-4 leading-tight">Energy Flow in Technological Systems</h1>
            <p className="text-secondary-foreground/75 text-lg leading-relaxed mb-8 max-w-2xl">
              Which came first, science or technology? How did improving heat engines lead to the laws of thermodynamics? How can we analyze motion and energy to design more efficient systems?
            </p>
            <div className="flex flex-wrap gap-2">
              {["Forms of Energy", "Thermodynamic Laws", "Motion & Kinematics", "Kinetic & Potential Energy", "Mechanical Work", "Efficiency & Sustainability"].map((t) => (
                <span key={t} className="text-xs font-semibold px-3 py-1 rounded-full bg-secondary-foreground/10 text-secondary-foreground/80 border border-secondary-foreground/15">{t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="py-14 bg-background">
        <div className="container mx-auto px-4 md:px-6 space-y-16">

          {/* Outcomes */}
          <motion.section variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl md:text-3xl font-serif font-bold whitespace-nowrap">Program Outcomes</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            {[
              { num: "Outcome 1", text: "Analyze how technologies based on thermodynamic principles were developed before the laws of thermodynamics were formulated." },
              { num: "Outcome 2", text: "Explain and apply concepts used in theoretical and practical measures of energy in mechanical systems (Eₖ, Eₚ, W, scalars, vectors, acceleration)." },
              { num: "Outcome 3", text: "Apply the principles of energy conservation and thermodynamics to investigate, describe and predict efficiency of energy transformation in technological systems." },
            ].map((o, i) => (
              <motion.div key={i} variants={fadeUp} className="flex gap-3 p-4 rounded-xl bg-muted/40 border border-l-4 border-l-amber-600 mb-3">
                <span className="font-bold text-amber-700 text-sm shrink-0 mt-0.5">{o.num}:</span>
                <p className="text-sm text-foreground/80 leading-relaxed">{o.text}</p>
              </motion.div>
            ))}
          </motion.section>

          {/* History */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-amber-700 flex items-center justify-center text-white font-bold text-lg shrink-0">2</div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold">History of Thermodynamics & Heat Engines</h2>
              <div className="flex-1 h-px bg-border" />
            </div>

            <Card className="mb-6 bg-blue-50 border-blue-200 shadow-sm">
              <CardContent className="p-5">
                <h3 className="font-bold text-blue-900 mb-2 text-sm">Key Idea: Technology Before Science</h3>
                <p className="text-sm text-blue-800 leading-relaxed">In thermodynamics, <strong>technology came before the science</strong>. Engineers improved heat engines through trial and error over centuries <em>before</em> scientists formalized the laws that explained why they worked. The science was derived from observing the technology.</p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Card className="shadow-sm">
                <div className="bg-muted/50 px-5 py-3 border-b font-bold text-sm">Development of Energy Concepts</div>
                <CardContent className="p-5">
                  <div className="space-y-3">
                    {historySteps.map((s, i) => (
                      <div key={i} className="flex gap-3">
                        <div className="w-7 h-7 rounded-full bg-amber-700 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{i + 1}</div>
                        <div><p className="font-semibold text-sm text-foreground">{s.person}</p><p className="text-xs text-muted-foreground leading-relaxed mt-0.5">{s.detail}</p></div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-sm overflow-hidden">
                <div className="bg-muted/50 px-5 py-3 border-b font-bold text-sm">The Steam Engine Timeline</div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="bg-secondary text-secondary-foreground"><th className="text-left px-4 py-2 font-semibold">Year</th><th className="text-left px-4 py-2 font-semibold">Person</th><th className="text-left px-4 py-2 font-semibold">Contribution</th></tr></thead>
                    <tbody>
                      {engineTimeline.map((row, i) => (
                        <tr key={i} className="border-t hover:bg-muted/30"><td className="px-4 py-2 font-mono text-muted-foreground">{row.year}</td><td className="px-4 py-2 font-semibold">{row.person}</td><td className="px-4 py-2 text-muted-foreground">{row.contribution}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          </section>

          {/* Forms of Energy */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-amber-700 flex items-center justify-center text-white font-bold text-lg shrink-0">3</div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold">Forms of Energy & Conversions</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {energyForms.map((e, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <Card className={`h-full border-t-4 ${e.color} shadow-sm`}>
                    <CardContent className="p-4">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${e.tagBg} mb-2 inline-block`}>{e.name}</span>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-2">{e.desc}</p>
                      <div className="font-mono text-xs bg-muted/40 rounded px-2 py-1 border mb-1">{e.formula}</div>
                      <p className="text-xs text-muted-foreground/70">{e.examples}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <Card className="shadow-sm overflow-hidden">
              <div className="bg-muted/50 px-5 py-3 border-b font-bold text-sm">Common Energy Conversions in Technology</div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead><tr className="bg-secondary text-secondary-foreground"><th className="text-left px-4 py-3 font-semibold">Device</th><th className="text-left px-4 py-3 font-semibold">Input Energy</th><th className="text-left px-4 py-3 font-semibold">Output Energy</th><th className="text-left px-4 py-3 font-semibold">Waste Energy</th></tr></thead>
                  <tbody>
                    {conversions.map((c, i) => (
                      <tr key={i} className="border-t hover:bg-muted/30"><td className="px-4 py-3 font-semibold">{c.device}</td><td className="px-4 py-3 text-muted-foreground">{c.input}</td><td className="px-4 py-3 text-emerald-700 font-medium">{c.output}</td><td className="px-4 py-3 text-red-600">{c.waste}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </section>

          {/* Key Equations & Laws */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-amber-700 flex items-center justify-center text-white font-bold text-lg shrink-0">4</div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold">Key Equations & Thermodynamic Laws</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <Card className="bg-secondary shadow-sm">
                  <CardContent className="p-5">
                    <h3 className="font-bold text-secondary-foreground text-sm uppercase tracking-wide mb-4">Core Formulas</h3>
                    <div className="space-y-3">
                      {[
                        { label: "Kinetic Energy", formula: "Eₖ = ½mv²", vars: "m = mass (kg), v = speed (m/s)" },
                        { label: "Gravitational Potential Energy", formula: "Eₚ = mgh", vars: "m = mass (kg), g = 9.81 m/s², h = height (m)" },
                        { label: "Mechanical Work", formula: "W = Fd", vars: "F = force (N), d = displacement (m)" },
                        { label: "Efficiency", formula: "eff = (E_useful / E_total) × 100%", vars: "Expressed as a percentage" },
                        { label: "Thermal Energy (Heat)", formula: "Q = mcΔt", vars: "m = mass, c = specific heat capacity, Δt = temp change" },
                      ].map((eq, i) => (
                        <div key={i} className="bg-secondary-foreground/10 rounded-lg p-3">
                          <p className="text-xs text-secondary-foreground/70 uppercase tracking-wide mb-1">{eq.label}</p>
                          <p className="font-mono font-bold text-secondary-foreground text-lg">{eq.formula}</p>
                          <p className="text-xs text-secondary-foreground/60 mt-1">{eq.vars}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-4">
                <Card className="border-l-4 border-l-blue-500 shadow-sm">
                  <CardContent className="p-5">
                    <h3 className="font-serif font-bold text-blue-900 mb-2">1st Law of Thermodynamics</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">Energy cannot be created or destroyed — only converted from one form to another. The total energy of an isolated system is constant.</p>
                    <div className="bg-blue-50 rounded-lg p-3 border border-blue-200 text-sm text-blue-800">
                      <strong>Conservation of Energy:</strong> E_input = E_useful output + E_waste
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-violet-500 shadow-sm">
                  <CardContent className="p-5">
                    <h3 className="font-serif font-bold text-violet-900 mb-2">2nd Law of Thermodynamics</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">Heat naturally flows from hot to cold. In every energy conversion, some energy is always lost as thermal energy (waste heat). No device can be 100% efficient.</p>
                    <div className="bg-violet-50 rounded-lg p-3 border border-violet-200 text-sm text-violet-800">
                      <strong>Entropy increases:</strong> Disorder in a closed system always increases over time.
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-amber-50 border-amber-200 shadow-sm">
                  <CardContent className="p-5">
                    <h3 className="font-bold text-amber-900 mb-3 text-sm">Efficiency — Worked Example</h3>
                    <p className="text-sm text-amber-900 mb-2">A car engine burns fuel with 800 kJ of chemical energy and produces 200 kJ of kinetic energy. What is its efficiency?</p>
                    <div className="bg-white rounded p-3 border border-amber-200 font-mono text-xs space-y-1">
                      <p>eff = (E_useful / E_total) × 100%</p>
                      <p>eff = (200 kJ / 800 kJ) × 100%</p>
                      <p className="font-bold text-amber-700">eff = 25%</p>
                      <p className="text-amber-600">Waste = 600 kJ lost as thermal energy</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <UnitCompleteToggle unitId="science-10-unit-b" />

          {/* Nav */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-xl font-serif font-bold whitespace-nowrap">Explore Other Units</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {unitNav.filter(u => !u.active).map((u) => (
                <Link key={u.href} href={u.href}>
                  <Card className="h-full hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer border-2 hover:border-primary/30">
                    <CardContent className="p-5 flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">{u.icon}</div>
                      <div><p className="font-semibold text-sm text-foreground">{u.label}</p><p className="text-xs text-muted-foreground">View unit →</p></div>
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
