import React, { Component }  from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';

import BriefForm from './components/Briefform';
import BriefList from './components/Brieflist';

import store from './store';

function App() {
  return (
    <Provider store={store}>
        <div className="App">

            <h1>Welcome to React</h1>
            <BriefForm/>
            <BriefList/>
        </div>
      </Provider>
  );
}

export default App;
