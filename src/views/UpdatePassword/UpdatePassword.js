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
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";
//import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import image from "assets/img/bg7.jpg";
import Footer from "components/Footer/Footer";
//import { updtaeUserSub } from "user/helper/userapicall";
//import { useSelector, useDispatch } from "react-redux";
import SnackbarContent from "components/Snackbar/SnackbarContent";
import axios from "axios";
import { API } from "backend";
//import userReducer from "store/reducers/userReducer";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
const useStyles = makeStyles(styles);

const UpdatePassword = props => {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  //const currentUser = useSelector(store => store.user.user);
  //const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: ""
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
    setMessage("");
    axios
      .post(`${API}/forgotpassword`, user)
      .then(response => {
        console.log(response.data);
        if (response.data.error) {
          setError(response.data.error);
        } else {
          setMessage(response.data.message);
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
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h3>Reset Password</h3>
                  </CardHeader>
                  <CardBody>
                    <CustomInput
                      labelText="Enter Email..."
                      id="email"
                      name="email"
                      onChange={handleChange("email")}
                      value={user.email}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "email",
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button
                      simple
                      color="primary"
                      size="lg"
                      onClick={handleSubmit}
                    >
                      Submit
                    </Button>
                  </CardFooter>
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

export default UpdatePassword;
