import { myAxios } from "./axiosBase";

export const petition = async ({
  dispatch,
  first,
  success,
  fail,
  method,
  url,
  data,
}) => {
  dispatch({ type: first });
  try {
    if (data) {
      let response = await myAxios({ method, url, data });
      dispatch({ type: success, payload: response.data });
    } else {
      let response = await myAxios({ method, url });
      dispatch({ type: success, payload: response.data });
    }
  } catch (error) {
    try {
      switch (error.response.status) {
        case 404:
          return dispatch({ type: fail, payload: "Ruta no encontrada" });
        case 401:
          localStorage.clear();
          return window.location.reload();
        default:
          return dispatch({ type: fail, payload: error.response.data });
      }
    } catch (error) {
      dispatch({ type: fail, payload: "Error en el servidor" });
    }
  }
};
