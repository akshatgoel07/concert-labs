
import React from 'react';
import Arrow from "../../assets/arrow.svg";

const GenerateButton = ({ onClick }) => (
  <button type="button" className="generate-btn" onClick={onClick}>
    <img src={Arrow} alt="" />
    <p>Generate</p>
  </button>
);

export const createButton = (type, onClick) => {
    // agar button ka type hai generate toh yeh component return kro 
  switch (type) {
    case 'generate':
      return <GenerateButton onClick={onClick} />;
    default:
      return null;
  }
};
