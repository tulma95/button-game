import React, { useState } from 'react'
import HelpScreen from './HelpScreen'
import GameScreen from './GameScreen'

const GameView = ({ player, setPlayer, button }) => {
  const [showHelp, setShowHelp] = useState(true)

  return (
    <div className='gameView'>
      <div className='gameViewHeader'>
        <div className='title'>Button Game</div>
        <div onClick={() => setShowHelp(!showHelp)} className='helpButton'>?</div>
        <div onClick={() => setPlayer(null)} className='exitButton'></div>
      </div>

      {showHelp ?
        <HelpScreen
          setShowHelp={setShowHelp} />

        : <GameScreen
          player={player}
          setPlayer={setPlayer}
          button={button} />
      }


    </div >
  )
}


export default GameView