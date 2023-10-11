import { SetStateAction } from 'react';
import { Box } from '@mui/material';

import { useGetCategoriesQuery } from '../../redux/services/categoryApi';

type CategoriesProps = {
  setCategoryId: (value: SetStateAction<number>) => void;
};

const Categories = ({ setCategoryId }: CategoriesProps) => {
  const { data } = useGetCategoriesQuery();

  if (!data) {
    return null;
  }

  return (
    <Box
      component="section"
      sx={{
        display: 'flex',
        padding: '24px 0px',
      }}
    >
      <button onClick={() => setCategoryId(0)}>All</button>
      {/* TODO - Remove the slice  */}
      {data.slice(0, 5).map((category) => (
        <button
          key={category.id}
          onClick={() => setCategoryId(category.id)}
        >
          {category.name}
        </button>
      ))}
    </Box>
  );
};

export default Categories;
