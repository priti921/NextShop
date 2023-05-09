import { useHook } from "@common/utils/hook-hook";
//hook that calls a hook(which returns a object with output key with modified value) and returns
const useAddItem = () => {
  const hook = useHook((hooks) => {
    return hooks.cart.useAddItem;
  });

  return hook.useHook();
};

export default useAddItem;
