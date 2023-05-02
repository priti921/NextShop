//imported from common to shopify to be called in ProductView
import { useAddItem } from "@common/cart";

export default useAddItem;

export const handler = {
  fetcher: () => {
    console.log("Fetching data!");
  },
  useHook: () => {
    return (input: any) => {
      return {
        output: JSON.stringify(input) + "_MODIFIED",
      };
    };
  },
};
