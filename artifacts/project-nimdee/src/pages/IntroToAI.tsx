import { Link } from "wouter";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft, ChevronRight, Brain, Cpu, Eye, Zap,
  AlertTriangle, CheckCircle, XCircle, Lightbulb,
  Globe, Lock, ExternalLink, Users, Layers,
} from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

/* ── SVG Diagrams ──────────────────────────────────────────────────── */

function NeuralNetworkDiagram() {
  const inputs = [70, 130, 190, 250];
  const h1 = [50, 110, 170, 230, 290];
  const h2 = [50, 110, 170, 230, 290];
  const outputs = [100, 190, 280];
  const cx = { inp: 60, h1: 175, h2: 290, out: 405 };
  return (
    <svg viewBox="0 0 460 340" className="w-full max-w-[520px] mx-auto" role="img" aria-label="Neural network diagram with input, hidden, and output layers">
      {/* Connection lines — hidden1 to hidden2 */}
      {h1.map(y1 => h2.map(y2 => (
        <line key={`h12-${y1}-${y2}`} x1={cx.h1} y1={y1} x2={cx.h2} y2={y2} stroke="#cbd5e1" strokeWidth="0.7" />
      )))}
      {/* Connection lines — hidden2 to output */}
      {h2.map(y1 => outputs.map(y2 => (
        <line key={`h2o-${y1}-${y2}`} x1={cx.h2} y1={y1} x2={cx.out} y2={y2} stroke="#cbd5e1" strokeWidth="0.7" />
      )))}
      {/* Connection lines — input to hidden1 */}
      {inputs.map(y1 => h1.map(y2 => (
        <line key={`ih1-${y1}-${y2}`} x1={cx.inp} y1={y1} x2={cx.h1} y2={y2} stroke="#94a3b8" strokeWidth="0.9" />
      )))}

      {/* Input layer */}
      {inputs.map((y, i) => (
        <g key={`in-${i}`}>
          <circle cx={cx.inp} cy={y} r={18} fill="#0d9488" stroke="white" strokeWidth="2" />
          <text x={cx.inp} y={y + 4} textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">{["Pixels","Text","Sound","Data"][i]}</text>
        </g>
      ))}
      {/* Hidden layer 1 */}
      {h1.map((y, i) => (
        <circle key={`h1-${i}`} cx={cx.h1} cy={y} r={15} fill="#7c3aed" stroke="white" strokeWidth="2" />
      ))}
      {/* Hidden layer 2 */}
      {h2.map((y, i) => (
        <circle key={`h2-${i}`} cx={cx.h2} cy={y} r={15} fill="#7c3aed" stroke="white" strokeWidth="2" />
      ))}
      {/* Output layer */}
      {outputs.map((y, i) => (
        <g key={`out-${i}`}>
          <circle cx={cx.out} cy={y} r={18} fill="#d97706" stroke="white" strokeWidth="2" />
          <text x={cx.out} y={y + 4} textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">{["Cat","Dog","Bird"][i]}</text>
        </g>
      ))}

      {/* Layer labels */}
      <text x={cx.inp} y={290} textAnchor="middle" fill="#64748b" fontSize="9" fontWeight="bold">INPUT</text>
      <text x={cx.inp} y={302} textAnchor="middle" fill="#64748b" fontSize="8">Raw Data</text>
      <text x={(cx.h1 + cx.h2) / 2} y={315} textAnchor="middle" fill="#64748b" fontSize="9" fontWeight="bold">HIDDEN LAYERS</text>
      <text x={(cx.h1 + cx.h2) / 2} y={327} textAnchor="middle" fill="#64748b" fontSize="8">Pattern Finding</text>
      <text x={cx.out} y={315} textAnchor="middle" fill="#64748b" fontSize="9" fontWeight="bold">OUTPUT</text>
      <text x={cx.out} y={327} textAnchor="middle" fill="#64748b" fontSize="8">Prediction</text>
    </svg>
  );
}

function AgentLoopDiagram() {
  return (
    <svg viewBox="0 0 360 300" className="w-full max-w-[400px] mx-auto" role="img" aria-label="AI agent perception-planning-action feedback loop">
      {/* Circular arrows */}
      <defs>
        <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#0d9488" />
        </marker>
      </defs>
      {/* Background circle */}
      <circle cx="180" cy="150" r="110" fill="none" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="6 4" />

      {/* Curved arrows around the circle */}
      <path d="M 180 40 A 110 110 0 0 1 290 150" fill="none" stroke="#0d9488" strokeWidth="2" markerEnd="url(#arrowhead)" />
      <path d="M 290 150 A 110 110 0 0 1 180 260" fill="none" stroke="#0d9488" strokeWidth="2" markerEnd="url(#arrowhead)" />
      <path d="M 180 260 A 110 110 0 0 1 70 150" fill="none" stroke="#0d9488" strokeWidth="2" markerEnd="url(#arrowhead)" />
      <path d="M 70 150 A 110 110 0 0 1 180 40" fill="none" stroke="#0d9488" strokeWidth="2" markerEnd="url(#arrowhead)" />

      {/* Node: Perceive (top) */}
      <ellipse cx="180" cy="35" rx="52" ry="22" fill="#0d9488" />
      <text x="180" y="31" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">PERCEIVE</text>
      <text x="180" y="43" textAnchor="middle" fill="white" fontSize="7.5">Read the world</text>

      {/* Node: Plan (right) */}
      <ellipse cx="300" cy="150" rx="52" ry="22" fill="#7c3aed" />
      <text x="300" y="146" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">PLAN</text>
      <text x="300" y="158" textAnchor="middle" fill="white" fontSize="7.5">Decide next step</text>

      {/* Node: Act (bottom) */}
      <ellipse cx="180" cy="265" rx="52" ry="22" fill="#d97706" />
      <text x="180" y="261" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">ACT</text>
      <text x="180" y="273" textAnchor="middle" fill="white" fontSize="7.5">Use tools / respond</text>

      {/* Node: Observe (left) */}
      <ellipse cx="60" cy="150" rx="52" ry="22" fill="#0891b2" />
      <text x="60" y="146" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">OBSERVE</text>
      <text x="60" y="158" textAnchor="middle" fill="white" fontSize="7.5">Check the result</text>

      {/* Centre label */}
      <text x="180" y="145" textAnchor="middle" fill="#1e293b" fontSize="11" fontWeight="bold">AI</text>
      <text x="180" y="160" textAnchor="middle" fill="#1e293b" fontSize="11" fontWeight="bold">AGENT</text>
    </svg>
  );
}

function MLPipelineDiagram() {
  const steps = [
    { label: "Collect Data", sub: "Images, text, numbers", x: 40, color: "#0d9488" },
    { label: "Clean & Label", sub: "Remove errors, add tags", x: 155, color: "#7c3aed" },
    { label: "Train Model", sub: "Adjust millions of weights", x: 270, color: "#d97706" },
    { label: "Evaluate", sub: "Test on unseen data", x: 385, color: "#0891b2" },
    { label: "Deploy", sub: "Real users, real world", x: 500, color: "#16a34a" },
  ];
  return (
    <svg viewBox="0 0 580 130" className="w-full max-w-[640px] mx-auto" role="img" aria-label="Machine learning pipeline from data collection to deployment">
      {/* Arrows between steps */}
      {[0,1,2,3].map(i => (
        <polygon key={i} points={`${steps[i].x + 52},55 ${steps[i+1].x - 2},45 ${steps[i+1].x - 2},65`} fill="#cbd5e1" />
      ))}
      {/* Step boxes */}
      {steps.map((s) => {
        const words = s.sub.split(" ");
        const mid = Math.ceil(words.length / 2);
        const line1 = words.slice(0, mid).join(" ");
        const line2 = words.slice(mid).join(" ");
        return (
          <g key={s.label}>
            <rect x={s.x} y={20} width={95} height={70} rx="10" fill={s.color} />
            <text x={s.x + 47} y={44} textAnchor="middle" fill="white" fontSize="8.5" fontWeight="bold">{s.label}</text>
            <text x={s.x + 47} y={58} textAnchor="middle" fill="rgba(255,255,255,0.85)" fontSize="7">{line1}</text>
            <text x={s.x + 47} y={70} textAnchor="middle" fill="rgba(255,255,255,0.85)" fontSize="7">{line2}</text>
          </g>
        );
      })}
      {/* Feedback arrow */}
      <path d="M 535 100 Q 290 125 45 100" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="5 3"
        markerEnd="url(#arrowSmall)" />
      <defs>
        <marker id="arrowSmall" markerWidth="6" markerHeight="5" refX="6" refY="2.5" orient="auto">
          <polygon points="0 0, 6 2.5, 0 5" fill="#94a3b8" />
        </marker>
      </defs>
      <text x="290" y="127" textAnchor="middle" fill="#94a3b8" fontSize="8">Retrain with new data (feedback loop)</text>
    </svg>
  );
}

/* ── Data ──────────────────────────────────────────────────────────── */

const everydayAI = [
  { icon: "🎵", thing: "Spotify / Apple Music", how: "Learns your taste from millions of listening patterns and predicts what you want to hear next — without you ever telling it your preferences explicitly." },
  { icon: "📱", thing: "Your Phone's Face ID", how: "A neural network maps 30,000+ invisible dots onto your face to build a mathematical model — and re-checks it in milliseconds every time you look at your screen." },
  { icon: "🎬", thing: "Netflix / YouTube", how: "Tracks not just what you watch but how long, when you pause, and when you skip — then uses that to keep you watching longer." },
  { icon: "✏️", thing: "Autocorrect & Autocomplete", how: "A language model trained on billions of texts predicts the next word you'll type, getting better the more people use it." },
  { icon: "🔍", thing: "Google Search", how: "Understands what you *mean*, not just the exact words you typed — handles typos, synonyms, and context using AI language understanding." },
  { icon: "💬", thing: "ChatGPT / Siri / Alexa", how: "Large language models generate human-like responses by predicting the most statistically likely next token (word fragment) given your input." },
];

const mlTypes = [
  {
    type: "Supervised Learning",
    color: "teal",
    icon: "🏷️",
    desc: "You give the AI thousands of labelled examples — photos of cats labelled 'cat', photos of dogs labelled 'dog'. It learns the pattern and applies it to new, unseen images.",
    example: "Spam filters, image classifiers, medical diagnosis AI",
  },
  {
    type: "Unsupervised Learning",
    color: "purple",
    icon: "🔍",
    desc: "The AI finds patterns in data with NO labels. It groups similar things together without being told what the groups are.",
    example: "Customer segmentation, anomaly detection, recommendation systems",
  },
  {
    type: "Reinforcement Learning",
    color: "amber",
    icon: "🎮",
    desc: "The AI learns by trial and error — like a game. It gets a reward for good moves and a penalty for bad ones. Over millions of tries, it discovers expert strategies.",
    example: "AlphaGo (beat world Go champion), game-playing AI, robot motion",
  },
];

const llmConcepts = [
  { term: "Token", def: "A chunk of text (roughly 3/4 of a word). LLMs don't read words — they read tokens. 'Running' might be one token; 'unbelievable' might be split into 'un-', 'believ-', 'able'." },
  { term: "Parameters", def: "The numbers (weights) inside a neural network. GPT-4 has an estimated 1.8 trillion parameters. More parameters = more capacity to learn patterns, but also more compute needed." },
  { term: "Context Window", def: "How much text an LLM can 'see' at once. Early models had ~4,000 tokens (≈3,000 words). Modern models handle 200,000+ tokens — entire textbooks." },
  { term: "Hallucination", def: "When an AI confidently states something false. It's not lying — it's predicting the next word based on patterns, not checking facts. Always verify AI-generated information." },
  { term: "Prompt Engineering", def: "The art of writing instructions that get better results from an AI. The same question asked different ways gets wildly different answers." },
  { term: "Fine-tuning", def: "Taking a general pre-trained model and training it further on domain-specific data — like specialising a medical AI on clinical notes." },
];

const agentTools = [
  { icon: "🌐", tool: "Web Search", what: "Search the internet for current information" },
  { icon: "💻", tool: "Code Interpreter", what: "Write and run code to solve problems" },
  { icon: "📁", tool: "File System", what: "Read, write, and organise documents" },
  { icon: "📧", tool: "Email / Calendar", what: "Send messages and schedule events" },
  { icon: "🗄️", tool: "Databases", what: "Query and update stored information" },
  { icon: "🔌", tool: "APIs / Plugins", what: "Connect to virtually any online service" },
];

const ethicsIssues = [
  {
    icon: <AlertTriangle className="w-5 h-5 text-amber-600" />,
    title: "Bias & Discrimination",
    color: "amber",
    body: "AI learns from human-generated data — which contains human biases. Facial recognition systems have been shown to perform 10–35% worse on darker skin tones. Hiring AI trained on historical resumes can discriminate against women. Garbage in, garbage out.",
  },
  {
    icon: <Lock className="w-5 h-5 text-rose-600" />,
    title: "Privacy & Surveillance",
    color: "rose",
    body: "Your data trains AI systems. Photos you post, searches you make, and messages you send can all end up in training datasets. Authoritarian governments use AI facial recognition to monitor citizens in real time — no warrant needed.",
  },
  {
    icon: <Globe className="w-5 h-5 text-blue-600" />,
    title: "Deepfakes & Misinformation",
    color: "blue",
    body: "AI can now generate convincing fake videos of real people saying things they never said. Audio deepfakes can mimic anyone's voice from a few seconds of recording. In an election year, the potential for manipulation is enormous.",
  },
  {
    icon: <Zap className="w-5 h-5 text-yellow-600" />,
    title: "Environmental Cost",
    color: "yellow",
    body: "Training GPT-4 is estimated to have consumed as much electricity as 1,000 US homes use in a year, and produced hundreds of tonnes of CO₂. Every time you use a large AI model, servers around the world spin up to respond. Scale matters.",
  },
  {
    icon: <Users className="w-5 h-5 text-purple-600" />,
    title: "Job Displacement",
    color: "purple",
    body: "Some jobs will be automated. Copywriters, coders, radiologists, paralegals, translators — roles that seemed 'safe' because they require language or pattern skills are now directly challenged. New jobs will emerge, but not necessarily for the same people.",
  },
  {
    icon: <Layers className="w-5 h-5 text-teal-600" />,
    title: "Academic Integrity",
    color: "teal",
    body: "AI can write essays, solve math problems, and generate code. Using it uncritically undermines your own learning. More importantly: if you never practise reasoning, you won't develop the critical thinking that makes AI a tool rather than a crutch.",
  },
];

const proscons = {
  pros: [
    "Diagnoses diseases earlier than human doctors (cancer detection, diabetic retinopathy)",
    "Makes education more accessible — personalized tutoring for every student",
    "Accelerates scientific research (AlphaFold solved protein folding in years, not decades)",
    "Improves accessibility — real-time captions, live translation, text-to-speech",
    "Handles dangerous tasks — bomb disposal robots, wildfire mapping drones",
    "Dramatically speeds up coding, writing, research, and creative work",
  ],
  cons: [
    "Reproduces and amplifies existing societal biases at massive scale",
    "Massive energy and water consumption — environmental cost is real",
    "Enables sophisticated scams, deepfakes, and disinformation at low cost",
    "Concentrates power in a handful of companies with little oversight",
    "Can confidently produce wrong information that looks credible",
    "Threatens livelihoods in many industries without guaranteed alternatives",
  ],
};

const careerAreas = [
  { icon: "🏥", field: "Healthcare", use: "AI-assisted diagnosis, drug discovery, robotic surgery, personalized treatment plans" },
  { icon: "🌍", field: "Climate Science", use: "Weather prediction, energy grid optimization, wildfire detection, emissions modelling" },
  { icon: "🎨", field: "Creative Arts", use: "Generative music, AI-assisted design, visual effects, interactive storytelling" },
  { icon: "⚖️", field: "Law", use: "Document review, case research, contract analysis — freeing lawyers for higher-level work" },
  { icon: "🏫", field: "Education", use: "Adaptive tutoring, instant feedback, accessibility tools, personalized learning paths" },
  { icon: "🔬", field: "Science & Research", use: "Literature synthesis, hypothesis generation, lab automation, data analysis" },
];

const videos = [
  {
    title: "But what is a Neural Network?",
    channel: "3Blue1Brown",
    id: "aircAruvnKk",
    why: "The single best visual explanation of how neural networks work — uses stunning animations to show how weights, layers, and activation functions fit together. Essential viewing.",
    tags: ["Neural Networks", "Foundations"],
  },
  {
    title: "Humans Need Not Apply",
    channel: "CGP Grey",
    id: "7Pq-S557XQU",
    why: "A thought-provoking look at automation and what happens when AI can do most jobs humans do — not just physical labor, but creative and cognitive work. Important for thinking about your future.",
    tags: ["Automation", "Future of Work"],
  },
  {
    title: "The danger of AI is weirder than you think",
    channel: "TED-Ed (Janelle Shane)",
    id: "OhCzX0iLnOc",
    why: "AI researcher Janelle Shane explains why the real risks of AI aren't the Hollywood robot-apocalypse kind — they're stranger, subtler, and already happening. Great for ethics discussions.",
    tags: ["Ethics", "AI Risk"],
  },
  {
    title: "Gradient Descent, How Neural Networks Learn",
    channel: "3Blue1Brown",
    id: "IHZwWFHWa-w",
    why: "Follows up the neural network video with an explanation of how the training process actually works — how the network adjusts its weights through backpropagation. Slightly more advanced but worth it.",
    tags: ["Training", "Machine Learning"],
  },
];

/* ── Page Component ─────────────────────────────────────────────────── */

export default function IntroToAI() {
  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-muted/40 border-b">
        <div className="container mx-auto px-4 md:px-6 py-3 flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
          <Link href="/resources" className="hover:text-primary transition-colors flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" />Resources
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground font-medium">Intro to AI & How It Works</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-secondary overflow-hidden py-14 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(262,80%,35%,0.35),transparent_65%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(173,80%,25%,0.25),transparent_60%)]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <span className="inline-block bg-violet-500/20 text-violet-300 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">Think Like a Machine</span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-secondary-foreground mb-4 leading-tight">
              Intro to AI<br />
              <span className="text-violet-300">& How It Works</span>
            </h1>
            <p className="text-secondary-foreground/80 text-lg max-w-2xl mb-6 leading-relaxed">
              You used AI today. Probably before breakfast. This guide explains what artificial intelligence actually is — how it learns, what agents are, why it matters for your future, and the ethical questions every informed person needs to grapple with.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              {["Grades 7–12", "No prior knowledge needed", "Updated 2025–26"].map(t => (
                <span key={t} className="bg-white/10 text-secondary-foreground/80 px-3 py-1 rounded-full font-medium">{t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="bg-background py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-20">

          {/* ── Section 1: You've Already Used AI ── */}
          <section>
            <div className="flex items-center gap-4 mb-2">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">You've Already Used AI Today</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <p className="text-muted-foreground mb-8 max-w-2xl">
              Before we define anything, here are six things you probably did today — all powered by artificial intelligence.
            </p>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {everydayAI.map((item, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <Card className="h-full border hover:border-primary/30 hover:shadow-sm transition-all">
                    <CardContent className="p-4">
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <h3 className="font-bold text-sm text-foreground mb-2">{item.thing}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.how}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="mt-6 bg-violet-50 border border-violet-200 rounded-xl p-5">
              <p className="text-sm text-violet-900 leading-relaxed">
                <span className="font-bold">The pattern:</span> In every case, no human explicitly programmed the rules. Instead, the system was given huge amounts of data and learned the patterns on its own. That's the core idea behind modern AI — and it's fundamentally different from how traditional software works.
              </p>
            </motion.div>
          </section>

          {/* ── Section 2: What IS AI? ── */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">So... What Actually Is AI?</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <Card className="h-full border-2 border-teal-200 bg-teal-50">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Brain className="w-5 h-5 text-teal-700" />
                      <h3 className="font-bold text-teal-900">The Simple Definition</h3>
                    </div>
                    <p className="text-sm text-teal-800/80 leading-relaxed">
                      AI is software that learns from examples instead of following rules written by a programmer. You don't tell it "if the image has pointy ears and whiskers, it's a cat." You show it 10 million cat photos and it figures out the rule itself.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
                <Card className="h-full border-2 border-rose-200 bg-rose-50">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <XCircle className="w-5 h-5 text-rose-700" />
                      <h3 className="font-bold text-rose-900">What AI Is NOT</h3>
                    </div>
                    <ul className="text-sm text-rose-800/80 leading-relaxed space-y-1.5">
                      <li>• <span className="font-semibold">Not conscious or sentient</span> — it has no feelings, wants, or self-awareness</li>
                      <li>• <span className="font-semibold">Not always right</span> — it confidently produces wrong answers regularly</li>
                      <li>• <span className="font-semibold">Not magic</span> — it's math: billions of multiplications happening very fast</li>
                      <li>• <span className="font-semibold">Not Skynet</span> — current AI has no goals of its own; it does what it's optimised to do</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}
              className="mt-6 bg-muted/40 border rounded-xl p-5">
              <h3 className="font-bold text-foreground mb-2 flex items-center gap-2"><Lightbulb className="w-4 h-4 text-amber-500" />The One Sentence That Explains Everything</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                AI is <span className="font-semibold text-foreground">pattern recognition at massive scale</span>. Given enough examples, a sufficiently large neural network will find patterns that no human explicitly identified — and apply them to new inputs it has never seen before.
              </p>
            </motion.div>
          </section>

          {/* ── Section 3: Machine Learning ── */}
          <section>
            <div className="flex items-center gap-4 mb-2">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">How AI Learns: Machine Learning</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <p className="text-muted-foreground mb-8">
              Machine Learning (ML) is the engine of modern AI — the process by which a system improves its performance from experience. Here's the pipeline:
            </p>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="bg-muted/30 border rounded-2xl p-6 mb-8 overflow-x-auto">
              <MLPipelineDiagram />
            </motion.div>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {mlTypes.map((t, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <Card className="h-full border">
                    <CardContent className="p-5">
                      <div className="text-2xl mb-2">{t.icon}</div>
                      <h3 className="font-bold text-sm text-foreground mb-2">{t.type}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-3">{t.desc}</p>
                      <p className="text-xs font-semibold text-primary">Examples: {t.example}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* ── Section 4: Neural Networks ── */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">Neural Networks</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                className="bg-muted/30 border rounded-2xl p-6">
                <NeuralNetworkDiagram />
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  A neural network is loosely inspired by the human brain — layers of interconnected "neurons" (nodes) that each do simple math. Together, they can learn to recognise faces, translate languages, and write poetry.
                </p>
                <ul className="space-y-3 text-sm">
                  {[
                    ["Input Layer", "Raw data enters here — pixels of an image, words in a sentence, or sensor readings."],
                    ["Hidden Layers", "The 'thinking' happens here. Each layer finds increasingly abstract patterns: edges → shapes → objects → meaning."],
                    ["Output Layer", "The final answer: 'This is a cat (94% confident)', or the next word in a sentence."],
                    ["Weights", "Every connection between nodes has a number (weight). Training adjusts these numbers billions of times until the outputs are accurate."],
                  ].map(([term, def], i) => (
                    <li key={i} className="flex gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                      <span><span className="font-bold text-foreground">{term}:</span> <span className="text-muted-foreground">{def}</span></span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </section>

          {/* ── Section 5: Large Language Models ── */}
          <section>
            <div className="flex items-center gap-4 mb-2">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">Large Language Models (LLMs)</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <p className="text-muted-foreground mb-6">
              ChatGPT, Claude, Gemini, and Llama are all Large Language Models — neural networks trained on vast swaths of human text. Here are the key terms that explain how they work:
            </p>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="bg-secondary/80 rounded-2xl p-5 md:p-7 mb-6">
              <p className="text-secondary-foreground/80 text-sm leading-relaxed">
                <span className="font-bold text-secondary-foreground">At their core, LLMs do one thing:</span> predict the next token (word fragment) given all the previous tokens. They do this so well — trained on essentially the entire internet — that the result looks like understanding. It isn't understanding in the human sense, but it's astonishingly useful anyway.
              </p>
            </motion.div>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {llmConcepts.map((c, i) => (
                <motion.div key={i} variants={fadeUp} className="bg-muted/40 border rounded-lg p-4">
                  <p className="text-xs font-bold text-primary mb-1">{c.term}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{c.def}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* ── Section 6: AI Agents ── */}
          <section>
            <div className="flex items-center gap-4 mb-2">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">AI Agents</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <p className="text-muted-foreground mb-2 text-sm">The cutting edge of AI in 2025 — and the most important concept for your future.</p>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="bg-violet-50 border border-violet-200 rounded-xl p-5 mb-8">
              <p className="text-sm text-violet-900 leading-relaxed">
                <span className="font-bold">A chatbot answers a question.</span> An AI agent <span className="font-bold">pursues a goal</span> — it can plan multiple steps ahead, use tools (search the web, write and run code, send emails), observe the results of its actions, and adjust its plan. It keeps going until the goal is achieved.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                className="bg-muted/30 border rounded-2xl p-6">
                <AgentLoopDiagram />
              </motion.div>
              <div className="space-y-4">
                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
                  <h3 className="font-bold text-foreground mb-3">The Four Steps Every Agent Takes</h3>
                  <ol className="space-y-2 text-sm">
                    {[
                      ["Perceive", "Read the goal and current state — what does it know? What tools does it have?"],
                      ["Plan", "Decide the next best action to take toward the goal (using an LLM to reason)"],
                      ["Act", "Execute that action — run code, search the web, call an API"],
                      ["Observe", "Check what happened, update its understanding, loop back to Plan"],
                    ].map(([step, desc], i) => (
                      <li key={i} className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                        <span><span className="font-bold text-foreground">{step}:</span> <span className="text-muted-foreground">{desc}</span></span>
                      </li>
                    ))}
                  </ol>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.1 }}>
                  <h3 className="font-bold text-foreground mb-2">Tools Agents Can Use</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {agentTools.map((t, i) => (
                      <div key={i} className="flex items-center gap-2 bg-muted/40 border rounded-lg px-3 py-2 text-xs">
                        <span>{t.icon}</span>
                        <div>
                          <p className="font-semibold text-foreground">{t.tool}</p>
                          <p className="text-muted-foreground">{t.what}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="mt-6 bg-muted/40 border rounded-xl p-5">
              <h3 className="font-bold text-foreground mb-2">Real Examples You Might Have Seen</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-muted-foreground">
                {[
                  ["Replit Agent", "You describe the app you want. The agent plans, writes code, runs it, sees the errors, fixes them — often building a working app in minutes without you writing a line."],
                  ["GitHub Copilot Workspace", "You describe a bug or feature. The agent reads your codebase, plans the changes across multiple files, writes and tests the fix."],
                  ["Claude / ChatGPT with Tools", "You ask 'research and summarise the latest news on climate policy and email it to me.' The agent searches, reads, summarises, formats, and sends."],
                ].map(([name, desc], i) => (
                  <div key={i} className="bg-background border rounded-lg p-3">
                    <p className="font-bold text-foreground mb-1">{name}</p>
                    <p className="leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* ── Section 7: How AI Helps Students ── */}
          <section>
            <div className="flex items-center gap-4 mb-2">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">How AI Can Help You — Right Now</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <p className="text-muted-foreground mb-6">The students who thrive with AI aren't the ones who let it do their work — they're the ones who know how to <span className="font-semibold text-foreground">direct it, question it, and verify it</span>.</p>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: "📖", title: "Study Smarter", desc: "Ask an AI to explain a concept three different ways until one clicks. Generate practice questions for your specific unit. Get instant feedback on your explanations. Use it as a tireless tutor — not to write your work." },
                { icon: "💻", title: "Learn to Code", desc: "AI is the best coding assistant ever built. Describe what you want a program to do, have it write a draft, then study the code line by line. You'll learn more by reading and modifying than by typing from scratch." },
                { icon: "🎨", title: "Supercharge Creativity", desc: "Use AI to brainstorm ideas, get unstuck, explore alternate versions of a creative project, or research topics quickly. The key: bring your own voice and judgment — AI provides raw material, you provide meaning." },
                { icon: "♿", title: "Accessibility & Inclusion", desc: "AI powers real-time captions, live translation, screen readers, text-to-speech, and reading simplification. For students who need accommodations, these tools can be genuinely transformative — not cheating." },
                { icon: "🔬", title: "Research & Synthesis", desc: "Use AI to get a fast overview of a complex topic, then verify every claim with primary sources. It can summarise long papers, explain jargon, and help you understand what questions to ask next." },
                { icon: "🌐", title: "Global Communication", desc: "Real-time translation tools (many AI-powered) are erasing language barriers. Whether you're communicating with international students or researching non-English sources, AI makes it possible." },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <Card className="h-full border hover:border-primary/30 transition-colors">
                    <CardContent className="p-5">
                      <span className="text-2xl block mb-3">{item.icon}</span>
                      <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* ── Section 8: AI & Career Paths ── */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">AI Across Every Field</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <p className="text-muted-foreground mb-6 text-sm">You don't need to become an AI engineer to use AI. Whatever you want to do with your life, AI will be part of it.</p>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {careerAreas.map((c, i) => (
                <motion.div key={i} variants={fadeUp} className="border rounded-xl p-4 hover:border-primary/30 hover:shadow-sm transition-all">
                  <span className="text-2xl block mb-2">{c.icon}</span>
                  <h3 className="font-bold text-sm text-foreground mb-1">{c.field}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{c.use}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* ── Section 9: Ethical Issues ── */}
          <section>
            <div className="flex items-center gap-4 mb-2">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">The Big Questions: Ethics & AI</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <p className="text-muted-foreground mb-8">
              AI is neither inherently good nor bad — it's a tool with enormous potential for both. Understanding these issues isn't optional: you're going to live in a world shaped by these choices.
            </p>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ethicsIssues.map((e, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <Card className="h-full border">
                    <CardContent className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        {e.icon}
                        <h3 className="font-bold text-sm text-foreground">{e.title}</h3>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">{e.body}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="mt-6 bg-secondary rounded-2xl p-6">
              <h3 className="font-serif font-bold text-secondary-foreground text-lg mb-3">The Question Nobody Can Fully Answer Yet</h3>
              <p className="text-secondary-foreground/75 text-sm leading-relaxed">
                Who is responsible when an AI system causes harm? The developer who built it? The company that deployed it? The user who prompted it? The government that failed to regulate it? These questions are being argued in courts and parliaments right now — and the answers will define the digital world you inherit. <span className="font-semibold text-secondary-foreground">Your generation will help decide.</span>
              </p>
            </motion.div>
          </section>

          {/* ── Section 10: Pros & Cons ── */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">Pros & Cons — A Balanced View</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="w-5 h-5 text-teal-600" />
                  <h3 className="font-bold text-teal-900">What AI Gets Right</h3>
                </div>
                <ul className="space-y-2">
                  {proscons.pros.map((p, i) => (
                    <li key={i} className="flex gap-2 text-sm bg-teal-50 border border-teal-100 rounded-lg px-4 py-2.5">
                      <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span className="text-teal-900 leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
                <div className="flex items-center gap-2 mb-3">
                  <XCircle className="w-5 h-5 text-rose-600" />
                  <h3 className="font-bold text-rose-900">What AI Gets Wrong</h3>
                </div>
                <ul className="space-y-2">
                  {proscons.cons.map((c, i) => (
                    <li key={i} className="flex gap-2 text-sm bg-rose-50 border border-rose-100 rounded-lg px-4 py-2.5">
                      <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                      <span className="text-rose-900 leading-relaxed">{c}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </section>

          {/* ── Section 11: Videos ── */}
          <section>
            <div className="flex items-center gap-4 mb-2">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground whitespace-nowrap">Watch & Learn</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <p className="text-muted-foreground mb-8">
              These four videos are the best freely available explanations of AI concepts. Together they take about an hour — worth every minute.
            </p>
            <div className="space-y-10">
              {videos.map((v, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-start">
                    <div className="md:col-span-3">
                      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                        <iframe
                          className="absolute inset-0 w-full h-full rounded-xl border"
                          src={`https://www.youtube-nocookie.com/embed/${v.id}`}
                          title={v.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {v.tags.map(t => (
                          <span key={t} className="text-xs font-bold bg-primary/10 text-primary px-2 py-0.5 rounded-full">{t}</span>
                        ))}
                      </div>
                      <h3 className="font-serif font-bold text-foreground text-lg mb-1">{v.title}</h3>
                      <p className="text-xs font-semibold text-muted-foreground mb-3">{v.channel}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{v.why}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ── Section 12: Go Deeper ── */}
          <section className="border-t pt-10">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-xl font-serif font-bold text-foreground whitespace-nowrap">Go Deeper</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { name: "Elements of AI", url: "https://www.elementsofai.com/", tag: "Free Course", desc: "A free online course by the University of Helsinki that teaches AI concepts without requiring any maths background. One of the best starting points available.", color: "teal" },
                { name: "Google's Teachable Machine", url: "https://teachablemachine.withgoogle.com/", tag: "Hands-On", desc: "Train your own image, sound, or pose recognition model in minutes — in your browser, with your webcam. The fastest way to understand training data and model accuracy.", color: "blue" },
                { name: "AI4K12 Initiative", url: "https://ai4k12.org/", tag: "For Students", desc: "Curriculum and activities developed specifically for K–12 students covering the five big ideas in AI. Includes interactive exercises for every grade level.", color: "violet" },
                { name: "3Blue1Brown Neural Network Series", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi", tag: "YouTube", desc: "The four-video series that is the gold standard for visualising how neural networks work, how they learn, and what attention mechanisms do. Beautiful animations.", color: "amber" },
                { name: "MIT OpenCourseWare: Deep Learning", url: "https://ocw.mit.edu/", tag: "University Level", desc: "When you're ready for the real thing: MIT's machine learning and deep learning courses, free online. Requires calculus and programming, but they're the real deal.", color: "rose" },
                { name: "AI Ethics Guidelines (EU AI Act)", url: "https://artificialintelligenceact.eu/", tag: "Policy", desc: "Read the actual regulations. The EU AI Act is the world's first comprehensive AI law — understanding what lawmakers decided is essential for informed AI citizenship.", color: "slate" },
              ].map((r, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <a href={r.url} target="_blank" rel="noopener noreferrer"
                    className="group block border rounded-xl p-4 hover:border-primary/40 hover:shadow-sm transition-all h-full">
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-xs font-bold bg-primary/10 text-primary px-2 py-0.5 rounded-full">{r.tag}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <h3 className="font-bold text-sm text-foreground group-hover:text-primary transition-colors mb-1">{r.name}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{r.desc}</p>
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* ── Bottom nav ── */}
          <section className="border-t pt-10">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">More to Explore</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/resources" className="group block bg-muted/30 border hover:border-primary/40 hover:shadow-sm rounded-xl p-4 transition-all">
                <p className="text-xs font-bold text-muted-foreground mb-1">Resource Library</p>
                <p className="font-serif font-bold text-sm text-foreground group-hover:text-primary transition-colors">Browse All Subjects</p>
                <p className="text-xs text-primary mt-2 font-semibold">View all resources →</p>
              </Link>
              <Link href="/services" className="group block bg-muted/30 border hover:border-primary/40 hover:shadow-sm rounded-xl p-4 transition-all">
                <p className="text-xs font-bold text-muted-foreground mb-1">1-on-1 Support</p>
                <p className="font-serif font-bold text-sm text-foreground group-hover:text-primary transition-colors">STEM Tutoring & Coaching</p>
                <p className="text-xs text-primary mt-2 font-semibold">Learn about services →</p>
              </Link>
            </div>
          </section>

        </div>
      </div>
    </Layout>
  );
}
