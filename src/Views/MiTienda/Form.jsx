import * as React from "react";

import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@material-ui/core";

import { StoreContext } from "./index";

import { actions } from "./actions";

export default function FormMiTienda() {
  const { open, setOpen, state, dispatch } = React.useContext(StoreContext);

  const setForm = (e) => {
    const { name, value } = e.target;
    dispatch({ type: actions.setProduct, name, payload: value });
  };

  const setTypes = (name, value) => {
    dispatch({ type: actions.setProduct, name, payload: value });
  };

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Productos y Servicios</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Rellene los campos de la manera correcta, y de acuerdo a lo que usted
          estará ofreciendo
        </DialogContentText>
        <div style={{ marginTop: "5px" }}>
          <Typography variant="caption">
            ¿Qué tipo de transacción desea realizar?
          </Typography>
          <Button
            size="small"
            color="primary"
            variant={
              state.product.typeTransaction === "COMPRA" ? "contained" : "text"
            }
            onClick={() => setTypes("typeTransaction", "COMPRA")}
          >
            Compra
          </Button>
          <Button
            size="small"
            color="primary"
            variant={
              state.product.typeTransaction === "VENTA" ? "contained" : "text"
            }
            onClick={() => setTypes("typeTransaction", "VENTA")}
          >
            Venta
          </Button>
        </div>
        <div style={{ marginTop: "5px" }}>
          <Typography variant="caption">¿A que categoría pertenece?</Typography>
          <Button
            size="small"
            color="primary"
            variant={
              state.product.typeOffer === "PRODUCTO" ? "contained" : "text"
            }
            onClick={() => setTypes("typeOffer", "PRODUCTO")}
          >
            Producto
          </Button>
          <Button
            size="small"
            color="primary"
            variant={
              state.product.typeOffer === "SERVICIO" ? "contained" : "text"
            }
            onClick={() => setTypes("typeOffer", "SERVICIO")}
          >
            Servicio
          </Button>
        </div>

        <TextField
          autoFocus
          name="name"
          onChange={setForm}
          value={state.product.name}
          margin="dense"
          label="Nombre del producto o servicio"
          type="text"
          fullWidth
        />
        <TextField
          margin="dense"
          label="Descripción"
          multiline
          name="description"
          onChange={setForm}
          value={state.product.description}
          type="text"
          fullWidth
        />
        <TextField
          margin="dense"
          label="Unidad de medida"
          multiline
          name="unitMeasurement"
          onChange={setForm}
          value={state.product.unitMeasurement}
          type="text"
          fullWidth
        />
        <TextField
          margin="dense"
          label="Precio por unidad de medida"
          multiline
          name="priceUnit"
          onChange={setForm}
          value={state.product.priceUnit}
          type="text"
          fullWidth
        />
        {state.product.typeOffer === "PRODUCTO" && (
          <TextField
            margin="dense"
            label="stock del producto"
            multiline
            name="stock"
            onChange={setForm}
            value={state.product.stock}
            type="text"
            fullWidth
          />
        )}
        <TextField
          margin="dense"
          label="Dirección donde se encuentra"
          multiline
          name="address"
          onChange={setForm}
          value={state.product.address}
          type="text"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)} color="primary">
          Cancelar
        </Button>
        <Button onClick={() => setOpen(false)} color="primary">
          Publicar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
