import axios from "./api";

const index = () => axios.get("/referrals/index");

const referralApi = {
  index
};

export default referralApi;
