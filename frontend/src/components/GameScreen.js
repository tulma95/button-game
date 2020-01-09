import React, { useState } from 'react'
import PlayerInfo from './PlayerInfo'
import PlayButton from './PlayButton'
import LoseScreen from './LoseScreen'

const GameScreen = ({ player, setPlayer, button }) => {
  const [message, setMessage] = useState('Press button to play')

  return (
    <div>
      <PlayerInfo player={player} />
      {player.points <= 0 ?
        <LoseScreen player={player}
          setPlayer={setPlayer}
          setMessage={setMessage}
        />
        :
        <PlayButton player={player}
          setPlayer={setPlayer}
          setMessage={setMessage}
          button={button}
        />
      }
      {message &&
        <div className='message'>
          {message}
        </div>
      }
    </div>
  )
}

export default GameScreen