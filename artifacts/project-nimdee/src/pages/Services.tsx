import { Link } from "wouter";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  BookOpen, FlaskConical, BrainCircuit, Music, Briefcase,
  ArrowRight, CheckCircle, Clock, Users, MessageSquare, Star, ChevronRight,
} from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const services = [
  {
    icon: BookOpen,
    title: "Academic Tutoring",
    headline: "One-on-one support that builds real understanding.",
    description:
      "Tutoring tailored to individual student needs — not just reteaching what didn't land in class. Sessions focus on building genuine understanding, closing gaps, and helping students feel confident and prepared for tests, assignments, and exams.",
    subjects: ["Math 7–10C, Math 20-1", "Science 7–10, Biology 20/30", "Chemistry 20/30"],
    tags: ["Grades 7–12", "Math", "Science"],
    colour: "amber",
    details: [
      "Personalized to learning style and pace",
      "Homework help and exam preparation",
      "Concept-first approach — not shortcut-dependent",
      "Progress tracking and honest feedback",
    ],
  },
  {
    icon: FlaskConical,
    title: "STEM Support",
    headline: "Targeted help for the hard parts.",
    description:
      "Focused sessions for students working through challenging STEM concepts. Whether it's a unit that didn't click, an upcoming test, or a cumulative gap built over several years — sessions are designed to get to the root of the confusion, not just patch over it.",
    subjects: ["Alberta Science curriculum", "Biology 20/30 deep dives", "Math enrichment"],
    tags: ["Science", "Technology", "Engineering", "Math"],
    colour: "teal",
    details: [
      "Root-cause problem solving — not surface review",
      "Practical lab and problem-solving techniques",
      "Works alongside school curriculum",
      "Alberta curriculum-aligned",
    ],
  },
  {
    icon: BrainCircuit,
    title: "Study Coaching",
    headline: "Learn how to learn, not just what to learn.",
    description:
      "Many students struggle not because the content is too hard, but because nobody has ever explicitly taught them how to study effectively. This service addresses that — building the habits, routines, and strategies that carry a student through every subject, every year.",
    subjects: ["Study systems and routines", "Time management and planning", "Test anxiety support"],
    tags: ["Study Skills", "Organization", "All Grades"],
    colour: "violet",
    details: [
      "Customized study schedules and systems",
      "Active recall and spaced repetition techniques",
      "Managing academic stress and test anxiety",
      "Works for any subject or grade level",
    ],
  },
  {
    icon: Music,
    title: "Beginner Piano Lessons",
    headline: "Music education for absolute beginners.",
    description:
      "Introductory piano instruction for learners of all ages with no prior experience. Lessons are patient, structured, and joyful — focused on building foundational technique, reading music, and developing a genuine love of playing at a pace that works for each student.",
    subjects: ["Note reading and basic theory", "Proper technique and posture", "Simple repertoire and songs"],
    tags: ["Beginners", "All Ages", "Music"],
    colour: "rose",
    details: [
      "No prior experience required",
      "All ages welcome",
      "Supportive, patient teaching style",
      "Progress at your own pace",
    ],
  },
  {
    icon: Briefcase,
    title: "Educational Consulting",
    headline: "Strategic guidance for educators and organizations.",
    description:
      "Professional consulting for educators, schools, and organizations interested in curriculum design, instructional technology integration, AI in education, or building more accessible and effective learning programs. Brings a practical, student-centred lens to every conversation.",
    subjects: ["Curriculum design and review", "AI tools in the classroom", "Instructional technology strategy"],
    tags: ["Educators", "Schools", "Organizations"],
    colour: "teal",
    details: [
      "Practical, implementable recommendations",
      "Equity and accessibility-focused lens",
      "AI and EdTech integration guidance",
      "Collaborative, not prescriptive approach",
    ],
  },
];

const colourMap: Record<string, { bg: string; border: string; icon: string; tag: string; check: string }> = {
  amber:  { bg: "bg-amber-50",  border: "border-amber-200",  icon: "text-amber-600",  tag: "bg-amber-100 text-amber-800",  check: "text-amber-600" },
  teal:   { bg: "bg-teal-50",   border: "border-teal-200",   icon: "text-teal-600",   tag: "bg-teal-100 text-teal-800",   check: "text-teal-600" },
  violet: { bg: "bg-violet-50", border: "border-violet-200", icon: "text-violet-600", tag: "bg-violet-100 text-violet-800", check: "text-violet-600" },
  rose:   { bg: "bg-rose-50",   border: "border-rose-200",   icon: "text-rose-500",   tag: "bg-rose-100 text-rose-800",   check: "text-rose-500" },
};

const process = [
  { icon: MessageSquare, step: "01", title: "Reach out", desc: "Send a message through the Contact page with your name, grade or role, subject, and what you're looking for." },
  { icon: Users, step: "02", title: "Quick intro", desc: "A short conversation to understand your specific needs and confirm it's a good fit for both of us." },
  { icon: Clock, step: "03", title: "Scheduling", desc: "We find a time that works for your schedule. Sessions are held online via video call." },
  { icon: Star, step: "04", title: "Ongoing support", desc: "Regular sessions tailored to your goals, with honest progress updates along the way." },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-secondary overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_left,hsl(var(--primary)/0.18),transparent_55%)]" />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom_right,hsl(35_90%_45%/0.08),transparent_60%)]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <p className="text-primary font-semibold mb-3 uppercase tracking-widest text-sm">Work With Hannah</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-secondary-foreground mb-6 leading-tight">
              Real support.<br />
              <span className="text-primary">Real results.</span>
            </h1>
            <p className="text-secondary-foreground/80 text-xl leading-relaxed mb-8">
              Personalized tutoring, study coaching, piano lessons, and consulting — offered alongside the broader educational mission of Project Nimdeɛ.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full px-8 py-6 text-base font-bold hover:scale-105 transition-transform group" data-testid="button-services-hero-contact">
                <Link href="/contact">
                  Get in touch <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 py-6 text-base font-medium bg-transparent border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
                <a href="#services">See all services</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="border-y bg-background py-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            {[
              { stat: "Grades 7–12", label: "Academic focus" },
              { stat: "All ages", label: "Piano lessons" },
              { stat: "1-on-1", label: "Every session" },
              { stat: "Online", label: "Video call sessions" },
              { stat: "Flexible", label: "Scheduling" },
            ].map((item) => (
              <div key={item.stat} className="text-center">
                <p className="font-serif font-bold text-xl text-foreground">{item.stat}</p>
                <p className="text-xs text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services list */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="space-y-8">
            {services.map((s, i) => {
              const c = colourMap[s.colour] ?? colourMap.teal;
              const Icon = s.icon;
              const isEven = i % 2 === 1;
              return (
                <motion.div key={s.title} variants={fadeUp}
                  className={`border-2 ${c.border} rounded-3xl overflow-hidden flex flex-col md:flex-row ${isEven ? "md:flex-row-reverse" : ""}`}
                  data-testid={`card-service-${i}`}>
                  {/* Accent panel */}
                  <div className={`${c.bg} p-8 md:p-10 flex flex-col justify-between md:w-80 shrink-0`}>
                    <div>
                      <div className={`p-3 rounded-xl bg-white/70 w-fit mb-4`}>
                        <Icon className={`w-7 h-7 ${c.icon}`} />
                      </div>
                      <h2 className="font-serif font-bold text-2xl text-foreground mb-2">{s.title}</h2>
                      <p className={`text-sm font-semibold ${c.icon} mb-5`}>{s.headline}</p>
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {s.tags.map((t) => (
                          <span key={t} className={`text-xs font-bold px-2.5 py-1 rounded-full ${c.tag}`}>{t}</span>
                        ))}
                      </div>
                    </div>
                    <Button asChild size="sm" className="rounded-full self-start font-bold">
                      <Link href="/contact">Get in touch <ChevronRight className="w-3.5 h-3.5 ml-1" /></Link>
                    </Button>
                  </div>

                  {/* Content panel */}
                  <div className="flex-1 bg-background p-8 md:p-10 flex flex-col gap-6">
                    <p className="text-muted-foreground leading-relaxed text-base">{s.description}</p>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">What's included</p>
                        <ul className="space-y-2">
                          {s.details.map((d) => (
                            <li key={d} className="flex items-start gap-2 text-sm text-foreground">
                              <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${c.check}`} />
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Topics covered</p>
                        <ul className="space-y-2">
                          {s.subjects.map((sub) => (
                            <li key={sub} className="flex items-start gap-2 text-sm text-foreground">
                              <ChevronRight className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${c.icon}`} />
                              {sub}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-muted/30 border-t">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Process</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">How it works</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Getting started is simple. There's no commitment until you're confident it's the right fit.
            </p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {process.map((p) => {
              const PIcon = p.icon;
              return (
                <motion.div key={p.step} variants={fadeUp} className="border bg-background rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
                  <p className="font-serif font-black text-4xl text-primary/20 mb-3">{p.step}</p>
                  <div className="flex justify-center mb-3">
                    <div className="p-2.5 rounded-xl bg-primary/10">
                      <PIcon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <p className="font-bold text-foreground mb-2">{p.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Testimonial / Note from Hannah */}
      <section className="py-16 bg-background border-t">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <motion.blockquote initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="border-l-4 border-primary pl-6">
            <p className="font-serif text-xl text-foreground leading-relaxed italic mb-4">
              "I believe every student can learn. Sometimes they just need someone patient enough to meet them where they are and find the approach that works for their brain."
            </p>
            <footer className="text-sm font-bold text-primary">— Hannah Terkper, Founder of Project Nimdeɛ</footer>
          </motion.blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-teal-800 text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-white">Ready to get started?</h2>
            <p className="text-teal-200 text-lg mb-8 leading-relaxed">
              All services are offered on an individual basis and tailored to you. Reach out with any questions about availability, scheduling, or which service is the right fit.
            </p>
            <Button asChild size="lg"
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-6 text-base font-bold hover:scale-105 transition-all group"
              data-testid="button-services-contact">
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
