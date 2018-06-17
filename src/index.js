// NPM Imports
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React, { Fragment } from 'react';
import createSagaMiddleware from 'redux-saga';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Local Imports
import './index.css';
import rootSaga from './sagas';
import App from './containers/App';
import Auth from './containers/Auth';
import Menu from './components/Menu';
import foodReducer from './reducers';
import Foods from './containers/Foods';
import requireAuth from './components/requireAuth';
import registerServiceWorker from './registerServiceWorker';

if (module.hot) {
  module.hot.accept();
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(foodReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Fragment>
        <Menu />
        <Route exact path="/" component={requireAuth(App)} />
        <Route path="/foods" component={requireAuth(Foods)} />
        <Route path="/auth" component={Auth} />
      </Fragment>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
