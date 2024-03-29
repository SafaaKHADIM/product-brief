import React, { Component }  from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';

import BriefForm from './components/Briefform';
import BriefList from './components/Brieflist';
import Header from "./components/header/header";
import Robot from "./components/robot/robot";

import store from './store';

function App() {

  return (
  <Provider store={store} >
    <Router>
      <div className="App">
        <Header />
        <Robot />
        <br/>
        <Route path="/newbrief" exact component={BriefForm} />
        <Route path="/list" exact component={BriefList} />
      </div>
    </Router>
  </Provider>
  );
}

export default App;
