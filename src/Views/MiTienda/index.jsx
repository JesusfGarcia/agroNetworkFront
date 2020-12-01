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

  const EditarOferta = async () => {
    const { saveProduct, saveProductSuccess, saveProductError } = actions;
    await petition({
      dispatch,
      first: saveProduct,
      success: saveProductSuccess,
      fail: saveProductError,
      method: "put",
      url: `/offers/${state.product.id}`,
      data: state.product,
    });
  };

  const EliminarOferta = async (id) => {
    const { saveProduct, saveProductSuccess, saveProductError } = actions;
    await petition({
      dispatch,
      first: saveProduct,
      success: saveProductSuccess,
      fail: saveProductError,
      method: "delete",
      url: `/offers/${id}`,
    });
  };

  const CrearOferta = async () => {
    const { saveProduct, saveProductSuccess, saveProductError } = actions;
    let body;
    if (state.isImageChanged) {
      body = state.product;
    } else {
      body = {
        ...state.product,
        images: null,
      };
    }
    await petition({
      dispatch,
      first: saveProduct,
      success: saveProductSuccess,
      fail: saveProductError,
      method: "post",
      url: "/offers",
      data: body,
    });
  };
  return (
    <DsContainer>
      <StoreContext.Provider
        value={{ state, dispatch, CrearOferta, EditarOferta, EliminarOferta }}
      >
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
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  flexWrap: "wrap",
                }}
              >
                {state.myProducts.map((item, idx) => {
                  return (
                    <div key={idx}>
                      <ProductItem item={{ ...item }} key={idx} />
                      <div>
                        <Button
                          size="large"
                          color="secondary"
                          variant="contained"
                          onClick={() => EliminarOferta(item.id)}
                        >
                          Eliminar
                        </Button>
                        <Button
                          size="large"
                          variant="contained"
                          color="primary"
                          onClick={() =>
                            dispatch({
                              type: actions.editProduct,
                              payload: item,
                            })
                          }
                        >
                          Editar
                        </Button>
                      </div>
                    </div>
                  );
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
