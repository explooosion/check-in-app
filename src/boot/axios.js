import axios from 'axios';

const restApi = axios.create();

restApi.interceptors.request.use((response) => {
  return response;
});

restApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    switch (error.response.status) {
      case 401:
        break;
      case 403:
        break;
      default:
        break;
    }
    return error;
  }
);

export { restApi };
