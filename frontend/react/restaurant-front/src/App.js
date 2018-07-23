import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RestaurantList from './RestaurantList/RestaurantList';
import RestaurantPost from './RestaurantList/RestaurantPost';

class App extends Component {
  render() {
    return (
      <p>
        <RestaurantList />
        <RestaurantPost />
      </p>

    );
  }
}

export default App;
