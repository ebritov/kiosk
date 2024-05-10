import axios from "axios";
import { getLoggedInTerminal } from "./backend_helper";

// default
axios.defaults.baseURL = "";//import.meta.env.VITE_APIURL;

// content type
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["ClientSecret"] =
  import.meta.env.VITE_AUTH_CLIENT_SECRET;
axios.defaults.headers.post["ClientId"] = import.meta.env.VITE_CLIENT_ID;
axios.defaults.headers.post["AuthTypeToken"] =
  import.meta.env.VITE_AUTH_TYPE_TOKEN;

// timeout
axios.defaults.timeout = 300000;
// axios.defaults.timeout = 3000;

// intercepting to capture errors
axios.interceptors.response.use(
  function (response) {
    return Promise.resolve(response);
  },
  function (error) {
    return Promise.reject(error);
  }
);

// intercepting add token
axios.interceptors.request.use(
  (config) => {
    const authConfig = getLoggedInTerminal();
    const AccessToken = authConfig?.AccessToken;
    const Serial = authConfig?.Serial;
    const MacAddress = authConfig?.MacAddress;
    if (AccessToken) {
      config.headers["terminal-token"] = AccessToken;
      config.headers["terminal-key"] = Serial;
      config.headers["terminal-mac"] = MacAddress;
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

class APIClient {
  /**
   * Fetches data from given url
   */

  get = (url, params) => {
    let response;

    const paramKeys = [];

    if (params) {
      Object.keys(params).map((key) => {
        paramKeys.push(key + "=" + params[key]);
        return paramKeys;
      });

      const queryString =
        paramKeys && paramKeys.length ? paramKeys.join("&") : "";
      response = axios.get(`${url}?${queryString}`, params);
    } else {
      response = axios.get(`${url}`, params);
    }

    return response;
  };
  /**
   * post given data to url
   */
  create = (url, data) => {
    return axios.post(url, data);
  };
  /**
   * Updates data
   */
  update = (url, data) => {
    return axios.patch(url, data);
  };

  put = (url, data) => {
    return axios.put(url, data);
  };
  /**

 delete = (url) => {
    return axios.delete(url);
  };

  
  download = (url, params) => {
    let response;

    const paramKeys = [];

    if (params) {
      Object.keys(params).map((key) => {
        paramKeys.push(key + "=" + params[key]);
        return paramKeys;
      });

      const queryString = paramKeys && paramKeys.length ? paramKeys.join("&") : "";
      response = axios.get(`${url}?${queryString}`, { responseType: "arraybuffer", ...params });
    } else {
      response = axios.get(`${url}`, { responseType: "arraybuffer", ...params });
    }
    return response;
  };

  upload = (url: any, params: any, data: any) => {
    const paramKeys: any = [];

    if (params) {
      Object.keys(params).map((key) => {
        paramKeys.push(key + "=" + params[key]);
        return paramKeys;
      });
      const queryString = paramKeys && paramKeys.length ? paramKeys.join("&") : "";

      return axios.post(`${url}?${queryString}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } else {
      return axios.post(url, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    }
  };

  createWithParams = (url: any, params: any, data: any) => {
    const paramKeys: any = [];

    Object.keys(params).map((key) => {
      paramKeys.push(key + "=" + params[key]);
      return paramKeys;
    });

    const queryString = paramKeys && paramKeys.length ? paramKeys.join("&") : "";
    return axios.post(`${url}?${queryString}`, data);
  };*/
}

export { APIClient };
