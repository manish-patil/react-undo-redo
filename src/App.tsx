import React from 'react';
import './App.css';
import { Toolbar } from './components/Toolbar';
import { UndoRedoProvider } from './UndoRedoProvider';
import { OrganiserContainer } from './components/Organiser';

function App() {
  return (
    <UndoRedoProvider>
      <div className='container'>
        <Toolbar />
        <OrganiserContainer />
      </div>
    </UndoRedoProvider>
  );
}

export default App;
