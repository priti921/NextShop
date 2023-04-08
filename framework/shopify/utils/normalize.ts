//normalizing product details aka changing their data handles

import { Product as ShopifyProduct } from "../schema";

export function normalizeProduct(productNode: ShopifyProduct) {
  //param type specified

  //destructuring product
  const { id, title: name, handle, vendor, description, ...rest } = productNode;

  //reassigning product details
  const product = {
    id,
    name,
    vendor,
    description,
    path: `/${handle}`,
    slug: handle.replace(/^\/+|\/+$/g, ""), //replace with slug, remove leading and ending slashes
    ...rest,
  };

  return product;
}
