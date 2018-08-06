import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './app'
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './states/reducers';


const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  (<Provider store={createStoreWithMiddleware(reducers)}>
  <App />
</Provider>),
  document.getElementById('app')
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default;
    ReactDOM.render(
      <AppContainer>
          <NextApp/>
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
