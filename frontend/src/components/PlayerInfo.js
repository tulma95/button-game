import React from 'react'

const PlayerInfo = ({ player }) => {
  return (
    <div className='playerInfo'>
      {player.playername} Points: {player.points}
    </div>
  )
}

export default PlayerInfo