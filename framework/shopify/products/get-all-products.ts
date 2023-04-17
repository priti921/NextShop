import { normalizeProduct, getAllProductsQuery } from "../utils"; //instead of importing from multiple paths, importing functions from index utils file
import { ProductConnection } from "../schema";
import { Product } from "@common/types/product";
import { ApiConfig } from "@common/types/api";

type ReturnType = {
  products: ProductConnection;
};

const getAllProducts = async (config: ApiConfig): Promise<Product[]> => {
  const { data } = await config.fetch<ReturnType>({
    url: config.apiUrl,
    query: getAllProductsQuery,
  }); //added fetchAPI function return type

  //mapping through edges to get products, destructured edge into { node: product} alias
  const products =
    data.products.edges.map(({ node: product }) => {
      return normalizeProduct(product); //  passed each product into normalize function to return a normalized product
    }) ?? []; //if function returns null, return empty array
  return products;
};

export default getAllProducts;
