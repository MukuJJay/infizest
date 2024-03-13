import { create } from "zustand";

type Store = {
  isNavActive: boolean;
  changeNavAction: (boolean: boolean) => void;
};

export const useUiObserver = create<Store>()((set) => ({
  isNavActive: false,
  changeNavAction: (boolean: boolean) =>
    set((state) => ({ isNavActive: boolean })),
}));
