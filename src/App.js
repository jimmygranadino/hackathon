import React from 'react';
import './App.css';
import Home from './pages/Home'
import Navbar from './pages/Navbar'

const App = () => {
  return (
    <div className="container px-0">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
