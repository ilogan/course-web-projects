import axios from "axios";

const KEY = "AIzaSyA27rBPiDrzN97BxVTbQYJ3kfr-ZuUsQ4U";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY
  }
});
