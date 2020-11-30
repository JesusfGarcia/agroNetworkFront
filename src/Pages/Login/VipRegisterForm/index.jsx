import * as React from "react";

import {
  Card,
  CardContent,
  TextField,
  Typography,
  CardActions,
  Button,
  FormControlLabel,
  Switch,
} from "@material-ui/core";

import { actions } from "./actions";
import { initialState } from "./constants";
import { reducer } from "./reducer";

import axios from "axios";

import apiUrl from "../../../utils/APIURL";

export default function VIPRegister({ history }) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const Register = async () => {
    try {
      dispatch({ type: actions.saveUser });
      const { data } = await axios.post(`${apiUrl}/api/agro/users`, state.user);
      dispatch({ type: actions.saveUserSuccess });
      console.log(data);
      alert("Se ha registrado correctamente");
    } catch (error) {
      dispatch({ type: actions.saveUserError, payload: "valió madres" });
      console.log(error);
      alert("Ocurrió un error en la aplicación");
    }
  };

  const setUser = (e) => {
    let { name, value } = e.target;

    dispatch({ type: actions.setUser, name, payload: value });
  };

  const setPhoto = (e) => {
    let reader = new FileReader();

    reader.onload = function (e) {
      let filePreview = e.target.result;
      dispatch({
        type: actions.setUser,
        name: "img",
        payload: filePreview,
      });
    };

    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <>
      <Card style={{ width: "500px" }}>
        <CardContent>
          <Typography color="primary" align="center" variant="h3">
            Registro
          </Typography>
          <TextField
            name="name"
            onChange={setUser}
            value={state.user.name}
            type="text"
            label="Nombre"
            fullWidth
            margin="normal"
          />
          <TextField
            name="email"
            onChange={setUser}
            value={state.user.email}
            type="email"
            label="Correo Electronico"
            fullWidth
            margin="normal"
          />
          <TextField
            name="phone"
            onChange={setUser}
            value={state.user.phone}
            type="phone"
            label="Telefono"
            fullWidth
            margin="normal"
          />
          <TextField
            name="password"
            onChange={setUser}
            value={state.user.password}
            type="password"
            label="Contraseña"
            fullWidth
            margin="normal"
          />
          <FormControlLabel
            control={
              <Switch
                name="enterprise"
                onChange={() => dispatch({ type: actions.toggleEnterprise })}
                checked={state.register.isEnterprise}
              />
            }
            label="¿Pertenece a una empresa?"
          />
          {/*Aquí comienzan los datos de la empresa*/}
          {state.register.isEnterprise && (
            <>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <TextField
                  name="state"
                  onChange={setUser}
                  value={state.user.state}
                  type="text"
                  label="Estado"
                  margin="normal"
                />
                <TextField
                  name="city"
                  onChange={setUser}
                  value={state.user.city}
                  type="text"
                  label="Ciudad"
                  margin="normal"
                />
              </div>

              <TextField
                name="address"
                onChange={setUser}
                value={state.user.address}
                type="text"
                label="Dirección"
                fullWidth
                margin="normal"
              />
              <TextField
                name="turn"
                onChange={setUser}
                value={state.user.turn}
                type="text"
                label="Giro de la empresa"
                multiline
                fullWidth
                margin="normal"
              />
              <TextField
                name="description"
                onChange={setUser}
                value={state.user.description}
                type="text"
                label="Descripción general"
                multiline
                fullWidth
                margin="normal"
              />
              <TextField
                name="interestReason"
                onChange={setUser}
                value={state.user.interestReason}
                type="text"
                label="¿Por qué le interesa promocionar sus productos o servicios desde AgroNetwork?"
                multiline
                rows={4}
                fullWidth
                margin="normal"
              />
              <input type="file" onChange={setPhoto} />
            </>
          )}
        </CardContent>
        <CardActions>
          <div className="centerCard">
            <Button
              onClick={Register}
              variant="contained"
              color="primary"
              disableElevation
            >
              Registrarme
            </Button>
          </div>
        </CardActions>
      </Card>
    </>
  );
}
