import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const BasicTable = ({ rowData, headCells }) => {
  return (
    <TableContainer style={{ margin: "20px", width: "50%" }} component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {headCells.map(({ label }) => (
              <TableCell>{label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rowData.map(({ name = "", email = "", desc = "" }) => (
            <>
              <TableRow
                key={name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" >
                  {name}
                </TableCell>
                {email && <TableCell component="th" scope="row">{email}</TableCell>}
                {desc && <TableCell component="th" scope="row">{desc}</TableCell>}
              </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasicTable;
