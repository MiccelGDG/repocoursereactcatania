import React from 'react';
import './App.css';
//import {Hello} from './components/Hello';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <Message />
      {/* <Hello name="Michele" work="Programmatore">
        <p>Questo è un props figlio</p> 
      </Hello>
      <Hello name="Alessio" work="Vivaista">
        <button>Ciao</button>
      </Hello>
      <Hello name="Maria" work = "Paciere"/> */}
    </div>
  );
}

export default App;
