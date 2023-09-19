import axios, { AxiosResponse, AxiosError } from "axios";

const PRODUCT_BASE_URL = 'https://api.escuelajs.co/api/v1/products?';

const getAllProducts = async <T>({ categoryId, offset, limit }: GetAllProductsProps) => {
  let url = `${PRODUCT_BASE_URL}categoryId=${categoryId}&offset=${offset}&limit=${limit}`;

  try {
    const { data } = await axios.get<any, AxiosResponse<T>>(url);
    return data;
  } catch (e) {
    throw new Error((e as AxiosError).message);
  };
};

export {
  getAllProducts,
};
