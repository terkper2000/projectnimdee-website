import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Twitter, Instagram, Linkedin, Youtube, ChevronRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LayoutProps {
  children: React.ReactNode;
}

interface SubItem {
  label: string;
  href?: string;
  available: boolean;
  badge?: string;
}

interface MenuCategory {
  id: string;
  label: string;
  items: SubItem[];
}

const resourceMenu: MenuCategory[] = [
  {
    id: "math",
    label: "Alberta Mathematics",
    items: [
      { label: "Math 7", available: false },
      { label: "Math 8", available: false },
      { label: "Math 9", available: false },
      { label: "Math 10C", available: false },
      { label: "Math 20-1", available: false },
    ],
  },
  {
    id: "science",
    label: "Alberta Science",
    items: [
      { label: "Science 7", available: false },
      { label: "Science 8", available: false },
      { label: "Science 9", available: false },
      { label: "Science 10", href: "/resources/science-10", available: true },
      { label: "Biology 20", href: "/resources/biology-20", available: true },
      { label: "Biology 30", href: "/resources/biology-30", available: true },
      { label: "Chemistry 20", available: false },
      { label: "Chemistry 30", available: false },
    ],
  },
  {
    id: "life",
    label: "Life Science",
    items: [
      { label: "Study Skills & Habits", available: false },
      { label: "Growth Mindset", available: false },
      { label: "Time Management", available: false },
      { label: "STEM Career Pathways", available: false },
    ],
  },
  {
    id: "ai",
    label: "Think Like a Machine",
    items: [
      { label: "Intro to AI & How It Works", available: false, badge: "Coming Soon" },
      { label: "Machine Learning Basics", available: false },
      { label: "Ethics in AI", available: false },
      { label: "AI in Everyday Life", available: false },
    ],
  },
  {
    id: "digital",
    label: "Digital Literacy",
    items: [
      { label: "Internet Safety", available: false },
      { label: "Evaluating Online Sources", available: false },
      { label: "Digital Citizenship", available: false },
      { label: "Privacy & Data Awareness", available: false },
    ],
  },
  {
    id: "computing",
    label: "Computing",
    items: [
      { label: "Intro to Python", available: false, badge: "Coming Soon" },
      { label: "Robotics Foundations", available: false },
      { label: "Block-Based Coding", available: false },
      { label: "Computational Thinking", available: false },
    ],
  },
];

function ResourcesMegaMenu({ onClose }: { onClose: () => void }) {
  const [activeCategory, setActiveCategory] = useState<string>("science");
  const active = resourceMenu.find((c) => c.id === activeCategory)!;

  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 z-50 w-[680px] max-w-[calc(100vw-2rem)]">
      <div className="bg-background rounded-xl shadow-2xl border overflow-hidden flex">
        {/* Left column — categories */}
        <div className="w-56 bg-muted/50 border-r flex flex-col py-2 shrink-0">
          <Link
            href="/resources"
            onClick={onClose}
            className="flex items-center justify-between px-4 py-2.5 text-sm font-bold text-primary hover:bg-primary/10 transition-colors mx-2 rounded-lg mb-1"
            data-testid="megamenu-all-resources"
          >
            All Resources
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
          <div className="h-px bg-border mx-4 mb-1" />
          {resourceMenu.map((cat) => (
            <button
              key={cat.id}
              onMouseEnter={() => setActiveCategory(cat.id)}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center justify-between w-full text-left px-4 py-2.5 text-sm font-medium transition-colors mx-0 rounded-none ${
                activeCategory === cat.id
                  ? "bg-primary/10 text-primary font-semibold"
                  : "text-foreground hover:bg-muted"
              }`}
              data-testid={`megamenu-cat-${cat.id}`}
            >
              {cat.label}
              <ChevronRight className={`w-3.5 h-3.5 transition-colors ${activeCategory === cat.id ? "text-primary" : "text-muted-foreground"}`} />
            </button>
          ))}
        </div>

        {/* Right column — subcategory items */}
        <div className="flex-1 py-4 px-5">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3 pb-2 border-b">
            {active.label}
          </p>
          <ul className="space-y-1">
            {active.items.map((item, i) => (
              <li key={i}>
                {item.available && item.href ? (
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center justify-between group px-3 py-2 rounded-lg hover:bg-primary/8 transition-colors"
                    data-testid={`megamenu-item-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {item.label}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                        Available
                      </span>
                      <ChevronRight className="w-3.5 h-3.5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </Link>
                ) : (
                  <div className="flex items-center justify-between px-3 py-2 rounded-lg opacity-50 cursor-default">
                    <span className="text-sm font-medium text-foreground">{item.label}</span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                      {item.badge ?? "Soon"}
                    </span>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-3 border-t">
            <Link
              href="/resources"
              onClick={onClose}
              className="text-xs font-semibold text-primary hover:underline"
              data-testid={`megamenu-see-all-${activeCategory}`}
            >
              See all {active.label} →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Layout({ children }: LayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState<string | null>(null);
  const [location] = useLocation();
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
    setMegaMenuOpen(false);
    setMobileResourcesOpen(false);
    setMobileCategoryOpen(null);
  }, [location]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(e.target as Node)) {
        setMegaMenuOpen(false);
      }
    };
    if (megaMenuOpen) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [megaMenuOpen]);

  const handleResourcesMouseEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaMenuOpen(true);
  };

  const handleResourcesMouseLeave = () => {
    closeTimer.current = setTimeout(() => setMegaMenuOpen(false), 150);
  };

  const isResourcesActive = location === "/resources" || location.startsWith("/resources/");

  const otherLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/support", label: "Support the Mission" },
    { href: "/services", label: "Additional Services" },
    { href: "/contact", label: "Contact" },
  ];

  const allNavLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/resources", label: "Resources" },
    { href: "/support", label: "Support the Mission" },
    { href: "/services", label: "Additional Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-sm border-b"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          <Link href="/" className="group flex flex-col" data-testid="link-home-logo">
            <span className="text-2xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">
              Project Nimdeɛ
            </span>
            <span className="text-xs text-muted-foreground hidden sm:block">
              Teaching, tools, and thoughtful STEM learning.
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {otherLinks.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === link.href ? "text-primary" : "text-foreground"
                }`}
                data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.label}
              </Link>
            ))}

            {/* Resources with mega menu */}
            <div
              ref={megaMenuRef}
              className="relative"
              onMouseEnter={handleResourcesMouseEnter}
              onMouseLeave={handleResourcesMouseLeave}
            >
              <button
                onClick={() => setMegaMenuOpen((o) => !o)}
                className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
                  isResourcesActive ? "text-primary" : "text-foreground"
                }`}
                data-testid="link-nav-resources"
                aria-expanded={megaMenuOpen}
              >
                Resources
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${megaMenuOpen ? "rotate-180" : ""}`} />
              </button>

              {megaMenuOpen && (
                <ResourcesMegaMenu onClose={() => setMegaMenuOpen(false)} />
              )}
            </div>

            {otherLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === link.href ? "text-primary" : "text-foreground"
                }`}
                data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-b shadow-lg absolute w-full left-0 top-20 overflow-y-auto max-h-[80vh] flex flex-col py-2 px-4">
            <Link
              href="/"
              className={`text-base font-medium py-3 border-b transition-colors ${location === "/" ? "text-primary" : "text-foreground"}`}
              data-testid="link-mobile-nav-home"
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-base font-medium py-3 border-b transition-colors ${location === "/about" ? "text-primary" : "text-foreground"}`}
              data-testid="link-mobile-nav-about"
            >
              About
            </Link>

            {/* Mobile Resources accordion */}
            <div className="border-b">
              <button
                className={`flex items-center justify-between w-full text-base font-medium py-3 transition-colors ${isResourcesActive ? "text-primary" : "text-foreground"}`}
                onClick={() => setMobileResourcesOpen((o) => !o)}
                data-testid="link-mobile-nav-resources"
              >
                Resources
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileResourcesOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileResourcesOpen && (
                <div className="pb-2 space-y-1">
                  <Link
                    href="/resources"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 text-primary font-semibold text-sm"
                    data-testid="link-mobile-all-resources"
                  >
                    <ChevronRight className="w-4 h-4" />
                    All Resources
                  </Link>
                  {resourceMenu.map((cat) => (
                    <div key={cat.id}>
                      <button
                        className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold text-foreground hover:bg-muted rounded-lg transition-colors"
                        onClick={() => setMobileCategoryOpen((o) => o === cat.id ? null : cat.id)}
                        data-testid={`link-mobile-cat-${cat.id}`}
                      >
                        {cat.label}
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${mobileCategoryOpen === cat.id ? "rotate-180" : ""}`} />
                      </button>
                      {mobileCategoryOpen === cat.id && (
                        <ul className="pl-4 mt-1 space-y-0.5">
                          {cat.items.map((item, i) => (
                            <li key={i}>
                              {item.available && item.href ? (
                                <Link
                                  href={item.href}
                                  className="flex items-center justify-between px-3 py-2 text-sm text-foreground hover:text-primary rounded-lg hover:bg-muted transition-colors"
                                  data-testid={`link-mobile-item-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                                >
                                  {item.label}
                                  <span className="text-xs font-semibold px-1.5 py-0.5 rounded-full bg-primary/10 text-primary">→</span>
                                </Link>
                              ) : (
                                <div className="flex items-center justify-between px-3 py-2 text-sm text-muted-foreground opacity-60">
                                  {item.label}
                                  <span className="text-xs">Soon</span>
                                </div>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {otherLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-medium py-3 border-b transition-colors ${location === link.href ? "text-primary" : "text-foreground"}`}
                data-testid={`link-mobile-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      <main className="flex-1 pt-20">{children}</main>

      <footer className="bg-secondary text-secondary-foreground py-12 mt-20 border-t border-secondary-foreground/10">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-2">Project Nimdeɛ</h3>
            <p className="text-secondary-foreground/80 mb-6">Knowledge. Learning. Opportunity.</p>
            <div className="flex gap-4">
              <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors" data-testid="link-social-twitter"><Twitter size={20} /></a>
              <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors" data-testid="link-social-instagram"><Instagram size={20} /></a>
              <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors" data-testid="link-social-linkedin"><Linkedin size={20} /></a>
              <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors" data-testid="link-social-youtube"><Youtube size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 font-serif text-lg">Quick Links</h4>
            <ul className="space-y-2">
              {allNavLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-secondary-foreground/80 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 font-serif text-lg">Contact</h4>
            <p className="text-secondary-foreground/80 mb-4">
              Have questions about resources, tutoring, or supporting the mission?
            </p>
            <Button asChild variant="outline" className="bg-transparent border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10">
              <Link href="/contact" data-testid="link-footer-contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
        <div className="container mx-auto px-4 md:px-6 mt-12 pt-8 border-t border-secondary-foreground/10 text-center text-secondary-foreground/60 text-sm">
          <p>© 2026 Project Nimdeɛ. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
