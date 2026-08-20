import { useRef, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { ServiceNav } from "@/components/ServiceNav";
import { Button } from "@/components/ui/button";
import {
  Calculator, FlaskConical, Code2, Sparkles, Target, Music, Globe, Lightbulb,
  ArrowRight, CheckCircle, ChevronRight, Clock, Users, MessageSquare, Star,
  Wifi, MapPin, AlertCircle, Package,
} from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const colourMap: Record<string, { bg: string; border: string; icon: string; tag: string; check: string; chevron: string }> = {
  amber:   { bg: "bg-amber-50",   border: "border-amber-200",   icon: "text-amber-600",   tag: "bg-amber-100 text-amber-800",   check: "text-amber-600",   chevron: "text-amber-400" },
  teal:    { bg: "bg-teal-50",    border: "border-teal-200",    icon: "text-teal-600",    tag: "bg-teal-100 text-teal-800",    check: "text-teal-600",    chevron: "text-teal-400" },
  violet:  { bg: "bg-violet-50",  border: "border-violet-200",  icon: "text-violet-600",  tag: "bg-violet-100 text-violet-800",  check: "text-violet-600",  chevron: "text-violet-400" },
  indigo:  { bg: "bg-indigo-50",  border: "border-indigo-200",  icon: "text-indigo-600",  tag: "bg-indigo-100 text-indigo-800",  check: "text-indigo-600",  chevron: "text-indigo-400" },
  emerald: { bg: "bg-emerald-50", border: "border-emerald-200", icon: "text-emerald-600", tag: "bg-emerald-100 text-emerald-800", check: "text-emerald-600", chevron: "text-emerald-400" },
  rose:    { bg: "bg-rose-50",    border: "border-rose-200",    icon: "text-rose-500",    tag: "bg-rose-100 text-rose-800",    check: "text-rose-500",    chevron: "text-rose-400" },
  purple:  { bg: "bg-purple-50",  border: "border-purple-200",  icon: "text-purple-600",  tag: "bg-purple-100 text-purple-800",  check: "text-purple-600",  chevron: "text-purple-400" },
  sky:     { bg: "bg-sky-50",     border: "border-sky-200",     icon: "text-sky-600",     tag: "bg-sky-100 text-sky-800",     check: "text-sky-600",     chevron: "text-sky-400" },
};

type Service = {
  id: string;
  icon: React.ElementType;
  colour: string;
  title: string;
  subtitle: string;
  tags: string[];
  description: string[];
  included: string[];
  topics: string[];
  buttonLabel: string;
  buttonParam: string;
  variant?: "website";
};

const services: Service[] = [
  {
    id: "math",
    icon: Calculator,
    colour: "amber",
    title: "Mathematics Tutoring",
    subtitle: "Build understanding, confidence, and stronger problem-solving skills.",
    tags: ["Grades 7–12", "Online", "In Person", "One-on-One"],
    description: [
      "Personalized mathematics tutoring for students in Grades 7–12. Sessions focus on genuine understanding rather than memorizing procedures or relying only on shortcuts.",
      "I have taught and supported students working with the Alberta curriculum as well as Singaporean and Chinese mathematics curricula. This experience allows me to adapt instruction to different curriculum structures, levels of challenge, and problem-solving expectations.",
    ],
    included: [
      "Lessons tailored to the student's learning style and pace",
      "Homework and assignment support",
      "Test and exam preparation",
      "Identification of foundational learning gaps",
      "Step-by-step explanations",
      "Multiple problem-solving approaches",
      "Enrichment for advanced learners",
      "Honest feedback and progress updates",
    ],
    topics: [
      "Mathematics Grades 7–9",
      "Math 10C",
      "Math 20-1",
      "Math 30-1",
      "Numeracy and algebra",
      "Functions and relations",
      "Trigonometry",
      "Geometry",
      "Sequences and series",
      "Alberta, Singaporean, and Chinese curricula",
    ],
    buttonLabel: "Ask About Math Tutoring",
    buttonParam: "Mathematics Tutoring",
  },
  {
    id: "science",
    icon: FlaskConical,
    colour: "teal",
    title: "Science and Biology Tutoring",
    subtitle: "Make complex scientific ideas easier to understand.",
    tags: ["Grades 7–10", "Biology 20", "Biology 30", "Online", "In Person"],
    description: [
      "One-on-one science tutoring that helps students understand scientific concepts, apply their learning to unfamiliar questions, interpret evidence, and communicate scientific reasoning clearly.",
      "Sessions can support current coursework, assignments, laboratory concepts, test preparation, exam preparation, and gaps from previous grades.",
    ],
    included: [
      "Curriculum-aligned explanations and practice",
      "Support with scientific vocabulary",
      "Help writing complete scientific responses",
      "Test and exam preparation",
      "Assistance interpreting graphs, data, and experiments",
      "Connections between concepts and real-world applications",
      "Support identifying and correcting misconceptions",
    ],
    topics: [
      "Science Grades 7–10",
      "Biology 20",
      "Biology 30",
      "Scientific inquiry",
      "Experimental design",
      "Data interpretation",
      "Scientific models",
      "Laboratory concepts",
      "Scientific communication",
    ],
    buttonLabel: "Ask About Science Tutoring",
    buttonParam: "Science Tutoring",
  },
  {
    id: "cs",
    icon: Code2,
    colour: "violet",
    title: "Introductory Computer Science",
    subtitle: "A welcoming introduction to coding and computational thinking.",
    tags: ["Beginners", "Coding", "Technology", "Online", "In Person"],
    description: [
      "Introductory computer science tutoring for learners who are new to coding or need additional support with foundational concepts.",
      "Lessons focus on building logical thinking, understanding programming fundamentals, solving problems, debugging code, and gaining confidence through practical exercises and small projects. Online sessions work particularly well because learners can share their screens and receive support while working directly with their code.",
    ],
    included: [
      "Beginner-friendly instruction",
      "Step-by-step coding support",
      "Practical exercises and small projects",
      "Help with school computer science assignments",
      "Debugging strategies",
      "Problem-solving guidance",
      "Lessons adapted to the learner's age and experience",
      "Responsible and ethical technology use",
    ],
    topics: [
      "Programming fundamentals",
      "Variables, conditions, and loops",
      "Functions",
      "Computational thinking",
      "Introductory Python",
      "Block-based coding",
      "Basic game development",
      "Introductory application development",
      "Debugging",
      "Digital citizenship",
    ],
    buttonLabel: "Explore Computer Science Support",
    buttonParam: "Introductory Computer Science",
  },
  {
    id: "ai",
    icon: Sparkles,
    colour: "indigo",
    title: "AI Prompting and AI Literacy",
    subtitle: "Learn how to use artificial intelligence thoughtfully and effectively.",
    tags: ["Students", "Educators", "Beginners", "Online", "In Person"],
    description: [
      "Practical guidance for students, educators, professionals, and individuals who want to better understand artificial intelligence and use generative AI tools effectively.",
      "Sessions go beyond simply writing prompts. They focus on asking stronger questions, refining AI-generated responses, evaluating accuracy, protecting privacy, recognizing limitations, and using AI responsibly. Online sessions are especially useful because the learner can share their screen and practise directly with AI tools.",
    ],
    included: [
      "Introduction to generative AI",
      "Explanation of what AI can and cannot do",
      "Prompt-writing strategies",
      "Prompt refinement techniques",
      "Guidance for evaluating AI responses",
      "Responsible and transparent AI use",
      "Privacy and safety considerations",
      "Strategies for recognizing inaccurate information",
    ],
    topics: [
      "Prompt design and refinement",
      "AI-supported studying and brainstorming",
      "Lesson and resource creation with AI",
      "Evaluating AI-generated information",
      "AI hallucinations and bias",
      "Privacy considerations",
      "Academic integrity",
      "Responsible AI use in education",
    ],
    buttonLabel: "Book an AI Guidance Session",
    buttonParam: "AI Prompting and AI Literacy",
  },
  {
    id: "coaching",
    icon: Target,
    colour: "emerald",
    title: "Study Skills and Academic Coaching",
    subtitle: "Learn how to learn — not only what to learn.",
    tags: ["All Grades", "Organization", "Study Skills", "Online", "In Person"],
    description: [
      "Academic coaching for students who need support with planning, organization, studying, task completion, test preparation, or building effective routines.",
      "The goal is to create practical systems students can understand, maintain, and eventually use independently.",
    ],
    included: [
      "Personalized study plans",
      "Organization systems",
      "Time-management strategies",
      "Active recall and spaced practice",
      "Test and exam preparation",
      "Breaking large tasks into manageable steps",
      "Accountability and progress check-ins",
      "Strategies for building independence",
    ],
    topics: [
      "Study routines and time management",
      "Assignment planning",
      "Note-taking strategies",
      "Test and exam preparation",
      "Organization systems",
      "Academic confidence",
    ],
    buttonLabel: "Ask About Academic Coaching",
    buttonParam: "Study Skills and Academic Coaching",
  },
  {
    id: "piano",
    icon: Music,
    colour: "rose",
    title: "Beginner Piano Lessons",
    subtitle: "Patient and structured music instruction for absolute beginners.",
    tags: ["Beginners", "All Ages", "Online", "In Person"],
    description: [
      "Introductory piano lessons for children, teenagers, and adults with little or no previous experience. Lessons are patient, structured, encouraging, and adapted to each learner's pace, interests, and goals.",
      "For online piano lessons, the learner must have access to a piano or keyboard. Their device should be positioned so the keyboard and their hands can be seen during the lesson.",
    ],
    included: [
      "No previous experience required",
      "Individualized lesson pacing",
      "Patient and supportive instruction",
      "Foundational music theory",
      "Guided practice strategies",
      "Opportunities to learn beginner songs",
      "Help building confidence and consistency",
    ],
    topics: [
      "Reading notes",
      "Rhythm and timing",
      "Proper posture and hand position",
      "Basic scales and chords",
      "Music theory fundamentals",
      "Beginner repertoire",
    ],
    buttonLabel: "Ask About Piano Lessons",
    buttonParam: "Beginner Piano Lessons",
  },
  {
    id: "website",
    icon: Globe,
    colour: "purple",
    variant: "website",
    title: "Website Design and Development",
    subtitle: "Professional, approachable websites at an affordable starting price.",
    tags: ["Small Businesses", "Educators", "Personal Projects", "Organizations", "Online"],
    description: [
      "Affordable website design and development for individuals, educators, small businesses, community organizations, and personal projects.",
      "I can help transform an idea into a clean, functional, mobile-friendly website with clear navigation, purposeful content, and a professional online presence. Every website project begins with a consultation and a clear written scope.",
    ],
    included: [],
    topics: [],
    buttonLabel: "Request a Website Quote",
    buttonParam: "Website Design and Development",
  },
  {
    id: "consulting",
    icon: Lightbulb,
    colour: "sky",
    title: "Educational and Curriculum Consulting",
    subtitle: "Practical support for curriculum, instruction, technology, and AI integration.",
    tags: ["Educators", "Schools", "Organizations", "Online", "Custom Projects"],
    description: [
      "Consulting for educators, schools, and organizations seeking support with curriculum development, instructional planning, educational technology, artificial intelligence, accessibility, assessment, or STEM programming.",
      "Recommendations are practical, student-centred, collaborative, and realistic for classroom or organizational implementation.",
    ],
    included: [
      "Curriculum planning and review",
      "Resource development",
      "Assessment development",
      "AI and educational technology integration",
      "STEM program planning",
      "Accessibility considerations",
      "Differentiation strategies",
      "Professional-learning support",
      "Collaborative recommendations",
      "Practical implementation planning",
    ],
    topics: [
      "Mathematics and science education",
      "Computer science",
      "Curriculum development",
      "Assessment design",
      "AI literacy and AI in education",
      "Instructional technology",
      "STEM programming",
      "Inclusive learning design",
    ],
    buttonLabel: "Discuss a Consulting Project",
    buttonParam: "Educational or Curriculum Consulting",
  },
];

const summaryItems = [
  { stat: "Grades 7–12", label: "Academic tutoring" },
  { stat: "Online or In Person", label: "Flexible delivery" },
  { stat: "Multiple Curricula", label: "Alberta and international" },
  { stat: "All Ages", label: "Piano and technology support" },
  { stat: "Personalized", label: "One-on-one service" },
];

const pricingIncludes = {
  online: [
    "One-on-one instruction",
    "Conducted through video call",
    "Available regardless of location",
    "Screen sharing for computer science and AI sessions",
    "Digital resources shared during or after the session",
    "Flexible scheduling based on availability",
  ],
  inPerson: [
    "One-on-one, face-to-face instruction",
    "Available within the local service area",
    "Location arranged before booking",
    "May take place at an agreed-upon public or suitable location",
    "Additional travel fees may apply when travel exceeds 15 kilometres",
    "Any travel fee discussed and approved before booking is confirmed",
  ],
};

const processSteps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Reach Out",
    desc: "Send a message describing the service you need, your goals, preferred delivery format, location if requesting in-person support, and any relevant timeline.",
  },
  {
    icon: Users,
    step: "02",
    title: "Initial Conversation",
    desc: "We will briefly discuss your needs, answer questions, confirm availability, and determine whether the service is a good fit. For in-person services, we will also discuss location and any possible travel fee.",
  },
  {
    icon: Clock,
    step: "03",
    title: "Confirm the Plan",
    desc: "For tutoring and lessons, we confirm the subject, session format, schedule, pricing, and location. For website or consulting projects, you receive a written scope and quote outlining the work, timeline, included features, and any third-party costs.",
  },
  {
    icon: Star,
    step: "04",
    title: "Get Started",
    desc: "Sessions are booked once the details are confirmed. Website or consulting work begins after you approve the written scope and provide the required information, content, and materials.",
  },
];

const breadthSkills = [
  { label: "Mathematics", colour: "amber" },
  { label: "Science", colour: "teal" },
  { label: "Biology", colour: "teal" },
  { label: "Computer Science", colour: "violet" },
  { label: "Curriculum Development", colour: "sky" },
  { label: "Artificial Intelligence", colour: "indigo" },
  { label: "Educational Technology", colour: "indigo" },
  { label: "Study Coaching", colour: "emerald" },
  { label: "Piano", colour: "rose" },
  { label: "Website Development", colour: "purple" },
];

const starterIncludes = [
  "Initial consultation and project planning",
  "One standard domain name (subject to availability and cost)",
  "Basic hosting or platform licensing for up to two years",
  "A professionally designed responsive website",
  "Mobile, tablet, and desktop optimization",
  "Up to three standard pages",
  "Clear navigation and calls to action",
  "Contact form setup and social media links",
  "Basic search-engine optimization (page titles and meta descriptions)",
  "Basic accessibility considerations",
  "One round of reasonable revisions",
  "Website launch and publishing support",
  "Basic instructions for managing the website",
  "Thirty days of minor post-launch support",
];

const addOns = [
  "Additional pages", "Online stores", "Payment processing",
  "Appointment-booking systems", "Membership areas", "User accounts",
  "Blogs", "Resource libraries", "Advanced contact forms", "Databases",
  "Professional copywriting", "Logo design", "Brand identity development",
  "Custom illustrations", "Professional photography",
  "Advanced search-engine optimization", "Ongoing maintenance",
  "Business email setup", "Premium templates", "Premium plugins",
  "Specialized software integrations", "Custom functionality",
];

function WebsiteCardContent({ c }: { c: typeof colourMap[string] }) {
  return (
    <div className="flex-1 bg-background p-8 md:p-10 flex flex-col gap-6">
      {/* Description */}
      <div className="space-y-3">
        <p className="text-muted-foreground leading-relaxed text-base">
          Affordable website design and development for individuals, educators, small businesses,
          community organizations, and personal projects.
        </p>
        <p className="text-muted-foreground leading-relaxed text-base">
          I can help transform an idea into a clean, functional, mobile-friendly website with clear
          navigation, purposeful content, and a professional online presence. Every website project
          begins with a consultation and a clear written scope.
        </p>
      </div>

      {/* Starter Package pricing */}
      <div className="border-2 border-purple-200 rounded-2xl overflow-hidden">
        <div className="bg-purple-700 text-white px-6 py-4">
          <p className="text-xs font-bold uppercase tracking-widest text-purple-200 mb-1">Website Starter Package</p>
          <p className="font-serif font-bold text-3xl">Starting at $150 <span className="text-lg font-normal text-purple-200">CAD</span></p>
          <p className="text-purple-200 text-sm mt-1">
            The starter package is intended for a simple informational website. Final pricing depends on
            the number of pages, requested features, content requirements, third-party services, and overall project complexity.
          </p>
        </div>
        <div className="p-6 grid sm:grid-cols-2 gap-6" id="website-includes">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Starter Package Includes</p>
            <ul className="space-y-1.5">
              {starterIncludes.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-purple-500" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground mt-3 italic">
              Includes up to three standard pages. Example pages: Home, About, Services, Contact, Portfolio, FAQ — but not all of these are included.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Suitable For</p>
            <ul className="space-y-1 mb-5">
              {["Small-business websites", "Tutoring websites", "Consulting websites", "Educational websites",
                "Portfolios", "Personal brands", "Community projects", "Resource hubs",
                "Informational websites", "Simple landing pages"].map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm text-foreground">
                  <ChevronRight className="w-3.5 h-3.5 shrink-0 mt-0.5 text-purple-400" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Optional Add-Ons */}
        <div className="border-t px-6 py-5 bg-purple-50/50">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Optional Add-Ons</p>
          <div className="flex flex-wrap gap-2">
            {addOns.map((item) => (
              <span key={item} className="text-xs bg-purple-100 text-purple-800 px-2.5 py-1 rounded-full border border-purple-200">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Pricing Note */}
        <div className="border-t px-6 py-5 bg-amber-50">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" aria-label="Important pricing note" />
            <div className="space-y-2 text-xs text-amber-900 leading-relaxed">
              <p><strong>Starting price:</strong> The $150 CAD price is the starting cost for a simple informational website with a limited scope. A custom written quote will be provided before development begins.</p>
              <p><strong>Domain and licensing:</strong> The starter package may include one standard domain name and basic hosting or platform licensing for up to two years, when these costs can reasonably be included within the approved package.</p>
              <p><strong>Third-party costs:</strong> Premium domain names, paid plugins, e-commerce tools, payment-processing fees, business email services, and other third-party subscriptions are not included unless specifically listed in the written project agreement.</p>
              <p><strong>Renewals:</strong> Domain registration, hosting, platform licensing, and other subscriptions may require renewal after the included two-year period. Renewal costs and ownership details will be explained before the project begins.</p>
              <p><strong>Client content:</strong> The client is responsible for providing accurate text, images, business information, policies, branding materials, and other required content unless content creation is included in the written quote.</p>
              <p><strong>Project approval:</strong> Development begins only after the client approves the project scope, total price, included pages, features, expected timeline, revision terms, and third-party costs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const servicesRef = useRef<HTMLElement>(null);

  function scrollToServices(e: React.MouseEvent) {
    e.preventDefault();
    servicesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  useEffect(() => {
    document.title = "Additional Services | Project Nimdeɛ";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Explore tutoring, learning support, affordable website design, and educational consulting from Project Nimdeɛ.",
      );
    }
  }, []);

  return (
    <Layout>
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="relative py-24 md:py-32 bg-secondary overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_left,hsl(var(--primary)/0.18),transparent_55%)]" aria-hidden="true" />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom_right,hsl(35_90%_45%/0.08),transparent_60%)]" aria-hidden="true" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <p className="text-primary font-semibold mb-3 uppercase tracking-widest text-sm">Work With Hannah</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-secondary-foreground mb-3 leading-tight">
              Many skills.<br />
              <span className="text-primary">One thoughtful approach.</span>
            </h1>
            <p className="text-secondary-foreground/70 text-lg mb-5">
              Personalized support for learning, technology, music, and digital projects.
            </p>
            <p className="text-secondary-foreground/80 text-base leading-relaxed mb-4 max-w-2xl">
              You may have heard the phrase "jack of all trades." While I am an educator first, my experience spans
              mathematics, science, computer science, curriculum development, educational technology, artificial intelligence,
              music, and website development.
            </p>
            <p className="text-secondary-foreground/80 text-base leading-relaxed mb-8 max-w-2xl">
              This breadth allows me to support learners, educators, individuals, and small organizations across several
              areas while bringing the same patience, creativity, professionalism, and attention to every service.
            </p>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed mb-8 max-w-2xl">
              Whether you need academic tutoring, guidance using AI, beginner computer science support, piano instruction,
              educational consulting, or an affordable website, every service is tailored to your goals.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full px-8 py-6 text-base font-bold hover:scale-105 transition-transform group">
                <Link href="/contact">
                  Get in Touch <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" onClick={scrollToServices}
                className="rounded-full px-8 py-6 text-base font-medium bg-transparent border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
                Explore Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <ServiceNav />

      {/* ── Summary Row ─────────────────────────────────────────── */}
      <div className="border-y bg-background py-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-5 text-center">
            {summaryItems.map((item) => (
              <div key={item.stat} className="text-center">
                <p className="font-serif font-bold text-xl text-foreground">{item.stat}</p>
                <p className="text-xs text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Pricing and Delivery ────────────────────────────────── */}
      <section className="py-20 bg-muted/20 border-b">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-10">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Flexible Options</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Choose online or in-person support
            </h2>
            <p className="text-muted-foreground text-base max-w-2xl mx-auto leading-relaxed">
              Tutoring, coaching, beginner computer science, AI guidance, and piano lessons are available online or in person,
              depending on location and availability. Every session is personalized to the learner's goals, experience, and preferred pace.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Online card */}
            <motion.div variants={fadeUp} className="border-2 border-teal-200 rounded-3xl overflow-hidden flex flex-col">
              <div className="bg-teal-700 text-white px-8 py-6">
                <div className="flex items-center gap-2 mb-3">
                  <Wifi className="w-5 h-5 text-teal-300" aria-hidden="true" />
                  <p className="font-bold text-lg">Online Sessions</p>
                </div>
                <p className="font-serif font-black text-4xl mb-1">$40 <span className="text-xl font-normal text-teal-200">CAD per session</span></p>
              </div>
              <div className="bg-background p-8 flex-1 flex flex-col">
                <ul className="space-y-2.5 mb-8 flex-1">
                  {pricingIncludes.online.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                      <CheckCircle className="w-4 h-4 shrink-0 mt-0.5 text-teal-600" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button asChild className="rounded-full w-full font-bold">
                  <Link href="/contact?service=Online+Session">Book an Online Session</Link>
                </Button>
              </div>
            </motion.div>

            {/* In-Person card */}
            <motion.div variants={fadeUp} className="border-2 border-amber-200 rounded-3xl overflow-hidden flex flex-col">
              <div className="bg-amber-600 text-white px-8 py-6">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-amber-200" aria-hidden="true" />
                  <p className="font-bold text-lg">In-Person Sessions</p>
                </div>
                <p className="font-serif font-black text-4xl mb-1">$50 <span className="text-xl font-normal text-amber-100">CAD per session</span></p>
              </div>
              <div className="bg-background p-8 flex-1 flex flex-col">
                <ul className="space-y-2.5 mb-8 flex-1">
                  {pricingIncludes.inPerson.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                      <CheckCircle className="w-4 h-4 shrink-0 mt-0.5 text-amber-600" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="rounded-full w-full font-bold border-amber-400 text-amber-700 hover:bg-amber-50">
                  <Link href="/contact?service=In-Person+Session">Ask About In-Person Availability</Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Pricing note */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="border border-amber-200 bg-amber-50 rounded-2xl px-6 py-4 flex items-start gap-3">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" aria-label="Pricing note" />
            <p className="text-sm text-amber-900 leading-relaxed">
              <strong>Please note:</strong> Availability, location, scheduling, and any applicable travel fees will be confirmed
              before booking. Additional travel charges may apply when I need to travel more than 15 kilometres to reach the session
              location. Group sessions, extended sessions, or specialized requests may be priced separately.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Services ────────────────────────────────────────────── */}
      <section id="services" ref={servicesRef} className="py-20 bg-background scroll-mt-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Services</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Support designed around your goals
            </h2>
            <p className="text-muted-foreground text-base max-w-2xl leading-relaxed">
              Each service is personalized rather than one-size-fits-all. Sessions and projects begin by identifying
              your current needs, goals, timeline, and preferred approach.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}
            className="space-y-8">
            {services.map((s, i) => {
              const c = colourMap[s.colour] ?? colourMap.teal;
              const Icon = s.icon;
              const isEven = i % 2 === 1;
              const isWebsite = s.variant === "website";

              return (
                <motion.article key={s.id} variants={fadeUp}
                  className={`border-2 ${c.border} rounded-3xl overflow-hidden flex flex-col md:flex-row ${isEven && !isWebsite ? "md:flex-row-reverse" : ""}`}
                  aria-label={s.title}>
                  {/* Accent panel */}
                  <div className={`${c.bg} p-8 md:p-10 flex flex-col justify-between md:w-72 shrink-0`}>
                    <div>
                      <div className="p-3 rounded-xl bg-white/70 w-fit mb-4">
                        <Icon className={`w-7 h-7 ${c.icon}`} aria-hidden="true" />
                      </div>
                      <h3 className="font-serif font-bold text-xl text-foreground mb-2">{s.title}</h3>
                      <p className={`text-sm font-semibold ${c.icon} mb-5 leading-relaxed`}>{s.subtitle}</p>
                      <div className="flex flex-wrap gap-1.5 mb-6" role="list" aria-label="Service tags">
                        {s.tags.map((t) => (
                          <span key={t} role="listitem" className={`text-xs font-bold px-2.5 py-1 rounded-full ${c.tag}`}>{t}</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button asChild size="sm" className="rounded-full self-start font-bold">
                        <Link href={`/contact?service=${encodeURIComponent(s.buttonParam)}`}>
                          {s.buttonLabel} <ChevronRight className="w-3.5 h-3.5 ml-1" aria-hidden="true" />
                        </Link>
                      </Button>
                      {isWebsite && (
                        <Button asChild size="sm" variant="outline" className={`rounded-full self-start font-bold border-purple-300 ${c.icon}`}>
                          <a href="#website-includes">See What's Included</a>
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Content panel */}
                  {isWebsite ? (
                    <WebsiteCardContent c={c} />
                  ) : (
                    <div className="flex-1 bg-background p-8 md:p-10 flex flex-col gap-6">
                      <div className="space-y-3">
                        {s.description.map((para, pi) => (
                          <p key={pi} className="text-muted-foreground leading-relaxed text-base">{para}</p>
                        ))}
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">What's Included</p>
                          <ul className="space-y-2">
                            {s.included.map((d) => (
                              <li key={d} className="flex items-start gap-2 text-sm text-foreground">
                                <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${c.check}`} aria-hidden="true" />
                                {d}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Topics Covered</p>
                          <ul className="space-y-2">
                            {s.topics.map((t) => (
                              <li key={t} className="flex items-start gap-2 text-sm text-foreground">
                                <ChevronRight className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${c.chevron}`} aria-hidden="true" />
                                {t}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Breadth of Experience ───────────────────────────────── */}
      <section className="py-20 bg-muted/20 border-t border-b">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-10">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">A Broad Skill Set</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-5">
              Many areas of experience. One consistent standard.
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed max-w-2xl mx-auto mb-4">
              The phrase "jack of all trades" is often used to describe someone with experience across many areas. For me, that breadth is grounded in education.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed max-w-2xl mx-auto mb-4">
              My work in mathematics, science, computer science, curriculum development, artificial intelligence, educational technology,
              music, and website design allows me to understand different learners, projects, goals, and challenges.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed max-w-2xl mx-auto">
              Regardless of the service, my approach remains consistent: listen carefully, explain clearly, create thoughtfully, and
              provide work that is practical, personalized, and purposeful.
            </p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-wrap justify-center gap-3">
            {breadthSkills.map((skill) => {
              const c = colourMap[skill.colour] ?? colourMap.teal;
              return (
                <motion.span key={skill.label} variants={fadeUp}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border ${c.tag} border-current/20`}>
                  {skill.label}
                </motion.span>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── How It Works ────────────────────────────────────────── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Process</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">How it works</h2>
            <p className="text-muted-foreground text-base max-w-xl mx-auto leading-relaxed">
              Getting started is simple. The process depends on whether you are booking a session or requesting a project,
              but expectations and pricing will always be discussed before work begins.
            </p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {processSteps.map((p) => {
              const PIcon = p.icon;
              return (
                <motion.div key={p.step} variants={fadeUp}
                  className="border bg-background rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
                  <p className="font-serif font-black text-4xl text-primary/20 mb-3" aria-hidden="true">{p.step}</p>
                  <div className="flex justify-center mb-3">
                    <div className="p-2.5 rounded-xl bg-primary/10">
                      <PIcon className="w-5 h-5 text-primary" aria-hidden="true" />
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

      {/* ── Founder Quote ───────────────────────────────────────── */}
      <section className="py-16 bg-muted/20 border-t border-b">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="border-l-4 border-primary pl-6">
            <p className="font-serif text-xl text-foreground leading-relaxed italic mb-4">
              "My work spans several disciplines, but the purpose remains consistent: helping people understand, create,
              grow, and move forward with confidence."
            </p>
            <footer className="text-sm font-bold text-primary">— Hannah Terkper, Founder of Project Nimdeɛ</footer>
          </motion.blockquote>
        </div>
      </section>

      {/* ── Final CTA ───────────────────────────────────────────── */}
      <section className="py-20 bg-teal-800 text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-5 text-white">
              Ready to learn, create, or bring your idea online?
            </h2>
            <p className="text-teal-200 text-base mb-4 leading-relaxed">
              Tutoring, academic coaching, computer science support, AI guidance, and piano lessons are available online
              for $40 CAD per session or in person for $50 CAD per session.
            </p>
            <p className="text-teal-300 text-sm mb-4">
              Additional travel fees may apply when I need to travel more than 15 kilometres.
            </p>
            <p className="text-teal-200 text-base mb-8 leading-relaxed">
              Simple website projects begin at $150 CAD, with a personalized written quote provided before development begins.
            </p>
            <p className="text-teal-300 text-sm mb-8">
              Not sure which service is right for you? Send a message with your goals or project idea, and we can determine the best next step.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg"
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-6 text-base font-bold hover:scale-105 transition-all group"
                data-testid="button-services-book">
                <Link href="/contact?service=Tutoring+or+Lesson">
                  Book a Session
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline"
                className="bg-transparent border-white/40 text-white hover:bg-white/10 rounded-full px-10 py-6 text-base font-bold"
                data-testid="button-services-website">
                <Link href="/contact?service=Website+Design+and+Development">
                  Request a Website Quote
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
