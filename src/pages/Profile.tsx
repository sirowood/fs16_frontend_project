import { Navigate } from 'react-router-dom';
import { Box } from '@mui/material';

import { useAppSelector } from '../redux/store';
import UpdateUserInfoForm from '../components/forms/UpdateUserInfoForm';
import UpdateUserPasswordForm from '../components/forms/UpdateUserPasswordForm';

const Profile = () => {
  const user = useAppSelector((state) => state.auth.user);

  if (!user) {
    return (
      <Navigate
        to="/"
        replace
      />
    );
  }

  return (
    <Box
      component="main"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        transition: 'all .5s ease',
        flexGrow: 1,
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 'lg',
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-around',
        }}
      >
        <UpdateUserInfoForm
          id={user.id}
          name={user.name}
          email={user.email}
          avatar={user.avatar}
        />
        <UpdateUserPasswordForm id={user.id} />
      </Box>
    </Box>
  );
};

export default Profile;
