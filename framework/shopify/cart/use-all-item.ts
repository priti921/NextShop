//imported from common to shopify to be called in ProductView
import { useAddItem } from "@common/cart";

export default useAddItem;

export const handler = {
  fetcher: async ({ fetch, input }) => {
    const response = await fetch({
      url: "http://localhost:4000/graphql",
      query: `query { hello }`,
    });
    return response;
  },
  useHook: ({ fetch }: any) => {
    return async (input: any) => {
      const response = await fetch(input);
      return {
        output: response,
      };
    };
  },
};
