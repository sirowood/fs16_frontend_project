import { SetStateAction } from 'react';
import { Avatar, Box } from '@mui/material';

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
        overflowX: 'auto',
        gap: '8px',
      }}
    >
      <Avatar
        sx={{
          height: { xs: '96px', sm: '128px' },
          width: { xs: '96px', sm: '128px' },
          ':hover': {
            cursor: 'pointer',
          },
        }}
        onClick={() => setCategoryId(0)}
      >
        ALL
      </Avatar>
      {data.map((category) => (
        <Avatar
          alt={category.name}
          src={category.image}
          onClick={() => setCategoryId(category.id)}
          sx={{
            height: { xs: '96px', sm: '128px' },
            width: { xs: '96px', sm: '128px' },
            ':hover': {
              cursor: 'pointer',
            },
          }}
        />
      ))}
    </Box>
  );
};

export default Categories;
