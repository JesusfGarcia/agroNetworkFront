import * as React from "react";

import DsContainer from "../../Components/DsContainer";
import { Typography, Button } from "@material-ui/core";

import "./styles.css";

import FormMiTienda from "./Form";

import { actions } from "./actions";
import { initialState } from "./constants";
import { reducer } from "./reducer";

export const StoreContext = React.createContext();
export default function () {
  const [open, setOpen] = React.useState(false);
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <DsContainer>
      <StoreContext.Provider value={{ open, setOpen, state, dispatch }}>
        <div className="headerPart">
          <Typography variant="h4">Bienvenido a su tienda</Typography>{" "}
          <Button
            onClick={() => setOpen(true)}
            color="primary"
            variant="contained"
          >
            Agregar Producto
          </Button>
        </div>
        <FormMiTienda />
      </StoreContext.Provider>
    </DsContainer>
  );
}
