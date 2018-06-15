// NPM Imports
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Local Imports
import App from './App';
import Menu from './components/Menu';
import Foods from './components/Foods';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <Fragment>
      <Menu />
      <Route exact path="/" component={App} />
      <Route path="/foods" component={Foods} />
    </Fragment>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
