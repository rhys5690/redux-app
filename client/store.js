import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// Import root reducer

import rootReducer from './reducers/index'

import comments from './data/comments';
import posts from './data/posts';

//Create an object for the default data

const defaultData = {
  posts,
  comments
}

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory);

export default store;
