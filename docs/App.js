'use strict';

// Note: have to import as .js file to satisfy Content-Type header
import { CharacterSheet, JobSheet, BondSheet } from './CharacterSheet.js';

const e = React.createElement;

//  interface TabPanelProps {
  //  children?: React.ReactNode;
  //  index: number;
  //  value: number;
//  }

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    const childBox = e(
        MaterialUI.Box,
        { p: 3 },
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
        [value === index && childBox]
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 0 };
    }

    render() {
        const jobTab = TabPanel({
            index: 0,
            value: this.state.value,
            children: [e(JobSheet, {}, [])],
        });
        
        const bondTab = TabPanel({
            index: 1,
            value: this.state.value,
            children: [e(BondSheet, {}, [])],
        });

        const characterSheet = e(
            CharacterSheet,
            { key: "character-sheet" },
            [],
        );

        const tabsBox = e(
            MaterialUI.Box,
            {},
            e(
                MaterialUI.Tabs,
                {
                    value: this.state.value,
                    onChange: (_e, newValue) =>
                    this.setState({ value: newValue }),
                },
                [
                    e(MaterialUI.Tab, {key: "job-sheet", label: "Job Sheet"}, []),
                    e(MaterialUI.Tab, {key: "bond-sheet", label: "Bond Sheet"}, []),
                ]
            ));

        return e(
            MaterialUI.Box,
            {},
            [characterSheet, tabsBox, jobTab, bondTab]
        );
    }
}

const domContainer = document.querySelector('#react-root');
const root = ReactDOM.createRoot(domContainer);
root.render(e(App));
