import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.TESTAPI_HOST,
  headers: {
    post: 'Content-Type',
  },
});

export default instance;
