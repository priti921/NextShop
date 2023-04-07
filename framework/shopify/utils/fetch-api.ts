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

  //turned json data to javascript object and error
  const { data, errors } = await res.json();

  if (errors) {
    // if errors true
    //throw new error
    throw new Error(errors[0].message ?? errors.message); //error[0] throws first array error message but if it's null show error.message
  }

  return { data };
};

export default fetchAPI;
