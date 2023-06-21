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

const getFromLocalStorage = () => {
  const localTheme = localStorage.getItem(LOCALSTORAGE_THEME_NAME);
  if (localTheme === "true") return true;
  if (localTheme === "false") return false;
  const PreferredMode = getPreferredMode();
  if (PreferredMode === null) {
    localStorage.setItem(LOCALSTORAGE_THEME_NAME, "false");
    return false;
  }
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
