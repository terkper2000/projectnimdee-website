import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RefreshCw, CheckCircle, XCircle, ChevronDown, ChevronUp, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Math from "@/components/MathRenderer";
import CoordinatePlane from "@/components/CoordinatePlane";
import type { MCProblem } from "@/utils/math9Generators";

interface GeneratedPracticeProps {
  generateProblem: () => MCProblem;
  unitTitle: string;
  accentColor?: string;
}

const LABELS = ["A", "B", "C", "D"];

export default function GeneratedPractice({
  generateProblem,
  unitTitle,
  accentColor = "border-l-primary",
}: GeneratedPracticeProps) {
  const [problem, setProblem] = useState<MCProblem>(() => generateProblem());
  const [selected, setSelected] = useState<number | null>(null);
  const [showSteps, setShowSteps] = useState(false);
  const [streak, setStreak] = useState(0);

  const next = useCallback(() => {
    setProblem(generateProblem());
    setSelected(null);
    setShowSteps(false);
  }, [generateProblem]);

  const choose = (i: number) => {
    if (selected !== null) return;
    setSelected(i);
    if (i === problem.correctIndex) setStreak((s) => s + 1);
    else setStreak(0);
  };

  const isCorrect = selected === problem.correctIndex;

  const choiceBg = (i: number) => {
    if (selected === null)
      return "border-border hover:border-primary/50 hover:bg-primary/5 cursor-pointer";
    if (i === problem.correctIndex)
      return "border-green-500 bg-green-50 text-green-900";
    if (i === selected)
      return "border-red-400 bg-red-50 text-red-900";
    return "border-border opacity-40";
  };

  return (
    <section className="mt-12">
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <h2 className="text-2xl md:text-3xl font-serif font-bold whitespace-nowrap">
          Generate Problems
        </h2>
        <div className="flex-1 h-px bg-border" />
        {streak > 1 && (
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-800">
            🔥 {streak}-streak
          </span>
        )}
        <button
          onClick={next}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs font-bold hover:bg-primary/90 transition-colors"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          New Problem
        </button>
      </div>

      <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mb-6 text-sm text-muted-foreground">
        Select the correct answer. New problems are generated randomly each time you click{" "}
        <strong className="text-foreground">New Problem</strong>.
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={problem.question + selected}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: "easeOut" as const }}
        >
          <Card className={`shadow-sm border-l-4 ${accentColor}`}>
            <CardContent className="p-6 space-y-5">
              {/* Question */}
              <div className="text-base font-semibold leading-relaxed">
                <Math tex={problem.question} display />
              </div>

              {/* Table (if present) */}
              {problem.tableSpec && (
                <div className="overflow-x-auto">
                  <table className="text-sm border-collapse mx-auto">
                    <thead>
                      <tr>
                        {problem.tableSpec.headers.map((h, i) => (
                          <th
                            key={i}
                            className="px-6 py-2 bg-primary/10 font-bold text-primary border border-border text-center"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {problem.tableSpec.rows.map((row, ri) => (
                        <tr key={ri} className={ri % 2 === 0 ? "bg-muted/30" : ""}>
                          {row.map((cell, ci) => (
                            <td
                              key={ci}
                              className="px-6 py-2 border border-border text-center font-mono text-sm"
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Graph (if present) */}
              {problem.graphSpec && (
                <CoordinatePlane
                  m={problem.graphSpec.m}
                  b={problem.graphSpec.b}
                  highlightPoints={problem.graphSpec.points ?? []}
                />
              )}

              {/* Multiple choice */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {problem.choices.map((choice, i) => (
                  <button
                    key={i}
                    onClick={() => choose(i)}
                    disabled={selected !== null}
                    className={`relative flex items-start gap-3 p-4 rounded-xl border-2 text-left transition-all duration-200 ${choiceBg(i)}`}
                  >
                    <span className="shrink-0 w-6 h-6 rounded-full border-2 border-current flex items-center justify-center text-xs font-bold mt-0.5">
                      {LABELS[i]}
                    </span>
                    <span className="text-sm leading-relaxed">
                      <Math tex={choice} />
                    </span>
                    {selected !== null && i === problem.correctIndex && (
                      <CheckCircle className="w-4 h-4 text-green-600 absolute right-3 top-3" />
                    )}
                    {selected === i && i !== problem.correctIndex && (
                      <XCircle className="w-4 h-4 text-red-500 absolute right-3 top-3" />
                    )}
                  </button>
                ))}
              </div>

              {/* Feedback banner */}
              <AnimatePresence>
                {selected !== null && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div
                      className={`rounded-xl p-4 ${
                        isCorrect
                          ? "bg-green-50 border border-green-200 text-green-800"
                          : "bg-red-50 border border-red-200 text-red-800"
                      }`}
                    >
                      <p className="font-bold text-sm mb-1">
                        {isCorrect ? "✓ Correct!" : "✗ Not quite — see the solution below"}
                      </p>
                    </div>

                    {/* Step-by-step toggle */}
                    <button
                      onClick={() => setShowSteps((s) => !s)}
                      className="flex items-center gap-2 text-xs font-semibold text-primary hover:text-primary/80 mt-3 transition-colors"
                    >
                      <Lightbulb className="w-4 h-4" />
                      {showSteps ? "Hide" : "Show"} step-by-step solution
                      {showSteps ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>

                    <AnimatePresence>
                      {showSteps && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="mt-3 bg-muted/40 rounded-lg p-4 border space-y-2"
                        >
                          {problem.steps.map((step, si) => (
                            <div
                              key={si}
                              className={`text-sm ${
                                si === problem.steps.length - 1
                                  ? "font-bold text-primary pt-1 border-t mt-1"
                                  : "text-muted-foreground"
                              }`}
                            >
                              <Math tex={step} />
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <button
                      onClick={next}
                      className="mt-4 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-bold hover:bg-primary/90 transition-colors"
                    >
                      <RefreshCw className="w-4 h-4" />
                      Next Problem
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
