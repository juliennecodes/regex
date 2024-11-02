import {createRowData} from "../../helpers";

const anchorBeginning = createRowData(
    'anchor-beginning',
    '^',
    `anchor at the beginning\nmatches the start of the string`,
    `'abc def'.match(/^abc/)`,
    [
        `look for occurrence of abc at the start of the string`,
        `return 'abc'`
    ],
    []
);

const anchorEnd = createRowData(
    'anchor-end',
    '$',
    `anchor at the end`,
    `'abc def'.match(/def$/)`,
    [
        `look for occurrence of def at the end of the string`,
        `return 'def'`
    ],
    []
);

export const anchors = {
    heading: 'Anchors',
    tableContents: [
        anchorBeginning,
        anchorEnd
    ]
}