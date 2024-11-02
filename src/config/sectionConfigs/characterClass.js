import {createRowData} from "../../helpers";

const aSingleCharacter = createRowData(
    'a-single-character',
    '[xy]',
    'matches any of the characters inside the brackets',
    `'bear boar'.matchAll(/b[eo]ar/g)`,
    [
        `look for all occurrences of b followed by either e or o and then followed by r`,
        `will return matches 'bear' and 'boar'`,
    ],
    []
)

const aSingleCharacterB = createRowData(
    'a-single-character-b',
    '',
    '',
    `'beeeeear boooooar'.matchAll(/b[eo]+ar/g)`,
    [
        `look for all occurrences of b followed by e or o with one or more of e or o then followed by r`,
        `will return matches 'beeeeear' and 'boooooar'`,
    ],
    [
        `you can combine [] with quantifiers`,
        `[] only captures a single character`
    ]
)

const characterClassNegation = createRowData(
    `character-class-negation`,
    '[^xy]',
    `negation of character class`,
    `'da db dc dd de'.matchAll(/d[^ao]/g)`,
    [
        `look for all occurrences of d that is followed by one character`,
        `that one character is NOT a or o`
    ],
    []
)

const characterClassRange = createRowData(
    `character-class-range`,
    `[x-y]`,
    `range in a character class`,
    `'hello 100 world 200 9000'.matchAll(/[0-9]+/g)`,
    [
        `look for all occurrences of one or more characters 0, 1, 2, 3, 4, 5, 6, 7, 8, 9`,
        `will match 100, 200, 9000`,
        `1 matches 1`,
        `0 matches 0`,
        `0 matches 0`,
        `...etc`,
    ],
    []
)

export const characterClass = {
    heading: 'Character Class',
    subheading: 'specifies different character that could match',
    tableContents: [
        aSingleCharacter,
        aSingleCharacterB,
        characterClassNegation,
        characterClassRange
    ]
}