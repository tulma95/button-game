import React, { useState, useEffect } from 'react';
import './App.css';
import PlayerLogin from './components/PlayerLogin'
import GameView from './components/GameView';
import buttonService from './services/button'

const App = () => {
  const [player, setPlayer] = useState({
    playername: "pentti",
    points: 0,
    id: "5e165053d73c1f28808aa993"
  })
  const [button, setButton] = useState()

  useEffect(() => {
    const getButton = async () => {
      const button = await buttonService.getPlayButton()
      setButton(button)
    }
    getButton()
  }, [])


  return (
    <div className='container'>
      {player ?
        <GameView setPlayer={setPlayer} player={player} button={button} />
        :
        <PlayerLogin setPlayer={setPlayer} />
      }
    </div>
  )
}

export default App;
