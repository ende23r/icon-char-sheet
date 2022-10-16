'use strict';

const BONDS = [
    "Pathfinder",
    "Seeker",
    "Mighty",
    "Wolf",
    "Harlequin",
    "Highborn",
    "Mendicant",
    "Brave",
    "Broker",
    "Elder",
    "Outsider",
    "Dreamer",
];

export function BondSheet(props) {
    const bondOptions = BONDS.map((bond) => makeMenuItem(bond));

    const fields = [
        {
            type: MaterialUI.Select,
            props: {
                label: "Bond",
            },
            children: bondOptions,
        },
        {
            type: MaterialUI.TextField,
            props: {
                label: "Effort",
                variant: "outlined",
            },
            children: [],
        },
        {
            type: MaterialUI.TextField,
            props: {
                label: "Strain",
                variant: "outlined",
            },
            children: [],
        },
        {
            type: MaterialUI.TextField,
            props: {
                label: "Bond Powers",
                variant: "outlined",
            },
            children: [],
        },
        {
            type: MaterialUI.TextField,
            props: {
                label: "Actions",
                variant: "outlined",
            },
            children: [],
        },
        {
            type: MaterialUI.TextField,
            props: {
                label: "Special Actions",
                variant: "outlined",
            },
            children: [],
        },
        {
            type: MaterialUI.TextField,
            props: {
                label: "Ideals",
                variant: "outlined",
            },
            children: [],
        },
        {
            type: MaterialUI.TextField,
            props: {
                label: "Ambitions",
                variant: "outlined",
            },
            children: [],
        },
        {
            type: MaterialUI.TextField,
            props: {
                label: "Burdens",
                variant: "outlined",
            },
            children: [],
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
