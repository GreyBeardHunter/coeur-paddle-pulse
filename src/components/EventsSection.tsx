import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const upcomingEvents = [
  {
    date: "Every Friday",
    time: "5:00 PM",
    title: "Friday Night Paddle",
    type: "Casual / No-Drop",
    location: "Independence Point, CDA",
    description: "Our weekly casual paddle — great for beginners and regulars alike.",
  },
  {
    date: "Aug 23, 2025",
    time: "8:00 AM",
    title: "Paddle for the Lake",
    type: "Community Event",
    location: "Independence Point, CDA",
    description: "Annual fundraiser paddle supporting Lake Coeur d'Alene conservation efforts.",
    link: "#",
  },
  {
    date: "Sep 13, 2025",
    time: "7:00 AM",
    title: "Gorge Downwind Race",
    type: "Race",
    location: "Hood River, OR",
    description: "Pacific Northwest downwind race on the Columbia River Gorge.",
    link: "#",
  },
];

const EventsSection = () => {
  return (
    <section id="events" className="py-20 md:py-28 bg-background">
      <div className="container px-4">
        <div className="text-center mb-14">
          <p className="font-body font-semibold text-sm tracking-[0.2em] uppercase text-accent mb-3">
            Upcoming Events
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Get Involved
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto">
            From weekly paddles to regional races, there's always something happening.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {upcomingEvents.map((event) => (
            <div
              key={event.title}
              className="bg-card rounded-xl p-6 md:p-8 shadow-card hover:shadow-elevated transition-all duration-500 border border-border/50"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                {/* Date badge */}
                <div className="flex-shrink-0 text-center md:w-24">
                  <div className="inline-flex md:flex flex-col items-center bg-lake-light rounded-lg px-4 py-3 md:px-0">
                    <Calendar className="w-4 h-4 text-primary mb-1" />
                    <span className="font-heading font-bold text-sm text-primary">{event.date}</span>
                    <span className="font-body text-xs text-muted-foreground">{event.time}</span>
                  </div>
                </div>

                {/* Details */}
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-heading font-bold text-lg text-foreground mb-1">{event.title}</h3>
                      <p className="font-body text-sm text-muted-foreground mb-2">{event.description}</p>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="inline-flex items-center gap-1 text-xs font-body text-muted-foreground">
                          <MapPin className="w-3 h-3" /> {event.location}
                        </span>
                        <span className="inline-block font-body text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-pine-light text-secondary">
                          {event.type}
                        </span>
                      </div>
                    </div>
                    {event.link && (
                      <Button variant="outline" size="sm" asChild className="flex-shrink-0 hidden sm:flex">
                        <a href={event.link}>
                          Details <ExternalLink className="w-3 h-3" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="font-body text-sm text-muted-foreground mb-4">
            Follow us on social media for the latest updates and event announcements.
          </p>
          <Button variant="outline" asChild>
            <a href="https://www.strava.com/clubs/cda-outrigger" target="_blank" rel="noopener noreferrer">
              View on Strava <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
