import * as React from "react";

import { Button } from "@material-ui/core";

import { DashboardContext } from "./index";

export default function () {
  const { Routes, history } = React.useContext(DashboardContext);
  let lsi = sessionStorage.getItem("lsi")
    ? parseInt(sessionStorage.getItem("lsi"))
    : 0;
  const [sidebarItem, setSidebarItem] = React.useState(lsi);

  const selectSidebarItem = (idx, route) => {
    setSidebarItem(idx);
    history.push(route);
    sessionStorage.setItem("lsi", idx);
  };
  return (
    <div className="sidebarContainer">
      {Routes.map((item, idx) => {
        return (
          <Button
            onClick={() => selectSidebarItem(idx, item.route)}
            key={idx}
            className="sidebarButtons"
            variant={sidebarItem === idx ? "contained" : "text"}
            size="large"
            color="primary"
          >
            {item.label}
          </Button>
        );
      })}
    </div>
  );
}
