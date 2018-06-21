import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import HomePage from "./Pages/HomePage";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <HomePage/>
        <Footer/>
      </div>
    );
  }
}

export default App;
