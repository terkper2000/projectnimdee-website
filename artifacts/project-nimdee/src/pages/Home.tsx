import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import {
  BookOpen,
  GraduationCap,
  Rocket,
  Lightbulb,
  Calculator,
  Microscope,
  Code,
  BookMarked,
  Keyboard,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

const fadeUp = {
  hidden: { y: 32, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const heroWordContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.35 } },
};

const heroWord = {
  hidden: { y: 90, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.75, ease: "easeOut" as const },
  },
};

export default function Home() {
  const features = [
    {
      num: "01",
      title: "Student-Centred Learning",
      description:
        "Resources designed to support real classrooms, meaningful practice, and stronger understanding.",
      icon: <GraduationCap className="h-6 w-6" />,
      iconClass: "text-primary bg-primary/10",
    },
    {
      num: "02",
      title: "Curriculum-Aligned Resources",
      description:
        "Materials built around Alberta outcomes, clear learning goals, and classroom use.",
      icon: <BookOpen className="h-6 w-6" />,
      iconClass: "text-secondary bg-secondary/10",
    },
    {
      num: "03",
      title: "Accessible STEM Tools",
      description:
        "Interactive tools and supports that help make learning more approachable and engaging.",
      icon: <Rocket className="h-6 w-6" />,
      iconClass: "text-primary bg-primary/10",
    },
    {
      num: "04",
      title: "Education for Impact",
      description:
        "A growing vision rooted in knowledge, opportunity, and the belief that education can open doors.",
      icon: <Lightbulb className="h-6 w-6" />,
      iconClass: "text-secondary bg-secondary/10",
    },
  ];

  const highlights = [
    { value: "6+", label: "Subject Areas" },
    { value: "Alberta", label: "Curriculum Aligned" },
    { value: "7–12", label: "Grades Covered" },
  ];

  const learningAreas = [
    {
      title: "Mathematics",
      sub: "Grades 7–12",
      icon: <Calculator className="h-8 w-8 text-primary" />,
      colorClass: "bg-primary/5 border-primary/20 hover:bg-primary/10",
    },
    {
      title: "Science",
      sub: "Biology, Chemistry & more",
      icon: <Microscope className="h-8 w-8 text-secondary" />,
      colorClass: "bg-secondary/5 border-secondary/20 hover:bg-secondary/10",
    },
    {
      title: "Computer Science",
      sub: "Coding & Logic",
      icon: <Code className="h-8 w-8 text-primary" />,
      colorClass: "bg-primary/5 border-primary/20 hover:bg-primary/10",
    },
    {
      title: "Robotics & Coding",
      sub: "Think Like a Machine",
      icon: <Keyboard className="h-8 w-8 text-secondary" />,
      colorClass: "bg-secondary/5 border-secondary/20 hover:bg-secondary/10",
    },
    {
      title: "Study Tools",
      sub: "Flashcards & Quizzes",
      icon: <BookMarked className="h-8 w-8 text-primary" />,
      colorClass: "bg-primary/5 border-primary/20 hover:bg-primary/10",
    },
  ];

  return (
    <Layout>
      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex flex-col justify-center overflow-hidden"
        style={{ background: "hsl(180 50% 12%)" }}
      >
        {/* Floating amber orb */}
        <motion.div
          className="absolute top-24 right-0 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none"
          style={{ background: "hsl(35 90% 55% / 0.1)" }}
          animate={{ scale: [1, 1.18, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Floating teal orb */}
        <motion.div
          className="absolute bottom-20 left-0 w-[450px] h-[450px] rounded-full blur-3xl pointer-events-none"
          style={{ background: "hsl(180 60% 45% / 0.13)" }}
          animate={{ scale: [1, 1.22, 1], opacity: [0.4, 0.65, 0.4] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, hsl(40 33% 98% / 0.6) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />

        <div className="container mx-auto px-4 md:px-6 relative z-10 pt-32 pb-28">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mb-8"
          >
            <span
              className="inline-block text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full border"
              style={{
                color: "hsl(35 90% 65%)",
                borderColor: "hsl(35 90% 55% / 0.35)",
                background: "hsl(35 90% 55% / 0.1)",
              }}
            >
              Alberta Curriculum · STEM Education
            </span>
          </motion.div>

          {/* Animated title */}
          <div className="mb-6">
            <motion.h1
              className="text-6xl md:text-8xl lg:text-[7rem] font-serif font-bold leading-[0.92] tracking-tight"
              style={{ color: "hsl(40 33% 97%)" }}
              variants={heroWordContainer}
              initial="hidden"
              animate="visible"
            >
              {"Project Nimdeɛ".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  variants={heroWord}
                  style={{ display: "inline-block", marginRight: "0.22em" }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          {/* Amber accent bar */}
          <motion.div
            className="h-[3px] w-20 rounded-full mb-8"
            style={{ background: "hsl(35 90% 55%)" }}
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 1.0, ease: "easeOut" }}
          />

          <motion.p
            className="text-xl md:text-2xl font-medium max-w-2xl mb-4 leading-snug"
            style={{ color: "hsl(40 33% 97% / 0.85)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.05 }}
          >
            Teaching, tools, and thoughtful STEM learning.
          </motion.p>

          <motion.p
            className="text-base md:text-lg leading-relaxed max-w-lg mb-12"
            style={{ color: "hsl(40 33% 97% / 0.5)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.15 }}
          >
            A digital home for curriculum-aligned resources, interactive STEM
            learning, and educational innovation rooted in accessibility,
            creativity, and opportunity.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.25 }}
          >
            <Button
              asChild
              size="lg"
              className="text-base px-8 py-6 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform"
              style={{
                background: "hsl(35 90% 50%)",
                color: "hsl(40 33% 98%)",
                border: "none",
              }}
              data-testid="button-hero-explore"
            >
              <Link href="/resources">Explore Resources</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base px-8 py-6 rounded-full font-semibold hover:scale-105 transition-transform"
              style={{
                borderColor: "hsl(40 33% 97% / 0.25)",
                color: "hsl(40 33% 97%)",
                background: "transparent",
              }}
              data-testid="button-hero-about"
            >
              <Link href="/about">About the Vision</Link>
            </Button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ color: "hsl(40 33% 97% / 0.35)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <span className="text-[10px] tracking-[0.25em] uppercase font-semibold">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          >
            <ChevronDown className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── HIGHLIGHTS STRIP ── */}
      <section style={{ background: "hsl(35 90% 45%)" }} className="py-10">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="flex flex-wrap justify-center gap-10 md:gap-20"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {highlights.map((h, i) => (
              <motion.div key={i} variants={fadeUp} className="text-center">
                <div
                  className="text-5xl md:text-6xl font-serif font-bold"
                  style={{ color: "hsl(40 33% 98%)" }}
                >
                  {h.value}
                </div>
                <div
                  className="text-xs font-bold uppercase tracking-[0.18em] mt-2"
                  style={{ color: "hsl(40 33% 98% / 0.65)" }}
                >
                  {h.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <motion.p
              className="text-xs font-bold tracking-[0.22em] uppercase text-primary mb-5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Why Project Nimdeɛ
            </motion.p>
            <AnimatedHeading
              as="h2"
              className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6"
            >
              Built for the Classroom. Designed for Students.
            </AnimatedHeading>
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
            >
              Every resource, tool, and piece of content here exists to make
              learning more accessible, engaging, and meaningful.
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {features.map((f, i) => (
              <motion.div key={i} variants={fadeUp}>
                <div className="group p-8 rounded-2xl border border-border bg-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex gap-6">
                  <div className="flex-shrink-0">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${f.iconClass}`}
                    >
                      {f.icon}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-muted-foreground/50 tracking-widest mb-2">
                      {f.num}
                    </div>
                    <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                      {f.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── MISSION PULL QUOTE ── */}
      <section
        className="py-28 overflow-hidden relative"
        style={{ background: "hsl(180 50% 14%)" }}
      >
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <motion.div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
          style={{ background: "hsl(35 90% 55% / 0.08)" }}
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.blockquote
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <div
              className="text-7xl font-serif leading-none mb-2 select-none"
              style={{ color: "hsl(35 90% 55%)" }}
            >
              "
            </div>
            <p
              className="text-2xl md:text-3xl lg:text-4xl font-serif italic leading-relaxed"
              style={{ color: "hsl(40 33% 97%)" }}
            >
              Education can transform lives, create opportunity, and help
              students see what is possible for their future.
            </p>
            <motion.div
              className="mt-10 flex items-center justify-center gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div
                className="h-px w-10"
                style={{ background: "hsl(35 90% 55%)" }}
              />
              <span
                className="text-xs font-bold tracking-[0.2em] uppercase"
                style={{ color: "hsl(40 33% 97% / 0.55)" }}
              >
                Hannah Terkper · Founder, Project Nimdeɛ
              </span>
              <div
                className="h-px w-10"
                style={{ background: "hsl(35 90% 55%)" }}
              />
            </motion.div>
          </motion.blockquote>
        </div>
      </section>

      {/* ── LEARNING AREAS ── */}
      <section className="py-28 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <motion.p
              className="text-xs font-bold tracking-[0.22em] uppercase text-primary mb-5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Explore
            </motion.p>
            <AnimatedHeading
              as="h2"
              className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6"
            >
              Learning Areas
            </AnimatedHeading>
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Curated materials and interactive tools designed to help students
              master core concepts and build lasting confidence.
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {learningAreas.map((area, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Link href="/resources">
                  <div
                    className={`group cursor-pointer border rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${area.colorClass}`}
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div>{area.icon}</div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-foreground mb-1">
                      {area.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{area.sub}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section
        className="py-28 relative overflow-hidden"
        style={{ background: "hsl(35 90% 48%)" }}
      >
        <motion.div
          className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none"
          style={{ background: "hsl(35 90% 30% / 0.4)" }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -top-24 -right-24 w-[350px] h-[350px] rounded-full blur-3xl pointer-events-none"
          style={{ background: "hsl(40 90% 70% / 0.25)" }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight"
              style={{ color: "hsl(40 33% 98%)" }}
            >
              Ready to Explore?
            </h2>
            <p
              className="text-lg md:text-xl mb-10 max-w-xl mx-auto"
              style={{ color: "hsl(40 33% 98% / 0.75)" }}
            >
              Browse resources, study tools, and curriculum-aligned content —
              all in one place, all free to access.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="text-base px-10 py-6 rounded-full font-bold hover:scale-105 transition-transform shadow-xl"
                style={{
                  background: "hsl(40 33% 98%)",
                  color: "hsl(35 90% 40%)",
                  border: "none",
                }}
              >
                <Link href="/resources">Browse All Resources</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-base px-10 py-6 rounded-full font-bold hover:scale-105 transition-transform"
                style={{
                  borderColor: "hsl(40 33% 98% / 0.3)",
                  color: "hsl(40 33% 98%)",
                  background: "transparent",
                }}
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
