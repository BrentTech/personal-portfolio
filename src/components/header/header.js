import React from 'react';

class Header extends React.Component {
  
  render() {
    return(
    <nav>
      <ul>
        <li>Brent Woodward</li>
      </ul>
      <ul>
        <li>About</li>
        <li>Portfolio</li>
        <li>Resume</li>
        <li>Contact</li>
      </ul>
    </nav>
    );
  }
}

export default Header;