import getAllProductsQuery from "../utils/queries/get-all-products";
import fetchAPI from "../utils/fetch-api";
import { ProductConnection } from "../schema";
import { normalizeProduct } from "../utils/normalize";
import { Product } from "@common/types/product";

type ReturnType = {
  products: ProductConnection;
};

const getAllProducts = async (): Promise<Product[]> => {
  const { data } = await fetchAPI<ReturnType>({ query: getAllProductsQuery }); //added fetchAPI function return type

  //mapping through edges to get products, destructured edge into { node: product} alias
  const products =
    data.products.edges.map(({ node: product }) => {
      return normalizeProduct(product); //  passed each product into normalize function to return a normalized product
    }) ?? []; //if function returns null, return empty array
  return products;
};

export default getAllProducts;
