import Head from "next/head";
import type { InferGetStaticPropsType } from "next";
import { getAllProducts } from "@framework/products";
import { ProductCard } from "@components/product";
import { Grid, Hero, Marquee } from "@components/ui";
import { getConfig } from "@framework/api/config";

export async function getStaticProps() {
  //passed config and fetching all products
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

      {/* grid with product cards && layout A */}
      <Grid layout="A">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>

      {/* Hero text content */}
      <Hero
        headline="HEADLINE"
        description="descriptions of products available for purchase in the shop and the shop itself   are available in the shop itself and    the same   "
      />

      {/* scrolling marquee variant secondary */}
      <Marquee variant="secondary">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} variant="slim" />
        ))}
      </Marquee>

      {/* second grid with product cards && layout B */}
      <Grid layout="B">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>

      {/* second Marquee variant primary */}
      <Marquee variant="primary">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} variant="slim" />
        ))}
      </Marquee>
    </div>
  );
}
