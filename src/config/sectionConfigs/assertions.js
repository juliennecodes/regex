import {createRowData} from "../../helpers";

const positiveLookAhead = createRowData(
    'positive-lookahead',
    '(?=pattern)',
    `positive lookahead\nasserts that there is a following pattern`,
    `'apples, bananas? cherries!'.match(/\\w+(?=!)/)`,
    [
        `look for occurrence of a word that is followed by the character '!'`,
        `only match the word if it is followed by '!'`
    ],
    [
        `use for cases where you need to look ahead`,
        `regex walks the string character by character and if you want to make sure that a pattern will follow ahead of where the regex engine is currently looking, use lookahead`,
        `think of it like pre-emptive walk, seeing beyond where the engine is currently`,
        `match only if what you want to match is followed by a specific pattern`
    ]
)

const positiveLookAheadB = createRowData(
    'positive-lookahead-b',
    '(?=pattern)',
    `positive lookahead\nasserts that there is a following pattern`,
    `'apples, bananas? cherries!'.matchAll(/[A-Za-z0-9_]+(?=!)/g)`,
    [
        `look for occurrence of a word that is followed by the character '!'`,
    ],
    [
        `use for cases where you need to look ahead`,
        `regex walks the string character by character and if you want to make sure that a pattern will follow ahead of where the regex engine is currently looking, use lookahead`,
        `think of it like pre-emptive walk, seeing beyond where the engine is currently`,
    ]
)

const negativeLookAhead = createRowData(
    'negative-lookahead',
    '(?!pattern)',
    `negative lookahead\nasserts that there is not a following pattern`,
    `'apples bananas cherries'.matchAll(/\\w+(?![\\s?]bananas[\\s?])/g)`,
    [
        `look for occurrence of a word that is not followed by the character 'bananas'`,
        `only match the word if it is not followed by 'bananas'`
    ],
    [
        `use for cases where you need to look ahead`,
        `match only if what you want to match is not followed by a specific pattern`
    ]
)

const positiveLookBehind = createRowData(
    'positive-lookbehind',
    '(?<=pattern)',
    `positive lookbehind\nasserts that there is a preceding pattern`,
    `'apples bananas apples cherries'.matchAll(/(?<=apples[\\s?])\\w+/g)`,
    [
        `look for occurrence of a word that is preceded by 'apples'`,
        `only match the word if it is preceded by 'apples'`
    ],
    [
        `use for cases where you need to look before`,
        `match only if what you want to match is preceded by a specific pattern`
    ]
)

const negativeLookBehind = createRowData(
    'negative-lookbehind',
    '(?<!pattern)',
    `negative lookbehind\nasserts that there is not a preceding pattern`,
    `'apples bananas cherries'.matchAll(/(?<!bananas[\\s?])\\w+/g)`,
    [
        `look for occurrence of a word that is not preceded by 'bananas'`,
        `only match the word if it is not preceded by 'bananas'`
    ],
    [
        `use for cases where you need to look before`,
        `match only if what you want to match is not preceded by a specific pattern`
    ]
)


export const assertions = {
    heading: 'Assertions',
    tableContents: [
        positiveLookAhead,
        positiveLookAheadB,
        negativeLookAhead,
        positiveLookBehind,
        negativeLookBehind,
    ]
}