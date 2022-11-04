import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { CharacterSheet } from './components/CharacterSheet';

function App() {
  return (
    <div className="App">
      <h1>ICON Character Sheet</h1>
      <CharacterSheet character={{}} />
    </div>
  )
}

export default App
