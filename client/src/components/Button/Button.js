import React from 'react';
import './Button.css'; 
const Button = ({ name, destination }) => {
  function handleGenerateClick() {
    // Redirect to the "Select" page
    window.location.href = destination;
  }
  return (
    <div>
        <div className="outer-btn" onClick={handleGenerateClick}>
          <div className="inner-btn">
            {name}
          </div>
        </div>
      </div>
  );
};
export default Button;
