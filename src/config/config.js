import {flags} from "./sectionConfigs/flags";
import {metaCharacters} from "./sectionConfigs/metaCharacters";
import {quantifiers} from "./sectionConfigs/quantifiers";
import {characterClass} from "./sectionConfigs/characterClass";
import {predefinedCharacterClass} from "./sectionConfigs/predefinedCharacterClasses";
import {anchors} from "./sectionConfigs/anchorGroups";
import {captureGroups} from "./sectionConfigs/captureGroups";
import {assertions} from "./sectionConfigs/assertions";

export const config = {
    title: 'Regex Cheatsheet',
    howItWorks: [
        `regex is a pattern matching language`,
        `\n`,
        `regex walks along your string character by character looking for a match`,
    ],
    categories: [
        flags,
        metaCharacters,
        quantifiers,
        characterClass,
        predefinedCharacterClass,
        anchors,
        captureGroups,
        assertions
    ]
}