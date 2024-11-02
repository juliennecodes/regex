import {Box, Typography} from "@mui/material";
import {copyContent} from "../../helpers";
import TableCell from "@mui/material/TableCell";
import {NoMaxWidthTooltip} from "../common/NoMaxWidthTooltip";
import * as React from "react";
import {EmptyTableCell} from "../common/EmptyTableCell";
import {Preformatted} from "../common/Preformatted";

const ExampleContent = ({example}) => {
    const regex = /(?<stringSegment>'.+')(?<matchSegment>.[matchAl(]+)(?<regexSegment>\/.*[^$)])(?<remainderSegment>.*)/;
    const {stringSegment, matchSegment, regexSegment, remainderSegment} = example.match(regex).groups;
    return (
        <Box
            sx={{cursor: 'pointer'}}
            onClick={() => copyContent(example)}
        >
            <Preformatted>
                <code>
                    <span className='stringSegment'>{stringSegment}</span>
                    <span className='matchSegment'>{matchSegment}</span>
                    <span className='regexSegment'>{regexSegment}</span>
                    <span className='matchSegment'>{remainderSegment}</span>
                </code>
            </Preformatted>
        </Box>);
}

export const Example = ({name, example, explanation}) => {
    const hasExplanation = explanation.length > 0
    const explanationContent =
        <Box>
            <Preformatted><span>process </span><span className='stringSegment'>{example.match(/'.+'/)}</span></Preformatted>
            {explanation.map((line, index) => (<Preformatted key={`${name}-explanation-${index}`} >{line}</Preformatted>))}
        </Box>

    return example ? (
        <TableCell width={400}>
            {hasExplanation ? (
                    <NoMaxWidthTooltip title={explanationContent}>
                        <Box>
                            <ExampleContent example={example}/>
                        </Box>
                    </NoMaxWidthTooltip>) :
                <ExampleContent example={example}/>
            }
        </TableCell>) :
        <EmptyTableCell />
}