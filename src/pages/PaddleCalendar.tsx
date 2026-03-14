import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Clock, ExternalLink } from "lucide-react";

interface PaddleSession {
  date: Date;
  label: string;
  time: string;
  location: string;
  note?: string;
}

const paddleSessions: PaddleSession[] = [
  // May 2026
  { date: new Date(2026, 4, 5), label: "Tuesday Paddle", time: "5:30 PM", location: "Independence Point" },
  { date: new Date(2026, 4, 13), label: "Wednesday Paddle", time: "5:30 PM", location: "Independence Point" },
  { date: new Date(2026, 4, 17), label: "Sunday Paddle", time: "9:00 AM", location: "Independence Point", note: "Weekend option" },
  { date: new Date(2026, 4, 21), label: "Thursday Paddle", time: "5:30 PM", location: "Independence Point" },
  { date: new Date(2026, 4, 25), label: "Monday Paddle", time: "5:30 PM", location: "Independence Point" },
  // June 2026
  { date: new Date(2026, 5, 2), label: "Tuesday Paddle", time: "5:30 PM", location: "Independence Point" },
  { date: new Date(2026, 5, 10), label: "Wednesday Paddle", time: "5:30 PM", location: "Independence Point" },
  { date: new Date(2026, 5, 14), label: "Sunday Paddle", time: "9:00 AM", location: "Independence Point" },
  { date: new Date(2026, 5, 18), label: "Thursday Paddle", time: "5:30 PM", location: "Independence Point" },
  { date: new Date(2026, 5, 22), label: "Monday Paddle", time: "5:30 PM", location: "Independence Point" },
  { date: new Date(2026, 5, 30), label: "Tuesday Paddle", time: "5:30 PM", location: "Independence Point" },
  // July 2026
  { date: new Date(2026, 6, 8), label: "Wednesday Paddle", time: "5:30 PM", location: "Independence Point" },
  { date: new Date(2026, 6, 12), label: "Sunday Paddle", time: "9:00 AM", location: "Independence Point" },
  { date: new Date(2026, 6, 16), label: "Thursday Paddle", time: "5:30 PM", location: "Independence Point" },
  { date: new Date(2026, 6, 20), label: "Monday Paddle", time: "5:30 PM", location: "Independence Point" },
  { date: new Date(2026, 6, 28), label: "Tuesday Paddle", time: "5:30 PM", location: "Independence Point" },
  // August 2026
  { date: new Date(2026, 7, 5), label: "Wednesday Paddle", time: "5:30 PM", location: "Independence Point" },
  { date: new Date(2026, 7, 9), label: "Sunday Paddle", time: "9:00 AM", location: "Independence Point" },
  { date: new Date(2026, 7, 13), label: "Thursday Paddle", time: "5:30 PM", location: "Independence Point" },
  { date: new Date(2026, 7, 17), label: "Monday Paddle", time: "5:30 PM", location: "Independence Point" },
  { date: new Date(2026, 7, 25), label: "Tuesday Paddle", time: "5:30 PM", location: "Independence Point" },
  { date: new Date(2026, 7, 29), label: "Saturday Paddle", time: "8:00 AM", location: "Independence Point", note: "Optional" },
  // September 2026
  { date: new Date(2026, 8, 2), label: "Wednesday Paddle", time: "5:30 PM", location: "Independence Point" },
  { date: new Date(2026, 8, 6), label: "Sunday Paddle", time: "9:00 AM", location: "Independence Point" },
  { date: new Date(2026, 8, 10), label: "Thursday Paddle", time: "5:30 PM", location: "Independence Point" },
  { date: new Date(2026, 8, 14), label: "Monday Paddle", time: "5:30 PM", location: "Independence Point" },
  { date: new Date(2026, 8, 22), label: "Tuesday Paddle", time: "5:30 PM", location: "Independence Point" },
  { date: new Date(2026, 8, 26), label: "Saturday Paddle", time: "8:00 AM", location: "Independence Point" },
];

const paddleDates = paddleSessions.map((s) => s.date);

function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

const PaddleCalendar = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [month, setMonth] = useState<Date>(new Date(2026, 4, 1));

  const selectedSession = selectedDate ? paddleSessions.find((s) => isSameDay(s.date, selectedDate)) : null;

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
  };

  // Replace with your actual Google Form URL
  const GOOGLE_FORM_URL = "#";

  // Get upcoming sessions for the sidebar list
  const upcomingSessions = paddleSessions
    .filter((s) => s.date >= new Date())
    .sort((a, b) => a.date.getTime() - b.date.getTime())
    .slice(0, 8);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-12 md:py-16">
        <div className="container px-4">
          <Button
            variant="ghost"
            className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 mb-4 -ml-2"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-3">
            Summer Paddle <span className="text-accent">Calendar</span>
          </h1>
          <p className="font-body text-primary-foreground/80 text-lg max-w-2xl">
            Browse our 2026 paddle schedule and RSVP for sessions. Click any highlighted date to see details and sign up.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container px-4 py-12 md:py-16">
        <div className="grid lg:grid-cols-[1fr_380px] gap-10">
          {/* Calendar */}
          <div className="bg-card rounded-xl shadow-card p-6 md:p-8">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={handleDateSelect}
              month={month}
              onMonthChange={setMonth}
              className="pointer-events-auto w-full"
              modifiers={{ paddle: paddleDates }}
              modifiersClassNames={{
                paddle: "bg-accent/20 text-accent font-bold hover:bg-accent/30 rounded-md",
              }}
              classNames={{
                months: "flex flex-col w-full",
                month: "space-y-6 w-full",
                caption: "flex justify-center pt-1 relative items-center",
                caption_label: "font-heading font-bold text-xl text-foreground",
                nav: "space-x-2 flex items-center",
                nav_button: "h-9 w-9 bg-muted hover:bg-accent/20 text-foreground rounded-lg p-0 flex items-center justify-center transition-colors",
                nav_button_previous: "absolute left-1",
                nav_button_next: "absolute right-1",
                table: "w-full border-collapse",
                head_row: "flex w-full",
                head_cell: "text-muted-foreground font-body font-semibold text-sm w-full text-center py-2",
                row: "flex w-full mt-1",
                cell: "w-full text-center text-sm p-0.5 relative",
                day: "h-10 w-full rounded-lg font-body text-sm transition-all hover:bg-muted aria-selected:bg-primary aria-selected:text-primary-foreground",
                day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground font-bold",
                day_today: "border-2 border-accent",
                day_outside: "text-muted-foreground/40 opacity-50",
                day_disabled: "text-muted-foreground opacity-30",
                day_hidden: "invisible",
              }}
              fromMonth={new Date(2026, 4, 1)}
              toMonth={new Date(2026, 8, 30)}
            />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Selected session detail */}
            {selectedSession ? (
              <div className="bg-card rounded-xl shadow-elevated p-6 border-l-4 border-accent animate-fade-slide-up">
                <h3 className="font-heading font-bold text-lg text-foreground mb-1">
                  {selectedSession.label}
                </h3>
                <p className="font-body text-sm text-accent font-semibold mb-4">
                  {selectedSession.date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })}
                </p>
                <div className="space-y-3 mb-5">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="font-body font-medium">{selectedSession.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="font-body">{selectedSession.location}</span>
                  </div>
                  {selectedSession.note && (
                    <span className="inline-block font-body text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-koa-light text-accent">
                      {selectedSession.note}
                    </span>
                  )}
                </div>
                <Button variant="accent" className="w-full" asChild>
                  <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Sign Up via Google Form
                  </a>
                </Button>
              </div>
            ) : (
              <div className="bg-card rounded-xl shadow-card p-6 text-center">
                <p className="font-body text-muted-foreground text-sm">
                  Click a highlighted date on the calendar to see session details and RSVP.
                </p>
              </div>
            )}

            {/* Upcoming list */}
            <div className="bg-card rounded-xl shadow-card p-6">
              <h3 className="font-heading font-bold text-base text-foreground mb-4">Upcoming Sessions</h3>
              <div className="space-y-3">
                {upcomingSessions.map((session, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setSelectedDate(session.date);
                      setMonth(new Date(session.date.getFullYear(), session.date.getMonth(), 1));
                      setRsvpSession(session);
                    }}
                    className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-muted/60 transition-colors text-left group"
                  >
                    <div>
                      <p className="font-body font-medium text-sm text-foreground group-hover:text-accent transition-colors">
                        {session.date.toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                        {" — "}
                        {session.date.toLocaleDateString("en-US", { weekday: "short" })}
                      </p>
                      <p className="font-body text-xs text-muted-foreground">{session.time}</p>
                    </div>
                    {session.note && (
                      <span className="font-body text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-koa-light text-accent">
                        {session.note}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RSVP Dialog */}
      <Dialog open={rsvpOpen} onOpenChange={setRsvpOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-heading">RSVP — {rsvpSession?.label}</DialogTitle>
            <DialogDescription className="font-body">
              {rsvpSession?.date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })} at {rsvpSession?.time}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmitRsvp} className="space-y-4 mt-2">
            <div>
              <label className="font-body text-sm font-medium text-foreground block mb-1.5">Name</label>
              <Input
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                maxLength={100}
              />
            </div>
            <div>
              <label className="font-body text-sm font-medium text-foreground block mb-1.5">Email</label>
              <Input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                maxLength={255}
              />
            </div>
            <Button type="submit" variant="accent" className="w-full">
              Confirm RSVP
            </Button>
            <p className="font-body text-xs text-muted-foreground text-center">
              We'll send a reminder before the session.
            </p>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PaddleCalendar;
