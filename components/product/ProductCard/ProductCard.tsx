import { Product } from "@common/types/product";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface Props {
  product: Product;
}

import placeholderImage from "./placeholderImage.png";

const ProductCard: FC<Props> = ({ product }) => {
  return (
    <Link href={`/products/${product.slug}`}>
      <div>
        <div>
          <h3>
            <span>{product.name}</span>
          </h3>
          <span>{product.description}</span>
        </div>
        {product.images && (
          <Image
            src={placeholderImage}
            alt={product.name ?? "product image"}
            height={540}
            width={540}
            quality="85"
            layout="responsive"
          />
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
