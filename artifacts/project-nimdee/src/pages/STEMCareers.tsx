import { Link } from "wouter";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { ArrowLeft, ChevronRight, Zap, Globe, ExternalLink } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const careerAreas = [
  {
    emoji: "🩺",
    title: "Medicine & Health Sciences",
    color: "bg-rose-50 border-rose-200",
    badge: "High demand",
    badgeColor: "bg-rose-600 text-white",
    roles: ["Physician / Surgeon", "Nurse Practitioner", "Pharmacist", "Medical Researcher", "Public Health Officer"],
    salary: "$85,000–$350,000+/yr",
    outlook: "Very high demand — Alberta Health Services is one of the province's largest employers",
    education: [
      "University: BSc Biology/Chemistry → MD (medicine) or PharmD (pharmacy) or NP",
      "NAIT/SAIT: Not primary pathway, but allied health technician programs available",
      "Note: Medical school is highly competitive; aim for 80%+ average and strong ECs",
    ],
    prerequisites: "Biology 30, Chemistry 30, Math 30-1",
  },
  {
    emoji: "🏥",
    title: "Allied Health & Medical Technology",
    color: "bg-pink-50 border-pink-200",
    badge: "NAIT/SAIT pathway",
    badgeColor: "bg-pink-600 text-white",
    roles: ["Radiation Therapist", "Medical Laboratory Technologist", "Sonographer (Ultrasound Tech)", "Respiratory Therapist", "Medical Imaging Tech"],
    salary: "$65,000–$105,000/yr",
    outlook: "Strong demand projected through 2034 (ALIS 2024) — aging population driving growth",
    education: [
      "NAIT: Medical Laboratory Technology (2-yr diploma), Respiratory Therapy (3-yr diploma), Medical Radiologic Technology",
      "SAIT: Diagnostic Medical Sonography, Medical Laboratory Science",
      "University: Some roles (e.g., Radiation Therapy) require a BSc from U of A or Mount Royal",
    ],
    prerequisites: "Biology 30, Chemistry 20/30, Math 30-1 or 30-2",
  },
  {
    emoji: "💻",
    title: "Computer Science & Software",
    color: "bg-blue-50 border-blue-200",
    badge: "Fastest growing",
    badgeColor: "bg-blue-600 text-white",
    roles: ["Software Developer", "Data Scientist", "AI/ML Engineer", "Cybersecurity Analyst", "Game Developer"],
    salary: "$70,000–$160,000+/yr",
    outlook: "Fastest-growing occupation category in Alberta; 25%+ growth projected 2024–2034 (ALIS)",
    education: [
      "University: BSc Computer Science (U of A, U of C, MacEwan) or Software Engineering",
      "NAIT: Computer Engineering Technology (2-yr diploma), IT Networking, Cybersecurity",
      "Online: Bootcamps (BrainStation, Lighthouse Labs) for some roles; freeCodeCamp + portfolio for others",
    ],
    prerequisites: "Math 30-1, Science 10; programming experience is a major advantage",
  },
  {
    emoji: "⚙️",
    title: "Engineering",
    color: "bg-amber-50 border-amber-200",
    badge: "P.Eng pathway",
    badgeColor: "bg-amber-600 text-white",
    roles: ["Civil Engineer", "Electrical Engineer", "Mechanical Engineer", "Chemical Engineer", "Biomedical Engineer"],
    salary: "$80,000–$150,000+/yr",
    outlook: "Strong in Alberta — oil & gas, construction, and renewables all driving demand (ALIS 2024)",
    education: [
      "University: BSc Engineering (4 years) → APEGA intern engineer → P.Eng designation",
      "NAIT: Engineering Technology diplomas (Civil, Electrical, Mechanical) — 2-yr programs",
      "Note: Engineering Technology (NAIT/SAIT) ≠ Professional Engineer (P.Eng) — different designations and scopes",
    ],
    prerequisites: "Math 30-1, Physics 30, Chemistry 30 (for chemical/bio engineering)",
  },
  {
    emoji: "🔧",
    title: "Instrumentation, Automation & NDT",
    color: "bg-orange-50 border-orange-200",
    badge: "Trades pathway",
    badgeColor: "bg-orange-600 text-white",
    roles: ["Instrumentation & Control Technician", "Industrial Automation Technician", "Non-Destructive Testing (NDT) Tech", "Process Operator", "Electrical Power Technician"],
    salary: "$75,000–$130,000/yr",
    outlook: "Very high demand in Alberta's energy and manufacturing sectors (ALIS 2024); often overlooked by students",
    education: [
      "NAIT: Instrumentation Engineering Technology, Electrical Engineering Technology (Power)",
      "SAIT: Instrumentation & Control, Industrial Automation",
      "Apprenticeship: Instrument Technician trades certification through Alberta Apprenticeship",
    ],
    prerequisites: "Math 20-1 or 30-1, Physics 20, Science 10",
  },
  {
    emoji: "🌿",
    title: "Environmental & Earth Sciences",
    color: "bg-teal-50 border-teal-200",
    badge: "Growing urgency",
    badgeColor: "bg-teal-600 text-white",
    roles: ["Environmental Scientist", "Environmental Monitoring Tech", "Geomatics / GIS Technologist", "Hydrologist", "Climate Researcher"],
    salary: "$60,000–$120,000/yr",
    outlook: "Growing steadily — environmental regulation, energy transition, and land use planning (ALIS 2024)",
    education: [
      "University: BSc Environmental Science, Geology, or Geography (U of A, U of C, Athabasca)",
      "NAIT/SAIT: Environmental Technology (2-yr diploma), Geomatics Engineering Technology",
      "ESRI training: ArcGIS certification is widely recognized for GIS roles (online, self-paced)",
    ],
    prerequisites: "Biology 20/30, Chemistry 20, Earth Science 30 (recommended)",
  },
  {
    emoji: "🔬",
    title: "Biosciences & Bioinformatics",
    color: "bg-violet-50 border-violet-200",
    badge: "Emerging field",
    badgeColor: "bg-violet-600 text-white",
    roles: ["Bioinformatics Analyst", "Genomics Researcher", "Lab Technician", "Biotechnology Specialist", "Clinical Researcher"],
    salary: "$55,000–$110,000/yr",
    outlook: "Emerging — biotech investment in Canada growing significantly; requires combination of bio + CS skills",
    education: [
      "University: BSc Bioinformatics, Biochemistry, or Molecular Biology (U of A is strong here)",
      "Online: Coursera Bioinformatics Specialization (UCSD), Python for Biologists courses",
      "Note: Bioinformatics specifically requires programming skills — start Python early",
    ],
    prerequisites: "Biology 30, Chemistry 30, Math 30-1; Python or coding experience is a strong asset",
  },
  {
    emoji: "✈️",
    title: "Drone / UAV & Aerospace",
    color: "bg-sky-50 border-sky-200",
    badge: "Rapidly growing",
    badgeColor: "bg-sky-600 text-white",
    roles: ["Drone / UAV Operator", "Aerospace Engineer", "Avionics Technologist", "Unmanned Systems Specialist", "Airspace Analyst"],
    salary: "$55,000–$120,000/yr",
    outlook: "Drone industry growing 15%+ annually in Canada — agriculture, pipeline monitoring, emergency response (ALIS 2024)",
    education: [
      "Transport Canada: Basic/Advanced RPAS Certificate required to fly commercially (online course + exam)",
      "SAIT: Avionics Maintenance Technologist, Aviation Technology",
      "University: BSc Mechanical or Electrical Engineering with aerospace electives",
    ],
    prerequisites: "Physics 20/30, Math 30-1; Transport Canada RPAS certification is entry point for operators",
  },
  {
    emoji: "🔍",
    title: "Forensic Science & Laboratory",
    color: "bg-slate-50 border-slate-200",
    badge: "Specialized path",
    badgeColor: "bg-slate-600 text-white",
    roles: ["Forensic Science Technician", "DNA Analyst", "Trace Evidence Examiner", "Crime Scene Investigator", "Toxicologist"],
    salary: "$55,000–$95,000/yr",
    outlook: "Stable demand — most positions in RCMP, provincial labs, and private labs; competitive but consistent",
    education: [
      "University: BSc Forensic Science or Chemistry/Biology (few dedicated programs in Alberta — U of C has relevant streams)",
      "Online: American Academy of Forensic Sciences offers student memberships and networking",
      "Note: CSI-style TV shows misrepresent the role — it's mostly lab work, not detective work",
    ],
    prerequisites: "Biology 30, Chemistry 30, Math 30-1",
  },
  {
    emoji: "🏗️",
    title: "Architecture & Urban Design",
    color: "bg-red-50 border-red-200",
    badge: "Creative + technical",
    badgeColor: "bg-red-600 text-white",
    roles: ["Architect", "Structural Engineer", "Urban Planner", "Interior Designer", "Landscape Architect"],
    salary: "$60,000–$130,000/yr",
    outlook: "Steady — Alberta's growing cities (Calgary, Edmonton) and housing demand driving work (ALIS 2024)",
    education: [
      "University: Bachelor of Architecture (5 years, U of C) or BSc + M.Arch",
      "NAIT: Architectural Technology (2-yr diploma) — technical path, not full Architect designation",
      "Note: Architect designation requires CACB accreditation + internship + exam",
    ],
    prerequisites: "Math 30-1, Physics 20, Art (recommended); Tinkercad/SketchUp experience is a strong asset",
  },
  {
    emoji: "🌍",
    title: "Environmental Health & Public Health",
    color: "bg-green-50 border-green-200",
    badge: "High impact",
    badgeColor: "bg-green-600 text-white",
    roles: ["Environmental Health Officer", "Public Health Inspector", "Health Promotion Specialist", "Epidemiologist", "Occupational Health & Safety Officer"],
    salary: "$60,000–$110,000/yr",
    outlook: "Growing — pandemic preparedness, climate-health links, and food safety driving demand (ALIS 2024)",
    education: [
      "University: BSc Environmental Health, Public Health, or Health Sciences (U of A, Lakeland College)",
      "NAIT: Environmental Technology program covers some relevant areas",
      "Note: Environmental Health Officers require CPHI (Canadian Public Health Inspectors) certification",
    ],
    prerequisites: "Biology 30, Chemistry 20, Social Studies 20 (policy understanding)",
  },
  {
    emoji: "🤖",
    title: "Robotics & Industrial Automation",
    color: "bg-indigo-50 border-indigo-200",
    badge: "Industry 4.0",
    badgeColor: "bg-indigo-600 text-white",
    roles: ["Industrial Automation Technician", "Robotics Engineer", "Controls Engineer", "PLC Programmer", "Manufacturing Process Engineer"],
    salary: "$70,000–$130,000/yr",
    outlook: "High demand — Alberta's manufacturing and energy sectors are automating rapidly (ALIS 2024)",
    education: [
      "NAIT: Electrical Engineering Technology (Industrial option), Instrumentation Engineering Technology",
      "SAIT: Mechatronics Technology — specifically designed for automation and robotics",
      "University: BSc Electrical or Mechanical Engineering with controls/robotics electives",
    ],
    prerequisites: "Math 30-1, Physics 20/30, Science 10; hands-on experience with Arduino/Raspberry Pi is a strong asset",
  },
];

const universalSkills = [
  { label: "Communication", desc: "Writing, presenting, and explaining complex ideas to non-experts. Every STEM professional needs this." },
  { label: "Data Literacy", desc: "Reading graphs, interpreting statistics, and spotting misleading data. Increasingly required across all fields." },
  { label: "Collaboration", desc: "Working in interdisciplinary teams — doctors work with engineers, coders with scientists. No career is solo." },
  { label: "Critical Thinking", desc: "Evaluating evidence, questioning assumptions, and identifying logical gaps. The core of scientific thinking." },
  { label: "Adaptability", desc: "Fields evolve fast. The ability to learn new tools, methods, and technologies is more valuable than any single skill." },
  { label: "Ethics & Responsibility", desc: "STEM decisions affect people and the planet. Understanding the ethical dimensions of your work matters more than ever." },
];

const resources = [
  {
    name: "ALIS — Alberta Career Profiles",
    desc: "Alberta Learning Information Service: salary data, job outlook (2024–2034), required credentials, and education paths for 500+ Alberta occupations.",
    href: "https://alis.alberta.ca/occinfo/",
    tag: "Alberta-specific",
  },
  {
    name: "NAIT Programs",
    desc: "Northern Alberta Institute of Technology — diplomas and certificates in engineering technology, health sciences, IT, and trades. Polytechnic education alongside university.",
    href: "https://www.nait.ca/programs",
    tag: "Polytechnic",
  },
  {
    name: "SAIT Programs",
    desc: "Southern Alberta Institute of Technology — comprehensive polytechnic programs in engineering, business, health, and applied arts. Strong industry connections.",
    href: "https://www.sait.ca/programs-and-courses",
    tag: "Polytechnic",
  },
  {
    name: "MyBlueprint — Alberta",
    desc: "Alberta Education's official course planning and career exploration tool. Connect your high school course selections to post-secondary programs and career goals.",
    href: "https://myblueprint.ca",
    tag: "Course Planning",
  },
  {
    name: "Let's Talk Science",
    desc: "Canada's leading STEM engagement organisation for youth — events, competitions, resources, and real scientist connections across Canada.",
    href: "https://letstalkscience.ca",
    tag: "Canada-wide",
  },
  {
    name: "Khan Academy",
    desc: "Free, world-class courses in math, science, computing, and more. Use it to get ahead or fill gaps in your foundation — before courses get harder.",
    href: "https://khanacademy.org",
    tag: "Free learning",
  },
];

function PathwaysDiagram() {
  return (
    <svg viewBox="0 0 600 370" className="w-full max-w-[640px] mx-auto" role="img" aria-label="Pathways diagram showing Alberta High School leading to four routes: University, Polytechnic, Online/Self-taught, and Apprenticeship">
      <defs>
        <marker id="parr" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#64748b" />
        </marker>
      </defs>

      {/* Start: High School */}
      <rect x="210" y="20" width="180" height="54" rx="12" fill="#0d9488" />
      <text x="300" y="44" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Alberta High School</text>
      <text x="300" y="60" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontSize="9">Diploma + Prerequisites</text>

      {/* Lines from HS to 4 paths */}
      <line x1="300" y1="74" x2="90" y2="140" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#parr)" />
      <line x1="300" y1="74" x2="210" y2="140" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#parr)" />
      <line x1="300" y1="74" x2="390" y2="140" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#parr)" />
      <line x1="300" y1="74" x2="510" y2="140" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#parr)" />

      {/* Path 1: University */}
      <rect x="20" y="142" width="140" height="60" rx="10" fill="#7c3aed" />
      <text x="90" y="166" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">University</text>
      <text x="90" y="180" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontSize="8">BSc / BEng</text>
      <text x="90" y="193" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="7.5">3–5 years</text>

      {/* Path 2: Polytechnic */}
      <rect x="145" y="142" width="140" height="60" rx="10" fill="#0891b2" />
      <text x="215" y="162" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Polytechnic</text>
      <text x="215" y="176" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontSize="8">NAIT / SAIT</text>
      <text x="215" y="190" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="7.5">2–3 yr diploma</text>

      {/* Path 3: Online / Self-taught */}
      <rect x="315" y="142" width="150" height="60" rx="10" fill="#d97706" />
      <text x="390" y="162" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Online / Self-taught</text>
      <text x="390" y="176" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontSize="8">Bootcamp / Certificates</text>
      <text x="390" y="190" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="7.5">3 mo – 2 years</text>

      {/* Path 4: Apprenticeship */}
      <rect x="445" y="142" width="140" height="60" rx="10" fill="#16a34a" />
      <text x="515" y="162" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Apprenticeship</text>
      <text x="515" y="176" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontSize="8">Alberta Trades</text>
      <text x="515" y="190" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="7.5">4–5 yr earn + learn</text>

      {/* Details for each path */}
      <text x="90" y="224" textAnchor="middle" fill="#6d28d9" fontSize="8">P.Eng, MD, PhD</text>
      <text x="90" y="236" textAnchor="middle" fill="#6d28d9" fontSize="8">Research roles</text>
      <text x="90" y="248" textAnchor="middle" fill="#6d28d9" fontSize="8">High-regulation fields</text>

      <text x="215" y="224" textAnchor="middle" fill="#0e7490" fontSize="8">Engineering Tech</text>
      <text x="215" y="236" textAnchor="middle" fill="#0e7490" fontSize="8">Health Sciences</text>
      <text x="215" y="248" textAnchor="middle" fill="#0e7490" fontSize="8">IT & Automation</text>

      <text x="390" y="224" textAnchor="middle" fill="#92400e" fontSize="8">Software Dev</text>
      <text x="390" y="236" textAnchor="middle" fill="#92400e" fontSize="8">Data Science, UX</text>
      <text x="390" y="248" textAnchor="middle" fill="#92400e" fontSize="8">CS50, Coursera, fCC</text>

      <text x="515" y="224" textAnchor="middle" fill="#14532d" fontSize="8">Instrumentation</text>
      <text x="515" y="236" textAnchor="middle" fill="#14532d" fontSize="8">Electrical, Plumbing</text>
      <text x="515" y="248" textAnchor="middle" fill="#14532d" fontSize="8">Earn while learning</text>

      {/* Converge arrow */}
      <line x1="90" y1="260" x2="90" y2="295" stroke="#94a3b8" strokeWidth="1.3" markerEnd="url(#parr)" />
      <line x1="215" y1="260" x2="215" y2="295" stroke="#94a3b8" strokeWidth="1.3" markerEnd="url(#parr)" />
      <line x1="390" y1="260" x2="390" y2="295" stroke="#94a3b8" strokeWidth="1.3" markerEnd="url(#parr)" />
      <line x1="515" y1="260" x2="515" y2="295" stroke="#94a3b8" strokeWidth="1.3" markerEnd="url(#parr)" />

      {/* End: Career */}
      <rect x="60" y="296" width="480" height="54" rx="12" fill="#1e293b" />
      <text x="300" y="318" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">A Career That Matters</text>
      <text x="300" y="335" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="9">All paths can lead to meaningful, well-paying work. University is one route — not the only one.</text>
    </svg>
  );
}

function AlbertaDiplomaSVG() {
  return (
    <svg viewBox="0 0 620 480" className="w-full max-w-[660px] mx-auto" role="img" aria-label="Alberta High School Diploma 100-credit requirements diagram">
      <defs>
        <marker id="darr" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
          <polygon points="0 0, 7 2.5, 0 5" fill="#94a3b8" />
        </marker>
      </defs>

      {/* Title */}
      <text x="310" y="22" textAnchor="middle" fill="#1e293b" fontSize="13" fontWeight="bold">Alberta High School Diploma — 100 Credits Required</text>
      <text x="310" y="36" textAnchor="middle" fill="#64748b" fontSize="9">Based on Alberta Education requirements. Source: alberta.ca/graduation-requirements</text>

      {/* ─── Required Courses (must-take) ─── */}
      <text x="20" y="58" fill="#1e293b" fontSize="10" fontWeight="bold">REQUIRED COURSES (specific courses that must be taken)</text>

      {[
        { label: "English 10-1 or 10-2", credits: "5 cr", x: 20, y: 66 },
        { label: "English 20-1 or 20-2", credits: "5 cr", x: 20, y: 90 },
        { label: "English 30-1 or 30-2 ★", credits: "5 cr", x: 20, y: 114 },
        { label: "Math 10C or 10-3", credits: "5 cr", x: 210, y: 66 },
        { label: "Math (any 20-level) ★", credits: "5 cr", x: 210, y: 90 },
        { label: "Social Studies 10-1/10-2", credits: "5 cr", x: 400, y: 66 },
        { label: "Social Studies 20-1/20-2 ★", credits: "5 cr", x: 400, y: 90 },
        { label: "Science 10", credits: "5 cr", x: 210, y: 114 },
        { label: "Physical Education 10", credits: "3 cr", x: 400, y: 114 },
        { label: "Career & Life Management (CALM)", credits: "3 cr", x: 400, y: 138 },
      ].map((c) => (
        <g key={c.label}>
          <rect x={c.x} y={c.y} width={176} height={20} rx="5" fill={c.label.includes("★") ? "#0d9488" : "#e2e8f0"} />
          <text x={c.x + 6} y={c.y + 13} fill={c.label.includes("★") ? "white" : "#1e293b"} fontSize="8">{c.label}</text>
          <text x={c.x + 158} y={c.y + 13} fill={c.label.includes("★") ? "rgba(255,255,255,0.85)" : "#64748b"} fontSize="7.5" textAnchor="end">{c.credits}</text>
        </g>
      ))}

      <text x="20" y="148" fill="#0d9488" fontSize="8" fontWeight="bold">★ = Diploma Exam subject (worth 30% of final mark)</text>
      <text x="20" y="160" fill="#64748b" fontSize="8">Required total from above: approx. 46–51 credits</text>

      {/* Divider */}
      <line x1="20" y1="170" x2="600" y2="170" stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="5 3" />

      {/* ─── 10-credit CTS / Fine Arts / Second Language bucket ─── */}
      <text x="20" y="188" fill="#1e293b" fontSize="10" fontWeight="bold">10-CREDIT OPTION BUCKET — choose from one or more of:</text>
      {[
        { label: "Career & Technology Studies (CTS)", fill: "#7c3aed", x: 20, y: 196 },
        { label: "Fine Arts (Art, Drama, Music, Dance)", fill: "#7c3aed", x: 230, y: 196 },
        { label: "Second Language", fill: "#7c3aed", x: 440, y: 196 },
      ].map((b) => (
        <g key={b.label}>
          <rect x={b.x} y={b.y} width={200} height={22} rx="6" fill={b.fill} opacity={0.85} />
          <text x={b.x + 8} y={b.y + 14} fill="white" fontSize="8" fontWeight="bold">{b.label}</text>
        </g>
      ))}
      <text x="20" y="232" fill="#64748b" fontSize="8">At least 10 credits must come from CTS, Fine Arts, or Second Language (or any combination)</text>

      {/* Divider */}
      <line x1="20" y1="242" x2="600" y2="242" stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="5 3" />

      {/* ─── 30-level requirement ─── */}
      <text x="20" y="260" fill="#1e293b" fontSize="10" fontWeight="bold">30-LEVEL REQUIREMENT — at least 30 credits from 30-level (senior) courses</text>
      {[
        { label: "English 30-1 or 30-2", fill: "#0d9488", x: 20 },
        { label: "Social 30-1 or 30-2", fill: "#0d9488", x: 205 },
        { label: "Math 30-1 or 30-2", fill: "#0891b2", x: 390 },
        { label: "Biology 30", fill: "#0891b2", x: 20 },
        { label: "Chemistry 30", fill: "#0891b2", x: 205 },
        { label: "Physics 30", fill: "#0891b2", x: 390 },
        { label: "Other 30-level courses...", fill: "#94a3b8", x: 20 },
      ].map((c, i) => (
        <g key={c.label}>
          <rect x={c.x} y={268 + Math.floor(i / 3) * 26} width={175} height={22} rx="6" fill={c.fill} opacity={0.9} />
          <text x={c.x + 8} y={268 + Math.floor(i / 3) * 26 + 14} fill="white" fontSize="8">{c.label}</text>
        </g>
      ))}
      <text x="20" y="330" fill="#64748b" fontSize="8">These 30-level courses are also where Diploma Exams are written — a key reason to plan which ones you take</text>

      {/* Divider */}
      <line x1="20" y1="340" x2="600" y2="340" stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="5 3" />

      {/* ─── Electives ─── */}
      <text x="20" y="358" fill="#1e293b" fontSize="10" fontWeight="bold">ELECTIVES — remaining credits to reach 100 total</text>
      <rect x="20" y="365" width="560" height="28" rx="8" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="1.5" />
      <text x="300" y="382" textAnchor="middle" fill="#475569" fontSize="9">Any approved courses to reach the 100-credit requirement — choose based on your interests and future goals</text>

      {/* ─── Total ─── */}
      <rect x="20" y="408" width="580" height="52" rx="12" fill="#1e293b" />
      <text x="310" y="430" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Total: 100 Credits = Alberta High School Diploma</text>
      <text x="310" y="448" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="9">Tip: Choose 30-level courses in subjects relevant to your post-secondary goal to keep the most doors open.</text>
    </svg>
  );
}

export default function STEMCareers() {
  return (
    <Layout>
      <div className="border-b bg-background">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/resources" className="hover:text-primary flex items-center gap-1 transition-colors"><ArrowLeft className="w-3.5 h-3.5" />Resources</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground font-medium">STEM Career Pathways</span>
        </div>
      </div>

      <div className="bg-gradient-to-br from-slate-800 via-slate-700 to-teal-900 text-white">
        <div className="max-w-5xl mx-auto px-4 py-16 md:py-20">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-block text-xs font-bold tracking-widest uppercase bg-white/15 px-3 py-1 rounded-full mb-5">Life Skills</span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-4">
              STEM Career<br />
              <span className="text-teal-300">Pathways</span>
            </h1>
            <p className="text-slate-200 text-lg max-w-2xl mb-6 leading-relaxed">
              STEM isn't one path — it's hundreds of them. From allied health to robotics to GIS, Alberta's job market is rich with opportunity. Here's the real picture, with salary data, job outlooks, and NAIT/SAIT options alongside university routes.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              {["Grades 7–12", "Alberta salary & outlook data", "Updated May 2026"].map(t => (
                <span key={t} className="bg-white/10 text-slate-200 px-3 py-1 rounded-full font-medium">{t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-14 space-y-16">

        {/* Why STEM */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="bg-teal-50 border border-teal-200 rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <Zap className="w-6 h-6 text-teal-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-teal-900 mb-2">University is one path — not the only one</p>
              <p className="text-teal-800 text-sm leading-relaxed mb-2">
                Alberta has world-class polytechnics — NAIT and SAIT — that offer diploma and certificate programs leading to careers with salaries equal to or exceeding many university degrees. Radiation therapists, instrumentation technicians, and automation specialists often earn $80,000–$120,000 with a 2–3 year polytechnic credential.
              </p>
              <p className="text-teal-700 text-sm leading-relaxed">
                Every career below includes the polytechnic path where it exists — not as a fallback, but as a legitimate and often faster route into well-paying, high-demand work.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Alberta Diploma Requirements SVG */}
        <section>
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">Alberta High School Diploma Requirements</h2>
            <div className="flex-1 h-px bg-border" />
          </div>
          <p className="text-muted-foreground mb-6 text-sm">Before you can get into any post-secondary program, you need to graduate. Here's the full picture of what 100 credits looks like — and why your course choices in Grade 10 matter.</p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="bg-muted/20 border rounded-2xl p-4 md:p-8">
              <AlbertaDiplomaSVG />
              <div className="grid sm:grid-cols-3 gap-4 mt-6 text-xs text-center">
                <div className="bg-teal-50 border border-teal-200 rounded-xl p-3">
                  <div className="w-4 h-4 rounded bg-teal-600 mx-auto mb-1" />
                  <p className="font-bold text-teal-800 mb-1">Diploma Exam courses</p>
                  <p className="text-teal-700">Worth 30% of your final mark — Exam is provincially written in Jan/June</p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
                  <div className="w-4 h-4 rounded bg-blue-500 mx-auto mb-1" />
                  <p className="font-bold text-blue-800 mb-1">Other 30-level courses</p>
                  <p className="text-blue-700">Count toward the 30-credit 30-level requirement but no Diploma Exam</p>
                </div>
                <div className="bg-violet-50 border border-violet-200 rounded-xl p-3">
                  <div className="w-4 h-4 rounded bg-violet-600 mx-auto mb-1" />
                  <p className="font-bold text-violet-800 mb-1">CTS / Fine Arts / Language</p>
                  <p className="text-violet-700">Required 10-credit option — great place to explore STEM career technologies</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Pathways Diagram */}
        <section>
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">The Four Pathways</h2>
            <div className="flex-1 h-px bg-border" />
          </div>
          <p className="text-muted-foreground mb-6 text-sm">There is no single correct path. Here are the four main routes from high school to a STEM career — each with different timelines, costs, and outcomes.</p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="bg-muted/20 border rounded-2xl p-4 md:p-8">
              <PathwaysDiagram />
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6 text-xs">
                {[
                  { label: "University", color: "bg-violet-50 border-violet-200", badge: "bg-violet-600", pros: "Broadest credential recognition, research roles, professional designations (P.Eng, MD)", cons: "3–5+ years, higher tuition, competitive admission for premium programs" },
                  { label: "Polytechnic (NAIT/SAIT)", color: "bg-sky-50 border-sky-200", badge: "bg-sky-600", pros: "Hands-on training, 2–3 years, direct employer connections, often faster into work", cons: "Engineering Tech ≠ P.Eng; some roles require bridging to full designation" },
                  { label: "Online / Bootcamp", color: "bg-amber-50 border-amber-200", badge: "bg-amber-600", pros: "Flexible, fast, often cheaper; portfolio-based entry to tech roles", cons: "Less regulated; not all employers accept equally; requires strong self-discipline" },
                  { label: "Apprenticeship", color: "bg-green-50 border-green-200", badge: "bg-green-700", pros: "Earn while learning, fully funded by employer, journeyperson wage at completion", cons: "Specific to trades roles; competitive entry for popular trades programs" },
                ].map(p => (
                  <div key={p.label} className={`border rounded-xl p-3 ${p.color}`}>
                    <span className={`inline-block text-xs font-bold text-white px-2 py-0.5 rounded-full mb-2 ${p.badge}`}>{p.label}</span>
                    <p className="font-bold text-foreground mb-1">Pros</p>
                    <p className="text-muted-foreground mb-2">{p.pros}</p>
                    <p className="font-bold text-foreground mb-1">Consider</p>
                    <p className="text-muted-foreground">{p.cons}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Career Areas — 12 */}
        <section>
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">12 Career Areas to Explore</h2>
            <div className="flex-1 h-px bg-border" />
          </div>
          <p className="text-muted-foreground mb-8 text-sm">Each area below includes Alberta salary ranges, job outlook (ALIS 2024–2034 data), and specific NAIT/SAIT programs alongside university routes. Click into any that sparks your curiosity.</p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-5">
            {careerAreas.map((c) => (
              <motion.div key={c.title} variants={fadeUp} className={`border-2 rounded-2xl p-6 ${c.color}`}>
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-3xl shrink-0">{c.emoji}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 flex-wrap mb-1">
                      <h3 className="font-serif font-bold text-lg text-foreground">{c.title}</h3>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${c.badgeColor}`}>{c.badge}</span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-xs mt-1">
                      <span className="text-muted-foreground"><span className="font-bold text-foreground">Salary: </span>{c.salary}</span>
                      <span className="text-muted-foreground"><span className="font-bold text-foreground">Prerequisites: </span>{c.prerequisites}</span>
                    </div>
                  </div>
                </div>
                <div className="grid sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-2">Example Roles</p>
                    <ul className="space-y-1">
                      {c.roles.map((r) => (
                        <li key={r} className="flex items-center gap-1.5 text-muted-foreground text-xs">
                          <span className="w-1 h-1 rounded-full bg-current opacity-50 shrink-0" />{r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-2">Alberta Job Outlook 2024–2034</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{c.outlook}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-2">Education Paths</p>
                    <ul className="space-y-1.5">
                      {c.education.map((e, i) => (
                        <li key={i} className="text-xs text-muted-foreground leading-relaxed flex items-start gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-current opacity-50 shrink-0 mt-1.5" />{e}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Universal skills */}
        <section>
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">Skills Every STEM Career Needs</h2>
            <div className="flex-1 h-px bg-border" />
          </div>
          <p className="text-muted-foreground mb-6 text-sm">Technical knowledge is field-specific. These skills are universal — build them now and they pay off in any direction you go.</p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {universalSkills.map((s) => (
              <motion.div key={s.label} variants={fadeUp} className="bg-muted/40 border rounded-xl p-4">
                <p className="font-bold text-sm text-foreground mb-1">{s.label}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Resources */}
        <section>
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">Explore Further</h2>
            <div className="flex-1 h-px bg-border" />
          </div>
          <p className="text-muted-foreground mb-6 text-sm">Trusted resources for Alberta-specific career research, course planning, and polytechnic exploration.</p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {resources.map((r) => (
              <motion.div key={r.name} variants={fadeUp}>
                <a href={r.href} target="_blank" rel="noopener noreferrer"
                  className="block border rounded-xl bg-background p-4 hover:border-primary/50 hover:bg-primary/5 transition-colors group h-full">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <p className="font-bold text-sm text-foreground group-hover:text-primary transition-colors leading-snug">{r.name}</p>
                    <ExternalLink className="w-3.5 h-3.5 text-muted-foreground shrink-0 mt-0.5" />
                  </div>
                  <span className="inline-block text-xs font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full mb-2">{r.tag}</span>
                  <p className="text-xs text-muted-foreground leading-relaxed">{r.desc}</p>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Closing callout */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="bg-slate-800 text-white rounded-2xl p-8">
          <div className="flex items-start gap-4">
            <Globe className="w-6 h-6 text-teal-400 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-serif font-bold text-xl mb-3">A note from Project Nimdeɛ</h3>
              <p className="text-slate-300 leading-relaxed text-sm">
                STEM fields have historically lacked diversity — and that's actively changing. Black, Indigenous, and other underrepresented students bring perspectives that make science and technology better, more equitable, and more human. The question isn't whether you belong in STEM. It's what kind of problem you want to solve — and which path you want to take to get there.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="flex items-center justify-between pt-4 border-t">
          <Link href="/resources/life-skills/time-management" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" /> Time Management
          </Link>
          <Link href="/resources" className="flex items-center gap-2 text-sm font-medium text-primary hover:underline">
            All Resources <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </Layout>
  );
}
