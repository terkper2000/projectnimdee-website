import { Link } from "wouter";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { BookOpen, Brain, Clock, Target, Zap, AlertTriangle, CheckCircle, ArrowLeft, ChevronRight } from "lucide-react";

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

export default function StudySkills() {
  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="border-b bg-background">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/resources" className="hover:text-primary flex items-center gap-1 transition-colors"><ArrowLeft className="w-3.5 h-3.5" />Resources</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground font-medium">Study Skills & Habits</span>
        </div>
      </div>

      {/* Hero */}
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

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 py-14 space-y-16">

        {/* Intro callout */}
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

        {/* Bad habits */}
        <section>
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">Habits to Drop</h2>
            <div className="flex-1 h-px bg-border" />
          </div>
          <p className="text-muted-foreground mb-6 text-sm">These feel like studying. They are not.</p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid sm:grid-cols-2 gap-4">
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

        {/* Bottom nav */}
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
