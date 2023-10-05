import { Category } from "./category";

type Product = {
  id: number,
  title: string,
  price: number,
  description: string,
  category: Category,
  categoryId: number,
  images: string[],
  creationAt: string,
  updatedAt: string,
};

type GetProductsReq = {
  categoryId: number,
  offset: number,
  limit: number,
  title: string,
};

type ProductRes = Omit<Product, 'categoryId'>;

type AddProductReq = Omit<Product, 'id' | 'category' | 'creationAt' | 'updatedAt'>;

type UpdateProductReq = {
  id: number,
  productNewData: Partial<AddProductReq>,
};

export type {
  Product,
  GetProductsReq,
  ProductRes,
  AddProductReq,
  UpdateProductReq,
};
