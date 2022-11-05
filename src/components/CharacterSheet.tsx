import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';

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
    const [ data, setData ] = useState({});
    const { character, updateCharacter } = props;

    const updateData = (newData: any) => {
        let temp = Object.assign({}, data);
        temp = Object.assign(data, newData);
        setData(temp);
    };
    const elementRows = [];
    const firstRow = [
    (<TextField
        label={"Name"}
        variant={"outlined"}
        value={character.name}
        onChange={(event) => updateCharacter({ name: event.target.value})}
    />),
    (<TextField
        label={"Pronouns"}
        variant={"outlined"}
        value={character.pronouns}
        onChange={(event) => updateCharacter({ pronouns: event.target.value })}/>),
    ];
    elementRows.push(firstRow);

    const secondRow = [];
    // TODO: Not sure how to get these Selects (Kintype and Culture) to render with a default placeholder. Maybe make them a minimum width?
    secondRow.push(
        <InputLabel
            id={"kintype-select-helper-label"}
        >Kintype</InputLabel>
    );
    secondRow.push(
        <Select
            label={"Kintype"}
            labelId={"kintype-select-helper-label"}
            style={{
                width: 130,  // pixels, a bit larger than the largest selectable item
            }}
            value={character.pronouns}
            onChange={ (event) => updateCharacter({ pronouns: event.target.value })}
        >
            {KINTYPES.map(kt => (<MenuItem value={kt}>{kt}</MenuItem>))}
        </Select>
    );
    secondRow.push(
        <InputLabel id={"culture-select-helper-label"}>
            Culture
        </InputLabel>
    );
    secondRow.push(
        <Select
            labelId={"culture-select-helper-label"}
            style={{
                width: 130,  // pixels, a bit larger than the largest selectable item
            }}
            value={character.pronouns}
            onChange={(event) => updateCharacter({ pronouns: event.target.value })}
        >
            {CULTURES.map(culture => (<MenuItem value={culture}>{culture}</MenuItem>))}
        </Select>
    );
    elementRows.push(secondRow);

    console.log("Level:", props.character.level);
    const thirdRow = [
        (<TextField
            label={ "Level"}
            variant={ "outlined"}
            value={ character.level}
        />),
        (<IconButton
            onClick={() => updateCharacter({
                level: character.level + 1
            })}
        >
            <Icon>
                <img
                    className={ "classes.ImageIcon"}
                    src={ "/add_black_24dp.svg"}
                />
            </Icon>
        </IconButton>),
        (<TextField
            label={ "EXP"}
            variant={ "outlined"}
        />),
        (<TextField
            label={ "Dust"}
            variant={ "outlined"}
        />),
    ];
    elementRows.push(thirdRow);

    const fourthRow = [
        (<TextField
            label={ "Description"}
            variant={ "outlined"}
            multiline={ true}
        />)
    ];
    elementRows.push(fourthRow);

    const gridElements = elementRows.map((elements) =>
            <Grid
                container={true}
                // spacing={30}
                style={{ display: "flex", flexDirection: "row", }}
            >
                {elements}
            </Grid>
        );
    return (<Grid container={true} style={{ flexDirection: "column" }}>{gridElements}</Grid>);
}
