import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, hashHistory } from 'react-router';
import routes from './Routes';


ReactDOM.render(
  <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory} routes={routes} />,
  document.getElementById('root')
);
