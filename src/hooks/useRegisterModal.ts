import { create } from "zustand";

type RegisterModalStore = {
  isOpen: boolean;
  openRegisterModal: () => void;
  closeRegisterModal: () => void;
}

const useRegisterModal = create<RegisterModalStore>((set) => ({
  isOpen: false,
  openRegisterModal: () => set({ isOpen: true }),
  closeRegisterModal: () => set({ isOpen: false }),
}));

export default useRegisterModal;
