import * as React from "react";

import { Typography, Button } from "@material-ui/core";

import DsContainer from "../../Components/DsContainer";
import HeaderPart from "../../Components/HeaderPart";

export default function Mercado() {
  return (
    <DsContainer>
      <HeaderPart>
        <Typography color="textSecondary" variant="h4">
          Mercado
        </Typography>
      </HeaderPart>
    </DsContainer>
  );
}
