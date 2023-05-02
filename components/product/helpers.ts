import { Product } from "@common/types/product";

type AvailableChoices = "color" | "size" | string;

//key's can be any of available choices
export type Choices = {
  [P in AvailableChoices]: string;
};

export const getVariant = (product: Product, choices: Choices) =>
  //returns variant object if choices and it's value exists in product

  //find the first variant that matches choices variant
  product.variants.find((variant) =>
    //check if all variantOption matches variant's option array
    variant.options.every((variantOption) => {
      const optionName = variantOption.displayName.toLocaleLowerCase();
      //returns true if displayname is in choices and it's value is equal to variant option
      return (
        optionName in choices &&
        choices[optionName] === variantOption.values[0].label
      );
    })
  );
