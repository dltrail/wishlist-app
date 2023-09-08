import axios from "axios";

const API_URL = "https://wishlist-app-jade.vercel.app/api/users/";

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
const logout = async (user) => {
  localStorage.clear(user);
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
