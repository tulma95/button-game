import React, { useState } from 'react'
import playerService from '../services/player'
import { Button, Form } from 'semantic-ui-react'

const PlayerLogin = ({ setPlayer }) => {
  const [inputValue, setInputvalue] = useState('')

  const handleChange = (event) => {
    setInputvalue(event.target.value)
  }

  const handlesubmit = async (event) => {
    event.preventDefault()
    const playername = inputValue
    const player = await playerService.login(playername)
    setInputvalue('')
    setPlayer(player)
    window.localStorage.setItem('player', player.playername)
  }

  return (
    <Form onSubmit={handlesubmit}>
      <Form.Field >
        <label>Player name</label>
        <input onChange={handleChange} value={inputValue} placeholder='player name...' />
      </Form.Field>
      <Button type='submit'>Start game</Button>
    </Form>
  )
}

export default PlayerLogin