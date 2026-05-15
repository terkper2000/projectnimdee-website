import { Link } from "wouter";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { ArrowLeft, ChevronRight, Clock, AlertTriangle, CheckCircle, Zap, Smartphone, ExternalLink, Calendar } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const distractors = [
  { name: "Notifications", tip: "Every notification breaks a focus session and costs an average of 23 minutes to fully recover. Turn them all off during study blocks.", icon: "🔔" },
  { name: "Social Media Loops", tip: "Instagram, TikTok, and YouTube are designed by teams of engineers to be maximally engaging. You cannot out-willpower them — remove access instead (Screen Time, Cold Turkey, Forest).", icon: "📱" },
  { name: "Multitasking", tip: "The brain cannot actually multitask — it switches rapidly, losing 20–40% of productivity on each switch. Do one thing fully.", icon: "🔄" },
  { name: "Cluttered Workspace", tip: "Visual clutter competes for cognitive resources. A clean desk literally frees up mental bandwidth.", icon: "📚" },
];

const procrastinationTasks = [
  {
    task: "Write a 5-page history essay",
    anatomy: [
      { step: "Open Google Docs and write your working thesis (1 sentence)", time: "5 min" },
      { step: "List 3 arguments that support it", time: "5 min" },
      { step: "Find 2 sources per argument", time: "20 min" },
      { step: "Write the introduction (just the hook + thesis)", time: "15 min" },
      { step: "Write one body paragraph completely", time: "20 min" },
    ],
    point: "Instead of 'write the essay' in your planner, schedule the first step: 'Open doc, write thesis.' That's it. Starting is the hardest part.",
  },
];

const procrastinationCauses = [
  { cause: "Task feels overwhelming", fix: "Break it into the smallest possible first step. 'Write essay' → 'Open document and type one sentence.'" },
  { cause: "Fear of doing it wrong", fix: "Give yourself permission to do a 'bad' first draft. Done beats perfect. You can always edit." },
  { cause: "You don't know where to start", fix: "Work backwards from the deadline. What needs to happen the day before? The week before? Start there." },
  { cause: "The task feels boring or pointless", fix: "Connect it to a goal you care about. 'This Biology grade matters for university admission for medicine.'" },
  { cause: "You're waiting to feel motivated", fix: "Motivation follows action, not the other way around. Start for 2 minutes — the feeling often follows." },
];

const energyTips = [
  { emoji: "🌅", label: "Peak Energy", tip: "Hardest work (essays, math, new concepts). Most people peak mid-morning." },
  { emoji: "😴", label: "Energy Dip", tip: "Admin tasks only (organising notes, scheduling). Most people dip early afternoon." },
  { emoji: "📖", label: "Recovery", tip: "Review and lighter work (re-reading, flashcards). Late afternoon for most." },
  { emoji: "🌙", label: "Evening", tip: "Final review of the day. Avoid screens 30–60 min before sleep for better memory consolidation." },
];

const planningApps = [
  {
    name: "Notion",
    url: "https://notion.so/students",
    type: "All-in-one planner",
    desc: "Build a personal study dashboard: assignment tracker, weekly calendar, notes, and project timelines in one place. Free for students. Student templates available at notion.so/templates/student.",
    best: "Students who want to build a full system",
  },
  {
    name: "Google Calendar",
    url: "https://calendar.google.com",
    type: "Time-blocking calendar",
    desc: "Create colour-coded time blocks for each subject. Set deadline reminders 3 days early. Sync across all devices. The most universal and easiest to start with.",
    best: "Time-blocking and deadline tracking",
  },
  {
    name: "Structured",
    url: "https://structured.app",
    type: "Visual daily planner (iOS/Android)",
    desc: "Beautiful day planner that shows your tasks as a visual timeline. Great for students who need to see their whole day laid out. Links with your calendar.",
    best: "Students who are visual thinkers",
  },
  {
    name: "Todoist",
    url: "https://todoist.com/students",
    type: "Task manager with priorities",
    desc: "Clean task manager with priority levels, due dates, and project folders. Free tier is generous. Helps capture everything in one trusted place.",
    best: "Managing many tasks across multiple courses",
  },
];

function EisenhowerSVG() {
  return (
    <svg viewBox="0 0 500 420" className="w-full max-w-[540px] mx-auto" role="img" aria-label="Eisenhower Matrix showing four quadrants: Do Now, Schedule, Delegate, Eliminate">
      {/* Grid lines */}
      <line x1="250" y1="40" x2="250" y2="400" stroke="#e2e8f0" strokeWidth="2" />
      <line x1="50" y1="220" x2="460" y2="220" stroke="#e2e8f0" strokeWidth="2" />

      {/* Axis labels */}
      <text x="155" y="25" textAnchor="middle" fill="#ef4444" fontSize="11" fontWeight="bold">URGENT</text>
      <text x="355" y="25" textAnchor="middle" fill="#64748b" fontSize="11" fontWeight="bold">NOT URGENT</text>
      <text x="28" y="130" textAnchor="middle" fill="#1e293b" fontSize="10" fontWeight="bold" transform="rotate(-90, 28, 130)">IMPORTANT</text>
      <text x="28" y="320" textAnchor="middle" fill="#64748b" fontSize="10" fontWeight="bold" transform="rotate(-90, 28, 320)">NOT IMPORTANT</text>

      {/* Quadrant 1: Do Now — top-left */}
      <rect x="52" y="42" width="194" height="172" rx="14" fill="#fef2f2" stroke="#fca5a5" strokeWidth="2" />
      <text x="149" y="70" textAnchor="middle" fill="#ef4444" fontSize="9" fontWeight="bold">URGENT + IMPORTANT</text>
      <text x="149" y="95" textAnchor="middle" fill="#b91c1c" fontSize="16" fontWeight="bold">DO NOW</text>
      <text x="149" y="115" textAnchor="middle" fill="#991b1b" fontSize="8.5">Handle immediately.</text>
      <text x="149" y="130" textAnchor="middle" fill="#991b1b" fontSize="8.5">Real deadlines, real consequences.</text>
      <text x="68" y="155" fill="#b91c1c" fontSize="8">• Exam tomorrow</text>
      <text x="68" y="170" fill="#b91c1c" fontSize="8">• Assignment due today</text>
      <text x="68" y="185" fill="#b91c1c" fontSize="8">• Teacher meeting about failing grade</text>
      <text x="68" y="200" fill="#b91c1c" fontSize="8">• Project with group depending on you</text>

      {/* Quadrant 2: Schedule — top-right */}
      <rect x="254" y="42" width="202" height="172" rx="14" fill="#fffbeb" stroke="#fcd34d" strokeWidth="2" />
      <text x="355" y="70" textAnchor="middle" fill="#d97706" fontSize="9" fontWeight="bold">NOT URGENT + IMPORTANT</text>
      <text x="355" y="95" textAnchor="middle" fill="#92400e" fontSize="16" fontWeight="bold">SCHEDULE</text>
      <text x="355" y="115" textAnchor="middle" fill="#92400e" fontSize="8.5">The most valuable quadrant.</text>
      <text x="355" y="130" textAnchor="middle" fill="#92400e" fontSize="8.5">Most students ignore it — don't.</text>
      <text x="268" y="155" fill="#92400e" fontSize="8">• Long-term projects (start early)</text>
      <text x="268" y="170" fill="#92400e" fontSize="8">• Daily study habits</text>
      <text x="268" y="185" fill="#92400e" fontSize="8">• Exercise and mental health</text>
      <text x="268" y="200" fill="#92400e" fontSize="8">• University / future planning</text>

      {/* Quadrant 3: Delegate — bottom-left */}
      <rect x="52" y="228" width="194" height="166" rx="14" fill="#eff6ff" stroke="#93c5fd" strokeWidth="2" />
      <text x="149" y="252" textAnchor="middle" fill="#3b82f6" fontSize="9" fontWeight="bold">URGENT + NOT IMPORTANT</text>
      <text x="149" y="276" textAnchor="middle" fill="#1d4ed8" fontSize="16" fontWeight="bold">DELEGATE</text>
      <text x="149" y="297" textAnchor="middle" fill="#1e40af" fontSize="8.5">Can someone else handle this?</text>
      <text x="149" y="312" textAnchor="middle" fill="#1e40af" fontSize="8.5">If not — do it fast and move on.</text>
      <text x="68" y="337" fill="#1e40af" fontSize="8">• Some group project logistics</text>
      <text x="68" y="352" fill="#1e40af" fontSize="8">• Replying to non-urgent messages</text>
      <text x="68" y="367" fill="#1e40af" fontSize="8">• Minor scheduling coordination</text>
      <text x="68" y="382" fill="#1e40af" fontSize="8">• Quick admin that feels urgent</text>

      {/* Quadrant 4: Eliminate — bottom-right */}
      <rect x="254" y="228" width="202" height="166" rx="14" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
      <text x="355" y="252" textAnchor="middle" fill="#64748b" fontSize="9" fontWeight="bold">NOT URGENT + NOT IMPORTANT</text>
      <text x="355" y="276" textAnchor="middle" fill="#334155" fontSize="16" fontWeight="bold">ELIMINATE</text>
      <text x="355" y="297" textAnchor="middle" fill="#475569" fontSize="8.5">The honest truth about most</text>
      <text x="355" y="312" textAnchor="middle" fill="#475569" fontSize="8.5">passive screen time.</text>
      <text x="268" y="337" fill="#475569" fontSize="8">• Doom-scrolling during study hours</text>
      <text x="268" y="352" fill="#475569" fontSize="8">• Binge-watching when work waits</text>
      <text x="268" y="367" fill="#475569" fontSize="8">• Busy-work that feels productive</text>
      <text x="268" y="382" fill="#475569" fontSize="8">• Checking the same apps repeatedly</text>
    </svg>
  );
}

const albertaCalendar = [
  {
    period: "September",
    label: "Start of Semester 1",
    color: "bg-teal-50 border-teal-300",
    icon: "📚",
    actions: [
      "Map every deadline from every course syllabus into one calendar",
      "Identify your 2–3 hardest courses and plan weekly review for them immediately",
      "Set up your study system (Anki decks, Cornell notes) before falling behind",
    ],
  },
  {
    period: "October–November",
    label: "Mid-semester crunch",
    color: "bg-amber-50 border-amber-300",
    icon: "⚠️",
    actions: [
      "Midterms cluster here — begin reviewing 3 weeks before, not the week before",
      "Book time with your teacher now if any concepts are unclear",
      "Track grade standing; it's much easier to raise a 60% in November than in January",
    ],
  },
  {
    period: "December",
    label: "6 weeks before Diploma Exams",
    color: "bg-rose-50 border-rose-300",
    icon: "🗓️",
    actions: [
      "Alberta Diploma Exams are written in January — start your exam prep plan NOW",
      "Work backwards from each exam date: 6-week prep → 4-week review → 2-week intensive",
      "Past exams are available free on the Alberta Education website — use them",
    ],
  },
  {
    period: "January",
    label: "Semester 1 Diploma Exams",
    color: "bg-rose-100 border-rose-400",
    icon: "📝",
    actions: [
      "Grade 12 Diploma Exams (English 30, Math 30, Science 30, Social 30) are worth 30% of your final mark",
      "Exam schedules are set by Alberta Education — check alberta.ca/diploma-examinations for dates",
      "Write practice tests under timed conditions in the 2 weeks before each exam",
    ],
  },
  {
    period: "February",
    label: "Start of Semester 2",
    color: "bg-teal-50 border-teal-300",
    icon: "🌱",
    actions: [
      "Repeat the September setup for new courses — don't wait until you're behind",
      "Reflect on Semester 1: which subjects need more time? Adjust your weekly plan.",
      "University application deadlines often fall in February–March for fall admission",
    ],
  },
  {
    period: "April–May",
    label: "6 weeks before June Diplomas",
    color: "bg-violet-50 border-violet-300",
    icon: "🎯",
    actions: [
      "June Diploma Exams are the second sitting — same 6-week backward-planning approach applies",
      "AP and IB exams also run in May — if taking these, plan carefully for overlap",
      "This is when planning from September pays off — no panic cramming needed",
    ],
  },
];

const weeklyVisual = [
  { time: "7:00–8:00", blocks: ["Morning routine + Anki review", "Morning routine + Anki review", "Morning routine + Anki review", "Morning routine + Anki review", "Morning routine + Anki review", "Slow morning", "Weekly planning session"] },
  { time: "8:30–3:30", blocks: ["School", "School", "School", "School", "School", "Project deep work (2–3 hrs)", "Anki + this week's review"] },
  { time: "3:30–4:00", blocks: ["Transition & snack", "Transition & snack", "Transition & snack", "Transition & snack", "Transition & snack", "Break", "Break"] },
  { time: "4:00–5:45", blocks: ["Sub 1: 45 min\nSub 2: 45 min", "Sub 3: 45 min\nSub 4: 45 min", "Sub 1: 45 min\nSub 2: 45 min", "Sub 3: 45 min\nWeak spots: 45 min", "Light review only", "Catch-up / free", "Identify weakest topics for week ahead"] },
  { time: "7:30–9:00", blocks: ["Cornell review + new cards", "Cornell review + new cards", "Cornell review + new cards", "Cornell review + new cards", "Free time — protect it", "Free time — protect it", "Early sleep — critical"] },
];
const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const blockColors = [
  ["bg-teal-50", "bg-teal-50", "bg-teal-50", "bg-teal-50", "bg-teal-50", "bg-slate-50", "bg-violet-50"],
  ["bg-blue-100", "bg-blue-100", "bg-blue-100", "bg-blue-100", "bg-blue-100", "bg-amber-50", "bg-violet-50"],
  ["bg-muted/30", "bg-muted/30", "bg-muted/30", "bg-muted/30", "bg-muted/30", "bg-muted/30", "bg-muted/30"],
  ["bg-teal-50", "bg-teal-50", "bg-teal-50", "bg-teal-50", "bg-green-50", "bg-green-50", "bg-violet-50"],
  ["bg-amber-50", "bg-amber-50", "bg-amber-50", "bg-amber-50", "bg-green-50", "bg-green-50", "bg-blue-50"],
];

export default function TimeManagement() {
  return (
    <Layout>
      <div className="border-b bg-background">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/resources" className="hover:text-primary flex items-center gap-1 transition-colors"><ArrowLeft className="w-3.5 h-3.5" />Resources</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground font-medium">Time Management</span>
        </div>
      </div>

      <div className="bg-gradient-to-br from-amber-700 via-amber-600 to-orange-800 text-white">
        <div className="max-w-5xl mx-auto px-4 py-16 md:py-20">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-block text-xs font-bold tracking-widest uppercase bg-white/15 px-3 py-1 rounded-full mb-5">Life Skills</span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-4">
              Time Management<br />
              <span className="text-amber-200">Everyone Has 24 Hours</span>
            </h1>
            <p className="text-amber-100 text-lg max-w-2xl mb-6 leading-relaxed">
              The difference between students who feel overwhelmed and those who feel in control usually isn't intelligence or workload — it's how they relate to and structure their time.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              {["Grades 7–12", "Alberta exam schedule", "Updated May 2026"].map(t => (
                <span key={t} className="bg-white/10 text-amber-100 px-3 py-1 rounded-full font-medium">{t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-14 space-y-16">

        {/* Eisenhower Matrix SVG */}
        <section>
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">The Eisenhower Matrix</h2>
            <div className="flex-1 h-px bg-border" />
          </div>
          <p className="text-muted-foreground mb-6 text-sm">Used by President Eisenhower and taught in top business schools: sort every task by <em>urgency</em> (deadline) and <em>importance</em> (long-term impact). Most students only react to urgency and ignore importance — and wonder why they're always scrambling.</p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="bg-muted/20 border rounded-2xl p-4 md:p-8">
              <EisenhowerSVG />
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4">
                <p className="text-sm text-amber-900"><span className="font-bold">The insight most students miss:</span> Quadrant 2 (Not Urgent + Important) is where your most valuable work lives — study habits, health, long-term projects, future planning. Because it never feels urgent, it never gets done. Make scheduling Q2 a weekly habit.</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Alberta Diploma Exam Calendar */}
        <section>
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">Planning Around Alberta's School Year</h2>
            <div className="flex-1 h-px bg-border" />
          </div>
          <p className="text-muted-foreground mb-3 text-sm">Alberta runs two semesters, each ending with Diploma Exams for Grade 12 courses. If you're in Grade 12, these exams are worth 30% of your final mark — and they're non-negotiable. Plan backwards from them.</p>
          <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 mb-6 flex gap-3">
            <Calendar className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
            <div className="text-sm text-teal-900">
              <p className="font-bold mb-1">Alberta Diploma Exam dates</p>
              <p>Semester 1 Diplomas: <span className="font-semibold">January</span> — English 30, Math 30-1/30-2, Biology 30, Chemistry 30, Physics 30, Social Studies 30-1/30-2</p>
              <p className="mt-1">Semester 2 Diplomas: <span className="font-semibold">June</span> — same subject areas, second sitting</p>
              <a href="https://www.alberta.ca/diploma-examinations" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-2 text-teal-700 font-bold hover:underline text-xs">
                Official exam schedule at alberta.ca <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {albertaCalendar.map((item) => (
              <motion.div key={item.period} variants={fadeUp} className={`border-2 rounded-xl p-4 ${item.color}`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <p className="font-bold text-sm text-foreground">{item.period}</p>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                  </div>
                </div>
                <ul className="space-y-1.5">
                  {item.actions.map((a, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-xs text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50 shrink-0 mt-1.5" />
                      {a}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Visual Weekly Schedule */}
        <section>
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">A Realistic Student Week</h2>
            <div className="flex-1 h-px bg-border" />
          </div>
          <p className="text-muted-foreground mb-6 text-sm">A repeatable weekly rhythm removes the mental overhead of deciding when to do what. Adapt this template to your specific timetable and commitments.</p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="overflow-x-auto border rounded-2xl">
              <table className="w-full text-xs min-w-[700px]">
                <thead>
                  <tr className="bg-amber-700 text-white">
                    <th className="text-left px-3 py-3 font-bold w-28">Time</th>
                    {weekDays.map(d => (
                      <th key={d} className="text-center px-2 py-3 font-bold">{d}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {weeklyVisual.map((row, ri) => (
                    <tr key={ri} className="border-t">
                      <td className="px-3 py-3 font-bold text-foreground align-top whitespace-nowrap">{row.time}</td>
                      {row.blocks.map((block, bi) => (
                        <td key={bi} className={`px-2 py-2 text-center align-top ${blockColors[ri]?.[bi] || ""}`}>
                          <span className="text-muted-foreground leading-relaxed" style={{ whiteSpace: "pre-line" }}>{block}</span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-3 text-center">This is a model, not a prescription. What matters is having a consistent structure so decisions are made in advance, not in the moment.</p>
          </motion.div>
        </section>

        {/* Digital Distractions */}
        <section>
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">The Distraction Problem</h2>
            <div className="flex-1 h-px bg-border" />
          </div>
          <p className="text-muted-foreground mb-6 text-sm">Willpower is a limited resource. The most effective time managers don't resist distractions — they remove them.</p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid sm:grid-cols-2 gap-4">
            {distractors.map((d) => (
              <motion.div key={d.name} variants={fadeUp} className="border rounded-xl bg-background p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{d.icon}</span>
                  <span className="font-bold text-sm text-foreground">{d.name}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{d.tip}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-5 flex gap-3">
            <Smartphone className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-amber-900 mb-1 text-sm">Tools that help</p>
              <p className="text-sm text-amber-800">Forest (grows a virtual tree while you focus), Cold Turkey (blocks sites on PC), iPhone Screen Time / Android Digital Wellbeing, Focusmate (virtual co-working accountability).</p>
            </div>
          </motion.div>
        </section>

        {/* Procrastination - expanded */}
        <section>
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">Why You Procrastinate</h2>
            <div className="flex-1 h-px bg-border" />
          </div>
          <p className="text-muted-foreground mb-6 text-sm">Procrastination is rarely about laziness. It's almost always about one of five root causes — each with a specific fix.</p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-3 mb-8">
            {procrastinationCauses.map((p) => (
              <motion.div key={p.cause} variants={fadeUp} className="border rounded-xl bg-background p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold text-foreground mb-1">{p.cause}</p>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground">{p.fix}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Task anatomy breakdown */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="bg-teal-50 border-2 border-teal-200 rounded-2xl p-6">
              <h3 className="font-serif font-bold text-lg text-teal-900 mb-2">Task Anatomy: Breaking Down the Overwhelming</h3>
              <p className="text-sm text-teal-800 mb-5">
                "Write a 5-page history essay" is not a task — it's a project. A task is something you can actually sit down and do right now. Here's how to decompose a typical overwhelming assignment:
              </p>
              <div className="space-y-3">
                {procrastinationTasks[0].anatomy.map((step, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/60 rounded-xl p-3">
                    <span className="w-7 h-7 rounded-full bg-teal-600 text-white text-xs font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                    <p className="text-sm text-foreground flex-1">{step.step}</p>
                    <span className="text-xs font-bold text-teal-700 whitespace-nowrap">{step.time}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 bg-teal-700 text-white rounded-xl p-4 text-sm">
                <p className="font-bold mb-1">The key insight</p>
                <p className="text-teal-100">{procrastinationTasks[0].point}</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Energy management */}
        <section>
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">Manage Energy, Not Just Time</h2>
            <div className="flex-1 h-px bg-border" />
          </div>
          <p className="text-muted-foreground mb-6 text-sm">You have 24 hours every day, but your mental energy is not consistent across those hours. Match task difficulty to your energy level.</p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {energyTips.map((e) => (
              <motion.div key={e.label} variants={fadeUp} className="border rounded-xl bg-background p-4 text-center">
                <span className="text-3xl block mb-2">{e.emoji}</span>
                <p className="font-bold text-sm text-foreground mb-2">{e.label}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{e.tip}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Planning apps */}
        <section>
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">Planning Tools Worth Using</h2>
            <div className="flex-1 h-px bg-border" />
          </div>
          <p className="text-muted-foreground mb-6 text-sm">The best planner is the one you'll actually use. Start with Google Calendar — it's free, universal, and requires zero learning curve.</p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 gap-4">
            {planningApps.map((app) => (
              <motion.div key={app.name} variants={fadeUp}>
                <a href={app.url} target="_blank" rel="noopener noreferrer"
                  className="block border rounded-xl bg-background p-4 hover:border-primary/50 hover:bg-primary/5 transition-colors group h-full">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <p className="font-bold text-sm text-foreground group-hover:text-primary transition-colors">{app.name}</p>
                    <ExternalLink className="w-3.5 h-3.5 text-muted-foreground shrink-0 mt-0.5" />
                  </div>
                  <p className="text-xs font-medium text-amber-600 mb-2">{app.type}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-2">{app.desc}</p>
                  <p className="text-xs"><span className="font-bold text-foreground">Best for: </span><span className="text-muted-foreground">{app.best}</span></p>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* 2-Minute Rule callout */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="bg-amber-700 text-white rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-4">
            <Zap className="w-6 h-6 text-amber-200" />
            <h3 className="font-serif font-bold text-xl">The 2-Minute Rule</h3>
          </div>
          <p className="text-amber-100 leading-relaxed mb-2">
            From David Allen's <em>Getting Things Done</em>: if a task takes less than 2 minutes to complete, do it immediately — don't add it to a list. The overhead of tracking it costs more than doing it.
          </p>
          <p className="text-amber-200 text-sm">
            This applies to: replying to a quick email, adding a note to your planner, texting a teammate back, filing a paper. Small completions reduce mental clutter and build momentum.
          </p>
        </motion.div>

        <div className="flex items-center justify-between pt-4 border-t">
          <Link href="/resources/life-skills/growth-mindset" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" /> Growth Mindset
          </Link>
          <Link href="/resources/life-skills/stem-careers" className="flex items-center gap-2 text-sm font-medium text-primary hover:underline">
            Next: STEM Career Pathways <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </Layout>
  );
}
