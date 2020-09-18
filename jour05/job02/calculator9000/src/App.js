import React from 'react';
import './App.css';
import TheTitle from './components/TheTitle';
import Calculator from './components/Calculator';



import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <TheTitle/>
          
          <Calculator/>

        </p>
        
      </header>
    </div>
  );
}

export default App;
