import * as React from "react";

import {
  Card,
  CardContent,
  TextField,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";

export default function () {
  return (
    <>
      <Card style={{ width: "500px" }}>
        <CardContent>
          <Typography color="primary" align="center" variant="h3">
            Login
          </Typography>
          <TextField
            type="email"
            label="Correo Electronico"
            fullWidth
            margin="normal"
          />
          <TextField
            type="password"
            label="Contraseña"
            fullWidth
            margin="normal"
          />
        </CardContent>
        <CardActions>
          <div className="centerCard">
            <Button variant="contained" color="primary" disableElevation>
              Ingresar
            </Button>
          </div>
        </CardActions>
      </Card>
    </>
  );
}
