import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5000",
  baseURL: "https://amazon-backend-l42o.onrender.com",
});

export { axiosInstance };
