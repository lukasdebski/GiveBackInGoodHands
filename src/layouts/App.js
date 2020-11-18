import React from 'react';
import '../scss/components/main.scss';
import Home from '../components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
      <Router>
    <div className="App">
      <Home/>
    </div>
      </Router>
  );
}

export default App;
