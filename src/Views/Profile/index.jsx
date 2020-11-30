import * as React from "react";

import {
  Typography,
  Button,
  TextField,
  CircularProgress,
} from "@material-ui/core";

import { petition } from "../../utils/petition";

import { actions } from "./actions";
import { reducer } from "./reducer";
import { initialState } from "./constants";

import DsContainer from "../../Components/DsContainer";
import HeaderPart from "../../Components/HeaderPart";

import ApiUrl from "../../utils/APIURL";

import "./styles.css";

export default function MyProfile() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  React.useState(() => {
    const getData = async () => {
      const { getUserData, getUserDataError, getUserDataSuccess } = actions;
      petition({
        dispatch,
        method: "get",
        first: getUserData,
        success: getUserDataSuccess,
        fail: getUserDataError,
        url: "/users",
      });
    };
    getData();
  }, [state.reload]);

  const setUserData = (e) => {
    const { name, value } = e.target;
    dispatch({ type: actions.setUserData, name, payload: value });
  };

  const setEnterpriseData = (e) => {
    const { name, value } = e.target;
    dispatch({ type: actions.setEnterpriseData, name, payload: value });
  };

  const setPhoto = (e) => {
    let reader = new FileReader();

    reader.onload = function (e) {
      let filePreview = e.target.result;
      dispatch({
        type: actions.setUserData,
        name: "img",
        payload: filePreview,
      });
      dispatch({ type: actions.setImgChanged });
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  const updateProfile = async () => {
    const { updateProfile, updateProfileError, updateProfileSuccess } = actions;
    let body;
    if (state.imgChanged) {
      body = {
        ...state.user,
        ...state.user.enterprise,
      };
    } else {
      body = {
        ...state.user,
        img: "",
        ...state.user.enterprise,
      };
    }

    petition({
      dispatch,
      first: updateProfile,
      success: updateProfileSuccess,
      fail: updateProfileError,
      method: "put",
      url: "/users",
      data: body,
    });
  };

  return (
    <DsContainer>
      <HeaderPart>
        <Typography color="textSecondary" variant="h4">
          Perfil De Usuario
        </Typography>
        <Button onClick={updateProfile} color="primary" variant="contained">
          {state.buttonText}
        </Button>
      </HeaderPart>
      {state.loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <div className="profileContainer">
          <div className="imageContainer">
            {!state.imgChanged ? (
              <img
                alt="Sin imagen seleccionada"
                src={`${ApiUrl}${state.user.img}`}
              />
            ) : (
              <img alt="Sin imagen seleccionada" src={`${state.user.img}`} />
            )}
            <label for="nuestroinput">Cargar nueva imagen</label>
            <input
              onChange={setPhoto}
              name="img"
              type="file"
              id="nuestroinput"
            />
          </div>
          <div className="inputsContainer">
            <TextField
              name="name"
              onChange={setUserData}
              label="Nombre"
              variant="filled"
              margin="dense"
              value={state.user.name}
            />
            <TextField
              name="email"
              onChange={setUserData}
              label="Correo Electrónico"
              variant="filled"
              margin="dense"
              value={state.user.email}
            />
            <TextField
              name="phone"
              onChange={setUserData}
              label="Telefono"
              variant="filled"
              margin="dense"
              value={state.user.phone}
            />
            {state.user.enterprise && (
              <>
                <TextField
                  name="description"
                  onChange={setEnterpriseData}
                  variant="filled"
                  margin="dense"
                  label="Descripción de la empresa"
                  value={state.user.enterprise.description}
                />
                <TextField
                  name="state"
                  onChange={setEnterpriseData}
                  variant="filled"
                  margin="dense"
                  label="Estado"
                  value={state.user.enterprise.state}
                />
                <TextField
                  name="city"
                  onChange={setEnterpriseData}
                  variant="filled"
                  margin="dense"
                  label="Ciudad"
                  value={state.user.enterprise.city}
                />
                <TextField
                  name="address"
                  onChange={setEnterpriseData}
                  variant="filled"
                  margin="dense"
                  label="Dirección"
                  value={state.user.enterprise.address}
                />
                <TextField
                  name="turn"
                  onChange={setEnterpriseData}
                  variant="filled"
                  margin="dense"
                  label="Giro de la empresa"
                  value={state.user.enterprise.turn}
                />
              </>
            )}
          </div>
        </div>
      )}
    </DsContainer>
  );
}
