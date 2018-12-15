import 'normalize.css/normalize.css';
import './assets/styles/bootstrap.min.css';
import './assets/styles/loading.css';
import 'react-infinite-calendar/styles.css';
import './index.styl';

import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Switch, Route} from 'react-router-dom';
import {createBrowserHistory} from 'history';

import store from './store';
import routes from './routes';
import Header from 'components/Header';
import Footer from 'components/Footer';

export const history = createBrowserHistory();

ReactDOM.render(
<Provider store={store}>
  <Router history={history}>
    <Fragment>
      <div className="content">
        <Header />
        <Switch>
          {routes.map((route, index) =>
          <Route key={index} {...route} />)}
        </Switch>
      </div>
      <Footer />
    </Fragment>
  </Router>
</Provider>, document.getElementById('root'));
