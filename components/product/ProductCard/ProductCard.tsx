import { Product } from "@common/types/product";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface Props {
  product: Product;
}

import placeholderImage from "../../../public/product-image-placeholder.svg";

const ProductCard: FC<Props> = ({ product }) => {
  return (
    <Link href={`/products/${product.slug}`}>
      <div>
        <div>
          <h3>
            <span>{product.name}</span>
          </h3>
          <span>{product.name}</span>
        </div>
        {product.images && (
          <Image
            alt={product.name ?? "product image"}
            src={product.images[0].url ?? placeholderImage}
            height={540}
            width={540}
            quality="85"
          />
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
