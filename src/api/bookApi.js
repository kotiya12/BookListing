import axios from 'axios';

const bookApi = axios.create({
  baseURL: 'http://68.178.162.203:8080/application-test-v1.1',
});

export default bookApi;