import axios from "axios";

class ApiHandler {
  axios;
  constructor() {
    this.axios = axios.create({
      baseURL: "/api/v1",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-CSRF-TOKEN": document
          .querySelector('[name="csrf-token"]')
          .getAttribute("content"),
      },
    });

    this.axios.interceptors.response.use(
      (response) => {
        if (response) {
          const { data, status } = response;
          response.success = status === 200;
          if (data) {
            console.log("success, ", data)
          }
        }
        return response;
      },
      (error) => {
        console.log("Error", error)
        return Promise.reject(error);
      }
    );
  }
}

const Api = new ApiHandler();

export default Api.axios;
