import * as React from "react";

import {
  Typography,
  CircularProgress,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";

import DsContainer from "../../Components/DsContainer";
import HeaderPart from "../../Components/HeaderPart";

import { initialState } from "./constants";
import { actions } from "./actions";
import { reducer } from "./reducer";

import APIURL from "../../utils/APIURL";
import { petition } from "../../utils/petition";

export default function Empresas() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    const fetchEnterprises = async () => {
      const {
        getEnterprises,
        getEnterprisesError,
        getEnterprisesSuccess,
      } = actions;

      petition({
        dispatch,
        fail: getEnterprisesError,
        first: getEnterprises,
        success: getEnterprisesSuccess,
        method: "get",
        url: "/enterprises",
      });
    };
    fetchEnterprises();
  }, []);
  return (
    <DsContainer>
      <HeaderPart>
        <Typography color="textSecondary" variant="h4">
          Empresas
        </Typography>
      </HeaderPart>
      {state.loading ? (
        <CircularProgress />
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}
        >
          {state.enterprises.map((item, idx) => {
            return (
              <div
                style={{
                  width: "400px",
                  marginBottom: "10px",
                  marginTop: "10px",
                }}
                key={idx}
              >
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Empresa"
                      height="140"
                      image={`${APIURL}${item.img}`}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {item.name}
                      </Typography>
                      <Typography variant="h6">
                        {`${item.enterprise.description}`}
                      </Typography>
                      <Typography variant="body" color="textSecondary">
                        {`Estado: ${item.enterprise.state} Ciudad: ${item.enterprise.city} Dirección: ${item.enterprise.address}`}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {`Email:${item.email} `}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {`Email:${item.phone} `}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            );
          })}
        </div>
      )}
    </DsContainer>
  );
}
