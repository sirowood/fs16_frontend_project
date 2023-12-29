import { Navigate } from 'react-router-dom';
import { Box } from '@mui/material';

import { useAppSelector } from '../redux/store';
import UpdateProfileForm from '../components/forms/UpdateProfileForm';
import UpdatePasswordForm from '../components/forms/UpdatePasswordForm';
import Main from '../components/Main';
import DeleteMe from '../components/profile/DeleteMe';
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
        <UpdateProfileForm
          id={user.id}
          firstName={user.firstName}
          lastName={user.lastName}
          email={user.email}
          avatar={user.avatar}
        />
        <UpdatePasswordForm />
      </Box>
      <DeleteMe />
    </Main>
  );
};

export default Profile;
