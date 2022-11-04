'use strict';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';

import { makeMenuItem } from '../util/Util';

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

export function CharacterSheet(props: any) {
    const { character, updateCharacter } = props;

    const elementRows = [];
    const firstRow = [];
    firstRow.push(React.createElement(
        TextField,
        {
            label: "Name",
            variant: "outlined",
            value: character.name,
            onChange: (event) => updateCharacter({ name: event.target.value })
        },
    ));
    firstRow.push(React.createElement(
        TextField,
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
        InputLabel,
        {
            id: "kintype-select-helper-label",
        },
        "Kintype",
    ));
    secondRow.push(React.createElement(
        Select,
        {
            label: "Kintype",
            labelId: "kintype-select-helper-label",
            style: {
                width: 130,  // pixels, a bit larger than the largest selectable item
            },
            value: character.pronouns,
            onChange: (event) => updateCharacter({ pronouns: event.target.value })
        },
        KINTYPES.map(kt => makeMenuItem(kt)),
    ));
    secondRow.push(React.createElement(
        InputLabel,
        {
            id: "culture-select-helper-label",
        },
        "Culture",
    ));
    secondRow.push(React.createElement(
        Select,
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

    console.log("Level:", props.character.level);
    const thirdRow = [];
    thirdRow.push(React.createElement(
        TextField,
        {
            label: "Level",
            variant: "outlined",
            value: character.level
        },
    ));
    thirdRow.push(React.createElement(
        IconButton,
        {
            onClick: () => updateCharacter({
                level: character.level + 1
            }),
        },
        React.createElement(
            Icon,
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
//        IconButton,
//        {
//            onClick: () => updateCharacter({
//                level: character.level - 1
//            }),
//        },
//        React.createElement(MaterialUI.Remove)
//    ));

    thirdRow.push(React.createElement(
        TextField,
        {
            label: "EXP",
            variant: "outlined",
        },
    ));
    thirdRow.push(React.createElement(
        TextField,
        {
            label: "Dust",
            variant: "outlined",
        },
    ));
    elementRows.push(thirdRow);

    const fourthRow = [];
    fourthRow.push(React.createElement(
        TextField,
        {
            label: "Description",
            variant: "outlined",
            multiline: true,
        },
    ));
    elementRows.push(fourthRow);

    const gridElements = elementRows.map((elements) =>
        React.createElement(
            Grid,
            {
                item: true,
                xs: 12,
                style: { display: "flex", flexDirection: "row" },
            },
            elements
        ));
    return React.createElement(
        Grid,
        {
            // label: "Personal Details",
            container: true,
        },
        gridElements);
}
