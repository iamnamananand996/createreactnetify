import React from "react";
import { makeStyles, fade } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import CustomDropdown from "components/CustomDropdown/CustomDropdown";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
//import styles from "assets/jss/material-kit-react/views/landingPage.js";

const useStyle = makeStyles(theme => ({
  list: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.25)
    },
    marginRight: theme.spacing(2),
    color: "#a903fc",
    marginLeft: 0,
    marginBottom: theme.spacing(2),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(0),
      width: "auto"
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 1),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch"
    }
  }
}));

export default function HackathonDisc() {
  const classes = useStyle();

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <GridContainer>
          <GridItem xs={3} sm={3} md={3}>
            <h3>
              {" "}
              <span> Topics: count </span>
            </h3>
          </GridItem>
          <GridItem
            xs={9}
            sm={9}
            md={9}
            style={{
              alignItems: "center",
              marginTop: "10px"
            }}
          >
            <CustomDropdown
              noLiPadding
              buttonText="Sort by"
              buttonProps={{
                className: classes.navLink,
                color: "primary"
              }}
              //   buttonIcon={AcUnitIcon}
              dropdownList={[
                // <Link to="/login-page" className={classes.dropdownLink}>
                //   LogIn{" "}
                // </Link>
                // <Link to="/signup-page" className={classes.dropdownLink}>
                //   SignUp
                // </Link>
                <Button key="date"> Date </Button>
              ]}
            />
          </GridItem>
        </GridContainer>
      </GridItem>
      <GridItem>
        <List className={classes.list}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://material-ui.com/static/images/avatar/1.jpg"
              />
            </ListItemAvatar>{" "}
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Ali Connors{" "}
                  </Typography>{" "}
                  {" — I'll be in your neighborhood doing errands this…"}{" "}
                </React.Fragment>
              }
            />{" "}
          </ListItem>{" "}
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src="https://material-ui.com/static/images/avatar/2.jpg"
              />
            </ListItemAvatar>{" "}
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    to Scott, Alex, Jennifer{" "}
                  </Typography>{" "}
                  {" — Wish I could come, but I'm out of town this…"}{" "}
                </React.Fragment>
              }
            />{" "}
          </ListItem>{" "}
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https://material-ui.com/static/images/avatar/3.jpg"
              />
            </ListItemAvatar>{" "}
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Sandra Adams{" "}
                  </Typography>{" "}
                  {" — Do you have Paris recommendations? Have you ever…"}{" "}
                </React.Fragment>
              }
            />{" "}
          </ListItem>{" "}
        </List>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <GridContainer>
          <GridItem xs={3} sm={3} md={3}>
            <h3>
              {" "}
              <span>My Topics: count </span>{" "}
            </h3>{" "}
          </GridItem>{" "}
          <GridItem
            xs={9}
            sm={9}
            md={9}
            style={{
              alignItems: "center",
              marginTop: "10px"
            }}
          >
            <CustomDropdown
              noLiPadding
              buttonText="Sort by"
              buttonProps={{
                className: classes.navLink,
                color: "primary"
              }}
              //   buttonIcon={AcUnitIcon}
              dropdownList={[
                <Button key="date"> Date </Button>
                // <Link to="/signup-page" className={classes.dropdownLink}>
                //   SignUp
                // </Link>
              ]}
            />{" "}
          </GridItem>{" "}
        </GridContainer>{" "}
      </GridItem>
      <GridItem>
        <List className={classes.list}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://material-ui.com/static/images/avatar/1.jpg"
              />
            </ListItemAvatar>{" "}
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Ali Connors{" "}
                  </Typography>{" "}
                  {" — I'll be in your neighborhood doing errands this…"}{" "}
                </React.Fragment>
              }
            />{" "}
          </ListItem>{" "}
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src="https://material-ui.com/static/images/avatar/2.jpg"
              />
            </ListItemAvatar>{" "}
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    to Scott, Alex, Jennifer{" "}
                  </Typography>{" "}
                  {" — Wish I could come, but I'm out of town this…"}{" "}
                </React.Fragment>
              }
            />{" "}
          </ListItem>{" "}
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https://material-ui.com/static/images/avatar/3.jpg"
              />
            </ListItemAvatar>{" "}
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Sandra Adams{" "}
                  </Typography>{" "}
                  {" — Do you have Paris recommendations? Have you ever…"}{" "}
                </React.Fragment>
              }
            />{" "}
          </ListItem>{" "}
        </List>{" "}
      </GridItem>
    </GridContainer>
  );
}
