import React from 'react';
import './Button.css'; 
const Button = ({ name }) => {
  return (
    <div>
        <div className="outer-btn">
          <div className="inner-btn">
            {name}
          </div>
        </div>
      </div>
  );
};

export default Button;
