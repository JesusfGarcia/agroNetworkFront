import * as React from "react";

import { Typography, Button } from "@material-ui/core";

import { petition } from "../../utils/petition";

import { actions } from "./actions";
import { reducer } from "./reducer";
import { initialState } from "./constants";

import DsContainer from "../../Components/DsContainer";
import HeaderPart from "../../Components/HeaderPart";

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
  }, []);
  return (
    <DsContainer>
      <HeaderPart>
        <Typography color="textSecondary" variant="h4">
          Perfil De Usuario
        </Typography>
        <Button color="primary" variant="contained">
          Actualizar Perfil
        </Button>
      </HeaderPart>
    </DsContainer>
  );
}
