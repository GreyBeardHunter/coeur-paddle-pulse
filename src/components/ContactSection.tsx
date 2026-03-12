import { Mail, MapPin, Instagram, Facebook } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container px-4">
        <div className="text-center mb-14">
          <p className="font-body font-semibold text-sm tracking-[0.2em] uppercase text-accent mb-3">
            Get In Touch
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Drop Us a Line
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto">
            Questions about paddling, membership, or just want to say aloha? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <a
            href="mailto:info@cdaoutrigger.com"
            className="bg-card rounded-xl p-6 text-center shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-1 group"
          >
            <div className="w-12 h-12 rounded-full bg-koa-light flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
              <Mail className="w-5 h-5 text-accent" />
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-1">Email</h3>
            <p className="font-body text-sm text-muted-foreground">info@cdaoutrigger.com</p>
          </a>

          <div className="bg-card rounded-xl p-6 text-center shadow-card">
            <div className="w-12 h-12 rounded-full bg-lake-light flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-1">Location</h3>
            <p className="font-body text-sm text-muted-foreground">Independence Point<br />Coeur d'Alene, Idaho</p>
          </div>

          <div className="bg-card rounded-xl p-6 text-center shadow-card">
            <div className="w-12 h-12 rounded-full bg-pine-light flex items-center justify-center mx-auto mb-4">
              <Instagram className="w-5 h-5 text-secondary" />
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-1">Follow Us</h3>
            <div className="flex justify-center gap-4 mt-2">
              <a href="https://instagram.com/cdaoutrigger" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com/cdaoutrigger" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted-foreground hover:text-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
