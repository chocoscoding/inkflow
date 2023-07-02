import { create } from 'zustand';

interface HomeSectionType {
  section: "New" | "Popular" | "Follow";
  new_: () => void;
  popular: () => void;
  follow: () => void;
}

const useHomeSection = create<HomeSectionType>((set) => ({
  section: 'New',
  new_: () => set({ section: 'New' }),
  popular: () => set({ section: 'Popular' }),
  follow: () => set({ section: 'Follow' })
}));


export default useHomeSection;
