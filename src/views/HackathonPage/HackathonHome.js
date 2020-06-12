/* eslint-disable react/prop-types */
import React from "react";

// @material-ui/core components
//import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";
import Filter1Icon from "@material-ui/icons/Filter1";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

// import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";
//import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
//import { Divider } from "@material-ui/core";
import "./HackathonHome.scss";
//import Footer from "components/Footer/Footer";

// const useStyles = makeStyles(styles);
const HackathonHome = props => {
  const today = new Date();
  console.log(props);
  const { hackathon } = props;
  const profile = { ...hackathon.HProfile };
  console.log(profile);
  const HomeBoilerPlate = () => (
    <CardBody>
      <div>
        <strong> Start Date : </strong>
        <span>{hackathon.HStartDate}</span>
      </div>
      <div>
        <strong> Hackathon Level : </strong>
        <span>{hackathon.HLevel}</span>
      </div>
      <div>
        <strong> Total Registration : </strong>
        <span>{hackathon.HUsers}</span>
      </div>
    </CardBody>
  );

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12} lg={12}>
        <NavPills
          color="rose"
          horizontal={{
            tabsGrid: {
              xs: 12,
              sm: 4,
              md: 4,
              lg: 2
            },
            contentGrid: {
              xs: 12,
              sm: 8,
              md: 8,
              lg: 10
            }
          }}
          tabs={[
            {
              tabButton: "Overview",
              tabIcon: Dashboard,
              tabContent: (
                <div id="Overview">
                  <div
                    style={{
                      border: "1px solid black",
                      borderRadius: "9px"
                    }}
                  >
                    <HomeBoilerPlate />
                  </div>
                  <div>
                    <h3>
                      <strong>Problem Description</strong>
                    </h3>
                    <p>{profile.overview}</p>
                  </div>
                  <hr></hr>
                  <div>
                    <h3>
                      <strong>Problem Statement</strong>
                    </h3>
                    <p>
                      {" "}
                      {`Contrary to popular belief, Lorem Ipsum is not simply
                      random text.It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years
                      old.Richard McClintock, a Latin professor at Hampden -
                      Sydney College in Virginia, looked up one of the more
                      obscure Latin words, consectetur, from a Lorem Ipsum
                      passage, and going through the cites of the word in
                      classical literature, discovered the undoubtable
                      source.Lorem Ipsum comes from sections 1.10 .32 and 1.10
                      .33 of "de Finibus Bonorum et Malorum"(The Extremes of
                      Good and Evil) by Cicero, written in 45 BC.This book is a
                      treatise on the theory of ethics, very popular during the
                      Renaissance.The first line of Lorem Ipsum, "Lorem ipsum
                      dolor sit amet..", comes from a line in section 1.10 .32.
                      The standard chunk of Lorem Ipsum used since the 1500 s is
                      reproduced below for those interested.Sections 1.10 .32
                      and 1.10 .33 from "de Finibus Bonorum et Malorum" by
                      Cicero are also reproduced in their exact original form,
                      accompanied by English versions from the 1914 translation
                      by H.Rackham.`}
                    </p>
                  </div>
                  <hr></hr>
                  <div>
                    <h3>
                      <strong>Tips and Tricks...</strong>
                    </h3>
                    <p>
                      {" "}
                      {`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`}
                    </p>
                  </div>
                  <hr></hr>
                  <div>
                    <h3>
                      <strong>Starter solution/Resources...</strong>
                    </h3>
                  </div>
                  <div>
                    <h3>
                      <strong>Additional Content...</strong>
                    </h3>
                  </div>
                </div>
              )
            },
            {
              tabButton: "Rules",
              tabIcon: Schedule,
              tabContent: (
                <React.Fragment>
                  <div
                    style={{
                      border: "1px solid black",
                      borderRadius: "9px"
                    }}
                  >
                    <HomeBoilerPlate />
                  </div>{" "}
                  <div>
                    <h3>
                      <strong>One account per participant</strong>{" "}
                    </h3>{" "}
                    <p>{profile.rules}</p>{" "}
                  </div>{" "}
                  <div>
                    <h3>
                      <strong> No private sharing outside teams </strong>{" "}
                    </h3>{" "}
                    <p> {`Privately Sharing code ...`} </p>{" "}
                  </div>{" "}
                  <div>
                    <h3>
                      <strong> Submission Limits... </strong>{" "}
                    </h3>{" "}
                    <p> {`You may submit a...`} </p>{" "}
                  </div>{" "}
                  <div>
                    <h3>
                      <strong> Competition Timeline </strong>{" "}
                    </h3>{" "}
                    <div>
                      <strong> Start Date: </strong>{" "}
                      <span>
                        {" "}
                        {today.getDate()}/{today.getMonth()}/
                        {today.getFullYear()}{" "}
                      </span>{" "}
                      <strong> End Date: </strong>{" "}
                      <span>
                        {" "}
                        {today.getDate()}/{today.getMonth() + 6}/
                        {today.getFullYear()}{" "}
                      </span>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div>
                    <h3>
                      <strong> Competition-Specific Terms </strong>{" "}
                    </h3>{" "}
                    <div>
                      <strong>WINNER LICENSE TYPE : </strong>
                      <span>Open Source</span>
                    </div>
                    <div>
                      <strong>DATA ACCESS AND USE : </strong>
                      <span>Any purpose</span>
                    </div>
                  </div>{" "}
                  <div>
                    <h3>
                      <strong> ELIGIBILITY. ... </strong>{" "}
                    </h3>{" "}
                  </div>{" "}
                </React.Fragment>
              )
            },
            {
              tabButton: "Evaluation",
              tabIcon: List,
              tabContent: (
                <React.Fragment>
                  <div
                    style={{
                      border: "1px solid black",
                      borderRadius: "9px",
                      marginBottom: "21px"
                    }}
                  >
                    <HomeBoilerPlate />
                  </div>{" "}
                  <div>
                    <p>
                      {/* Submission are evaluated on ...<strong>Metric</strong> */}
                      {profile.evaluation}
                    </p>
                  </div>
                  <h3>
                    <strong>Explanation ...</strong>
                  </h3>
                  <div>
                    <h3>
                      <strong>Submission File</strong>
                    </h3>
                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo
                      consequat.Duis aute irure dolor in reprehenderit in
                      voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur.Excepteur sint occaecat cupidatat non proident,
                      sunt in culpa qui officia deserunt mollit anim id est
                      laborum.{" "}
                    </p>
                    <pre>
                      {" "}
                      {`
import numpy as np
import matplotlib.pyplot as plt 
  
def estimate_coef(x, y): 
    # number of observations/points 
    n = np.size(x) 
  
    # mean of x and y vector 
    m_x, m_y = np.mean(x), np.mean(y) 
  
    # calculating cross-deviation and deviation about x 
    SS_xy = np.sum(y*x) - n*m_y*m_x 
    SS_xx = np.sum(x*x) - n*m_x*m_x 
  
    # calculating regression coefficients 
    b_1 = SS_xy / SS_xx 
    b_0 = m_y - b_1*m_x 
  
    return(b_0, b_1) `}{" "}
                    </pre>
                  </div>
                </React.Fragment>
              )
            },
            {
              tabButton: "Prize",
              tabIcon: Filter1Icon,
              tabContent: (
                <span>
                  <div
                    style={{
                      border: "1px solid black",
                      borderRadius: "9px",
                      marginLeft: "1px",
                      marginBottom: "21px"
                    }}
                  >
                    <HomeBoilerPlate />
                  </div>
                  <div
                    style={{
                      marginLeft: "1px"
                    }}
                  >
                    {/* <p>Leaderboard Prizes :</p> */}
                    <p>{profile.prize}</p>
                    {/* <p>2nd place : $12,000</p>
                    <p>3rd place : $8,000</p> */}
                    <p>
                      {`Prizes are subject to fullfillment of Winners Obligations
                      as specified in the competition's rules`}
                    </p>
                  </div>
                </span>
              )
            }
          ]}
        />{" "}
      </GridItem>
    </GridContainer>
  );
};

export default HackathonHome;
