import React, { Component } from 'react';
import './App.css';
import Customer from "./components/customer";
import HomePage from "./pages/homePage";

class App extends Component {
  render() {
    return (
      <div>
        {/*<Customer/>*/}
        <HomePage/>
      </div>
    )
  }
}

export default App;
