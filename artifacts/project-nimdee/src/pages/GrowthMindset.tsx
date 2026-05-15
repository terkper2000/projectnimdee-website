import { Link } from "wouter";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { ArrowLeft, ChevronRight, Brain, RefreshCw, Lightbulb, CheckCircle, XCircle, ExternalLink, BookOpen } from "lucide-react";

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

const studentScenarios = [
  {
    name: "Failing a math test",
    emoji: "📝",
    color: "bg-rose-50 border-rose-200",
    headerColor: "text-rose-800",
    situation: "You studied for 2 hours, felt prepared, and still got 48% on your Math 20-1 unit test. You feel humiliated and want to give up.",
    fixedThoughts: [
      "I'm just not a math person — some people get it and I don't.",
      "Everyone else did better. I'm the worst in the class.",
      "What's the point of trying harder if this is the result?",
    ],
    growthThoughts: [
      "A 48% tells me exactly which concepts I don't understand yet — that's specific and fixable.",
      "I studied for 2 hours but maybe I studied the wrong way. What if I tried practice problems instead of re-reading?",
      "My teacher or Hannah can show me what went wrong. This is solvable.",
    ],
    action: "Book a time to go over your test with your teacher. For each wrong answer, identify exactly which concept broke down. Make flashcards for those specific concepts.",
  },
  {
    name: "Getting a bad grade on an essay",
    emoji: "✍️",
    color: "bg-amber-50 border-amber-200",
    headerColor: "text-amber-800",
    situation: "You spent three evenings on your English 30-1 essay and got 62%. The comments say your thesis is unclear and your evidence doesn't connect.",
    fixedThoughts: [
      "I'm a bad writer. Some people can write and I just can't.",
      "I worked so hard — this isn't fair.",
      "My teacher just doesn't like my style.",
    ],
    growthThoughts: [
      "The feedback is specific: unclear thesis and disconnected evidence. I know exactly what to fix.",
      "Writing is a skill that takes years of practice. One bad essay is a data point, not a verdict.",
      "The students who write well probably got feedback like this earlier and learned from it.",
    ],
    action: "Read your feedback carefully — highlight each specific comment. Find an example of a strong essay (ask your teacher for a model). Rewrite just your introduction and thesis with the feedback in mind.",
  },
  {
    name: "Struggling with a new subject",
    emoji: "🔬",
    color: "bg-teal-50 border-teal-200",
    headerColor: "text-teal-800",
    situation: "You're in Grade 11 Chemistry and the first unit (atomic theory) makes no sense. You understood Science 10 fine and feel like this is a completely different level.",
    fixedThoughts: [
      "Grade 11 Chemistry is just too hard for me.",
      "If I don't get it in the first week, I never will.",
      "The other students seem to get it. There's something wrong with me.",
    ],
    growthThoughts: [
      "New subjects always feel disorienting at the start — that's normal, not a warning sign.",
      "I don't understand it *yet*. That's the starting point, not the conclusion.",
      "I need to identify exactly which part isn't clicking — is it the model itself, the math, or the terminology?",
    ],
    action: "Watch the Khan Academy unit on atomic theory (free). Write down the 3 most specific things you don't understand and ask your teacher about those exact points.",
  },
  {
    name: "Comparing yourself to a top student",
    emoji: "👥",
    color: "bg-violet-50 border-violet-200",
    headerColor: "text-violet-800",
    situation: "Your classmate seems to understand everything immediately, never appears to study, and gets 90s consistently. You work twice as hard for 70s and it feels deeply unfair.",
    fixedThoughts: [
      "They're just naturally smarter. I can't compete with that.",
      "No matter how hard I try, some people are just built better for school.",
      "What's the point of working hard if talented people will always be ahead?",
    ],
    growthThoughts: [
      "I'm comparing my insides (effort, struggle) to their outsides (grades). I don't see their full picture.",
      "My goal isn't to beat them — it's to improve from where I am. My progress is the only fair measurement.",
      "Different people have different starting points. My 70 after real struggle might represent more growth than their 90.",
    ],
    action: "Track your own progress over time — not against others. Keep a notebook of topics you struggled with last month that feel easier now. Your growth is your most honest metric.",
  },
];

const thirtyDayChallenge = [
  {
    week: "Week 1",
    focus: "Notice the Fixed Mindset Voice",
    days: "Days 1–7",
    color: "bg-rose-50 border-rose-300",
    desc: "You can't change what you don't notice. This week, every time you catch yourself thinking a fixed-mindset thought ('I can't', 'I'm not smart enough', 'I'll look stupid'), write it down. Just observe — no pressure to change it yet.",
    dailyChallenge: "Write down 1 fixed mindset thought you noticed today. Just record it, don't judge yourself.",
  },
  {
    week: "Week 2",
    focus: "The 'Yet' Reframe",
    days: "Days 8–14",
    color: "bg-amber-50 border-amber-300",
    desc: "Take last week's list. For every fixed-mindset thought you recorded, rewrite it with 'yet' added, or as a question. 'I can't do this' becomes 'I can't do this yet — what's my next step?' Small language shifts build new neural pathways.",
    dailyChallenge: "Rewrite 1 fixed mindset thought as a 'yet' statement or a 'what could I do to get better?' question.",
  },
  {
    week: "Week 3",
    focus: "Seek the Difficult Thing",
    days: "Days 15–21",
    color: "bg-teal-50 border-teal-300",
    desc: "Deliberately do one thing each day that you find hard — and finish it. It doesn't have to be academic. Ask a question in class you were afraid to ask. Attempt a harder math problem than required. This week is about training your relationship with difficulty.",
    dailyChallenge: "Do one thing today that is genuinely hard for you — and write down what you learned from attempting it.",
  },
  {
    week: "Week 4",
    focus: "Process Over Outcome",
    days: "Days 22–30",
    color: "bg-violet-50 border-violet-300",
    desc: "This week, when you receive feedback — a grade, a comment, a correction — practice responding with curiosity instead of defense. Ask: 'What specifically can I do differently?' Keep a running list of things you improved on this month. Evidence of growth is motivating.",
    dailyChallenge: "Write down one thing you got feedback on today and one specific action it suggests.",
  },
];

const failureJournal = [
  { prompt: "What happened? (Just the facts — no judgement)", example: "I got 55% on my Chemistry quiz on electron configurations." },
  { prompt: "What was I expecting, and why?", example: "I expected around 75%. I read through the chapter twice and thought I understood it." },
  { prompt: "What specifically went wrong — in my preparation, my thinking, or my execution?", example: "I could recognise correct configurations but couldn't produce them from scratch. I was re-reading instead of practising retrieval." },
  { prompt: "What is one thing I can do differently before the next assessment?", example: "Make flashcards for each element type and test myself until I can write configurations without looking." },
  { prompt: "What does this tell me about my current study approach — is something worth changing?", example: "Re-reading chemistry notes is basically useless. I need to be doing, not reading." },
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

const furtherResources = [
  {
    name: "Carol Dweck: The Power of Believing You Can Improve",
    type: "TED Talk (10 min)",
    href: "https://www.ted.com/talks/carol_dweck_the_power_of_believing_that_you_can_improve",
    desc: "The foundational talk by the psychologist whose 30 years of research created the growth mindset framework. Accessible, compelling, and directly applicable to your school experience.",
  },
  {
    name: "Mindset: The New Psychology of Success",
    type: "Book by Carol S. Dweck",
    href: "https://www.amazon.ca/Mindset-Psychology-Carol-S-Dweck/dp/0345472322",
    desc: "The original and definitive book on growth mindset. Covers students, athletes, business leaders, and relationships. Available at most public libraries.",
  },
  {
    name: "Brainology (Mindset Works)",
    type: "Interactive program for students",
    href: "https://www.mindsetworks.com/brainology",
    desc: "Dr. Dweck's own online program designed specifically for students — teaches neuroscience and growth mindset together. Used in schools across North America.",
  },
  {
    name: "Khan Academy — Growth Mindset",
    type: "Free learning module",
    href: "https://www.khanacademy.org/college-careers-more/learnstorm-growth-mindset-activities-us",
    desc: "Free growth mindset activities designed for students — practical exercises tied to real schoolwork. No account required.",
  },
];

export default function GrowthMindset() {
  return (
    <Layout>
      <div className="border-b bg-background">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/resources" className="hover:text-primary flex items-center gap-1 transition-colors"><ArrowLeft className="w-3.5 h-3.5" />Resources</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground font-medium">Growth Mindset</span>
        </div>
      </div>

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

        {/* Real Student Scenarios */}
        <section>
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">Real Student Scenarios</h2>
            <div className="flex-1 h-px bg-border" />
          </div>
          <p className="text-muted-foreground mb-6 text-sm">Growth mindset is easy to agree with in theory. Here's what it looks like in the moments when it's hardest to believe.</p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-6">
            {studentScenarios.map((s) => (
              <motion.div key={s.name} variants={fadeUp} className={`border-2 rounded-2xl p-6 ${s.color}`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{s.emoji}</span>
                  <h3 className={`font-serif font-bold text-lg ${s.headerColor}`}>{s.name}</h3>
                </div>
                <div className="bg-white/70 rounded-xl p-4 mb-4">
                  <p className="text-sm text-foreground leading-relaxed italic">"{s.situation}"</p>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-xs font-bold text-rose-600 uppercase tracking-wider mb-2">Fixed mindset hears...</p>
                    <ul className="space-y-1.5">
                      {s.fixedThoughts.map((t, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-rose-900">
                          <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                          <span>"{t}"</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-teal-700 uppercase tracking-wider mb-2">Growth mindset responds...</p>
                    <ul className="space-y-1.5">
                      {s.growthThoughts.map((t, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-teal-900">
                          <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                          <span>"{t}"</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-white/60 rounded-lg p-3 border border-current/10">
                  <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-1">Concrete next action</p>
                  <p className="text-sm text-foreground">{s.action}</p>
                </div>
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

        {/* 30-Day Challenge */}
        <section>
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">30-Day Growth Challenge</h2>
            <div className="flex-1 h-px bg-border" />
          </div>
          <p className="text-muted-foreground mb-6 text-sm">Growth mindset is a habit, not an insight. Four weeks, one focus per week — each builds on the last.</p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-4">
            {thirtyDayChallenge.map((w, i) => (
              <motion.div key={w.week} variants={fadeUp} className={`border-2 rounded-2xl p-6 ${w.color}`}>
                <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="bg-foreground text-background text-xs font-bold px-2.5 py-0.5 rounded-full">{w.week}</span>
                      <span className="text-xs text-muted-foreground">{w.days}</span>
                    </div>
                    <h3 className="font-serif font-bold text-lg text-foreground">{w.focus}</h3>
                  </div>
                  <span className="text-3xl">{["👁️", "💬", "🏋️", "🔍"][i]}</span>
                </div>
                <p className="text-sm text-foreground leading-relaxed mb-4">{w.desc}</p>
                <div className="bg-white/60 rounded-lg p-3 border border-current/10">
                  <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-1">Daily challenge</p>
                  <p className="text-sm text-foreground">{w.dailyChallenge}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Failure Journal */}
        <section>
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">The Failure Journal</h2>
            <div className="flex-1 h-px bg-border" />
          </div>
          <p className="text-muted-foreground mb-3 text-sm">
            The most successful people in any field treat failure as information, not identity. A failure journal is a structured way to process setbacks constructively — turning an emotional reaction into a learning plan.
          </p>
          <div className="bg-violet-50 border border-violet-200 rounded-xl p-4 mb-6 text-sm text-violet-800">
            <p className="font-bold mb-1">How to use it:</p>
            <p>After any result that disappoints you — a bad grade, a failed attempt, a mistake — spend 10 minutes answering these five prompts in a notebook or notes app. Don't skip them, don't rush them, and don't judge yourself while writing.</p>
          </div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-4">
            {failureJournal.map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="border rounded-xl bg-background overflow-hidden">
                <div className="bg-violet-700 text-white px-4 py-2 flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-white/20 text-xs font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                  <p className="text-sm font-medium">{item.prompt}</p>
                </div>
                <div className="px-4 py-3">
                  <p className="text-xs text-muted-foreground italic">Example: "{item.example}"</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-4 bg-violet-50 border border-violet-200 rounded-xl p-4">
            <p className="text-sm text-violet-900">The goal isn't to feel better — it's to think more clearly. After a few months, your journal becomes evidence that you grow from setbacks. That evidence is more motivating than any pep talk.</p>
          </div>
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

        {/* Further Resources */}
        <section>
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">Go Deeper</h2>
            <div className="flex-1 h-px bg-border" />
          </div>
          <p className="text-muted-foreground mb-6 text-sm">These are the original, authoritative sources — not summaries or third-hand takes.</p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 gap-4">
            {furtherResources.map((r) => (
              <motion.div key={r.name} variants={fadeUp}>
                <a href={r.href} target="_blank" rel="noopener noreferrer"
                  className="block border rounded-xl bg-background p-4 hover:border-primary/50 hover:bg-primary/5 transition-colors group h-full">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <p className="font-bold text-sm text-foreground group-hover:text-primary transition-colors leading-snug">{r.name}</p>
                    <ExternalLink className="w-3.5 h-3.5 text-muted-foreground shrink-0 mt-0.5" />
                  </div>
                  <p className="text-xs font-medium text-violet-600 mb-2">{r.type}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{r.desc}</p>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </section>

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
