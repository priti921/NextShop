import { useHook, useMutationHook } from "@common/utils/use-hook";
//hook that calls a hook(which returns a object with output key with modified value) and returns
const useAddItem = () => {
  const hook = useHook((hooks) => {
    return hooks.cart.useAddItem;
  });

  return useMutationHook({ ...hook });
};

export default useAddItem;
