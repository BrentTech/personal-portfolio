import React, { Component } from 'react';
import Header from '../header/header.js';
import Footer from '../footer/footer.js';
import About from '../about/about.js';
import Portfolio from '../portfolio/portfolio.js';
import Contact from '../contact/contact.js';


class App extends Component {

  render() {
    return (
      <>
        <Header />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </>
    );
  }
}

export default App;
