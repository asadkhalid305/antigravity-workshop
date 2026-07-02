import {
  type CategoryBreakdownItem,
  type Trip,
  type TripCategoryId,
  type TripComparison,
  type TripInsightSummary,
  type YearlyTotal,
  tripCategories,
} from "./types";

const DAY_IN_MS = 24 * 60 * 60 * 1000;

function parseUtcDate(date: string) {
  const [year, month, day] = date.split("-").map(Number);
  return Date.UTC(year, month - 1, day);
}

export function getTripDurationDays(trip: Pick<Trip, "startDate" | "endDate">) {
  const start = parseUtcDate(trip.startDate);
  const end = parseUtcDate(trip.endDate);
  return Math.max(1, Math.round((end - start) / DAY_IN_MS) + 1);
}

export function getTripYear(trip: Pick<Trip, "startDate">) {
  return Number(trip.startDate.slice(0, 4));
}

export function getCategoryAmountCents(trip: Trip, categoryId: TripCategoryId) {
  return (
    trip.categoryTotals.find((total) => total.categoryId === categoryId)
      ?.amountCents ?? 0
  );
}

export function getTripTotalCents(trip: Trip) {
  return trip.categoryTotals.reduce(
    (sum, total) => sum + total.amountCents,
    0,
  );
}

export function getTripDailyCents(trip: Trip) {
  return Math.round(getTripTotalCents(trip) / getTripDurationDays(trip));
}

export function getTotalSpentCents(trips: Trip[]) {
  return trips.reduce((sum, trip) => sum + getTripTotalCents(trip), 0);
}

export function buildCategoryBreakdown(trips: Trip[]): CategoryBreakdownItem[] {
  const totalSpent = getTotalSpentCents(trips);

  return tripCategories.map((category) => {
    const amountCents = trips.reduce(
      (sum, trip) => sum + getCategoryAmountCents(trip, category.id),
      0,
    );

    return {
      categoryId: category.id,
      label: category.label,
      color: category.color,
      amountCents,
      percentage: totalSpent === 0 ? 0 : Math.round((amountCents / totalSpent) * 100),
    };
  });
}

export function buildYearlyTotals(trips: Trip[]): YearlyTotal[] {
  const byYear = new Map<number, YearlyTotal>();

  for (const trip of trips) {
    const year = getTripYear(trip);
    const existing = byYear.get(year) ?? {
      year,
      tripCount: 0,
      amountCents: 0,
    };

    byYear.set(year, {
      year,
      tripCount: existing.tripCount + 1,
      amountCents: existing.amountCents + getTripTotalCents(trip),
    });
  }

  return Array.from(byYear.values()).sort((a, b) => a.year - b.year);
}

export function findMostExpensiveTrip(trips: Trip[]) {
  return trips.reduce((current, trip) =>
    getTripTotalCents(trip) > getTripTotalCents(current) ? trip : current,
  );
}

export function findBestValueTrip(trips: Trip[]) {
  return trips.reduce((current, trip) =>
    getTripDailyCents(trip) < getTripDailyCents(current) ? trip : current,
  );
}

export function buildTripInsightSummary(
  trips: Trip[],
  currentTripId = trips[0]?.id,
): TripInsightSummary {
  if (trips.length === 0) {
    throw new Error("Cannot build TripLens insights without trips.");
  }

  const currentTrip =
    trips.find((trip) => trip.id === currentTripId) ?? trips[0];
  const totalTravelDays = trips.reduce(
    (sum, trip) => sum + getTripDurationDays(trip),
    0,
  );
  const totalSpentCents = getTotalSpentCents(trips);

  return {
    currentTrip,
    totalTrips: trips.length,
    totalSpentCents,
    averageTripCents: Math.round(totalSpentCents / trips.length),
    averageDailyCents: Math.round(totalSpentCents / totalTravelDays),
    totalTravelDays,
    categoryBreakdown: buildCategoryBreakdown(trips),
    yearlyTotals: buildYearlyTotals(trips),
    mostExpensiveTrip: findMostExpensiveTrip(trips),
    bestValueTrip: findBestValueTrip(trips),
  };
}

export function buildTripComparison(
  trips: Trip[],
  baseTripId: string,
  compareTripId: string,
): TripComparison {
  const baseTrip = trips.find((trip) => trip.id === baseTripId);
  const compareTrip = trips.find((trip) => trip.id === compareTripId);

  if (!baseTrip || !compareTrip) {
    throw new Error("Both trips must exist before building a comparison.");
  }

  const compareTotal = getTripTotalCents(compareTrip);
  const baseTotal = getTripTotalCents(baseTrip);
  const totalDeltaCents = baseTotal - compareTotal;

  return {
    baseTrip,
    compareTrip,
    totalDeltaCents,
    totalDeltaPercentage:
      compareTotal === 0 ? 0 : Math.round((totalDeltaCents / compareTotal) * 100),
    dailyDeltaCents: getTripDailyCents(baseTrip) - getTripDailyCents(compareTrip),
    categoryDeltas: tripCategories.map((category) => {
      const baseAmountCents = getCategoryAmountCents(baseTrip, category.id);
      const compareAmountCents = getCategoryAmountCents(compareTrip, category.id);
      const deltaCents = baseAmountCents - compareAmountCents;

      return {
        categoryId: category.id,
        label: category.label,
        color: category.color,
        baseAmountCents,
        compareAmountCents,
        deltaCents,
        deltaPercentage:
          compareAmountCents === 0
            ? 0
            : Math.round((deltaCents / compareAmountCents) * 100),
      };
    }),
  };
}

export function formatMoney(amountCents: number, currency = "EUR") {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amountCents / 100);
}

export function normalizeTripCategoryTotals(trip: Trip) {
  return tripCategories.map((category) => ({
    categoryId: category.id,
    amountCents: getCategoryAmountCents(trip, category.id),
    note: trip.categoryTotals.find((total) => total.categoryId === category.id)
      ?.note,
  }));
}
