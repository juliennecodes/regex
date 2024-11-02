import TableCell from "@mui/material/TableCell";
import {Typography} from "@mui/material";
import * as React from "react";

export const RegexSymbol = ({symbol}) => {
    return (
        <TableCell component="th" scope="row" width={100}>
            <Typography sx={{fontSize: 16}}>{symbol}</Typography>
        </TableCell>);
}