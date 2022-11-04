'use strict';

import { makeMenuItem } from './Util.js';

const JOBS = [
    // Stalwarts
    "Bastion",
    "Demon Slayer",
    "Colossus",
    "Knave",

    // Vagabonds
    "Fool",
    "Freelancer",
    "Shade",
    "Warden",

    // Mendicants
    "Chanter",
    "Harvester",
    "Sealer",
    "Seer",

    // Wrights
    "Enochian",
    "Geomancer",
    "Spellblade",
    "Stormbender",
];

//TODO: flesh these out with components: https://mui.com/material-ui/react-app-bar/

export function JobSheet(props) {
    const jobOptions = JOBS.map((job) => makeMenuItem(job));

    const rows = [];
    const firstRow = [];
    firstRow.push(React.createElement(
        MaterialUI.Select,
        {
            label: "Current Job",
        },
        jobOptions,
    ));
    rows.push(firstRow);

    const secondRow = [];
    secondRow.push(React.createElement(
        MaterialUI.TextField,
        {
            label: "Current HP",
            variant: "outlined",
        },
        40,
    ));

    secondRow.push(React.createElement(
        MaterialUI.TextField,
        {
            label: "Personal Resolve",
            variant: "outlined",
        },
    ));
    rows.push(secondRow);

    const thirdRow = [];
    thirdRow.push(React.createElement(
        MaterialUI.TextField,
        {
            label: "Limit Break",
            variant: "outlined",
        },
    ));
    thirdRow.push(React.createElement(
        MaterialUI.TextField,
        {
            label: "Abilities",
            variant: "outlined",
        },
    ));
    rows.push(thirdRow);

    const fourthRow = [];
    fourthRow.push(React.createElement(
        MaterialUI.TextField,
        {
            label: "Relic",
            variant: "outlined",
        },
    ));
    fourthRow.push(React.createElement(
        MaterialUI.TextField,
        {
            label: "Trophies",
            variant: "outlined",
        },
    ));
    rows.push(fourthRow);

    const elements = rows.map((row) => {
        return React.createElement(
            MaterialUI.Grid,
            {
                item: true,
                xs: 12,
                style: {},
            },
            row
        );
    });

    return React.createElement(
        MaterialUI.Grid,
        { container: true },
        elements,
    );
}
