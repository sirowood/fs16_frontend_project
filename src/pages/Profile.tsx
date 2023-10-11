import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../redux/store';
import { Container } from '@mui/material';
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
    <Container
      component="main"
      maxWidth="xl"
      sx={{
        bgcolor: 'background.default',
        color: 'text.primary',
        transition: 'all .5s ease',
      }}
    >
      <UpdateUserInfoForm
        id={user.id}
        name={user.name}
        email={user.email}
        avatar={user.avatar}
      />
      <UpdateUserPasswordForm id={user.id} />
    </Container>
  );
};

export default Profile;
