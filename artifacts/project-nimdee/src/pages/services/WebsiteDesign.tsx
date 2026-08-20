import React, { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { ServiceNav } from "@/components/ServiceNav";
import { Button } from "@/components/ui/button";
import {
  Globe,
  CheckCircle,
  LayoutTemplate,
  Wrench,
  Search,
  MessageSquare,
  FileText,
  AlertTriangle,
  ChevronRight,
  ShieldCheck,
  Mail,
  Zap
} from "lucide-react";

export default function WebsiteDesign() {
  useEffect(() => {
    document.title = "Website Design Services | Project Nimdeɛ";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Professional, affordable website design for small businesses, educators, and community organizations. Packages starting at $150 CAD.");
    }
  }, []);

  const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

  return (
    <Layout>
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="relative py-24 md:py-32 bg-secondary overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.15),transparent_55%)]" aria-hidden="true" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <p className="text-primary font-semibold mb-3 uppercase tracking-widest text-sm">Website Design</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-secondary-foreground mb-6 leading-tight">
              Professional web presence.<br />
              <span className="text-primary">Without the agency price tag.</span>
            </h1>
            <p className="text-secondary-foreground/80 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              Thoughtful, modern, and accessible websites designed specifically for small businesses, educators, community organizations, and personal projects.
            </p>
            <Button asChild size="lg" className="rounded-full px-8 py-6 text-base font-bold hover:scale-105 transition-transform">
              <Link href="/contact?service=Website+Design+and+Development">
                Request a Quote
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <ServiceNav />

      {/* ── Philosophy / Positioning ────────────────────────────── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h2 className="font-serif text-3xl font-bold mb-6">A Different Approach to Web Design</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            I am an independent developer and educator with hands-on website-building experience—not a large marketing agency. My goal is to provide high-quality, functional, and beautiful websites at a more accessible price point, without asking small organizations to choose between an unpolished DIY site and a professional online presence.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            I am transparent about what I can do, what things cost, and what you need to provide. You get a clear scope, reliable communication, and a website you can be proud of.
          </p>
        </div>
      </section>

      {/* ── Pricing Packages ────────────────────────────────────── */}
      <section className="py-20 bg-muted/30 border-y">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Website Packages
            </h2>
            <p className="text-muted-foreground text-base max-w-2xl mx-auto">
              Transparent starting prices. A final custom quote is provided after our initial consultation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {/* Starter */}
            <div className="border border-border bg-card rounded-3xl overflow-hidden flex flex-col hover:border-primary/40 transition-colors shadow-sm">
              <div className="p-8 pb-6 bg-secondary/5 border-b border-border/50">
                <h3 className="font-serif text-2xl font-bold mb-2">Basic Starter</h3>
                <p className="text-muted-foreground text-sm mb-4 min-h-[40px]">Perfect for simple, elegant informational sites.</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">From $150</span>
                  <span className="text-sm text-muted-foreground">CAD</span>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <ul className="space-y-3 mb-8 flex-1">
                  {[
                    "Initial consultation and project planning",
                    "Up to 3 standard pages (e.g., Home, About, Contact)",
                    "Mobile & tablet responsive",
                    "Basic contact form",
                    "1 standard domain included (up to $30 CAD)",
                    "1 round of revisions"
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="w-full rounded-full font-bold">
                  <Link href="/contact?service=Website+Design+and+Development">Inquire</Link>
                </Button>
              </div>
            </div>

            {/* Intermediate */}
            <div className="border-2 border-primary bg-card rounded-3xl overflow-hidden flex flex-col relative shadow-md transform md:-translate-y-4">
              <div className="absolute top-0 inset-x-0 h-1.5 bg-primary"></div>
              <div className="p-8 pb-6 bg-primary/5 border-b border-border/50">
                <div className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full mb-4">Most Popular</div>
                <h3 className="font-serif text-2xl font-bold mb-2">Intermediate</h3>
                <p className="text-muted-foreground text-sm mb-4 min-h-[40px]">For growing businesses needing more detail and structure.</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">From $350</span>
                  <span className="text-sm text-muted-foreground">CAD</span>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <ul className="space-y-3 mb-8 flex-1">
                  {[
                    "Initial consultation and written project scope",
                    "Up to 6 custom pages",
                    "Service or portfolio galleries",
                    "Basic SEO setup (meta tags, sitemap)",
                    "Integration with booking links/calendars",
                    "1 standard domain included (up to $30 CAD)",
                    "2 rounds of revisions"
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full rounded-full font-bold">
                  <Link href="/contact?service=Website+Design+and+Development">Inquire</Link>
                </Button>
              </div>
            </div>

            {/* Custom */}
            <div className="border border-border bg-card rounded-3xl overflow-hidden flex flex-col hover:border-primary/40 transition-colors shadow-sm">
              <div className="p-8 pb-6 bg-secondary/5 border-b border-border/50">
                <h3 className="font-serif text-2xl font-bold mb-2">Custom / Growth</h3>
                <p className="text-muted-foreground text-sm mb-4 min-h-[40px]">Complex requirements, CMS, or unique functionality.</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">By Quote</span>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <ul className="space-y-3 mb-8 flex-1">
                  {[
                    "Initial consultation and tailored project proposal",
                    "Scope designed around your goals",
                    "Content Management Systems (CMS)",
                    "Advanced animations & styling",
                    "Third-party API integrations",
                    "E-commerce setup guidance",
                    "Custom post-launch support"
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="w-full rounded-full font-bold">
                  <Link href="/contact?service=Website+Design+and+Development">Discuss Project</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Important Notes ──────────────────────────────────────── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6">Important Cost & Scope Details</h2>
              <p className="text-muted-foreground mb-8">
                I believe in complete transparency. There are no hidden fees, but there are necessary boundaries to keep these services affordable.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                    <Globe className="w-5 h-5 text-amber-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Domain Name Costs</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Packages include the cost of registering one standard domain for the first year, up to $30 CAD. If your chosen domain registration costs more than $30 CAD, the difference will be added to your invoice with your approval. You are responsible for renewal fees in subsequent years.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center shrink-0">
                    <Wrench className="w-5 h-5 text-sky-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Third-Party Subscriptions</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      If your site requires paid plugins, advanced booking systems (like Calendly), premium email (like Google Workspace), or specialized hosting platforms, these subscription costs are billed directly to you by the provider.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center shrink-0">
                    <AlertTriangle className="w-5 h-5 text-violet-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Client Responsibilities</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Unless copywriting or branding is explicitly included in the quote, the client is responsible for providing all text, images, logos, and policy documents (Privacy Policy, Terms of Service) before development begins.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted/50 rounded-3xl p-8 border border-border">
              <h3 className="font-serif text-2xl font-bold mb-6">Our Process</h3>
              <ul className="space-y-6">
                {[
                  { title: "Discovery", desc: "We discuss your goals, audience, and functional needs. I determine if I am the right fit for the project." },
                  { title: "Proposal & Scope", desc: "You receive a detailed written quote outlining deliverables, timeline, costs, and responsibilities." },
                  { title: "Content Collection", desc: "You provide your text, images, and branding assets into a shared folder." },
                  { title: "Development", desc: "I build the site. You'll receive a private link to review progress and request included revisions." },
                  { title: "Launch & Handover", desc: "The site goes live. I provide basic instructions on how you can manage simple content changes moving forward." }
                ].map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center shrink-0 text-sm">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-foreground">{step.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sample Agreement ────────────────────────────────────── */}
      <section className="py-20 bg-secondary/5 border-t">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold mb-4">Sample Project Agreement</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
               I believe in clear expectations. This is the kind of project-scope template I use to ensure we are always on the same page. Every client receives a project-specific version after consultation.
               <br/><span className="text-xs italic">(This sample is for illustrative purposes only; it is not legal advice or a binding contract.)</span>
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 md:p-10 shadow-sm text-sm font-mono text-muted-foreground overflow-x-auto whitespace-pre-wrap">
{`PROJECT SCOPE & AGREEMENT (SAMPLE)

Client: [Client Name]
Project: [Website Name]
Date: [Date]
Total Cost: [$XXX CAD]

1. DELIVERABLES
- A 4-page responsive website (Home, About, Services, Contact)
- Integration of client-provided logo and brand colors
- Basic contact form routed to [Client Email]
- 1 standard .com domain registration (first year included, up to $30)

2. TIMELINE
- Content due from client by: [Date]
- Initial review draft ready by: [Date]
- Target launch date: [Date]

3. REVISIONS
- The client is entitled to two (2) rounds of reasonable design revisions prior to launch.
- Substantial changes to the scope (e.g., adding an e-commerce store mid-project) will require a revised quote.

4. PAYMENT TERMS
- 50% deposit required to commence work.
- 50% final payment due prior to website handover and launch.

5. OWNERSHIP & ACCESS
 - Upon final payment, the client receives access to the agreed final website deliverables and client-provided content.
 - Third-party platform, font, image, plugin, and domain licenses remain subject to their own terms.
 - The developer may display the completed project in their portfolio unless we agree otherwise in writing.

6. ACCEPTANCE
 - The project scope, timeline, payment schedule, included revisions, domain cost, and third-party charges are confirmed in writing before work begins.

Client signature: ____________________   Date: __________
Developer signature: _________________   Date: __________`}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-background border-t">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-foreground mb-2 flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary"/> Do you provide hosting?</h4>
              <p className="text-muted-foreground text-sm pl-6">For starter and intermediate packages, I typically build on robust managed platforms (like Webflow, Squarespace, or dedicated managed hosting) and the first year of platform fees may be integrated into your quote, or you may purchase the subscription directly. This ensures security and reliability without you needing server administration skills.</p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2 flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary"/> Will I be able to update the site myself?</h4>
              <p className="text-muted-foreground text-sm pl-6">Yes. I design sites with handovers in mind. I will provide you with the necessary access and a brief guide on how to edit text, swap images, or add basic blog posts.</p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2 flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary"/> Can you write the content for me?</h4>
              <p className="text-muted-foreground text-sm pl-6">My core pricing assumes you provide the text. However, if you need help refining your message or structuring your content, we can discuss adding copywriting services to your custom quote.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-teal-800 text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-5">
            Have a website idea in mind?
          </h2>
          <p className="text-teal-100 text-lg leading-relaxed mb-8">
            Start with a no-pressure initial conversation. We will talk through your goals, outline the right level of support, and confirm a written quote before any work begins.
          </p>
          <Button asChild size="lg" className="rounded-full px-9 py-6 bg-primary hover:bg-primary/90 text-white font-bold">
            <Link href="/contact?service=Website+Design+and+Development">
              Start a Website Conversation
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
