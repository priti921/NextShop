import getAllProductsQuery from "../utils/queries/get-all-products";
import fetchAPI from "../utils/fetch-api";
import { ProductConnection } from "../schema";

type ReturnType = {
  products: ProductConnection;
};

const getAllProducts = async (): Promise<any> => {
  const { data } = await fetchAPI<ReturnType>({ query: getAllProductsQuery }); //added fetchAPI function return type

  //mapping through edges to get products, destructured edge into { node: product}
  const products =
    data.products.edges.map(({ node: product }) => {
      return product;
    }) ?? []; //if function returns null, return empty array
  return products;
};

export default getAllProducts;
