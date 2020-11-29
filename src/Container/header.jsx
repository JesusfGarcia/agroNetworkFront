import * as React from "react";

import { Typography, AppBar, Toolbar } from "@material-ui/core";

export default function () {
  return (
    <AppBar position="static">
      <Toolbar className="toolbar">
        <div>
          <Typography variant="h6">AgroNetwork</Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
}
