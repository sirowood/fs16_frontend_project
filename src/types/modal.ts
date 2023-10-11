import { FullProductFormValues } from "./form";

type ModalStore = {
  isOpen: boolean,
  onOpen: () => void,
  onClose: () => void,
};

type EditProductModalStore = ModalStore & {
  defaultValues: FullProductFormValues,
  setDefaultValues: (defaultValues: FullProductFormValues) => void,
};

type ModalProps = {
  children: React.ReactNode,
  open: boolean,
  onClose: () => void,
};

export type {
  ModalStore,
  EditProductModalStore,
  ModalProps,
};
