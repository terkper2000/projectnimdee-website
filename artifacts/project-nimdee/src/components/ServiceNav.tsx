import { Link, useLocation } from "wouter";

const links = [
  { href: "/services", label: "Overview" },
  { href: "/services/learning-support", label: "Learning Support" },
  { href: "/services/website-design", label: "Website Design" },
  { href: "/services/consulting", label: "Educational Consulting" }
];

export function ServiceNav() {
  const [location] = useLocation();

  return (
    <div className="bg-background border-b relative z-30">
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center gap-1 sm:gap-2 py-3 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {links.map((link) => {
            const active = location === link.href;
            return (
              <Link 
                key={link.href} 
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors whitespace-nowrap ${
                  active 
                    ? "bg-primary text-primary-foreground" 
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  );
}
