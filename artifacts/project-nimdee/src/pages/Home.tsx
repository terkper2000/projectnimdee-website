import React from "react";
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
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.4 } },
};

const heroWord = {
  hidden: { y: 90, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.75, ease: "easeOut" as const },
  },
};

const particles = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  left: `${(i * 4.7 + 2) % 94}%`,
  top: `${(i * 6.3 + 5) % 88}%`,
  size: (i % 3) * 0.8 + 1.2,
  duration: 7 + (i % 6) * 2.5,
  delay: (i % 7) * 0.9,
  yRange: (i % 4) * 8 + 10,
}));

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
        style={{ background: "hsl(180 50% 11%)" }}
      >
        {/* Slowly rotating conic gradient layer */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "conic-gradient(from 0deg at 65% 45%, transparent 0deg, hsl(35 90% 55% / 0.07) 55deg, transparent 110deg, hsl(180 60% 50% / 0.09) 190deg, transparent 250deg, hsl(35 80% 65% / 0.06) 310deg, transparent 360deg)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />

        {/* Orb 1 — amber, drifts top-right */}
        <motion.div
          className="absolute rounded-full blur-[110px] pointer-events-none"
          style={{
            width: 560,
            height: 560,
            top: "5%",
            right: "8%",
            background: "hsl(35 90% 55% / 0.18)",
          }}
          animate={{
            x: [0, 70, 140, 80, 0, -50, 0],
            y: [0, -50, 20, 80, 50, -30, 0],
          }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Orb 2 — teal, drifts bottom-left */}
        <motion.div
          className="absolute rounded-full blur-[130px] pointer-events-none"
          style={{
            width: 480,
            height: 480,
            bottom: "10%",
            left: "2%",
            background: "hsl(180 65% 45% / 0.2)",
          }}
          animate={{
            x: [0, -70, 30, 90, 0],
            y: [0, 50, 100, 30, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
        />

        {/* Orb 3 — warm amber, centre, drifts diagonally */}
        <motion.div
          className="absolute rounded-full blur-[90px] pointer-events-none"
          style={{
            width: 320,
            height: 320,
            top: "38%",
            left: "45%",
            background: "hsl(40 80% 60% / 0.11)",
          }}
          animate={{
            x: [0, 100, -60, 0],
            y: [0, -80, 50, 0],
            scale: [1, 1.3, 0.85, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 10,
          }}
        />

        {/* Orb 4 — teal accent, top-left */}
        <motion.div
          className="absolute rounded-full blur-[80px] pointer-events-none"
          style={{
            width: 240,
            height: 240,
            top: "20%",
            left: "15%",
            background: "hsl(180 50% 60% / 0.1)",
          }}
          animate={{
            x: [0, -40, 60, 0],
            y: [0, 60, -40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Floating particles */}
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              background: "hsl(40 33% 97% / 0.25)",
            }}
            animate={{
              y: [0, -p.yRange, 0, p.yRange * 0.6, 0],
              opacity: [0.15, 0.55, 0.15, 0.45, 0.15],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
          />
        ))}

        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, hsl(40 33% 98% / 0.7) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />

        {/* Content */}
        <div className="container mx-auto px-4 md:px-6 relative z-10 pt-32 pb-28">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mb-8"
          >
            <span
              className="inline-block text-xs font-bold tracking-[0.22em] uppercase px-4 py-2 rounded-full border"
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
            transition={{ duration: 0.7, delay: 1.05, ease: "easeOut" }}
          />

          <motion.p
            className="text-xl md:text-2xl font-medium max-w-2xl mb-4 leading-snug"
            style={{ color: "hsl(40 33% 97% / 0.85)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            Teaching, tools, and thoughtful STEM learning.
          </motion.p>

          <motion.p
            className="text-base md:text-lg leading-relaxed max-w-lg mb-12"
            style={{ color: "hsl(40 33% 97% / 0.48)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            A digital home for curriculum-aligned resources, interactive STEM
            learning, and educational innovation rooted in accessibility,
            creativity, and opportunity.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
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

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ color: "hsl(40 33% 97% / 0.3)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.1 }}
        >
          <span className="text-[10px] tracking-[0.28em] uppercase font-semibold">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.7, repeat: Infinity }}
          >
            <ChevronDown className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-28 bg-background relative overflow-hidden">
        {/* Subtle tinted corner */}
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-30"
          style={{ background: "hsl(35 90% 55% / 0.06)" }}
        />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
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
        style={{ background: "hsl(180 50% 13%)" }}
      >
        {/* Moving orbs in the quote section too */}
        <motion.div
          className="absolute rounded-full blur-[100px] pointer-events-none"
          style={{
            width: 400,
            height: 400,
            top: "-10%",
            right: "-5%",
            background: "hsl(35 90% 55% / 0.1)",
          }}
          animate={{ x: [0, 40, -20, 0], y: [0, 30, -40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute rounded-full blur-[80px] pointer-events-none"
          style={{
            width: 300,
            height: 300,
            bottom: "-5%",
            left: "10%",
            background: "hsl(180 60% 50% / 0.12)",
          }}
          animate={{ x: [0, -50, 30, 0], y: [0, -30, 50, 0] }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6,
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
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
                style={{ color: "hsl(40 33% 97% / 0.5)" }}
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
      <section className="py-28 bg-muted/30 relative overflow-hidden">
        <div
          className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-20"
          style={{ background: "hsl(180 50% 40% / 0.1)" }}
        />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
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
        style={{ background: "hsl(35 90% 47%)" }}
      >
        <motion.div
          className="absolute rounded-full blur-3xl pointer-events-none"
          style={{
            width: 500,
            height: 500,
            bottom: "-30%",
            left: "-10%",
            background: "hsl(35 90% 30% / 0.45)",
          }}
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute rounded-full blur-3xl pointer-events-none"
          style={{
            width: 400,
            height: 400,
            top: "-20%",
            right: "-5%",
            background: "hsl(40 90% 70% / 0.3)",
          }}
          animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
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
                  color: "hsl(35 90% 38%)",
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
