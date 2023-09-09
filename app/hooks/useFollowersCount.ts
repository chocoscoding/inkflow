import { create } from "zustand";

interface FollowersCountStore {
  count: number;
  increase: () => void;
  decrease: () => void;
  newAmount: (newAmount: number) => void;
}

const useFollowersCount = create<FollowersCountStore>((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  newAmount: (newAmount: number) => set(() => ({ count: newAmount })),
}));

export default useFollowersCount;
