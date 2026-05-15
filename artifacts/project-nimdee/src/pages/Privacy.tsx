import { Link } from "wouter";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { ArrowLeft, Shield, Lock, Mail, User, ChevronRight } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

export default function Privacy() {
  return (
    <Layout>
      <div className="border-b bg-background">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary flex items-center gap-1 transition-colors"><ArrowLeft className="w-3.5 h-3.5" />Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground font-medium">Privacy Notice</span>
        </div>
      </div>

      <div className="bg-gradient-to-br from-teal-800 to-teal-700 text-white">
        <div className="max-w-3xl mx-auto px-4 py-14">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-teal-300" />
              <span className="text-xs font-bold tracking-widest uppercase text-teal-300">Privacy & Safety</span>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-3">Privacy Notice</h1>
            <p className="text-teal-200 leading-relaxed">Project Nimdeɛ is committed to protecting your privacy, especially for student users. This notice explains simply and clearly how we handle your information.</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-8">

          {[
            {
              icon: User,
              color: "text-teal-600",
              title: "What information we collect",
              items: [
                "Your first name and email address when you create an account",
                "Your selected role (student, parent/guardian, educator, supporter)",
                "Optional: grade level and subject interests you choose to share",
                "Your learning data: progress, reflections, mistakes, confidence ratings, and study plans you create inside your dashboard",
                "Whether you agreed to receive email updates (you can change this any time)",
              ],
            },
            {
              icon: Lock,
              color: "text-violet-600",
              title: "How we protect your information",
              items: [
                "Authentication is handled by Clerk — a secure, industry-standard service. We never store your password.",
                "Your learning data is stored in a private database — only you can access your own data",
                "No payment information is ever collected or stored",
                "We do not sell, share, or trade your personal information with any third party",
                "Student data is treated with extra care — we collect only what is necessary",
              ],
            },
            {
              icon: Mail,
              color: "text-amber-600",
              title: "Email communications",
              items: [
                "We only send emails if you opted in during registration",
                "You can unsubscribe at any time from any email we send",
                "We may use a service like Mailchimp or Brevo in the future for newsletters — these services also protect your data",
                "We will never sell your email address or use it for advertising",
              ],
            },
            {
              icon: Shield,
              color: "text-rose-600",
              title: "Your rights",
              items: [
                "You can delete your account and all associated data at any time by contacting us",
                "You can update your profile information from your dashboard",
                "You can opt out of email communications at any time",
                "You can ask us what data we hold about you",
                "Students under 13: please have a parent or guardian create and manage the account",
              ],
            },
          ].map((section) => (
            <motion.div key={section.title} variants={fadeUp} className="border rounded-2xl bg-background p-6">
              <div className="flex items-center gap-3 mb-4">
                <section.icon className={`w-5 h-5 ${section.color}`} />
                <h2 className="font-serif font-bold text-lg text-foreground">{section.title}</h2>
              </div>
              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-border shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div variants={fadeUp} className="bg-teal-50 border border-teal-200 rounded-2xl p-6">
            <h2 className="font-serif font-bold text-lg text-teal-900 mb-2">Questions or concerns?</h2>
            <p className="text-sm text-teal-800 leading-relaxed mb-4">
              If you have any questions about this privacy notice, want to delete your account, or have concerns about your data, please contact us through the Contact page. We will respond promptly.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-teal-700 hover:underline">
              Contact us <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} className="border-t pt-4">
            <p className="text-xs text-muted-foreground">Last updated: May 2026. Project Nimdeɛ is a free educational initiative. No payment is required to create an account.</p>
          </motion.div>
        </motion.div>
      </div>
    </Layout>
  );
}
