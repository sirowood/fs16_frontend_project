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

  const addProductInCart = useCallback(() => {
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.images[0],
    });
  }, [addItem, product.id, product.images, product.price, product.title]);

  const navigateToProduct = useCallback(() => {
    navigate(`/products/${product.id}`);
  }, [navigate, product.id]);

  return (
    <Card>
      <CardMedia
        onClick={navigateToProduct}
        image={product.images[0]}
        title={product.title}
        sx={{ height: 256, width: 256 }}
      />
      <CardContent>
        <Typography variant="h6">{product.title}</Typography>
        <Typography>{product.price}</Typography>
      </CardContent>
      <CardActions>
        <IconButton
          size="small"
          onClick={addProductInCart}
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
