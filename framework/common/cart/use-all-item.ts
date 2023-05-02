import { handler } from "@framework/cart/use-all-item";
//hook that calls a hook(which returns a object with output key with modified value) and returns
const useAddItem = () => {
  return handler.useHook();
};

export default useAddItem;
