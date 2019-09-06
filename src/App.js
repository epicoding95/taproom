import React from 'react';
import './App.css';
import Nav from './Nav'
import KegList from './KegList';
import AddKeg from './AddKeg';

import { KegProvider } from './KegContext';


function App() {
  return (
    <KegProvider>

      <div className="App">
        <Nav />
        <AddKeg />
        <KegList />

      </div>
    </KegProvider>
  );
}

export default App;
