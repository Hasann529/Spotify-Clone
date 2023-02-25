import React from 'react'
import Body from './Player/Body'
import Footer from './Player/Footer'
import Sidebar from './Player/Sidebar'

const Player = ({spotify}) => {
  return (
    <div className='player'>
      <div className="player__body">
        <Sidebar spotify={spotify} />
        <Body spotify={spotify} />
      </div>
      <Footer />
    </div>
  )
}

export default Player
