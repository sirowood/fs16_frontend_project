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

type GetAllProductsProps = {
  categoryId: number,
  offset: number,
  limit: number,
}