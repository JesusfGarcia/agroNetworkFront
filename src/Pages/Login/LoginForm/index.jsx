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

  const Login = async () => {
    try {
      dispatch({ type: actions.saveUser });
      const { data } = axios.post(`${apiUrl}/login`, state.user);
      dispatch({ type: actions.saveUserSuccess });
    } catch (error) {
      dispatch({ type: actions.saveUserError });
      alert("Ocurrió un error en la aplicación");
    }
  };
  return (
    <>
      <Card style={{ width: "500px" }}>
        <CardContent>
          <Typography color="primary" align="center" variant="h3">
            Login
          </Typography>
          <TextField
            type="email"
            label="Correo Electronico"
            fullWidth
            margin="normal"
          />
          <TextField
            type="password"
            label="Contraseña"
            fullWidth
            margin="normal"
          />
        </CardContent>
        <CardActions>
          <div className="centerCard">
            <Button
              onClick={() => Login()}
              variant="contained"
              color="primary"
              disableElevation
            >
              Ingresar
            </Button>
          </div>
        </CardActions>
      </Card>
    </>
  );
}
