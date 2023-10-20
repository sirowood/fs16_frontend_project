import { Box, Typography } from '@mui/material';

import { useGetSingleCategoryQuery } from '../../redux/services/categoryApi';
import ImgSkeleton from '../ImgSkeleton';
import {
  categoryBox,
  categoryTitle,
  categoryTitleBox,
} from '../../styles/products';

const Category = ({ categoryId }: { categoryId: number }) => {
  const { data: category, isLoading } = useGetSingleCategoryQuery(categoryId, {
    skip: isNaN(categoryId),
  });

  return (
    <Box sx={categoryBox}>
      {isLoading ? (
        <ImgSkeleton />
      ) : (
        <>
          <Box
            component="img"
            src={category?.image}
            width="100%"
          />
          <Box sx={categoryTitleBox}>
            <Typography
              variant="h6"
              fontWeight="bold"
              color="whiteSmoke"
              sx={categoryTitle}
            >
              {category?.name}
            </Typography>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Category;
