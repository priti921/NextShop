import { fetchAPI } from "@framework/utils";
import { ApiConfig } from "@common/types/api";

//api config class init
class Config {
  private config: ApiConfig;

  constructor(config: any) {
    this.config = config;
  }

  getConfig(): ApiConfig {
    return this.config;
  }
}

//creating a instance of config to pass api url and fetchAPI function
const configWrapper = new Config({
  apiUrl: "http://localhost:4000/graphql",
  fetch: fetchAPI,
});

//exported function that returns config details from the instance
export function getConfig() {
  return configWrapper.getConfig();
}
