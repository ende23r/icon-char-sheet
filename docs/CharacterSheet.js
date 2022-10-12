
//TODO: flesh these out with components: https://mui.com/material-ui/react-app-bar/

export function JobSheet(props) {
    return ("<p>Here we can talk about the job you chose.</p>");
}

export function BondSheet(props) {
    return ("<p>Here we can talk about the bond you chose.</p>");
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
