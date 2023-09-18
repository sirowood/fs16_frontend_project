import Category from "./category";

type ProductBase = {
  title: string,
  description: string,
  categoryId: number,
  images: string[],
}

type Product = Omit<ProductBase, 'categoryId'> & {
  id: number,
  title: string,
  description: string,
  category: Category,
  images: string[],
}

export default Product;
