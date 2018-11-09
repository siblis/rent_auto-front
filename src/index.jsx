import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css/normalize.css';
import './index.css';

import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

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
                <Header/>
                <Switch>
                    {routes.map((route, index) => <Route key={index} {...route}/>)}
                </Switch>
                </div>
                <Footer/>
            </Fragment>
        </Router>
    </Provider>, 
    document.getElementById('root')
);
