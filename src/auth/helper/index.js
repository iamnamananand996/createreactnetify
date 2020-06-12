import { API } from "backend";
import axios from "axios";

//console.log(API);
//signup
export const signup = user => {
  return axios
    .post(`${API}/register`, user)
    .then(response => {
      console.log(response);
      return response;
    })
    .catch(err => console.log(err));
};

export const signin = user => {
  return axios
    .post(`${API}/login`, user)
    .then(response => {
      return response;
    })
    .catch(err => console.log(err));
};

//authenticate or save json web toke to local storage
export const authenticate = (data, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
};

//signout of local storage and remove token
export const signout = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("jwt");

    return axios
      .get(`${API}/logout/access`)
      .then(response => {
        return response;
      })
      .catch(err => {
        console.log(err);
      });
  }
};

export const isAuthenticated = () => {
  if (typeof window === "undefined") {
    return false;
  }

  if (localStorage.getItem("jwt")) {
    // let jwt = JSON.parse(localStorage.getItem("jwt"));
    // console.log(jwt);
    // store.dispatch({
    //   type: "SET_CURRENT_USER",
    //   payload: jwt.user,
    //   token: jwt.token
    // });
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    return false;
  }
};
