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

export default function LoginForm({ history }) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const Login = async () => {
    try {
      dispatch({ type: actions.saveUser });
      const { data } = await axios.post(`${apiUrl}/api/agro/login`, state.user);
      console.log(data);
      dispatch({ type: actions.saveUserSuccess });
      localStorage.setItem("token", data.token);
      localStorage.setItem("rol", data.user.role);
      history.push("/home/Principal");
    } catch (error) {
      dispatch({
        type: actions.saveUserError,
        payload: "Crédenciales no válidas",
      });
      alert("Credenciales no válidas");
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
            Login
          </Typography>
          <TextField
            name="email"
            value={state.user.email}
            onChange={setUser}
            type="email"
            label="Correo Electronico"
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
