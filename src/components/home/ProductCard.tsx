import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Badge,
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import useCart from '../../hooks/useCart';
import { ProductRes } from '../../types/product';

type ProductCardProps = {
  product: ProductRes;
  badgeContent: number;
};

const ProductCard = ({ product, badgeContent }: ProductCardProps) => {
  const navigate = useNavigate();
  const { addItem } = useCart();

  const navigateToProduct = useCallback(() => {
    navigate(`/products/${product.id}`);
  }, [navigate, product.id]);

  return (
    <Card sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        onClick={navigateToProduct}
        image={product.images[0]}
        title={product.title}
        sx={{
          ':hover': {
            cursor: 'pointer',
          },
        }}
      />
      <CardContent
        sx={{
          padding: '8px',
          flexGrow: 1,
        }}
      >
        <Typography variant="body1">{product.title}</Typography>
      </CardContent>
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '8px',
        }}
      >
        <Typography variant="subtitle2">€ {product.price}</Typography>
        <IconButton
          size="small"
          onClick={() =>
            addItem({
              id: product.id,
              title: product.title,
              price: product.price,
              image: product.images[0],
            })
          }
        >
          <Badge
            badgeContent={badgeContent}
            color="info"
          >
            <AddShoppingCartIcon color="primary" />
          </Badge>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
