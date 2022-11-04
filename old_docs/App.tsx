import './App.css'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

//TODO: isolate into appropriate files

function CharacterSheet(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  
  return (
    <Box sx={{ width: "100%" }}>
      <Box>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        ICON Character Sheet
      </Typography>
    </Box>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="Bond Sheet" />
        <Tab label="Job Sheet" />
      </Tabs>
    </Box>
    <TabPanel value={value} index={0}>
      <BondSheet/>
    </TabPanel>
    <TabPanel value={value} index={1}>
      <JobSheet/>
    </TabPanel>
    </Box>
  );
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function App() {
  return (
    <main>
      <CharacterSheet/>
    </main>
  );
}
