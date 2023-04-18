import { ApiFetcherOptions, ApiFetcherResults } from "@common/types/api";

const fetchAPI = async <T>({
  url,
  query,
  variables,
}: ApiFetcherOptions): Promise<ApiFetcherResults<T>> => {
  //fetching the data
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
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
