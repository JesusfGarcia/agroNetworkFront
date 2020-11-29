import * as React from "react";

import { Typography, AppBar, Toolbar, Button } from "@material-ui/core";

import { DashboardContext } from "./index";

export default function () {
  const { Routes, history } = React.useContext(DashboardContext);

  const Logout = () => {
    localStorage.clear();
    sessionStorage.clear();
    history.push("/");
  };
  return (
    <AppBar position="static">
      <Toolbar className="toolbar">
        <div>
          <Typography variant="h6">AgroNetwork</Typography>
        </div>
        <div>
          <Button onClick={Logout} color="inherit">
            Salir
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}
