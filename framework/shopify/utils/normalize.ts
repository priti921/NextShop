//normalizing product details aka changing their data handles
import { ImageEdge, Product as ShopifyProduct } from "../schema";
import { Product } from "../../common/types/product";

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

//param type specified
export function normalizeProduct(productNode: ShopifyProduct): Product {
  //destructuring product
  const {
    id,
    title: name,
    handle,
    vendor,
    description,
    images: ImageConnection,
    ...rest
  } = productNode;

  //reassigning product details
  const product = {
    id,
    name,
    vendor,
    description,
    images: normalizeProductImage(ImageConnection),
    path: `/${handle}`,
    slug: handle.replace(/^\/+|\/+$/g, ""), //replace with slug, remove leading and ending slashes
    ...rest,
  };

  return product;
}
