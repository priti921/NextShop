//normalizing product details aka changing their data handles
import {
  ImageEdge,
  MoneyV2,
  ProductOption,
  Product as ShopifyProduct,
} from "../schema";
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

//normalizing product price
const normalizedProductPrice = ({ currencyCode, amount }: MoneyV2) => ({
  // turns into number
  value: +amount,
  currencyCode,
});

//normalizing product options
const normalizeProductOption = ({
  id,
  values,
  name: displayName,
}: ProductOption) => {
  const normalize = {
    id,
    displayName,
    values: values.map((value) => {
      //adding label property to each value
      let output: any = { label: value };

      //adding hexColor property if value has colour property
      if (displayName.match(/colo?r/gi))
        output = { ...output, hexColor: value };

      return output;
    }),
  };

  console.log(normalize);

  return normalize;
};

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
    options,
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
    options: options
      ? options
          .filter((o) => o.name !== "Tittle")
          .map((o) => normalizeProductOption(o))
      : [],
    ...rest,
  };

  return product;
}
