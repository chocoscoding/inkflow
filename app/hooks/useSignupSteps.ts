import { create } from "zustand";

interface SignupStepsType {
  steps: number;
  one: () => void;
  two: () => void;
}

const useSignupSteps = create<SignupStepsType>((set) => ({
  steps: 1,
  one: () => set({ steps: 1 }),
  two: () => set({ steps: 2 }),
}));

export default useSignupSteps;
