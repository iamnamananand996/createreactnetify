import React from "react";
import { makeStyles } from "@material-ui/core/styles";
//import classNames from "classnames";
import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import GridContainer from "components/Grid/GridContainer";
import HackathonCard from "./HackathonCard";
import { useSelector } from "react-redux";

const useStyles = makeStyles(styles);

const HackathonList = () => {
  const classes = useStyles();
  const hackathons = useSelector(store => store.hackathons.hackathons);

  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Here is our Hackathons!</h2>
      <div>
        <GridContainer>
          {hackathons
            .filter((hackathon, index) => index < 6)
            .map(hackathon => {
              return (
                <HackathonCard key={hackathon._id} hackathon={hackathon} />
              );
            })}
        </GridContainer>
      </div>
    </div>
  );
};

export default HackathonList;
