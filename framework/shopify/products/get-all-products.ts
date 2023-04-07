import getAllProductsQuery from "../utils/queries/get-all-products";

type fetchParams = {
  query: string;
};

const fetchAPI = async ({ query }: fetchParams) => {
  const url = "http://localhost:4000/graphql";

  //fetching the data
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ query: getAllProductsQuery }),
  });

  //turned json data to javascript object
  const data = res.json();

  return { data };
};

const getAllProducts = async (): Promise<any[]> => {
  const products = await fetchAPI({ query: getAllProductsQuery });

  return products.data;
};

export default getAllProducts;
