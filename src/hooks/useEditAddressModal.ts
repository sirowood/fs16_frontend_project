import { create } from "zustand";

import { EditAddressModalStore } from "../types/modal";
import { Address } from "../types/address";

const defaultValues = {
  id: '',
  street: '',
  postCode: '',
  city: '',
  country: '',
}

const useEditAddressModal = create<EditAddressModalStore>((set) => ({
  defaultValues,
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false, defaultValues }),
  setDefaultValues: (defaultValues: Address) => set({ defaultValues }),
}));

export default useEditAddressModal;
