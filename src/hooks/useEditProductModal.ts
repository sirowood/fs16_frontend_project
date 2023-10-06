import { create } from "zustand";

import { ModalStore } from "../types/modal";

type DefaultValues = {
  id: number;
  title: string;
  price: number;
  description: string;
  categoryId: number;
  images: { url: string }[];
};

type EditProductModalProps = ModalStore & { defaultValues: DefaultValues, setDefaultValues: (defaultValues: DefaultValues) => void };

const defaultValues = {
  id: 0,
  title: '',
  price: 0,
  description: '',
  categoryId: 0,
  images: [{ url: '' }],
}

const useEditProductModal = create<EditProductModalProps>((set) => ({
  defaultValues,
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false, defaultValues }),
  setDefaultValues: (defaultValues: DefaultValues) => set({ defaultValues }),
}));

export default useEditProductModal;
