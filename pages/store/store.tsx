import { create } from "zustand";
import { persist } from "zustand/middleware";

type dbGuest = {
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
};

type State = {
  thisGuest: Guest | null;
  guests: Guest[];
  pie: Pie;
  isInterested: boolean;
  guestSaved: boolean;
};

type Action = {
  loadGuests: (dbGuests: dbGuest[]) => Guest[];
  // addGuest: (g: Guest) => Guest[]
  // saveGuest
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
      pie: { numOfWine: 0, numOfCheese: 0 },
      updateGuest: (wine: boolean, cheese: boolean, suggestion: string) => {
        let numOfWine = get().pie.numOfWine;
        let numOfCheese = get().pie.numOfCheese;
        if (wine) {
          numOfWine += 1;
        }
        if (cheese) {
          numOfCheese += 1;
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
          },
          guestSaved: true,
        }));

        // TODO : SaveToDB
      },
      setName: (name: string) =>
        set((state) => ({
          thisGuest: { name: name, wine: false, cheese: false, suggestion: "" },
        })),
      loadGuests: (dbGuest: dbGuest[]) => {
        return dbGuest.map((v, _) => ({
          name: v.name,
          wine: v.wine,
          cheese: v.cheese,
          suggestion: v.suggestion,
        }));
      },
    }),
    {
      name: "guest-storage", // name of the item in the storage (must be unique)
    }
  )
);
