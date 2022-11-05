import React from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';

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

export function JobSheet(props: any) {
    const jobOptions = JOBS.map((job) => (<MenuItem value={job}>{job}</MenuItem>));

    const rows = [];
    const firstRow = [];
    firstRow.push(
        <Select
            label={"Current Job"}
        >
        {jobOptions}</Select>
    );
    rows.push(firstRow);

    const secondRow = [];
    secondRow.push(
        <TextField
            label={"Current HP"}
            variant={"outlined"}
        >
        {40}</TextField>
    );
    secondRow.push(
        <TextField
            label={"Personal Resolve"}
            variant={"outlined"}
        />
    );
    rows.push(secondRow);

    const thirdRow = [];
    thirdRow.push(
        <TextField
            label={"Limit Break"}
            variant={"outlined"}
        />
    );
    thirdRow.push(
        <TextField
            label={"Abilities"}
            variant={"outlined"}
        />
    );
    rows.push(thirdRow);

    const fourthRow = [];
    fourthRow.push(
        <TextField
            label={"Relic"}
            variant={"outlined"}
        />
    );
    fourthRow.push(
        <TextField
            label={"Trophies"}
            variant={"outlined"}
        />
    );
    rows.push(fourthRow);

    const elements = rows.map((row) => {
        return (<Grid
                item={true}
                xs={12}
                style={{}}
            >
            {row}
            </Grid>);
    });

    return (<Grid
        container={true}
        >
        {elements}
        </Grid>);
}
