import {createRowData} from "../../helpers";

const anySingleCharacter = createRowData(
    'any-single-character',
    '.',
    'matches any character',
    `'two bears'.match(/.+/)`,
    [
        `look for occurrence that matches the pattern any characters one or more`,
    ],
    []
)
export const metaCharacters = {
    heading: 'Meta Characters',
    tableContents: [
        anySingleCharacter,
    ]
}