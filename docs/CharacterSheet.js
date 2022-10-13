
//TODO: flesh these out with components: https://mui.com/material-ui/react-app-bar/

export function JobSheet(props) {
    return ("Here we can talk about the job you chose.");
}

export function BondSheet(props) {
    return ("Here we can talk about the bond you chose.");
} 

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

function makeMenuItem(name) {
    return React.createElement(
        MaterialUI.MenuItem,
        {
            value: name,
            key: `menuitem-${name}`,
        },
        [ name ],
    );
}

export function CharacterSheet(props) {
    const [name, setName] = React.useState("Character Name");

    const fields = [
        {
            type: MaterialUI.TextField,
            props: {
                label: "Name",
                variant: "outlined",
            },
            children: [name],
        },
        {
            type: MaterialUI.TextField,
            props: {
                label: "Pronouns",
                variant: "outlined",
            },
            children: [],
        },
        // TODO: Not sure how to get these Selects (Kintype and Culture) to render with a default placeholder. Maybe make them a minimum width?
        {
            type: MaterialUI.Select,
            props: {
                label: "Kintype",
                placeholder: "Kintype",
                defaultValue: "",
            },
            children: KINTYPES.map(kt => makeMenuItem(kt)),
        },
        {
            type: MaterialUI.Select,
            props: {
                label: "Culture",
                placeholder: "Culture",
                defaultValue: "",
            },
            children: CULTURES.map(culture => makeMenuItem(culture)),
        },
        {
            type: MaterialUI.TextField,
            props: {
                label: "Level",
                variant: "outlined",
            },
            children: [],
        },
        {
            type: MaterialUI.TextField,
            props: {
                label: "EXP",
                variant: "outlined",
            },
            children: [],
        },
        {
            type: MaterialUI.TextField,
            props: {
                label: "Dust",
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
        MaterialUI.Box,
        {
            label: "Personal Details",
        },
        elements
    );
}
