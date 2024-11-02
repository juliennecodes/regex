import TableCell from "@mui/material/TableCell";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";
import {copyContent} from "../../helpers";
import {EmptyTableCell} from "../common/EmptyTableCell";
import * as React from "react";

export const RegexLog = ({example}) => {
    const content = example.includes('matchAll') ?
        `x = ${example}; for(const y of x) {console.log(y)};` :
        `x = ${example}`;

    return example ? (
        <TableCell><CircleRoundedIcon onClick={() => copyContent(content)} cursor='pointer'/></TableCell>
    ) : <EmptyTableCell/>
}