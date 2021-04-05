import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="container">
        <h3>Github Search</h3>
        <SearchBar />
      </div>
    );
  }
}

export default App;
