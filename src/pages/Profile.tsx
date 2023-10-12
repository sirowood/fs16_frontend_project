import { Navigate } from 'react-router-dom';
import { Box } from '@mui/material';

import { useAppSelector } from '../redux/store';
import UpdateUserInfoForm from '../components/forms/UpdateUserInfoForm';
import UpdateUserPasswordForm from '../components/forms/UpdateUserPasswordForm';
import Main from '../components/Main';
import { profileBox } from '../styles/profile';

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
    <Main>
      <Box sx={profileBox}>
        <UpdateUserInfoForm
          id={user.id}
          name={user.name}
          email={user.email}
          avatar={user.avatar}
        />
        <UpdateUserPasswordForm id={user.id} />
      </Box>
    </Main>
  );
};

export default Profile;
