import axios from 'axios'

const baseUrl = '/api/players'

const login = async (playername) => {
  const res = await axios.post(baseUrl, { playername })
  return res.data
}


export default { login }