'use strict';

import { makeMenuItem } from './Util.js';

const KINTYPES = [
    "Beastfolk",
    "Thrynn",
    "Trogg",
    "Xixo",
];

const CULTURES = [
    "Churner",
    "Chronicler",
    "Guilder",
    "Islander",
    "Leggio",
    "Yeokin",
];

function createDefaultCharacter() {
    return {
        name: "Name",
        pronouns: "",
        kintype: "",
        culture: "",
        level: 0,
        exp: 0,
        dust: 0,
        description: "",
        bond: {},
        job: {},
    };
}

export function CharacterSheet(props) {
    const { character, updateCharacter } = props;

    const elementRows = [];
    const firstRow = [];
    firstRow.push(React.createElement(
        MaterialUI.TextField,
        {
            label: "Name",
            variant: "outlined",
            value: character.name,
            onChange: (event) => updateCharacter({ name: event.target.value })
        },
    ));
    firstRow.push(React.createElement(
        MaterialUI.TextField,
        {
            label: "Pronouns",
            variant: "outlined",
            value: character.pronouns,
            onChange: (event) => updateCharacter({ pronouns: event.target.value })
        },
    ));
    elementRows.push(firstRow);

    const secondRow = [];
    // TODO: Not sure how to get these Selects (Kintype and Culture) to render with a default placeholder. Maybe make them a minimum width?
    secondRow.push(React.createElement(
        MaterialUI.InputLabel,
        {
            id: "kintype-select-helper-label",
        },
        "Kintype",
    ));
    secondRow.push(React.createElement(
        MaterialUI.Select,
        {
            label: "Kintype",
            labelid: "kintype-select-helper-label",
            style: {
                width: 130,  // pixels, a bit larger than the largest selectable item
            },
            value: character.pronouns,
            onChange: (event) => updateCharacter({ pronouns: event.target.value })
        },
        KINTYPES.map(kt => makeMenuItem(kt)),
    ));
    secondRow.push(React.createElement(
        MaterialUI.InputLabel,
        {
            id: "culture-select-helper-label",
        },
        "Culture",
    ));
    secondRow.push(React.createElement(
        MaterialUI.Select,
        {
            labelId: "culture-select-helper-label",
            style: {
                width: 130,  // pixels, a bit larger than the largest selectable item
            },
            value: character.pronouns,
            onChange: (event) => updateCharacter({ pronouns: event.target.value })
        },
        CULTURES.map(culture => makeMenuItem(culture)),
    ));
    elementRows.push(secondRow);

    const thirdRow = [];
    thirdRow.push(React.createElement(
        MaterialUI.TextField,
        {
            label: "Level",
            variant: "outlined",
            disabled: true,
            value: character.level,
        },
    ));
    thirdRow.push(React.createElement(
        MaterialUI.IconButton,
        {
            onClick: () => updateCharacter({
                level: character.level + 1
            }),
        },
        React.createElement(
            MaterialUI.Icon,
            {},
            React.createElement(
                "img",
                {
                    className: "classes.ImageIcon",
                    src: "svg/add_black_24dp.svg",
                },
            )
        )
    ));
//    thirdRow.push(React.createElement(
//        MaterialUI.IconButton,
//        {
//            onClick: () => updateCharacter({
//                level: character.level - 1
//            }),
//        },
//        React.createElement(MaterialUI.Remove)
//    ));

    thirdRow.push(React.createElement(
        MaterialUI.TextField,
        {
            label: "EXP",
            variant: "outlined",
        },
    ));
    thirdRow.push(React.createElement(
        MaterialUI.TextField,
        {
            label: "Dust",
            variant: "outlined",
        },
    ));
    elementRows.push(thirdRow);

    const fourthRow = [];
    fourthRow.push(React.createElement(
        MaterialUI.TextField,
        {
            label: "Description",
            variant: "outlined",
            multiline: true,
        },
    ));
    elementRows.push(fourthRow);

    const gridElements = elementRows.map((elements) =>
        React.createElement(
            MaterialUI.Grid,
            {
                item: true,
                xs: 12,
                style: { display: "flex", flexDirection: "row" },
            },
            elements
        ));
    return React.createElement(
        MaterialUI.Grid,
        {
            label: "Personal Details",
            container: true,
        },
        gridElements);
}
