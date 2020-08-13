import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import Feeling from './pages/Feeling'
import About from './pages/About'
import Quote from './pages/Quote'
import Resources from './pages/Resources'

const App = () => {
  let [ quote, setQuote ] = useState()
  let [ author, setAuthor ] = useState()
  return (
    <div className="container px-0">
          <Router>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/feeling" component={() => <Feeling setQuote={setQuote} setAuthor={setAuthor} /> } />
            <Route exact path="/about" component={About} />
            <Route exact path="/quote" component={() => <Quote quote={quote} author={author} /> } />
            <Route exact path="/resources" component={Resources} />
          </Router>
    </div>
  );
}

export default App;
