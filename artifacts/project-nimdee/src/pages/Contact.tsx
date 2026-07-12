import { useState, useEffect } from "react";
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
  service: z.string().min(1, "Please select a service"),
  format: z.string().optional(),
  area: z.string().optional(),
  websiteType: z.string().optional(),
  websitePages: z.string().optional(),
  websiteFeatures: z.string().optional(),
  websiteLaunch: z.string().optional(),
  websiteDomain: z.string().optional(),
  websiteBudget: z.string().optional(),
  message: z.string().min(20, "Please write at least 20 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

const serviceOptions = [
  "Mathematics Tutoring",
  "Science Tutoring",
  "Biology 20 or 30 Tutoring",
  "Introductory Computer Science",
  "AI Prompting and AI Literacy",
  "Study Skills and Academic Coaching",
  "Beginner Piano Lessons",
  "Website Design and Development",
  "Educational or Curriculum Consulting",
  "Tutoring or Lesson",
  "Online Session",
  "In-Person Session",
  "Other",
];

const formatOptions = [
  "Online",
  "In Person",
  "Not Applicable",
  "Not Sure",
];

function getPreselectedService(): string {
  try {
    const params = new URLSearchParams(window.location.search);
    const s = params.get("service");
    return s ? decodeURIComponent(s) : "";
  } catch {
    return "";
  }
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState<string>(getPreselectedService);
  const [selectedFormat, setSelectedFormat] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({ resolver: zodResolver(contactSchema) });

  useEffect(() => {
    if (selectedService) {
      setValue("service", selectedService, { shouldValidate: false });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const isWebsiteService = selectedService === "Website Design and Development";
  const isInPerson = selectedFormat === "In Person";

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
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom_right,hsl(var(--primary)/0.18),transparent_55%)]" aria-hidden="true" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <p className="text-primary font-semibold mb-3 uppercase tracking-widest text-sm">Reach Out</p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-secondary-foreground mb-6 leading-tight">
              Get in Touch
            </h1>
            <p className="text-secondary-foreground/80 text-xl leading-relaxed">
              Whether you have a question about tutoring, AI guidance, piano lessons, website design, educational consulting,
              or supporting the mission — this is the place to start.
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

                    {/* Service */}
                    <div className="space-y-2">
                      <Label htmlFor="service">Service</Label>
                      <Select
                        defaultValue={selectedService || undefined}
                        onValueChange={(val) => {
                          setValue("service", val, { shouldValidate: true });
                          setSelectedService(val);
                        }}
                        data-testid="select-service"
                      >
                        <SelectTrigger
                          id="service"
                          data-testid="trigger-service"
                          className={errors.service ? "border-destructive" : ""}
                        >
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceOptions.map((s) => (
                            <SelectItem key={s} value={s} data-testid={`option-service-${s.toLowerCase().replace(/\s+/g, "-")}`}>
                              {s}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.service && (
                        <p className="text-sm text-destructive" data-testid="error-service">{errors.service.message}</p>
                      )}
                    </div>

                    {/* Preferred Format */}
                    <div className="space-y-2">
                      <Label htmlFor="format">Preferred Format <span className="text-muted-foreground font-normal">(optional)</span></Label>
                      <Select
                        onValueChange={(val) => {
                          setValue("format", val);
                          setSelectedFormat(val);
                        }}
                        data-testid="select-format"
                      >
                        <SelectTrigger id="format" data-testid="trigger-format">
                          <SelectValue placeholder="Select a format" />
                        </SelectTrigger>
                        <SelectContent>
                          {formatOptions.map((f) => (
                            <SelectItem key={f} value={f}>{f}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* General Area — shown for in-person */}
                    {isInPerson && (
                      <div className="space-y-2">
                        <Label htmlFor="area">
                          General Area or Neighbourhood <span className="text-muted-foreground font-normal">(optional)</span>
                        </Label>
                        <Input
                          id="area"
                          placeholder="e.g. Northwest Edmonton, St. Albert"
                          {...register("area")}
                          data-testid="input-area"
                        />
                        <p className="text-xs text-muted-foreground">
                          A general area helps confirm whether in-person sessions are available near you. Please do not share your home address.
                        </p>
                      </div>
                    )}

                    {/* Website fields — shown when Website Design is selected */}
                    {isWebsiteService && (
                      <div className="space-y-4 border rounded-xl p-5 bg-muted/30">
                        <p className="text-sm font-semibold text-foreground">Website Project Details <span className="text-muted-foreground font-normal">(all optional)</span></p>

                        <div className="space-y-2">
                          <Label htmlFor="websiteType">Type of Website</Label>
                          <Input
                            id="websiteType"
                            placeholder="e.g. small business, tutoring, portfolio, community"
                            {...register("websiteType")}
                            data-testid="input-website-type"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="websitePages">Estimated Number of Pages</Label>
                          <Input
                            id="websitePages"
                            placeholder="e.g. 3–5"
                            {...register("websitePages")}
                            data-testid="input-website-pages"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="websiteFeatures">Desired Features</Label>
                          <Input
                            id="websiteFeatures"
                            placeholder="e.g. contact form, booking, gallery, blog"
                            {...register("websiteFeatures")}
                            data-testid="input-website-features"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="websiteLaunch">Target Launch Date</Label>
                          <Input
                            id="websiteLaunch"
                            placeholder="e.g. within 2 months, flexible"
                            {...register("websiteLaunch")}
                            data-testid="input-website-launch"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="websiteDomain">Existing Domain (if applicable)</Label>
                          <Input
                            id="websiteDomain"
                            placeholder="e.g. yourbusiness.com"
                            {...register("websiteDomain")}
                            data-testid="input-website-domain"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="websiteBudget">Approximate Budget</Label>
                          <Input
                            id="websiteBudget"
                            placeholder="e.g. $150–$300"
                            {...register("websiteBudget")}
                            data-testid="input-website-budget"
                          />
                        </div>
                      </div>
                    )}

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Share your goals, questions, or project idea…"
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
                      {isSubmitting ? "Sending…" : "Send Message"}
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
