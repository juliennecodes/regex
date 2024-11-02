import TableCell from "@mui/material/TableCell";
import * as React from "react";
import {Preformatted} from "../common/Preformatted";

export const Meaning = ({meaning}) => {
    return (<TableCell width={150}><Preformatted style={{whiteSpace: "pre-wrap"}}>{meaning}</Preformatted></TableCell>)
}