/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
//import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";
//import { useDispatch } from "react-redux";
import setAuthToken from "auth/helper/setToken.js";
import Footer from "components/Footer/Footer.js";
import HackathonList from "components/HackathonList/HackathonList.js";
import { isAuthenticated } from "auth/helper";
import axios from "axios";
//import { store } from "store/store";
import { getUserInfo } from "user/helper/userapicall";
import { useDispatch } from "react-redux";
import { API } from "backend";
import ProductSection from "./Sections/ProductSection";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

const LandingPage = props => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { ...rest } = props;

  const getAllHackathons = () => {
    axios
      .get(`${API}/competitions`)
      .then(response => {
        dispatch({
          type: "GET_ALL_HACKATHONS",
          payload: response.data
        });
        if (localStorage.getItem("jwt")) {
          let jwt = JSON.parse(localStorage.getItem("jwt"));
          console.log("jwt", jwt);
          setAuthToken(jwt.token);
          let userId = isAuthenticated().user._id;
          getUserInfo(userId)
            .then(response => {
              console.log("user", response.data.user);
              dispatch({
                type: "GET_USER_INFO",
                payload: response.data.user
              });
            })
            .catch(err => console.log(err));
        }
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getAllHackathons();
    // if (localStorage.getItem("jwt")) {
    //   let jwt = JSON.parse(localStorage.getItem("jwt"));
    //   console.log("jwt", jwt);
    //   setAuthToken(jwt.token);
    //   let userId = isAuthenticated().user._id;
    //   getUserInfo(userId)
    //     .then(response => {
    //       console.log("user", response.data.user);
    //       dispatch({
    //         type: "GET_USER_INFO",
    //         payload: response.data.user
    //       });
    //     })
    //     .catch(err => console.log(err));
    // }
  });

  const goToHackathons = () => {
    return props.history.push("/hackathons");
  };

  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="MachineHack"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/landing-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>
                {" "}
                Test & Practise Your Machine Learning Skills.{" "}
              </h1>
              <h4>
                Compete against hundreds of Data Scientists, with our industry
                curated Hackathons
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href=""
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginRight: "2%" }}
              >
                <i className="fas fa-play" />
                Practice
              </Button>
              <Button color="primary" size="lg" onClick={goToHackathons}>
                Go to Hackathons
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <HackathonList />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
