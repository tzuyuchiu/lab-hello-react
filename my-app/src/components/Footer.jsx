import React from 'react';
import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import icon4 from '../images/icon4.png';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="cardOne">
        <img
          src={icon1}
          className="footer-icon1"
          alt="footer-icon1"
          width="100px"
        />
        <h4>Declarative</h4>
        <p>React makes it painless to create interative UIs </p>
      </div>
      <div className="cardTwo">
        <img
          src={icon2}
          className="footer-icon2"
          alt="footer-icon2"
          width="100px"
        />
        <h4>Components</h4>
        <p>Build encapsulated components that manage their state </p>
      </div>
      <div className="cardThree">
        <img
          src={icon3}
          className="footer-icon3"
          alt="footer-icon3"
          width="100px"
        />
        <h4>Single-Way</h4>
        <p>A set of immutable values are passed to the component's </p>
      </div>
      <div className="cardFour">
        <img
          src={icon4}
          className="footer-icon4"
          alt="footer-icon4"
          width="100px"
        />
        <h4>JSX</h4>
        <p>Statically-typed design to run on morden browers</p>
      </div>
    </div>
  );
};

export default Footer;
