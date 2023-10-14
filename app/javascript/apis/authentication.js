import axios from "./api";

const login = payload => axios.post("/login", { user: payload });

const signup = payload => axios.post("/signup", { user: payload });

const logout = () => axios.delete("/logout");

const authenticationApi = {
  login,
  signup,
  logout,
};

export default authenticationApi;
