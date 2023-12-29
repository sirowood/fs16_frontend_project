import { ChangeEvent } from "react";
import { SelectChangeEvent } from "@mui/material";

import { Category } from "./category";

type Product = {
  id: string,
  title: string,
  price: number,
  description: string,
  category: Category,
  categoryId: string,
  images: {
    id: string,
    url: string
  }[],
  createdAt: string,
  updatedAt: string,
};

type GetProductsReq = {
  categoryId?: string,
  offset?: number,
  limit?: number,
  title?: string,
  orderBy?: string,
  direction?: string,
};

type GetProductRes = {
  items: Omit<Product, 'categoryId'>[],
  total: number,
  pages: number,
};

type ProductRes = Omit<Product, 'categoryId'>;

type AddProductReq = {
  title: string,
  price: number,
  description: string,
  categoryId: string,
  images: {
    url: string
  }[],
};

type UpdateProductReq = {
  id: string,
  productNewData: {
    title: string,
    price: number,
    description: string,
    categoryId: string,
  },
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
  GetProductRes,
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
