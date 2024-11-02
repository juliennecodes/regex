import {createRowData} from "../../helpers";

const caseInsensitive = createRowData(
    'case-insensitive',
    'i',
    'case insensitive',
    `'BeAr'.match(/bear/i)`,
    [
        `look for the character 'b' followed by 'e' followed by 'a' followed by 'r'`,
        `it doesn't matter whether the characters are uppercase or lowercase`
    ],
    [`regex engine configured to be case insensitive, therefore, ‘BeAr’ matches the pattern bear`],
)

const global = createRowData(
    'global',
    'g',
    'match all occurrences',
    `'bear bear bear'.matchAll(/bear/g)`,
    [
        `look for ALL occurrences that match the pattern bear`,
        `will return three occurrences`,
    ],
    [
        `regex engine configured with global flag`,
        `regex engine won't stop at the first match`,
        `regex engine will continue to walk through the string character by character looking for more matches`,
        `only works with matchAll`,
        `doesn't work with match`
    ],
);

export const flags = {
    heading: 'Flags',
    tableContents: [
        caseInsensitive,
        global,
    ]
}