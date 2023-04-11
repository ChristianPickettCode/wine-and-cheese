import { create } from "zustand";
import { persist } from "zustand/middleware";

export type dbGuest = {
  name: string;
  wine: boolean;
  cheese: boolean;
  created_at: Date;
  id: number;
  suggestion: string;
};

export type Guest = {
  name: string | undefined;
  wine: boolean | undefined;
  cheese: boolean | undefined;
  suggestion: string | undefined;
};

type Pie = {
  numOfWine: number;
  numOfCheese: number;
  num0fSuggestion: number;
};

type State = {
  thisGuest: Guest | null;
  guests: Guest[];
  pie: Pie;
  isInterested: boolean;
  guestSaved: boolean;
};

type Action = {
  loadGuests: (dbGuests: dbGuest[]) => void;
  setName: (name: string) => void;
  updateGuest: (wine: boolean, cheese: boolean, suggestion: string) => void;
  acknowledged: () => void;
};

export const useStore = create<State & Action>()(
  persist(
    (set, get) => ({
      thisGuest: null,
      isInterested: false,
      guestSaved: false,
      acknowledged: () => set((state) => ({ isInterested: true })),
      guests: [],
      pie: { numOfWine: 0, numOfCheese: 0, num0fSuggestion: 0 },
      updateGuest: (wine: boolean, cheese: boolean, suggestion: string) => {
        let numOfWine = get().pie.numOfWine;
        let numOfCheese = get().pie.numOfCheese;
        let num0fSuggestion = get().pie.num0fSuggestion;
        if (wine) {
          numOfWine += 1;
        }
        if (cheese) {
          numOfCheese += 1;
        }
        if (suggestion) {
          num0fSuggestion += 1;
        }

        set((state) => ({
          thisGuest: {
            name: state.thisGuest?.name,
            wine: wine,
            cheese: cheese,
            suggestion: suggestion,
          },
          pie: {
            numOfWine: numOfWine,
            numOfCheese: numOfCheese,
            num0fSuggestion: num0fSuggestion,
          },
          guestSaved: true,
          guests: [
            ...state.guests,
            {
              name: state.thisGuest?.name,
              wine: wine,
              cheese: cheese,
              suggestion: suggestion,
            },
          ],
        }));
      },
      setName: (name: string) =>
        set((state) => ({
          thisGuest: { name: name, wine: false, cheese: false, suggestion: "" },
        })),
      loadGuests: (dbGuest: dbGuest[]) => {
        let cheeseCount = 0;
        let wineCount = 0;
        let suggestionCount = 0;

        dbGuest.forEach((el) => {
          if (el.cheese) {
            cheeseCount += 1;
          }
          if (el.wine) {
            wineCount += 1;
          }
          if (el.suggestion) {
            suggestionCount += 1;
          }
        });

        set((state) => ({
          guests: dbGuest.map((v, _) => ({
            name: v.name,
            wine: v.wine,
            cheese: v.cheese,
            suggestion: v.suggestion,
          })),
          pie: {
            numOfCheese: cheeseCount,
            numOfWine: wineCount,
            num0fSuggestion: suggestionCount,
          },
        }));
      },
    }),
    {
      name: "guest-storage",
    }
  )
);
