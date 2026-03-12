import { Instagram, Facebook, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container px-4">
        <div className="grid md:grid-cols-3 gap-8 items-start mb-8">
          <div>
            <p className="font-heading font-bold text-lg text-primary-foreground mb-1">CDA Outrigger</p>
            <p className="font-body text-sm text-primary-foreground/60 mb-3">Coeur d'Alene Outrigger Canoe Club</p>
            <div className="inline-flex items-center gap-1.5 text-xs text-primary-foreground/50 font-body">
              <Heart className="w-3 h-3" /> 501(c)(3) Non-Profit
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-heading font-semibold text-sm text-primary-foreground/80 mb-1">Quick Links</p>
            <a href="#about" className="font-body text-sm text-primary-foreground/60 hover:text-accent transition-colors">About</a>
            <a href="#schedule" className="font-body text-sm text-primary-foreground/60 hover:text-accent transition-colors">Schedule</a>
            <a href="#events" className="font-body text-sm text-primary-foreground/60 hover:text-accent transition-colors">Events</a>
            <a href="#join" className="font-body text-sm text-primary-foreground/60 hover:text-accent transition-colors">Membership</a>
            <a href="#contact" className="font-body text-sm text-primary-foreground/60 hover:text-accent transition-colors">Contact</a>
          </div>

          <div>
            <p className="font-heading font-semibold text-sm text-primary-foreground/80 mb-3">Follow Us</p>
            <div className="flex gap-3">
              <a href="https://instagram.com/cdaoutrigger" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:text-accent hover:bg-primary-foreground/20 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com/cdaoutrigger" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:text-accent hover:bg-primary-foreground/20 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6">
          <p className="font-body text-xs text-primary-foreground/40 text-center">
            © {new Date().getFullYear()} CDA Outrigger Canoe Club. All rights reserved. A 501(c)(3) non-profit organization.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
