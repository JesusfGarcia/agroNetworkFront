import * as React from "react";

import { Typography, Button, AppBar, Toolbar } from "@material-ui/core";

import "./styles.css";

import LoginForm from "./LoginForm";
import RegisterForm from "./normalRegisterForm";
import VipRegisterForm from "./VipRegisterForm";

export default function Container({ history }) {
  const [formType, setFormType] = React.useState("login");

  const renderizer = () => {
    if (formType === "login") {
      return <LoginForm history={history} />;
    }

    if (formType === "register") {
      return <RegisterForm history={history} />;
    }

    if (formType === "vip") {
      return <VipRegisterForm history={history} />;
    }
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar className="toolbar">
          <div>
            <Typography variant="h6">AgroNetwork</Typography>
          </div>
          <div>
            <Button onClick={() => setFormType("vip")} color="inherit">
              Registrarme como proveedor
            </Button>
            <Button onClick={() => setFormType("register")} color="inherit">
              Registrarme como comprador
            </Button>
            <Button onClick={() => setFormType("login")} color="inherit">
              Login
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <div className="LoginContainer">{renderizer()}</div>
    </>
  );
}
