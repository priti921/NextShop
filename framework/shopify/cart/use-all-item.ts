//imported from common to shopify to be called in ProductView
import { useAddItem } from "@common/cart";

export default useAddItem;

export const handler = {
  fetcher: ({ fetch, input }) => {
    const response = fetch(input);
    return response;
  },
  useHook: ({ fetch }: any) => {
    return (input: any) => {
      const response = fetch(input);
      return {
        output: response,
      };
    };
  },
};
