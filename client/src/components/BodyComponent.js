import React, { useState } from 'react'
import myImage from '../assets/Images/cards.png'
import Button from './Button/Button';
export default function BodyComponent() {
  return (
    <div className="body">
      <div className="side-by-side">
        <div className="div1">
          <h1 className='content'>
            Spotify  <div className="wrapped">Wrapped</div> at your Disposal </h1>
          <p className='content2'>"Say Goodbye to Waiting: TheWeekday App Lets You Create Your Spotify Wrapped Instantly, Anytime, Anywhere!"</p>
          <div className="btn-pos">
            {/* <div className="outer-btn">
              <div className="inner-btn" onClick={handleGenerateClick}>
                Generate
              </div>
            </div> */}
            <Button name={"Generate"} destination="/Select"/>
          </div>
          
        </div>
        <div className="div2">
          <img src={myImage} alt="wrap-card" />
        </div>
      </div>
    </div>
  )
}
