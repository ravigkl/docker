import axios from "axios";
import authHeader from "./auth-header";

const API_TEST_CONTEXT="/api/test/";
//const API_URL = "http://localhost:8080/api/test/";

const API_URL = process.env.REACT_APP_PROTOCOL+"://"+process.env.REACT_APP_HOST+":"+process.env.REACT_APP_API_PORT+`${API_TEST_CONTEXT}`;


const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

export default {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};
