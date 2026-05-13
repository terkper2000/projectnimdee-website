import { Link } from "wouter";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Cpu, Globe, Users, Heart, Info } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.55, ease: "easeOut" as const } },
};

const goals = [
  {
    icon: <BookOpen className="w-7 h-7 text-primary" />,
    title: "Student Learning Resources",
    description: "Developing high-quality, curriculum-aligned materials that are freely accessible to students who need them most.",
  },
  {
    icon: <Cpu className="w-7 h-7 text-primary" />,
    title: "STEM & Robotics Access",
    description: "Expanding access to hands-on STEM experiences and robotics programming for students in underserved contexts.",
  },
  {
    icon: <Globe className="w-7 h-7 text-primary" />,
    title: "Educational Outreach",
    description: "Building community connections that bring learning opportunities to students beyond the traditional classroom.",
  },
  {
    icon: <Users className="w-7 h-7 text-primary" />,
    title: "Mentorship Opportunities",
    description: "Creating pathways for students — especially those from equity-deserving communities — to find guidance, support, and inspiration.",
  },
  {
    icon: <Heart className="w-7 h-7 text-primary" />,
    title: "Support for Underserved Communities",
    description: "Prioritizing learners and communities that have historically had less access to enriched educational programming and STEM pathways.",
  },
];

export default function Support() {
  return (
    <Layout>
      {/* Header */}
      <section className="relative py-24 md:py-32 bg-secondary overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(var(--primary)/0.20),transparent_60%)]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="text-primary font-semibold mb-3 uppercase tracking-widest text-sm">Get Involved</p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-secondary-foreground mb-6 leading-tight">
              Support the Mission
            </h1>
            <p className="text-secondary-foreground/80 text-xl leading-relaxed">
              Project Nimdeɛ is building toward something larger — a future where every student has access to meaningful, high-quality learning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Project Nimdeɛ */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary font-semibold mb-3 uppercase tracking-widest text-sm">Why It Matters</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8 leading-tight">
              Why Project Nimdeɛ?
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
              <p>
                Access to quality education is not equally distributed. Many students — particularly those from underserved or equity-deserving communities — face significant barriers to rich STEM experiences, mentorship, and the kinds of learning opportunities that can change the trajectory of a life.
              </p>
              <p>
                Project Nimdeɛ exists because of a belief that education is one of the most powerful forces for individual and community transformation. It was built to be a digital home for learning — one that prioritizes accessibility, creativity, and genuine impact over prestige or exclusivity.
              </p>
              <p>
                The long-term vision is to grow from a digital resource platform into a broader educational initiative: one that supports students through STEM engagement, mentorship, outreach programming, and community-centered learning that meets people where they are.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-primary font-semibold mb-3 uppercase tracking-widest text-sm">Looking Forward</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Future Goals</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              These are the areas where Project Nimdeɛ aims to grow and create lasting impact.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {goals.map((goal, i) => (
              <motion.div key={i} variants={itemVariants}>
                <Card className="h-full border-none shadow-md hover:shadow-lg transition-all hover:-translate-y-1 duration-300" data-testid={`card-goal-${i}`}>
                  <CardContent className="p-6">
                    <div className="p-3 rounded-xl bg-primary/10 w-fit mb-5">{goal.icon}</div>
                    <h3 className="font-serif font-bold text-xl text-foreground mb-3">{goal.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{goal.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Support Notice */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border border-primary/20 shadow-sm bg-primary/5">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 shrink-0 mt-1">
                    <Info className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xl text-foreground mb-3">A Note on Support</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Project Nimdeɛ is currently in active development and is not yet a registered nonprofit or charitable organization. At this stage, formal donation systems and fundraising initiatives are not yet in place.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      These structures will be established thoughtfully and transparently as the project grows. When formal channels for supporting the mission become available, they will be clearly communicated here. In the meantime, the best way to support the vision is to connect, share, and reach out directly.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-10 text-center">
              <h3 className="font-serif font-bold text-2xl text-foreground mb-4">Interested in Supporting the Vision?</h3>
              <p className="text-muted-foreground mb-8 text-lg">
                Whether you want to collaborate, share ideas, or simply learn more about where this is going — reach out.
              </p>
              <Button asChild size="lg" className="px-10 py-6 rounded-full text-lg hover:scale-105 transition-transform" data-testid="button-contact-support">
                <Link href="/contact">Contact About Supporting the Vision</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
