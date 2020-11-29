import * as React from "react";

import {
  Card,
  CardContent,
  TextField,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";

import { actions } from "./actions";
import { reducer } from "./reducer";
import { initialState } from "./constants";

import axios from "axios";

import apiUrl from "../../../utils/APIURL";

export default function () {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const Register = async () => {
    try {
      dispatch({ type: actions.saveUser });
      const { data } = axios.post(`${apiUrl}/users`, state.user);
      dispatch({ type: actions.saveUserSuccess });
    } catch (error) {
      dispatch({ type: actions.saveUserError });
      alert("Ocurrió un error en la aplicación");
    }
  };

  const setUser = (e) => {
    let { name, value } = e.target;

    dispatch({ type: actions.setUser, name, payload: value });
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
            type="email"
            onChange={setUser}
            value={state.user.email}
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
            value={state.user.password}
            onChange={setUser}
            type="password"
            label="Contraseña"
            fullWidth
            margin="normal"
          />
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
