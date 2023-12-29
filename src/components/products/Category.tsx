import { Box, Typography } from '@mui/material';

import { useGetSingleCategoryQuery } from '../../redux/services/categoryApi';
import ImgSkeleton from '../ImgSkeleton';
import {
  categoryBox,
  categoryTitle,
  categoryTitleBox,
} from '../../styles/products';

const Category = ({ categoryId }: { categoryId: string }) => {
  const { data: category, isFetching } = useGetSingleCategoryQuery(categoryId, {
    skip: !categoryId,
  });

  return (
    <Box sx={categoryBox}>
      {isFetching ? (
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
