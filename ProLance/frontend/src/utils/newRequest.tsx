import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://prolance-backend.onrender.com",
  withCredentials: true,
});

export default newRequest;
