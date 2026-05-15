import { Link } from "wouter";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { ArrowLeft, ChevronRight, Brain, RefreshCw, Lightbulb, CheckCircle, XCircle } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const mindsetComparisons = [
  { fixed: "I'm not a math person.", growth: "I haven't mastered this yet. What's the next step?" },
  { fixed: "I failed — I'm just bad at this.", growth: "I failed — what can I learn from this attempt?" },
  { fixed: "This is too hard. I give up.", growth: "This is hard. That means I'm growing." },
  { fixed: "She's naturally talented. I could never do that.", growth: "She worked hard to get there. What can I do to get better?" },
  { fixed: "I don't want to try in case I look dumb.", growth: "Trying and struggling is how I'll improve." },
  { fixed: "Feedback is criticism. It means I'm not good enough.", growth: "Feedback is information. It shows me exactly where to grow." },
];

const neuroplasticityFacts = [
  { emoji: "🧠", fact: "Your brain physically changes structure when you learn new things — neurons form new connections." },
  { emoji: "💪", fact: "The feeling of struggle while learning is your brain forming new pathways. It's a sign of growth, not failure." },
  { emoji: "🔁", fact: "Practising a skill repeatedly causes those neural pathways to become faster and more efficient (myelination)." },
  { emoji: "⏳", fact: "The brain remains 'plastic' (changeable) throughout your entire life — though it's most flexible in adolescence." },
  { emoji: "😴", fact: "Sleep is when your brain consolidates new learning. Pulling all-nighters actively undoes the day's learning." },
  { emoji: "🏋️", fact: "Just as muscles grow under stress, your brain grows under the right kind of intellectual challenge." },
];

const strategies = [
  {
    icon: Brain,
    title: "Add 'Yet' to Every 'Can't'",
    color: "text-violet-600",
    bg: "bg-violet-50 border-violet-200",
    desc: "Whenever you catch yourself saying 'I can't do this,' add the word 'yet'. It's a small shift that keeps the door open: 'I can't do this yet.' This isn't toxic positivity — it's accurate. You genuinely haven't learned it yet.",
  },
  {
    icon: RefreshCw,
    title: "Reframe Failure as Data",
    color: "text-teal-600",
    bg: "bg-teal-50 border-teal-200",
    desc: "Every mistake tells you something specific: a gap in knowledge, a wrong approach, or a misunderstanding. After a poor result, ask: 'What exactly went wrong?' and 'What will I do differently?' Failure analysed is progress.",
  },
  {
    icon: Lightbulb,
    title: "Praise the Process, Not the Outcome",
    color: "text-amber-600",
    bg: "bg-amber-50 border-amber-200",
    desc: "Be specific about what you praise in yourself — 'I stayed focused for 45 minutes' or 'I asked for help when I was stuck' rather than 'I'm so smart' or 'I worked hard'. Process praise is within your control and repeatable.",
  },
  {
    icon: CheckCircle,
    title: "Seek Difficulty Deliberately",
    color: "text-blue-600",
    bg: "bg-blue-50 border-blue-200",
    desc: "If everything feels easy, you're not growing. Deliberately practise at the edge of your ability — the zone where it feels hard but not impossible. This is called the 'zone of proximal development', and it's where learning actually happens.",
  },
];

const quotes = [
  { quote: "I have not failed. I've just found 10,000 ways that won't work.", who: "Thomas Edison" },
  { quote: "Becoming is better than being. The fixed mindset does not allow people the luxury of becoming. They have to already be.", who: "Carol Dweck, Mindset" },
  { quote: "The passion for stretching yourself and sticking to it, even (or especially) when it's not going well, is the hallmark of the growth mindset.", who: "Carol Dweck" },
  { quote: "No matter what your ability is, effort is what ignites that ability and turns it into accomplishment.", who: "Carol Dweck" },
];

export default function GrowthMindset() {
  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="border-b bg-background">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/resources" className="hover:text-primary flex items-center gap-1 transition-colors"><ArrowLeft className="w-3.5 h-3.5" />Resources</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground font-medium">Growth Mindset</span>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-br from-violet-800 via-violet-700 to-violet-900 text-white">
        <div className="max-w-5xl mx-auto px-4 py-16 md:py-20">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-block text-xs font-bold tracking-widest uppercase bg-white/15 px-3 py-1 rounded-full mb-5">Life Skills</span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-4">
              Growth Mindset<br />
              <span className="text-violet-200">Your Brain Can Change</span>
            </h1>
            <p className="text-violet-100 text-lg max-w-2xl mb-6 leading-relaxed">
              The most important thing you believe — whether you know it or not — is whether your abilities are fixed or growable. Research shows this belief shapes everything about how you learn.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              {["Grades 7–12", "Based on Dr. Carol Dweck's research", "Updated May 2026"].map(t => (
                <span key={t} className="bg-white/10 text-violet-100 px-3 py-1 rounded-full font-medium">{t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-14 space-y-16">

        {/* Fixed vs Growth */}
        <section>
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">Fixed vs Growth Mindset</h2>
            <div className="flex-1 h-px bg-border" />
          </div>
          <p className="text-muted-foreground mb-2 text-sm">Psychologist Carol Dweck spent decades studying students and found that their beliefs about their own intelligence predicted their success more than their actual ability.</p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-rose-50 border-2 border-rose-200 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <XCircle className="w-5 h-5 text-rose-600" />
                <h3 className="font-bold text-rose-800">Fixed Mindset</h3>
              </div>
              <p className="text-sm text-rose-700 leading-relaxed mb-3">Believes intelligence and talent are fixed traits you're born with. You either have it or you don't.</p>
              <ul className="space-y-1.5 text-sm text-rose-700">
                <li>• Avoids challenges (might expose limits)</li>
                <li>• Gives up when things get hard</li>
                <li>• Sees effort as pointless if you're not naturally gifted</li>
                <li>• Takes feedback personally</li>
                <li>• Feels threatened by others' success</li>
              </ul>
            </div>
            <div className="bg-teal-50 border-2 border-teal-200 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-teal-600" />
                <h3 className="font-bold text-teal-800">Growth Mindset</h3>
              </div>
              <p className="text-sm text-teal-700 leading-relaxed mb-3">Believes abilities can be developed through effort, good strategies, and input from others.</p>
              <ul className="space-y-1.5 text-sm text-teal-700">
                <li>• Embraces challenges (chance to grow)</li>
                <li>• Persists through difficulty</li>
                <li>• Sees effort as the path to mastery</li>
                <li>• Learns from feedback and criticism</li>
                <li>• Finds inspiration in others' success</li>
              </ul>
            </div>
          </div>
          <div className="bg-violet-50 border border-violet-200 rounded-xl p-5">
            <p className="text-sm text-violet-900 leading-relaxed">
              <span className="font-bold">Important:</span> No one is 100% one or the other. Most people have a growth mindset in some areas and a fixed mindset in others. The goal isn't to pretend everything is possible — it's to stay open to growth in areas where you tend to shut down.
            </p>
          </div>
        </section>

        {/* Neuroplasticity */}
        <section>
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">The Science: Neuroplasticity</h2>
            <div className="flex-1 h-px bg-border" />
          </div>
          <p className="text-muted-foreground mb-6 text-sm">Growth mindset isn't just positive thinking — it's grounded in neuroscience. Your brain is a physical organ that changes in response to experience.</p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {neuroplasticityFacts.map((f) => (
              <motion.div key={f.emoji} variants={fadeUp} className="bg-muted/40 border rounded-xl p-4">
                <span className="text-2xl block mb-2">{f.emoji}</span>
                <p className="text-sm text-foreground leading-relaxed">{f.fact}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Thought reframes */}
        <section>
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">Reframe Your Inner Dialogue</h2>
            <div className="flex-1 h-px bg-border" />
          </div>
          <p className="text-muted-foreground mb-6 text-sm">These aren't just word swaps — each reframe changes the direction your brain points when things get hard.</p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-3">
            {mindsetComparisons.map((m, i) => (
              <motion.div key={i} variants={fadeUp} className="grid md:grid-cols-2 gap-3">
                <div className="flex items-start gap-3 bg-rose-50 border border-rose-200 rounded-xl p-4">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-rose-800 italic">"{m.fixed}"</p>
                </div>
                <div className="flex items-start gap-3 bg-teal-50 border border-teal-200 rounded-xl p-4">
                  <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-teal-800 italic">"{m.growth}"</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Strategies */}
        <section>
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">Building a Growth Mindset</h2>
            <div className="flex-1 h-px bg-border" />
          </div>
          <p className="text-muted-foreground mb-6 text-sm">Four concrete strategies you can start using today.</p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid sm:grid-cols-2 gap-5">
            {strategies.map((s) => (
              <motion.div key={s.title} variants={fadeUp} className={`border-2 rounded-2xl p-5 ${s.bg}`}>
                <div className={`mb-3 ${s.color}`}><s.icon className="w-5 h-5" /></div>
                <h3 className="font-serif font-bold text-base text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Quotes */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">Words Worth Keeping</h2>
            <div className="flex-1 h-px bg-border" />
          </div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid sm:grid-cols-2 gap-4">
            {quotes.map((q) => (
              <motion.div key={q.who} variants={fadeUp} className="bg-violet-700 text-white rounded-2xl p-5">
                <p className="text-violet-100 text-sm leading-relaxed italic mb-3">"{q.quote}"</p>
                <p className="text-violet-300 text-xs font-bold">— {q.who}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Bottom nav */}
        <div className="flex items-center justify-between pt-4 border-t">
          <Link href="/resources/life-skills/study-skills" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" /> Study Skills
          </Link>
          <Link href="/resources/life-skills/time-management" className="flex items-center gap-2 text-sm font-medium text-primary hover:underline">
            Next: Time Management <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </Layout>
  );
}
