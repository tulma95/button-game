const axios = require('axios')

const baseUrl = '/api/button'

const getPlayButton = async () => {
  const button = await axios.get('/api/button')
  return button.data
}

const clickButton = async (user, button) => {
  const response = await axios.put(`${baseUrl}/${button.id}`, user)
  return response.data
}

export default { getPlayButton, clickButton }