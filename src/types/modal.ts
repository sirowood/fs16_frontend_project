import { Address } from "./address";
import { FullCategoryFormValues, FullProductFormValues, FullUserFormValues } from "./form";

type ModalStore = {
  isOpen: boolean,
  onOpen: () => void,
  onClose: () => void,
};

type EditProductModalStore = ModalStore & {
  defaultValues: FullProductFormValues,
  setDefaultValues: (defaultValues: FullProductFormValues) => void,
};

type EditCategoryModalStore = ModalStore & {
  defaultValues: FullCategoryFormValues,
  setDefaultValues: (defaultValues: FullCategoryFormValues) => void,
};

type EditUserModalStore = ModalStore & {
  defaultValues: FullUserFormValues,
  setDefaultValues: (defaultValues: FullUserFormValues) => void,
};

type EditAddressModalStore = ModalStore & {
  defaultValues: Address,
  setDefaultValues: (defaultValues: Address) => void,
};

type ModalProps = {
  children: React.ReactNode,
  open: boolean,
  onClose: () => void,
};

export type {
  ModalStore,
  EditProductModalStore,
  EditCategoryModalStore,
  EditUserModalStore,
  EditAddressModalStore,
  ModalProps,
};
