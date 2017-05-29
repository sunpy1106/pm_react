import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {
  Router,
  Route,
  hashHistory,
  IndexRoute
} from 'react-router';
import Job from './body/pm_job';
import Team from './body/pm_team';
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/job" component={Job} />
      <Route path="/team" component={Team} />
    </Route>
  </Router>,
  document.getElementById('root')
);
