import { Layout } from "@components/common";
import { getConfig } from "@framework/api/config";
import { getAllProductsPaths, getProduct } from "@framework/products";
import {
  GetStaticPropsContext,
  InferGetStaticPropsType,
  GetStaticPaths,
} from "next";

//gets all the static paths from product
export const getStaticPaths: GetStaticPaths = async () => {
  const config = getConfig();
  const { products } = await getAllProductsPaths(config); //fetching product paths

  return {
    paths: products.map((product) => ({ params: { slug: product.slug } })), //mapping through returned products and for each product returning params that contains slug
    fallback: false, //                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^   returning slugs in different structure
  };
};

//gets all the static props
export const getStaticProps = async ({
  params, //takes destructured params property
}: GetStaticPropsContext<{ slug: string }>) => {
  //                       ^^^^^^ params contains destructed slug property of type string

  const config = getConfig();

  const { product } = await getProduct({
    //passing two options destructured 1. api config that contains the url and fetch function 2. variables that contains the slug
    config,
    variables: { slug: params?.slug }, // params on be string or undefined
    //^ optional arg
  });

  return {
    props: {
      product,
    },
  };
};

export default function ProductSlug({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <div>{product?.name}</div>
      <div>{product?.slug}</div>
      <div>{product?.description}</div>
      <div>{product?.images[0].url}</div>
      <div>{product?.price.value}</div>
    </>
  );
}

ProductSlug.Layout = Layout;
