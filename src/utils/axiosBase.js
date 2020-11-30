import axios from "axios";
import api from "./APIURL";

export const myAxios = ({ url, method, data }) => {
  let token = localStorage.getItem("token");
  return axios({
    baseURL: `${api}/api/agro`,
    method,
    url,
    data,
    headers: { token },
  });
};
