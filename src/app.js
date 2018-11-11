import axios from 'axios';

export default axios.create({
  baseURL: 'http://api.rent-auto.biz.tm/',
  timeout: 10000,
});
