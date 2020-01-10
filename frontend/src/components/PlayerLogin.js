import React, { useState } from 'react'
import playerService from '../services/player'
import { Button, Form } from 'semantic-ui-react'

const PlayerLogin = ({ setPlayer }) => {
  const [inputValue, setInputvalue] = useState('')
  const [errorMessage, setError] = useState('')

  const handleChange = (event) => {
    setInputvalue(event.target.value)
  }

  const handlesubmit = async (event) => {
    event.preventDefault()
    const playername = inputValue

    if (playername.length < 3) {
      setError('Playername must be atleast 3 characters long')
      return
    }

    const player = await playerService.login(playername)
    setInputvalue('')
    setPlayer(player)
    window.localStorage.setItem('player', player.playername)
  }

  return (
    <Form onSubmit={handlesubmit}>
      <Form.Field >
        <label>Player name</label>
        <input style={{ 'width': 200 }} onChange={handleChange} value={inputValue} placeholder='player name...' />
        <div>{errorMessage}</div>
      </Form.Field>
      <Button type='submit'>Start game</Button>
    </Form>
  )
}

export default PlayerLogin