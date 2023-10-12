import { SetStateAction } from 'react';
import { Box, Button } from '@mui/material';

import { paginationControlBox } from '../../styles/home';

type PaginationControlProps = {
  page: number;
  setPage: (value: SetStateAction<number>) => void;
  nextButtonDisabled: boolean;
};

const PaginationControl = ({
  page,
  setPage,
  nextButtonDisabled,
}: PaginationControlProps) => {
  const handlePreviousButton = () => {
    setPage(page - 1);
  };

  const handleNextButton = () => {
    setPage(page + 1);
  };

  return (
    <Box sx={paginationControlBox}>
      <Button
        size="small"
        variant="text"
        onClick={handlePreviousButton}
        disabled={page === 0}
      >
        Previous
      </Button>
      <Button
        size="small"
        variant="text"
        onClick={handleNextButton}
        disabled={nextButtonDisabled}
      >
        Next
      </Button>
    </Box>
  );
};

export default PaginationControl;
