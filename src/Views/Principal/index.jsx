import * as React from "react";

import { Typography, CircularProgress } from "@material-ui/core";

import DsContainer from "../../Components/DsContainer";
import HeaderPart from "../../Components/HeaderPart";

import { actions } from "./actions";
import { reducer } from "./reducer";
import { initialState } from "./constants";

import { petition } from "../../utils/petition";

import ProductItem from "../../Components/ProductCard";

export default function Principal() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    const getProductList = async () => {
      const { getProducts, getProductsError, getProductsSuccess } = actions;
      petition({
        dispatch,
        first: getProducts,
        success: getProductsSuccess,
        fail: getProductsError,
        method: "get",
        url: "/posts",
      });
    };
    getProductList();
  }, []);

  return (
    <DsContainer>
      <HeaderPart>
        <Typography color="textSecondary" variant="h4">
          AgroNetwork
        </Typography>
      </HeaderPart>
      {state.loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {state.products.map((item, idx) => {
            return <ProductItem item={item} key={idx} />;
          })}
        </div>
      )}
    </DsContainer>
  );
}
