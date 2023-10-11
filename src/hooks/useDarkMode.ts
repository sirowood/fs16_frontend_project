import { create } from "zustand";

import DarkModeStore from "../types/darkMode";

const useDarkMode = create<DarkModeStore>((set) => ({
  darkMode: false,
  toggleDarkMode: () => set(({ darkMode }) => ({ darkMode: !darkMode }))
}));

export default useDarkMode;
