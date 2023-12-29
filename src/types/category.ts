type Category = {
  id: string,
  name: string,
  image: string,
  createdAt: string,
  updatedAt: string,
}

type CategoriesRes = {
  items: Category[],
  total: number,
  pages: number,
}

type AddCategoryReq = {
  name: string,
  image: string,
};

type GetCategoriesReq = {
  offset?: number,
  limit?: number,
};

type UpdateCategoryReq = {
  id: string,
  categoryNewData: {
    name: string,
    image: string,
  }
};

export type {
  Category,
  CategoriesRes,
  AddCategoryReq,
  GetCategoriesReq,
  UpdateCategoryReq
};
