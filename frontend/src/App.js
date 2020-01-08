import React, { useState } from 'react';
import './App.css';
import PlayerLogin from './components/PlayerLogin'
import GameView from './components/GameView';

const App = () => {
  const [player, setPlayer] = useState({
    playername: "Pentti",
    points: 20,
    id: "5e164ab941274c21ccd13557"
  })


  return (
    <div className='container'>
      {player ?
        <GameView setPlayer={setPlayer} player={player} />
        :
        <PlayerLogin setPlayer={setPlayer} />
      }
    </div>
  )
}

export default App;
