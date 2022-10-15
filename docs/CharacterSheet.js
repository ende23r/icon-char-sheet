
//TODO: flesh these out with components: https://mui.com/material-ui/react-app-bar/

export function JobSheet(props) {
    const fields = [
        {
            type: MaterialUI.Select,
            props: {
                label: "Current Job",
            },
            children: [],
        },
        {
            type: MaterialUI.TextField,
            props: {
                label: "Current HP",
                variant: "outlined",
            },
            children: [40],
        },
        {
            type: MaterialUI.TextField,
            props: {
                label: "Personal Resolve",
                variant: "outlined",
            },
            children: [],
        },
        {
            type: MaterialUI.TextField,
            props: {
                label: "Relic",
                variant: "outlined",
            },
            children: [],
        },
        {
            type: MaterialUI.TextField,
            props: {
                label: "Limit Break",
                variant: "outlined",
            },
            children: [],
        },
        {
            type: MaterialUI.TextField,
            props: {
                label: "Abilities",
                variant: "outlined",
            },
            children: [],
        },
        {
            type: MaterialUI.TextField,
            props: {
                label: "Trophies",
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

export function BondSheet(props) {
    const fields = [
        {
            type: MaterialUI.Select,
            props: {
                label: "Bond",
            },
            children: [],
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

function makeMenuItem(name) {
    return React.createElement(
        MaterialUI.MenuItem,
        {
            value: name,
            key: `menuitem-${name}`,
        },
        name,
    );
}

export function CharacterSheet(props) {
    const character = createDefaultCharacter();

    const fields = [
        {
            type: MaterialUI.TextField,
            props: {
                label: "Name",
                field: "name",
                variant: "outlined",
                defaultValue: "Name",
            },
            children: [],
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
            type: MaterialUI.InputLabel,
            props: { id: "kintype-select-helper-label" },
            children: "Kintype",
        },
        {
            type: MaterialUI.Select,
            props: {
                label: "Kintype",
                labelid: "kintype-select-helper-label",
                width: 120,  // 120 pixels, a bit larger than the largest selectable item
            },
            children: KINTYPES.map(kt => makeMenuItem(kt)),
        },
        {
            type: MaterialUI.InputLabel,
            props: {
                id: "culture-select-helper-label",
            },
            children: "Culture",
        },
        {
            type: MaterialUI.Select,
            props: {
                label: "Culture",
                labelid: "culture-select-helper-label",
                width: 120,  // 120 pixels, a bit larger than the largest selectable item
            },
            children: CULTURES.map(culture => makeMenuItem(culture)),
        },
        {
            type: MaterialUI.TextField,
            props: {
                label: "Level",
                variant: "outlined",
                pattern: "[0-9]*",
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
        {
            type: MaterialUI.TextField,
            props: {
                label: "Description",
                variant: "outlined",
                multiline: true,
            },
            children: [],
        },
    ];

    const topRowElements = fields.slice(0,6).map((field) => {
        const defaultVal = field.props.defaultValue === 0 ? 0 : (field.props.defaultValue || "");
        const [fieldVal, updateField] = React.useState(defaultVal);
        return React.createElement(
            field.type,
            {
                onChange: field.type !== MaterialUI.Grid ? ((event) => updateField(event.target.value)) : undefined,
                value: fieldVal,
                ...field.props,
            },
            field.children
        );
    });

    const bottomRowElements = fields.slice(6).map((field) => {
        const defaultVal = field.props.defaultValue === 0 ? 0 : (field.props.defaultValue || "");
        const [fieldVal, updateField] = React.useState(defaultVal);
        return React.createElement(
            field.type,
            {
                onChange: field.type !== MaterialUI.Grid ? ((event) => updateField(event.target.value)) : undefined,
                value: fieldVal,
                ...field.props,
            },
            field.children
        );
    });

    return React.createElement(
        MaterialUI.Grid,
        {
            label: "Personal Details",
            container: true,
        },
        [
            React.createElement(
                MaterialUI.Grid,
                {
                    container: true,
                    item: true,
                    xs: 12,
                },
                topRowElements,
            ),
            React.createElement(
                MaterialUI.Grid,
                {
                    container: true,
                    item: true,
                    xs: 12,
                },
                bottomRowElements,
            ),
        ],);
}
