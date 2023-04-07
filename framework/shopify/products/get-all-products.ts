import getAllProductsQuery from "../utils/queries/get-all-products";
import fetchAPI from "../utils/fetch-api";

const getAllProducts = async (): Promise<any[]> => {
  const products = await fetchAPI({ query: getAllProductsQuery });

  return products.data;
};

export default getAllProducts;
