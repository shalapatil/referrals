import axios from "./api";

const signin = payload => axios.post("/login", { user: payload });

const signup = payload => axios.post("/signup", { user: payload });

const logout = () => axios.delete("/logout");


const authenticationApi = {
  signin,
  signup,
  logout,
};

export default authenticationApi;
