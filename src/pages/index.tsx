import Head from "next/head";
import type { InferGetStaticPropsType } from "next";
import { getAllProducts } from "@framework/products";
import { ProductCard } from "@components/product";
import { Grid, Hero, Marquee } from "@components/ui";
import { getConfig } from "@framework/api/config";

export async function getStaticProps() {
  const config = getConfig();
  const products = await getAllProducts(config);

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
      <Grid layout="A">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
      <Hero
        headline="HEADLINE"
        description="descriptions of products available for purchase in the shop and the shop itself   are available in the shop itself and    the same   "
      />
      <Marquee variant="secondary">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} variant="slim" />
        ))}
      </Marquee>
      <Grid layout="B">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
      <Marquee variant="primary">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} variant="slim" />
        ))}
      </Marquee>
    </div>
  );
}
