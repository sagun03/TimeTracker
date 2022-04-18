import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Timer from "../Timer";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";

const BasicTable = ({ rowData = [], headCells = [], deleteAction, handleTimer }) => {
  const dispatch = useDispatch();
  
  return (
    <TableContainer style={{ margin: "20px", width: "50%" }} component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {headCells.map(({ label }) => (
              <TableCell align="center">{label}</TableCell>
            ))}
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowData.map(
            ({
              id,
              name = "",
              email = "",
              desc = "",
              author = "",
              task = "",
              demo = "",
              time = "",
            }) => (
              <>
                <TableRow
                  key={name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    {name}
                  </TableCell>
                  {email && (
                    <TableCell align="center" component="th" scope="row">
                      {email}
                    </TableCell>
                  )}
                  {desc && (
                    <TableCell align="center" component="th" scope="row">
                      {desc}
                    </TableCell>
                  )}
                  {author && (
                    <TableCell align="center" component="th" scope="row">
                      {author}
                    </TableCell>
                  )}
                  {task && (
                    <TableCell align="center" component="th" scope="row">
                      {task}
                    </TableCell>
                  )}
                  {demo && (
                    <TableCell align="center" component="th" scope="row">
                      <Timer handleTimer={handleTimer} id={id} demoTime={time}/>
                    </TableCell>
                  )}
                  <TableCell align="center">
                    <IconButton onClick={() => dispatch(deleteAction(id))} color="primary">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              </>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasicTable;
