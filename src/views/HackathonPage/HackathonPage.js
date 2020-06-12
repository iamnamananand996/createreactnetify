/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.js";
import axios from "axios";

import "./HackathonPage.scss";
import HackathonHome from "./HackathonHome";
import HackathonData from "./HackathonData";
import HackathonDisc from "./HackathonDisc";
import HackathonSubmission from "./HackathonSubmission";
import HackathonLeaderboard from "./HackathonLeaderboard";
import MiniDrawer from "components/Sidenav/Sidenav";
import Footer from "components/Footer/Footer";
import { isAuthenticated } from "auth/helper";
// import { Button } from "@material-ui/core";
import Button from "components/CustomButtons/Button.js";
//import { useSelector } from "react-redux";
import { API } from "backend";
//import TemporaryDrawer from "components/Sidenav/Sidenav";

// const useStyles = makeStyles(styles);
const HackathonPage = props => {
  // const classes = useStyles();
  //console.log(props.match.params.hackathonId);
  //const hackathonId = props.match.params.hackathonId;
  // const hackathons = useSelector(store => store.hackathons.hackathons);
  const [hackathon, setHackathon] = useState({});
  // const currentHackathon = hackathons.filter(
  //   hackathons => hackathons._id === hackathonId
  // );
  // console.log(currentHackathon);
  // const hackathonObject = currentHackathon[0];
  // console.log(hackathonObject);
  const getHackathon = () => {
    axios
      .get(`${API}/hackathon/${props.match.params.hackathonId}`)
      .then(response => {
        console.log("response", response);
        setHackathon(response.data.hackathon);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getHackathon();
  }, []);

  const goToLogin = () => {
    return props.history.push("/login-page");
  };

  return (
    <MiniDrawer>
      <GridContainer>
        {!isAuthenticated() && (
          <GridItem
            xs={12}
            sm={12}
            md={12}
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "-18px"
            }}
          >
            <Button color="primary" size="lg" onClick={goToLogin}>
              Participate
            </Button>
          </GridItem>
        )}
        <GridItem xs={12} sm={12} md={12}>
          <img
            src={`${hackathon.HImage}`}
            style={{
              height: "36vh",
              width: "100%",
              borderRadius: "6px"
            }}
            alt="hackathon"
          />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={3}>
          <h4>
            <strong>Status: Active/Expire</strong>
          </h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <h4>
            <strong>Days Remaining:</strong>
          </h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={7}>
          <CustomLinearProgress
            variant="determinate"
            color="primary"
            value={50}
            style={{
              height: "12px",
              marginTop: "17px",
              marginRight: "10px"
            }}
          />
        </GridItem>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={12}>
            {isAuthenticated() && (
              <CustomTabs
                headerColor="danger"
                tabs={[
                  {
                    tabName: "Home",
                    tabContent: <HackathonHome hackathon={hackathon} />
                  },
                  {
                    tabName: "Data",
                    tabContent: <HackathonData />
                  },
                  {
                    tabName: "Discussion",
                    tabContent: <HackathonDisc />
                  },
                  {
                    tabName: "Submission",
                    tabContent: <HackathonSubmission hackathon={hackathon} />
                  },
                  {
                    tabName: "Leaderboard",
                    tabContent: <HackathonLeaderboard hackathon={hackathon} />
                  }
                ]}
              />
            )}
            {!isAuthenticated() && (
              <CustomTabs
                headerColor="danger"
                tabs={[
                  {
                    tabName: "Home",
                    tabContent: <HackathonHome hackathon={hackathon} />
                  },
                  {
                    tabName: "Data",
                    tabContent: <HackathonData />
                  },
                  {
                    tabName: "Discussion",
                    tabContent: <HackathonDisc />
                  },
                  {
                    tabName: "Leaderboard",
                    tabContent: <HackathonLeaderboard hackathon={hackathon} />
                  }
                ]}
              />
            )}
          </GridItem>
        </GridContainer>
      </GridContainer>
      {/* </div> */}
      <Footer />
    </MiniDrawer>
  );
};

export default HackathonPage;
