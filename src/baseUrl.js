import axios from "axios";

const baseUrl = axios.create({
  baseURL: "http://localhost:9000",
});

export default baseUrl;
