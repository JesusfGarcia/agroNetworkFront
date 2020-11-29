import * as React from "react";

import "./styles.css";

import Header from "./header";
import Sidebar from "./sidebar";

import { Routes } from "../utils/routes";
import { Redirect, Route, Switch } from "react-router-dom";

export const DashboardContext = React.createContext();
export default function ({ history }) {
  return (
    <div className="containerGrid">
      <DashboardContext.Provider value={{ Routes, history }}>
        <div className="header">
          <Header />
        </div>
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="contenido">
          <React.Suspense fallback={"Cargando...."}>
            <Switch>
              {Routes.map((route, idx) => {
                return route.component ? (
                  <Route
                    key={idx}
                    path={route.route}
                    exact={route.exact}
                    name={route.label}
                    render={(props) => <route.component {...props} />}
                  />
                ) : (
                  <Redirect push path="/home/Principal" />
                );
              })}
            </Switch>
          </React.Suspense>
        </div>
      </DashboardContext.Provider>
    </div>
  );
}
