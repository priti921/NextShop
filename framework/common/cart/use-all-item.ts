//hoot that returns a function with modified input
const useAddItem = () => {
  return (input: any) => {
    return {
      output: JSON.stringify(input) + "_MODIFIED",
    };
  };
};

export default useAddItem;
