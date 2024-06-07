import axios from 'axios'

const request = axios.create({
  timeout: 1000,
  headers: { 'X-Custom-Header': 'TELE-AI' }
})

export default request
