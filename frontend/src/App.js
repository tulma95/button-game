import React, { useState, useEffect } from 'react';
import './App.css';
import PlayerLogin from './components/PlayerLogin'
import GameView from './components/GameView';
import buttonService from './services/button'
import playerService from './services/player'
import { Loader } from 'semantic-ui-react'


const App = () => {
  const [player, setPlayer] = useState('loading')
  const [button, setButton] = useState()

  useEffect(() => {
    const getButton = async () => {
      const button = await buttonService.getPlayButton()
      setButton(button)
    }
    const getPlayerIfCached = async () => {
      const playername = window.localStorage.getItem('player')
      if (!playername) {
        setPlayer(null)
        return
      }
      const player = await playerService.login(playername)
      setPlayer(player)
    }
    getPlayerIfCached()
    getButton()
  }, [])

  if (player === 'loading') {
    return <div className='container'>
      <Loader active inline='centered' />
    </div>
  }

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
