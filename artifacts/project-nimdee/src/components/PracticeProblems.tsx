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

const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.07 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export default function PracticeProblems({ problems, accentClass = "border-l-primary" }: PracticeProblemsProps) {
  const [shown, setShown] = useState<Record<number, boolean>>({});

  const toggle = (i: number) => setShown((prev) => ({ ...prev, [i]: !prev[i] }));

  return (
    <section>
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-2xl md:text-3xl font-serif font-bold whitespace-nowrap">Practice Problems</h2>
        <div className="flex-1 h-px bg-border" />
        <span className="text-xs text-muted-foreground font-semibold whitespace-nowrap">{problems.length} questions</span>
      </div>

      <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mb-6 text-sm text-muted-foreground">
        Work through each question on paper first, then click <strong className="text-foreground">Show Answer</strong> to check your step-by-step solution.
      </div>

      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4">
        {problems.map((p, i) => (
          <motion.div key={i} variants={fadeUp}>
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
                  onClick={() => toggle(i)}
                  className="flex items-center gap-2 text-xs font-semibold text-primary hover:text-primary/80 transition-colors mt-1 ml-8"
                >
                  {shown[i] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  {shown[i] ? "Hide Answer" : "Show Answer"}
                </button>

                {shown[i] && (
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
    </section>
  );
}
