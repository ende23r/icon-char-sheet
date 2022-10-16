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

    const fields = [
        {
            type: MaterialUI.Select,
            props: {
                label: "Current Job",
            },
            children: jobOptions,
        },
        {
            type: MaterialUI.TextField,
            props: {
                label: "Current HP",
                variant: "outlined",
            },
            children: 40,
        },
        {
            type: MaterialUI.TextField,
            props: {
                label: "Personal Resolve",
                variant: "outlined",
            },
        },
        {
            type: MaterialUI.TextField,
            props: {
                label: "Relic",
                variant: "outlined",
            },
        },
        {
            type: MaterialUI.TextField,
            props: {
                label: "Limit Break",
                variant: "outlined",
            },
        },
        {
            type: MaterialUI.TextField,
            props: {
                label: "Abilities",
                variant: "outlined",
            },
        },
        {
            type: MaterialUI.TextField,
            props: {
                label: "Trophies",
                variant: "outlined",
            },
        },
    ];

    const elements = fields.map((field) => React.createElement(
        field.type,
        field.props,
        field.children
    ));

    return React.createElement(
        MaterialUI.Grid,
        {},
        elements,
    );
}
