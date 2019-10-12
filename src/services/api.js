import axios from 'axios';

const api = axios.create({
  baseURL: 'https://json-server-spot-api.herokuapp.com/',
});

export default api;
