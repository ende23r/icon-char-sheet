import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

const BONDS = [
    "The Pathfinder",
    "The Seeker",
    "The Mighty",
    "The Wolf",
    "The Harlequin",
    "The Highborn",
    "The Mendicant",
    "The Brave",
    "The Broker",
    "The Elder",
    "The Outsider",
    "The Dreamer",
];

export function BondSheet(props: any) {
    const bondOptions = BONDS.map((bond) => 
        (<MenuItem value={bond}>{bond}</MenuItem>));

    const fields = [
            (<Select
                label={"Bond"}
            >{bondOptions}</Select>),
            (<TextField
                label={"Effort"}
                variant={"outlined"}
            />),
            (<TextField
                label={"Strain"}
                variant={"outlined"}
            />),
            (<TextField
                label={"Bond Powers"}
                variant={"outlined"}
            />),
            (<TextField
                label={"Actions"}
                variant={"outlined"}
            />),
            (<TextField
                label={"Special Actions"}
                variant={"outlined"}
            />),
            (<TextField
                label={"Ideals"}
                variant={"outlined"}
            />),
            (<TextField
                label={"Ambitions"}
                variant={"outlined"}
            />),
            (<TextField
                label={"Burdens"}
                variant={"outlined"}
            />),
    ];

    return (<Grid>{fields}</Grid>);
} 
