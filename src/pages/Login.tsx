import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import Main from '../components/Main';
import LoginForm from '../components/forms/LoginForm';
import { useAppSelector } from '../redux/store';
import { authFormBox, authIcon, registerText } from '../styles/auth';

const Login = () => {
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.auth);

  if (user) {
    navigate('/');
  }

  return (
    <Main>
      <Box
        sx={authFormBox}
        boxShadow={12}
      >
        <Box>
          <AccountCircleIcon sx={authIcon} />
        </Box>
        <LoginForm />
        <Box
          onClick={() => navigate('/register')}
          sx={registerText}
        >
          <Typography
            fontWeight="bold"
            textAlign="center"
          >
            No account? Register now
          </Typography>
        </Box>
      </Box>
    </Main>
  );
};

export default Login;
