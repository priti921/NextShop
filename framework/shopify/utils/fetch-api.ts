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
    body: JSON.stringify({ query }),
  });

  //turned json data to javascript object
  const data = res.json();

  return { data };
};

export default fetchAPI;
