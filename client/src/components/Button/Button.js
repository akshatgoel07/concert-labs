import React from 'react';
import './Button.css'; 
import { useNavigate } from 'react-router-dom';
const Button = ({ name, destination }) => {
  const navigate = useNavigate() 

  const handleNavigate = () =>{
    navigate(`${destination}`)
  }
  return (
    <div>
        <div className="outer-btn" onClick={handleNavigate}>
          <div className="inner-btn">
            {name}
          </div>
        </div>
      </div>
  );
};
export default Button;
