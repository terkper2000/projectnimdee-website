import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Twitter, Instagram, Linkedin, Youtube, ChevronRight, ChevronDown, Search, LayoutDashboard, LogOut, LogIn } from "lucide-react";
import SearchModal from "@/components/SearchModal";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

interface LayoutProps {
  children: React.ReactNode;
}

interface UnitLink {
  label: string;
  name: string;
  href: string;
}

interface SubItem {
  label: string;
  href?: string;
  available: boolean;
  badge?: string;
  units?: UnitLink[];
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
      {
        label: "Math 9", href: "/resources/math-9", available: true,
        units: [
          { label: "Unit 1", name: "Rational Numbers", href: "/resources/math-9/unit-1" },
          { label: "Unit 2", name: "Powers & Exponents", href: "/resources/math-9/unit-2" },
          { label: "Unit 3", name: "Polynomial Operations", href: "/resources/math-9/unit-3" },
          { label: "Unit 4", name: "Polygon Geometry", href: "/resources/math-9/unit-4" },
          { label: "Unit 5", name: "Linear Relations", href: "/resources/math-9/unit-5" },
          { label: "Unit 6", name: "Equations & Inequalities", href: "/resources/math-9/unit-6" },
          { label: "Unit 7", name: "Circle Geometry", href: "/resources/math-9/unit-7" },
          { label: "Unit 8", name: "Data & Probability", href: "/resources/math-9/unit-8" },
        ],
      },
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
      {
        label: "Science 10", href: "/resources/science-10", available: true,
        units: [
          { label: "Unit A", name: "Energy & Matter in Chemical Change", href: "/resources/science-10/unit-a" },
          { label: "Unit B", name: "Energy Flow in Technological Systems", href: "/resources/science-10/unit-b" },
          { label: "Unit C", name: "Matter Cycling in Living Systems", href: "/resources/science-10/unit-c" },
          { label: "Unit D", name: "Global Energy Systems", href: "/resources/science-10/unit-d" },
        ],
      },
      {
        label: "Biology 20", href: "/resources/biology-20", available: true,
        units: [
          { label: "Unit A", name: "Energy & Matter", href: "/resources/biology-20/unit-a" },
          { label: "Unit B", name: "Ecosystems", href: "/resources/biology-20/unit-b" },
          { label: "Unit C", name: "Photosynthesis & Cellular Respiration", href: "/resources/biology-20/unit-c" },
          { label: "Unit D", name: "Human Systems", href: "/resources/biology-20/unit-d" },
        ],
      },
      {
        label: "Biology 30", href: "/resources/biology-30", available: true,
        units: [
          { label: "Unit A", name: "Nervous & Endocrine Systems", href: "/resources/biology-30" },
          { label: "Unit B", name: "Reproduction & Development", href: "/resources/biology-30" },
          { label: "Unit C", name: "Genetics & Molecular Biology", href: "/resources/biology-30" },
          { label: "Unit D", name: "Population & Community Dynamics", href: "/resources/biology-30" },
        ],
      },
      { label: "Chemistry 20", available: false },
      { label: "Chemistry 30", available: false },
    ],
  },
  {
    id: "life",
    label: "Life Skills",
    items: [
      { label: "Study Skills & Habits", href: "/resources/life-skills/study-skills", available: true },
      { label: "Growth Mindset", href: "/resources/life-skills/growth-mindset", available: true },
      { label: "Time Management", href: "/resources/life-skills/time-management", available: true },
      { label: "STEM Career Pathways", href: "/resources/life-skills/stem-careers", available: true },
    ],
  },
  {
    id: "ai",
    label: "Think Like a Machine",
    items: [
      { label: "Intro to AI & How It Works", href: "/resources/intro-to-ai", available: true },
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

function MobileAuthLinks() {
  const { user, isLoading, signOut } = useAuth();
  if (isLoading) return null;
  if (user) {
    return (
      <div className="pt-2 pb-1 space-y-1">
        <Link href="/dashboard"
          className="flex items-center gap-2 py-2.5 text-base font-medium text-primary"
          data-testid="link-mobile-nav-dashboard">
          <LayoutDashboard className="w-4 h-4" /> Dashboard
        </Link>
        <button onClick={() => signOut()}
          className="flex items-center gap-2 py-2.5 text-base font-medium text-muted-foreground w-full text-left">
          <LogOut className="w-4 h-4" /> Sign out ({user.firstName ?? user.email})
        </button>
      </div>
    );
  }
  return (
    <div className="pt-3 pb-1">
      <Link href="/sign-in"
        className="flex items-center gap-2 py-2.5 text-base font-semibold text-primary"
        data-testid="link-mobile-nav-signin">
        <LogIn className="w-4 h-4" /> Sign in / Create account
      </Link>
    </div>
  );
}

function AuthNavButtons() {
  const { user, isLoading } = useAuth();
  if (isLoading) return null;
  if (user) return <NavUserMenu />;
  return (
    <div className="hidden md:flex items-center gap-2 ml-2">
      <Button asChild size="sm" variant="outline"
        className="rounded-full px-4 font-medium border-primary/40 text-primary hover:bg-primary/8"
        data-testid="button-nav-signin">
        <Link href="/sign-in"><LogIn className="w-3.5 h-3.5 mr-1.5" />Sign in</Link>
      </Button>
    </div>
  );
}

function NavUserMenu() {
  const { user, signOut } = useAuth();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    if (open) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 pl-1 pr-3 py-1.5 rounded-full border border-border hover:border-primary/40 hover:bg-primary/5 transition-all"
        data-testid="button-nav-user-menu">
        <div className="w-7 h-7 rounded-full bg-primary/15 flex items-center justify-center overflow-hidden shrink-0">
          {user?.avatarUrl
            ? <img src={user.avatarUrl} alt="" className="w-full h-full object-cover" />
            : <span className="text-xs font-bold text-primary">{(user?.firstName?.[0] ?? user?.email?.[0] ?? "?").toUpperCase()}</span>}
        </div>
        <span className="text-sm font-medium text-foreground max-w-[100px] truncate">{user?.firstName ?? "Account"}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-2 w-52 bg-background border rounded-xl shadow-xl z-50 py-1.5 overflow-hidden">
          <div className="px-4 py-2.5 border-b">
            <p className="text-sm font-bold text-foreground truncate">{user?.firstName} {user?.lastName}</p>
            <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
          </div>
          <Link href="/dashboard" onClick={() => setOpen(false)}
            className="flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium text-foreground hover:bg-primary/8 hover:text-primary transition-colors"
            data-testid="link-nav-dashboard">
            <LayoutDashboard className="w-4 h-4" /> Dashboard
          </Link>
          <button onClick={() => signOut()}
            className="flex items-center gap-2.5 w-full text-left px-4 py-2.5 text-sm font-medium text-muted-foreground hover:bg-rose-50 hover:text-rose-600 transition-colors"
            data-testid="button-nav-signout">
            <LogOut className="w-4 h-4" /> Sign out
          </button>
        </div>
      )}
    </div>
  );
}

function ResourcesMegaMenu({ onClose }: { onClose: () => void }) {
  const [activeCategory, setActiveCategory] = useState<string>("science");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const active = resourceMenu.find((c) => c.id === activeCategory)!;
  const hoveredSubItem = active.items.find((i) => i.label === hoveredItem && i.units);

  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 z-50 w-[860px] max-w-[calc(100vw-2rem)]">
      <div className="bg-background rounded-xl shadow-2xl border overflow-hidden flex">
        {/* Col 1 — categories */}
        <div className="w-52 bg-muted/50 border-r flex flex-col py-2 shrink-0">
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
              onMouseEnter={() => { setActiveCategory(cat.id); setHoveredItem(null); }}
              onClick={() => { setActiveCategory(cat.id); setHoveredItem(null); }}
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

        {/* Col 2 — subjects */}
        <div className={`py-4 px-5 shrink-0 ${hoveredSubItem ? "w-56 border-r" : "flex-1"}`}>
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3 pb-2 border-b">
            {active.label}
          </p>
          <ul className="space-y-1">
            {active.items.map((item, i) => (
              <li
                key={i}
                onMouseEnter={() => setHoveredItem(item.units ? item.label : null)}
              >
                {item.available && item.href ? (
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={`flex items-center justify-between group px-3 py-2 rounded-lg transition-colors ${
                      hoveredItem === item.label ? "bg-primary/10" : "hover:bg-primary/8"
                    }`}
                    data-testid={`megamenu-item-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <span className={`text-sm font-medium transition-colors ${hoveredItem === item.label ? "text-primary" : "text-foreground group-hover:text-primary"}`}>
                      {item.label}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                        Available
                      </span>
                      <ChevronRight className={`w-3.5 h-3.5 text-primary transition-opacity ${hoveredItem === item.label ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} />
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

        {/* Col 3 — units panel (slides in when a subject with units is hovered) */}
        {hoveredSubItem && hoveredSubItem.units && (
          <div className="flex-1 py-4 px-5 bg-primary/3">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3 pb-2 border-b">
              {hoveredSubItem.label} — Units
            </p>
            <ul className="space-y-1">
              {hoveredSubItem.units.map((unit, i) => (
                <li key={i}>
                  <Link
                    href={unit.href}
                    onClick={onClose}
                    className="flex items-center gap-3 group px-3 py-2.5 rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                      {unit.label}
                    </span>
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors leading-tight">
                      {unit.name}
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-primary opacity-0 group-hover:opacity-100 transition-opacity ml-auto shrink-0" />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-3 border-t">
              <Link
                href={hoveredSubItem.href!}
                onClick={onClose}
                className="text-xs font-semibold text-primary hover:underline"
              >
                {hoveredSubItem.label} overview →
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function Layout({ children }: LayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
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

  useEffect(() => {
    const keyHandler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    const openHandler = (_e: Event) => setSearchOpen(true);
    document.addEventListener("keydown", keyHandler);
    window.addEventListener("open-search", openHandler);
    return () => {
      document.removeEventListener("keydown", keyHandler);
      window.removeEventListener("open-search", openHandler);
    };
  }, []);

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
        <div className="container mx-auto px-4 md:px-6 h-28 flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-3" data-testid="link-home-logo">
            <img
              src="/pn-logo.png"
              alt="Project Nimdeɛ logo"
              className="h-14 w-14 object-contain flex-shrink-0"
            />
            <div className="flex flex-col">
              <span className="text-2xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                Project Nimdeɛ
              </span>
              <span className="text-xs text-muted-foreground hidden sm:block">
                Teaching, tools, and thoughtful STEM learning.
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {otherLinks.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-medium transition-colors hover:text-primary ${
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
                className={`flex items-center gap-1 text-base font-medium transition-colors hover:text-primary ${
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
                className={`text-base font-medium transition-colors hover:text-primary ${
                  location === link.href ? "text-primary" : "text-foreground"
                }`}
                data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side: search + auth + mobile toggle */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 rounded-lg text-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              aria-label="Search (⌘K)"
              data-testid="button-search"
            >
              <Search size={20} />
            </button>

            {/* Auth buttons — desktop */}
            <AuthNavButtons />

            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
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
            {/* Mobile auth */}
            <MobileAuthLinks />
          </div>
        )}
      </header>

      <main className="flex-1 pt-20">{children}</main>

      <footer className="bg-secondary text-secondary-foreground py-12 mt-20 border-t border-secondary-foreground/10">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <img
                src="/pn-logo.png"
                alt="Project Nimdeɛ logo"
                className="h-12 w-12 object-contain flex-shrink-0"
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <h3 className="text-2xl font-serif font-bold">Project Nimdeɛ</h3>
            </div>
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
        <div className="container mx-auto px-4 md:px-6 mt-12 pt-8 border-t border-secondary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-secondary-foreground/60 text-sm">
          <p>© 2026 Project Nimdeɛ. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Notice</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}
