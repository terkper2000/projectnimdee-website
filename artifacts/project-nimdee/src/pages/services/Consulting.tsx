import React, { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { ServiceNav } from "@/components/ServiceNav";
import { Button } from "@/components/ui/button";
import {
  Lightbulb,
  CheckCircle,
  Presentation,
  BrainCircuit,
  BookOpenCheck,
  Users
} from "lucide-react";

export default function Consulting() {
  useEffect(() => {
    document.title = "Educational Consulting | Project Nimdeɛ";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Consulting for educators, schools, and organizations on curriculum development, AI integration, and educational technology.");
    }
  }, []);

  return (
    <Layout>
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="relative py-24 md:py-32 bg-secondary overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.15),transparent_55%)]" aria-hidden="true" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <p className="text-primary font-semibold mb-3 uppercase tracking-widest text-sm">Consulting Services</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-secondary-foreground mb-6 leading-tight">
              Practical strategy.<br />
              <span className="text-primary">Thoughtful implementation.</span>
            </h1>
            <p className="text-secondary-foreground/80 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              Collaborative consulting for educators, schools, and community organizations seeking support with curriculum design, STEM programming, and AI integration.
            </p>
            <Button asChild size="lg" className="rounded-full px-8 py-6 text-base font-bold hover:scale-105 transition-transform">
              <Link href="/contact?service=Educational+Consulting">
                Discuss a Project
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <ServiceNav />

      {/* ── Expertise Areas ────────────────────────────────────── */}
      <section className="py-20 bg-background border-b">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Areas of Expertise
            </h2>
            <p className="text-muted-foreground text-base max-w-2xl mx-auto leading-relaxed">
              My approach bridges the gap between educational theory and realistic, day-to-day classroom implementation. I create resources and strategies that educators can actually use.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-border rounded-3xl p-8 bg-card flex flex-col items-start hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-6">
                <BrainCircuit className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-3">AI & Educational Technology</h3>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed flex-1">
                Guidance on integrating artificial intelligence and modern tools responsibly. From drafting acceptable-use policies to designing workshops that build AI literacy among staff and students.
              </p>
              <ul className="space-y-2 w-full">
                {["AI literacy workshops", "Prompt engineering for educators", "EdTech tool evaluation", "Responsible implementation"].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-border rounded-3xl p-8 bg-card flex flex-col items-start hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center mb-6">
                <BookOpenCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-3">Curriculum Development</h3>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed flex-1">
                Designing scope and sequences, assessment rubrics, and inclusive learning materials. Specializing in Mathematics, Science, and introductory STEM pathways.
              </p>
              <ul className="space-y-2 w-full">
                {["Resource creation", "Assessment design", "STEM program planning", "Accessibility reviews"].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle className="w-4 h-4 text-sky-600 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Approach ────────────────────────────────────────────── */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Users className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-serif text-3xl font-bold mb-6">A Collaborative Process</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Consulting projects are highly varied. Whether you need a one-hour strategy call to review a new curriculum initiative, or a month-long contract to build a custom assessment bank for your department, we start with a conversation to define clear deliverables and a firm quote.
          </p>
          <Button asChild size="lg" className="rounded-full px-8 text-base font-bold">
            <Link href="/contact?service=Educational+Consulting">Reach Out</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
