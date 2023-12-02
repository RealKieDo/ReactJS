/*
import React, { Component } from 'react';
import Todos from './components/Todos'
import './App.css';

class App extends Component {
  render() {
  return (
    < Todos/>
  );
}
}

export default App;
*/
import React from 'react' // سطر مهم

import Header from './Header'
import Social from './Social'
import Text from './Text'

function App() {
  return(
    <div className= "container">
      <Header />
      <Text />
      <Social />
      </div>
  );
}

export default App