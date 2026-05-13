import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Layout } from "@/components/Layout";
import { BookOpen, GraduationCap, Code, Rocket, BookMarked, Calculator, Microscope, Keyboard, Lightbulb } from "lucide-react";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  const features = [
    {
      title: "Student-Centred Learning",
      description: "Resources designed to support real classrooms, meaningful practice, and stronger understanding.",
      icon: <GraduationCap className="h-8 w-8 text-primary mb-4" />
    },
    {
      title: "Curriculum-Aligned Resources",
      description: "Materials built around Alberta outcomes, clear learning goals, and classroom use.",
      icon: <BookOpen className="h-8 w-8 text-primary mb-4" />
    },
    {
      title: "Accessible STEM Tools",
      description: "Interactive tools and supports that help make learning more approachable and engaging.",
      icon: <Rocket className="h-8 w-8 text-primary mb-4" />
    },
    {
      title: "Education for Impact",
      description: "A growing vision rooted in knowledge, opportunity, and the belief that education can help open doors for students and communities.",
      icon: <Lightbulb className="h-8 w-8 text-primary mb-4" />
    }
  ];

  const learningAreas = [
    { title: "Mathematics", icon: <Calculator className="h-6 w-6" /> },
    { title: "Science", icon: <Microscope className="h-6 w-6" /> },
    { title: "Computer Science", icon: <Code className="h-6 w-6" /> },
    { title: "Robotics & Coding", icon: <Keyboard className="h-6 w-6" /> },
    { title: "Study Tools", icon: <BookMarked className="h-6 w-6" /> },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6 leading-tight">
              Project Nimdeɛ
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-foreground/80 mb-6">
              Teaching, tools, and thoughtful STEM learning.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl">
              A digital home for curriculum-aligned resources, interactive STEM learning, classroom support, and educational innovation rooted in accessibility, creativity, and opportunity.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="text-lg px-8 py-6 rounded-full hover:scale-105 transition-transform" data-testid="button-hero-explore">
                <Link href="/resources">Explore Resources</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 rounded-full hover:bg-primary/5 transition-colors" data-testid="button-hero-about">
                <Link href="/about">About the Vision</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow bg-card">
                  <CardHeader>
                    {feature.icon}
                    <CardTitle className="font-serif text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Learning Areas Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Explore Learning Areas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Curated materials and interactive tools designed to help students master core concepts and build confidence.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-wrap justify-center gap-4"
          >
            {learningAreas.map((area, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Link href="/resources">
                  <Card className="cursor-pointer group hover:border-primary transition-colors duration-300 w-48 h-48 flex flex-col items-center justify-center text-center">
                    <CardContent className="p-6 flex flex-col items-center gap-4">
                      <div className="p-4 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        {area.icon}
                      </div>
                      <span className="font-medium">{area.title}</span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
