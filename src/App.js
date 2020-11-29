import * as React from "react";

import { Route, Switch, BrowserRouter } from "react-router-dom";

import Login from "./Pages/Login";

import Dashboard from "./Container";

function App() {
  return (
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
  );
}

export default App;
