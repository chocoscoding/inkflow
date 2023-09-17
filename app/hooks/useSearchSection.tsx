import { create } from 'zustand';

interface useSearchSectionType {
  section: "Posts" | "Interviews" | "Meetups"|'Groups';
  on_posts: () => void;
  on_interview: () => void;
  on_meetup: () => void;
  on_group: () => void;
}

const useSearchSection = create<useSearchSectionType>((set) => ({
  section: 'Posts',
  on_posts: () => set({ section: 'Posts' }),
  on_interview: () => set({ section: 'Interviews' }),
  on_meetup: () => set({ section: 'Meetups' }),
  on_group: () => set({ section: 'Groups' })
}));


export default useSearchSection;
