import axios from "axios";

export default axios.create({
  baseURL: "http://ip:5000",
});
