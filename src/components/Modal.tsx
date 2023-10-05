import { Box, Modal as MaterialModal } from '@mui/material';

import { ModalProps } from '../types/modal';

const Modal = ({ children, open, onClose }: ModalProps) => {
  return (
    <MaterialModal
      open={open}
      onClose={onClose}
      component="aside"
    >
      <Box
        component="section"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: '8px',
        }}
      >
        {children}
      </Box>
    </MaterialModal>
  );
};

export default Modal;
