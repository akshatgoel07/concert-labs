import React from 'react'
import NavBar from '../../components/NavBar'
import Button from '../../components/Button/Button'
export default function Select() {
  return (
    <div>
      <NavBar />
      <div className="containerSelect">
        <div className="center">
          <div className="heading">
            <h1 className='TheWeekday' style={{ color: 'white',  fontSize: '3rem' }}>The
              <div className="logo">
                Weekday.
              </div>
            </h1>
            <p className='contentSelect'>Select to Generate Your Receipt </p>
          </div>
          <div className="btn-select-page">
            <Button name="Top Artists"  destination="/Receipt"/>
            <Button name="Top Songs" destination="/Receipt"/>
          </div>
        </div>
      </div>
    </div>
  )
}