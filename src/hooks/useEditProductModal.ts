import { create } from "zustand";

import { EditProductModalStore } from "../types/modal";
import { FullProductFormValues } from '../types/form';

const defaultValues = {
  id: '',
  title: '',
  price: 0,
  description: '',
  categoryId: '',
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
