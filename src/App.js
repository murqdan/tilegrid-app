import React from 'react'
import './App.css'
import BlueButton from './BlueButton'

function App () {
  function info () {
    alert('Lorem ipsum sit dolor amet')
  }
  return (
    <div className='App'>
      <BlueButton onCustomClick={info} caption='Tampilkan Info' />
    </div>
  )
}

export default App
