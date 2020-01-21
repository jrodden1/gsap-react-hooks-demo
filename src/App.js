import React from 'react';
import Loader from './components/Loader'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* The Loader Component is loaded below */}
        <Loader />
        
      </header>
    </div>
  );
}

export default App;
