//type declaration for API config and fetchAPI function
export type ApiFetcherOptions = {
  url: string;
  query: string;
  variables?: Variables;
};

export type Variables = { [key: string]: string | undefined };

export type ApiFetcherResults<T> = {
  data: T;
};

export interface ApiConfig {
  apiUrl: string;
  fetch<T>(options: ApiFetcherOptions): Promise<ApiFetcherResults<T>>; //returns Promise of type ApiFetcherResults of type T(type of param that gets passed in fetch function)
}
