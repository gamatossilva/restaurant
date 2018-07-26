import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RestaurantList from './RestaurantList/RestaurantList';
import RestaurantPost from './RestaurantList/RestaurantPost';
import Root from './RestaurantList/Root';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import RestaurantMenu from './RestaurantList/RestaurantMenu';
import RestaurantMenuPost from './RestaurantList/RestaurantMenuPost';


class App extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path={"/"} component={Root}>
                    <IndexRoute component={RestaurantList} />
                    <Route path={"restaurants/post"} component={RestaurantPost} />
                    <Route path={"restaurants"} component={RestaurantList} />
                    <Route path={"restaurant/:id"} component={RestaurantMenu}/>
                    <Route path={"restaurant/:id/menu/post"} component={RestaurantMenuPost} />
                </Route>
            </Router>
        );
    }
}

export default App;
