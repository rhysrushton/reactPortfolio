import React from 'react';
import './App.css';
import about from "./pages/about.js";
import contact from "./pages/contact.js";

import portfolio from "./pages/portfolio.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { NavigationBar } from './components/Navbar';

function App() {
  return (
    <Router>
         <NavigationBar />
   <Switch>
   <Route path="/" component={about} exact />
   <Route path="/contact" component={contact} exact />
   <Route path="/portfolio" component={portfolio} exact />
   </Switch>
   </Router>
  );
}

export default App;
