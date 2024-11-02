import {createRowData} from "../../helpers";

const wordCharacter = createRowData(
    'word-character',
    `\\w`,
    `word character\n[A-Za-z0-9_]`,
    ``,
    [],
    []
);

const nonWordCharacter = createRowData(
    'non-word-character',
    `\\W`,
    `non word character\n[^A-Za-z0-9_]`,
    ``,
    [],
    []
);

const whitespace = createRowData(
    'whitespace-character',
    `\\s`,
    `whitespace\n[\\t\\r\\n\\f]`,
    ``,
    [],
    []
);

const nonWhitespace = createRowData(
    'non-whitespace-character',
    `\\S`,
    `whitespace\n[^\\t\\r\\n\\f]`,
    ``,
    [],
    []
);

const digit = createRowData(
    'digit',
    `\\d`,
    `digit\n[0-9]`,
    ``,
    [],
    []
);

const nonDigit = createRowData(
    'non-digit',
    `\\D`,
    `non digit\n[^0-9]`,
    ``,
    [],
    []
);

export const predefinedCharacterClass = {
    heading: 'Predefined Character Class',
    tableContents: [
        wordCharacter,
        nonWordCharacter,
        whitespace,
        nonWhitespace,
        digit,
        nonDigit,
    ]
}