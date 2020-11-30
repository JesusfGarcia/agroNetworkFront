import * as React from "react";

import { Typography, Button } from "@material-ui/core";

import DsContainer from "../../Components/DsContainer";
import HeaderPart from "../../Components/HeaderPart";

export default function Principal() {
  return (
    <DsContainer>
      <HeaderPart>
        <Typography color="textSecondary" variant="h4">
          AgroNetwork
        </Typography>
      </HeaderPart>
    </DsContainer>
  );
}
