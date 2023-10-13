import { create } from "zustand";

import { ModalStore } from "../types/modal";

const useCheckoutModal = create<ModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useCheckoutModal;
