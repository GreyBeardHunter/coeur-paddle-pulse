import aboutImg from "@/assets/about-canoe.jpg";
import { Users, Waves, Mountain } from "lucide-react";

const features = [
  {
    icon: Waves,
    title: "Ancient Tradition",
    description: "Outrigger canoeing originated in the Pacific Islands thousands of years ago. We carry that tradition to the inland waters of Idaho.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "Whether you're a seasoned paddler or touching a paddle for the first time, our crew welcomes everyone with open arms.",
  },
  {
    icon: Mountain,
    title: "Pacific Northwest",
    description: "Paddle surrounded by the breathtaking beauty of Lake Coeur d'Alene, with mountain views and pristine water.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={aboutImg}
                alt="Outrigger canoe bow on Lake Coeur d'Alene"
                className="w-full h-[400px] md:h-[500px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-accent/10 -z-10" />
            <div className="absolute -top-4 -left-4 w-32 h-32 rounded-xl bg-lake-light -z-10" />
          </div>

          {/* Content */}
          <div>
            <p className="font-body font-semibold text-sm tracking-[0.2em] uppercase text-accent mb-3">
              About Our Club
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6 leading-tight">
              Paddling Together on <span className="text-primary">Lake Coeur d'Alene</span>
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
              CDA Outrigger brings the spirit of Hawaiian outrigger canoeing to the heart of North Idaho. We're a welcoming community of paddlers who share a passion for the water, fitness, and the camaraderie that comes from moving a canoe together.
            </p>

            <div className="space-y-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-lake-light flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
