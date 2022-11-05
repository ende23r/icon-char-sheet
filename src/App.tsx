import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { CharacterSheet } from './components/CharacterSheet';
import { BondSheet } from './components/BondSheet';
import { JobSheet } from './components/JobSheet';

function App() {
  return (
    <div className="App">
      <h1>ICON Character Sheet</h1>
      <div><CharacterSheet character={{}} /></div>
      <div><BondSheet /></div>
      <div><JobSheet /></div>
    </div>
  )
}

export default App
