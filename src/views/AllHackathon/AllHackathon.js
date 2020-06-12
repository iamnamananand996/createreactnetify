import React, { useEffect } from "react";
import MiniDrawer from "components/Sidenav/Sidenav";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import "./AllHackathon.scss";
import Info from "components/Typography/Info";
import CustomTabs from "components/CustomTabs/CustomTabs";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
//import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { API } from "backend";

const useStyle = makeStyles(theme => ({
  list: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  }
}));

const AllHackathon = () => {
  const classes = useStyle();
  const hackathons = useSelector(store => store.hackathons.hackathons);
  const dispatch = useDispatch();

  const getAllHackathons = () => {
    axios
      .get(`${API}/competitions`)
      .then(response => {
        dispatch({
          type: "GET_ALL_HACKATHONS",
          payload: response.data
        });
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getAllHackathons();
  }, []);

  return (
    <MiniDrawer>
      <GridContainer
        style={{
          justifyContent: "center"
        }}
      >
        <GridItem xs={12} sm={12} md={12}>
          <div className="All-Hackathons">
            <h1 style={{ paddingBottom: "15px", paddingLeft: "15px" }}>
              <strong>Competitions</strong>
            </h1>
            <Info>
              <p style={{ paddingBottom: "15px", paddingLeft: "15px" }}>
                <strong>
                  Grow your data science skills by competing in our exciting
                  competitions.Find help in<br></br>the Documentation or learn
                  about InClass competitions.
                </strong>
              </p>
            </Info>
            <GridItem>
              {hackathons
                .filter((hackathon, index) => index < 1)
                .map(hackathon => {
                  const HProfile = { ...hackathon.HProfile };
                  const { overview } = HProfile;
                  return (
                    <Link
                      to={`/hackathons/${hackathon._id}`}
                      key={hackathon._id}
                    >
                      <List className={classes.list} key={hackathon.ID}>
                        <ListItem alignItems="flex-start">
                          <ListItemAvatar>
                            <img
                              height="100"
                              width="150"
                              alt={hackathon.HName}
                              src={hackathon.HImage}
                            />
                          </ListItemAvatar>{" "}
                          <ListItemText
                            style={{ padding: "15px" }}
                            primary={hackathon.HName}
                            secondary={
                              <React.Fragment>
                                <Typography
                                  component="span"
                                  variant="body2"
                                  className={classes.inline}
                                  color="textPrimary"
                                >
                                  {String(overview).slice(0, 300)} ...{" "}
                                </Typography>{" "}
                              </React.Fragment>
                            }
                          />{" "}
                        </ListItem>{" "}
                        {/* <Divider variant="inset" component="li" /> */}
                      </List>
                    </Link>
                  );
                })}
            </GridItem>
          </div>
        </GridItem>
        <hr></hr>
        <GridItem>
          <h3>
            <strong>All Hackathons</strong>
          </h3>
        </GridItem>
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <CustomTabs
            headerColor="danger"
            tabs={[
              {
                tabName: "Active",
                tabContent: (
                  <span>
                    <GridContainer>
                      <GridItem>
                        {hackathons.map(hackathon => {
                          const HProfile = {
                            ...hackathon.HProfile
                          };
                          return (
                            <Link
                              to={`/hackathons/${hackathon._id}`}
                              key={hackathon._id}
                            >
                              <List className={classes.list} key={hackathon.ID}>
                                <ListItem alignItems="flex-start">
                                  <ListItemAvatar>
                                    <img
                                      height="100"
                                      width="150"
                                      alt={hackathon.HName}
                                      src={hackathon.HImage}
                                    />
                                  </ListItemAvatar>{" "}
                                  <ListItemText
                                    style={{ padding: "15px" }}
                                    primary={hackathon.HName}
                                    secondary={
                                      <React.Fragment>
                                        <Typography
                                          component="span"
                                          variant="body2"
                                          className={classes.inline}
                                          color="textPrimary"
                                        >
                                          {String(HProfile.overview).slice(
                                            0,
                                            300
                                          )}{" "}
                                          ...{" "}
                                        </Typography>{" "}
                                      </React.Fragment>
                                    }
                                  />{" "}
                                </ListItem>{" "}
                                <Divider variant="inset" component="li" />
                              </List>
                            </Link>
                          );
                        })}
                      </GridItem>
                    </GridContainer>
                  </span>
                )
              },
              {
                tabName: "Completed",
                tabContent: (
                  <span>
                    <p>Completed Hackathons Coming Soon!</p>
                  </span>
                )
              }
            ]}
          />
        </GridItem>
      </GridContainer>
    </MiniDrawer>
  );
};

export default AllHackathon;
