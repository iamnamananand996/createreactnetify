import { API } from "backend";
import axios from "axios";
//import { store } from "store/store";

export const getUserInfo = userId => {
  return axios
    .get(`${API}/user/info/${userId}`)
    .then(response => {
      console.log(response.data);
      return response;
    })
    .catch(err => console.log(err));
};

export const updtaeUserSub = (user, userId) => {
  return axios
    .put(`${API}/user/update/${userId}`, user)
    .then(response => {
      console.log(response.data);
      return response;
    })
    .catch(err => console.log(err));
};
