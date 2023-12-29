import { create } from "zustand";

import { EditCategoryModalStore } from "../types/modal";
import { FullCategoryFormValues } from '../types/form';

const defaultValues = {
  id: '',
  name: '',
  image: '',
}

const useEditCategoryModal = create<EditCategoryModalStore>((set) => ({
  defaultValues,
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false, defaultValues }),
  setDefaultValues: (defaultValues: FullCategoryFormValues) => set({ defaultValues }),
}));

export default useEditCategoryModal;
