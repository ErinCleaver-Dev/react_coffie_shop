import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from "react-router-dom"
import {Switch, Route} from "react-router-dom"

import './index.css';
import Header from './Components/Header/Header'
import Home from './Components/Body/Home/Home'

import Footer from './Components/Footer/Footer'



let hashHistory = Router.hashHistory;

ReactDOM.render(
  <Router>
    <Header/>
    <Switch>
      <Route path="/" component={Home}/>
    </Switch>
    <Footer/>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
