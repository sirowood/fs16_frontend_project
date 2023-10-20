import Authed from './Authed';
import UnAuthed from './UnAuthed';
import { useAppSelector } from '../../redux/store';

const MenuBody = () => {
  const { user } = useAppSelector((state) => state.auth);

  if (user) {
    return <Authed user={user} />;
  }

  return <UnAuthed />;
};

export default MenuBody;
