import { ChangeEvent } from "react";
import { SelectChangeEvent } from "@mui/material";

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
  categoryId?: number,
  offset?: number,
  limit?: number,
  title?: string,
};

type ProductRes = Omit<Product, 'categoryId'>;

type AddProductReq = Omit<Product, 'id' | 'category' | 'creationAt' | 'updatedAt'>;

type UpdateProductReq = {
  id: number,
  productNewData: Partial<AddProductReq>,
};

type ProductListProps = {
  isLoading: boolean,
  counts?: number,
  title?: string,
  products?: ProductRes[],
};

type ProductCardProps = {
  isLoading: boolean,
  index: number,
  product?: ProductRes,
};

type ProductGalleryProps = {
  title?: string,
  images?: string[],
  isLoading: boolean,
};

type ProductInfoProps = {
  product?: ProductRes,
  isLoading: boolean,
};


type PaginationBarProps = {
  limit: number,
  page: number,
  count?: number,
  changeLimit: (e: SelectChangeEvent<number>) => void,
  changePage: (_: ChangeEvent<unknown>, value: number) => void,
};

type FiltersProps = {
  text: string,
  orderBy: string,
  changeText: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  changeOrderBy: (e: SelectChangeEvent<string>) => void,
};

export type {
  Product,
  GetProductsReq,
  ProductRes,
  AddProductReq,
  UpdateProductReq,
  ProductCardProps,
  ProductListProps,
  ProductGalleryProps,
  ProductInfoProps,
  PaginationBarProps,
  FiltersProps,
};
