import { ApiConfig } from "@common/types/api";
import { Product } from "@common/types/product";
import { getAllProductsPathsQuery } from "@framework/utils";
import { ProductConnection } from "@framework/schema";
//returns products as an array of slugs
type ReturnType = {
  products: Pick<Product, "slug">[];
};

const getAllProductPaths = async (config: ApiConfig): Promise<ReturnType> => {
  const { data } = await config.fetch<{ products: ProductConnection }>({
    query: getAllProductsPathsQuery,
    url: config.apiUrl,
  });

  const products = data.products.edges.map(({ node: { handle } }) => {
    return {
      slug: handle,
    };
  });

  return { products };
};

export default getAllProductPaths;
