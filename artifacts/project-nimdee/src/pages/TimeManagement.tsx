import { Link } from "wouter";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { ArrowLeft, ChevronRight, Clock, AlertTriangle, CheckCircle, Zap, Target, Smartphone } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const distractors = [
  { name: "Notifications", tip: "Every notification breaks a focus session and costs an average of 23 minutes to fully recover. Turn them all off during study blocks.", icon: "🔔" },
  { name: "Social Media Loops", tip: "Instagram, TikTok, and YouTube are designed by teams of engineers to be maximally engaging. You cannot out-willpower them — remove access instead (Screen Time, Cold Turkey, Forest).", icon: "📱" },
  { name: "Multitasking", tip: "The brain cannot actually multitask — it switches rapidly, losing 20–40% of productivity on each switch. Do one thing fully.", icon: "🔄" },
  { name: "Cluttered Workspace", tip: "Visual clutter competes for cognitive resources. A clean desk literally frees up mental bandwidth.", icon: "📚" },
];

const procrastinationCauses = [
  { cause: "Task feels overwhelming", fix: "Break it into the smallest possible first step. 'Write essay' → 'Open document and type one sentence.'" },
  { cause: "Fear of doing it wrong", fix: "Give yourself permission to do a 'bad' first draft. Done beats perfect. You can always edit." },
  { cause: "You don't know where to start", fix: "Work backwards from the deadline. What needs to happen the day before? The week before? Start there." },
  { cause: "The task feels boring or pointless", fix: "Connect it to a goal you care about. 'This Biology grade matters for university admission for medicine.'" },
  { cause: "You're waiting to feel motivated", fix: "Motivation follows action, not the other way around. Start for 2 minutes — the feeling often follows." },
];

const weekTemplate = [
  { day: "Sunday", tasks: ["Weekly review — what's due this week?", "Block out study sessions in your calendar", "Review all Anki/flashcard decks due"] },
  { day: "Weeknights", tasks: ["45–60 min focused study per subject", "Review today's class notes within 24 hrs", "Prepare tomorrow's materials before sleep"] },
  { day: "Saturday", tasks: ["Longer project work (2–3 hour block)", "Catch up on anything incomplete", "One total rest period — protect it"] },
];

const energyTips = [
  { emoji: "🌅", label: "Peak Energy", tip: "Hardest work (essays, math, new concepts). Most people peak mid-morning." },
  { emoji: "😴", label: "Energy Dip", tip: "Admin tasks only (organising notes, scheduling). Most people dip early afternoon." },
  { emoji: "📖", label: "Recovery", tip: "Review and lighter work (re-reading, flashcards). Late afternoon for most." },
  { emoji: "🌙", label: "Evening", tip: "Final review of the day. Avoid screens 30–60 min before sleep for better memory consolidation." },
];

export default function TimeManagement() {
  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="border-b bg-background">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/resources" className="hover:text-primary flex items-center gap-1 transition-colors"><ArrowLeft className="w-3.5 h-3.5" />Resources</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground font-medium">Time Management</span>
        </div>
      </div>

      {/* Hero */}
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
              {["Grades 7–12", "Practical strategies", "Updated May 2026"].map(t => (
                <span key={t} className="bg-white/10 text-amber-100 px-3 py-1 rounded-full font-medium">{t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-14 space-y-16">

        {/* Eisenhower Matrix */}
        <section>
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">The Eisenhower Matrix</h2>
            <div className="flex-1 h-px bg-border" />
          </div>
          <p className="text-muted-foreground mb-6 text-sm">Used by President Eisenhower and taught in top business schools: sort every task by <em>urgency</em> (deadline) and <em>importance</em> (long-term impact). Most students only react to urgency and ignore importance — and wonder why they're always scrambling.</p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="grid grid-cols-2 gap-3 max-w-2xl">
              <div className="bg-rose-50 border-2 border-rose-300 rounded-2xl p-5">
                <p className="text-xs font-bold text-rose-600 uppercase tracking-wider mb-1">Urgent + Important</p>
                <p className="font-bold text-rose-900 text-base mb-2">DO NOW</p>
                <p className="text-xs text-rose-700 mb-2">Handle immediately — these have real deadlines and real consequences.</p>
                <p className="text-xs text-rose-600 italic">Exam tomorrow, assignment due today, teacher meeting</p>
              </div>
              <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-5">
                <p className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-1">Not Urgent + Important</p>
                <p className="font-bold text-amber-900 text-base mb-2">SCHEDULE</p>
                <p className="text-xs text-amber-700 mb-2">Most students ignore this quadrant — and it's the most valuable one.</p>
                <p className="text-xs text-amber-600 italic">Long-term projects, study habits, health, relationships</p>
              </div>
              <div className="bg-blue-50 border-2 border-blue-300 rounded-2xl p-5">
                <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">Urgent + Not Important</p>
                <p className="font-bold text-blue-900 text-base mb-2">DELEGATE</p>
                <p className="text-xs text-blue-700 mb-2">Can someone else handle this? If not, do it quickly and move on.</p>
                <p className="text-xs text-blue-600 italic">Some emails, minor group project coordination</p>
              </div>
              <div className="bg-slate-50 border-2 border-slate-300 rounded-2xl p-5">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Not Urgent + Not Important</p>
                <p className="font-bold text-slate-700 text-base mb-2">ELIMINATE</p>
                <p className="text-xs text-slate-600 mb-2">The honest truth about most screen time and passive entertainment.</p>
                <p className="text-xs text-slate-500 italic">Doom-scrolling, binge-watching during study hours</p>
              </div>
            </div>
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

        {/* Procrastination */}
        <section>
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">Why You Procrastinate</h2>
            <div className="flex-1 h-px bg-border" />
          </div>
          <p className="text-muted-foreground mb-6 text-sm">Procrastination is rarely about laziness. It's almost always about one of five root causes — each with a specific fix.</p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-3">
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
        </section>

        {/* Weekly template */}
        <section>
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">A Weekly Framework</h2>
            <div className="flex-1 h-px bg-border" />
          </div>
          <p className="text-muted-foreground mb-6 text-sm">A repeatable weekly rhythm removes the mental overhead of deciding when to do what. You follow the system instead of reinventing the wheel each day.</p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid sm:grid-cols-3 gap-4">
            {weekTemplate.map((w) => (
              <motion.div key={w.day} variants={fadeUp} className="bg-muted/40 border rounded-xl p-5">
                <p className="font-serif font-bold text-foreground mb-3">{w.day}</p>
                <ul className="space-y-2">
                  {w.tasks.map((t, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                      <span className="text-muted-foreground">{t}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
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

        {/* Callout */}
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

        {/* Bottom nav */}
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
