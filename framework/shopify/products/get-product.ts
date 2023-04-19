import { ApiConfig, Variables } from "@common/types/api";
import { getProductQuery, normalizeProduct } from "@framework/utils";
import { Product as ShopifyProduct } from "@framework/schema";
import { Product } from "@common/types/product";

type FetchType = {
  productByHandle: ShopifyProduct;
};

type ReturnType = {
  product: Product | null;
};

//                          vv passing destructed options
const getProduct = async (options: {
  config: ApiConfig;
  variables: Variables;
}): Promise<ReturnType> => {
  const { config, variables } = options;

  const { data } = await config.fetch<FetchType>({
    // passed product query && url from config along with optional variables as arg in fetch function of config
    query: getProductQuery,
    url: config.apiUrl,
    variables,
  });

  const { productByHandle } = data;

  //returning object with product property which includes productByHandle ( destructed from fetched data )
  //returned normalized product if exists else null
  return {
    product: productByHandle ? normalizeProduct(productByHandle) : null,
  };
};

export default getProduct;
