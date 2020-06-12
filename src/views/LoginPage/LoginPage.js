/* eslint-disable react/prop-types */
import React, { useState } from "react";

import { useDispatch } from "react-redux";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import NavPills from "components/NavPills/NavPills.js";

import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";

import styles from "assets/jss/material-kit-react/views/loginPage.js";
import "./LoginPage.scss";

import image from "assets/img/bg7.jpg";
import SnackbarContent from "components/Snackbar/SnackbarContent";
import { Redirect, Link } from "react-router-dom";
import { signup, signin, authenticate, isAuthenticated } from "auth/helper";
import Footer from "components/Footer/Footer";

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  //const auth = useSelector(store => store.auth);
  const dispatch = useDispatch();
  const [cardAnimaton, setCardAnimation] = useState("cardHidden");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("iam@aim.com");
  const [loginPassword, setLoginPassword] = useState("1234");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [didRedirect, setDidRedirect] = useState(false);

  // console.log(auth);

  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  // const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  const { ...rest } = props;

  const handleSignupEmail = e => {
    setError("");
    setMessage("");
    setSignupEmail(e.target.value);
  };

  const handleSignupPassword = e => {
    setError("");
    setMessage("");
    setSignupPassword(e.target.value);
  };

  const handleLoginEmail = e => {
    setError("");
    setMessage("");
    setLoginEmail(e.target.value);
  };

  const handleLoginPassword = e => {
    setError("");
    setMessage("");
    setLoginPassword(e.target.value);
  };

  const handleLoginSubmit = e => {
    e.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);
    if (!loginEmail || !loginPassword) {
      return setError("Field Required");
    } else {
      const newUser = {
        email: loginEmail,
        password: loginPassword
      };
      console.log(newUser);
      signin(newUser)
        .then(response => {
          if (response.data.error) {
            setLoading(false);
            setError(response.data.error);
          } else {
            authenticate(response.data, () => {
              setDidRedirect(true);
              dispatch({
                type: "SET_CURRENT_USER",
                payload: response.data.user,
                token: response.data.token
              });
              // props.history.push("/");
            });
          }
        })
        .catch(err => console.log(err));
    }
  };

  const performRedirect = () => {
    if (isAuthenticated() || didRedirect) {
      return <Redirect to="/" />;
    }
  };

  const handleSignupSubmit = e => {
    e.preventDefault();
    if (!signupEmail || !signupPassword) {
      return setError("Field Required");
    } else {
      const newUser = {
        email: signupEmail,
        password: signupPassword
      };
      console.log(newUser);
      signup(newUser)
        .then(response => {
          console.log(response);
          if (response.data.error) {
            setError(response.data.error);
          } else {
            setMessage(response.data.message);
            setSignupEmail("");
            setSignupPassword("");
          }
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="MachineHack"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer
            justify="center"
            className={classNames(classes.main, classes.mainRaised)}
          >
            <h2 id="machine-hack-brand">MachineHack</h2>
            <GridItem xs={12} sm={12} md={12} lg={12} xl={12}>
              {error ? (
                <SnackbarContent
                  message={
                    <span>
                      {" "}
                      <b> {error} </b>
                    </span>
                  }
                  close
                  color="danger"
                  icon="info_outline"
                />
              ) : (
                ""
              )}
            </GridItem>
            <GridItem xs={12} sm={12} md={12} lg={12} xl={12}>
              {message && (
                <SnackbarContent
                  message={
                    <span>
                      {" "}
                      <b> {message} </b>
                    </span>
                  }
                  close
                  color="info"
                  icon="info_outline"
                />
              )}
            </GridItem>
            <GridItem xs={12} sm={12} md={12} lg={12} xl={12}>
              {loading && (
                <SnackbarContent
                  message={
                    <span>
                      <b> INFO ALERT: </b> <strong>Loading...</strong>
                    </span>
                  }
                  close
                  color="info"
                  icon="info_outline"
                />
              )}
            </GridItem>
            <GridItem
              xs={12}
              sm={12}
              md={8}
              lg={12}
              xl={12}
              className={classes.navWrapper}
            >
              <NavPills
                alignCenter
                color="info"
                tabs={[
                  {
                    tabButton: "LogIn",
                    tabIcon: Camera,
                    tabContent: (
                      <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={5}>
                          <Card className={classes[cardAnimaton]}>
                            <form className={classes.form}>
                              <CardHeader
                                color="primary"
                                className={classes.cardHeader}
                              >
                                {" "}
                                <div className={classes.socialLine}>
                                  {" "}
                                  <Button
                                    justIcon
                                    href="#pablo"
                                    target="_blank"
                                    color="transparent"
                                    onClick={e => e.preventDefault()}
                                  >
                                    <i className={"fab fa-linkedin"} />
                                  </Button>
                                  <Button
                                    justIcon
                                    href="#pablo"
                                    target="_blank"
                                    color="transparent"
                                    onClick={e => e.preventDefault()}
                                  >
                                    <i className={"fab fa-facebook"} />
                                  </Button>{" "}
                                  <Button
                                    justIcon
                                    href="#pablo"
                                    target="_blank"
                                    color="transparent"
                                    onClick={e => e.preventDefault()}
                                  >
                                    <i className={"fab fa-google-plus-g"} />{" "}
                                  </Button>{" "}
                                </div>{" "}
                              </CardHeader>{" "}
                              <p className={classes.divider}>
                                {" "}
                                Or Be Classical{" "}
                              </p>{" "}
                              <CardBody>
                                <CustomInput
                                  labelText="Email..."
                                  onChange={handleLoginEmail}
                                  value={loginEmail}
                                  formControlProps={{
                                    fullWidth: true
                                  }}
                                  inputProps={{
                                    type: "email",
                                    endAdornment: (
                                      <InputAdornment position="end">
                                        <Email
                                          className={classes.inputIconsColor}
                                        />{" "}
                                      </InputAdornment>
                                    )
                                  }}
                                />{" "}
                                <CustomInput
                                  labelText="Password"
                                  onChange={handleLoginPassword}
                                  value={loginPassword}
                                  formControlProps={{
                                    fullWidth: true
                                  }}
                                  inputProps={{
                                    type: "password",
                                    endAdornment: (
                                      <InputAdornment position="end">
                                        <Icon
                                          className={classes.inputIconsColor}
                                        >
                                          lock_outline{" "}
                                        </Icon>{" "}
                                      </InputAdornment>
                                    ),
                                    autoComplete: "off"
                                  }}
                                />{" "}
                                <Link
                                  to="/update/password"
                                  style={{ float: "right" }}
                                >
                                  forgot password
                                </Link>
                              </CardBody>{" "}
                              <CardFooter className={classes.cardFooter}>
                                <Button
                                  color="primary"
                                  onClick={handleLoginSubmit}
                                >
                                  Log In{" "}
                                </Button>{" "}
                              </CardFooter>{" "}
                            </form>
                          </Card>
                        </GridItem>
                      </GridContainer>
                    )
                  },
                  {
                    tabButton: "Sign Up",
                    tabIcon: Palette,
                    tabContent: (
                      // <div className={classes.container}>
                      <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={5}>
                          <Card className={classes[cardAnimaton]}>
                            <form className={classes.form}>
                              <CardHeader
                                color="primary"
                                className={classes.cardHeader}
                              >
                                <div className={classes.socialLine}>
                                  {" "}
                                  <Button
                                    justIcon
                                    href="#pablo"
                                    target="_blank"
                                    color="transparent"
                                    onClick={e => e.preventDefault()}
                                  >
                                    <i className={"fab fa-linkedin"} />
                                  </Button>
                                  <Button
                                    justIcon
                                    href="#pablo"
                                    target="_blank"
                                    color="transparent"
                                    onClick={e => e.preventDefault()}
                                  >
                                    <i className={"fab fa-facebook"} />
                                  </Button>{" "}
                                  <Button
                                    justIcon
                                    href="#pablo"
                                    target="_blank"
                                    color="transparent"
                                    onClick={e => e.preventDefault()}
                                  >
                                    <i className={"fab fa-google-plus-g"} />
                                  </Button>
                                </div>
                              </CardHeader>
                              <p className={classes.divider}>Or Be Classical</p>
                              <CardBody>
                                <CustomInput
                                  labelText="Email..."
                                  id="email"
                                  onChange={handleSignupEmail}
                                  value={signupEmail}
                                  formControlProps={{
                                    fullWidth: true
                                  }}
                                  inputProps={{
                                    type: "email",
                                    endAdornment: (
                                      <InputAdornment position="end">
                                        <Email
                                          className={classes.inputIconsColor}
                                        />
                                      </InputAdornment>
                                    )
                                  }}
                                />
                                <CustomInput
                                  labelText="Password"
                                  id="pass"
                                  onChange={handleSignupPassword}
                                  value={signupPassword}
                                  formControlProps={{
                                    fullWidth: true
                                  }}
                                  inputProps={{
                                    type: "password",
                                    endAdornment: (
                                      <InputAdornment position="end">
                                        <Icon
                                          className={classes.inputIconsColor}
                                        >
                                          lock_outline
                                        </Icon>
                                      </InputAdornment>
                                    ),
                                    autoComplete: "off"
                                  }}
                                />
                              </CardBody>
                              <CardFooter className={classes.cardFooter}>
                                <Button
                                  simple
                                  color="primary"
                                  size="lg"
                                  onClick={handleSignupSubmit}
                                >
                                  Sign Up
                                </Button>
                              </CardFooter>
                            </form>
                            <div
                              style={{
                                color: "red",
                                display: "flex",
                                justifyContent: "center"
                              }}
                            >
                              {error ? error : ""}
                            </div>
                            <div
                              style={{
                                color: "green",
                                display: "flex",
                                justifyContent: "center"
                              }}
                            >
                              {message ? message : ""}
                            </div>
                          </Card>
                        </GridItem>
                      </GridContainer>
                      // </div>
                    )
                  }
                ]}
              />
            </GridItem>
          </GridContainer>
          {performRedirect()}
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
