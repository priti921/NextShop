import Head from "next/head";
import type { InferGetStaticPropsType } from "next";
import getAllProducts from "../../framework/shopify/products/get-all-products";

export async function getStaticProps() {
  const products = await getAllProducts();

  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60,
  };
}

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      {/* <Head>
        <title>NextShop </title>
        <meta name="description" content="shopify clothing shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      {/* <main></main> */}
      {JSON.stringify(products)}
    </div>
  );
}
