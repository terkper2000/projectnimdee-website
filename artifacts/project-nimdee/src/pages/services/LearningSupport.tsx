import React, { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { ServiceNav } from "@/components/ServiceNav";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Calculator,
  FlaskConical,
  Code2,
  Music,
  Target,
  ArrowRight,
  CheckCircle,
  Wifi,
  MapPin,
  Sparkles
} from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

export default function LearningSupport() {
  useEffect(() => {
    document.title = "Learning Support & Tutoring | Project Nimdeɛ";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Personalized tutoring in mathematics, science, computer science, and piano. Online and in-person options available.");
    }
  }, []);

  return (
    <Layout>
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="relative py-24 md:py-32 bg-secondary overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.15),transparent_55%)]" aria-hidden="true" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <p className="text-primary font-semibold mb-3 uppercase tracking-widest text-sm">Learning Support</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-secondary-foreground mb-6 leading-tight">
              Build confidence.<br />
              <span className="text-primary">Master the fundamentals.</span>
            </h1>
            <p className="text-secondary-foreground/80 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              Patient, individualized instruction in mathematics, science, introductory computer science, piano, and study skills. Designed to meet learners exactly where they are.
            </p>
            <Button asChild size="lg" className="rounded-full px-8 py-6 text-base font-bold hover:scale-105 transition-transform">
              <Link href="/contact?service=Tutoring+or+Lesson">
                Inquire About Tutoring
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <ServiceNav />

      {/* ── Delivery Formats ────────────────────────────────────── */}
      <section className="py-20 bg-background border-b">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Flexible Delivery Options
            </h2>
            <p className="text-muted-foreground text-base max-w-2xl mx-auto leading-relaxed">
              Sessions are available both online and in person, providing options to best fit your schedule and learning preferences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-border rounded-3xl p-8 bg-card flex flex-col items-start hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center mb-6">
                <Wifi className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-3">Online Sessions</h3>
              <p className="text-foreground font-semibold mb-4 text-xl">$40 <span className="text-sm font-normal text-muted-foreground">CAD / hour</span></p>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed flex-1">
                Conducted via reliable video conferencing with collaborative screen sharing. Ideal for busy schedules, computer science students, and learners outside the immediate service area.
              </p>
              <ul className="space-y-2 w-full">
                {["Digital whiteboard integration", "Session resource sharing", "No travel constraints", "Flexible scheduling"].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-border rounded-3xl p-8 bg-card flex flex-col items-start hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-3">In-Person Sessions</h3>
              <p className="text-foreground font-semibold mb-4 text-xl">$50 <span className="text-sm font-normal text-muted-foreground">CAD / hour</span></p>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed flex-1">
                Face-to-face instruction arranged at a suitable public location (such as a local library). Best for learners who benefit from direct engagement and physical materials.
              </p>
              <ul className="space-y-2 w-full">
                {["Direct, hands-on support", "Fewer digital distractions", "Great for younger learners", "Local service area only"].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle className="w-4 h-4 text-rose-600 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 text-xs text-muted-foreground bg-muted p-3 rounded-lg w-full">
                Note: A travel fee may apply if travel exceeds 15 kilometres. This is always confirmed prior to booking.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Subjects ────────────────────────────────────────────── */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Areas of Instruction
            </h2>
            <p className="text-muted-foreground text-base max-w-2xl leading-relaxed">
              Every learner is different. My goal is to provide clear, curriculum-aligned support that focuses on genuine understanding rather than memorization.
            </p>
          </div>

          <div className="space-y-12">
            {/* Subject 1 */}
            <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start pb-12 border-b">
              <div className="sticky top-40">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
                  <Calculator className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-2">Mathematics</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs font-semibold px-2.5 py-1 bg-amber-100 text-amber-800 rounded-full">Grades 7–12</span>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-amber-100 text-amber-800 rounded-full">Math 10C / 20-1 / 30-1</span>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-foreground leading-relaxed">
                  Personalized mathematics tutoring focused on building a strong foundation and robust problem-solving skills. Whether a student is struggling with algebra or seeking enrichment in advanced calculus, I help them understand the "why" behind the procedures.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I support the Alberta curriculum, as well as Singaporean and Chinese mathematics curricula, allowing me to draw on diverse strategies to explain complex concepts.
                </p>
                <ul className="grid sm:grid-cols-2 gap-2 mt-4">
                  {["Algebra & Numeracy", "Functions & Relations", "Geometry & Trigonometry", "Sequences & Series"].map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                      <ArrowRight className="w-3.5 h-3.5 text-amber-500" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Subject 2 */}
            <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start pb-12 border-b">
              <div className="sticky top-40">
                <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center mb-4">
                  <FlaskConical className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-2">Science & Biology</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs font-semibold px-2.5 py-1 bg-teal-100 text-teal-800 rounded-full">Grades 7–10</span>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-teal-100 text-teal-800 rounded-full">Biology 20 & 30</span>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-foreground leading-relaxed">
                  Science is about curiosity and inquiry. I help students interpret evidence, understand scientific models, and communicate their reasoning clearly. We break down complex biological systems and chemical reactions into manageable pieces.
                </p>
                <ul className="grid sm:grid-cols-2 gap-2 mt-4">
                  {["Scientific Inquiry", "Data Interpretation", "Human Systems", "Genetics & Ecology"].map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                      <ArrowRight className="w-3.5 h-3.5 text-teal-500" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Subject 3 */}
            <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start pb-12 border-b">
              <div className="sticky top-40">
                <div className="w-12 h-12 rounded-2xl bg-violet-100 text-violet-700 flex items-center justify-center mb-4">
                  <Code2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-2">Intro to Computer Science</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs font-semibold px-2.5 py-1 bg-violet-100 text-violet-800 rounded-full">Beginners</span>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-violet-100 text-violet-800 rounded-full">Python / Block-coding</span>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-foreground leading-relaxed">
                  A welcoming introduction to coding and computational thinking for absolute beginners. We focus on building logic, solving problems, and debugging code without the intimidation often associated with programming.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Online sessions are highly recommended for this subject, allowing us to screen-share and work through code collaboratively in real-time.
                </p>
              </div>
            </div>

            {/* Subject 4 */}
            <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start pb-12 border-b">
              <div className="sticky top-40">
                <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center mb-4">
                  <Music className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-2">Beginner Piano</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs font-semibold px-2.5 py-1 bg-rose-100 text-rose-800 rounded-full">All Ages</span>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-rose-100 text-rose-800 rounded-full">Beginners</span>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-foreground leading-relaxed">
                  Patient, encouraging instruction for children and adults starting their musical journey. We cover reading notes, rhythm, basic theory, and proper hand placement, progressing at a pace that keeps learning joyful.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  For online piano lessons, learners must have access to a keyboard or piano and be able to position a camera so their hands are visible.
                </p>
              </div>
            </div>

            {/* Subject 5 */}
            <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
              <div className="sticky top-40">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-2">Study Skills Coaching</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-full">Organization</span>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-full">School Readiness</span>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-foreground leading-relaxed">
                  Academic coaching focused on <em>how</em> to learn. We work on building practical routines, managing time, preparing for exams, and breaking large assignments into manageable steps so students can become independent, confident learners.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-background border-t">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">Ready to start?</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Contact me to discuss your learner's needs, confirm availability, and set up an initial conversation.
          </p>
          <Button asChild size="lg" className="rounded-full px-8 text-base font-bold">
            <Link href="/contact?service=Tutoring+or+Lesson">Inquire Now</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
