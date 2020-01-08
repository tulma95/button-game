import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import { Button, Form } from 'semantic-ui-react'


const App = () => {
  const [player, setPlayer] = useState()
  const [button, setButton] = useState()

  useEffect(() => {
    const getButton = async () => {
      const button = await axios.get('/api/button')
      setButton(button.data)
    }
    getButton()
  }, [])

  const PlayButton = ({ button, setButton }) => {

    const handleclick = (button) => {
      const newButton = { ...button, clicks: button.clicks + 1 }
      setButton(newButton)
    }

    if (!button) {
      return <div>loading...</div>
    }

    return (
      <div onClick={() => handleclick(button)} className='playButton'>
        <div className='buttonText'>{button.clicks}</div>
      </div>
    )
  }

  const PlayerLogin = ({ setPlayer }) => {
    const [inputValue, setInputvalue] = useState('')

    const handleChange = (event) => {
      setInputvalue(event.target.value)
    }

    const handlesubmit = (event) => {
      event.preventDefault()
      setPlayer(inputValue)
      setInputvalue('')
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

  return (
    <div className='container'>
      {player ?
        <PlayButton button={button} setButton={setButton} />
        :
        <PlayerLogin setPlayer={setPlayer} />
      }
    </div>
  )
}

export default App;
