/* eslint-disable react/prop-types */
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import profile from "assets/img/faces/christian.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import { useSelector } from "react-redux";
import { isAuthenticated } from "auth/helper";
import setAuthToken from "auth/helper/setToken";
import { getUserInfo } from "user/helper/userapicall";
import { store } from "store/store";

const useStyles = makeStyles(styles);

if (localStorage.getItem("jwt")) {
  let jwt = JSON.parse(localStorage.getItem("jwt"));
  console.log("jwt", jwt);
  setAuthToken(jwt.token);
  let userId = isAuthenticated().user._id;
  getUserInfo(userId)
    .then(response => {
      console.log("user", response.data.user);
      store.dispatch({
        type: "GET_USER_INFO",
        payload: response.data.user
      });
    })
    .catch(err => console.log(err));
}

const ProfilePage = props => {
  const classes = useStyles();
  const { ...rest } = props;
  const user = useSelector(store => store.user.user);
  console.log(user);
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  return (
    <div>
      <Header
        color="transparent"
        brand="MachineHack"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img
                      src={user.AvatarURL ? user.AvatarURL : profile}
                      alt="..."
                      className={imageClasses}
                    />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>
                      {user.FName ? user.FName : "Add Name"}{" "}
                      {user.LName ? user.LName : ""}
                    </h3>
                    <h5 className={classes.location}>{user.Email}</h5>
                    <h5 className={classes.location}>
                      {user.Location ? user.Location : "update location"}{" "}
                    </h5>
                    <h5 className={classes.location}>
                      {user.LatestDesignation
                        ? user.LatestDesignation
                        : "update profile"}{" "}
                      at {user.Organization}
                    </h5>
                    <h5 className={classes.location}>
                      Experience :{" "}
                      {user.Experience ? user.Experience : "update exp"}{" "}
                    </h5>
                    <h5>{user.Mobile ? user.Mobile : "Update Mobile"}</h5>
                    <Button
                      justIcon
                      link
                      className={classes.margin5}
                      href={`${user.Twitter}`}
                    >
                      <i className={"fab fa-twitter"} />
                    </Button>
                    <Button
                      justIcon
                      link
                      className={classes.margin5}
                      href={`${user.Linkedin}`}
                    >
                      <i className={"fab fa-linkedin"} />
                    </Button>
                    <Button
                      justIcon
                      link
                      className={classes.margin5}
                      href={`${user.Github}`}
                    >
                      <i className={"fab fa-github"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            {/* <div className={classes.description}>
              <p
                style={{
                  paddingBottom: "20px"
                }}
              >
                An artist of considerable range, Chet Faker — the name taken by
                Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                and records all of his own music, giving it a warm, intimate
                feel with a solid groove structure.{" "}
              </p>
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
