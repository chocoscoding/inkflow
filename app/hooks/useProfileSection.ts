import { create } from "zustand";

interface ProfileSectionType {
  section: "posts" | "interviews" | "meetups";
  posts: () => void;
  interviews: () => void;
  meetups: () => void;
}

const useProfileSection = create<ProfileSectionType>((set) => ({
  section: "posts",
  posts: () => set({ section: "posts" }),
  interviews: () => set({ section: "interviews" }),
  meetups: () => set({ section: "meetups" }),
}));

export default useProfileSection;
