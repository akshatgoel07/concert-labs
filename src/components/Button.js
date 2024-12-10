import React from 'react'
import Arrow from '../assets/arrow.png'
export default function Button() {
  return (
    <div className='button container'>
        <div className="arrow">
            <img src={Arrow} alt="" />
        </div>
        <div className="btn">
            <p>Generate</p>
        </div>
    </div>
  )
}
