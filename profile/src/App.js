import React, { Component } from 'react';
import './CSS/App.css';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
