import React from 'react';
import './App.css';
import Header from './Header'
import KegList from './KegList';
import AddKeg from './AddKeg';

import { KegProvider } from './KegContext';


function App() {

  return (
    <KegProvider>

      <div className="App">
        <Header />
        <AddKeg />
        <KegList />

      </div>
    </KegProvider>
  );
}

export default App;
