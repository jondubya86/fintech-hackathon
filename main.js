import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory,IndexRoute} from 'react-router';
import App from './App.jsx';
import Home from './components/Home.jsx'

ReactDOM.render(
  <Router history={hashHistory}>
   <Route path="/" component={App} >
     <IndexRoute component={Home} />
  </Route>
</Router>
, document.getElementById('app'));
