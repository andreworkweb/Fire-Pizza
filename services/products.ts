import { Product } from "@prisma/client";
import { axiosInstance } from "./instance";
import { ApiRoutes } from "./constans";

export const search = async (query: string): Promise<Product[]> => {
  const response = await axiosInstance.get<{ products: Product[] }>(
    ApiRoutes.SEARCH_PRODUCTS,
    {
      params: { query },
    },
  );

  return response.data.products;
};