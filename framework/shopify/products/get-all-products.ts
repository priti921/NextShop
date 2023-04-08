import getAllProductsQuery from "../utils/queries/get-all-products";
import fetchAPI from "../utils/fetch-api";
import { ProductConnection } from "../schema";

type ReturnType = {
  products: ProductConnection;
};

const getAllProducts = async (): Promise<any> => {
  const { data } = await fetchAPI<ReturnType>({ query: getAllProductsQuery }); //added fetchAPI function return type

  return data.products;
};

export default getAllProducts;
