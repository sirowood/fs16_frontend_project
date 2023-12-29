import { create } from "zustand";

import { ModalStore } from "../types/modal";

const useAddAddressModal = create<ModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useAddAddressModal;
