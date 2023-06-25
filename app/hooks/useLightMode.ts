"use client";
import { create } from "zustand";

interface LightModeType {
  lightMode: boolean;
  toggleLight: () => void;
  toggleDark: () => void;
}
const LOCALSTORAGE_THEME_NAME = "inkflowTheme";

const getPreferredMode = () => {
  const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const light = window.matchMedia("(prefers-color-scheme: light)").matches;
  if (dark) {
    localStorage.setItem(LOCALSTORAGE_THEME_NAME, "true");
    return true;
  }
  if (light) {
    localStorage.setItem(LOCALSTORAGE_THEME_NAME, "false");
    return false;
  }
  return null;
};
const mutateClasslist = (type: boolean) => {
  const root = window.document.documentElement;
  if (type) {
    root.classList.remove("dark");
    root.classList.add("light");
    return;
  }
  root.classList.remove("light");
  root.classList.add("dark");
  return;
};
const getFromLocalStorage = () => {
  const localTheme = localStorage.getItem(LOCALSTORAGE_THEME_NAME);
  if (localTheme === "true") {
    mutateClasslist(true);
    return true;
  }
  if (localTheme === "false") {
    mutateClasslist(false);
    return false;
  }
  const PreferredMode = getPreferredMode();
  if (PreferredMode === null) {
    localStorage.setItem(LOCALSTORAGE_THEME_NAME, "false");
    mutateClasslist(false);
    return false;
  }
  mutateClasslist(PreferredMode);
  return PreferredMode;
};

const useLightMode = create<LightModeType>((set) => ({
  lightMode: getFromLocalStorage(),
  toggleLight: () => {
    localStorage.setItem(LOCALSTORAGE_THEME_NAME, "true");
    return set({ lightMode: true });
  },
  toggleDark: () => {
    localStorage.setItem(LOCALSTORAGE_THEME_NAME, "false");
    return set({ lightMode: false });
  },
}));

export default useLightMode;
