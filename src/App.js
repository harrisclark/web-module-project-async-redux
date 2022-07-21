import React from 'react';
import './App.css';
import PokeList from './components/PokeList'

function App() {
  return (
    <div className="App">
      <h1>List of Pokemon</h1>
      <PokeList />
    </div>
  );
}

export default App;