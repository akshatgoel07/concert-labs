import React from 'react'
import NavBar from '../components/NavBar'
import Button from '../components/Button/Button'
export default function Select() {
    const buttonNames = ['Generate', 'Submit', 'Click'];
  return (
    <div>
        
        <NavBar />
        <Button name="Generate" />
        <Button name="Submit" />
    </div>
  )
}
