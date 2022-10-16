'use strict';

// Note: have to import as .js file to satisfy Content-Type header
import { CharacterSheet,  } from './CharacterSheet.js';
import { JobSheet } from './JobSheet.js';
import { BondSheet  } from './BondSheet.js';

const e = React.createElement;

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    const childGrid = e(
        MaterialUI.Grid,
        {
            p: 3,
            container: true,
            item: true,
            xs: 12,
        },
        [children],
    );

    return e(
        "div",
        {
            role: "tabpanel",
            hidden: value !== index,
            id: `simple-tabpanel-${index}`,
            'aria-labelledby': `simple-tab-${index}`,
        },
        [value === index && childGrid]
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

function App(props) {
    const [selectedTab, setTab] = React.useState(0);
    const [character, setCharacter] = React.useState({});

    const updateCharacter = (newData) => {
        const newCharacter = Object.assign(character, newData);
        setCharacter(newCharacter);
    }

    const jobTab = TabPanel({
        index: 0,
        value: selectedTab,
        children: [e(JobSheet, {})],
    });

    const bondTab = TabPanel({
        index: 1,
        value: selectedTab,
        children: [e(BondSheet, {})],
    });

    const characterSheet = e(
        CharacterSheet,
        {
            key: "character-sheet",
            character,
            updateCharacter,
        },
    );

    const tabsGrid = e(
        MaterialUI.Grid,
        {
            item: true,
            xs: 12,
        },
        e(
            MaterialUI.Tabs,
            {
                value: selectedTab,
                onChange: (_e, newValue) =>
                setTab(newValue),
            },
            [
                e(MaterialUI.Tab, {key: "job-sheet", label: "Job Sheet"}),
                e(MaterialUI.Tab, {key: "bond-sheet", label: "Bond Sheet"}),
            ]
        ));

    return e(
        MaterialUI.Grid,
        { container: true },
        [characterSheet, tabsGrid, jobTab, bondTab]
    );
}

const domContainer = document.querySelector('#react-root');
const root = ReactDOM.createRoot(domContainer);
root.render(e(App));
