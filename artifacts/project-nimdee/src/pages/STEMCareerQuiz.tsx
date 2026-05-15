import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/Layout";
import { ArrowLeft, ArrowRight, RotateCcw, Share2, CheckCircle2, ChevronRight } from "lucide-react";

// ─── Career data ──────────────────────────────────────────────────────────────
const careers = [
  { id: 0,  emoji: "🩺", title: "Medicine & Health Sciences",        color: "bg-rose-50 border-rose-200",   accent: "text-rose-700",   badge: "bg-rose-600",   path: "/resources/life-skills/stem-careers#medicine" },
  { id: 1,  emoji: "🏥", title: "Allied Health & Medical Technology", color: "bg-pink-50 border-pink-200",   accent: "text-pink-700",   badge: "bg-pink-600",   path: "/resources/life-skills/stem-careers#allied" },
  { id: 2,  emoji: "💻", title: "Computer Science & Software",        color: "bg-blue-50 border-blue-200",   accent: "text-blue-700",   badge: "bg-blue-600",   path: "/resources/life-skills/stem-careers#cs" },
  { id: 3,  emoji: "⚙️", title: "Engineering",                        color: "bg-amber-50 border-amber-200", accent: "text-amber-700",  badge: "bg-amber-600",  path: "/resources/life-skills/stem-careers#engineering" },
  { id: 4,  emoji: "🔧", title: "Instrumentation, Automation & NDT",  color: "bg-orange-50 border-orange-200", accent: "text-orange-700", badge: "bg-orange-600", path: "/resources/life-skills/stem-careers#instrumentation" },
  { id: 5,  emoji: "🌿", title: "Environmental & Earth Sciences",      color: "bg-teal-50 border-teal-200",   accent: "text-teal-700",   badge: "bg-teal-600",   path: "/resources/life-skills/stem-careers#environmental" },
  { id: 6,  emoji: "🔬", title: "Biosciences & Bioinformatics",        color: "bg-violet-50 border-violet-200", accent: "text-violet-700", badge: "bg-violet-600", path: "/resources/life-skills/stem-careers#biosciences" },
  { id: 7,  emoji: "✈️", title: "Drone / UAV & Aerospace",             color: "bg-sky-50 border-sky-200",     accent: "text-sky-700",    badge: "bg-sky-600",    path: "/resources/life-skills/stem-careers#drone" },
  { id: 8,  emoji: "🔍", title: "Forensic Science & Laboratory",       color: "bg-slate-50 border-slate-200", accent: "text-slate-700",  badge: "bg-slate-600",  path: "/resources/life-skills/stem-careers#forensic" },
  { id: 9,  emoji: "🏗️", title: "Architecture & Urban Design",         color: "bg-red-50 border-red-200",     accent: "text-red-700",    badge: "bg-red-600",    path: "/resources/life-skills/stem-careers#architecture" },
  { id: 10, emoji: "🌍", title: "Environmental Health & Public Health",color: "bg-green-50 border-green-200", accent: "text-green-700",  badge: "bg-green-600",  path: "/resources/life-skills/stem-careers#envhealth" },
  { id: 11, emoji: "🤖", title: "Robotics & Industrial Automation",    color: "bg-indigo-50 border-indigo-200", accent: "text-indigo-700", badge: "bg-indigo-600", path: "/resources/life-skills/stem-careers#robotics" },
];

// Rationale shown on results screen
const careerRationale: Record<number, string> = {
  0:  "Your interest in biology/chemistry and helping people maps strongly to medicine and health research.",
  1:  "You enjoy hands-on technical work in a healthcare setting — allied health roles combine both.",
  2:  "Coding, data, and problem-solving through software are at the core of your responses.",
  3:  "You thrive building systems and structures, and enjoy math and physics as your tools.",
  4:  "Precision technical work in industrial settings — instrumentation combines trades and technology.",
  5:  "You're drawn to the outdoors, earth science, and understanding how natural systems work.",
  6:  "You love the lab, biology, and emerging technologies — biosciences and bioinformatics blend them.",
  7:  "Operating and engineering unmanned systems appeals to your technical and adventurous side.",
  8:  "Detail-oriented, curious, and science-driven — forensic science is built for your working style.",
  9:  "You blend creativity with technical thinking — architecture turns ideas into built environments.",
  10: "You care about community wellbeing and environmental impact — public health puts that to work.",
  11: "You want to build and program machines that do real work — robotics is a perfect match.",
};

// ─── Quiz questions ────────────────────────────────────────────────────────────
// Each option carries a `scores` array: [career index, points, ...]
interface Option { text: string; scores: number[][] }
interface Question { question: string; options: Option[] }

const questions: Question[] = [
  {
    question: "Which school subject excites you the most?",
    options: [
      { text: "Math & Physics",             scores: [[3,3],[4,2],[7,2],[11,2],[2,1]] },
      { text: "Biology & Chemistry",         scores: [[0,3],[1,2],[6,2],[8,2],[10,1]] },
      { text: "Computer Science / Coding",   scores: [[2,3],[11,2],[6,1],[7,1]] },
      { text: "Earth Science / Geography",   scores: [[5,3],[10,2],[9,1]] },
      { text: "Art, Design & Visual Studies",scores: [[9,3],[3,1],[2,1]] },
    ],
  },
  {
    question: "How do you prefer to spend your time at work?",
    options: [
      { text: "Building or assembling things with my hands",  scores: [[4,3],[11,3],[3,2],[7,2],[9,1]] },
      { text: "Writing code or working on a computer",        scores: [[2,3],[6,2],[11,1],[3,1]] },
      { text: "Caring for or working directly with people",   scores: [[0,3],[1,3],[10,2]] },
      { text: "Analyzing data, samples, or evidence",         scores: [[6,3],[8,3],[5,2],[2,1]] },
      { text: "Designing and sketching plans or blueprints",  scores: [[9,3],[3,2],[7,1]] },
    ],
  },
  {
    question: "Which workplace sounds most appealing?",
    options: [
      { text: "Hospital, clinic, or care facility",           scores: [[0,3],[1,3],[10,1]] },
      { text: "Research lab or university setting",           scores: [[6,3],[8,2],[0,1],[5,1]] },
      { text: "Outdoors — forests, fields, or remote sites",  scores: [[5,3],[10,2],[7,2]] },
      { text: "Factory, plant, or industrial facility",       scores: [[4,3],[11,3],[3,1]] },
      { text: "Tech office, studio, or co-working space",     scores: [[2,3],[9,2],[3,1]] },
    ],
  },
  {
    question: "What kind of impact do you most want to make?",
    options: [
      { text: "Save lives and improve people's health",       scores: [[0,3],[1,2],[10,2]] },
      { text: "Protect the environment and the planet",       scores: [[5,3],[10,3],[6,1]] },
      { text: "Build infrastructure that society depends on", scores: [[3,3],[9,2],[4,2],[11,1]] },
      { text: "Advance science and make new discoveries",     scores: [[6,3],[8,2],[5,1],[0,1]] },
      { text: "Create technology that changes daily life",    scores: [[2,3],[11,2],[7,2],[3,1]] },
    ],
  },
  {
    question: "How do you feel about working with complex machines or software?",
    options: [
      { text: "I want to design and build them from scratch",   scores: [[3,3],[11,3],[2,2],[4,1]] },
      { text: "I want to program and control them",            scores: [[2,3],[11,3],[4,2],[7,1]] },
      { text: "I'd use them as tools — not the main focus",    scores: [[0,2],[10,2],[9,1],[5,1]] },
      { text: "I want to fly or operate unmanned systems",     scores: [[7,3],[4,1]] },
      { text: "I want to analyze the data they produce",       scores: [[2,2],[6,2],[8,2],[5,1]] },
    ],
  },
  {
    question: "Which pathway sounds like the best fit for after high school?",
    options: [
      { text: "University (BSc, BEng, MD — 4+ years)",         scores: [[0,3],[3,3],[6,2],[5,2],[9,2]] },
      { text: "Polytechnic diploma (NAIT/SAIT — 2–3 years)",   scores: [[1,3],[4,3],[11,2],[7,1]] },
      { text: "Coding bootcamp or online certification",        scores: [[2,3],[7,1]] },
      { text: "Apprenticeship (earn while you learn)",          scores: [[4,3],[11,2],[3,1]] },
      { text: "I'm not sure yet — any path works for me",      scores: [[0,1],[1,1],[2,1],[3,1],[5,1]] },
    ],
  },
  {
    question: "Which word best describes how you solve problems?",
    options: [
      { text: "Systematic — I follow careful steps and protocols", scores: [[8,3],[1,3],[4,2],[0,1]] },
      { text: "Creative — I look for unconventional solutions",    scores: [[9,3],[2,2],[6,1]] },
      { text: "Investigative — I dig until I find the root cause", scores: [[8,2],[6,2],[5,2],[2,1]] },
      { text: "Practical — I prototype and test until it works",   scores: [[11,3],[3,3],[4,2],[7,2]] },
      { text: "Empathetic — I consider the human impact first",    scores: [[0,3],[10,3],[1,2]] },
    ],
  },
  {
    question: "Which activity sounds most fun to you?",
    options: [
      { text: "Programming a robot to complete a task",          scores: [[11,3],[2,2],[4,1]] },
      { text: "Diagnosing and treating a patient",               scores: [[0,3],[1,3]] },
      { text: "Analysing soil or water samples in a lab",        scores: [[5,3],[6,2],[8,1],[10,2]] },
      { text: "Drafting a building design in CAD software",      scores: [[9,3],[3,2],[7,1]] },
      { text: "Flying a drone over a construction or field site", scores: [[7,3],[5,1],[3,1]] },
    ],
  },
  {
    question: "What motivates you most when working on a project?",
    options: [
      { text: "Knowing it will directly help a real person",    scores: [[0,3],[1,2],[10,2]] },
      { text: "The puzzle — I love when pieces finally click",  scores: [[8,3],[6,2],[2,2]] },
      { text: "Seeing something I designed get built or used",  scores: [[9,3],[3,2],[11,2],[4,1]] },
      { text: "Discovering something no one knew before",       scores: [[6,3],[5,2],[8,1]] },
      { text: "The speed — building fast and shipping things",  scores: [[2,3],[7,2],[11,1]] },
    ],
  },
];

// ─── Score calculation ────────────────────────────────────────────────────────
function computeScores(answers: number[]): number[] {
  const totals = new Array(12).fill(0);
  answers.forEach((optionIdx, qIdx) => {
    if (optionIdx === -1) return;
    const option = questions[qIdx].options[optionIdx];
    option.scores.forEach(([careerId, pts]) => {
      totals[careerId] += pts;
    });
  });
  return totals;
}

function topCareers(scores: number[], n = 3) {
  return scores
    .map((score, id) => ({ id, score }))
    .sort((a, b) => b.score - a.score)
    .slice(0, n);
}

// ─── URL param helpers ────────────────────────────────────────────────────────
function answersToParam(answers: number[]): string {
  return answers.join(",");
}

function paramToAnswers(param: string): number[] | null {
  const parts = param.split(",").map(Number);
  if (parts.length !== questions.length) return null;
  // All values must be a valid selected option (0–4); -1 (unanswered) is not allowed in shared links
  if (parts.some((v) => isNaN(v) || v < 0 || v >= 5)) return null;
  return parts;
}

// ─── Animation variants ───────────────────────────────────────────────────────
const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } };
const slideIn = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
  exit: { opacity: 0, x: -40, transition: { duration: 0.25, ease: "easeIn" as const } },
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function STEMCareerQuiz() {
  // Initialise from URL if ?answers= param is present and valid
  const initState = (): { answers: number[]; currentQ: number; showResults: boolean } => {
    const params = new URLSearchParams(window.location.search);
    const raw = params.get("answers");
    if (raw) {
      const parsed = paramToAnswers(raw);
      if (parsed) {
        return { answers: parsed, currentQ: questions.length, showResults: true };
      }
      // Invalid param — clear it and start fresh
      window.history.replaceState(null, "", window.location.pathname);
    }
    return { answers: new Array(questions.length).fill(-1), currentQ: 0, showResults: false };
  };

  const [answers, setAnswers] = useState<number[]>(() => initState().answers);
  const [currentQ, setCurrentQ] = useState<number>(() => initState().currentQ);
  const [showResults, setShowResults] = useState<boolean>(() => initState().showResults);
  const [copied, setCopied] = useState(false);

  const safeCurrentQ = Math.min(currentQ, questions.length - 1);
  const answered = answers[safeCurrentQ] !== -1;
  const progress = (currentQ / questions.length) * 100;

  function selectOption(optionIdx: number) {
    const updated = [...answers];
    updated[currentQ] = optionIdx;
    setAnswers(updated);
  }

  function goNext() {
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowResults(true);
      // Update URL so it's shareable
      const params = new URLSearchParams();
      params.set("answers", answersToParam(answers));
      window.history.replaceState(null, "", `?${params.toString()}`);
    }
  }

  function goBack() {
    if (currentQ > 0) setCurrentQ(currentQ - 1);
  }

  function restart() {
    setAnswers(new Array(questions.length).fill(-1));
    setCurrentQ(0);
    setShowResults(false);
    window.history.replaceState(null, "", window.location.pathname);
  }

  function copyShareLink() {
    const params = new URLSearchParams();
    params.set("answers", answersToParam(answers));
    const url = `${window.location.origin}${window.location.pathname}?${params.toString()}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }).catch(() => {
      // Clipboard permission denied — fall back to selecting the URL manually
      const input = document.createElement("input");
      input.value = url;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }

  const scores = computeScores(answers);
  const top3 = topCareers(scores);
  const maxScore = Math.max(...scores);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-700 to-teal-900 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/resources/life-skills/stem-careers" className="inline-flex items-center gap-1.5 text-teal-200 hover:text-white text-sm mb-5 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to STEM Careers
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-4xl">🧭</span>
            <h1 className="font-serif text-3xl md:text-4xl font-bold">Find Your STEM Path</h1>
          </div>
          <p className="text-teal-100 text-lg max-w-xl">
            Answer 9 quick questions about your interests and working style. We'll match you with the top 3 STEM career areas from Alberta's highest-demand fields.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        {!showResults ? (
          <>
            {/* Progress bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-slate-500 mb-2">
                <span>Question {currentQ + 1} of {questions.length}</span>
                <span>{Math.round(progress)}% complete</span>
              </div>
              <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-teal-600 rounded-full"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>
            </div>

            {/* Question card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQ}
                variants={slideIn}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-7 md:p-9">
                  <h2 className="font-serif text-xl md:text-2xl font-bold text-slate-800 mb-6">
                    {questions[safeCurrentQ].question}
                  </h2>

                  <motion.div className="space-y-3" variants={stagger} initial="hidden" animate="visible">
                    {questions[safeCurrentQ].options.map((opt, idx) => {
                      const selected = answers[safeCurrentQ] === idx;
                      return (
                        <motion.button
                          key={idx}
                          variants={fadeUp}
                          onClick={() => selectOption(idx)}
                          className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-3 group
                            ${selected
                              ? "border-teal-600 bg-teal-50 text-teal-800"
                              : "border-slate-200 bg-white hover:border-teal-300 hover:bg-slate-50 text-slate-700"
                            }`}
                        >
                          <span className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-colors
                            ${selected ? "border-teal-600 bg-teal-600" : "border-slate-300 group-hover:border-teal-400"}`}>
                            {selected && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                          </span>
                          <span className="text-sm md:text-base font-medium">{opt.text}</span>
                        </motion.button>
                      );
                    })}
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Nav buttons */}
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={goBack}
                disabled={currentQ === 0}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 text-slate-600 text-sm font-medium hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>

              <button
                onClick={goNext}
                disabled={!answered}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                {currentQ === questions.length - 1 ? "See My Results" : "Next"}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </>
        ) : (
          /* ── Results screen ── */
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.div variants={fadeUp} className="text-center mb-10">
              <div className="text-5xl mb-3">🎯</div>
              <h2 className="font-serif text-3xl font-bold text-slate-800 mb-2">Your Top STEM Matches</h2>
              <p className="text-slate-500 text-base max-w-lg mx-auto">
                Based on your answers, here are the career areas that align best with your interests and working style.
              </p>
            </motion.div>

            {/* Top 3 cards */}
            <div className="space-y-5 mb-10">
              {top3.map(({ id, score }, rank) => {
                const career = careers[id];
                const pct = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;
                const labels = ["Best match", "Strong match", "Good match"];
                return (
                  <motion.div key={id} variants={fadeUp}>
                    <div className={`rounded-2xl border-2 p-6 ${career.color}`}>
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl">{career.emoji}</span>
                          <div>
                            <div className="flex items-center gap-2 mb-0.5">
                              <span className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full text-white ${career.badge}`}>
                                #{rank + 1} {labels[rank]}
                              </span>
                            </div>
                            <h3 className={`font-serif text-lg font-bold ${career.accent}`}>{career.title}</h3>
                          </div>
                        </div>
                        <span className={`text-2xl font-bold font-serif ${career.accent} flex-shrink-0`}>{pct}%</span>
                      </div>

                      {/* Match bar */}
                      <div className="h-1.5 bg-white/70 rounded-full mb-3 overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full ${career.badge}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${pct}%` }}
                          transition={{ duration: 0.8, ease: "easeOut", delay: rank * 0.15 }}
                        />
                      </div>

                      <p className="text-sm text-slate-600 mb-4">{careerRationale[id]}</p>

                      <Link href={career.path} className={`inline-flex items-center gap-1.5 text-sm font-semibold ${career.accent} hover:underline`}>
                        Explore this career <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Disclaimer */}
            <motion.div variants={fadeUp} className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 text-sm text-amber-800">
              <strong>Remember:</strong> This quiz surfaces patterns in your answers — it's a starting point, not a prescription. Many students end up loving a career they didn't expect. Use this to spark exploration, not close doors.
            </motion.div>

            {/* Action buttons */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={restart}
                className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-slate-300 text-slate-700 font-semibold hover:bg-slate-100 transition-colors"
              >
                <RotateCcw className="w-4 h-4" /> Retake Quiz
              </button>
              <button
                onClick={copyShareLink}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold transition-colors"
              >
                <Share2 className="w-4 h-4" />
                {copied ? "Link copied!" : "Share my results"}
              </button>
              <Link href="/resources/life-skills/stem-careers" className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-teal-600 text-teal-700 font-semibold hover:bg-teal-50 transition-colors">
                Browse all 12 careers <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </div>
    </Layout>
  );
}
