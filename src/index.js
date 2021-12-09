import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {createStore} from 'redux'
import ReactDOM from 'react-dom';
import App from './App';
import allReducers from './utils/redux/reducers'
import {Provider} from 'react-redux'

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

