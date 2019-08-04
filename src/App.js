import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Matches from './components/Matches';
import Players from './components/Players';

function App() {
  return (
    <Router>
      <Header />

      <div className="container">
        <Route path="/matches/" component={Matches} />
        <Route path="/players/" component={Players} />
      </div>
    </Router>
  );
}

export default App;
