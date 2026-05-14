import { useState, useCallback } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ChevronRight, RotateCcw, Trophy, CheckCircle, XCircle } from "lucide-react";

/* ── Quiz Data ───────────────────────────────────────────────────── */

type Unit = "A" | "B" | "C" | "D";

interface Question {
  id: string;
  unit: Unit;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

const allQuestions: Question[] = [
  // ── Unit A ──────────────────────────────────────────────────────
  {
    id: "a1", unit: "A",
    question: "A grassland ecosystem contains 10,000 kJ of energy at the producer level. How much energy is available to secondary consumers?",
    options: ["10 kJ", "100 kJ", "1,000 kJ", "5,000 kJ"],
    correctIndex: 1,
    explanation: "The 10% rule: producers (10,000 kJ) → primary consumers (1,000 kJ, 10% of 10,000) → secondary consumers (100 kJ, 10% of 1,000). About 90% is lost as heat at each trophic level transfer.",
  },
  {
    id: "a2", unit: "A",
    question: "Which type of ecological pyramid can be inverted in an aquatic ecosystem, and why?",
    options: ["Pyramid of energy, because the sun provides infinite energy", "Pyramid of biomass, because phytoplankton have low standing biomass but high productivity", "Pyramid of numbers, because small organisms always outnumber large ones", "All pyramid types can be inverted in aquatic ecosystems"],
    correctIndex: 1,
    explanation: "Phytoplankton reproduce very rapidly — their productivity (energy fixed per unit time) is high, but at any given moment their standing biomass is low because zooplankton constantly graze them down. The pyramid of energy can never be inverted because energy always decreases at each level.",
  },
  {
    id: "a3", unit: "A",
    question: "What is the PRIMARY reason the phosphorus cycle is considered the slowest major biogeochemical cycle?",
    options: ["Phosphorus is not needed by living organisms", "Phosphorus has no stable atmospheric gaseous phase", "Phosphorus is completely destroyed by decomposers", "Phosphorus is only found deep in ocean sediments"],
    correctIndex: 1,
    explanation: "Unlike carbon (as CO₂) and nitrogen (as N₂), phosphorus does not form stable gases under normal conditions. It can only cycle through weathering of phosphate rocks, biological uptake, death, decomposition, and sedimentation — a much slower geological process.",
  },
  {
    id: "a4", unit: "A",
    question: "Which bacteria are responsible for denitrification — returning nitrogen to the atmosphere as N₂?",
    options: ["Rhizobium (lives in legume root nodules)", "Nitrosomonas (converts NH₄⁺ to NO₂⁻)", "Pseudomonas (anaerobic, converts NO₃⁻ to N₂)", "Azotobacter (free-living nitrogen fixer)"],
    correctIndex: 2,
    explanation: "Denitrifying bacteria (e.g., Pseudomonas) are anaerobic and convert nitrates (NO₃⁻) back to nitrogen gas (N₂), completing the nitrogen cycle by returning nitrogen to the atmosphere. They thrive in waterlogged, oxygen-depleted soils.",
  },
  {
    id: "a5", unit: "A",
    question: "Biomagnification of fat-soluble toxins like DDT occurs primarily because these compounds:",
    options: ["Are water-soluble and easily absorbed from water at every trophic level", "Are fat-soluble, stored indefinitely in fatty tissues, and cannot be excreted", "Are produced by organisms at higher trophic levels in increasing amounts", "Break down slowly in sunlight, accumulating on plant leaves"],
    correctIndex: 1,
    explanation: "Lipophilic (fat-soluble) toxins like DDT and PCBs cannot be excreted through the kidneys. They accumulate in fatty tissues and become increasingly concentrated at each trophic level as consumers eat many prey organisms. By the top of the food chain, concentrations can be millions of times higher than in water.",
  },
  {
    id: "a6", unit: "A",
    question: "Human use of synthetic fertilizers (Haber-Bosch process) primarily disrupts which biogeochemical cycle, and what is the consequence?",
    options: ["Carbon cycle — increases greenhouse gases in the atmosphere", "Nitrogen cycle — causes eutrophication of aquatic ecosystems", "Phosphorus cycle — depletes soil calcium and kills forests", "Water cycle — reduces precipitation in agricultural regions"],
    correctIndex: 1,
    explanation: "Industrial nitrogen fixation via the Haber-Bosch process doubles the natural rate of nitrogen fixation globally. Excess nitrates leach into lakes and rivers, causing algal blooms → decomposers consume dissolved O₂ → hypoxia → fish kills. This is eutrophication.",
  },
  {
    id: "a7", unit: "A",
    question: "Which biome has the highest net primary productivity (NPP)?",
    options: ["Open ocean (due to its vast area)", "Alberta boreal forest", "Tropical rainforest", "Temperate deciduous forest"],
    correctIndex: 2,
    explanation: "Tropical rainforests receive year-round intense sunlight, warmth, and rainfall, supporting the highest NPP (~2,200 g/m²/yr). Despite the ocean's vast area, its NPP per square metre is very low (~125 g/m²/yr) due to nutrient limitation.",
  },
  {
    id: "a8", unit: "A",
    question: "Why is the biosphere described as a 'closed system for matter' but an 'open system for energy'?",
    options: ["Matter is created by organisms but energy is not; energy only comes from the Moon", "Energy cycles through ecosystems repeatedly; matter flows one-way through food chains", "Matter cycles continuously and atoms are never lost; energy flows one-way and exits as heat", "Both matter and energy are recycled equally — this distinction is incorrect"],
    correctIndex: 2,
    explanation: "Energy enters from the Sun and exits as heat — it flows one-way through trophic levels and cannot be recycled. Matter (carbon, nitrogen, phosphorus, water atoms) cycles continuously through biotic and abiotic components in biogeochemical cycles without being destroyed.",
  },
  {
    id: "a9", unit: "A",
    question: "What is the Great Oxygenation Event, and what organisms caused it?",
    options: ["A period of rapid evolution caused by increased oxygen from volcanic eruptions", "The rise of O₂ in Earth's atmosphere ~2.4 billion years ago caused by cyanobacteria (stromatolites)", "An increase in atmospheric CO₂ caused by the evolution of cellular respiration", "The first appearance of aerobic bacteria in deep-sea hydrothermal vents"],
    correctIndex: 1,
    explanation: "Ancient cyanobacteria (which formed layered microbial mats called stromatolites) were the first photosynthetic organisms. Over millions of years, their oxygen byproduct from photosynthesis accumulated in the atmosphere, transforming Earth from a reducing environment to an oxygen-rich one — making aerobic life possible.",
  },
  {
    id: "a10", unit: "A",
    question: "A student discovers that a lake near an Alberta farm has very low dissolved oxygen levels and a dense algal bloom. What is the most likely cause?",
    options: ["Acid precipitation from industrial SO₂ emissions lowering lake pH", "Excess nutrients (N and P) from agricultural runoff causing eutrophication", "Ozone depletion allowing excess UV radiation to sterilize the lake surface", "Introduction of an invasive predatory fish species that eliminated native fish"],
    correctIndex: 1,
    explanation: "This is a classic eutrophication scenario. Excess nitrogen and phosphorus from fertilizer runoff stimulate algal growth. When algae die, decomposers respire aerobically, consuming dissolved O₂ → hypoxia. Acid precipitation would lower pH, not cause algal blooms.",
  },

  // ── Unit B ──────────────────────────────────────────────────────
  {
    id: "b1", unit: "B",
    question: "Which of the following is NOT a condition required for natural selection to occur?",
    options: ["Overproduction of offspring beyond what the environment can support", "Heritable variation among individuals in the population", "Directed mutations that arise in response to environmental stress", "Differential survival and reproduction based on inherited traits"],
    correctIndex: 2,
    explanation: "Natural selection acts on PRE-EXISTING heritable variation — it does not direct or cause mutations. This was Lamarck's error. Mutations are random; the environment selects which variants are more fit. Options A, B, and D are all legitimate conditions for natural selection.",
  },
  {
    id: "b2", unit: "B",
    question: "What does the competitive exclusion principle state?",
    options: ["Competition always leads to extinction of both competing species", "Two species with identical ecological niches cannot coexist indefinitely in the same area", "Species always evolve to cooperate rather than compete over time", "Competition increases biodiversity by forcing species to occupy more niches"],
    correctIndex: 1,
    explanation: "Gause's competitive exclusion principle: two species that occupy exactly the same niche cannot coexist — one will outcompete the other, leading to local extinction of the weaker competitor or forcing it to evolve to use a different niche (niche partitioning).",
  },
  {
    id: "b3", unit: "B",
    question: "Which kingdom contains organisms that are prokaryotic and are found in extreme environments such as deep-sea hydrothermal vents and salt lakes?",
    options: ["Eubacteria", "Protista", "Archaebacteria", "Fungi"],
    correctIndex: 2,
    explanation: "Archaebacteria (Archaea) are prokaryotes adapted to extreme environments: methanogens (produce CH₄ in swamps and animal guts), halophiles (high salt — e.g., the Dead Sea), and thermophiles (high temperature hot springs). Eubacteria are typical bacteria like E. coli.",
  },
  {
    id: "b4", unit: "B",
    question: "Homologous structures (e.g., the human arm, whale flipper, and bat wing) are evidence of:",
    options: ["Convergent evolution — similar environments produce similar body forms", "Common ancestry — the organisms share a common ancestor with this basic limb structure", "Identical ecological niches among these very different species", "Recent speciation events from a common population"],
    correctIndex: 1,
    explanation: "Homologous structures have the same underlying skeletal structure (humerus-radius-ulna-carpals) despite very different functions. This is because they all descended from a common ancestor that had this limb structure — divergent evolution modified it for different purposes.",
  },
  {
    id: "b5", unit: "B",
    question: "A population of rabbits in a valley grows rapidly then stabilizes at 500 individuals. This stable point is best described as:",
    options: ["The fundamental niche of the rabbit population", "The carrying capacity (K) of the environment for rabbits", "The point of competitive exclusion between two competing species", "The result of density-independent limiting factors"],
    correctIndex: 1,
    explanation: "Carrying capacity (K) is the maximum population size an environment can sustainably support given available resources. When the population stabilizes at K, density-dependent limiting factors (food competition, disease, predation) balance birth and death rates — producing the classic S-curve of logistic growth.",
  },
  {
    id: "b6", unit: "B",
    question: "A bird's nest-building behaviour that improves its reproductive success is an example of which type of adaptation?",
    options: ["Structural adaptation — physical features of the body", "Physiological adaptation — internal biochemical processes", "Behavioural adaptation — actions that increase fitness", "Vestigial adaptation — a remnant of an ancestral trait"],
    correctIndex: 2,
    explanation: "Nest-building is a behavioural adaptation — an action (whether learned or instinctive) that improves the organism's survival or reproductive success. Structural adaptations are physical body features (e.g., beak shape); physiological adaptations are internal processes (e.g., antifreeze proteins).",
  },
  {
    id: "b7", unit: "B",
    question: "The vestigial pelvic bones in modern whale skeletons provide evidence for which of the following?",
    options: ["Whales evolved from fish ancestors via convergent evolution", "Whales evolved from four-limbed terrestrial ancestors who had functional hindlimbs", "The pelvic bones serve an important but undiscovered function in whales", "Whales and humans share a direct recent common ancestor"],
    correctIndex: 1,
    explanation: "Whale pelvic bones are vestigial structures — non-functional remnants of the working hind leg skeleton of their terrestrial ancestors. Fossil evidence (e.g., Pakicetus, Ambulocetus) confirms that whales evolved from hoofed land mammals that returned to the sea ~50 million years ago.",
  },
  {
    id: "b8", unit: "B",
    question: "Punctuated equilibrium differs from gradualism in proposing that:",
    options: ["Evolution occurs only through genetic mutations with no environmental influence", "Species experience long periods of little change punctuated by geologically rapid evolutionary bursts", "Evolution is completely random and not driven by natural selection", "Mass extinctions are the only mechanism of evolutionary change"],
    correctIndex: 1,
    explanation: "Gould & Eldredge (1972) proposed punctuated equilibrium to explain the fossil record pattern of sudden species appearances followed by long stasis — gaps that troubled gradualism. Both models are observed: some lineages show gradual change; others show punctuated patterns.",
  },
  {
    id: "b9", unit: "B",
    question: "In binomial nomenclature, which of the following is correctly written?",
    options: ["Canis Lupus (both names capitalized)", "canis lupus (both names lowercase)", "Canis lupus (genus capitalized, species lowercase)", "CANIS LUPUS (both names in uppercase)"],
    correctIndex: 2,
    explanation: "Binomial nomenclature rules (Linnaeus, 1758): The genus name is CAPITALIZED and the species epithet is lowercase. Both names are italicized when typed (underlined when handwritten). Example: Canis lupus for the grey wolf. The genus can be abbreviated after first use: C. lupus.",
  },
  {
    id: "b10", unit: "B",
    question: "The relationship between mycorrhizal fungi and the roots of aspen trees in an Alberta boreal forest is best described as:",
    options: ["Parasitism — the fungi harm the aspen roots by extracting nutrients", "Commensalism — the fungi benefit but the aspen is unaffected", "Mutualism — both species benefit from the relationship", "Amensalism — the fungi are harmed by chemicals released by aspen roots"],
    correctIndex: 2,
    explanation: "Mutualism (+/+): Mycorrhizal fungi extend into plant root cells and dramatically increase the root's ability to absorb water and phosphorus from soil. In return, the plant provides the fungi with photosynthetically produced sugars. Both benefit — this is one of the most important mutualistic relationships in Alberta's boreal forests.",
  },

  // ── Unit C ──────────────────────────────────────────────────────
  {
    id: "c1", unit: "C",
    question: "In the light-dependent reactions, what is the source of the electrons that ultimately reduce NADP⁺ to NADPH?",
    options: ["CO₂ from the atmosphere", "H₂O (water) split during photolysis in Photosystem II", "RuBP from the Calvin cycle", "FADH₂ produced by the Krebs cycle"],
    correctIndex: 1,
    explanation: "In Photosystem II, water molecules are split (photolysis): 2H₂O → 4H⁺ + 4e⁻ + O₂. These electrons replace those lost by excited chlorophyll a as they are boosted to a higher energy level. The electrons eventually flow through the ETC and PSI, where they reduce NADP⁺ to NADPH. The O₂ released is a byproduct.",
  },
  {
    id: "c2", unit: "C",
    question: "Which plant pigment has the highest Rf value in paper chromatography, and why?",
    options: ["Chlorophyll b (~0.45), because it is the most abundant pigment", "Chlorophyll a (~0.65), because it is the primary photosynthetic pigment", "Xanthophylls (~0.70), because they absorb the most light", "Beta-carotene (~0.95), because it is the least polar pigment"],
    correctIndex: 3,
    explanation: "Rf = distance pigment moved / distance solvent front moved. Beta-carotene is the LEAST polar (most non-polar) pigment — it has the weakest attraction to the polar paper and travels farthest with the non-polar solvent, giving it the highest Rf (~0.95). Chlorophyll b is most polar (highest attraction to paper, lowest Rf ~0.45).",
  },
  {
    id: "c3", unit: "C",
    question: "In which location does the Calvin cycle (light-independent reactions) occur within the chloroplast?",
    options: ["Thylakoid lumen (inside thylakoid sacs)", "Outer mitochondrial membrane", "Stroma (fluid-filled space surrounding thylakoids)", "Cytoplasm of the cell"],
    correctIndex: 2,
    explanation: "The Calvin cycle occurs in the STROMA — the fluid-filled space surrounding the thylakoids within the chloroplast. This is where RuBisCO is found and where CO₂ is fixed onto RuBP and reduced to G3P using the ATP and NADPH produced by the light reactions in the thylakoid membranes.",
  },
  {
    id: "c4", unit: "C",
    question: "A student places a plant in a chamber with saturating light and increases the CO₂ concentration. The rate of photosynthesis increases significantly. What was the limiting factor BEFORE the CO₂ was added?",
    options: ["Light intensity (not enough photons)", "Water availability (stomata were closed)", "CO₂ concentration (insufficient substrate for RuBisCO)", "Temperature (enzymes were too cold to function)"],
    correctIndex: 2,
    explanation: "Since light was already saturating, increasing it further wouldn't help. The fact that adding CO₂ increased the rate proves CO₂ was the limiting factor — there wasn't enough substrate for RuBisCO to fix in the Calvin cycle. The light reactions were producing ATP and NADPH faster than the Calvin cycle could use them.",
  },
  {
    id: "c5", unit: "C",
    question: "What is the NET ATP yield from glycolysis per molecule of glucose?",
    options: ["4 ATP (gross yield)", "2 ATP (net yield after investment phase)", "0 ATP (glycolysis only produces NADH)", "38 ATP (total aerobic yield)"],
    correctIndex: 1,
    explanation: "Glycolysis uses 2 ATP in the investment phase (to phosphorylate glucose and split it), then produces 4 ATP in the payoff phase — a NET gain of 2 ATP per glucose. It also produces 2 NADH and 2 pyruvate. The 38 ATP figure is the total from complete aerobic respiration.",
  },
  {
    id: "c6", unit: "C",
    question: "Which statement about fermentation is correct?",
    options: ["Fermentation produces more ATP than aerobic respiration per glucose", "Fermentation requires oxygen to regenerate NAD⁺ from NADH", "Fermentation allows glycolysis to continue by regenerating NAD⁺ when oxygen is absent", "Fermentation completely oxidizes glucose to CO₂ and H₂O for maximum energy yield"],
    correctIndex: 2,
    explanation: "Without oxygen, the ETC cannot accept electrons from NADH, so NADH accumulates and glycolysis stops (runs out of NAD⁺). Fermentation converts pyruvate to either lactic acid or ethanol while regenerating NAD⁺ — allowing glycolysis to continue producing 2 ATP per glucose, even without oxygen.",
  },
  {
    id: "c7", unit: "C",
    question: "A corn plant (C4) and a wheat plant (C3) are both placed in a hot, dry, low-CO₂ environment. Which will photosynthesize more efficiently, and why?",
    options: ["Wheat (C3), because it has more chlorophyll a and absorbs more light", "Corn (C4), because it concentrates CO₂ near RuBisCO and minimizes photorespiration", "Both will perform equally because heat increases enzyme efficiency", "Neither — both plants would die immediately in these conditions"],
    correctIndex: 1,
    explanation: "In hot, dry conditions, C3 plants close stomata to conserve water → CO₂ drops → RuBisCO binds O₂ instead of CO₂ → photorespiration (wasteful energy loss). C4 plants (like corn) use a two-cell system to pre-fix CO₂ as OAA in mesophyll, then concentrate CO₂ near RuBisCO in bundle sheath cells — minimizing photorespiration and maintaining photosynthesis even in hot, sunny conditions.",
  },
  {
    id: "c8", unit: "C",
    question: "What is the final electron acceptor in the electron transport chain (ETC) of aerobic cellular respiration?",
    options: ["NAD⁺ (nicotinamide adenine dinucleotide, oxidized form)", "FAD (flavin adenine dinucleotide)", "O₂ (molecular oxygen)", "CO₂ released during the Krebs cycle"],
    correctIndex: 2,
    explanation: "Oxygen (O₂) is the final electron acceptor in the ETC. Each O₂ molecule accepts 2 electrons and 2 H⁺ ions to form water (H₂O). This is why aerobic respiration requires oxygen — without it, the ETC backs up, NADH cannot be reoxidized, and cells must rely on inefficient fermentation (only 2 ATP).",
  },
  {
    id: "c9", unit: "C",
    question: "In the Calvin cycle, what is the role of the enzyme RuBisCO?",
    options: ["It splits water molecules to release electrons during photolysis", "It phosphorylates ADP to form ATP using the proton gradient", "It catalyzes the fixation of CO₂ by attaching it to RuBP (5-carbon acceptor)", "It reduces NADP⁺ to NADPH using electrons from the ETC"],
    correctIndex: 2,
    explanation: "RuBisCO (ribulose-1,5-bisphosphate carboxylase/oxygenase) catalyzes the first step of the Calvin cycle: attaching CO₂ to RuBP (5C) to form an unstable 6C compound that immediately splits into two 3-PGA molecules. It is the most abundant protein on Earth and the entry point for nearly all carbon into the biosphere.",
  },
  {
    id: "c10", unit: "C",
    question: "Which of the following sequences correctly describes the fate of carbon in aerobic cellular respiration?",
    options: ["Glucose → CO₂ released in glycolysis → Acetyl-CoA → Krebs cycle → ETC", "Glucose → Pyruvate (glycolysis) → Acetyl-CoA + CO₂ (pyruvate oxidation) → CO₂ released in Krebs cycle → ETC (no carbon)", "Glucose → ETC → Krebs cycle → pyruvate → CO₂ released last", "Glucose → CO₂ released directly in ETC without passing through Krebs cycle"],
    correctIndex: 1,
    explanation: "Carbon tracking: Glucose (6C) split in glycolysis into 2 pyruvate (3C each). In pyruvate oxidation, one carbon per pyruvate (= 2 total CO₂) is released as CO₂ and the remaining 2C enters as Acetyl-CoA. In each Krebs cycle turn, both carbons of Acetyl-CoA are released as CO₂ (4 CO₂ total per glucose). By end of Krebs, all 6 carbons from glucose have been released as CO₂. ETC uses electrons, not carbon.",
  },

  // ── Unit D ──────────────────────────────────────────────────────
  {
    id: "d1", unit: "D",
    question: "A patient with Type B blood needs an emergency transfusion. Which blood type(s) can safely be used?",
    options: ["Type A and Type O", "Type B and Type O", "Type AB and Type B", "Any blood type — ABO compatibility is not critical in emergencies"],
    correctIndex: 1,
    explanation: "Type B blood has antigen B on RBCs and anti-A antibodies in plasma. Transfusing Type A or AB blood would trigger agglutination because anti-A antibodies would attack A antigens. Type B (matching) and Type O (no antigens — universal donor) are safe options.",
  },
  {
    id: "d2", unit: "D",
    question: "In which region of the nephron does MOST reabsorption of glucose, amino acids, and Na⁺ occur?",
    options: ["Glomerulus and Bowman's capsule (filtration site)", "Proximal convoluted tubule (PCT)", "Loop of Henle (descending limb)", "Collecting duct (ADH-regulated water reabsorption)"],
    correctIndex: 1,
    explanation: "The PCT performs the most reabsorption — virtually all glucose and amino acids, plus large amounts of Na⁺, Cl⁻, water, and bicarbonate are returned to the blood here. The presence of glucose in urine (glucosuria) indicates the PCT is overwhelmed — a classic sign of diabetes mellitus.",
  },
  {
    id: "d3", unit: "D",
    question: "A non-competitive enzyme inhibitor is added to a reaction. Adding more substrate will:",
    options: ["Overcome the inhibition and restore enzyme activity to normal", "Have no effect on enzyme activity — the inhibition cannot be overcome by more substrate", "Increase the rate of inhibition further", "Remove the inhibitor from the allosteric site through competitive displacement"],
    correctIndex: 1,
    explanation: "Non-competitive inhibitors bind to an allosteric site (not the active site), changing the SHAPE of the active site so substrate cannot bind properly. Since the active site shape is altered, adding more substrate cannot overcome the inhibition — substrate cannot fit regardless of concentration. This contrasts with competitive inhibition, which CAN be overcome by excess substrate.",
  },
  {
    id: "d4", unit: "D",
    question: "Which sequence correctly describes blood flow through the PULMONARY circuit?",
    options: ["Left ventricle → aorta → lung capillaries → left atrium", "Right ventricle → pulmonary arteries → lung capillaries → pulmonary veins → left atrium", "Right atrium → pulmonary veins → lung capillaries → pulmonary arteries → left ventricle", "Left atrium → pulmonary arteries → lung capillaries → left ventricle"],
    correctIndex: 1,
    explanation: "The pulmonary circuit: deoxygenated blood leaves the RIGHT VENTRICLE → pulmonary arteries → lung capillaries surrounding alveoli (O₂ absorbed, CO₂ released) → now oxygenated blood enters pulmonary veins → LEFT ATRIUM → left ventricle → systemic circuit. Note: pulmonary arteries carry deoxygenated blood (unusual — arteries normally carry oxygenated blood).",
  },
  {
    id: "d5", unit: "D",
    question: "During intense exercise, lactic acid builds up in muscle cells because:",
    options: ["The Krebs cycle produces lactic acid as a direct byproduct", "Aerobic respiration produces lactic acid when oxygen levels are high", "When O₂ delivery is insufficient, fermentation regenerates NAD⁺ allowing glycolysis to continue, producing lactic acid as a byproduct", "Muscle cells cannot perform aerobic respiration and always use fermentation"],
    correctIndex: 2,
    explanation: "When exercise intensity exceeds oxygen delivery capacity, muscle cells switch to lactic acid fermentation: pyruvate + NADH → lactic acid + NAD⁺. This regenerates NAD⁺ so glycolysis can continue producing 2 ATP per glucose (far less than aerobic respiration's ~36-38 ATP, but better than nothing). Lactic acid accumulation lowers pH, contributing to muscle fatigue.",
  },
  {
    id: "d6", unit: "D",
    question: "What is the correct effect of ADH (antidiuretic hormone) on the kidneys?",
    options: ["ADH increases Na⁺ reabsorption in the distal convoluted tubule to raise blood pressure", "ADH makes the collecting duct permeable to water, increasing water reabsorption and concentrating the urine", "ADH promotes K⁺ excretion and is released in response to high blood pressure", "ADH causes the glomerulus to filter more blood per minute"],
    correctIndex: 1,
    explanation: "ADH is released by the posterior pituitary when blood osmolarity rises (dehydration). It binds receptors on the collecting duct → inserts aquaporin water channels → more water reabsorbed → concentrated, low-volume urine → blood osmolarity returns to normal. Alcohol suppresses ADH → diuresis (increased urine output and dehydration).",
  },
  {
    id: "d7", unit: "D",
    question: "Rigor mortis (muscle stiffness after death) occurs because:",
    options: ["Cold temperatures cause muscle proteins to freeze in place", "Calcium floods into cells after death causing permanent stimulation", "Without ATP production, myosin cross-bridges cannot detach from actin after the power stroke", "Nerve signals continue briefly after death, maintaining muscle contraction"],
    correctIndex: 2,
    explanation: "Muscle relaxation requires ATP for two purposes: (1) to detach myosin from actin after the power stroke, and (2) to pump Ca²⁺ back into the sarcoplasmic reticulum. After death, ATP production ceases → myosin cross-bridges remain permanently attached to actin → muscles lock in a stiffened, contracted state. Rigor mortis begins 2-6 hours after death and resolves as proteins decompose.",
  },
  {
    id: "d8", unit: "D",
    question: "Which cells of the immune system produce antibodies specific to a single antigen?",
    options: ["Cytotoxic T cells that directly kill infected cells", "B lymphocytes that differentiate into antibody-secreting plasma cells", "Neutrophils that phagocytose and destroy bacteria nonspecifically", "Natural killer (NK) cells that destroy virus-infected cells"],
    correctIndex: 1,
    explanation: "B lymphocytes, when they encounter their specific antigen, differentiate into PLASMA CELLS — antibody-secreting factories that release thousands of specific antibody molecules per second. B cells also produce memory B cells for long-term immunological memory. T cells and NK cells are involved in cell-mediated immunity, not antibody production.",
  },
  {
    id: "d9", unit: "D",
    question: "What structural features of the small intestine maximize its surface area for nutrient absorption?",
    options: ["Thick muscular walls and strong peristalsis for rapid transit", "Villi (finger-like projections) and microvilli (brush border) that increase surface area ~600-fold", "Large diameter and short length to slow food passage", "Abundant mucus-secreting goblet cells that lubricate the intestinal surface"],
    correctIndex: 1,
    explanation: "The small intestine achieves its enormous absorptive surface area (~250 m²) through three structural levels: circular folds (plicae circulares), villi (1mm finger-like projections of the intestinal wall), and microvilli (microscopic projections on each epithelial cell = brush border). Together these increase surface area approximately 600-fold compared to a smooth tube.",
  },
  {
    id: "d10", unit: "D",
    question: "A Rh-negative mother is pregnant with her second Rh-positive fetus. Without treatment, what is the likely outcome and why?",
    options: ["No risk — Rh factor is only important for ABO blood type compatibility", "The fetus may develop erythroblastosis fetalis because maternal anti-Rh antibodies cross the placenta and destroy fetal red blood cells", "The mother will develop hemolytic disease because the fetus's Rh+ antibodies attack maternal RBCs", "Rh incompatibility only causes problems in the first pregnancy, not subsequent ones"],
    correctIndex: 1,
    explanation: "During the first pregnancy/delivery, Rh+ fetal blood enters the Rh- mother → she slowly produces anti-Rh antibodies (IgG). In the second Rh+ pregnancy, these antibodies (IgG class — small enough to cross the placenta) attack fetal Rh+ RBCs → severe hemolytic anemia in the fetus (erythroblastosis fetalis). Prevention: RhoGAM injection after first delivery destroys Rh+ fetal cells before the mother can make antibodies.",
  },
];

/* ── Unit Colors & Helpers ───────────────────────────────────────── */

type FilterUnit = "all" | Unit;

const unitColors: Record<FilterUnit, { badge: string; border: string; bg: string }> = {
  all:  { badge: "bg-primary text-primary-foreground", border: "border-primary", bg: "bg-primary/5" },
  A:    { badge: "bg-teal-600 text-white", border: "border-teal-500", bg: "bg-teal-50" },
  B:    { badge: "bg-lime-600 text-white", border: "border-lime-500", bg: "bg-lime-50" },
  C:    { badge: "bg-amber-600 text-white", border: "border-amber-500", bg: "bg-amber-50" },
  D:    { badge: "bg-rose-600 text-white", border: "border-rose-500", bg: "bg-rose-50" },
};

/* ── Main Component ─────────────────────────────────────────────── */

export default function Biology20Quiz() {
  const [filter, setFilter] = useState<FilterUnit>("all");
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const questions = filter === "all" ? allQuestions : allQuestions.filter(q => q.unit === filter);
  const current = questions[currentIdx];
  const isAnswered = selected !== null;
  const isCorrect = selected === current?.correctIndex;
  const progress = questions.length > 0 ? ((currentIdx + (isAnswered ? 1 : 0)) / questions.length) * 100 : 0;

  const handleFilter = useCallback((f: FilterUnit) => {
    setFilter(f);
    setCurrentIdx(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  }, []);

  const handleSelect = useCallback((idx: number) => {
    if (isAnswered) return;
    setSelected(idx);
    if (idx === current.correctIndex) setScore(s => s + 1);
  }, [isAnswered, current]);

  const handleNext = useCallback(() => {
    if (currentIdx + 1 >= questions.length) {
      setFinished(true);
    } else {
      setCurrentIdx(i => i + 1);
      setSelected(null);
    }
  }, [currentIdx, questions.length]);

  const handleRestart = useCallback(() => {
    setCurrentIdx(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  }, []);

  const scorePercent = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;
  const grade = scorePercent >= 90 ? "Excellent" : scorePercent >= 75 ? "Strong" : scorePercent >= 60 ? "On Track" : "Keep Reviewing";
  const gradeColor = scorePercent >= 90 ? "text-teal-700" : scorePercent >= 75 ? "text-blue-700" : scorePercent >= 60 ? "text-amber-700" : "text-rose-700";

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-muted/40 border-b">
        <div className="container mx-auto px-4 md:px-6 py-3 flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
          <Link href="/resources" className="hover:text-primary transition-colors flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" />Resources
          </Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/resources/biology-20" className="hover:text-primary transition-colors">Biology 20</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground font-medium">Quiz</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-secondary overflow-hidden py-12 md:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(45,90%,35%,0.28),transparent_65%)]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block bg-amber-500/20 text-amber-300 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-3">Biology 20 — Study Tools</span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary-foreground mb-3">Practice Quiz</h1>
            <p className="text-secondary-foreground/75 text-base max-w-xl mb-4">
              {allQuestions.length} multiple-choice questions across all four Biology 20 units. Each question includes a detailed explanation after answering.
            </p>
            <div className="flex flex-wrap gap-2">
              {(["A","B","C","D"] as Unit[]).map(u => (
                <Link key={u} href={`/resources/biology-20/unit-${u.toLowerCase()}`}
                  className="text-xs font-semibold bg-white/10 hover:bg-white/20 text-secondary-foreground px-3 py-1 rounded-full transition-colors">
                  Unit {u} notes →
                </Link>
              ))}
              <Link href="/resources/biology-20/flashcards"
                className="text-xs font-semibold bg-teal-500/30 hover:bg-teal-500/50 text-teal-200 px-3 py-1 rounded-full transition-colors">
                Switch to Flashcards →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="py-10 md:py-14 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">

          {/* Unit filter */}
          <div className="flex gap-1.5 mb-8 flex-wrap">
            {(["all", "A", "B", "C", "D"] as FilterUnit[]).map((f) => {
              const isActive = filter === f;
              const c = unitColors[f];
              const count = f === "all" ? allQuestions.length : allQuestions.filter(q => q.unit === f).length;
              return (
                <button key={f} onClick={() => handleFilter(f)}
                  className={`px-4 py-2 rounded-lg text-sm font-bold border-2 transition-all duration-200 flex items-center gap-2 ${
                    isActive ? `${c.badge} border-transparent shadow-sm` : "bg-background text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                  }`}>
                  {f === "all" ? "All Units" : `Unit ${f}`}
                  <span className={`text-xs px-1.5 py-0.5 rounded-full ${isActive ? "bg-white/20" : "bg-muted"}`}>{count}</span>
                </button>
              );
            })}
          </div>

          {/* Finished screen */}
          <AnimatePresence mode="wait">
          {finished ? (
            <motion.div key="finished" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.45 }}>
              <Card className="border-2 border-primary/20 shadow-lg overflow-hidden">
                <div className="bg-gradient-to-br from-secondary to-secondary/80 px-6 py-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center mx-auto mb-4">
                    <Trophy className="w-8 h-8 text-amber-300" />
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-secondary-foreground mb-2">Quiz Complete!</h2>
                  <p className={`text-5xl font-bold mt-3 mb-1 ${gradeColor.replace("text-", "text-").replace("700", "300")}`}>{scorePercent}%</p>
                  <p className="text-secondary-foreground/70 text-sm">{score} correct out of {questions.length} questions</p>
                </div>
                <CardContent className="p-6 text-center">
                  <div className={`inline-block px-4 py-2 rounded-full font-bold text-sm mb-4 ${gradeColor} bg-muted`}>{grade}</div>
                  <div className="h-3 bg-muted rounded-full mb-5 overflow-hidden">
                    <div className="h-full bg-primary rounded-full transition-all duration-700" style={{ width: `${scorePercent}%` }} />
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {(["A","B","C","D"] as Unit[]).map(u => {
                      const uQ = allQuestions.filter(q => q.unit === u);
                      return (
                        <div key={u} className="bg-muted/40 border rounded-xl p-3">
                          <p className="text-xs font-bold text-muted-foreground mb-1">Unit {u}</p>
                          <p className="text-xs text-foreground">{uQ.length} questions available</p>
                          <button onClick={() => handleFilter(u)} className="text-xs text-primary font-semibold mt-1">Retry Unit {u} →</button>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button onClick={handleRestart}
                      className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-bold text-sm shadow-sm hover:shadow-md transition-all">
                      <RotateCcw className="w-4 h-4" /> Restart Quiz
                    </button>
                    <Link href="/resources/biology-20/flashcards"
                      className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-border font-semibold text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all">
                      Study Flashcards →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ) : current ? (
            <motion.div key={`q-${currentIdx}`} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.25 }}>
              {/* Progress */}
              <div className="flex items-center gap-4 mb-5">
                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full transition-all duration-400" style={{ width: `${progress}%` }} />
                </div>
                <span className="text-sm font-bold text-muted-foreground whitespace-nowrap">{currentIdx + 1} / {questions.length}</span>
              </div>

              {/* Score track */}
              <div className="flex items-center gap-3 mb-6 text-sm">
                <span className="font-semibold text-muted-foreground">Score:</span>
                <span className="font-bold text-teal-700">{score} correct</span>
                {currentIdx > 0 && <span className="text-muted-foreground text-xs">({Math.round((score / currentIdx) * 100)}% so far)</span>}
              </div>

              {/* Question card */}
              <Card className="border-2 border-border shadow-sm mb-4">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${unitColors[current.unit].badge}`}>Unit {current.unit}</span>
                    <span className="text-xs text-muted-foreground">Question {currentIdx + 1}</span>
                  </div>
                  <p className="text-base md:text-lg font-serif font-bold text-foreground leading-snug">{current.question}</p>
                </CardContent>
              </Card>

              {/* Answer options */}
              <div className="space-y-3 mb-5">
                {current.options.map((opt, i) => {
                  let styles = "border-border text-foreground bg-background hover:border-primary/40 hover:bg-muted/40";
                  let icon: React.ReactNode = null;
                  if (isAnswered) {
                    if (i === current.correctIndex) {
                      styles = "border-teal-500 bg-teal-50 text-teal-900";
                      icon = <CheckCircle className="w-5 h-5 text-teal-600 shrink-0" />;
                    } else if (i === selected) {
                      styles = "border-rose-500 bg-rose-50 text-rose-900";
                      icon = <XCircle className="w-5 h-5 text-rose-600 shrink-0" />;
                    } else {
                      styles = "border-border text-muted-foreground bg-muted/20 opacity-60";
                    }
                  }
                  return (
                    <button key={i} onClick={() => handleSelect(i)} disabled={isAnswered}
                      className={`w-full flex items-start gap-3 p-4 rounded-xl border-2 text-left transition-all duration-200 ${styles} ${!isAnswered ? "cursor-pointer" : "cursor-default"}`}>
                      <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs ${
                        isAnswered && i === current.correctIndex ? "border-teal-600 bg-teal-600 text-white" :
                        isAnswered && i === selected ? "border-rose-600 bg-rose-600 text-white" :
                        "border-muted-foreground/50 text-muted-foreground"
                      }`}>{["A","B","C","D"][i]}</span>
                      <span className="text-sm leading-relaxed">{opt}</span>
                      {icon && <div className="ml-auto">{icon}</div>}
                    </button>
                  );
                })}
              </div>

              {/* Explanation */}
              <AnimatePresence>
                {isAnswered && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.35 }}>
                    <div className={`rounded-xl border-2 p-4 mb-5 ${isCorrect ? "border-teal-200 bg-teal-50" : "border-amber-200 bg-amber-50"}`}>
                      <div className="flex items-center gap-2 mb-2">
                        {isCorrect
                          ? <CheckCircle className="w-4 h-4 text-teal-600 shrink-0" />
                          : <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                        }
                        <span className={`text-xs font-bold uppercase tracking-wider ${isCorrect ? "text-teal-700" : "text-rose-700"}`}>
                          {isCorrect ? "Correct!" : `Incorrect — Correct answer: ${["A","B","C","D"][current.correctIndex]}`}
                        </span>
                      </div>
                      <p className="text-sm text-foreground/80 leading-relaxed">{current.explanation}</p>
                    </div>
                    <button onClick={handleNext}
                      className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-bold text-sm shadow-sm hover:shadow-md transition-all">
                      {currentIdx + 1 < questions.length ? "Next Question →" : "See Results →"}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ) : null}
          </AnimatePresence>

          {/* Study tools footer */}
          <div className="mt-12 pt-8 border-t grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/resources/biology-20/flashcards"
              className="group block bg-teal-50 border border-teal-200 hover:border-teal-400 hover:shadow-sm rounded-xl p-4 transition-all duration-200">
              <p className="font-bold text-teal-800 mb-1 group-hover:text-teal-900">Flashcards</p>
              <p className="text-xs text-teal-700 leading-relaxed">64 cards with diagrams across all 4 units</p>
              <p className="text-xs text-teal-600 mt-2 font-semibold">Open flashcards →</p>
            </Link>
            <Link href="/resources/biology-20"
              className="group block bg-muted/40 border hover:border-primary/40 hover:shadow-sm rounded-xl p-4 transition-all duration-200">
              <p className="font-bold text-foreground mb-1">Biology 20 Overview</p>
              <p className="text-xs text-muted-foreground leading-relaxed">Unit notes, study resources, and YouTube channels</p>
              <p className="text-xs text-primary mt-2 font-semibold">Back to Biology 20 →</p>
            </Link>
          </div>

        </div>
      </div>
    </Layout>
  );
}

