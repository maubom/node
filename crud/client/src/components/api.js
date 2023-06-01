import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8800"
});

// Add a request interceptor
/* let countReq = 0;
api.interceptors.request.use(
  function (config) {
    if (config.method === "get") {
      ++countReq;
    }
    console.log(
      `Já tivemos ${countReq} requisições do tipo ${config.method.toUpperCase()}`
    );
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
 */
export default api;