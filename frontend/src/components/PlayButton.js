import React from 'react'
import buttonService from '../services/button'

const PlayButton = ({ player, setPlayer, setMessage }) => {
  const handleclick = async () => {
    const res = await buttonService.clickButton(player)
    const currentPoints = res.currentPoints
    const newPlayer = { ...player, points: currentPoints }
    setPlayer(newPlayer)
    setMessage(res.clicksForNextPoints)
  }

  return (
    <div onClick={handleclick} className='playButton'>
      <div className='buttonText'>Click Me!</div>
    </div>
  )
}

export default PlayButton