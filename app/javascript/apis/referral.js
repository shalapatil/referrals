import axios from "./api";

const index = () => axios.get("/referrals");

const create = payload => axios.post("/referrals", payload)

const referralApi = {
  index,
  create
};

export default referralApi;
