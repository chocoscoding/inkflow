import { create } from "zustand";

interface LightModeType {
  lightMode: boolean;
  on: () => void;
  off: () => void;
}

const useLightMode = create<LightModeType>((set) => ({
  lightMode: true,
  on: () => set({ lightMode: true }),
  off: () => set({ lightMode: false }),
}));

export default useLightMode;
