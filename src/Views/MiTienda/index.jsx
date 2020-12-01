import * as React from "react";

import DsContainer from "../../Components/DsContainer";
import { Typography, Button, CircularProgress } from "@material-ui/core";

import "./styles.css";

import FormMiTienda from "./Form";

import { actions } from "./actions";
import { initialState } from "./constants";
import { reducer } from "./reducer";

import { petition } from "../../utils/petition";

import ProductItem from "../../Components/ProductCard";

export const StoreContext = React.createContext();
export default function Store() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    const getMyProducts = async () => {
      const { getProducts, getProductsSuccess, getProductsError } = actions;
      petition({
        dispatch,
        first: getProducts,
        success: getProductsSuccess,
        fail: getProductsError,
        method: "get",
        url: "/offers",
      });
    };
    getMyProducts();
  }, [state.reload]);

  const CrearOferta = async () => {
    const { saveProduct, saveProductSuccess, saveProductError } = actions;
    await petition({
      dispatch,
      first: saveProduct,
      success: saveProductSuccess,
      fail: saveProductError,
      method: "post",
      url: "/offers",
      data: state.product,
    });
  };
  return (
    <DsContainer>
      <StoreContext.Provider value={{ state, dispatch, CrearOferta }}>
        <div className="headerPart">
          <Typography color="textSecondary" variant="h4">
            Bienvenido a su tienda
          </Typography>
          <Button
            onClick={() => dispatch({ type: actions.setOpen })}
            color="primary"
            variant="contained"
          >
            Agregar Producto
          </Button>
        </div>
        {state.loading ? (
          <CircularProgress color="primary" />
        ) : (
          <>
            {state.myProducts.length === 0 ? (
              "Sin Productos"
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {state.products.map((item, idx) => {
                  return <ProductItem item={{ ...item.offer }} key={idx} />;
                })}
              </div>
            )}
          </>
        )}
        <FormMiTienda />
      </StoreContext.Provider>
    </DsContainer>
  );
}
