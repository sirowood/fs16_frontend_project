type Product = {
  id: number,
  title: string,
  description: string,
  category: Category,
  categoryId: number,
  images: string[],
}

type GetProductsProps = {
  categoryId: number,
  offset: number,
  limit: number,
}