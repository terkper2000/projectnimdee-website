export interface SearchItem {
  title: string;
  description: string;
  href: string;
  category: string;
  tags: string[];
}

export const searchItems: SearchItem[] = [
  { title: "Home", description: "Project Nimdeɛ — STEM education initiative homepage", href: "/", category: "Page", tags: ["home", "start", "project nimdee"] },
  { title: "About", description: "Hannah Terkper's story and the vision behind Project Nimdeɛ", href: "/about", category: "Page", tags: ["about", "hannah", "terkper", "vision", "mission", "story"] },
  { title: "Resources", description: "Browse all available learning resources by subject", href: "/resources", category: "Page", tags: ["resources", "all", "browse", "subjects"] },
  { title: "Contact", description: "Get in touch with Project Nimdeɛ", href: "/contact", category: "Page", tags: ["contact", "email", "reach", "message", "form"] },
  { title: "Support the Mission", description: "Support Hannah's STEM education initiative", href: "/support", category: "Page", tags: ["support", "donate", "mission", "help"] },
  { title: "Additional Services", description: "Tutoring, STEM support, piano lessons and coaching", href: "/services", category: "Services", tags: ["services", "tutoring", "piano", "coaching", "stem", "private", "lesson", "1-on-1"] },

  { title: "Math 9", description: "Full Grade 9 Mathematics course — Alberta curriculum", href: "/resources/math-9", category: "Math 9", tags: ["math", "grade 9", "mathematics", "algebra", "number", "patterns"] },
  { title: "Rational Numbers", description: "Fractions, decimals, ordering, BEDMAS with rational numbers", href: "/resources/math-9/unit-1", category: "Math 9", tags: ["rational", "fractions", "decimals", "bedmas", "math 9", "unit 1", "ordering", "integers"] },
  { title: "Powers & Exponents", description: "Exponent laws, zero and negative exponents, scientific notation", href: "/resources/math-9/unit-2", category: "Math 9", tags: ["powers", "exponents", "exponent laws", "math 9", "unit 2", "scientific notation"] },
  { title: "Polynomials", description: "Adding, subtracting, and multiplying polynomials and monomials", href: "/resources/math-9/unit-3", category: "Math 9", tags: ["polynomials", "algebra", "like terms", "monomial", "binomial", "math 9", "unit 3", "expand"] },
  { title: "Geometry", description: "Surface area, similar polygons, scale diagrams, line & rotation symmetry", href: "/resources/math-9/unit-4", category: "Math 9", tags: ["geometry", "surface area", "similar", "symmetry", "scale", "math 9", "unit 4", "composite"] },
  { title: "Linear Relations", description: "Slope, y = mx + b, tables, graphs, interpolation, domain & range", href: "/resources/math-9/unit-5", category: "Math 9", tags: ["linear", "slope", "graph", "y=mx+b", "equation", "math 9", "unit 5", "table of values", "intercept"] },
  { title: "Equations & Inequalities", description: "Solve one-step and two-step equations and inequalities", href: "/resources/math-9/unit-6", category: "Math 9", tags: ["equations", "inequalities", "solve", "math 9", "unit 6", "variables", "algebra"] },
  { title: "Circle Geometry", description: "Circle theorems, inscribed angles, chords, tangents, perpendicular bisectors", href: "/resources/math-9/unit-7", category: "Math 9", tags: ["circles", "geometry", "inscribed angle", "chord", "tangent", "math 9", "unit 7", "central angle"] },
  { title: "Data & Probability", description: "Probability, tree diagrams, statistics, misleading graphs", href: "/resources/math-9/unit-8", category: "Math 9", tags: ["probability", "data", "statistics", "tree diagram", "math 9", "unit 8", "experimental", "theoretical"] },
  { title: "Math 9 — Quiz Mode", description: "Shuffle and test yourself across all 8 Math 9 units", href: "/resources/math-9/quiz", category: "Math 9", tags: ["quiz", "test", "math 9", "practice", "exam", "review"] },

  { title: "Science 10", description: "Complete Grade 10 Science — Alberta curriculum", href: "/resources/science-10", category: "Science 10", tags: ["science", "grade 10", "chemistry", "biology", "physics", "earth"] },
  { title: "Energy & Matter in Chemical Change", description: "Atomic theory, chemical reactions, balancing equations, acids & bases", href: "/resources/science-10/unit-a", category: "Science 10", tags: ["science 10", "unit a", "chemistry", "atoms", "reactions", "acids", "balancing equations"] },
  { title: "Matter Cycling in Living Systems", description: "Photosynthesis, cellular respiration, nutrient cycles, ecosystems", href: "/resources/science-10/unit-b", category: "Science 10", tags: ["science 10", "unit b", "photosynthesis", "respiration", "ecosystems", "biology", "nutrient"] },
  { title: "Science 10 — Motion & Forces", description: "Kinematics, velocity, acceleration, Newton's laws", href: "/resources/science-10/unit-c", category: "Science 10", tags: ["science 10", "unit c", "physics", "motion", "forces", "velocity", "kinematics", "newton"] },
  { title: "Science 10 — Energy Flow in Global Systems", description: "Climate, weather systems, energy transfer, environmental science", href: "/resources/science-10/unit-d", category: "Science 10", tags: ["science 10", "unit d", "energy", "global systems", "climate", "earth", "weather"] },

  { title: "Biology 20", description: "Alberta Biology 20 — ecosystems, evolution, and cellular biology", href: "/resources/biology-20", category: "Biology 20", tags: ["biology", "grade 11", "ecosystems", "evolution", "cells", "biology 20"] },
  { title: "Energy Flow in Ecosystems", description: "Biosphere equilibrium, energy flow, food webs, carbon & nitrogen cycles", href: "/resources/biology-20/unit-a", category: "Biology 20", tags: ["biology 20", "unit a", "ecosystems", "energy flow", "food web", "carbon cycle", "nitrogen"] },
  { title: "Ecosystems & Population Change", description: "Populations, niches, taxonomy, natural selection, evolution", href: "/resources/biology-20/unit-b", category: "Biology 20", tags: ["biology 20", "unit b", "population", "evolution", "natural selection", "taxonomy", "niches"] },
  { title: "Photosynthesis & Cellular Respiration", description: "Light reactions, Calvin cycle, ATP, aerobic and anaerobic respiration", href: "/resources/biology-20/unit-c", category: "Biology 20", tags: ["biology 20", "unit c", "photosynthesis", "respiration", "ATP", "cellular", "calvin cycle"] },
  { title: "Nervous System & Homeostasis", description: "Nervous system, endocrine system, homeostasis and body regulation", href: "/resources/biology-20/unit-d", category: "Biology 20", tags: ["biology 20", "unit d", "nervous system", "endocrine", "homeostasis", "hormones"] },
  { title: "Biology 20 — Flashcards", description: "Interactive flashcards to study key Biology 20 terms and concepts", href: "/resources/biology-20/flashcards", category: "Biology 20", tags: ["flashcards", "biology 20", "study", "terms", "review", "vocab"] },
  { title: "Biology 20 — Quiz Mode", description: "Test your knowledge across all Biology 20 units", href: "/resources/biology-20/quiz", category: "Biology 20", tags: ["quiz", "biology 20", "test", "exam", "practice"] },

  { title: "Biology 30", description: "Alberta Biology 30 — genetics, evolution, and biochemistry", href: "/resources/biology-30", category: "Biology 30", tags: ["biology 30", "grade 12", "genetics", "dna", "evolution", "biochemistry", "reproduction"] },
];

export const POPULAR_HREFS = [
  "/resources/math-9",
  "/resources/math-9/unit-5",
  "/resources/science-10",
  "/resources/biology-20",
  "/resources/math-9/quiz",
  "/resources/biology-20/flashcards",
];

export function filterSearch(query: string): SearchItem[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase().trim();
  const scored = searchItems.map((item) => {
    let score = 0;
    const title = item.title.toLowerCase();
    const desc = item.description.toLowerCase();
    if (title === q) score += 100;
    else if (title.startsWith(q)) score += 60;
    else if (title.includes(q)) score += 40;
    if (desc.includes(q)) score += 10;
    if (item.tags.some((t) => t === q)) score += 30;
    else if (item.tags.some((t) => t.includes(q))) score += 15;
    if (item.category.toLowerCase().includes(q)) score += 20;
    return { item, score };
  });
  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((s) => s.item);
}
