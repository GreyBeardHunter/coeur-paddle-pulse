import { Button } from "@/components/ui/button";
import heroBg from "@/assets/paddling-lake.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />

      <div className="relative z-10 container text-center px-4 py-32">
        <p className="font-body font-medium text-sm md:text-base tracking-[0.25em] uppercase text-primary-foreground/70 mb-4 animate-fade-slide-up">
          Coeur d'Alene Outrigger Canoe Club
        </p>
        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-7xl text-primary-foreground leading-tight text-balance mb-6 animate-fade-slide-up" style={{ animationDelay: "0.1s" }}>
          From Lake to Ocean,
          <br />
          <span className="text-accent">All Are Welcome</span> to Paddle
        </h1>
        <p className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-slide-up" style={{ animationDelay: "0.2s" }}>
          Join Idaho's premier outrigger canoe club on the stunning waters of Lake Coeur d'Alene. No experience needed — just a love for the water.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-slide-up" style={{ animationDelay: "0.3s" }}>
          <Button variant="hero" size="lg" asChild>
            <a href="#join">Paddle With Us</a>
          </Button>
          <Button variant="hero-outline" size="lg" asChild>
            <a href="#about">Learn More</a>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-gentle-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/50" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
