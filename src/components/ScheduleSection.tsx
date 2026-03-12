import { Clock, MapPin, Calendar } from "lucide-react";

const scheduleData = [
  { day: "Tuesday", time: "5:30 PM", type: "Practice", location: "Independence Point" },
  { day: "Thursday", time: "5:30 PM", type: "Practice", location: "Independence Point" },
  { day: "Saturday", time: "8:00 AM", type: "Long Paddle", location: "Independence Point" },
  { day: "Sunday", time: "9:00 AM", type: "Open Paddle", location: "Independence Point" },
];

const ScheduleSection = () => {
  return (
    <section id="schedule" className="py-20 md:py-28 bg-lake-light">
      <div className="container px-4">
        <div className="text-center mb-14">
          <p className="font-body font-semibold text-sm tracking-[0.2em] uppercase text-accent mb-3">
            Practice Schedule
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Get on the Water
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto">
            We paddle spring through fall on Lake Coeur d'Alene. Come early — we love helping newcomers get started!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {scheduleData.map((item) => (
            <div
              key={item.day}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-1 group"
            >
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-accent" />
                <h3 className="font-heading font-bold text-lg text-foreground">{item.day}</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="font-body font-medium">{item.time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="font-body">{item.location}</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <span className="inline-block font-body text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-pine-light text-secondary">
                  {item.type}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center font-body text-sm text-muted-foreground mt-10">
          Schedule may vary. Check our social media for weather cancellations and special events.
        </p>
      </div>
    </section>
  );
};

export default ScheduleSection;
