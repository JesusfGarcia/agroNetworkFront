import * as React from "react";

import { Route, Switch, BrowserRouter } from "react-router-dom";

import Login from "./Pages/Login";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" name="Login" render={(props) => <Login {...props} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
