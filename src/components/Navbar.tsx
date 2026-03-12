import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Schedule", href: "#schedule" },
  { label: "Events", href: "#events" },
  { label: "Membership", href: "#join" },
  { label: "Sponsorship", href: "/sponsorship" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-card/95 backdrop-blur-md shadow-card" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#" className={`font-heading font-bold text-xl md:text-2xl tracking-tight transition-colors duration-300 ${scrolled ? "text-primary" : "text-primary-foreground"}`}>
          CDA Outrigger
        </a>

        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-body font-medium text-sm tracking-wide transition-colors duration-300 hover:text-accent ${
                scrolled ? "text-foreground" : "text-primary-foreground/90"
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button variant="accent" size="sm" asChild>
            <a href="#join">Paddle With Us</a>
          </Button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-2 transition-colors ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-card/98 backdrop-blur-lg border-t border-border animate-fade-slide-up">
          <div className="container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-body font-medium text-foreground text-lg py-2"
              >
                {link.label}
              </a>
            ))}
            <Button variant="accent" asChild className="mt-2">
              <a href="#join" onClick={() => setMobileOpen(false)}>Paddle With Us</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
