import { LoginReq } from "./auth";
import { RegisterUserReq } from "./user";

type ModalStore = {
  isOpen: boolean,
  onOpen: () => void,
  onClose: () => void,
};

type ModalProps = {
  children: React.ReactNode,
  open: boolean,
  onClose: () => void,
};

type LoginFormData = LoginReq;

type RegisterFormData = RegisterUserReq;

export type {
  ModalStore,
  ModalProps,
  LoginFormData,
  RegisterFormData,
};
