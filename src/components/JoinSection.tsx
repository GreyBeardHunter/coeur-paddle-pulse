import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const membershipTiers = [
  {
    name: "Individual",
    price: "$75",
    period: "/ year",
    description: "Full access for one paddler",
    benefits: [
      "All regular practices and open paddles",
      "Use of club canoes and equipment",
      "Race team eligibility",
      "Club events and social gatherings",
    ],
    featured: false,
  },
  {
    name: "Family",
    price: "$125",
    period: "/ year",
    description: "For the whole 'ohana",
    benefits: [
      "Everything in Individual",
      "Coverage for all household members",
      "Youth paddler inclusion (14+)",
      "Family-friendly events priority",
    ],
    featured: true,
  },
  {
    name: "Youth / Student",
    price: "$40",
    period: "/ year",
    description: "Ages 14–22",
    benefits: [
      "All regular practices",
      "Use of club equipment",
      "Mentorship from experienced paddlers",
      "Race team eligibility",
    ],
    featured: false,
  },
];

const JoinSection = () => {
  return (
    <section id="join" className="py-20 md:py-28 bg-lake-light">
      <div className="container px-4">
        <div className="text-center mb-14">
          <p className="font-body font-semibold text-sm tracking-[0.2em] uppercase text-accent mb-3">
            Become a Member
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Your Seat in the Canoe is Waiting
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            Membership is open to everyone. No experience required — your first practice is always free. Come try it out before you commit!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {membershipTiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1 ${
                tier.featured
                  ? "bg-primary shadow-elevated text-primary-foreground ring-2 ring-accent"
                  : "bg-card shadow-card"
              }`}
            >
              {tier.featured && (
                <span className="inline-block font-body text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-accent text-accent-foreground mb-4">
                  Most Popular
                </span>
              )}
              <h3 className={`font-heading font-bold text-xl mb-1 ${tier.featured ? "text-primary-foreground" : "text-foreground"}`}>
                {tier.name}
              </h3>
              <p className={`font-body text-sm mb-4 ${tier.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                {tier.description}
              </p>
              <div className="mb-6">
                <span className={`font-heading font-extrabold text-4xl ${tier.featured ? "text-accent" : "text-primary"}`}>
                  {tier.price}
                </span>
                <span className={`font-body text-sm ${tier.featured ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                  {tier.period}
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {tier.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${tier.featured ? "text-accent" : "text-secondary"}`} />
                    <span className={`font-body text-sm ${tier.featured ? "text-primary-foreground/90" : "text-foreground"}`}>{b}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={tier.featured ? "hero" : "accent"}
                className="w-full"
                asChild
              >
                <a href="#contact">Join Today</a>
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center font-body text-sm text-muted-foreground mt-10">
          CDA Outrigger is a 501(c)(3) non-profit. Membership dues support equipment, insurance, and club operations.
        </p>
      </div>
    </section>
  );
};

export default JoinSection;
