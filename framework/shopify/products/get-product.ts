import { ApiConfig } from "@common/types/api";

const getProduct = (config: ApiConfig) => {
  return {
    product: {
      name: "MY super product",
      slug: "my-super-product",
    },
  };
};

export default getProduct;
