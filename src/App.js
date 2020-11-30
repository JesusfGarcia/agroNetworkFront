import * as React from "react";

import { Route, Switch, BrowserRouter } from "react-router-dom";

import Login from "./Pages/Login";

import Dashboard from "./Container";

import { createMuiTheme } from "@material-ui/core/styles";

import { ThemeProvider } from "@material-ui/core";
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#b2fab4",
      main: "#81c784",
      dark: "#519657",
      contrastText: "#fff",
    },
    secondary: {
      light: "#8bf6ff",
      main: "#4fc3f7",
      dark: "#0093c4",
      contrastText: "#000",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            exact
            name="Login"
            render={(props) => <Login {...props} />}
          />
          <Route
            path="/home"
            name="Dashboard"
            render={(props) => <Dashboard {...props} />}
          />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
