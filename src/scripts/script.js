import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sky-frontend.herokuapp.com',
});


const response = await api.get('/movies');

console.log(response);
