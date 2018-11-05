import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import {Provider} from 'react-redux'
import store from './store';
import {BrowserRouter} from 'react-router-dom';
//import { Route } from '../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/react-router';
import Routes from './Components/Routes'
//import Footer from './Components/Footer'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Provider store={store}>
      <div className="App">
        <Routes/>
      </div>
      </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
