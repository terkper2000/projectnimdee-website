import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Globe, Heart, Lightbulb } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export default function About() {
  return (
    <Layout>
      {/* Page Header */}
      <section className="relative py-24 md:py-32 bg-secondary overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom_left,hsl(var(--primary)/0.18),transparent_60%)]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="text-primary font-semibold mb-3 uppercase tracking-widest text-sm">About</p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-secondary-foreground mb-6 leading-tight">
              Rooted in Knowledge,<br /> Driven by Purpose
            </h1>
            <p className="text-secondary-foreground/80 text-xl leading-relaxed">
              A Ghanaian-Canadian educator, researcher, and lifelong learner dedicated to building accessible, meaningful STEM education.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Hannah */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Placeholder image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-2 lg:order-1"
            >
              <div
                className="relative rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/30 flex items-center justify-center"
                style={{ minHeight: "420px" }}
                data-testid="image-hannah-placeholder"
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                  <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                    <GraduationCap className="w-12 h-12 text-primary" />
                  </div>
                  <p className="text-muted-foreground font-medium text-lg">Hannah in the Classroom</p>
                  <p className="text-muted-foreground/60 text-sm mt-2">Photo coming soon</p>
                </div>
                {/* Decorative dots */}
                <div className="absolute top-6 right-6 grid grid-cols-3 gap-2">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-primary/30" />
                  ))}
                </div>
                <div className="absolute bottom-6 left-6 grid grid-cols-3 gap-2">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-secondary/40" />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Bio text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-1 lg:order-2"
            >
              <p className="text-primary font-semibold mb-3 uppercase tracking-widest text-sm">About Hannah</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8 leading-tight">
                Hannah Terkper
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
                <p>
                  Hi! I'm Hannah Terkper, a Ghanaian-Canadian STEM educator based in Edmonton. My work is rooted in the belief that education can transform lives, create opportunity, and help students see what is possible for their future.
                </p>
                <p>
                  I hold a Bachelor of Education with a major in Biological Sciences, a minor in Mathematics, and a certification in Sustainability. I recently completed my Master of Education in Emerging Technologies, where my work focused on artificial intelligence, instructional design, digital curriculum development, and data-informed instructional improvement.
                </p>
                <p>
                  As an educator, I have taught mathematics, science, computer science, robotics, and STEM-focused programming across Grades 7–12. I am passionate about creating accessible and meaningful learning experiences that help students build confidence and deepen their understanding.
                </p>
                <p>
                  Project Nimdeɛ brings together my background in teaching, curriculum design, technology, and my Ghanaian identity. The word <em>Nimdeɛ</em> is connected to knowledge and wisdom, which reflects the heart of this project.
                </p>
                <p>
                  My long-term vision is to grow this platform into an education-focused initiative that provides high-quality learning resources, innovative STEM opportunities, and educational support that helps expand access to learning for students and communities.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: <GraduationCap className="w-7 h-7 text-primary" />, label: "Bachelor of Education", sub: "Biological Sciences Major, Mathematics Minor, Sustainability Certification" },
              { icon: <Lightbulb className="w-7 h-7 text-primary" />, label: "Master of Education", sub: "Emerging Technologies — AI, Instructional Design, Digital Curriculum" },
              { icon: <Globe className="w-7 h-7 text-primary" />, label: "Grades 7–12 Educator", sub: "Math, Science, Computer Science, Robotics & STEM Programming" },
              { icon: <Heart className="w-7 h-7 text-primary" />, label: "Ghanaian-Canadian", sub: "Rooted in cultural identity, community, and educational opportunity" },
            ].map((item, i) => (
              <motion.div key={i} variants={itemVariants}>
                <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4">{item.icon}</div>
                    <p className="font-serif font-bold text-lg text-foreground mb-2">{item.label}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.sub}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Vision */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <p className="text-primary font-semibold mb-3 uppercase tracking-widest text-sm">Looking Ahead</p>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-8">The Vision</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              Project Nimdeɛ began as a digital resource platform, but its broader vision is rooted in educational opportunity and impact.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Over time, the goal is to expand into initiatives that support students through STEM learning, mentorship, accessible educational tools, and future community-focused educational programs. The word <em>Nimdeɛ</em> — knowledge and wisdom — is not just a name. It is a commitment to the belief that every student deserves access to learning that opens doors.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
