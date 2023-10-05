import { Box, Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';

import useAuthModal from '../hooks/useLoginModal';
import useRegisterModal from '../hooks/useRegisterModal';

const HeaderAuthPanel = () => {
  const { onOpen: openAuthModal } = useAuthModal();
  const { onOpen: openRegisterModal } = useRegisterModal();

  return (
    <Box
      sx={{
        display: 'flex',
        gap: '16px',
      }}
    >
      <Button
        size="small"
        onClick={openRegisterModal}
      >
        Register
      </Button>
      <Button
        size="small"
        startIcon={<LoginIcon fontSize="small" />}
        onClick={openAuthModal}
      >
        Login
      </Button>
    </Box>
  );
};

export default HeaderAuthPanel;
