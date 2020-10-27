import axios from 'axios';

const api = axios.create({
  //baseURL: 'http://10.221.1.165:3333',
  baseURL: 'http://192.168.15.12:3333',
});

export default api;