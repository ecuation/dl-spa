import Vue from 'vue'
import axios from 'axios'

const httpAxiosAuth = ({ sendToken = false }) => {
  const headers = () => {
    if (localStorage.getItem('bearer_token') && sendToken) {
      return { Authorization: 'Bearer ' + localStorage.getItem('bearer_token') }
    }
    return null
  }
  return axios.create({
    baseURL: process.env.API_URL,
    timeout: 100000,
    headers: headers()
  })
}

Vue.prototype.$axios = httpAxiosAuth
