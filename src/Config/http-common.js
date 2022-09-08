import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:4000/api/user/profilePhotoChange",
  headers: {
    "Content-Type": "multipart/form-data",
    "token": localStorage.getItem("token")

  },
});
