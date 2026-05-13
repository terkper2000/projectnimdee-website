import { useState } from "react";
import React from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, Microscope, Code, Cpu } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
};

type Subject = "all" | "math" | "science" | "cs" | "robotics";

const resources = [
  {
    subject: "math" as const,
    title: "Grade 7 Math",
    description: "Number sense, fractions, geometry, and early algebraic thinking aligned to Alberta curriculum outcomes.",
    available: false,
  },
  {
    subject: "math" as const,
    title: "Grade 8 Math",
    description: "Integers, linear relations, 3D geometry, and probability concepts for Grade 8 learners.",
    available: false,
  },
  {
    subject: "math" as const,
    title: "Grade 9 Math",
    description: "Polynomials, linear equations, circle geometry, and proportional reasoning.",
    available: false,
  },
  {
    subject: "math" as const,
    title: "Math 10C",
    description: "Combined grade 10 mathematics covering measurement, algebra, and relations & functions.",
    available: false,
  },
  {
    subject: "math" as const,
    title: "Math 20-1",
    description: "Advanced functions, trigonometry, and sequences for Grade 11 academic stream.",
    available: false,
  },
  {
    subject: "science" as const,
    title: "Junior High Science",
    description: "Life science, physical science, and earth science concepts for Grades 7–9 learners.",
    available: false,
  },
  {
    subject: "science" as const,
    title: "Biology",
    description: "Cell biology, genetics, ecosystems, and human body systems for senior high students.",
    available: false,
  },
  {
    subject: "science" as const,
    title: "Chemistry",
    description: "Matter, chemical bonding, stoichiometry, and reactions for senior high learners.",
    available: false,
  },
  {
    subject: "cs" as const,
    title: "Python Programming",
    description: "Introduction to Python: variables, loops, functions, and problem-solving for beginners.",
    available: false,
  },
  {
    subject: "cs" as const,
    title: "Web Design",
    description: "HTML, CSS, and introductory JavaScript for building basic web pages and interfaces.",
    available: false,
  },
  {
    subject: "cs" as const,
    title: "Game Design",
    description: "Principles of game design, interactive storytelling, and beginner coding for game creation.",
    available: false,
  },
  {
    subject: "robotics" as const,
    title: "Robotics",
    description: "Hands-on robotics concepts, sensors, actuators, and block-based to text-based coding progressions.",
    available: false,
  },
];

const subjects = [
  { key: "all" as Subject, label: "All Resources", icon: null },
  { key: "math" as Subject, label: "Mathematics", icon: <Calculator className="w-4 h-4" /> },
  { key: "science" as Subject, label: "Science", icon: <Microscope className="w-4 h-4" /> },
  { key: "cs" as Subject, label: "Computer Science", icon: <Code className="w-4 h-4" /> },
  { key: "robotics" as Subject, label: "Robotics & Coding", icon: <Cpu className="w-4 h-4" /> },
];

const subjectMeta: Record<string, { icon: React.ReactElement; color: string }> = {
  math: { icon: <Calculator className="w-5 h-5" />, color: "bg-amber-100 text-amber-700" },
  science: { icon: <Microscope className="w-5 h-5" />, color: "bg-teal-100 text-teal-700" },
  cs: { icon: <Code className="w-5 h-5" />, color: "bg-indigo-100 text-indigo-700" },
  robotics: { icon: <Cpu className="w-5 h-5" />, color: "bg-orange-100 text-orange-700" },
};

export default function Resources() {
  const [activeSubject, setActiveSubject] = useState<Subject>("all");

  const filtered = activeSubject === "all" ? resources : resources.filter((r) => r.subject === activeSubject);

  return (
    <Layout>
      {/* Header */}
      <section className="relative py-24 md:py-32 bg-secondary overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.18),transparent_55%)]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="text-primary font-semibold mb-3 uppercase tracking-widest text-sm">Learning Materials</p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-secondary-foreground mb-6 leading-tight">
              Resources
            </h1>
            <p className="text-secondary-foreground/80 text-xl leading-relaxed">
              Curriculum-aligned materials and tools for students in Grades 7–12, organized by subject and learning goal.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-20 z-40 bg-background border-b py-4 shadow-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap gap-2" data-testid="filter-subjects">
            {subjects.map((s) => (
              <button
                key={s.key}
                onClick={() => setActiveSubject(s.key)}
                data-testid={`button-filter-${s.key}`}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeSubject === s.key
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {s.icon}
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Cards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            key={activeSubject}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((resource, i) => {
              const meta = subjectMeta[resource.subject];
              return (
                <motion.div key={i} variants={itemVariants}>
                  <Card
                    className="h-full border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
                    data-testid={`card-resource-${i}`}
                  >
                    <CardHeader>
                      <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full w-fit text-xs font-medium mb-3 ${meta.color}`}>
                        {meta.icon}
                        <span className="capitalize">{resource.subject === "cs" ? "Computer Science" : resource.subject === "robotics" ? "Robotics & Coding" : resource.subject}</span>
                      </div>
                      <CardTitle className="font-serif text-xl group-hover:text-primary transition-colors">
                        {resource.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                      <p className="text-muted-foreground leading-relaxed text-sm flex-1">{resource.description}</p>
                      <Button
                        variant={resource.available ? "default" : "outline"}
                        className={resource.available ? "" : "border-dashed text-muted-foreground"}
                        disabled={!resource.available}
                        data-testid={`button-resource-${i}`}
                      >
                        {resource.available ? "View Resources" : "Coming Soon"}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
