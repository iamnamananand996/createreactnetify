/*eslint-disable*/
import React from "react";
import {
  useSelector,
  useDispatch
} from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link, useHistory } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
import AcUnitIcon from '@material-ui/icons/AcUnit';
// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import { signout } from "auth/helper";
import { isAuthenticated } from "auth/helper";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  //const auth = useSelector(store => store.auth);
  const dispatch = useDispatch();
  const history = useHistory();
  const logout = () => {
   signout()
   .then(() => {
      history.push("/login-page")
      dispatch({
        type: "LOGOUT_CURRENT_USER"
      });
   })
  }
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        {
          isAuthenticated() ? <Button
          onClick={logout}
          color="transparent"
          className={classes.navLink}
        >
         Logout
        </Button>
        :
        <CustomDropdown
          noLiPadding
          buttonText="Login"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={AcUnitIcon}
          dropdownList={[
            <Link to="/login-page" className={classes.dropdownLink}>
              LogIn
            </Link>,
            <Link to="/hackathons" className={classes.dropdownLink}>
              Hackathons
            </Link>
          ]}
        />
        }
      </ListItem>
      <ListItem className={classes.listItem}>
        {
          isAuthenticated() && 
          <CustomDropdown
          noLiPadding
          buttonText="User"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={AcUnitIcon}
          dropdownList={[
            <Link to="/user/userinfo" className={classes.dropdownLink}>
              My Account
            </Link>,
            <Link to="/user/update" className={classes.dropdownLink}>
              Update Account
            </Link>,
            <Link to="/user/profile" className={classes.dropdownLink}>
              Profile
            </Link>
          ]}
        />
        // <Link
        //   to="/user-page"
        //   color="transparent"
        //   className={classes.navLink}
        // >
        //   Profile
        // </Link>
        }
      </ListItem>
      <ListItem className={classes.listItem}>
        {/* <Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip> */} 
        <Tooltip
          id="instagram-twitter"
          title="All Hackathons"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Link
            // href="https://twitter.com/CreativeTim?ref=creativetim"
            to="/hackathons"
            color="secondary"
            className={classes.navLink}
          >
            {/* <i className={classes.socialIcons + " fab fa-twitter"} /> */}
            Hackathons
          </Link>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Data"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Link
            to="/hackathon-page"
            color="secondary"
            className={classes.navLink}
          >
            Data
          </Link>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Notebooks"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Link
            to="/hackathon-page"
            color="secondary"
            className={classes.navLink}
          >
            Notebooks
          </Link>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Discuss"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Link
            // href="https://twitter.com/CreativeTim?ref=creativetim"
            to="/hackathon-page"
            color="secondary"
            className={classes.navLink}
          >
            {/* <i className={classes.socialIcons + " fab fa-twitter"} /> */}
            Discuss
          </Link>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Courses"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Link
            // href="https://twitter.com/CreativeTim?ref=creativetim"
            to="/hackathon-page"
            color="secondary"
            className={classes.navLink}
          >
            {/* <i className={classes.socialIcons + " fab fa-twitter"} /> */}
            Courses
          </Link>
        </Tooltip>
      </ListItem>
    </List>
  );
}
