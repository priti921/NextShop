import { ApiConfig } from "@common/types/api";
import { Product } from "@common/types/product";
//returns products as an array of slugs
type ReturnType = {
  products: Pick<Product, "slug">[];
};

const getAllProductPaths = async (config: ApiConfig): Promise<ReturnType> => {
  return {
    products: [
      { slug: "cool-hat" },
      { slug: "lightweight-jacket" },
      { slug: "t-shirt" },
    ],
  };
};

export default getAllProductPaths;
