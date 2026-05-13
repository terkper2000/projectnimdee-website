import { Link } from "wouter";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, FlaskConical, BrainCircuit, Music, Briefcase, ArrowRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.55, ease: "easeOut" as const } },
};

const services = [
  {
    icon: <BookOpen className="w-8 h-8 text-primary" />,
    title: "Academic Tutoring",
    description:
      "One-on-one tutoring support tailored to individual student needs. Focused on building genuine understanding, confidence, and skills in core academic subjects including mathematics and science at the junior and senior high levels.",
    tags: ["Grades 7–12", "Math", "Science"],
  },
  {
    icon: <FlaskConical className="w-8 h-8 text-primary" />,
    title: "STEM Support",
    description:
      "Targeted support for students working through challenging STEM concepts. Sessions are designed to reinforce classroom learning, fill gaps in understanding, and help students approach difficult material with greater confidence.",
    tags: ["Science", "Technology", "Engineering", "Math"],
  },
  {
    icon: <BrainCircuit className="w-8 h-8 text-primary" />,
    title: "Study Coaching",
    description:
      "Developing effective study habits, time management strategies, and organizational systems for students who want to strengthen their approach to learning — not just their subject knowledge.",
    tags: ["Study Skills", "Organization", "All Grades"],
  },
  {
    icon: <Music className="w-8 h-8 text-primary" />,
    title: "Beginner Piano Lessons",
    description:
      "Introductory piano instruction for absolute beginners of all ages. Lessons focus on building foundational technique, reading music, and developing a genuine love of playing — at a pace that works for each student.",
    tags: ["Beginners", "All Ages", "Music"],
  },
  {
    icon: <Briefcase className="w-8 h-8 text-primary" />,
    title: "Educational Consulting",
    description:
      "Professional consulting for educators, schools, and organizations interested in curriculum design, instructional technology integration, AI in education, or building more accessible and effective learning programs.",
    tags: ["Educators", "Schools", "Organizations"],
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Header */}
      <section className="relative py-24 md:py-32 bg-secondary overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_left,hsl(var(--primary)/0.18),transparent_55%)]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="text-primary font-semibold mb-3 uppercase tracking-widest text-sm">Work With Hannah</p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-secondary-foreground mb-6 leading-tight">
              Additional Services
            </h1>
            <p className="text-secondary-foreground/80 text-xl leading-relaxed">
              Personalized support for students, families, and educators — offered alongside the broader educational mission of Project Nimdeɛ.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {services.map((service, i) => (
              <motion.div key={i} variants={itemVariants}>
                <Card
                  className="h-full border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                  data-testid={`card-service-${i}`}
                >
                  <CardHeader>
                    <div className="p-3 rounded-xl bg-primary/10 w-fit mb-2 group-hover:bg-primary/20 transition-colors">
                      {service.icon}
                    </div>
                    <CardTitle className="font-serif text-2xl group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag, ti) => (
                        <span
                          key={ti}
                          className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-5">
              Ready to Connect?
            </h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Contact for availability, scheduling, and additional information about any of these services.
            </p>
            <p className="text-muted-foreground mb-10">
              All services are offered on an individual basis and tailored to the specific needs of each student, family, or organization.
            </p>
            <Button asChild size="lg" className="px-10 py-6 rounded-full text-lg hover:scale-105 transition-transform group" data-testid="button-services-contact">
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
