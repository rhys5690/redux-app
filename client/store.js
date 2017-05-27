import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// Import root reducer

import rootReducer from './reducers/index'

import comments from './data/comments';
import posts from './data/posts';

//Create an object for the default data

const defaultState = {
  posts,
  comments
};

//Check for redux dev tools chrome extension and add to store
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

//Hot reload reducer
if(module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
