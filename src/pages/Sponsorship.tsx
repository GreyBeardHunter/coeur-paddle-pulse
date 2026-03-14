import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Users, Waves, Star } from "lucide-react";
import crewLaunch from "@/assets/crew-launch.jpg";
import paddlingLake from "@/assets/paddling-lake.jpg";

const Sponsorship = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero / Intro */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div
          className="absolute inset-0 bg-cover bg-center -z-10"
          style={{ backgroundImage: `url(${paddlingLake})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[hsla(209,78%,15%,0.5)] to-[hsla(209,78%,10%,0.8)]" />
        </div>
        <div className="container px-4 relative z-10 text-center max-w-3xl mx-auto">
          <p className="font-body font-semibold text-sm tracking-[0.2em] uppercase text-accent mb-4">
            Sponsorship
          </p>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground mb-6 leading-tight">
            Support the Waʻa
          </h1>
          <p className="font-body text-lg md:text-xl text-primary-foreground/85 leading-relaxed mb-4">
            The CDA Outrigger Canoe Club is building a new paddling community on Lake Coeur d'Alene
            inspired by the Hawaiian tradition of the waʻa.
          </p>
          <p className="font-body text-primary-foreground/70 leading-relaxed mb-4">
            Through teamwork, cultural respect, and connection to the water, we aim to create a
            welcoming environment where paddlers of all experience levels can learn and grow together.
          </p>
          <p className="font-body text-primary-foreground/70 leading-relaxed">
            Your support helps establish outrigger paddling in North Idaho while expanding access to
            outdoor recreation, community wellness, and stewardship of the lake.
          </p>
        </div>
      </section>

      {/* Founding Event */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center max-w-5xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={crewLaunch}
                alt="CDA Outrigger crew preparing canoe for launch"
                className="w-full h-[350px] md:h-[450px] object-cover"
                loading="lazy"
              />
            </div>

            <div>
              <p className="font-body font-semibold text-sm tracking-[0.2em] uppercase text-accent mb-3">
                Founding Event
              </p>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6 leading-tight">
                Spring Launch
              </h2>
              <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
                This spring we will host our founding gathering to introduce the club, share the story
                of outrigger paddling, and launch our canoe fund.
              </p>

              <p className="font-body font-semibold text-foreground mb-3">The event will include:</p>
              <ul className="space-y-3 mb-8">
                {[
                  { icon: Waves, text: "Introduction to waʻa culture" },
                  { icon: Star, text: "Club vision presentation" },
                  { icon: Heart, text: "Sponsor recognition" },
                  { icon: Users, text: "Community gathering" },
                ].map((item) => (
                  <li key={item.text} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-lake-light flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-body text-muted-foreground">{item.text}</span>
                  </li>
                ))}
              </ul>

              <p className="font-body text-muted-foreground leading-relaxed">
                Supporters and community members are invited to help us bring the first outrigger
                canoes to Lake Coeur d'Alene.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container px-4 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-body font-semibold text-sm tracking-[0.2em] uppercase text-accent mb-3">
              Sponsorship Levels
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground leading-tight">
              Partner With Us
            </h2>
          </div>

          <div className="space-y-10">
            {/* Founding Sponsor */}
            <div className="bg-card rounded-2xl border-2 border-accent shadow-elevated p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-accent text-accent-foreground text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-bl-xl">
                Limited
              </div>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                <div>
                  <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground">Founding Sponsor</h3>
                  <p className="font-body text-accent font-semibold text-xl mt-1">$5,000+</p>
                </div>
                <span className="font-body text-sm bg-accent/10 text-accent font-semibold px-4 py-1.5 rounded-full self-start">
                  Permanent Recognition
                </span>
              </div>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Founding Sponsors help establish the club and support the acquisition of the first canoes and foundational infrastructure.
              </p>
              <div className="mb-6">
                <p className="font-body font-semibold text-foreground mb-3">Benefits</p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {[
                    "Permanent recognition as a Founding Sponsor",
                    "Logo listed in Founding Sponsor section of website",
                    "Recognition at the Founding Launch Event",
                    "Name associated with the Canoe Fund",
                    "Invitation to Annual Sponsor Paddle",
                    "Featured story highlighting the partnership",
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="font-body text-sm text-muted-foreground">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="font-body text-sm text-muted-foreground italic">
                3–5 Founding Sponsors maximum — ensuring meaningful recognition for those who help launch the club.
              </p>
            </div>

            {/* Waʻa Partner */}
            <div className="bg-card rounded-2xl border border-border shadow-md p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="font-heading font-bold text-2xl text-foreground">Waʻa Partner</h3>
                  <p className="font-body text-accent font-semibold text-xl mt-1">$2,500</p>
                </div>
                <span className="font-body text-sm bg-muted text-muted-foreground font-semibold px-4 py-1.5 rounded-full self-start">
                  Annual (12 months)
                </span>
              </div>
              <ul className="space-y-2">
                {[
                  "Logo on club Sponsor Page",
                  "Recognition at club events",
                  "Social media feature posts",
                  "Invitation to Sponsor Paddle Experience",
                  "Sponsor spotlight in club newsletter",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span className="font-body text-sm text-muted-foreground">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ʻOhana Partner */}
            <div className="bg-card rounded-2xl border border-border shadow-md p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="font-heading font-bold text-2xl text-foreground">ʻOhana Partner</h3>
                  <p className="font-body text-accent font-semibold text-xl mt-1">$1,000</p>
                </div>
                <span className="font-body text-sm bg-muted text-muted-foreground font-semibold px-4 py-1.5 rounded-full self-start">
                  Annual (12 months)
                </span>
              </div>
              <ul className="space-y-2">
                {[
                  "Name or logo on sponsor page",
                  "Social media recognition",
                  "Invitation to a Community Paddle",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span className="font-body text-sm text-muted-foreground">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Community Partner & Individual Supporter side by side */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card rounded-2xl border border-border shadow-md p-8">
                <h3 className="font-heading font-bold text-xl text-foreground">Community Partner</h3>
                <p className="font-body text-accent font-semibold text-lg mt-1 mb-1">$500</p>
                <span className="font-body text-xs bg-muted text-muted-foreground font-semibold px-3 py-1 rounded-full">
                  Annual (12 months)
                </span>
                <ul className="space-y-2 mt-5">
                  {[
                    "Name listed on sponsor page",
                    "Social media thank-you",
                    "Invitation to club community event",
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="font-body text-sm text-muted-foreground">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card rounded-2xl border border-border shadow-md p-8">
                <h3 className="font-heading font-bold text-xl text-foreground">Individual Supporter</h3>
                <p className="font-body text-accent font-semibold text-lg mt-1 mb-1">$100+</p>
                <span className="font-body text-xs bg-muted text-muted-foreground font-semibold px-3 py-1 rounded-full">
                  Annual
                </span>
                <ul className="space-y-2 mt-5">
                  {[
                    "Name listed as supporter",
                    "Invitation to Supporter Paddle",
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="font-body text-sm text-muted-foreground">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sponsorship;
