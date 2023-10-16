import { Box, Typography, Grid } from '@mui/material';

import { ProductListProps, ProductRes } from '../types/product';
import ProductCard from './ProductCard';

const ProductList = ({
  isLoading,
  title,
  products,
  counts = 4,
}: ProductListProps) => {
  return (
    <Box
      component="section"
      paddingTop="24px"
    >
      {title && (
        <Typography
          variant="h6"
          fontWeight="bold"
        >
          {title}
        </Typography>
      )}
      <Grid
        container
        columnSpacing={{ sm: 2, md: 3, lg: 4 }}
        rowSpacing={2}
        paddingTop="16px"
      >
        {(isLoading ? Array.from(new Array(counts)) : products)?.map(
          (product: ProductRes | undefined, index) => (
            <ProductCard
              key={product?.id || index}
              index={index}
              isLoading={isLoading}
              product={product}
            />
          )
        )}
      </Grid>
    </Box>
  );
};

export default ProductList;
