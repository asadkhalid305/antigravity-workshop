import {
  ArrowUpRight,
  CalendarDays,
  CircleDollarSign,
  Compass,
  MapPinned,
  PlaneTakeoff,
  Sparkles,
} from "lucide-react";

const categoryPreview = [
  { label: "Lodging", value: "42%", color: "bg-primary" },
  { label: "Food", value: "21%", color: "bg-secondary" },
  { label: "Transport", value: "16%", color: "bg-info" },
  { label: "Activities", value: "13%", color: "bg-accent" },
];

const sampleTrips = [
  {
    destination: "Lisbon",
    dates: "5 days",
    total: "EUR 1,284",
    note: "Food was lower than expected.",
  },
  {
    destination: "Istanbul",
    dates: "7 days",
    total: "EUR 1,510",
    note: "Activities drove the difference.",
  },
  {
    destination: "Tbilisi",
    dates: "4 days",
    total: "EUR 790",
    note: "Best cost per day so far.",
  },
];

export default function Home() {
  return (
    <main className="app-shell min-h-screen px-4 py-5 sm:px-6 lg:px-10">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="grid size-10 place-items-center rounded-lg bg-primary text-primary-content shadow-sm">
              <Compass className="size-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-lg font-semibold leading-tight">TripLens</p>
              <p className="text-sm text-base-content/60">
                Post-trip travel insights
              </p>
            </div>
          </div>
          <button className="btn btn-primary btn-sm rounded-lg">
            <Sparkles className="size-4" aria-hidden="true" />
            New trip
          </button>
        </nav>

        <div className="floating-panel rounded-lg p-4 sm:p-6 lg:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-5">
              <div className="badge badge-accent badge-outline rounded-lg px-3 py-3">
                Built for the end of the trip
              </div>
              <div className="space-y-3">
                <h1 className="max-w-3xl text-4xl font-semibold tracking-normal text-balance sm:text-5xl">
                  See what your trips actually cost after the suitcase is back.
                </h1>
                <p className="max-w-2xl text-base leading-7 text-base-content/68 sm:text-lg">
                  TripLens turns post-trip category totals into personal travel
                  patterns: cost per day, category mix, yearly totals, and
                  comparisons that help the next trip feel less like guesswork.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="floating-card rounded-lg p-4">
                  <CalendarDays className="mb-3 size-5 text-primary" />
                  <p className="metric-label">Trips logged</p>
                  <p className="mt-1 text-2xl font-semibold">8</p>
                </div>
                <div className="floating-card rounded-lg p-4">
                  <CircleDollarSign className="mb-3 size-5 text-secondary" />
                  <p className="metric-label">Year spend</p>
                  <p className="mt-1 text-2xl font-semibold">EUR 5,270</p>
                </div>
                <div className="floating-card rounded-lg p-4">
                  <PlaneTakeoff className="mb-3 size-5 text-info" />
                  <p className="metric-label">Avg per day</p>
                  <p className="mt-1 text-2xl font-semibold">EUR 164</p>
                </div>
              </div>
            </div>

            <div className="floating-card rounded-lg p-4 sm:p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="metric-label">Latest insight</p>
                  <h2 className="mt-1 text-2xl font-semibold">
                    Lisbon was 18% below your yearly trip average.
                  </h2>
                </div>
                <MapPinned className="size-6 shrink-0 text-primary" />
              </div>

              <div className="mt-6 space-y-4">
                {categoryPreview.map((category) => (
                  <div key={category.label}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span>{category.label}</span>
                      <span className="font-medium">{category.value}</span>
                    </div>
                    <div className="h-3 rounded-lg bg-base-200">
                      <div
                        className={`${category.color} h-3 rounded-lg`}
                        style={{ width: category.value }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <section className="grid gap-4 lg:grid-cols-3">
          {sampleTrips.map((trip) => (
            <article className="floating-card rounded-lg p-5" key={trip.destination}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="metric-label">{trip.dates}</p>
                  <h2 className="mt-1 text-2xl font-semibold">
                    {trip.destination}
                  </h2>
                </div>
                <ArrowUpRight className="size-5 text-base-content/45" />
              </div>
              <p className="mt-6 text-3xl font-semibold">{trip.total}</p>
              <p className="mt-2 text-sm leading-6 text-base-content/62">
                {trip.note}
              </p>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}
