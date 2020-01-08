const axios = require('axios')

const baseUrl = '/api/button'

const getPlayButton = async () => {
  const button = await axios.get('/api/button')
  return button.data
}

const clickButton = async (user) => {
  const response = await axios.put(`${baseUrl}`, user)
  return response.data
}

export default { getPlayButton, clickButton }