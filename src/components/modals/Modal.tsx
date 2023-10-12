import { Box, Modal as MaterialModal } from '@mui/material';

import { ModalProps } from '../../types/modal';
import modalBox from '../../styles/modal';

const Modal = ({ children, open, onClose }: ModalProps) => {
  return (
    <MaterialModal
      open={open}
      onClose={onClose}
      component="aside"
    >
      <Box
        component="section"
        sx={modalBox}
      >
        {children}
      </Box>
    </MaterialModal>
  );
};

export default Modal;
