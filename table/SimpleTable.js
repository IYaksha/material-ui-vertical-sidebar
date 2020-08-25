import React from "react";
import { Table, TableHead, TableBody, TableRow, TableCell } from "@material-ui/core";

const SimpleTable = ({ className, headers, data, }) => {
  return (
    <Table size="small" className={className}>
      <TableHead>
        <TableRow>
          {headers.map((header, index) => (
            <TableCell key={index} align={index === headers.length - 1 ? "right" : "left"}>{header}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row, index) => (
          <TableRow key={index}>
            {row.map((cell, index) => (
              <TableCell key scope="row" align={index === row.length - 1 ? "right" : "left"}>{cell}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default SimpleTable;