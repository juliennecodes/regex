import {Box, Typography} from "@mui/material";
import TableCell from "@mui/material/TableCell";
import {NoMaxWidthTooltip} from "../common/NoMaxWidthTooltip";
import {EmptyTableCell} from "../common/EmptyTableCell";
import * as React from "react";
import NotesRoundedIcon from '@mui/icons-material/NotesRounded';
import {Preformatted} from "../common/Preformatted";

export const Comment = ({name, comment}) => {
    const content = <Box>
        {comment?.map((line, index) => (<Preformatted key={`${name}-comment-${index}`}>{line}</Preformatted>))}
    </Box>
    return comment?.length > 0 ? (
            <TableCell width={50}>
                <NoMaxWidthTooltip title={content}>
                    <NotesRoundedIcon cursor='help'/>
                </NoMaxWidthTooltip>
            </TableCell>) :
        <EmptyTableCell/>
}