import { APIClient } from "./api_helper";

import * as url from "./url_helper";

const api = new APIClient();

// Gets the logged in user data from local session
export const getLoggedInTerminal = () => {
  if (!getIsValidDateConfig()) return null;
  const terminal = localStorage.getItem("authTerminal");
  if (terminal) return JSON.parse(terminal);
  return null;
};
export const setLoggedInTerminal = (configTerminal) => {
  localStorage.setItem("authTerminal", JSON.stringify(configTerminal));
};
export const setModeTheme = (mode) => {
  localStorage.setItem("mode", mode);
};

export const getModeTheme = () => {
  const mode = localStorage.getItem("mode");
  if (mode) return JSON.parse(mode);
  return "dark";
};
// //is user is logged in
export const isUserAuthenticated = () => {
  return getLoggedInTerminal() !== null;
};

export const setDateValidezConfig = (time) => {
  const futureDate = new Date();
  futureDate.setMonth(futureDate.getMonth() + time);
  //futureDate.setSeconds(futureDate.getSeconds() + 10);
  localStorage.setItem("time", futureDate);
};

export const setTypeAppConfig = (type) => {
  //console.log("TypeApp", type)
  localStorage.setItem("TypeApp", type);
};

export const getTypeAppConfig = () => {
  const TypeApp = localStorage.getItem("TypeApp");
  //console.log("TypeApp", TypeApp)
  if (TypeApp) return TypeApp;
  return "kiosko";
};


export const getIsValidDateConfig = () => {
  const storedTime = localStorage.getItem("time");
  if (storedTime && !isNaN(new Date(storedTime))) {
    const currentDate = new Date();
    return new Date(storedTime) > currentDate;
  }
  removeLocaleStorageItems();
  return false;
};
export const removeLocaleStorageItems = () => {
  localStorage.removeItem("time");
  localStorage.removeItem("authTerminal");
};

/*
  // Audiences
  // api.get Audiences
  export const getAudiences = (object) => api.get(url.GET_AUDIENCE, object);


  // api.post Create Audience
  export const createAudience = (object) => api.create(url.ADD_NEW_AUDIENCE, object);

  // api.patch Catalog
  export const patchCatalog = (id: string, data: Array<any>) => api.update(`${url.UPDATE_CATALOG}/${id}`, data);

*/

export const registerTerminal = (object, baseURL) =>
  api.create(baseURL + url.REGISTER_TERMINAL, object);
export const getBalance = (baseURL) => api.get(baseURL + url.GET_BALANCE);
export const getAllGames = (baseURL) => api.get(baseURL + url.GET_ALL_GAMES);
export const getIngressNews = (baseURL) => api.get(baseURL + url.GET_INGRESS_NEWS);

export const createReportProcessedIngress = (object, baseURL) => api.create(baseURL + url.CREATE_REPORT_PROCESSED_INGRESS, object);

