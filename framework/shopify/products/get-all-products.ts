const fetchAPI = async () => {
  const url = "https://jsonplaceholder.typicode.com/todos"; //fake data source

  //fetching the data
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });

  //turned json data to javascript object
  const data = res.json();

  return { data };
};

const getAllProducts = async (): Promise<number[]> => {
  const products = await fetchAPI();

  return products.data;
};

export default getAllProducts;
