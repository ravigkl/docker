import axios from "axios";

const API_AUTH_CONTEXT="/api/auth/";
//const API_URL = "http://localhost:8080/api/auth/";
const API_URL = process.env.REACT_APP_PROTOCOL+"://"+process.env.REACT_APP_HOST+":"+process.env.REACT_APP_API_PORT+`${API_AUTH_CONTEXT}`;


//console.log(process.env.REACT_APP_PROTOCOL+"://"+process.env.REACT_APP_HOST+":"+process.env.REACT_APP_API_PORT+`${API_AUTH_CONTEXT}`);
const register = (username, email, password, name, mobile, roles) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
    name,
    mobile,
    roles,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};