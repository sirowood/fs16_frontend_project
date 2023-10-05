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

export type {
  ModalStore,
  ModalProps,
};
