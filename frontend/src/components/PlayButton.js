import React from 'react'
import buttonService from '../services/button'

const PlayButton = ({ player, setPlayer, setMessage, button }) => {

  const handleclick = async (event) => {
    if (!event.detail || event.detail === 1) {
      const res = await buttonService.clickButton(player, button)
      const currentPoints = res.currentPoints
      const newPlayer = { ...player, points: currentPoints }
      setPlayer(newPlayer)
      setMessage(`Clicks to win ${res.clicksForNextPoints}`)
    }
  }

  return (
    <div onClick={handleclick} className='playButton'>
      <div className='buttonText'>Click Me!</div>
    </div>
  )
}

export default PlayButton