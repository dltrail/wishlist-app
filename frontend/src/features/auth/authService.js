import axios from "axios";

const API_URL = "http://localhost:4000/api/users/";

// Register user
const register = async (userData) => {
  const res = await axios.post(API_URL + "register", userData);
  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }
  return res.data;
};

// Login user
const login = async (userData) => {
  const res = await axios.post(API_URL + "login", userData);
  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }
  return res.data;
};

// Logout user
const logout = async (userData) => {
  localStorage.removeItem(userData);
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
