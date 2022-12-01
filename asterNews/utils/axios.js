import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://dummyapi.io/data/v1/post',
  headers: {
    'app-id': '636e0d6642c1f665f684f489',
  },
});
