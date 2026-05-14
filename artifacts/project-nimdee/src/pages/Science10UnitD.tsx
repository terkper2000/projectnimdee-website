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
  { label: "Unit B: Physics", href: "/resources/science-10/unit-b", icon: <Zap className="w-4 h-4" /> },
  { label: "Unit C: Biology", href: "/resources/science-10/unit-c", icon: <Leaf className="w-4 h-4" /> },
  { label: "Unit D: Biosphere", href: "/resources/science-10/unit-d", icon: <Globe className="w-4 h-4" />, active: true },
];

const earthSpheres = [
  { name: "Atmosphere", color: "border-l-sky-500 bg-sky-50", label: "bg-sky-50 text-sky-800", desc: "Layer of gases surrounding Earth — N₂ (78%), O₂ (21%), Ar, CO₂, H₂O vapour, and trace greenhouse gases. Layers: troposphere, stratosphere, mesosphere, thermosphere." },
  { name: "Hydrosphere", color: "border-l-blue-500 bg-blue-50", label: "bg-blue-50 text-blue-800", desc: "All water on Earth: oceans (~97%), ice caps and glaciers (~2%), freshwater lakes, rivers, groundwater. Stores and transports thermal energy." },
  { name: "Lithosphere", color: "border-l-amber-500 bg-amber-50", label: "bg-amber-50 text-amber-800", desc: "Solid outer layer including crust and upper mantle. Contains rocks, soil, and minerals. Influences climate through topography, mountain ranges, and land surface albedo." },
  { name: "Biosphere", color: "border-l-emerald-500 bg-emerald-50", label: "bg-emerald-50 text-emerald-800", desc: "The zone of life on Earth — all ecosystems from ocean floor to mountain tops. Depends on all other spheres. Interacts with climate through respiration, photosynthesis, and transpiration." },
];

const radiationBudget = [
  { label: "Total incoming solar energy", pct: 100, color: "bg-amber-500", note: "Shortwave radiation from the Sun" },
  { label: "Reflected by clouds & aerosols", pct: 21, color: "bg-slate-400", note: "Scattered back to space" },
  { label: "Reflected by Earth's surface (albedo)", pct: 9, color: "bg-blue-300", note: "From ice, snow, land surfaces" },
  { label: "Absorbed by the atmosphere", pct: 20, color: "bg-fuchsia-400", note: "By ozone, H₂O vapour, clouds" },
  { label: "Absorbed by Earth's surface", pct: 50, color: "bg-orange-500", note: "Heats land and water; drives weather" },
  { label: "Net energy available to Earth", pct: 30, color: "bg-primary", note: "Net surplus that drives climate systems" },
];

const ghGases = [
  { gas: "Water Vapour", formula: "H₂O", source: "Evaporation", potential: "Natural; ~50% of total GH effect" },
  { gas: "Carbon Dioxide", formula: "CO₂", source: "Combustion, deforestation", potential: "GWP = 1 (reference)" },
  { gas: "Methane", formula: "CH₄", source: "Livestock, landfills, wetlands", potential: "GWP = 28–36 (over 100 yr)" },
  { gas: "Nitrous Oxide", formula: "N₂O", source: "Fertilizers, combustion", potential: "GWP ≈ 265" },
  { gas: "Ozone", formula: "O₃", source: "Chemical reactions in atmosphere", potential: "Complex; also shields UV" },
];

const biomes = [
  { name: "Tropical Rainforest", climate: "Hot & humid, high rainfall (>200 cm/yr)", traits: "Greatest biodiversity; multi-layer canopy; nutrient-poor soils", color: "bg-emerald-700" },
  { name: "Temperate Deciduous Forest", climate: "Moderate temp, distinct seasons, 75–150 cm/yr rain", traits: "Broad-leaf trees that shed leaves; rich soils; four seasons", color: "bg-emerald-500" },
  { name: "Boreal Forest (Taiga)", climate: "Cold winters, short summers; 40–100 cm/yr precipitation", traits: "Coniferous trees; found across Canada; peat bogs; permafrost in north", color: "bg-teal-700" },
  { name: "Grassland / Prairie", climate: "Moderate rainfall (25–75 cm/yr); temperature variable", traits: "Dominant grass species; rich topsoil; large grazing mammals", color: "bg-amber-600" },
  { name: "Desert", climate: "< 25 cm/yr precipitation; extreme temperature swings", traits: "Sparse vegetation; specialized drought adaptations; sandy or rocky soils", color: "bg-orange-500" },
  { name: "Tundra", climate: "Extremely cold; < 25 cm precipitation; permafrost", traits: "No trees; low shrubs, mosses, lichens; short growing season; found in Arctic", color: "bg-slate-500" },
];

export default function Science10UnitD() {
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
          <span className="text-foreground font-medium">Unit D: Biosphere</span>
        </div>
      </div>

      <div className="bg-muted/30 border-b overflow-x-auto">
        <div className="container mx-auto px-4 md:px-6 py-0 flex items-stretch min-w-max md:min-w-0">
          {unitNav.map((u) => (
            <Link key={u.href} href={u.href}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
                u.active ? "border-sky-600 text-sky-700" : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
              }`}>
              {u.icon}{u.label}
            </Link>
          ))}
        </div>
      </div>

      <section className="relative bg-secondary overflow-hidden py-16 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(14,165,233,0.15),transparent_60%)]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="inline-block bg-sky-500/20 text-sky-200 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">Alberta Science 10 — Unit D</span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-secondary-foreground mb-4 leading-tight">Energy Flow in Global Systems</h1>
            <p className="text-secondary-foreground/75 text-lg leading-relaxed mb-8 max-w-2xl">
              What are the relationships between solar energy, global climate, and biomes? Is human activity causing climate change, and how can we reduce our impact on the biosphere?
            </p>
            <div className="flex flex-wrap gap-2">
              {["Solar Radiation Budget", "Greenhouse Effect", "Climate Zones", "Coriolis Effect", "Hydrologic Cycle", "Albedo", "6 Major Biomes", "Q = mcΔt", "Climate Change & IPCC"].map((t) => (
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
              { num: "Outcome 1", text: "Describe how solar energy input, terrestrial energy output and energy flow within the biosphere affect humans and other species." },
              { num: "Outcome 2", text: "Analyze the relationships among net solar energy, global energy transfer processes (radiation, convection, hydrologic cycle) and climate." },
              { num: "Outcome 3", text: "Relate climate to the characteristics of the world's major biomes and compare biomes in different regions." },
              { num: "Outcome 4", text: "Investigate and interpret the role of environmental factors on global energy transfer and climate change." },
            ].map((o, i) => (
              <motion.div key={i} variants={fadeUp} className="flex gap-3 p-4 rounded-xl bg-muted/40 border border-l-4 border-l-sky-600 mb-3">
                <span className="font-bold text-sky-700 text-sm shrink-0 mt-0.5">{o.num}:</span>
                <p className="text-sm text-foreground/80 leading-relaxed">{o.text}</p>
              </motion.div>
            ))}
          </motion.section>

          {/* Solar Energy & Spheres */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-sky-700 flex items-center justify-center text-white font-bold text-lg shrink-0">2</div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold">Solar Energy & Earth's Major Spheres</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {earthSpheres.map((s, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <Card className={`h-full border-l-4 ${s.color} shadow-sm`}>
                    <CardContent className="p-5">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${s.label} mb-2 inline-block`}>{s.name}</span>
                      <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Radiation Budget */}
            <Card className="shadow-sm mb-6 overflow-hidden">
              <div className="bg-sky-900 px-5 py-3 font-bold text-white text-sm">Solar Radiation Budget — What Happens to 100% of Incoming Solar Energy?</div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {radiationBudget.map((row, i) => (
                    <div key={i} className="flex items-center gap-3 flex-wrap">
                      <div className="text-sm font-medium text-foreground min-w-[220px]">{row.label}</div>
                      <div className="flex-1 bg-muted rounded-full h-5 overflow-hidden min-w-[120px]">
                        <div className={`h-full rounded-full ${row.color} transition-all`} style={{ width: `${Math.min(row.pct, 100)}%` }} />
                      </div>
                      <div className="font-mono font-bold text-sm w-10 text-right">{row.pct}%</div>
                      <div className="text-xs text-muted-foreground min-w-[160px]">{row.note}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Greenhouse Effect */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-sky-700 flex items-center justify-center text-white font-bold text-lg shrink-0">3</div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold">The Greenhouse Effect</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Card className="shadow-sm">
                <div className="bg-muted/50 px-5 py-3 border-b font-bold text-sm">How the Greenhouse Effect Works</div>
                <CardContent className="p-5">
                  <div className="space-y-3 mb-4">
                    {[
                      "Shortwave solar radiation passes through the atmosphere and is absorbed by Earth's surface.",
                      "Earth's surface re-emits energy as longwave infrared radiation (heat).",
                      "Greenhouse gases (CO₂, CH₄, H₂O vapour, N₂O) absorb this outgoing radiation.",
                      "Some energy is re-radiated back toward Earth's surface, warming it further.",
                    ].map((step, i) => (
                      <div key={i} className="flex gap-3">
                        <div className="w-6 h-6 rounded-full bg-sky-700 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{i + 1}</div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{step}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <h4 className="font-bold text-amber-900 text-xs mb-1">Natural vs Enhanced Greenhouse Effect</h4>
                    <p className="text-xs text-amber-800 leading-relaxed">The <strong>natural</strong> greenhouse effect keeps Earth ~33°C warmer than it would otherwise be. The <strong>enhanced</strong> greenhouse effect is caused by human activity increasing greenhouse gas concentrations, leading to additional warming.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-sm overflow-hidden">
                <div className="bg-muted/50 px-5 py-3 border-b font-bold text-sm">Key Greenhouse Gases</div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="bg-secondary text-secondary-foreground"><th className="text-left px-4 py-2 font-semibold">Gas</th><th className="text-left px-4 py-2 font-semibold">Formula</th><th className="text-left px-4 py-2 font-semibold">Source</th><th className="text-left px-4 py-2 font-semibold">Warming Potential</th></tr></thead>
                    <tbody>
                      {ghGases.map((g, i) => (
                        <tr key={i} className="border-t hover:bg-muted/30"><td className="px-4 py-2 font-semibold">{g.gas}</td><td className="px-4 py-2 font-mono">{g.formula}</td><td className="px-4 py-2 text-muted-foreground">{g.source}</td><td className="px-4 py-2 text-muted-foreground">{g.potential}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>

            {/* Albedo */}
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <h3 className="font-serif font-bold text-lg mb-4">Albedo — Reflectivity of Surfaces</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">Albedo is the fraction of incoming solar radiation that is reflected by a surface. High albedo = more reflection, less warming.</p>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {[
                    { surface: "Fresh Snow", albedo: "80–90%", color: "bg-slate-100 border-slate-300" },
                    { surface: "Ice", albedo: "50–70%", color: "bg-sky-100 border-sky-300" },
                    { surface: "Sand / Desert", albedo: "30–40%", color: "bg-amber-100 border-amber-300" },
                    { surface: "Grassland", albedo: "20–25%", color: "bg-lime-100 border-lime-300" },
                    { surface: "Forest", albedo: "10–15%", color: "bg-emerald-100 border-emerald-300" },
                    { surface: "Ocean", albedo: "6–10%", color: "bg-blue-100 border-blue-300" },
                  ].map((s, i) => (
                    <div key={i} className={`rounded-lg p-3 border-2 text-center ${s.color}`}>
                      <p className="text-xs font-bold text-foreground mb-1">{s.surface}</p>
                      <p className="text-sm font-mono font-bold text-foreground">{s.albedo}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Heat Formula & Biomes */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-sky-700 flex items-center justify-center text-white font-bold text-lg shrink-0">4</div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold">Heat Calculations & World Biomes</h2>
              <div className="flex-1 h-px bg-border" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="bg-secondary shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-bold text-secondary-foreground text-sm uppercase tracking-wide mb-4">Thermal Energy Formula</h3>
                  <div className="bg-secondary-foreground/10 rounded-xl py-4 text-center mb-4">
                    <div className="text-3xl font-mono font-bold text-secondary-foreground">Q = mcΔt</div>
                    <div className="text-xs text-secondary-foreground/60 mt-2">thermal energy = mass × specific heat × temp change</div>
                  </div>
                  <div className="space-y-2 text-sm text-secondary-foreground/80">
                    <p><span className="font-mono font-bold text-secondary-foreground">Q</span> = thermal energy (J)</p>
                    <p><span className="font-mono font-bold text-secondary-foreground">m</span> = mass (kg)</p>
                    <p><span className="font-mono font-bold text-secondary-foreground">c</span> = specific heat capacity (J/kg·°C) — water = 4180 J/kg·°C</p>
                    <p><span className="font-mono font-bold text-secondary-foreground">Δt</span> = change in temperature (°C)</p>
                  </div>
                  <div className="mt-4 bg-secondary-foreground/10 rounded-lg p-3">
                    <p className="text-xs text-secondary-foreground/70 mb-1 font-bold">Worked Example:</p>
                    <p className="text-xs text-secondary-foreground/80 mb-2">How much energy heats 2 kg of water from 20°C to 80°C?</p>
                    <div className="font-mono text-xs text-secondary-foreground space-y-0.5">
                      <p>Q = (2)(4180)(80 − 20)</p>
                      <p>Q = (2)(4180)(60)</p>
                      <p className="font-bold">Q = 501,600 J = 501.6 kJ</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-sm">
                <CardContent className="p-5">
                  <h3 className="font-serif font-bold mb-4">Global Energy Transfer Processes</h3>
                  <div className="space-y-3">
                    {[
                      { process: "Radiation", desc: "Transfer of energy as electromagnetic waves — no medium required. The Sun's energy reaches Earth by radiation through the vacuum of space." },
                      { process: "Convection", desc: "Transfer of energy by the movement of a fluid (liquid or gas). Warm air/water rises, cool sinks — drives ocean currents and atmospheric circulation." },
                      { process: "Conduction", desc: "Transfer of energy through direct contact between particles. Important at Earth's surface but less significant for global systems." },
                      { process: "Hydrologic Cycle", desc: "Water moves between oceans, atmosphere, and land through evaporation, condensation, and precipitation — transferring enormous amounts of thermal energy globally." },
                    ].map((p, i) => (
                      <div key={i} className="flex gap-3 p-3 bg-muted/40 rounded-lg border">
                        <div className="w-2 h-2 rounded-full bg-sky-600 mt-1.5 shrink-0" />
                        <div><p className="font-semibold text-sm text-foreground">{p.process}</p><p className="text-xs text-muted-foreground leading-relaxed mt-0.5">{p.desc}</p></div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Biomes */}
            <h3 className="font-serif font-bold text-xl mb-5">The Six Major Biomes</h3>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {biomes.map((b, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <Card className="h-full shadow-sm overflow-hidden">
                    <div className={`${b.color} px-4 py-2`}>
                      <h4 className="font-bold text-white text-sm">{b.name}</h4>
                    </div>
                    <CardContent className="p-4 space-y-2">
                      <div className="bg-muted/40 rounded p-2 border text-xs"><strong>Climate:</strong> {b.climate}</div>
                      <div className="text-xs text-muted-foreground leading-relaxed"><strong className="text-foreground">Key traits:</strong> {b.traits}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Climate Change */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-sky-700 flex items-center justify-center text-white font-bold text-lg shrink-0">5</div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold">Climate Change & Human Impact</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-emerald-50 border-emerald-200 shadow-sm">
                <CardContent className="p-5">
                  <h3 className="font-bold text-emerald-900 mb-2 text-sm">Evidence for Climate Change</h3>
                  <ul className="text-xs text-emerald-800 space-y-1.5 list-disc list-inside leading-relaxed">
                    <li>Rising global average temperatures</li>
                    <li>Melting glaciers and Arctic sea ice</li>
                    <li>Rising sea levels</li>
                    <li>Increasing frequency of extreme weather events</li>
                    <li>Shifts in species ranges and migration timing</li>
                    <li>Increasing atmospheric CO₂ (from 280 → 420+ ppm)</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-amber-50 border-amber-200 shadow-sm">
                <CardContent className="p-5">
                  <h3 className="font-bold text-amber-900 mb-2 text-sm">Human Activities Contributing to Change</h3>
                  <ul className="text-xs text-amber-800 space-y-1.5 list-disc list-inside leading-relaxed">
                    <li>Burning fossil fuels (CO₂, SO₂)</li>
                    <li>Deforestation (reduces CO₂ absorption)</li>
                    <li>Agriculture (CH₄ from livestock, N₂O from fertilizers)</li>
                    <li>Industrial processes (cement, steel production)</li>
                    <li>Land use changes (reducing albedo)</li>
                    <li>Urbanization (heat island effect)</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-sky-50 border-sky-200 shadow-sm">
                <CardContent className="p-5">
                  <h3 className="font-bold text-sky-900 mb-2 text-sm">Reducing Impact — Sustainability</h3>
                  <ul className="text-xs text-sky-800 space-y-1.5 list-disc list-inside leading-relaxed">
                    <li>Transition to renewable energy (solar, wind, hydro)</li>
                    <li>Energy efficiency improvements</li>
                    <li>Reforestation and forest conservation</li>
                    <li>Sustainable agriculture practices</li>
                    <li>Public transit and electric vehicles</li>
                    <li>Carbon capture technologies</li>
                  </ul>
                  <div className="mt-3 bg-sky-100 rounded p-2 text-xs text-sky-800"><strong>IPCC:</strong> The Intergovernmental Panel on Climate Change states the balance of evidence indicates a significant human influence on global climate.</div>
                </CardContent>
              </Card>
            </div>
          </section>

          <UnitCompleteToggle unitId="science-10-unit-d" />

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
                      <div><p className="font-semibold text-sm">{u.label}</p><p className="text-xs text-muted-foreground">View unit →</p></div>
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
