import React from 'react';
import { render } from 'react-dom';
import css from './styles/style.styl';
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

//import react router

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = (
  <Router history={browseHistory}>
    <Rout path='/' component={Main}>
      <IndexRoute component={PhotoGrid}></IndexRoute>
      <Route path='/view/:postId' component={Single}></Route>
    </Rout>
  </Router>
)


render(router, document.getElementById('root'))
