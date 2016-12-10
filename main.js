import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import App from './App.jsx';
import Home from './components/Home.jsx'
import Page1 from './components/page1.jsx'

ReactDOM.render(
  <Router history={hashHistory}>
   <Route path="/" component={App} >
     <IndexRoute component={Home} />
     <Route path="/page1" component={Page1}/>
  </Route>
</Router>
, document.getElementById('app'));
