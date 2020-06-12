/* eslint-disable react/prop-types */
import React from "react";
import GridContainer from "components/Grid/GridContainer";
//import { Box, Table } from "@material-ui/core";
import GridItem from "components/Grid/GridItem";
import NavPills from "components/NavPills/NavPills";
//import CustomizedTables from "components/Table/Table";
import FinalLeaderboard from "components/FinalLeaderboard/HackFinal";

export default function HackathonLeaderboard(props) {
  console.log(props.hackathon);
  return (
    <GridContainer style={{ width: "90vw" }}>
      <GridItem md={12}>
        <h3>
          This leaderboard is calculated with approximately 30% of the test
          data.
        </h3>
        <h4>
          The Final result will be based on the other 70%, so the final
          standings may be different
        </h4>
      </GridItem>
      <GridItem md={12}>
        <NavPills
          color="primary"
          tabs={[
            {
              tabButton: "Leaderboard",
              tabContent: (
                <span>
                  <FinalLeaderboard hackathon={props.hackathon} />
                </span>
              )
            }
          ]}
        />
      </GridItem>
    </GridContainer>
  );
}
