import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const benefits = [
  "Access to all regular practices and open paddles",
  "Use of club canoes and equipment",
  "Race team eligibility and coaching",
  "Social events, potlucks, and community",
  "No prior paddling experience required",
  "All fitness levels welcome",
];

const JoinSection = () => {
  return (
    <section id="join" className="py-20 md:py-28 bg-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: info */}
            <div>
              <p className="font-body font-semibold text-sm tracking-[0.2em] uppercase text-accent mb-3">
                Become a Member
              </p>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6 leading-tight">
                Your Seat in the <span className="text-primary">Canoe</span> is Waiting
              </h2>
              <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
                Membership is open to everyone ages 14 and up. We welcome all experience levels — from total beginners to seasoned ocean paddlers.
              </p>

              <ul className="space-y-3 mb-8">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="font-body text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: CTA card */}
            <div className="bg-primary rounded-2xl p-8 md:p-10 shadow-elevated text-center">
              <h3 className="font-heading font-bold text-2xl text-primary-foreground mb-2">
                Annual Membership
              </h3>
              <p className="font-body text-primary-foreground/70 mb-6">
                Join us for the season
              </p>
              <div className="mb-8">
                <span className="font-heading font-extrabold text-5xl text-accent">$75</span>
                <span className="font-body text-primary-foreground/60 text-sm"> / year</span>
              </div>
              <Button variant="hero" size="lg" className="w-full mb-4" asChild>
                <a href="#contact">Join Today</a>
              </Button>
              <p className="font-body text-xs text-primary-foreground/50">
                First practice is always free. Come try it out!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
