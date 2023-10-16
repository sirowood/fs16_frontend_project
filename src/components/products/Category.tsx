import { Box, Typography, Skeleton } from '@mui/material';

import { useGetSingleCategoryQuery } from '../../redux/services/categoryApi';
import { imgSkeleton } from '../../styles/product';
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
        <Skeleton
          variant="rectangular"
          animation="wave"
          sx={imgSkeleton}
        />
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
