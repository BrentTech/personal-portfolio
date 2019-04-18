import React from 'react';

class Portfolio extends React.Component {
  render(){
    return(
      <section>
        <div>
          <h3>DevFund</h3>
          <img src="https://via.placeholder.com/150" alt="placeholder"></img>
          <p>DevFund </p>
        </div>
        <div>
          <h3>@Note</h3>
          <img src="https://via.placeholder.com/150" alt="placeholder"></img>
          <p></p>
        </div>
        <div>
          <h3>Ocean Commotion</h3>
          <img src="https://via.placeholder.com/150" alt="placeholder"></img>
          <p></p>
        </div>
        <div>
          <h3>BoldMove</h3>
          <img src="https://via.placeholder.com/150" alt="placeholder"></img>
          <p></p>
        </div>
      </section>
    );
  }
}

export default Portfolio;