import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

// import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import StocksList from "./components/stockList.component";
import Portfolio from "./components/portfolio.component";

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Route path="/" exact component={StocksList} />
      <Route path="/portfolio" component={Portfolio} />
    </Router>
  );
}

export default App;
