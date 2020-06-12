import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
//import Icon from "@material-ui/core/Icon";
// @material-ui/icons
//import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
//import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
//import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";
//import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import image from "assets/img/bg7.jpg";
import Footer from "components/Footer/Footer";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import BeenhereIcon from "@material-ui/icons/Beenhere";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import { updtaeUserSub } from "user/helper/userapicall";
import { useSelector, useDispatch } from "react-redux";
import SnackbarContent from "components/Snackbar/SnackbarContent";
// import setAuthToken from "auth/helper/setToken";
// import { isAuthenticated } from "auth/helper";
// import { getUserInfo } from "user/helper/userapicall";
// import { store } from "store/store";
//import userReducer from "store/reducers/userReducer";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
const useStyles = makeStyles(styles);

const UpdateUser = props => {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const currentUser = useSelector(store => store.user.user);
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    fName: currentUser.FName,
    lName: currentUser.LName,
    location: currentUser.Location,
    organization: currentUser.Organization,
    experience: currentUser.Experience,
    latestDesignation: currentUser.LatestDesignation,
    userNumber: currentUser.Mobile,
    linkedInUrl: currentUser.LinkedIn,
    githubUrl: currentUser.GitHub,
    twitterUrl: currentUser.Twitter
  });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;

  const handleSubmit = event => {
    event.preventDefault();
    setError("");
    console.log(user);
    let userId = currentUser._id;
    let newUser = {
      FName: user.fName,
      LName: user.lName,
      Location: user.location,
      Organization: user.organization,
      Experience: user.experience,
      LatestDesignation: user.latestDesignation,
      Mobile: user.userNumber,
      LinkedIn: user.linkedInUrl,
      GitHub: user.githubUrl,
      Twitter: user.twitterUrl
    };
    updtaeUserSub(newUser, userId)
      .then(response => {
        console.log("response", response);
        if (response.data.error) {
          setError(response.data.error);
        } else {
          console.log(response.data.user);
          setMessage(response.data.message);
          dispatch({
            type: "GET_UPDATED_USER",
            payload: response.data.user
          });
        }
      })
      .catch(err => console.log(err));
  };

  const handleChange = name => event => {
    setUser({ ...user, [name]: event.target.value });
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
          <GridContainer justify="center" style={{ marginTop: "10%" }}>
            <GridItem xs={12} sm={12} md={12}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h3>Update Profile Information</h3>
                  </CardHeader>
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={12} lg={12} xl={12}>
                      {error && (
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
                          color="success"
                          icon="info_outline"
                        />
                      )}
                    </GridItem>
                    <GridItem xs={12} sm={12} md={5}>
                      <CardBody>
                        <CustomInput
                          labelText="First Name..."
                          id="FName"
                          name="FName"
                          onChange={handleChange("fName")}
                          value={user.fName}
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            type: "text",
                            endAdornment: (
                              <InputAdornment position="end">
                                <People className={classes.inputIconsColor} />
                              </InputAdornment>
                            )
                          }}
                        />
                        <CustomInput
                          labelText="Last Name..."
                          id="lastname"
                          name="lName"
                          value={user.lName}
                          onChange={handleChange("lName")}
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            type: "text",
                            endAdornment: (
                              <InputAdornment position="end">
                                {/* <Email className={classes.inputIconsColor} /> */}
                                <AssignmentIndIcon
                                  className={classes.inputIconsColor}
                                />
                              </InputAdornment>
                            )
                          }}
                        />
                        <CustomInput
                          labelText="Organization"
                          id="organization"
                          name="organization"
                          value={user.organization}
                          onChange={handleChange("organization")}
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            type: "text",
                            endAdornment: (
                              <InputAdornment position="end">
                                <BusinessCenterIcon
                                  className={classes.inputIconsColor}
                                >
                                  lock_outline
                                </BusinessCenterIcon>
                              </InputAdornment>
                            ),
                            autoComplete: "off"
                          }}
                        />
                        <CustomInput
                          labelText="Experience"
                          id="Experience"
                          value={user.experience}
                          name="experience"
                          onChange={handleChange("experience")}
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            type: "text",
                            endAdornment: (
                              <InputAdornment position="end">
                                <CalendarTodayIcon
                                  className={classes.inputIconsColor}
                                >
                                  lock_outline
                                </CalendarTodayIcon>
                              </InputAdornment>
                            ),
                            autoComplete: "off"
                          }}
                        />
                        <CustomInput
                          labelText="Designation"
                          id="Designation"
                          value={user.latestDesignation}
                          name="latestDesignation"
                          onChange={handleChange("latestDesignation")}
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            type: "text",
                            endAdornment: (
                              <InputAdornment position="end">
                                <BeenhereIcon
                                  className={classes.inputIconsColor}
                                >
                                  lock_outline
                                </BeenhereIcon>
                              </InputAdornment>
                            ),
                            autoComplete: "off"
                          }}
                        />
                        <CustomInput
                          labelText="Location"
                          id="location"
                          value={user.location}
                          name="Location"
                          onChange={handleChange("location")}
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            type: "text",
                            endAdornment: (
                              <InputAdornment position="end">
                                <BeenhereIcon
                                  className={classes.inputIconsColor}
                                >
                                  lock_outline
                                </BeenhereIcon>
                              </InputAdornment>
                            ),
                            autoComplete: "off"
                          }}
                        />
                      </CardBody>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={5}>
                      <CardBody>
                        <CustomInput
                          labelText="Phone"
                          value={user.userNumber}
                          onChange={handleChange("userNumber")}
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            type: "text",
                            endAdornment: (
                              <InputAdornment position="end">
                                <PhoneIphoneIcon
                                  className={classes.inputIconsColor}
                                >
                                  lock_outline
                                </PhoneIphoneIcon>
                              </InputAdornment>
                            ),
                            autoComplete: "off"
                          }}
                        />
                        <CustomInput
                          labelText="Linkedin profile url"
                          id="linkedin"
                          value={user.linkedInUrl}
                          onChange={handleChange("linkedInUrl")}
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            type: "text",
                            endAdornment: (
                              <InputAdornment position="end">
                                <i className="fab fa-linkedin-in"></i>
                              </InputAdornment>
                            ),
                            autoComplete: "off"
                          }}
                        />
                        <CustomInput
                          labelText="Github profile url"
                          id="Github"
                          name="Github"
                          value={user.githubUrl}
                          onChange={handleChange("githubUrl")}
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            type: "text",
                            endAdornment: (
                              <InputAdornment position="end">
                                <i className="fab fa-github"></i>
                              </InputAdornment>
                            ),
                            autoComplete: "off"
                          }}
                        />
                        <CustomInput
                          labelText="Twitter profile url"
                          id="twitter"
                          value={user.twitterUrl}
                          name="Twitter"
                          onChange={handleChange("twitterUrl")}
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            type: "text",
                            endAdornment: (
                              <InputAdornment position="end">
                                <i className="fab fa-twitter"></i>
                              </InputAdornment>
                            ),
                            autoComplete: "off"
                          }}
                        />
                        <Button
                          onClick={handleSubmit}
                          color="primary"
                          style={{ float: "right" }}
                        >
                          Save
                        </Button>
                      </CardBody>
                    </GridItem>
                  </GridContainer>
                  {/* <CardFooter className={classes.cardFooter}>
                    <Button simple color="primary" size="lg">
                      Save
                    </Button>
                  </CardFooter> */}
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
};

export default UpdateUser;
