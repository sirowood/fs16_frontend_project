import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import PersonPinIcon from '@mui/icons-material/PersonPin';

import { useAppSelector } from '../redux/store';
import Main from '../components/Main';
import RegisterForm from '../components/forms/RegisterForm';
import { authFormBox, authIcon } from '../styles/auth';

const Register = () => {
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
          <PersonPinIcon sx={authIcon} />
        </Box>
        <RegisterForm />
      </Box>
    </Main>
  );
};

export default Register;
