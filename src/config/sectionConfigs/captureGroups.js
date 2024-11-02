import {createRowData} from "../../helpers";

const captureGroup = createRowData(
    'capture-group',
    '()',
    'capture group',
    `'hsl(190, 100%, 45%)'.match(/hsl\\((\\d+), (\\d+)%, (\\d+)%\\)/)`,
    [
        `the pattern must be matched and if the pattern is matched, certain parts are captured`,
        `() groups the elements together and captures the matched text`,
        `in the first group, occurrences of one or more digits that is followed by ',' is captured`,
        `in the second group, occurrences of one or more digits that is followed by '%' is captured`,
        `in the third group, occurrences of one or more digits that is followed by '%' is captured`,
    ],
    [
        `() tells regex engine to save that text`,
        `Everyone of these capture groups that you specify in your regular expression is going to be available with an integer index`,
        'index 0 is the match',
        'index 1 is the first capture group - captured value available in match[1]',
        'index 2 is the second capture group - captured value available in match[2]',
        'index 3 is the third capture group - captured value available in match[3]'
    ]
)

const namedCaptureGroupMatch = createRowData(
    'named-capture-group-match',
    '(?<name>\d+)',
    'named capture group',
    `'hsl(193, 74%, 69%)'.match(/hsl\\((?<hue>\\d+), (?<saturation>\\d+)%, (?<lightness>\\d+)%\\)/)`,
    [
        `the pattern of hsl(digit+, digit+%, digit+%) must be matched`,
        `afterwards captured text are saved`,
        '(?<name>pattern) anything that fits the pattern within the capture group parenthesis will be saved under groups.name',
        `\n`,
        `look for occurrence of 'hsl(' and if the following characters are one or more digits and the digit is followed by a comma`,
        `capture that digit and save the value under groups.hue`,
        `same principle applies to other named capture groups`
    ],
    [
        'you can get the value using deconstruction',
        'const {hue, saturation, lightness} = returnedMatch.groups'
    ]
)

const namedCaptureGroupMatchAll = createRowData(
    'named-capture-group-match-all',
    '',
    '',
    `'hsl(193, 74%, 69%) hsl(272, 50%, 74%)'.matchAll(/hsl\\((?<hue>\\d+), (?<saturation>\\d+)%, (?<lightness>\\d+)%\\)/g)`,
    [
        `the pattern of hsl(digit+, digit+%, digit+%) must be matched`,
        `afterwards captured text are saved`,
        '(?<name>pattern) anything that fits the pattern within the capture group parenthesis will be saved under groups.name',
        `\n`,
        `look for occurrence of 'hsl(' and if the following characters are one or more digits and the digit is followed by a comma`,
        `capture that digit and save the value under groups.hue`,
        `same principle applies to other named capture groups`
    ],
    [
        `matchAll returns an iterator containing the matches`,
        `you have to iterate each element to get the contents of each match`,
        `you can get the value of the named capture group using deconstruction`,
        `for each iteration, you can do`,
        `const {hue, saturation, lightness} = returnedMatch.groups`
    ]
)

const nonCaptureGroup = createRowData(
    'non-capture-group',
    '(?:[x]|[y])',
    'non capture group',
    `'abc <def> "ghi"'.matchAll(/(?:<[^>]+>|"[^"]+")/g)`,
    [
        `look for occurrences of '<' one or more character that isn't '>'followed by '>'`,
        `or`,
        `'"' one or more character that isn't '"' followed by '"'`,
        'matches <def> or "ghi"'
    ],
    [
        `if you need to use an OR in your group`
    ]
)

export const captureGroups = {
    heading: 'Capture Group',
    tableContents: [
        captureGroup,
        namedCaptureGroupMatch,
        namedCaptureGroupMatchAll,
        nonCaptureGroup
    ]
}