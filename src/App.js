import React from 'react';
import Loader from './components/Loader'
import './App.css';
import LogRocket from './components/LogRocketLogo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* The LogRocket Logo Component is loaded below */}
        <LogRocket />
        {/* The Loader Component is loaded below */}
        <Loader /><br /> <br />
        
      </header>
    </div>
  );
}

export default App;
