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
    roles: ["Physician / Surgeon", "Nurse Practitioner", "Pharmacist", "Medical Researcher", "Public Health Officer", "Radiologist"],
    education: "BSc in Biology/Chemistry → Professional degree (MD, PharmD, NP) → Residency",
    skills: "Biology, Chemistry, Statistics, communication, empathy, attention to detail",
    startnow: "Volunteer at a hospital or clinic; take Biology 20/30 seriously; look into the Health Sciences pathway.",
  },
  {
    emoji: "💻",
    title: "Computer Science & Software",
    color: "bg-blue-50 border-blue-200",
    badge: "Fastest growing",
    badgeColor: "bg-blue-600 text-white",
    roles: ["Software Developer", "Data Scientist", "AI/ML Engineer", "Cybersecurity Analyst", "UX Designer", "Game Developer"],
    education: "BSc Computer Science or Software Engineering (some roles: bootcamp + portfolio)",
    skills: "Programming, math, logic, problem-solving, communication",
    startnow: "Start coding now — Python is free to learn (Khan Academy, freeCodeCamp). Build a small project.",
  },
  {
    emoji: "⚙️",
    title: "Engineering",
    color: "bg-amber-50 border-amber-200",
    badge: "Diverse paths",
    badgeColor: "bg-amber-600 text-white",
    roles: ["Civil Engineer", "Electrical Engineer", "Mechanical Engineer", "Chemical Engineer", "Biomedical Engineer", "Environmental Engineer"],
    education: "BSc Engineering (4 years) → P.Eng designation",
    skills: "Math, Physics, problem-solving, design thinking, project management",
    startnow: "Math 10C/20-1/30-1 and Physics 20/30 are essential prerequisites. Join robotics or engineering clubs.",
  },
  {
    emoji: "🌿",
    title: "Environmental & Earth Sciences",
    color: "bg-teal-50 border-teal-200",
    badge: "Growing urgency",
    badgeColor: "bg-teal-600 text-white",
    roles: ["Environmental Scientist", "Climate Researcher", "Wildlife Biologist", "Geologist", "Hydrologist", "Conservation Planner"],
    education: "BSc in Environmental Science, Biology, or Geology → often MSc for research roles",
    skills: "Biology, Chemistry, Earth Science, data analysis, fieldwork, policy understanding",
    startnow: "Science 10 and Biology 20/30 are your foundation. Volunteer with local conservation or environmental organisations.",
  },
  {
    emoji: "🔬",
    title: "Research & Academia",
    color: "bg-violet-50 border-violet-200",
    badge: "Deep expertise",
    badgeColor: "bg-violet-600 text-white",
    roles: ["University Professor", "Research Scientist", "Laboratory Technician", "Clinical Researcher", "Science Writer"],
    education: "BSc → MSc → PhD (for independent research and professorship)",
    skills: "Deep subject knowledge, critical thinking, writing, data analysis, patience, curiosity",
    startnow: "Develop strong writing and analytical skills. Seek out science fairs and research competitions.",
  },
  {
    emoji: "🏗️",
    title: "Architecture & Urban Design",
    color: "bg-orange-50 border-orange-200",
    badge: "Creative + technical",
    badgeColor: "bg-orange-600 text-white",
    roles: ["Architect", "Structural Engineer", "Urban Planner", "Interior Designer", "Landscape Architect"],
    education: "BSc Architecture (5 years in Canada) → intern architect → Architect designation",
    skills: "Math, Physics, design, spatial reasoning, drawing, sustainability knowledge",
    startnow: "Take Art and Physics. Learn free CAD tools (Tinkercad, SketchUp). Study buildings you walk past.",
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

const startNowSteps = [
  { emoji: "📚", title: "Take the right courses", desc: "Biology 20/30, Chemistry 20/30, Physics 20/30, and Math 30-1 keep the most doors open. Don't close doors early." },
  { emoji: "💡", title: "Explore your interests", desc: "Volunteer, shadow professionals, attend open houses at universities, or try a free online course in something that interests you." },
  { emoji: "🏆", title: "Join competitions & clubs", desc: "Science fairs, robotics clubs, coding competitions, math contests. These build skills AND stand out to universities." },
  { emoji: "🔗", title: "Find mentors", desc: "Ask a teacher, reach out to a professional on LinkedIn, or connect with a university professor doing interesting research." },
  { emoji: "🎓", title: "Research programs early", desc: "Look up what prerequisites Alberta universities require for your programs of interest. Plan backwards from Grade 12." },
  { emoji: "🌐", title: "Use free online resources", desc: "Khan Academy, Coursera, MIT OpenCourseWare, and YouTube have world-class learning for free. Start exploring now." },
];

const resources = [
  { name: "AlbertaCareerInfo.ca", desc: "Alberta-specific salary data, job outlooks, and required credentials for hundreds of careers.", href: "https://alis.alberta.ca/occinfo/" },
  { name: "Let's Talk Science", desc: "Canada's leading STEM engagement organisation for youth — events, competitions, and resources.", href: "https://letstalkscience.ca" },
  { name: "Try Engineering (IEEE)", desc: "Engineering career exploration tool for students from the world's largest engineering organisation.", href: "https://tryengineering.org" },
  { name: "Khan Academy", desc: "Free, world-class courses in math, science, computing, and more. Use it to get ahead.", href: "https://khanacademy.org" },
  { name: "Science World BC", desc: "STEM programs, career profiles, and resources specifically for Canadian students.", href: "https://www.scienceworld.ca" },
  { name: "Brilliant.org", desc: "Interactive math, science, and CS courses built for deep understanding — not memorisation.", href: "https://brilliant.org" },
];

export default function STEMCareers() {
  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="border-b bg-background">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/resources" className="hover:text-primary flex items-center gap-1 transition-colors"><ArrowLeft className="w-3.5 h-3.5" />Resources</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground font-medium">STEM Career Pathways</span>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-800 via-slate-700 to-teal-900 text-white">
        <div className="max-w-5xl mx-auto px-4 py-16 md:py-20">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-block text-xs font-bold tracking-widest uppercase bg-white/15 px-3 py-1 rounded-full mb-5">Life Skills</span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-4">
              STEM Career<br />
              <span className="text-teal-300">Pathways</span>
            </h1>
            <p className="text-slate-200 text-lg max-w-2xl mb-6 leading-relaxed">
              STEM isn't one path — it's hundreds of them. From medicine to urban design to AI, the world needs people who can think scientifically. Here's how to find your direction.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              {["Grades 7–12", "Alberta-relevant", "Updated May 2026"].map(t => (
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
              <p className="font-bold text-teal-900 mb-2">Why STEM skills matter more than ever</p>
              <p className="text-teal-800 text-sm leading-relaxed mb-2">
                The World Economic Forum estimates that 65% of children entering primary school today will work in jobs that don't yet exist — and the majority will require STEM skills. Meanwhile, Canada faces significant shortages in engineering, health sciences, computer science, and environmental fields.
              </p>
              <p className="text-teal-700 text-sm leading-relaxed">
                But "STEM career" doesn't mean "lab coat and equations." It means using rigorous thinking to solve real problems — which increasingly describes almost every high-impact role in any field.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Career Areas */}
        <section>
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">6 Career Areas to Explore</h2>
            <div className="flex-1 h-px bg-border" />
          </div>
          <p className="text-muted-foreground mb-8 text-sm">These aren't exhaustive — they're starting points. Click into any area that sparks your curiosity.</p>
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
                  </div>
                </div>
                <div className="grid sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-2">Example Roles</p>
                    <ul className="space-y-1">
                      {c.roles.map((r) => (
                        <li key={r} className="flex items-center gap-1.5 text-muted-foreground">
                          <span className="w-1 h-1 rounded-full bg-current opacity-50 shrink-0" />{r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-2">Typical Education</p>
                    <p className="text-muted-foreground leading-relaxed">{c.education}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-2">Start Now</p>
                    <p className="text-muted-foreground leading-relaxed">{c.startnow}</p>
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

        {/* Start now steps */}
        <section>
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">Where to Start — Right Now</h2>
            <div className="flex-1 h-px bg-border" />
          </div>
          <p className="text-muted-foreground mb-6 text-sm">You don't need to have it all figured out. You just need to start moving in a direction and keep your options open.</p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {startNowSteps.map((s) => (
              <motion.div key={s.title} variants={fadeUp} className="border rounded-xl bg-background p-5">
                <span className="text-2xl block mb-3">{s.emoji}</span>
                <p className="font-bold text-sm text-foreground mb-1.5">{s.title}</p>
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
          <p className="text-muted-foreground mb-6 text-sm">Trusted resources for career exploration, learning, and STEM engagement.</p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {resources.map((r) => (
              <motion.div key={r.name} variants={fadeUp}>
                <a href={r.href} target="_blank" rel="noopener noreferrer"
                  className="block border rounded-xl bg-background p-4 hover:border-primary/50 hover:bg-primary/5 transition-colors group">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <p className="font-bold text-sm text-foreground group-hover:text-primary transition-colors">{r.name}</p>
                    <ExternalLink className="w-3.5 h-3.5 text-muted-foreground shrink-0 mt-0.5" />
                  </div>
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
                STEM fields have historically lacked diversity — and that's actively changing. Black, Indigenous, and other underrepresented students bring perspectives that make science and technology better, more equitable, and more human. The question isn't whether you belong in STEM. It's what kind of problem you want to solve.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom nav */}
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
