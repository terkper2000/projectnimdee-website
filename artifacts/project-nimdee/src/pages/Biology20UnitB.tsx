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
  { label: "Unit B", title: "Ecosystems", href: "/resources/biology-20/unit-b", active: true },
  { label: "Unit C", title: "Photosynthesis", href: "/resources/biology-20/unit-c", active: false },
  { label: "Unit D", title: "Human Systems", href: "/resources/biology-20/unit-d", active: false },
];

export default function Biology20UnitB() {
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
          <span className="text-foreground font-medium">Unit B — Ecosystems &amp; Population Change</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-secondary overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(120,50%,25%,0.28),transparent_65%)]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <span className="inline-block bg-lime-500/20 text-lime-300 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              Biology 20 — Unit B
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-secondary-foreground mb-4 leading-tight">
              Ecosystems &amp; Population Change
            </h1>
            <p className="text-secondary-foreground/75 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
              Study how organisms are classified, how populations grow and are regulated, how species interact within ecosystems, and how natural selection drives evolution over time.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Ecological Hierarchy", "Biotic vs Abiotic", "Limiting Factors", "Taxonomy", "Natural Selection", "Evolution", "Speciation", "Evidence for Evolution"].map((t) => (
                <span key={t} className="text-xs font-semibold bg-lime-500/20 text-lime-200 px-3 py-1 rounded-full">{t}</span>
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
              className={`px-4 py-3 text-sm font-semibold border-b-2 whitespace-nowrap transition-colors ${u.active ? "border-lime-600 text-lime-700" : "border-transparent text-muted-foreground hover:text-foreground"}`}>
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
                "Describe the levels of ecological organisation from individual to biosphere",
                "Compare biotic and abiotic factors and explain how they interact to define an ecosystem",
                "Identify and explain limiting factors that regulate population size, including density-dependent and density-independent factors",
                "Explain the difference between habitat and niche, and describe interspecific competition and the competitive exclusion principle",
                "Use binomial nomenclature correctly and classify organisms into major taxonomic groups and kingdoms",
                "Describe three types of adaptations (structural, physiological, behavioural) and relate each to natural selection",
                "Compare Lamarck's hypothesis of evolution with Darwin's theory of natural selection",
                "State the four conditions required for natural selection to occur",
                "Evaluate multiple lines of evidence supporting the theory of evolution",
                "Distinguish between gradualism and punctuated equilibrium as models of evolutionary change",
              ].map((o, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted/40 border">
                  <div className="w-2 h-2 rounded-full bg-lime-500 mt-1.5 shrink-0" />
                  <p className="text-sm text-foreground/80 leading-relaxed">{o}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Section 1: Ecosystem Organisation */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <span className="bg-lime-600 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">Section 1</span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">Ecosystem Organisation</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="space-y-6">
              <motion.div variants={fadeUp}>
                <Card className="border-l-4 border-l-lime-500">
                  <CardContent className="p-6">
                    <h3 className="font-serif font-bold text-lg mb-4 text-lime-800">Levels of Ecological Hierarchy</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr className="bg-lime-50">
                            <th className="border border-lime-200 px-3 py-2 text-left font-bold text-lime-800">Level</th>
                            <th className="border border-lime-200 px-3 py-2 text-left font-bold text-lime-800">Definition</th>
                            <th className="border border-lime-200 px-3 py-2 text-left font-bold text-lime-800">Alberta Example</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            ["Individual (Organism)", "A single living thing", "One white-tailed deer"],
                            ["Species", "Organisms that can interbreed and produce fertile offspring", "White-tailed deer (Odocoileus virginianus)"],
                            ["Population", "All individuals of the same species in an area at the same time", "All white-tailed deer in Elk Island National Park"],
                            ["Community", "All populations of different species living together in an area", "Deer, wolves, elk, aspen, grasses, fungi at Elk Island"],
                            ["Ecosystem", "Community + its abiotic environment (water, soil, climate, etc.)", "Elk Island boreal ecosystem"],
                            ["Biome", "Large geographic region with characteristic climate and biota", "Boreal forest / Taiga biome across northern Alberta"],
                            ["Biosphere", "All living organisms and their environments on Earth", "All life from deep ocean to upper atmosphere"],
                          ].map(([lvl, def, ex], i) => (
                            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-lime-50/30"}>
                              <td className="border border-lime-100 px-3 py-2 font-semibold text-lime-700">{lvl}</td>
                              <td className="border border-lime-100 px-3 py-2 text-muted-foreground">{def}</td>
                              <td className="border border-lime-100 px-3 py-2 text-muted-foreground text-xs">{ex}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeUp}>
                <Card className="border-l-4 border-l-lime-500">
                  <CardContent className="p-6">
                    <h3 className="font-serif font-bold text-lg mb-4 text-lime-800">Biotic vs Abiotic Factors</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-lime-700 mb-3">Biotic Factors (living)</p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {["Producers (plants, algae)", "Consumers (herbivores, carnivores)", "Decomposers (bacteria, fungi)", "Disease-causing organisms (pathogens)", "Parasites and symbionts", "Competitors (intraspecific and interspecific)", "Predators and prey relationships"].map((f) => (
                            <li key={f} className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-lime-400 shrink-0" />{f}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-3">Abiotic Factors (non-living)</p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {["Temperature (mean, range, extremes)", "Precipitation / water availability", "Light intensity and photoperiod", "Soil composition, pH, and nutrient content", "Wind speed and direction", "Altitude / topography", "Salinity (especially aquatic systems)"].map((f) => (
                            <li key={f} className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-400 shrink-0" />{f}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeUp}>
                <Card className="border-l-4 border-l-lime-500">
                  <CardContent className="p-6">
                    <h3 className="font-serif font-bold text-lg mb-4 text-lime-800">Limiting Factors &amp; Carrying Capacity</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      A <strong>limiting factor</strong> is any abiotic or biotic variable that prevents a population from growing beyond a certain size. <strong>Carrying capacity (K)</strong> is the maximum population size an environment can sustainably support given available resources.
                    </p>
                    <div className="overflow-x-auto mb-4">
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr className="bg-lime-50">
                            <th className="border border-lime-200 px-3 py-2 text-left font-bold text-lime-800">Type</th>
                            <th className="border border-lime-200 px-3 py-2 text-left font-bold text-lime-800">Limiting Factor</th>
                            <th className="border border-lime-200 px-3 py-2 text-left font-bold text-lime-800">Effect on Population</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            ["Density-Dependent", "Food / nutrient competition", "Stronger effect as population grows"],
                            ["Density-Dependent", "Disease and parasites", "Spreads faster in crowded populations"],
                            ["Density-Dependent", "Predation", "More predators attracted to dense prey populations"],
                            ["Density-Dependent", "Territoriality and stress", "Social conflict increases at high densities"],
                            ["Density-Independent", "Temperature extremes / wildfire", "Kills proportion of population regardless of density"],
                            ["Density-Independent", "Flooding or drought", "Acts equally on small or large populations"],
                            ["Density-Independent", "Volcanic eruption / earthquake", "Sudden catastrophic reduction — no density effect"],
                          ].map(([type, factor, effect], i) => (
                            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-lime-50/20"}>
                              <td className={`border border-lime-100 px-3 py-2 text-xs font-bold ${type === "Density-Dependent" ? "text-lime-700" : "text-orange-700"}`}>{type}</td>
                              <td className="border border-lime-100 px-3 py-2 text-muted-foreground">{factor}</td>
                              <td className="border border-lime-100 px-3 py-2 text-muted-foreground text-xs">{effect}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                      <p className="text-xs font-bold text-amber-800 mb-1">Population Growth Curves</p>
                      <p className="text-sm text-amber-900 leading-relaxed">
                        <strong>J-curve (exponential growth)</strong> — population grows without limit (unrealistic; only occurs when resources are unlimited). <strong>S-curve (logistic growth)</strong> — population grows rapidly at first, then slows as it approaches carrying capacity K. Logistic growth is realistic for most populations.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeUp}>
                <Card className="border-l-4 border-l-lime-500">
                  <CardContent className="p-6">
                    <h3 className="font-serif font-bold text-lg mb-4 text-lime-800">Habitat vs Niche</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                        <p className="font-bold text-green-800 mb-2">Habitat</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">The <strong>physical place</strong> where an organism lives. Described by location, physical features, and associated species. A habitat is the organism's "address."</p>
                        <p className="text-xs text-green-700 mt-2 font-medium">Example: A beaver's habitat is a freshwater stream with aspen and willow in Alberta's boreal zone.</p>
                      </div>
                      <div className="bg-lime-50 border border-lime-200 rounded-xl p-4">
                        <p className="font-bold text-lime-800 mb-2">Ecological Niche</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">An organism's <strong>functional role</strong> in its ecosystem — what it eats, when it's active, how it reproduces, what it tolerates. An organism's niche is its "profession."</p>
                        <p className="text-xs text-lime-700 mt-2 font-medium">Example: A beaver's niche includes dam-building (engineer), herbivory of bark, and creating wetland habitat for other species.</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-muted/30 border rounded-lg p-4">
                        <p className="font-bold text-sm mb-2">Fundamental vs Realized Niche</p>
                        <p className="text-xs text-muted-foreground leading-relaxed"><strong>Fundamental niche:</strong> The full range of conditions an organism can potentially tolerate (without competition).<br /><strong>Realized niche:</strong> The actual niche occupied due to competition, predation, and other biotic limits. Always smaller than or equal to the fundamental niche.</p>
                      </div>
                      <div className="bg-muted/30 border rounded-lg p-4">
                        <p className="font-bold text-sm mb-2">Competitive Exclusion Principle</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">Two species with <strong>identical niches</strong> cannot coexist in the same place indefinitely. One will out-compete the other and drive it to local extinction or force it to adapt to a different niche (niche partitioning). Example: Gauze's experiments with Paramecium.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeUp}>
                <Card className="border-l-4 border-l-lime-500">
                  <CardContent className="p-6">
                    <h3 className="font-serif font-bold text-lg mb-4 text-lime-800">Species Interactions</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr className="bg-lime-50">
                            <th className="border border-lime-200 px-3 py-2 text-left font-bold text-lime-800">Interaction</th>
                            <th className="border border-lime-200 px-3 py-2 text-center font-bold text-lime-800">Species A</th>
                            <th className="border border-lime-200 px-3 py-2 text-center font-bold text-lime-800">Species B</th>
                            <th className="border border-lime-200 px-3 py-2 text-left font-bold text-lime-800">Alberta Example</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            ["Mutualism", "+", "+", "Bees pollinating wildflowers; mycorrhizal fungi + aspen roots"],
                            ["Commensalism", "+", "0", "Cattle egrets follow bison to catch insects stirred up by their hooves"],
                            ["Parasitism", "+", "−", "Tapeworm (parasite) + moose (host); mistletoe + host tree"],
                            ["Predation", "+", "−", "Wolf + deer; great horned owl + snowshoe hare"],
                            ["Competition", "−", "−", "Coyotes and wolves competing for prey territory in Alberta"],
                            ["Amensalism", "0", "−", "Black walnut releases juglone toxin, inhibiting nearby plants"],
                          ].map(([inter, a, b, ex], i) => (
                            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-lime-50/20"}>
                              <td className="border border-lime-100 px-3 py-2 font-semibold text-lime-700">{inter}</td>
                              <td className={`border border-lime-100 px-3 py-2 text-center font-bold text-lg ${a === "+" ? "text-green-600" : a === "−" ? "text-red-600" : "text-gray-400"}`}>{a}</td>
                              <td className={`border border-lime-100 px-3 py-2 text-center font-bold text-lg ${b === "+" ? "text-green-600" : b === "−" ? "text-red-600" : "text-gray-400"}`}>{b}</td>
                              <td className="border border-lime-100 px-3 py-2 text-muted-foreground text-xs">{ex}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            <motion.figure
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden border shadow-sm"
            >
              <a href="https://kaiserscience.wordpress.com/biology-the-living-environment/ecology/population-community-ecosystem-biosphere/" target="_blank" rel="noopener noreferrer" className="block">
                <img
                  src="/images/ecological-levels-hierarchy.png"
                  alt="Ecological Levels of Organisation"
                  className="w-full object-contain bg-white hover:opacity-90 transition-opacity"
                  style={{ maxHeight: 500 }}
                />
              </a>
              <figcaption className="px-5 py-3 text-xs text-center text-muted-foreground border-t">
                <strong>Ecological Levels of Organisation</strong> — from atoms and molecules up through cells, tissues, organs, organisms, populations, communities, ecosystems, and the biosphere
                <br />
                <a href="https://kaiserscience.wordpress.com/biology-the-living-environment/ecology/population-community-ecosystem-biosphere/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium mt-1 inline-block">Source: kaiserscience.wordpress.com</a>
              </figcaption>
            </motion.figure>
          </section>

          {/* Section 2: Taxonomy */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <span className="bg-lime-600 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">Section 2</span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">Taxonomy &amp; Classification</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="space-y-6">
              <motion.div variants={fadeUp}>
                <Card className="border-l-4 border-l-emerald-500">
                  <CardContent className="p-6">
                    <h3 className="font-serif font-bold text-lg mb-4 text-emerald-800">Taxonomic Hierarchy &amp; Binomial Nomenclature</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-3">Taxonomic Classification (broadest → most specific)</p>
                        <div className="space-y-1">
                          {[
                            ["Domain", "Eukarya"],
                            ["Kingdom", "Animalia"],
                            ["Phylum", "Chordata"],
                            ["Class", "Mammalia"],
                            ["Order", "Carnivora"],
                            ["Family", "Canidae"],
                            ["Genus", "Canis"],
                            ["Species", "lupus"],
                          ].map(([rank, ex], idx) => (
                            <div key={rank} className="flex items-center gap-3" style={{ paddingLeft: `${idx * 8}px` }}>
                              <span className="text-xs text-emerald-700 font-bold w-16 shrink-0">{rank}</span>
                              <span className="text-sm text-muted-foreground italic">{ex}</span>
                            </div>
                          ))}
                        </div>
                        <p className="text-xs text-emerald-700 font-semibold mt-3">Full name: <em>Canis lupus</em> (Grey Wolf)</p>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                          <p className="text-xs font-bold text-emerald-800 mb-2">Rules of Binomial Nomenclature</p>
                          <ul className="text-xs text-muted-foreground space-y-1">
                            <li>• Genus name is capitalized; species epithet is lowercase</li>
                            <li>• Both names italicized when typed; underlined when handwritten</li>
                            <li>• Genus can be abbreviated after first use: <em>C. lupus</em></li>
                            <li>• System developed by Carl Linnaeus (1758)</li>
                            <li>• Latin or Latinized Greek — understood by scientists worldwide</li>
                          </ul>
                        </div>
                        <div className="bg-muted/30 border rounded-xl p-4">
                          <p className="text-xs font-bold mb-2">Memory Aid — King Philip...</p>
                          <p className="text-xs text-muted-foreground font-mono">
                            <strong>D</strong>o <strong>K</strong>ind <strong>P</strong>hysicists <strong>C</strong>ome <strong>O</strong>ver <strong>F</strong>or <strong>G</strong>ood <strong>S</strong>oup?<br />
                            Domain, Kingdom, Phylum, Class, Order, Family, Genus, Species
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeUp}>
                <Card className="border-l-4 border-l-emerald-500">
                  <CardContent className="p-6">
                    <h3 className="font-serif font-bold text-lg mb-4 text-emerald-800">The Six Kingdoms</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr className="bg-emerald-50">
                            <th className="border border-emerald-200 px-3 py-2 text-left font-bold text-emerald-800">Kingdom</th>
                            <th className="border border-emerald-200 px-3 py-2 text-left font-bold text-emerald-800">Cell Type</th>
                            <th className="border border-emerald-200 px-3 py-2 text-left font-bold text-emerald-800">Cell # / Nutrition</th>
                            <th className="border border-emerald-200 px-3 py-2 text-left font-bold text-emerald-800">Examples</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            ["Eubacteria", "Prokaryote", "Unicellular / autotroph or heterotroph", "E. coli, Cyanobacteria, Streptococcus"],
                            ["Archaebacteria", "Prokaryote", "Unicellular / chemolithotrophs or methanogens", "Methanogens, halophiles, thermophiles"],
                            ["Protista", "Eukaryote", "Mostly unicellular / autotroph or heterotroph", "Amoeba, Paramecium, Euglena, algae"],
                            ["Fungi", "Eukaryote", "Multi/unicellular / heterotroph (absorptive)", "Mushrooms, mould, yeast, bracket fungi"],
                            ["Plantae", "Eukaryote", "Multicellular / autotroph (photosynthesis)", "Mosses, ferns, conifers, flowering plants"],
                            ["Animalia", "Eukaryote", "Multicellular / heterotroph (ingestion)", "Insects, fish, amphibians, reptiles, birds, mammals"],
                          ].map(([k, c, n, ex], i) => (
                            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-emerald-50/20"}>
                              <td className="border border-emerald-100 px-3 py-2 font-bold text-emerald-700">{k}</td>
                              <td className="border border-emerald-100 px-3 py-2 text-muted-foreground">{c}</td>
                              <td className="border border-emerald-100 px-3 py-2 text-muted-foreground text-xs">{n}</td>
                              <td className="border border-emerald-100 px-3 py-2 text-muted-foreground text-xs">{ex}</td>
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

          {/* Section 3: Natural Selection & Evolution */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <span className="bg-lime-600 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">Section 3</span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">Variation, Adaptations &amp; Natural Selection</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="space-y-6">
              <motion.div variants={fadeUp}>
                <Card className="border-l-4 border-l-lime-500">
                  <CardContent className="p-6">
                    <h3 className="font-serif font-bold text-lg mb-4 text-lime-800">Types of Adaptations</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        { type: "Structural", color: "teal", desc: "Physical features of an organism's body that improve survival or reproduction.", examples: ["Thick fur coat of Arctic wolves (insulation)", "Hollow bones in birds (flight efficiency)", "Elongated necks of moose for browsing willows", "Cryptic coloration (camouflage) of ptarmigan"] },
                        { type: "Physiological", color: "amber", desc: "Internal biochemical or metabolic processes that enhance survival.", examples: ["Antifreeze proteins in Arctic fish blood", "Venom production in snakes for prey capture", "Dormancy and torpor in bears through Alberta winters", "Enzyme function at high temperatures in thermophiles"] },
                        { type: "Behavioural", color: "rose", desc: "Actions or learned/instinctive behaviours that increase fitness.", examples: ["Salmon spawning migration to birth rivers", "Bison huddling together in winter storms", "Snowshoe hares being nocturnal to avoid hawks", "Alarm calls in ground squirrel colonies"] },
                      ].map((a) => (
                        <div key={a.type} className={`bg-${a.color}-50 border border-${a.color}-200 rounded-xl p-4`}>
                          <p className={`font-bold text-${a.color}-800 mb-2`}>{a.type} Adaptations</p>
                          <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{a.desc}</p>
                          <ul className="space-y-1">
                            {a.examples.map((e) => (
                              <li key={e} className={`text-xs text-${a.color}-800 flex items-start gap-1`}>
                                <span className="mt-0.5">•</span>{e}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeUp}>
                <Card className="border-l-4 border-l-lime-500">
                  <CardContent className="p-6">
                    <h3 className="font-serif font-bold text-lg mb-4 text-lime-800">Lamarck vs Darwin</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr className="bg-lime-50">
                            <th className="border border-lime-200 px-3 py-2 text-left font-bold text-lime-800">Feature</th>
                            <th className="border border-lime-200 px-3 py-2 text-left font-bold text-lime-800">Lamarck (1809)</th>
                            <th className="border border-lime-200 px-3 py-2 text-left font-bold text-lime-800">Darwin &amp; Wallace (1859)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            ["Mechanism", "Inheritance of acquired characteristics", "Natural selection acting on heritable variation"],
                            ["Source of variation", "Use and disuse of body parts creates change", "Random heritable variation already exists in population"],
                            ["Unit of change", "Individual organism changes during its lifetime", "Populations change over generations, not individuals"],
                            ["Inheritance", "Acquired traits passed to offspring (incorrect)", "Only heritable traits can be selected (correct)"],
                            ["Giraffe neck example", "Stretched necks during life; offspring inherited longer necks", "Giraffes with longer necks survived and reproduced more — passed on longer neck genes"],
                            ["Scientific status", "Disproved — acquired traits not inherited (no genetic mechanism)", "Supported by fossil record, genetics, molecular biology, and direct observation"],
                          ].map(([feat, lam, dar], i) => (
                            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-lime-50/20"}>
                              <td className="border border-lime-100 px-3 py-2 font-semibold text-lime-700 text-xs">{feat}</td>
                              <td className="border border-lime-100 px-3 py-2 text-muted-foreground text-xs">{lam}</td>
                              <td className="border border-lime-100 px-3 py-2 text-muted-foreground text-xs">{dar}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeUp}>
                <Card className="border-l-4 border-l-lime-500">
                  <CardContent className="p-6">
                    <h3 className="font-serif font-bold text-lg mb-4 text-lime-800">Four Conditions for Natural Selection</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      {[
                        { num: "1", cond: "Overproduction", desc: "Populations produce more offspring than the environment can support. Most offspring will not survive to reproduce. This creates competition.", example: "A salmon produces thousands of eggs; most die before reaching adulthood." },
                        { num: "2", cond: "Variation", desc: "Individuals within a population differ from each other in heritable traits. Variation arises through mutations and sexual reproduction (meiosis/crossing over).", example: "Some snowshoe hares have thicker winter fur than others due to genetic differences." },
                        { num: "3", cond: "Inheritance", desc: "Traits must be heritable — able to pass from parents to offspring through genes. Acquired (non-genetic) traits cannot be selected.", example: "Longer-legged deer pass their longer-leg genes to offspring." },
                        { num: "4", cond: "Differential Survival & Reproduction", desc: "Individuals with advantageous traits survive and reproduce more than others. This is 'survival of the fittest' — 'fitness' means reproductive success.", example: "White Arctic hares are camouflaged, survive more, and reproduce more than darker hares." },
                      ].map((c) => (
                        <div key={c.num} className="bg-lime-50 border border-lime-200 rounded-xl p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-6 h-6 bg-lime-700 rounded-full flex items-center justify-center shrink-0">
                              <span className="text-white text-xs font-bold">{c.num}</span>
                            </div>
                            <p className="font-bold text-lime-800 text-sm">{c.cond}</p>
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed mb-2">{c.desc}</p>
                          <p className="text-xs text-lime-700 font-semibold italic">↳ {c.example}</p>
                        </div>
                      ))}
                    </div>
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                      <p className="text-xs font-bold text-amber-800 mb-1">Key Distinction for Exams</p>
                      <p className="text-xs text-amber-900 leading-relaxed">Natural selection does not create new traits — it <em>selects</em> from existing variation. The environment does not "cause" mutations; it determines which pre-existing variants survive and reproduce.</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeUp}>
                <Card className="border-l-4 border-l-lime-500">
                  <CardContent className="p-6">
                    <h3 className="font-serif font-bold text-lg mb-4 text-lime-800">Evidence for Evolution</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { type: "Fossil Record", desc: "Fossils show progression of life forms over geological time. Transitional fossils (e.g., Tiktaalik — fish-to-amphibian; Archaeopteryx — dinosaur-to-bird) document evolutionary change. Alberta has exceptional dinosaur fossil record in the Badlands." },
                        { type: "Homologous Structures", desc: "Same bone structure in different species shows common ancestry despite different functions. Human arm, whale flipper, bat wing, horse foreleg all have same humerus-radius-ulna-carpals pattern." },
                        { type: "Analogous Structures", desc: "Similar function but different structure — due to convergent evolution, NOT common ancestry. Bird wing vs insect wing are analogous. Evidence that same environmental pressures can produce similar solutions independently." },
                        { type: "Vestigial Structures", desc: "Non-functional remnants of structures that were functional in ancestors. Human coccyx (remnant tail), whale pelvic bones, appendix. Vestigial structures show descent from different ancestors." },
                        { type: "Biogeography", desc: "Species distribution across continents matches evolutionary history and continental drift. Unique species on islands (Galápagos finches) show evolution in isolation — the variation that inspired Darwin." },
                        { type: "Molecular Biology", desc: "DNA and protein sequence similarities reflect evolutionary relatedness. Humans and chimpanzees share ~98.7% DNA. Cytochrome c (electron transport protein) is nearly identical across species — shows deep common ancestry." },
                      ].map((e) => (
                        <div key={e.type} className="bg-muted/30 border rounded-xl p-4">
                          <p className="font-bold text-sm text-lime-700 mb-2">{e.type}</p>
                          <p className="text-xs text-muted-foreground leading-relaxed">{e.desc}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeUp}>
                <Card className="border-l-4 border-l-lime-500">
                  <CardContent className="p-6">
                    <h3 className="font-serif font-bold text-lg mb-4 text-lime-800">Speciation &amp; Patterns of Evolution</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-lime-700 mb-3">Types of Speciation</p>
                        <div className="space-y-3">
                          {[
                            { name: "Allopatric Speciation", desc: "Geographic barrier (mountain range, river, glacier) separates one population into two. Each evolves independently → reproductive isolation → new species. Most common type. Alberta example: different squirrel species on either side of the Rockies." },
                            { name: "Sympatric Speciation", desc: "New species arises within the same geographic area, usually through polyploidy (extra chromosome sets) in plants, or ecological niche divergence. Less common in animals." },
                          ].map((s) => (
                            <div key={s.name} className="bg-lime-50 border border-lime-200 rounded-lg p-3">
                              <p className="font-bold text-xs text-lime-800 mb-1">{s.name}</p>
                              <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-lime-700 mb-3">Pace of Evolution</p>
                        <div className="space-y-3">
                          {[
                            { name: "Gradualism", desc: "Evolution proceeds slowly and continuously through accumulation of small changes over long periods. Predicts many transitional forms in fossil record. Supported by Darwin's original model." },
                            { name: "Punctuated Equilibrium", desc: "Evolution occurs in rapid bursts separated by long periods of stasis (little change). Proposed by Gould & Eldredge (1972) to explain gaps in the fossil record. Both gradualism and punctuated equilibrium are observed in different lineages." },
                          ].map((s) => (
                            <div key={s.name} className="bg-muted/30 border rounded-lg p-3">
                              <p className="font-bold text-xs mb-1">{s.name}</p>
                              <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                            </div>
                          ))}
                        </div>
                        <div className="mt-3 bg-amber-50 border border-amber-200 rounded-lg p-3">
                          <p className="text-xs font-bold text-amber-800 mb-1">Mass Extinctions</p>
                          <p className="text-xs text-amber-900 leading-relaxed">Five major mass extinctions have occurred, each wiping out 50–96% of species. The most famous (K-Pg event, 66 Ma) ended the dinosaurs. Mass extinctions rapidly open ecological niches, accelerating evolution of surviving groups (adaptive radiation). Scientists warn of a potential 6th mass extinction driven by human activity.</p>
                        </div>
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
                ["Population", "All individuals of one species in a defined area at the same time"],
                ["Community", "All populations of different species sharing an ecosystem"],
                ["Carrying Capacity (K)", "Maximum population size an environment can sustainably support"],
                ["Habitat", "The physical place where an organism lives"],
                ["Niche", "The functional role of an organism in its ecosystem (what it eats, when active, etc.)"],
                ["Competitive Exclusion", "Two species with identical niches cannot coexist — one eliminates the other"],
                ["Binomial Nomenclature", "Two-part scientific naming system (Genus + species) — e.g., Canis lupus"],
                ["Adaptation", "Heritable trait that improves an organism's fitness in its environment"],
                ["Natural Selection", "Differential reproductive success due to heritable traits — the mechanism of evolution"],
                ["Fitness", "Reproductive success — an organism's ability to pass genes to the next generation"],
                ["Speciation", "Formation of new species from ancestral populations, usually via reproductive isolation"],
                ["Homologous Structures", "Same structure, different function — evidence of common ancestry"],
              ].map(([term, def], i) => (
                <motion.div key={i} variants={fadeUp} className="bg-muted/40 border rounded-lg p-3">
                  <p className="text-xs font-bold text-lime-700 mb-1">{term}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{def}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          <UnitCompleteToggle unitId="biology-20-unit-b" />

          {/* Other Units Nav */}
          <section className="border-t pt-10">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Continue Exploring Biology 20</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "Unit A", title: "Energy & Matter Exchange in the Biosphere", href: "/resources/biology-20/unit-a" },
                { label: "Unit C", title: "Photosynthesis & Cellular Respiration", href: "/resources/biology-20/unit-c" },
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
