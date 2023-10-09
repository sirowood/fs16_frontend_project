import { create } from "zustand";

import { EditProductModalStore } from "../types/modal";
import { FullProductFormValues } from '../types/form';

const defaultValues = {
  id: 0,
  title: '',
  price: 0,
  description: '',
  categoryId: 0,
  images: [{ url: '' }],
}

const useEditProductModal = create<EditProductModalStore>((set) => ({
  defaultValues,
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false, defaultValues }),
  setDefaultValues: (defaultValues: FullProductFormValues) => set({ defaultValues }),
}));

export default useEditProductModal;
