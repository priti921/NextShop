//normalizing product details aka changing their data handles
import { ImageEdge, MoneyV2, Product as ShopifyProduct } from "../schema";
import { Product } from "@common/types/product";

//normalizing product images   //param type specified as array type of ImageEdge
const normalizeProductImage = ({ edges }: { edges: Array<ImageEdge> }) => {
  //mapping through edges => on each item in the array destructuring node => node then destructured into originalSrc(aliased to url) and the rest of properties
  return edges.map(({ node: { originalSrc: url, ...rest } }) => {
    return {
      url: `/images/${url}`,
      ...rest,
    };
  });
};

const normalizedProductPrice = ({ currencyCode, amount }: MoneyV2) => ({
  // turns into number
  value: +amount,
  currencyCode,
});
//param type specified
export function normalizeProduct(productNode: ShopifyProduct): Product {
  //destructuring ShopifyProduct
  const {
    id,
    title: name,
    handle,
    vendor,
    description,
    images: ImageConnection,
    priceRange,
    ...rest
  } = productNode;

  //reassigning product details
  const product = {
    id,
    name,
    vendor,
    description,
    path: `/${handle}`,
    slug: handle.replace(/^\/+|\/+$/g, ""), //replace with slug, remove leading and ending slashes
    images: normalizeProductImage(ImageConnection),
    price: normalizedProductPrice(priceRange.minVariantPrice),
    ...rest,
  };

  return product;
}
