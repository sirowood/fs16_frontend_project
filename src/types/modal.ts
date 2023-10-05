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

type LoginFormData = {
  email: string;
  password: string;
};

export type {
  ModalStore,
  ModalProps,
  LoginFormData,
};
