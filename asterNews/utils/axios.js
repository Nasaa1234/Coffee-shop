import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:4444/post',
  // headers: {
  //   'app-id': '636e0d6642c1f665f684f489',
  // },
});
