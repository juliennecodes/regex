import {createRowData} from "../../helpers";

const zeroOrOneTime = createRowData(
    'zero-or-one-time',
    '?',
    'zero or one time',
    ``,
    [],
    []
);

const zeroOrMoreTimes = createRowData(
    'zero-or-more-times',
    '*',
    'zero or more times',
    ``,
    [],
    []
);

const oneOrMoreTimes = createRowData(
    'one-or-more-times',
    '+',
    'one or more times',
    ``,
    [],
    []
);

const range = createRowData(
    'range',
    '{n, o}',
    'matches a specific number of occurrences of the preceding element',
    `'a aa aaa aaaa aaaaa'.matchAll(/a{2,4}/g)`,
    [
        `look for all occurrences of aa, aaa, aaaa`,
        `aa - 2`,
        `aaa - in between 2, 4`,
        `aaaa - 4`,
    ],
    []
)
export const quantifiers = {
    heading: 'Quantifiers',
    tableContents: [
        zeroOrOneTime,
        zeroOrMoreTimes,
        oneOrMoreTimes,
        range,
    ]
}