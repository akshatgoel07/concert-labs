import React from 'react'
import NavBar from '../components/NavBar'
import TopArt from '../components/TopArt'
import TopSongs from '../components/TopSongs'
import Button from '../components/Button/Button'
import myImage from '../assets/Images/cards.png'
export default function Receipt() {
  return (
    <div>
        <NavBar />
        <div className="body">
      <div className="side-by-side">
        <div className="div1">
        <img src={myImage} alt="wrap-card" />
          
        </div>
        <div className="div2">
          
          <h1 className='content'>
          Reconnect with your  <div className="wrapped">Soundtracks</div></h1>
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
      </div>
    </div>
        <TopArt />
        <TopSongs />
    </div>
  )
}
