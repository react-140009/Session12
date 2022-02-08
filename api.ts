import axios, { AxiosRequestConfig } from "axios"

const api = axios.create({  
  baseURL: 'http://192.168.118.140:3010/'
})

api.interceptors.request.use(function (config) {
  // const token = store.getState().auth.token;
  // if(token && config.headers){
  //   config.headers['token'] = token
  // }
  return config;
})

export default api;