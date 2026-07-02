export const tripCategories = [
  {
    id: "lodging",
    label: "Lodging",
    shortLabel: "Stay",
    color: "#2f7f86",
    description: "Hotels, apartments, local stays, and city taxes.",
  },
  {
    id: "food",
    label: "Food",
    shortLabel: "Food",
    color: "#f28f7c",
    description: "Restaurants, groceries, coffee, and snacks.",
  },
  {
    id: "transport",
    label: "Transport",
    shortLabel: "Move",
    color: "#5aa9d6",
    description: "Flights, trains, buses, taxis, and local transit.",
  },
  {
    id: "activities",
    label: "Activities",
    shortLabel: "Do",
    color: "#68b7a4",
    description: "Museums, events, tours, tickets, and experiences.",
  },
  {
    id: "shopping",
    label: "Shopping",
    shortLabel: "Shop",
    color: "#f4c66d",
    description: "Souvenirs, clothes, gifts, and personal extras.",
  },
  {
    id: "admin",
    label: "Admin",
    shortLabel: "Admin",
    color: "#8aa4d6",
    description: "Visa, SIM, insurance, fees, luggage, and paperwork.",
  },
  {
    id: "misc",
    label: "Misc",
    shortLabel: "Other",
    color: "#9aa6a7",
    description: "Everything that does not belong elsewhere.",
  },
] as const;

export type TripCategoryId = (typeof tripCategories)[number]["id"];

export type CurrencyCode = "EUR" | "USD" | "GBP";

export type TripCategoryTotal = {
  categoryId: TripCategoryId;
  amountCents: number;
  note?: string;
};

export type Trip = {
  id: string;
  name: string;
  destination: string;
  country: string;
  startDate: string;
  endDate: string;
  currency: CurrencyCode;
  travelStyle: "city-break" | "slow-trip" | "workation" | "event-trip";
  summary: string;
  categoryTotals: TripCategoryTotal[];
};

export type CategoryBreakdownItem = {
  categoryId: TripCategoryId;
  label: string;
  color: string;
  amountCents: number;
  percentage: number;
};

export type YearlyTotal = {
  year: number;
  tripCount: number;
  amountCents: number;
};

export type TripInsightSummary = {
  currentTrip: Trip;
  totalTrips: number;
  totalSpentCents: number;
  averageTripCents: number;
  averageDailyCents: number;
  totalTravelDays: number;
  categoryBreakdown: CategoryBreakdownItem[];
  yearlyTotals: YearlyTotal[];
  mostExpensiveTrip: Trip;
  bestValueTrip: Trip;
};

export type TripComparisonCategoryDelta = {
  categoryId: TripCategoryId;
  label: string;
  color: string;
  baseAmountCents: number;
  compareAmountCents: number;
  deltaCents: number;
  deltaPercentage: number;
};

export type TripComparison = {
  baseTrip: Trip;
  compareTrip: Trip;
  totalDeltaCents: number;
  totalDeltaPercentage: number;
  dailyDeltaCents: number;
  categoryDeltas: TripComparisonCategoryDelta[];
};
