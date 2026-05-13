import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
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
            {navLinks.map((link) => (
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
          <div className="md:hidden bg-background border-b shadow-lg absolute w-full left-0 top-20 flex flex-col py-4 px-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-medium py-2 transition-colors ${
                  location === link.href ? "text-primary" : "text-foreground"
                }`}
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
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
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
          <p>© 2025 Project Nimdeɛ. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
