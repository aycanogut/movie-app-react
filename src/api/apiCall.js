import axios from "axios";
import queryString from "query-string";
import config from "./config";

const apiCall = axios.create({
  baseURL: config.url,
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: (params) => {
    return queryString.stringify({ ...params, api_key: config.key });
  },
});

apiCall.interceptors.request.use(async (config) => config);

apiCall.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  (error) => {
    throw error;
  }
);

export default apiCall;
