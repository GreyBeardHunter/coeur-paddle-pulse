import canoeBeach from "@/assets/canoe-beach.jpg";
import crewLaunch from "@/assets/crew-launch.jpg";
import { Heart, Target, Eye, Compass, Users, Waves, TreePine, GraduationCap, Trophy } from "lucide-react";

const coreValues = [
  {
    icon: Heart,
    title: "Aloha Spirit",
    description: "More than a word — it's how we interact. With kindness, humility, and mutual respect in everything we do.",
  },
  {
    icon: Users,
    title: "ʻOhana (Community)",
    description: "Every member is welcomed, respected, and connected. We show up for each other, our community, and the water.",
  },
  {
    icon: Compass,
    title: "Kuleana (Responsibility)",
    description: "Stewardship through lake clean-ups, conservation efforts, and deep respect for the natural environment.",
  },
];

const clubPillars = [
  {
    icon: Waves,
    title: "Cultural Foundation",
    description: "Authentic Hawaiian paddling culture is central to our identity. We learn, practice, and perpetuate traditional paddling protocols and customs.",
    bg: "bg-lake-light",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: GraduationCap,
    title: "Education First",
    description: "A cultural and educational experience supported by strong community, welcoming all levels with a natural path toward competitive paddling.",
    bg: "bg-pine-light",
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
  },
  {
    icon: TreePine,
    title: "Community Impact",
    description: "A family-friendly hub, cultural bridge, youth development resource, and fitness outlet serving the greater Coeur d'Alene community.",
    bg: "bg-koa-light",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
  },
  {
    icon: Trophy,
    title: "Long-Term Vision",
    description: "Growing membership, strong community integration, youth programs, hosted events, and participation in regional races within five years.",
    bg: "bg-lake-light",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container px-4">
        {/* Who We Are */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-20 md:mb-28">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={crewLaunch}
                alt="CDA Outrigger crew launching canoe on Lake Coeur d'Alene"
                className="w-full h-[400px] md:h-[500px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-accent/10 -z-10" />
            <div className="absolute -top-4 -left-4 w-32 h-32 rounded-xl bg-lake-light -z-10" />
          </div>

          <div>
            <p className="font-body font-semibold text-sm tracking-[0.2em] uppercase text-accent mb-3">
              Who We Are
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6 leading-tight">
              Paddling Together on <span className="text-primary">Lake Coeur d'Alene</span>
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
              CDA Outrigger is Coeur d'Alene's outrigger canoe club. We paddle OC-6 (Outrigger Canoe 6-person) on Lake Coeur d'Alene and coordinate paddling opportunities throughout the Pacific Northwest and beyond.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              We are a registered 501(c)(3) non-profit organization dedicated to promoting the sport of outrigger canoeing, building community, and connecting people with the water. Whether you're a seasoned ocean paddler or have never touched a paddle, you belong here.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pine-light">
              <Heart className="w-4 h-4 text-secondary" />
              <span className="font-body text-sm font-medium text-secondary">501(c)(3) Non-Profit Organization</span>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20 md:mb-28">
          <div className="text-center mb-12">
            <p className="font-body font-semibold text-sm tracking-[0.2em] uppercase text-accent mb-3">
              Our Values
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground leading-tight">
              Grounded in <span className="text-primary">Aloha</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {coreValues.map((value) => (
              <div key={value.title} className="text-center px-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">{value.title}</h3>
                <p className="font-body text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20 md:mb-28">
          <div className="bg-lake-light rounded-2xl p-8 md:p-10">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-xl text-foreground mb-4">Our Mission</h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              The CDA Outrigger Canoe Club builds community, wellness, and connection to the water through the shared tradition of outrigger canoe paddling. Inspired by the Hawaiian waʻa and guided by the values of aloha, ʻohana, and kuleana, we welcome paddlers of all backgrounds to learn, paddle, and grow together while stewarding the waters of Lake Coeur d'Alene.
            </p>
          </div>

          <div className="bg-koa-light rounded-2xl p-8 md:p-10">
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-accent" />
            </div>
            <h3 className="font-heading font-bold text-xl text-foreground mb-4">Our Vision</h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              Our vision is to cultivate a thriving waʻa community in North Idaho where outrigger paddling becomes a source of connection, cultural appreciation, and outdoor wellness — establishing Lake Coeur d'Alene as a welcoming home for the spirit of the canoe.
            </p>
          </div>
        </div>

        {/* Club Identity Pillars */}
        <div className="mb-20 md:mb-28">
          <div className="text-center mb-12">
            <p className="font-body font-semibold text-sm tracking-[0.2em] uppercase text-accent mb-3">
              Club Identity
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground leading-tight">
              Culture, Community & <span className="text-primary">Growth</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {clubPillars.map((pillar) => (
              <div key={pillar.title} className={`${pillar.bg} rounded-2xl p-8`}>
                <div className={`w-12 h-12 rounded-xl ${pillar.iconBg} flex items-center justify-center mb-5`}>
                  <pillar.icon className={`w-6 h-6 ${pillar.iconColor}`} />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-3">{pillar.title}</h3>
                <p className="font-body text-muted-foreground leading-relaxed text-sm">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Photo strip */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="rounded-xl overflow-hidden shadow-card">
            <img src={canoeBeach} alt="Outrigger canoe with orange ama on the beach" className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
          </div>
          <div className="rounded-xl overflow-hidden shadow-card">
            <img src={crewLaunch} alt="Crew preparing the canoe at the shore" className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
          </div>
          <div className="rounded-xl overflow-hidden shadow-card hidden md:block">
            <img src={canoeBeach} alt="Canoe and equipment on the beach" className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-700 object-bottom" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
