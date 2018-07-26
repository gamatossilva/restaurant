import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ApiRequest from './ApiRequest';
import Details from './Details';

import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { Root } from './Root';


class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Router history={browserHistory}>
                <Route path={"/"} component={Root}>
                    <IndexRoute component={ApiRequest} />
                    <Route path={"detalhes"} component={Details} />
                    <Route path={"home"} component={ApiRequest} />
                </Route>
            </Router>
        );
    }
}

export default App;
