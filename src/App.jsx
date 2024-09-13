import React from 'react';
import NavBar from './components/navbar';
import Service from './components/Service';
import Home from './components/Home';

const App = () => {
  return (
    <div>
      <button type="button" className="btn btn-primary">Primary</button>
      <NavBar />
      <Home />
      <Service />

    </div>
  )
}

export default App
