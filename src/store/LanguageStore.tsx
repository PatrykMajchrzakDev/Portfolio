import create from "zustand";

interface LanguageState {
  lang: string;
  setLanguage: (lang: string) => void;
}

const useLanguageStore = create<LanguageState>((set) => ({
  lang: "en", // Default language
  setLanguage: (lang: string) => set({ lang }),
}));

export default useLanguageStore;
