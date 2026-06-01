import { Megaphone, AlertCircle, PartyPopper, Info } from "lucide-react";

type AnnouncementType = "cancellation" | "event" | "info";

interface Announcement {
  type: AnnouncementType;
  title: string;
  body: string;
}

// Update this list each week to keep paddlers in the loop.
const weekOf = "Week of June 23, 2026";

const announcements: Announcement[] = [
  {
    type: "info",
    title: "Friday Paddle",
    body: "Open paddle at NIC Beach — Just South of Yap-Keehn-Um Beach Volleyball Courts. Meet at 5:00 PM. All paddlers welcome.",
  },
  {
    type: "info",
    title: "Sunday Paddle",
    body: "Open paddle at NIC Beach — Just South of Yap-Keehn-Um Beach Volleyball Courts. Meet at 10:00 AM. Bring your ʻohana.",
  },
  {
    type: "event",
    title: "Fundraising Event at Doma Coffee",
    body: "Saturday, June 27th at Doma Coffee. More details to come — stay tuned!",
  },
];

const typeStyles: Record<AnnouncementType, { icon: typeof Info; badge: string; border: string; iconWrap: string }> = {
  cancellation: {
    icon: AlertCircle,
    badge: "bg-destructive/15 text-destructive",
    border: "border-l-destructive",
    iconWrap: "bg-destructive/15 text-destructive",
  },
  event: {
    icon: PartyPopper,
    badge: "bg-accent/20 text-accent",
    border: "border-l-accent",
    iconWrap: "bg-accent/20 text-accent",
  },
  info: {
    icon: Info,
    badge: "bg-lake-light text-primary",
    border: "border-l-primary",
    iconWrap: "bg-lake-light text-primary",
  },
};

const typeLabels: Record<AnnouncementType, string> = {
  cancellation: "Cancellation",
  event: "Event",
  info: "Heads Up",
};

const AnnouncementsSection = () => {
  return (
    <section id="announcements" className="py-16 md:py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center">
              <Megaphone className="w-5 h-5 text-accent" />
            </div>
            <p className="font-body font-semibold text-sm tracking-[0.2em] uppercase text-accent">
              This Week
            </p>
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground text-center mb-2">
            Announcements
          </h2>
          <p className="font-body text-muted-foreground text-center mb-10">{weekOf}</p>

          <div className="grid sm:grid-cols-2 gap-5">
            {announcements.map((a, i) => {
              const style = typeStyles[a.type];
              const Icon = style.icon;
              return (
                <article
                  key={i}
                  className={`bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-1 border-l-4 ${style.border}`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${style.iconWrap}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <span className={`inline-block font-body text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full mb-2 ${style.badge}`}>
                        {typeLabels[a.type]}
                      </span>
                      <h3 className="font-heading font-bold text-lg text-foreground mb-1.5">
                        {a.title}
                      </h3>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">
                        {a.body}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <p className="text-center font-body text-xs text-muted-foreground mt-8">
            Always double-check our social media for last-minute weather cancellations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AnnouncementsSection;