import React, { useState } from 'react'
import PlayerInfo from './PlayerInfo'
import PlayButton from './PlayButton'

const GameView = ({ player, setPlayer }) => {
  const [message, setMessage] = useState("8")
  return (
    <div className='gameView'>
      <PlayerInfo player={player} />
      <PlayButton player={player}
        setPlayer={setPlayer}
        setMessage={setMessage}
      />
      {message &&
        <div className='message'>
          Clicks for next win {message}
        </div>
      }
    </div>
  )
}


export default GameView