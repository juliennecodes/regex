import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Tooltip, Typography} from "@mui/material";
import {Meaning} from "./tableCells/Meaning";
import {Example} from "./tableCells/Example";
import {RegexLog} from "./tableCells/RegexLog";
import {RegexSymbol} from "./tableCells/RegexSymbol";
import {Comment} from './tableCells/Comment';

export const BasicTable = ({heading, subheading, rows}) => {
    return (
        <div>
            <Tooltip title={subheading} placement='bottom-start'>
                <Typography variant="h5" component="h2" sx={{cursor: 'pointer'}} id={heading}>
                    {heading}
                </Typography>
            </Tooltip>
            <TableContainer component={Paper} sx={{width: 850}}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Symbol</TableCell>
                            <TableCell>Meaning</TableCell>
                            <TableCell>Example</TableCell>
                            <TableCell></TableCell>
                            <TableCell>Log</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(({name, symbol, meaning, example, comment, explanation}) => (
                            <TableRow
                                key={name}
                                id={name}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <RegexSymbol symbol={symbol}/>
                                <Meaning meaning={meaning}/>
                                <Example name={name} example={example} explanation={explanation}/>
                                <Comment name={name} comment={comment}/>
                                <RegexLog example={example}/>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
