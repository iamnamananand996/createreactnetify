import React from "react";
import MiniDrawer from "components/Sidenav/Sidenav";
import classNames from "classnames";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardFooter from "components/Card/CardFooter";
import Button from "components/CustomButtons/Button";
import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import team1 from "assets/img/faces/avatar.jpg";
import { makeStyles } from "@material-ui/core";
//import CustomizedTables from "components/Table/Table";
import { Link } from "react-router-dom";
import CustomTable from "components/CustomTable/CustomTable";

const useStyles = makeStyles(styles);
const UserProfile = () => {
  const classes = useStyles();
  const imageClasses = classNames(classes.imgRaised, classes.imgFluid);
  return (
    <MiniDrawer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={3}>
          <Card plain>
            <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
              <img src={team1} alt="..." className={imageClasses} />
            </GridItem>
            <CardFooter className={classes.justifyCenter}>
              <Button justIcon color="transparent" className={classes.margin5}>
                <i
                  className={classes.socials + " fab fa-facebook"}
                  style={{ color: "#3b5998" }}
                />
              </Button>
              <Button justIcon color="transparent" className={classes.margin5}>
                <i
                  className={classes.socials + " fab fa-linkedin"}
                  style={{ color: "#0e76a8" }}
                />
              </Button>
              <Button justIcon color="transparent" className={classes.margin5}>
                <i className={classes.socials + " fab fa-google"} />
              </Button>
              <Button justIcon color="transparent" className={classes.margin5}>
                <i
                  className={classes.socials + " fab fa-github"}
                  style={{ color: "#211F1F" }}
                />
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={9}>
          <Card>
            <CardBody>
              <h3>Name: Analytics India Magazine</h3>
              <h4>Location: Bangalore</h4>
              <h5>Expierence: 1 year</h5>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  border: "1px solid black",
                  alignItems: "center",
                  padding: "10px",
                  backgroundColor: "#dcdbd6"
                }}
              >
                <span
                  style={{
                    borderRight: "1px solid black",
                    padding: "10px"
                  }}
                >
                  Level: Rookie
                </span>
                <span
                  style={{ borderRight: "1px solid black", padding: "10px" }}
                >
                  Participation: 2
                </span>
                <span style={{ padding: "10px" }}>Global Rank: 1</span>
              </div>
            </CardBody>
            <CardFooter className={classes.justifyCenter}>
              <Button color="primary" className={classes.margin5}>
                share your profile
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem>
          <h4 style={{ color: "#5C6274" }}>
            MachineHacker since May 2018 | Last active :{" "}
          </h4>
          <p style={{ border: "1px solid #5C6274", padding: "9px" }}>
            User Bio ...
          </p>
          <Button color="rose">Top Rankings</Button>
          <CustomTable />
        </GridItem>
        <GridItem
          style={{
            paddingTop: "10px",
            paddingBottom: "15px",
            marginTop: "15px"
          }}
        >
          <u>
            <Link to="/">See all rankings</Link>
          </u>
        </GridItem>
      </GridContainer>
    </MiniDrawer>
  );
};

export default UserProfile;
