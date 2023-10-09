import { LoginReq } from "./auth";
import { RegisterUserReq } from "./user";
import { ProductDefaultValues } from "./form";

type ModalStore = {
  isOpen: boolean,
  onOpen: () => void,
  onClose: () => void,
};
type EditProductModalStore = ModalStore & {
  defaultValues: ProductDefaultValues,
  setDefaultValues: (defaultValues: ProductDefaultValues) => void,
};

type ModalProps = {
  children: React.ReactNode,
  open: boolean,
  onClose: () => void,
};

type LoginFormData = LoginReq;

type RegisterFormData = RegisterUserReq;

export type {
  ProductDefaultValues,
  ModalStore,
  EditProductModalStore,
  ModalProps,
  LoginFormData,
  RegisterFormData,
};
