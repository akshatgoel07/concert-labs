import React from 'react'

export default function BodyComponent() {
  return (
    <div className='body-component'>
      <h1 className='content'>Spotify Wrapped at your Disposal </h1>
      <p className='content2'>"Say Goodbye to Waiting: TheWeekday App Lets You Create Your Spotify Wrapped Instantly, Anytime, Anywhere!"</p>
      {/* <button className="custom-button">Generate</button> */}
      {/* <div className="custom-button"></div> */}
      <div className="outer-btn">
        <div className="inner-btn" >
          Generate
        </div>
      </div>
    </div>
  )
}
