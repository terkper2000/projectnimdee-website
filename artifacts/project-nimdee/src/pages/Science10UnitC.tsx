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
  { label: "Unit C: Biology", href: "/resources/science-10/unit-c", icon: <Leaf className="w-4 h-4" />, active: true },
  { label: "Unit D: Biosphere", href: "/resources/science-10/unit-d", icon: <Globe className="w-4 h-4" /> },
];

const cellScientists = [
  { scientist: "Robert Hooke", year: "1665", contribution: "First observed and named \"cells\" in cork slices; used a compound light microscope" },
  { scientist: "Antonie van Leeuwenhoek", year: "1670s", contribution: "First to observe living single-celled organisms (bacteria, protozoa)" },
  { scientist: "Robert Brown", year: "1831", contribution: "Discovered the cell nucleus" },
  { scientist: "Schleiden & Schwann", year: "1838–39", contribution: "Proposed that all plants (Schleiden) and animals (Schwann) are made of cells" },
  { scientist: "Rudolf Virchow", year: "1855", contribution: "Added third postulate: \"Omnis cellula e cellula\" — all cells from pre-existing cells" },
  { scientist: "Louis Pasteur", year: "1859", contribution: "Swan-neck experiment definitively disproved spontaneous generation" },
];

const microscopes = [
  { name: "Light Microscope (LM)", color: "border-l-emerald-500", badge: "bg-emerald-50 text-emerald-800", magnification: "~1,000×", resolution: "~200 nm", desc: "Uses visible light and glass lenses. Can view living cells; staining highlights structures. Limited by wavelength of light." },
  { name: "Transmission Electron Microscope (TEM)", color: "border-l-blue-500", badge: "bg-blue-50 text-blue-800", magnification: "up to 1,000,000×", resolution: "~0.1 nm", desc: "Electron beam through thin specimen. Reveals internal ultrastructure — organelles, membranes, ribosomes. Cannot view living cells." },
  { name: "Scanning Electron Microscope (SEM)", color: "border-l-violet-500", badge: "bg-violet-50 text-violet-800", magnification: "up to 500,000×", resolution: "~1 nm", desc: "Scans surface with electrons to produce a 3D image. Excellent for external cell structure and tissue detail." },
  { name: "Confocal Laser (CLSM)", color: "border-l-amber-500", badge: "bg-amber-50 text-amber-800", magnification: "~1,000×", resolution: "~200 nm", desc: "Uses laser light and fluorescent dyes to create 3D images of living cells. Can track molecular movement in real time." },
];

const organelles = [
  { name: "Cell Membrane", function: "Controls what enters and exits the cell; semi-permeable; fluid-mosaic model", plant: true, animal: true },
  { name: "Cell Wall", function: "Rigid outer layer (cellulose) providing structural support and protection; freely permeable", plant: true, animal: false },
  { name: "Nucleus", function: "Control centre; contains DNA; directs all cell activities; surrounded by nuclear membrane", plant: true, animal: true },
  { name: "Mitochondrion", function: "Site of cellular respiration; produces ATP (energy); \"powerhouse of the cell\"", plant: true, animal: true },
  { name: "Chloroplast", function: "Site of photosynthesis; converts light energy + CO₂ + H₂O into glucose; contains chlorophyll", plant: true, animal: false },
  { name: "Ribosome", function: "Site of protein synthesis; translates mRNA into proteins; free or on rough ER", plant: true, animal: true },
  { name: "Endoplasmic Reticulum (ER)", function: "Rough ER: protein processing (has ribosomes). Smooth ER: lipid synthesis, detoxification", plant: true, animal: true },
  { name: "Golgi Apparatus", function: "Packages, modifies and ships proteins and lipids; \"post office\" of the cell", plant: true, animal: true },
  { name: "Lysosome", function: "Contains digestive enzymes that break down waste, damaged organelles and foreign material", plant: false, animal: true },
  { name: "Vacuole", function: "Storage of water, nutrients, waste. Central vacuole in plant cells is large; provides turgor pressure", plant: true, animal: true, note: "Plant = large (1); Animal = small (many)" },
];

const transport = [
  { type: "Passive Transport — Diffusion", badge: "bg-blue-50 text-blue-800", desc: "Movement of particles from HIGH to LOW concentration down the concentration gradient. No ATP (energy) required. Continues until equilibrium.", examples: "O₂ and CO₂ crossing cell membranes; scent spreading in air" },
  { type: "Passive Transport — Osmosis", badge: "bg-emerald-50 text-emerald-800", desc: "The diffusion of water across a semi-permeable membrane from an area of LOW solute concentration to HIGH solute concentration. No ATP required.", examples: "Water entering a plant root cell; red blood cells in saltwater" },
  { type: "Active Transport", badge: "bg-orange-50 text-orange-800", desc: "Movement of particles from LOW to HIGH concentration AGAINST the gradient. Requires ATP (energy) and carrier proteins.", examples: "Sodium-potassium pump in nerve cells; mineral uptake in plant roots" },
];

export default function Science10UnitC() {
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
          <span className="text-foreground font-medium">Unit C: Biology</span>
        </div>
      </div>

      <div className="bg-muted/30 border-b overflow-x-auto">
        <div className="container mx-auto px-4 md:px-6 py-0 flex items-stretch min-w-max md:min-w-0">
          {unitNav.map((u) => (
            <Link key={u.href} href={u.href}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
                u.active ? "border-emerald-600 text-emerald-700" : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
              }`}>
              {u.icon}{u.label}
            </Link>
          ))}
        </div>
      </div>

      <section className="relative bg-secondary overflow-hidden py-16 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(16,185,129,0.15),transparent_60%)]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="inline-block bg-emerald-500/20 text-emerald-200 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">Alberta Science 10 — Unit C</span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-secondary-foreground mb-4 leading-tight">Cycling of Matter in Living Systems</h1>
            <p className="text-secondary-foreground/75 text-lg leading-relaxed mb-8 max-w-2xl">
              How did cell theory replace spontaneous generation? How do cells carry out life functions, and how do plants use specialized cells as a multicellular system?
            </p>
            <div className="flex flex-wrap gap-2">
              {["Microscopy & Cell Theory", "Cell Organelles", "Passive & Active Transport", "Diffusion & Osmosis", "Surface Area:Volume Ratio", "Plant Vascular Systems"].map((t) => (
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
              { num: "Outcome 1", text: "Explain the relationship between developments in imaging technology and the current understanding of the cell." },
              { num: "Outcome 2", text: "Describe the function of cell organelles and structures, and use models to explain life processes and their applications (diffusion, osmosis, transport)." },
              { num: "Outcome 3", text: "Analyze plants as an example of a multicellular organism with specialized structures at the cellular, tissue and system levels." },
            ].map((o, i) => (
              <motion.div key={i} variants={fadeUp} className="flex gap-3 p-4 rounded-xl bg-muted/40 border border-l-4 border-l-emerald-600 mb-3">
                <span className="font-bold text-emerald-700 text-sm shrink-0 mt-0.5">{o.num}:</span>
                <p className="text-sm text-foreground/80 leading-relaxed">{o.text}</p>
              </motion.div>
            ))}
          </motion.section>

          {/* Cell Theory */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-emerald-700 flex items-center justify-center text-white font-bold text-lg shrink-0">2</div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold">Cell Theory & Microscopy</h2>
              <div className="flex-1 h-px bg-border" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-4">
                <h3 className="font-serif font-bold text-lg">The Three Postulates of Cell Theory</h3>
                {[
                  "All living things are made up of one or more cells and the materials produced by these cells.",
                  "Cells are the functional units of life — they carry out all basic life processes.",
                  "All cells come from pre-existing cells — cells do not arise spontaneously. (Biogenesis)",
                ].map((p, i) => (
                  <div key={i} className="flex gap-3 p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                    <div className="w-7 h-7 rounded-full bg-emerald-700 text-white flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">{i + 1}</div>
                    <p className="text-sm text-emerald-900 leading-relaxed">{p}</p>
                  </div>
                ))}
                <Card className="bg-amber-50 border-amber-200 shadow-sm">
                  <CardContent className="p-4">
                    <h4 className="font-bold text-amber-900 text-sm mb-1">Spontaneous Generation vs Cell Theory</h4>
                    <p className="text-xs text-amber-800 leading-relaxed">Before cell theory, many scientists believed life could arise spontaneously from non-living matter. Louis Pasteur's swan-neck flask experiment (1859) disproved this, cementing the third postulate.</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="shadow-sm overflow-hidden">
                <div className="bg-muted/50 px-5 py-3 border-b font-bold text-sm">Key Scientists in Cell Theory Development</div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="bg-secondary text-secondary-foreground"><th className="text-left px-4 py-2 font-semibold">Scientist</th><th className="text-left px-4 py-2 font-semibold">Year</th><th className="text-left px-4 py-2 font-semibold">Contribution</th></tr></thead>
                    <tbody>
                      {cellScientists.map((s, i) => (
                        <tr key={i} className="border-t hover:bg-muted/30"><td className="px-4 py-2 font-semibold">{s.scientist}</td><td className="px-4 py-2 font-mono text-muted-foreground whitespace-nowrap">{s.year}</td><td className="px-4 py-2 text-muted-foreground">{s.contribution}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>

            <h3 className="font-serif font-bold text-lg mb-4">Microscopy Technology</h3>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {microscopes.map((m, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <Card className={`h-full border-l-4 ${m.color} shadow-sm`}>
                    <CardContent className="p-4">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${m.badge} mb-2 inline-block`}>{m.name}</span>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-2">{m.desc}</p>
                      <div className="text-xs space-y-1">
                        <p><span className="font-semibold text-foreground">Magnification:</span> <span className="text-muted-foreground">{m.magnification}</span></p>
                        <p><span className="font-semibold text-foreground">Resolution:</span> <span className="text-muted-foreground">{m.resolution}</span></p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Organelles */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-emerald-700 flex items-center justify-center text-white font-bold text-lg shrink-0">3</div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold">Cell Organelles Reference Table</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <Card className="shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-secondary text-secondary-foreground">
                      <th className="text-left px-4 py-3 font-semibold">Organelle</th>
                      <th className="text-left px-4 py-3 font-semibold">Function</th>
                      <th className="text-center px-4 py-3 font-semibold">Plant</th>
                      <th className="text-center px-4 py-3 font-semibold">Animal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {organelles.map((o, i) => (
                      <tr key={i} className="border-t hover:bg-muted/30 transition-colors">
                        <td className="px-4 py-3 font-semibold whitespace-nowrap">{o.name}</td>
                        <td className="px-4 py-3 text-muted-foreground">{o.function}{o.note && <span className="text-xs block text-muted-foreground/60 mt-0.5">{o.note}</span>}</td>
                        <td className="px-4 py-3 text-center">{o.plant ? <span className="text-emerald-600 font-bold">✓</span> : <span className="text-red-500">✗</span>}</td>
                        <td className="px-4 py-3 text-center">{o.animal ? <span className="text-emerald-600 font-bold">✓</span> : <span className="text-red-500">✗</span>}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </section>

          {/* Transport */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-emerald-700 flex items-center justify-center text-white font-bold text-lg shrink-0">4</div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold">Transport Across Cell Membranes</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
              {transport.map((t, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <Card className="h-full shadow-sm">
                    <CardContent className="p-5">
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${t.badge} mb-3 inline-block`}>{t.type}</span>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">{t.desc}</p>
                      <div className="bg-muted/40 rounded p-2 border text-xs text-muted-foreground"><strong className="text-foreground">Examples:</strong> {t.examples}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <Card className="bg-emerald-50 border-emerald-200 shadow-sm">
              <CardContent className="p-5">
                <h3 className="font-bold text-emerald-900 mb-3">Surface Area to Volume (SA:V) Ratio</h3>
                <p className="text-sm text-emerald-800 leading-relaxed mb-3">As a cell grows larger, its volume increases much faster than its surface area. This limits how large a cell can get — a large cell cannot exchange materials fast enough through its membrane to support its volume.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {[
                    { size: "Small cell (1 cm)", sa: "6 cm²", vol: "1 cm³", ratio: "6:1", note: "High ratio = efficient exchange" },
                    { size: "Medium cell (2 cm)", sa: "24 cm²", vol: "8 cm³", ratio: "3:1", note: "Ratio decreasing" },
                    { size: "Large cell (3 cm)", sa: "54 cm²", vol: "27 cm³", ratio: "2:1", note: "Low ratio = poor exchange" },
                  ].map((row, i) => (
                    <div key={i} className="bg-white rounded-lg p-3 border border-emerald-200 text-sm text-center">
                      <p className="font-semibold text-emerald-900 text-xs mb-1">{row.size}</p>
                      <p className="text-muted-foreground text-xs">SA: {row.sa} | Vol: {row.vol}</p>
                      <p className="font-bold text-emerald-700 text-lg my-1">{row.ratio}</p>
                      <p className="text-xs text-muted-foreground">{row.note}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          <UnitCompleteToggle unitId="science-10-unit-c" />

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
