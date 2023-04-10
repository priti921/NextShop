import { Product } from "@common/types/product";
import React, { FC } from "react";

interface Props {
  product: Product;
}

const ProductCard: FC<Props> = ({ product }) => {
  return <div>{product.name}</div>;
};

export default ProductCard;
