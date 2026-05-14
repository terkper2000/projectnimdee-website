import { useState, useCallback, useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft, ChevronRight, RotateCcw, Trophy, CheckCircle, XCircle,
  Eye, EyeOff, Timer, Hash, Sigma, Triangle, BarChart3, Play, Shuffle,
} from "lucide-react";
import { type Problem } from "@/components/PracticeProblems";
import { unit1Problems } from "./Math9Unit1";
import { unit2Problems } from "./Math9Unit2";
import { unit3Problems } from "./Math9Unit3";
import { unit4Problems } from "./Math9Unit4";
import { unit5Problems } from "./Math9Unit5";
import { unit6Problems } from "./Math9Unit6";
import { unit7Problems } from "./Math9Unit7";
import { unit8Problems } from "./Math9Unit8";

/* ── Types ──────────────────────────────────────────────────────── */

interface QuizProblem extends Problem {
  unitNumber: number;
  unitLabel: string;
}

type Phase = "setup" | "quiz" | "results";

/* ── Unit metadata ──────────────────────────────────────────────── */

const UNITS = [
  { num: 1, label: "Rational Numbers", icon: <Hash className="w-4 h-4" />, problems: unit1Problems },
  { num: 2, label: "Powers", icon: <Sigma className="w-4 h-4" />, problems: unit2Problems },
  { num: 3, label: "Polynomials", icon: <Hash className="w-4 h-4" />, problems: unit3Problems },
  { num: 4, label: "Geometry", icon: <Triangle className="w-4 h-4" />, problems: unit4Problems },
  { num: 5, label: "Linear Relations", icon: <Sigma className="w-4 h-4" />, problems: unit5Problems },
  { num: 6, label: "Equations", icon: <Hash className="w-4 h-4" />, problems: unit6Problems },
  { num: 7, label: "Circles", icon: <Triangle className="w-4 h-4" />, problems: unit7Problems },
  { num: 8, label: "Data & Probability", icon: <BarChart3 className="w-4 h-4" />, problems: unit8Problems },
];

const LEVEL_COLORS: Record<string, string> = {
  Basic: "bg-emerald-100 text-emerald-800 border-emerald-200",
  Intermediate: "bg-amber-100 text-amber-800 border-amber-200",
  Challenge: "bg-rose-100 text-rose-800 border-rose-200",
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function formatTime(s: number): string {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

/* ── Setup Screen ────────────────────────────────────────────────── */

function SetupScreen({
  selectedUnits, setSelectedUnits, timerEnabled, setTimerEnabled, onStart,
}: {
  selectedUnits: Set<number>;
  setSelectedUnits: (s: Set<number>) => void;
  timerEnabled: boolean;
  setTimerEnabled: (v: boolean) => void;
  onStart: () => void;
}) {
  const toggleUnit = (n: number) => {
    const next = new Set(selectedUnits);
    next.has(n) ? next.delete(n) : next.add(n);
    setSelectedUnits(next);
  };
  const allSelected = selectedUnits.size === UNITS.length;
  const toggleAll = () =>
    setSelectedUnits(allSelected ? new Set() : new Set(UNITS.map((u) => u.num)));

  const totalProblems = UNITS.filter((u) => selectedUnits.has(u.num)).reduce(
    (sum, u) => sum + u.problems.length, 0,
  );

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl mx-auto space-y-8"
      >
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-5 py-2 text-sm font-bold tracking-wide">
            <Shuffle className="w-4 h-4" />
            Quiz Mode
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            Math 9 Unit Quiz
          </h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            Choose which units to include, then work through shuffled practice
            problems and track your score.
          </p>
        </div>

        {/* Unit selector */}
        <Card className="shadow-sm">
          <div className="bg-muted/50 px-5 py-3 border-b flex items-center justify-between">
            <span className="font-bold text-sm">Select Units</span>
            <button
              onClick={toggleAll}
              className="text-xs text-primary font-semibold hover:underline transition-colors"
            >
              {allSelected ? "Deselect all" : "Select all"}
            </button>
          </div>
          <CardContent className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {UNITS.map((u) => {
              const checked = selectedUnits.has(u.num);
              return (
                <button
                  key={u.num}
                  onClick={() => toggleUnit(u.num)}
                  className={`flex items-center gap-3 rounded-xl border-2 px-4 py-3 text-left transition-all ${
                    checked
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-border bg-muted/20 text-muted-foreground hover:border-primary/40 hover:bg-muted/40"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded flex items-center justify-center border-2 shrink-0 transition-colors ${
                      checked ? "border-primary bg-primary" : "border-muted-foreground/40"
                    }`}
                  >
                    {checked && <CheckCircle className="w-3.5 h-3.5 text-primary-foreground" />}
                  </div>
                  <span className="shrink-0">{u.icon}</span>
                  <div className="min-w-0">
                    <p className="font-semibold text-sm leading-tight">Unit {u.num}: {u.label}</p>
                    <p className="text-xs opacity-70">{u.problems.length} problems</p>
                  </div>
                </button>
              );
            })}
          </CardContent>
        </Card>

        {/* Timer toggle */}
        <Card className="shadow-sm">
          <CardContent className="p-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Timer className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="font-semibold text-sm">Timer Mode</p>
                <p className="text-xs text-muted-foreground">Count up while you work through the quiz</p>
              </div>
            </div>
            <button
              onClick={() => setTimerEnabled(!timerEnabled)}
              className={`relative w-12 h-6 rounded-full transition-colors ${
                timerEnabled ? "bg-primary" : "bg-muted-foreground/30"
              }`}
            >
              <span
                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                  timerEnabled ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
          </CardContent>
        </Card>

        {/* Start button */}
        <button
          disabled={selectedUnits.size === 0}
          onClick={onStart}
          className="w-full flex items-center justify-center gap-3 bg-primary text-primary-foreground font-bold text-base rounded-2xl py-4 px-6 hover:bg-primary/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed shadow-md"
        >
          <Play className="w-5 h-5" />
          Start Quiz{totalProblems > 0 ? ` (${totalProblems} problems)` : ""}
        </button>
      </motion.div>
    </div>
  );
}

/* ── Quiz Screen ─────────────────────────────────────────────────── */

function QuizScreen({
  problems, timerEnabled, onFinish,
}: {
  problems: QuizProblem[];
  timerEnabled: boolean;
  onFinish: (correct: number, answers: boolean[], elapsed: number) => void;
}) {
  const [idx, setIdx] = useState(0);
  const [stepsVisible, setStepsVisible] = useState(false);
  const [answerVisible, setAnswerVisible] = useState(false);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [elapsed, setElapsed] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const elapsedRef = useRef(0);

  useEffect(() => {
    if (!timerEnabled) return;
    timerRef.current = setInterval(() => {
      elapsedRef.current += 1;
      setElapsed(elapsedRef.current);
    }, 1000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [timerEnabled]);

  const current = problems[idx];
  const progress = (idx / problems.length) * 100;

  const handleAnswer = useCallback(
    (correct: boolean) => {
      const newAnswers = [...answers, correct];
      if (idx + 1 >= problems.length) {
        if (timerRef.current) clearInterval(timerRef.current);
        onFinish(newAnswers.filter(Boolean).length, newAnswers, elapsedRef.current);
      } else {
        setAnswers(newAnswers);
        setIdx(idx + 1);
        setStepsVisible(false);
        setAnswerVisible(false);
      }
    },
    [answers, idx, problems.length, onFinish],
  );

  return (
    <div className="min-h-[60vh] flex flex-col py-8">
      {/* Progress bar + meta */}
      <div className="mb-6 space-y-3">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span className="font-semibold">
            Question {idx + 1} of {problems.length}
          </span>
          <div className="flex items-center gap-4">
            {timerEnabled && (
              <span className="flex items-center gap-1.5 font-mono font-bold text-primary">
                <Timer className="w-4 h-4" />
                {formatTime(elapsed)}
              </span>
            )}
            <span className="text-xs">
              ✓ {answers.filter(Boolean).length} &nbsp;✗ {answers.filter((a) => !a).length}
            </span>
          </div>
        </div>
        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary rounded-full"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </div>

      {/* Question card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.25 }}
          className="flex-1"
        >
          <Card className="shadow-md border-2">
            <CardContent className="p-6 md:p-8 space-y-6">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-secondary text-secondary-foreground border">
                  Unit {current.unitNumber}: {current.unitLabel}
                </span>
                <span className={`text-xs font-bold px-3 py-1 rounded-full border ${LEVEL_COLORS[current.level] ?? ""}`}>
                  {current.level}
                </span>
              </div>

              {/* Question */}
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Question</p>
                <p className="text-lg md:text-xl font-serif leading-relaxed text-foreground">
                  {current.question}
                </p>
              </div>

              {/* Steps reveal */}
              <div className="border rounded-xl overflow-hidden">
                <button
                  onClick={() => setStepsVisible((v) => !v)}
                  className="w-full flex items-center justify-between px-5 py-3 bg-muted/40 hover:bg-muted/70 transition-colors text-sm font-semibold"
                >
                  <span className="flex items-center gap-2">
                    {stepsVisible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    {stepsVisible ? "Hide Steps" : "Show Steps"}
                  </span>
                  <ChevronRight
                    className={`w-4 h-4 text-muted-foreground transition-transform ${stepsVisible ? "rotate-90" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {stepsVisible && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 py-4 space-y-2 bg-muted/20">
                        {current.steps.map((step, i) => (
                          <div key={i} className="flex gap-3 text-sm">
                            <span className="w-5 h-5 rounded-full bg-primary/20 text-primary font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                              {i + 1}
                            </span>
                            <p className="text-foreground/80 font-mono leading-relaxed">{step}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Answer reveal */}
              <div className="border-2 border-dashed rounded-xl overflow-hidden">
                <button
                  onClick={() => setAnswerVisible((v) => !v)}
                  className="w-full flex items-center justify-between px-5 py-3 hover:bg-muted/40 transition-colors text-sm font-semibold"
                >
                  <span className="flex items-center gap-2 text-primary">
                    {answerVisible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    {answerVisible ? "Hide Answer" : "Reveal Answer"}
                  </span>
                </button>
                <AnimatePresence>
                  {answerVisible && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 py-4 bg-primary/5 border-t-2 border-dashed border-primary/30">
                        <p className="text-xs font-bold uppercase tracking-widest text-primary/70 mb-1">Answer</p>
                        <p className="text-xl font-bold font-mono text-primary">{current.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Self-report buttons */}
              <div className="pt-2">
                <p className="text-xs text-muted-foreground text-center mb-3 font-semibold uppercase tracking-wide">
                  How did you do?
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => handleAnswer(false)}
                    className="flex items-center justify-center gap-2 rounded-xl border-2 border-rose-200 bg-rose-50 text-rose-700 font-bold py-3 hover:bg-rose-100 hover:border-rose-300 transition-colors"
                  >
                    <XCircle className="w-5 h-5" />
                    Got it wrong
                  </button>
                  <button
                    onClick={() => handleAnswer(true)}
                    className="flex items-center justify-center gap-2 rounded-xl border-2 border-emerald-200 bg-emerald-50 text-emerald-700 font-bold py-3 hover:bg-emerald-100 hover:border-emerald-300 transition-colors"
                  >
                    <CheckCircle className="w-5 h-5" />
                    Got it right!
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ── Results Screen ──────────────────────────────────────────────── */

function ResultsScreen({
  problems, correct, answers, timerEnabled, elapsed, onRetry, onNewQuiz,
}: {
  problems: QuizProblem[];
  correct: number;
  answers: boolean[];
  timerEnabled: boolean;
  elapsed: number;
  onRetry: () => void;
  onNewQuiz: () => void;
}) {
  const total = problems.length;
  const pct = Math.round((correct / total) * 100);

  const unitBreakdown = UNITS.map((u) => {
    const unitProblems = problems
      .map((p, i) => ({ p, i }))
      .filter(({ p }) => p.unitNumber === u.num);
    if (unitProblems.length === 0) return null;
    const unitCorrect = unitProblems.filter(({ i }) => answers[i]).length;
    return { ...u, total: unitProblems.length, correct: unitCorrect };
  }).filter(Boolean) as Array<(typeof UNITS)[0] & { total: number; correct: number }>;

  const grade =
    pct >= 90 ? { label: "Excellent!", color: "text-emerald-600" }
    : pct >= 75 ? { label: "Great job!", color: "text-teal-600" }
    : pct >= 60 ? { label: "Good effort!", color: "text-amber-600" }
    : { label: "Keep practising!", color: "text-rose-600" };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-[60vh] flex flex-col items-center justify-center py-16"
    >
      <div className="w-full max-w-2xl mx-auto space-y-8">
        {/* Score hero */}
        <div className="text-center space-y-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.15 }}
            className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-amber-400 to-teal-600 flex items-center justify-center shadow-lg"
          >
            <Trophy className="w-12 h-12 text-white" />
          </motion.div>
          <div>
            <p className={`text-5xl font-bold font-serif ${grade.color}`}>{pct}%</p>
            <p className={`text-xl font-semibold mt-1 ${grade.color}`}>{grade.label}</p>
            <p className="text-muted-foreground mt-2">
              {correct} out of {total} correct
              {timerEnabled && elapsed > 0 && (
                <span className="ml-2 text-sm">· {formatTime(elapsed)}</span>
              )}
            </p>
          </div>
        </div>

        {/* Per-unit breakdown */}
        {unitBreakdown.length > 1 && (
          <Card className="shadow-sm">
            <div className="bg-muted/50 px-5 py-3 border-b font-bold text-sm">Unit Breakdown</div>
            <CardContent className="p-4 space-y-3">
              {unitBreakdown.map((u) => {
                const unitPct = Math.round((u.correct / u.total) * 100);
                return (
                  <div key={u.num} className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold flex items-center gap-2">
                        {u.icon}
                        Unit {u.num}: {u.label}
                      </span>
                      <span className="text-muted-foreground font-mono">
                        {u.correct}/{u.total}
                      </span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${unitPct >= 75 ? "bg-emerald-500" : unitPct >= 50 ? "bg-amber-500" : "bg-rose-500"}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${unitPct}%` }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                      />
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        )}

        {/* Review section */}
        <Card className="shadow-sm">
          <div className="bg-muted/50 px-5 py-3 border-b font-bold text-sm">Question Review</div>
          <CardContent className="p-4 space-y-3 max-h-80 overflow-y-auto">
            {problems.map((p, i) => (
              <div
                key={i}
                className={`flex items-start gap-3 rounded-lg p-3 text-sm border ${
                  answers[i]
                    ? "bg-emerald-50 border-emerald-200"
                    : "bg-rose-50 border-rose-200"
                }`}
              >
                {answers[i]
                  ? <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  : <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />}
                <div className="min-w-0">
                  <p className="font-medium text-foreground leading-snug line-clamp-2">{p.question}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Unit {p.unitNumber} · {p.level} · Answer: <span className="font-mono font-bold">{p.answer}</span>
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={onRetry}
            className="flex items-center justify-center gap-2 rounded-xl border-2 border-border bg-muted/30 text-foreground font-bold py-3.5 hover:bg-muted/60 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Retry Same Units
          </button>
          <button
            onClick={onNewQuiz}
            className="flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground font-bold py-3.5 hover:bg-primary/90 transition-colors"
          >
            <Shuffle className="w-4 h-4" />
            New Quiz
          </button>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Main Page ───────────────────────────────────────────────────── */

export default function Math9Quiz() {
  const [phase, setPhase] = useState<Phase>("setup");
  const [selectedUnits, setSelectedUnits] = useState<Set<number>>(
    new Set(UNITS.map((u) => u.num)),
  );
  const [timerEnabled, setTimerEnabled] = useState(false);
  const [problems, setProblems] = useState<QuizProblem[]>([]);
  const [correct, setCorrect] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [elapsed, setElapsed] = useState(0);

  const buildProblems = useCallback(() => {
    const pool: QuizProblem[] = [];
    for (const u of UNITS) {
      if (!selectedUnits.has(u.num)) continue;
      for (const p of u.problems) {
        pool.push({ ...p, unitNumber: u.num, unitLabel: u.label });
      }
    }
    return shuffle(pool);
  }, [selectedUnits]);

  const handleStart = useCallback(() => {
    setProblems(buildProblems());
    setCorrect(0);
    setAnswers([]);
    setElapsed(0);
    setPhase("quiz");
  }, [buildProblems]);

  const handleFinish = useCallback((c: number, ans: boolean[], elapsedSeconds: number) => {
    setCorrect(c);
    setAnswers(ans);
    setElapsed(elapsedSeconds);
    setPhase("results");
  }, []);

  const handleRetry = useCallback(() => {
    setProblems(buildProblems());
    setCorrect(0);
    setAnswers([]);
    setElapsed(0);
    setPhase("quiz");
  }, [buildProblems]);

  const handleNewQuiz = useCallback(() => {
    setPhase("setup");
  }, []);

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-muted/40 border-b">
        <div className="container mx-auto px-4 md:px-6 py-3 flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
          <Link href="/resources" className="hover:text-primary transition-colors flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" />Resources
          </Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/resources/math-9" className="hover:text-primary transition-colors">Math 9</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground font-medium">Quiz Mode</span>
        </div>
      </div>

      {/* Unit nav */}
      <div className="bg-muted/30 border-b overflow-x-auto">
        <div className="container mx-auto px-4 md:px-6 py-0 flex items-stretch min-w-max md:min-w-0">
          {[
            { label: "Unit 1: Rational Numbers", href: "/resources/math-9/unit-1", icon: <Hash className="w-4 h-4" /> },
            { label: "Unit 2: Powers", href: "/resources/math-9/unit-2", icon: <Sigma className="w-4 h-4" /> },
            { label: "Unit 3: Polynomials", href: "/resources/math-9/unit-3", icon: <Hash className="w-4 h-4" /> },
            { label: "Unit 4: Geometry", href: "/resources/math-9/unit-4", icon: <Triangle className="w-4 h-4" /> },
            { label: "Unit 5: Linear Relations", href: "/resources/math-9/unit-5", icon: <Sigma className="w-4 h-4" /> },
            { label: "Unit 6: Equations", href: "/resources/math-9/unit-6", icon: <Hash className="w-4 h-4" /> },
            { label: "Unit 7: Circles", href: "/resources/math-9/unit-7", icon: <Triangle className="w-4 h-4" /> },
            { label: "Unit 8: Data", href: "/resources/math-9/unit-8", icon: <BarChart3 className="w-4 h-4" /> },
          ].map((u) => (
            <Link
              key={u.href}
              href={u.href}
              className="flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 border-transparent text-muted-foreground hover:text-foreground hover:border-border transition-colors whitespace-nowrap"
            >
              {u.icon}{u.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8">
        {phase === "setup" && (
          <SetupScreen
            selectedUnits={selectedUnits}
            setSelectedUnits={setSelectedUnits}
            timerEnabled={timerEnabled}
            setTimerEnabled={setTimerEnabled}
            onStart={handleStart}
          />
        )}
        {phase === "quiz" && (
          <QuizScreen
            problems={problems}
            timerEnabled={timerEnabled}
            onFinish={handleFinish}
          />
        )}
        {phase === "results" && (
          <ResultsScreen
            problems={problems}
            correct={correct}
            answers={answers}
            timerEnabled={timerEnabled}
            elapsed={elapsed}
            onRetry={handleRetry}
            onNewQuiz={handleNewQuiz}
          />
        )}
      </div>
    </Layout>
  );
}
