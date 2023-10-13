import { IconButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import { useDarkMode } from '../../providers/ThemeProvider';

const DarkModeSwitch = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <IconButton onClick={toggleDarkMode}>
      {darkMode ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  );
};

export default DarkModeSwitch;
