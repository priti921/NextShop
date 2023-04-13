import { Product } from "@common/types/product";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import style from "./Product.module.css";

interface Props {
  product: Product;
}

import placeholderImage from "../../../public/product-image-placeholder.svg";

const ProductCard: FC<Props> = ({ product }) => {
  return (
    <Link href={`/products/${product.slug}`}>
      <div className={style.root}>
        <div className={style.productBg}></div>
        <div className={style.productTag}>
          <h3 className={style.productTitle}>
            <span>{product.name}</span>
          </h3>
          <span className={style.productPrice}>
            {product.price.value} {product.price.currencyCode}
          </span>
        </div>
        {product.images && (
          <Image
            className={style.productImage}
            alt={product.name ?? "product image"}
            src={product.images[0].url ?? placeholderImage}
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
