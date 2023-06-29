import { create } from "zustand";

interface WelcomeStepsType {
  steps: number;
  one: () => void;
  two: () => void;
  three: () => void;
  four: () => void;
}

const useWelcomeSteps = create<WelcomeStepsType>((set) => ({
  steps: 1,
  one: () => set({ steps: 1 }),
  two: () => set({ steps: 2 }),
  three: () => set({ steps: 3 }),
  four: () => set({ steps: 4 }),
}));

export default useWelcomeSteps;
