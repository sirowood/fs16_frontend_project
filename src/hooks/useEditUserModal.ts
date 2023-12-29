import { create } from "zustand";

import { EditUserModalStore } from "../types/modal";
import { FullUserFormValues } from '../types/form';

const defaultValues = {
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  role: '',
  avatar: '',
}

const useEditProductModal = create<EditUserModalStore>((set) => ({
  defaultValues,
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false, defaultValues }),
  setDefaultValues: (defaultValues: FullUserFormValues) => set({ defaultValues }),
}));

export default useEditProductModal;
