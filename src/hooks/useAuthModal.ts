import { create } from "zustand";

type AuthModalStore = {
  isOpen: boolean;
  openAuthModal: () => void;
  closeAuthModal: () => void;
}

const useAuthModal = create<AuthModalStore>((set) => ({
  isOpen: false,
  openAuthModal: () => set({ isOpen: true }),
  closeAuthModal: () => set({ isOpen: false }),
}));

export default useAuthModal;
