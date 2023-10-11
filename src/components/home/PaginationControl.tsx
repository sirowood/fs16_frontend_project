import { SetStateAction } from 'react';

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
    <div>
      <button
        onClick={handlePreviousButton}
        disabled={page === 0}
      >
        Previous
      </button>
      <button
        onClick={handleNextButton}
        disabled={nextButtonDisabled}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationControl;
