import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

export interface Problem {
  level: "Basic" | "Intermediate" | "Challenge";
  question: string;
  steps: string[];
  answer: string;
}

interface PracticeProblemsProps {
  problems: Problem[];
  accentClass?: string;
}

const levelStyles: Record<Problem["level"], string> = {
  Basic: "bg-green-100 text-green-800",
  Intermediate: "bg-amber-100 text-amber-800",
  Challenge: "bg-rose-100 text-rose-800",
};

type FilterLevel = "All" | Problem["level"];

const filterOptions: FilterLevel[] = ["All", "Basic", "Intermediate", "Challenge"];

const filterButtonStyles: Record<FilterLevel, { active: string; inactive: string }> = {
  All: {
    active: "bg-primary text-primary-foreground border-primary",
    inactive: "bg-background text-muted-foreground border-border hover:border-primary/50 hover:text-foreground",
  },
  Basic: {
    active: "bg-green-600 text-white border-green-600",
    inactive: "bg-background text-muted-foreground border-border hover:border-green-400 hover:text-green-700",
  },
  Intermediate: {
    active: "bg-amber-500 text-white border-amber-500",
    inactive: "bg-background text-muted-foreground border-border hover:border-amber-400 hover:text-amber-700",
  },
  Challenge: {
    active: "bg-rose-600 text-white border-rose-600",
    inactive: "bg-background text-muted-foreground border-border hover:border-rose-400 hover:text-rose-700",
  },
};

const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.07 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export default function PracticeProblems({ problems, accentClass = "border-l-primary" }: PracticeProblemsProps) {
  const [shown, setShown] = useState<Record<number, boolean>>({});
  const [filter, setFilter] = useState<FilterLevel>("All");

  const toggle = (i: number) => setShown((prev) => ({ ...prev, [i]: !prev[i] }));

  const filteredProblems = (filter === "All" ? problems : problems.filter((p) => p.level === filter)).map(
    (p, _i, _arr) => ({ problem: p, originalIndex: problems.indexOf(p) })
  );

  return (
    <section>
      <div className="flex items-center gap-4 mb-6">
        <h2 className="text-2xl md:text-3xl font-serif font-bold whitespace-nowrap">Practice Problems</h2>
        <div className="flex-1 h-px bg-border" />
        <span className="text-xs text-muted-foreground font-semibold whitespace-nowrap">{filteredProblems.length} questions</span>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {filterOptions.map((level) => {
          const isActive = filter === level;
          const styles = filterButtonStyles[level];
          return (
            <button
              key={level}
              onClick={() => setFilter(level)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-colors ${isActive ? styles.active : styles.inactive}`}
            >
              {level}
            </button>
          );
        })}
      </div>

      <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mb-6 text-sm text-muted-foreground">
        Work through each question on paper first, then click <strong className="text-foreground">Show Answer</strong> to check your step-by-step solution.
      </div>

      {filteredProblems.length === 0 ? (
        <p className="text-center text-muted-foreground py-12 text-sm">
          {filter === "All" ? "No practice problems in this unit." : `No ${filter} problems in this unit.`}
        </p>
      ) : (
        <motion.div key={filter} variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4">
          {filteredProblems.map(({ problem: p, originalIndex }, i) => (
            <motion.div key={originalIndex} variants={fadeUp}>
              <Card className={`shadow-sm border-l-4 ${accentClass}`}>
                <CardContent className="p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-sm font-bold text-muted-foreground w-5">{i + 1}.</span>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${levelStyles[p.level]}`}>
                        {p.level}
                      </span>
                    </div>
                    <p className="font-mono text-sm font-semibold leading-relaxed">{p.question}</p>
                  </div>

                  <button
                    onClick={() => toggle(originalIndex)}
                    className="flex items-center gap-2 text-xs font-semibold text-primary hover:text-primary/80 transition-colors mt-1 ml-8"
                  >
                    {shown[originalIndex] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    {shown[originalIndex] ? "Hide Answer" : "Show Answer"}
                  </button>

                  {shown[originalIndex] && (
                    <div className="ml-8 mt-3 bg-muted/40 rounded-lg p-4 border font-mono text-xs space-y-1.5">
                      {p.steps.map((step, si) => (
                        <p key={si} className={si === p.steps.length - 1 ? "font-bold text-primary pt-1" : "text-muted-foreground"}>
                          {step}
                        </p>
                      ))}
                      <p className="font-bold text-primary border-t pt-2 mt-1">Answer: {p.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      )}
    </section>
  );
}
