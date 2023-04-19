import { ApiConfig } from "@common/types/api";
import { Product } from "@common/types/product";
import { getAllProductsPathsQuery } from "@framework/utils";
import { ProductConnection } from "@framework/schema";

type FetchType = {
  products: ProductConnection;
};

//returns products as an array of slugs
type ReturnType = {
  products: Pick<Product, "slug">[]; // picking a type inside Product type
};

const getAllProductsPaths = async (config: ApiConfig): Promise<ReturnType> => {
  //fetching data as i use fetch function from config param and passed GQL query and api url from config
  const { data } = await config.fetch<FetchType>({
    query: getAllProductsPathsQuery,
    url: config.apiUrl,
  });

  //mapping through data as i destructure params in callback function as arguments
  const products = data.products.edges.map(({ node: { handle } }) => {
    return {
      slug: handle, //returning slugs for each products
    };
  });

  return { products };
};

export default getAllProductsPaths;
