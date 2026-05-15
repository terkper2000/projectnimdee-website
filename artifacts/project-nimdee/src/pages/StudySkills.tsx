import { Link } from "wouter";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { BookOpen, Brain, Clock, Target, Zap, AlertTriangle, CheckCircle, ArrowLeft, ChevronRight, ExternalLink } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const techniques = [
  {
    icon: Brain,
    title: "Active Recall",
    color: "bg-teal-50 border-teal-200",
    iconColor: "text-teal-600",
    what: "Testing yourself on material instead of just re-reading it.",
    why: "Re-reading feels productive but is one of the least effective study methods. Retrieval practice — forcing your brain to pull information out — dramatically strengthens memory pathways.",
    how: [
      "Close your notes and write everything you can remember on a blank page",
      "Use flashcards (Anki, Quizlet) — answer before flipping",
      "After each section, write a 3-sentence summary from memory",
      "Teach the concept out loud to an imaginary student",
    ],
    badge: "Most Effective",
    badgeColor: "bg-teal-600 text-white",
  },
  {
    icon: Clock,
    title: "Spaced Repetition",
    color: "bg-violet-50 border-violet-200",
    iconColor: "text-violet-600",
    what: "Reviewing material at increasing intervals over time.",
    why: "Your brain forgets information in a predictable curve (the 'forgetting curve'). Reviewing just before you forget re-encodes the memory more strongly — and pushes the next forgetting point further out.",
    how: [
      "Review new material the same day, then 3 days later, then 1 week later",
      "Use Anki — it automatically schedules reviews based on your performance",
      "Don't cram everything the night before; spread review sessions out",
      "Keep a 'to review' list and check it daily",
    ],
    badge: "Science-Backed",
    badgeColor: "bg-violet-600 text-white",
  },
  {
    icon: Target,
    title: "The Pomodoro Technique",
    color: "bg-amber-50 border-amber-200",
    iconColor: "text-amber-600",
    what: "25 minutes of focused work, then a 5-minute break. Repeat.",
    why: "Sustained focus is exhausting. Short, structured bursts prevent mental fatigue, make large tasks feel manageable, and train your concentration muscle over time.",
    how: [
      "Set a timer for 25 minutes — work on ONE task only",
      "When the timer rings, take a genuine 5-minute break (move, stretch)",
      "After 4 Pomodoros, take a longer 20–30 minute break",
      "Track how many Pomodoros a task takes — it improves your planning",
    ],
    badge: "Focus Builder",
    badgeColor: "bg-amber-600 text-white",
  },
  {
    icon: BookOpen,
    title: "Cornell Note-Taking",
    color: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-600",
    what: "A structured note layout that forces you to summarise and question as you go.",
    why: "Most students take notes passively and never look at them again. Cornell notes build in active processing — the cue column forces you to generate questions, and the summary cements understanding.",
    how: [
      "Draw a line: left column (2\") for cue questions, right column for notes",
      "During class: take regular notes in the right column",
      "Within 24 hours: write questions in the left column that your notes answer",
      "At the bottom: write a 3-sentence summary of the whole page",
    ],
    badge: "Note Smarter",
    badgeColor: "bg-blue-600 text-white",
  },
];

const subjectStrategies = [
  {
    subject: "Mathematics",
    emoji: "📐",
    color: "bg-blue-50 border-blue-200",
    headerColor: "text-blue-800",
    principle: "You cannot learn math by watching it. You learn it by doing it.",
    tips: [
      "Work problems — don't just re-read solved examples. Close the textbook and try the problem yourself.",
      "When you get an answer wrong, identify exactly which step broke down — don't just redo it.",
      "Study with a blank page. Reproduce definitions, formulas, and example problems from memory.",
      "Explain your process out loud ('I'm multiplying both sides because…') — gaps in understanding become obvious.",
      "Don't skip steps to save time. Errors in math almost always live in steps that felt 'obvious'.",
      "For Alberta Math 10C/20-1/30-1: build a formula sheet as you go and quiz yourself on it weekly.",
    ],
  },
  {
    subject: "Biology & Chemistry",
    emoji: "🔬",
    color: "bg-teal-50 border-teal-200",
    headerColor: "text-teal-800",
    principle: "Science is about understanding processes, not memorising labels.",
    tips: [
      "Draw concept maps connecting ideas (e.g., cellular respiration → ATP → muscle contraction). Redraw from memory.",
      "For chemistry equations, balance and re-balance — don't just read balanced equations.",
      "Use the 'why' test: for every fact, ask why it's true. If you can't explain it, you haven't learned it.",
      "Diagrams (cell structure, reaction mechanisms) should be drawn from memory, not copied.",
      "Flashcards work well for terminology, but pair each term with a concrete example or application.",
      "For Alberta Bio 20/30 and Chem 20/30: unit overview diagrams showing how concepts connect are powerful.",
    ],
  },
  {
    subject: "History & Social Studies",
    emoji: "📜",
    color: "bg-amber-50 border-amber-200",
    headerColor: "text-amber-800",
    principle: "History is not a list of facts — it's a web of causes, consequences, and arguments.",
    tips: [
      "Use argument mapping: for each historical event, identify causes, key actors, decisions made, and consequences.",
      "Practice writing thesis statements for essay prompts before you study the content — reveals what you don't know.",
      "Timelines are useful only if you annotate causes and effects, not just dates.",
      "When reading a source, ask: who wrote this, why, and what perspective is missing?",
      "Practise linking events across time: how did WWI conditions directly create the conditions for WWII?",
      "For Alberta Social 20-1/30-1: practice constructing and defending a position, not just restating evidence.",
    ],
  },
  {
    subject: "English Language Arts",
    emoji: "✍️",
    color: "bg-rose-50 border-rose-200",
    headerColor: "text-rose-800",
    principle: "Writing improves through drafting and revision — not through reading about how to write.",
    tips: [
      "Write rough drafts quickly, then revise deliberately. Editing your own work is the core skill.",
      "For essay analysis: find the thesis, identify the evidence, then ask 'so what?' — that's the insight.",
      "Read actively: annotate, question, and summarise every few paragraphs.",
      "Study strong examples of the essay type you're writing — what makes them effective?",
      "For reading comprehension: summarise each paragraph in one sentence. Forces true understanding.",
      "For Alberta Diploma English 30-1/30-2: practise timed writing under exam-like conditions regularly.",
    ],
  },
];

const studyTools = [
  {
    name: "Anki",
    url: "https://apps.ankiweb.net",
    type: "Spaced Repetition Flashcards",
    tagline: "The gold standard for memorisation",
    desc: "Free desktop app. Creates flashcard decks and automatically schedules reviews based on how well you know each card. Used by medical students worldwide.",
    best: "Vocabulary, formulas, definitions, historical dates",
    cost: "Free (desktop/web), ~$35 for iOS app",
  },
  {
    name: "Quizlet",
    url: "https://quizlet.com",
    type: "Flashcards + Study Games",
    tagline: "Easiest to get started with",
    desc: "Create flashcard sets or use millions of pre-made ones. Multiple study modes including matching games and practice tests.",
    best: "Quick flashcard review, studying with classmates",
    cost: "Free (basic), ~$36/yr for premium",
  },
  {
    name: "Forest",
    url: "https://www.forestapp.cc",
    type: "Focus Timer",
    tagline: "Gamified Pomodoro — grows virtual trees",
    desc: "Set a focus timer and a virtual tree grows. Leave the app and the tree dies. The guilt is extremely effective. Real trees are planted with earned coins.",
    best: "Students who are frequently distracted by their phone",
    cost: "~$3 one-time purchase",
  },
  {
    name: "Focusmate",
    url: "https://www.focusmate.com",
    type: "Virtual Co-Working Accountability",
    tagline: "Study with a stranger over video",
    desc: "Book 25 or 50-minute sessions with a partner online. You both show up, state your goals, and work silently. Social accountability is powerful.",
    best: "Students who procrastinate alone but work well in libraries",
    cost: "3 free sessions/week; ~$7/mo for unlimited",
  },
  {
    name: "Pomofocus",
    url: "https://pomofocus.io",
    type: "Browser Pomodoro Timer",
    tagline: "Simple, free, no download needed",
    desc: "Clean web-based Pomodoro timer with task list. No account required. Open it in a browser tab and go.",
    best: "First-time Pomodoro users wanting zero friction",
    cost: "Free",
  },
  {
    name: "Notion",
    url: "https://notion.so/students",
    type: "Notes + Planning",
    tagline: "All-in-one study organisation system",
    desc: "Flexible tool for building a personal wiki: notes, project trackers, calendars. Free for students. Steep learning curve but very powerful once set up.",
    best: "Organising notes across multiple subjects and projects",
    cost: "Free for students",
  },
];

const studyMyths = [
  {
    myth: "Re-reading your notes is effective studying.",
    reality: "Re-reading feels productive but is one of the weakest study methods. Familiarity is not the same as memory. Active recall — closing your notes and retrieving information — is 2–3× more effective.",
  },
  {
    myth: "Highlighting key passages helps you remember them.",
    reality: "Highlighting is nearly useless unless followed by active processing. The physical act of dragging a highlighter creates the illusion of engagement. Use it only to mark what to make flashcards from.",
  },
  {
    myth: "Studying the same subject for 3+ hours builds deep understanding.",
    reality: "Interleaved practice — switching between subjects or problem types — feels harder but produces better long-term retention. Block study creates short-term fluency that fades quickly.",
  },
  {
    myth: "You need to be in the right mood to study well.",
    reality: "Motivation follows action, not the other way around. Start for 5 minutes, and the focus usually follows. Waiting for the right mood is a procrastination strategy your brain invented.",
  },
  {
    myth: "Smart students don't need to study as hard.",
    reality: "Research by Carol Dweck consistently shows students who believe intelligence is fixed study less and perform worse over time. Effort and strategy predict outcomes more reliably than raw ability.",
  },
  {
    myth: "Cramming the night before works fine.",
    reality: "Cramming floods short-term memory but doesn't transfer to long-term storage. You may pass tomorrow's test, but you'll retain almost nothing within a week — and it all has to be relearned.",
  },
];

const badHabits = [
  { habit: "Re-reading your textbook", fix: "Close it and try to recall from memory first, then check." },
  { habit: "Highlighting everything", fix: "Highlight sparingly — only the 1 key idea per paragraph. Then make flashcards." },
  { habit: "Studying with your phone nearby", fix: "Put it in another room or use Forest/Focus Mode. Even face-down is too distracting." },
  { habit: "Studying the same subject for 3 hours straight", fix: "Interleave subjects — switch topics every 45–60 minutes. It feels harder but works better." },
  { habit: "Starting at the beginning and working forward", fix: "Tackle your hardest, least-understood topic first while your brain is freshest." },
  { habit: "Listening to music with lyrics", fix: "Use instrumental music or brown noise. Lyrics compete with your verbal processing." },
];

const environments = [
  { icon: "💡", label: "Light", tip: "Natural light or a bright warm lamp — dim rooms cause fatigue within 20 minutes." },
  { icon: "🔇", label: "Sound", tip: "Library-quiet or ambient/instrumental music. Silence is ideal for reading; white noise for writing." },
  { icon: "🪑", label: "Posture", tip: "Sit upright at a desk. Studying in bed trains your brain to associate that space with sleep, not focus." },
  { icon: "🌡️", label: "Temperature", tip: "Slightly cool (18–20°C) keeps you alert. Warm rooms are the enemy of focus." },
  { icon: "📵", label: "Devices", tip: "Phone in another room, notifications off, unnecessary tabs closed. One distraction resets your focus clock." },
  { icon: "💧", label: "Hydration", tip: "Keep water at your desk. Even mild dehydration (1–2%) measurably impairs concentration and memory." },
];

function StudyCycleSVG() {
  const steps = [
    { label: "ATTEND", sub: "Be present in class", x: 200, y: 40, r: 38, fill: "#0d9488" },
    { label: "REVIEW", sub: "Within 24 hours", x: 340, y: 115, r: 38, fill: "#7c3aed" },
    { label: "PRACTISE", sub: "Active recall", x: 300, y: 265, r: 38, fill: "#d97706" },
    { label: "TEST", sub: "Retrieve & check", x: 100, y: 265, r: 38, fill: "#0891b2" },
    { label: "REFLECT", sub: "Fix the gaps", x: 60, y: 115, r: 38, fill: "#16a34a" },
  ];
  const cx = 200, cy = 165;
  return (
    <svg viewBox="0 0 400 320" className="w-full max-w-[420px] mx-auto" role="img" aria-label="Study cycle diagram: Attend, Review, Practise, Test, Reflect">
      <defs>
        <marker id="arr" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#94a3b8" />
        </marker>
      </defs>
      <circle cx={cx} cy={cy} r={110} fill="none" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="6 4" />
      {steps.map((s, i) => {
        const next = steps[(i + 1) % steps.length];
        const dx = next.x - s.x, dy = next.y - s.y;
        const len = Math.sqrt(dx * dx + dy * dy);
        const nx = dx / len, ny = dy / len;
        return (
          <line key={i}
            x1={s.x + nx * (s.r + 4)} y1={s.y + ny * (s.r + 4)}
            x2={next.x - nx * (next.r + 10)} y2={next.y - ny * (next.r + 10)}
            stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr)" />
        );
      })}
      {steps.map((s) => (
        <g key={s.label}>
          <circle cx={s.x} cy={s.y} r={s.r} fill={s.fill} />
          <text x={s.x} y={s.y - 6} textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">{s.label}</text>
          <text x={s.x} y={s.y + 8} textAnchor="middle" fill="rgba(255,255,255,0.85)" fontSize="6.5">{s.sub}</text>
        </g>
      ))}
      <text x={cx} y={cy - 8} textAnchor="middle" fill="#1e293b" fontSize="10" fontWeight="bold">THE</text>
      <text x={cx} y={cy + 8} textAnchor="middle" fill="#1e293b" fontSize="10" fontWeight="bold">STUDY</text>
      <text x={cx} y={cy + 22} textAnchor="middle" fill="#1e293b" fontSize="10" fontWeight="bold">CYCLE</text>
    </svg>
  );
}

const weekSchedule = [
  { time: "7:00–8:00", mon: "Wake + review Anki", tue: "Wake + review Anki", wed: "Wake + review Anki", thu: "Wake + review Anki", fri: "Wake + review Anki", sat: "Rest / slow morning", sun: "Weekly planning" },
  { time: "8:30–3:30", mon: "School", tue: "School", wed: "School", thu: "School", fri: "School", sat: "Longer project work", sun: "Anki + review week" },
  { time: "4:00–5:30", mon: "Subject 1 (45 min) + Subject 2 (45 min)", tue: "Subject 3 (45 min) + Subject 4 (45 min)", wed: "Subject 1 (45 min) + Subject 2 (45 min)", thu: "Subject 3 (45 min) + weak spots", fri: "Light review only", sat: "Subject deep-dive (2 hrs)", sun: "Identify weakest topics" },
  { time: "7:30–9:00", mon: "Cornell notes review + new flashcards", tue: "Cornell notes review + new flashcards", wed: "Cornell notes review + new flashcards", thu: "Cornell notes review + new flashcards", fri: "Free time — protect it", sat: "Free time", sun: "Early sleep — protect it" },
];

export default function StudySkills() {
  return (
    <Layout>
      <div className="border-b bg-background">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/resources" className="hover:text-primary flex items-center gap-1 transition-colors"><ArrowLeft className="w-3.5 h-3.5" />Resources</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground font-medium">Study Skills & Habits</span>
        </div>
      </div>

      <div className="bg-gradient-to-br from-teal-800 via-teal-700 to-teal-900 text-white">
        <div className="max-w-5xl mx-auto px-4 py-16 md:py-20">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-block text-xs font-bold tracking-widest uppercase bg-white/15 px-3 py-1 rounded-full mb-5">Life Skills</span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-4">
              Study Skills<br />
              <span className="text-teal-200">& Habits That Work</span>
            </h1>
            <p className="text-teal-100 text-lg max-w-2xl mb-6 leading-relaxed">
              Most students study hard. Very few study smart. The difference isn't intelligence — it's strategy. Here's what the science actually says about learning.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              {["Grades 7–12", "Evidence-based", "Updated May 2026"].map(t => (
                <span key={t} className="bg-white/10 text-teal-100 px-3 py-1 rounded-full font-medium">{t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-14 space-y-16">

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex gap-4">
          <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-amber-900 mb-1">The hard truth about studying</p>
            <p className="text-amber-800 text-sm leading-relaxed">
              Research consistently shows that the study methods students prefer — re-reading, highlighting, and marathon cramming sessions — are among the <em>least</em> effective. The methods that actually work feel harder and less productive in the moment. That's exactly why they work.
            </p>
          </div>
        </motion.div>

        {/* Study Cycle Diagram */}
        <section>
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">The Study Cycle</h2>
            <div className="flex-1 h-px bg-border" />
          </div>
          <p className="text-muted-foreground mb-6 text-sm">Effective studying isn't a one-time event — it's a repeating cycle. Each stage reinforces the others.</p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="bg-muted/30 border rounded-2xl p-6 md:p-8">
              <StudyCycleSVG />
              <div className="grid sm:grid-cols-5 gap-3 mt-6 text-center text-xs text-muted-foreground">
                {[
                  { label: "Attend", desc: "Active presence in class, not passive sitting" },
                  { label: "Review", desc: "Within 24 hrs — Cornell cue questions" },
                  { label: "Practise", desc: "Flashcards, problems, recall tests" },
                  { label: "Test", desc: "Practice exams, timed writing" },
                  { label: "Reflect", desc: "Identify gaps, adjust strategy" },
                ].map(s => (
                  <div key={s.label}>
                    <p className="font-bold text-foreground mb-1">{s.label}</p>
                    <p>{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* 4 Core Techniques */}
        <section>
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">4 Core Study Techniques</h2>
            <div className="flex-1 h-px bg-border" />
          </div>
          <p className="text-muted-foreground mb-8 text-sm">Ranked by research effectiveness — start with Active Recall and Spaced Repetition. They're harder, so most students avoid them. That's your advantage.</p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-6">
            {techniques.map((t) => (
              <motion.div key={t.title} variants={fadeUp} className={`border-2 rounded-2xl p-6 ${t.color}`}>
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-2.5 rounded-xl bg-white shadow-sm ${t.iconColor}`}>
                    <t.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1 flex-wrap">
                      <h3 className="font-serif font-bold text-lg text-foreground">{t.title}</h3>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${t.badgeColor}`}>{t.badge}</span>
                    </div>
                    <p className="text-sm text-muted-foreground italic">{t.what}</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-2">Why it works</p>
                    <p className="text-sm text-foreground leading-relaxed">{t.why}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-2">How to use it</p>
                    <ul className="space-y-1">
                      {t.how.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-3.5 h-3.5 text-current mt-0.5 shrink-0 opacity-60" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Subject-specific strategies */}
        <section>
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">How to Study Each Subject</h2>
            <div className="flex-1 h-px bg-border" />
          </div>
          <p className="text-muted-foreground mb-6 text-sm">Math and biology are not studied the same way. Here's what actually works for each subject type.</p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-5">
            {subjectStrategies.map((s) => (
              <motion.div key={s.subject} variants={fadeUp} className={`border-2 rounded-2xl p-6 ${s.color}`}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{s.emoji}</span>
                  <div>
                    <h3 className={`font-serif font-bold text-lg ${s.headerColor}`}>{s.subject}</h3>
                    <p className="text-sm text-muted-foreground italic">"{s.principle}"</p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-2">
                  {s.tips.map((tip, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                      <span className="text-foreground">{tip}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Myths vs Reality */}
        <section>
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">6 Study Myths — Debunked</h2>
            <div className="flex-1 h-px bg-border" />
          </div>
          <p className="text-muted-foreground mb-6 text-sm">These myths are widely believed. Most students build their entire study strategy around at least two of them.</p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-3">
            {studyMyths.map((m, i) => (
              <motion.div key={i} variants={fadeUp} className="border rounded-xl bg-background overflow-hidden">
                <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x">
                  <div className="flex items-start gap-3 p-4 bg-rose-50">
                    <AlertTriangle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-rose-600 uppercase tracking-wider mb-1">Myth</p>
                      <p className="text-sm text-rose-900 font-medium">{m.myth}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-teal-50">
                    <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-teal-600 uppercase tracking-wider mb-1">Reality</p>
                      <p className="text-sm text-teal-900">{m.reality}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Bad habits */}
        <section>
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">Habits to Drop</h2>
            <div className="flex-1 h-px bg-border" />
          </div>
          <p className="text-muted-foreground mb-6 text-sm">These feel like studying. They are not.</p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 gap-4">
            {badHabits.map((b) => (
              <motion.div key={b.habit} variants={fadeUp} className="border rounded-xl bg-background p-4">
                <div className="flex items-start gap-2 mb-2">
                  <AlertTriangle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <p className="text-sm font-bold text-foreground">{b.habit}</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">{b.fix}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Free Tools */}
        <section>
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">Free Tools That Actually Help</h2>
            <div className="flex-1 h-px bg-border" />
          </div>
          <p className="text-muted-foreground mb-6 text-sm">These are all free or nearly free — and used by serious students worldwide. Start with one and build from there.</p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {studyTools.map((tool) => (
              <motion.div key={tool.name} variants={fadeUp}>
                <a href={tool.url} target="_blank" rel="noopener noreferrer"
                  className="block border rounded-xl bg-background p-4 hover:border-primary/50 hover:bg-primary/5 transition-colors group h-full">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <p className="font-bold text-sm text-foreground group-hover:text-primary transition-colors">{tool.name}</p>
                    <ExternalLink className="w-3.5 h-3.5 text-muted-foreground shrink-0 mt-0.5" />
                  </div>
                  <p className="text-xs font-medium text-primary mb-2">{tool.type}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">{tool.desc}</p>
                  <div className="space-y-1">
                    <p className="text-xs"><span className="font-bold text-foreground">Best for: </span><span className="text-muted-foreground">{tool.best}</span></p>
                    <p className="text-xs"><span className="font-bold text-foreground">Cost: </span><span className="text-muted-foreground">{tool.cost}</span></p>
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Weekly Schedule */}
        <section>
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">Printable Weekly Study Schedule</h2>
            <div className="flex-1 h-px bg-border" />
          </div>
          <p className="text-muted-foreground mb-6 text-sm">A realistic template for a student with 4–5 courses. Adjust times to match your own school day and activities.</p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="overflow-x-auto border rounded-2xl">
              <table className="w-full text-xs min-w-[680px]">
                <thead>
                  <tr className="bg-teal-700 text-white">
                    <th className="text-left px-3 py-3 font-bold">Time</th>
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(d => (
                      <th key={d} className="text-left px-3 py-3 font-bold">{d}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {weekSchedule.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                      <td className="px-3 py-3 font-bold text-foreground whitespace-nowrap">{row.time}</td>
                      <td className="px-3 py-3 text-muted-foreground">{row.mon}</td>
                      <td className="px-3 py-3 text-muted-foreground">{row.tue}</td>
                      <td className="px-3 py-3 text-muted-foreground">{row.wed}</td>
                      <td className="px-3 py-3 text-muted-foreground">{row.thu}</td>
                      <td className="px-3 py-3 text-muted-foreground">{row.fri}</td>
                      <td className="px-3 py-3 text-muted-foreground">{row.sat}</td>
                      <td className="px-3 py-3 text-muted-foreground">{row.sun}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-3 text-center">This is a template — adapt it. What matters is having a consistent rhythm, not following it perfectly.</p>
          </motion.div>
        </section>

        {/* Environment */}
        <section>
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">Your Study Environment</h2>
            <div className="flex-1 h-px bg-border" />
          </div>
          <p className="text-muted-foreground mb-6 text-sm">Where and how you study matters as much as what you do. Optimise these six factors.</p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {environments.map((e) => (
              <motion.div key={e.label} variants={fadeUp} className="bg-muted/40 border rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{e.icon}</span>
                  <span className="font-bold text-sm text-foreground">{e.label}</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{e.tip}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Quick plan */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="bg-teal-700 text-white rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-4">
            <Zap className="w-6 h-6 text-teal-200" />
            <h3 className="font-serif font-bold text-xl">A Simple Weekly Study Plan</h3>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 text-sm">
            <div className="bg-white/10 rounded-xl p-4">
              <p className="font-bold text-teal-200 mb-2">After Each Class</p>
              <ul className="space-y-1 text-teal-100">
                <li>• Review notes within 24 hrs</li>
                <li>• Add cue questions (Cornell)</li>
                <li>• Make 5–10 new flashcards</li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <p className="font-bold text-teal-200 mb-2">Every Study Session</p>
              <ul className="space-y-1 text-teal-100">
                <li>• Start with old flashcard review</li>
                <li>• Use Pomodoro blocks</li>
                <li>• End with a blank-page recall test</li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <p className="font-bold text-teal-200 mb-2">Weekly Sunday Reset</p>
              <ul className="space-y-1 text-teal-100">
                <li>• Plan the upcoming week</li>
                <li>• Review all Anki due cards</li>
                <li>• Identify weakest topics</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <div className="flex items-center justify-between pt-4 border-t">
          <Link href="/resources" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" /> All Resources
          </Link>
          <Link href="/resources/life-skills/growth-mindset" className="flex items-center gap-2 text-sm font-medium text-primary hover:underline">
            Next: Growth Mindset <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </Layout>
  );
}
