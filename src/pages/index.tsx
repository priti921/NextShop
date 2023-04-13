import Head from "next/head";
import type { InferGetStaticPropsType } from "next";
import getAllProducts from "@framework/products/get-all-products";
import { ProductCard } from "@components/product";
import { Grid, Hero, Marquee } from "@components/ui";

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
      <Head>
        <title>NextShop </title>
        <meta name="description" content="shopify clothing shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
      <Hero
        headline="HEADLINE"
        description="descriptions of products available for purchase in the shop and the shop itself   are available in the shop itself and    the same   "
      />
      <Marquee>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} variant="slim" />
        ))}
      </Marquee>
    </div>
  );
}
