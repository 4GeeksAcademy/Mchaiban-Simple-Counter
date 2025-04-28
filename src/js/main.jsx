import React from 'react';
import ReactDOM from 'react-dom/client';
import PropTypes from 'prop-types';
import { FontAwesomeIcon }              from '@fortawesome/react-fontawesome';
import './icons.js';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

// Your global styles
import '../styles/index.css';

function SimpleCounter({ digitFour, digitThree, digitTwo, digitOne }) {
  return (
    <div className="bigCounter">
      <div className="calendar">
      <FontAwesomeIcon icon="fa-solid fa-clock" />
      </div>
      <div className="four">{digitFour}</div>
      <div className="three">{digitThree}</div>
      <div className="two">{digitTwo}</div>
      <div className="one">{digitOne}</div>
    </div>
  );
}

SimpleCounter.propTypes = {
  digitFour:  PropTypes.number.isRequired,
  digitThree: PropTypes.number.isRequired,
  digitTwo:   PropTypes.number.isRequired,
  digitOne:   PropTypes.number.isRequired,
};

const root = ReactDOM.createRoot(document.getElementById('root'));

let counter = 0;
function tick() {
  counter++;
  const four  = Math.floor(counter / 1000) % 10;
  const three = Math.floor(counter /  100) % 10;
  const two   = Math.floor(counter /   10) % 10;
  const one   = Math.floor(counter /    1) % 10;

  root.render(
    <React.StrictMode>
      <SimpleCounter
        digitFour  ={four}
        digitThree ={three}
        digitTwo   ={two}
        digitOne   ={one}
      />
    </React.StrictMode>
  );
}

tick();
setInterval(tick, 1000);