import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(20, "Please write at least 20 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

const subjects = [
  "Resource Questions",
  "Tutoring",
  "Piano Lessons",
  "Collaboration",
  "Educational Partnerships",
  "Supporting Project Nimdeɛ",
  "General Inquiries",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactForm) => {
    const res = await fetch("https://formspree.io/f/xdabvlle", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      setSubmitted(true);
    } else {
      alert("Something went wrong. Please try again or email directly.");
    }
  };

  return (
    <Layout>
      {/* Header */}
      <section className="relative py-24 md:py-32 bg-secondary overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom_right,hsl(var(--primary)/0.18),transparent_55%)]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="text-primary font-semibold mb-3 uppercase tracking-widest text-sm">Reach Out</p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-secondary-foreground mb-6 leading-tight">
              Get in Touch
            </h1>
            <p className="text-secondary-foreground/80 text-xl leading-relaxed">
              Whether you have a question about resources, tutoring, piano lessons, or supporting the mission — this is the place to start.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <Card className="border-none shadow-lg">
                <CardContent className="p-12 text-center">
                  <div className="flex justify-center mb-6">
                    <CheckCircle className="w-16 h-16 text-primary" />
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Message Sent</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    Thank you for reaching out. Your message has been received, and a response will be on its way as soon as possible.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setSubmitted(false)}
                    data-testid="button-send-another"
                    className="rounded-full px-8"
                  >
                    Send Another Message
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-none shadow-lg">
                <CardContent className="p-8 md:p-10">
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-8">Send a Message</h2>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" data-testid="form-contact">
                    {/* Name */}
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        {...register("name")}
                        data-testid="input-name"
                        className={errors.name ? "border-destructive" : ""}
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive" data-testid="error-name">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        {...register("email")}
                        data-testid="input-email"
                        className={errors.email ? "border-destructive" : ""}
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive" data-testid="error-email">{errors.email.message}</p>
                      )}
                    </div>

                    {/* Subject */}
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Select
                        onValueChange={(val) => setValue("subject", val, { shouldValidate: true })}
                        data-testid="select-subject"
                      >
                        <SelectTrigger
                          id="subject"
                          data-testid="trigger-subject"
                          className={errors.subject ? "border-destructive" : ""}
                        >
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          {subjects.map((s) => (
                            <SelectItem key={s} value={s} data-testid={`option-subject-${s.toLowerCase().replace(/\s+/g, "-")}`}>
                              {s}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.subject && (
                        <p className="text-sm text-destructive" data-testid="error-subject">{errors.subject.message}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Share what's on your mind..."
                        rows={6}
                        {...register("message")}
                        data-testid="textarea-message"
                        className={errors.message ? "border-destructive" : ""}
                      />
                      {errors.message && (
                        <p className="text-sm text-destructive" data-testid="error-message">{errors.message.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full rounded-full py-6 text-lg hover:scale-[1.02] transition-transform"
                      disabled={isSubmitting}
                      data-testid="button-submit"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
