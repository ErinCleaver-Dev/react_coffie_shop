import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from "react-router-dom"
import {Switch, Route} from "react-router-dom"

import './index.css';
import Header from './Components/Header/Header'
import Home from './Components/Body/Home/Home'
import Footer from './Components/Footer/Footer'
import Menu from './Components/Body/Menu/Menu'
import GiftCards from './Components/Body/Gift Cards/GiftCards'
import Locations from './Components/Body/Locations/Locations'
import About from './Components/Body/About/About'
import JobListings from './Components/Body/Job Listings/JobListings'
import Feedback from './Components/Body/Feedback/Feedback'

let hashHistory = Router.hashHistory;

ReactDOM.render(
  <Router>
    <Header/>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/menu" component={Menu}/>
      <Route path="/gift_cards" component={GiftCards}/>
      <Route path="/locations" component={Locations}/>
      <Route path="/About" component={About}/>
      <Route path="/job_listings" component={JobListings}/>
      <Route path="/feedback" component={Feedback}/>

    </Switch>
    <Footer/>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
