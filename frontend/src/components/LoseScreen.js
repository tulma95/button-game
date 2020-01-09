import React from 'react'
import playerService from '../services/player'


const LoseScreen = ({ player, setPlayer, setMessage }) => {
  setMessage('You lost. Press reset to gain 20 points')

  const handleReset = async (player) => {
    const updatedPlayerData = await playerService.resetPlayerPoints(player)
    setPlayer(updatedPlayerData)
    setMessage('Press button to play')
  }

  const handleClickback = () => {
    setPlayer(null)
  }
  return (
    <div>
      <button className='resetButton' onClick={() => handleReset(player)}>reset</button>
      <button className='backButton' onClick={handleClickback}>Back to login</button>
    </div>
  )
}

export default LoseScreen