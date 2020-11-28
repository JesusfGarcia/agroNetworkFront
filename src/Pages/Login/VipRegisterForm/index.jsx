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

export default function () {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <>
      <Card style={{ width: "500px" }}>
        <CardContent>
          <Typography color="primary" align="center" variant="h3">
            Registro
          </Typography>
          <TextField type="text" label="Nombre" fullWidth margin="normal" />
          <TextField
            type="email"
            label="Correo Electronico"
            fullWidth
            margin="normal"
          />
          <TextField type="phone" label="Telefono" fullWidth margin="normal" />
          <TextField
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
                  type="text"
                  label="Nombre de la empresa"
                  margin="normal"
                />
                <TextField
                  type="text"
                  label="Telefono de la empresa"
                  margin="normal"
                />
              </div>

              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <TextField type="text" label="Estado" margin="normal" />
                <TextField type="text" label="Ciudad" margin="normal" />
              </div>

              <TextField
                type="text"
                label="Dirección"
                fullWidth
                margin="normal"
              />
              <TextField
                type="text"
                label="Giro de la empresa"
                multiline
                fullWidth
                margin="normal"
              />
              <TextField
                type="text"
                label="Descripción general"
                multiline
                fullWidth
                margin="normal"
              />

              <TextField
                type="text"
                label="Correo de contacto"
                fullWidth
                margin="normal"
              />
              <TextField
                type="text"
                label="¿Por qué le interesa promocionar sus productos o servicios desde AgroNetwork?"
                multiline
                rows={4}
                fullWidth
                margin="normal"
              />
            </>
          )}
        </CardContent>
        <CardActions>
          <div className="centerCard">
            <Button variant="contained" color="primary" disableElevation>
              Registrarme
            </Button>
          </div>
        </CardActions>
      </Card>
    </>
  );
}
