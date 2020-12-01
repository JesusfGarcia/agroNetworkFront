import * as React from "react";

import {
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  CircularProgress,
} from "@material-ui/core";

import DsContainer from "../../Components/DsContainer";
import HeaderPart from "../../Components/HeaderPart";

import { myAxios } from "../../utils/axiosBase";

export default function Mercado() {
  const [tableData, setTableData] = React.useState([]);
  React.useEffect(() => {
    const getTableData = async () => {
      try {
        const { data } = await myAxios({ method: "get", url: "/scrap" });
        const myNewData = data.arrInfo;
        myNewData.shift();
        setTableData(myNewData);
      } catch (error) {
        console.log(error);
      }
    };
    getTableData();
  }, []);
  return (
    <DsContainer>
      <HeaderPart>
        <Typography color="textSecondary" variant="h4">
          Mercado
        </Typography>
      </HeaderPart>
      {tableData.length === 0 ? (
        <CircularProgress color="primary" />
      ) : (
        <TableContainer component={Paper} style={{ marginTop: "10px" }}>
          <Table size="medium">
            <TableHead>
              <TableRow>
                <TableCell>Producto</TableCell>
                <TableCell>Calidad</TableCell>
                <TableCell>Dia 1</TableCell>
                <TableCell>Dia 2</TableCell>
                <TableCell>Dia 3</TableCell>
                <TableCell>Dia 4</TableCell>
                <TableCell>Dia 5</TableCell>
                <TableCell>Origen</TableCell>
                <TableCell>Presentación Comercial</TableCell>
                <TableCell>Promedio Semana Anterior</TableCell>
                <TableCell>Promedio Semanal por kg</TableCell>
                <TableCell>Variación</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row, idx) => {
                return (
                  <TableRow key={idx}>
                    <TableCell>{row.Producto}</TableCell>
                    <TableCell>{row.Calidad}</TableCell>
                    <TableCell>{row.Dia1}</TableCell>
                    <TableCell>{row.Dia2}</TableCell>
                    <TableCell>{row.Dia3}</TableCell>
                    <TableCell>{row.Dia4}</TableCell>
                    <TableCell>{row.Dia5}</TableCell>
                    <TableCell>{row.Origen}</TableCell>
                    <TableCell>{row.PresentacionComercial}</TableCell>
                    <TableCell>{row.PromedioSemanaAnterior}</TableCell>
                    <TableCell>{row.PromedioSemanalKg}</TableCell>
                    <TableCell>{row.Variacion}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </DsContainer>
  );
}
