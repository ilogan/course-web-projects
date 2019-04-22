import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID e7104ddddad3e0bfcf809ff4de7b2439c77acf5025418a297044507a3cefb722"
  }
});
