import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
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

import { addProductInCart } from '../redux/reducers/cartReducer';

import { ProductRes } from '../types/product';

type ProductCardProps = {
  product: ProductRes;
  badgeContent: number;
};

const ProductCard = ({ product, badgeContent }: ProductCardProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navigateToProduct = useCallback(() => {
    navigate(`/products/${product.id}`);
  }, [navigate, product.id]);

  const addProduct = useCallback(() => {
    dispatch(
      addProductInCart({
        productId: product.id,
        title: product.title,
        price: product.price,
        image: product.images[0],
      })
    );
  }, [dispatch, product.id, product.images, product.price, product.title]);

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
          onClick={addProduct}
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
