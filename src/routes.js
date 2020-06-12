import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "views/LandingPage/LandingPage";
import ProfilePage from "views/ProfilePage/ProfilePage";
import LoginPage from "views/LoginPage/LoginPage";
import SignupPage from "views/SignupPage/SignupPage";
import HackathonPage from "views/HackathonPage/HackathonPage";
import PrivateRoute from "auth/helper/PrivateRoute";
import UpdateUser from "views/UpdateUser/UpdateUser";
import setAuthToken from "auth/helper/setToken";
import { store } from "store/store";
import UnProtectedRoute from "auth/helper/UnProtectedRoute";
import UpdatePassword from "views/UpdatePassword/UpdatePassword";
import ErrorPage from "views/ErrorPage/ErrorPage";
import AllHackathon from "views/AllHackathon/AllHackathon";
//import AccountPage from "views/AccountPage/AccountPage";
import UserProfile from "views/UserProfile/UserProfile";
//import { isAuthenticated } from "auth/helper";
//import setAuthToken from "auth/helper/setToken";
// if (localStorage.getItem("jwt")) {
//   let jwt = JSON.parse(localStorage.getItem("jwt"));
//   console.log("jwt", jwt);
//   setAuthToken(jwt.token);
//   // getUserInfo(jwt.user._id);
//   store.dispatch({
//     type: "SET_CURRENT_USER",
//     payload: jwt.user,
//     token: jwt.token
//   });
// }

const Routes = () => {
  // const setLocalStorage = () => {
  //   if (localStorage.getItem("jwt")) {
  //     let jwt = JSON.parse(localStorage.getItem("jwt"));
  //     console.log("jwt", jwt);
  //     setAuthToken(jwt.token);
  //   }
  // };
  if (localStorage.getItem("jwt")) {
    let jwt = JSON.parse(localStorage.getItem("jwt"));
    console.log("jwt", jwt);
    setAuthToken(jwt.token);
    // getUserInfo(jwt.user._id);
    store.dispatch({
      type: "SET_CURRENT_USER",
      payload: jwt.user,
      token: jwt.token
    });
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login-page" component={LoginPage} />
        <Route exact path="/signup-page" component={SignupPage} />
        <Route exact path="/hackathons" component={AllHackathon} />
        <Route
          exact
          path="/hackathons/:hackathonId"
          component={HackathonPage}
        />
        <PrivateRoute exact path="/user/userinfo" component={ProfilePage} />
        <PrivateRoute exact path="/user/update" component={UpdateUser} />
        <PrivateRoute exact path="/user/profile" component={UserProfile} />
        <UnProtectedRoute
          exact
          path="/update/password"
          component={UpdatePassword}
        />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
