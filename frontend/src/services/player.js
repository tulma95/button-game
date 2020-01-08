import axios from 'axios'

const baseUrl = 'api/players'

const login = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}


export default { getAll }