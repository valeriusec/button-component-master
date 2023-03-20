import React from 'react'

import SideBar from './components/SideBar'
import Buttons from './pages/Buttons'
import './App.css';

const App = () => {
  return (
    <>
      <div className='main'>
        <SideBar />
        <Buttons />
      </div>
    </>
  )
}

export default App