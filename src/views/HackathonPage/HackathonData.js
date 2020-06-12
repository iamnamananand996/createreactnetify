import React from "react";
// import { withStyles } from "@material-ui/core/styles";
// import { green } from "@material-ui/core/colors";
//import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
// import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
// import CheckBoxIcon from "@material-ui/icons/CheckBox";
// import Favorite from "@material-ui/icons/Favorite";
// import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import "./HackathonData.scss";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
// import { Button } from "@material-ui/core";
// import styles from "assets/jss/material-kit-react/views/components/buttonStyle.js";
//import { Button } from "@material-ui/core";

// const useStyles = makeStyles(styles);

// const GreenCheckbox = withStyles({
//   root: {
//     color: green[400],
//     "&$checked": {
//       color: green[600]
//     }
//   },
//   checked: {}
// })(props => <Checkbox color="default" {...props} />);

export default function HackathonData() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true
  });
  // const classes = useStyles();

  const handleChange = event => {
    setState({
      ...state,
      [event.target.name]: event.target.checked
    });
  };
  return (
    <GridContainer style={{ border: "2px solid black" }}>
      <GridItem xs={12} sm={12} md={12} lg={12}>
        {/* <div style={{ border: "1px solid black" }}> */}
        {/* <div style={{ padding: "10px" }}> */}
        <h3 className="hackathon-data-tilte">Files</h3>
        <ul>
          <li>
            <a href="https://docs.google.com/spreadsheets/d/1inWBmJDSG4D6NKAH0tf9uS8SlWAWtRhgrnWdkzo_dGE/edit#gid=1115838130">
              {" "}
              train.csv{" "}
            </a>
          </li>
          <li>
            <a href="https://docs.google.com/spreadsheets/d/1inWBmJDSG4D6NKAH0tf9uS8SlWAWtRhgrnWdkzo_dGE/edit#gid=1115838130">
              sample_submission.csv
            </a>
          </li>
          <li>
            <a href="https://docs.google.com/spreadsheets/d/1inWBmJDSG4D6NKAH0tf9uS8SlWAWtRhgrnWdkzo_dGE/edit#gid=1115838130">
              {" "}
              test.csv{" "}
            </a>
          </li>
        </ul>
      </GridItem>
      <GridItem>
        <h3 className="hackathon-data-tilte"> Columns </h3>
        <ul>
          <li>
            <p>id - ...</p>
          </li>
          <li>
            <p>comment_text - ...</p>
          </li>
        </ul>
      </GridItem>
      <GridItem>
        <h3 className="hackathon-data-tilte"> Data Preview </h3>
      </GridItem>
      <GridItem>
        <h3 className="hackathon-data-tilte"> Usage </h3>
      </GridItem>
      <GridItem>
        <p>
          the dataset is released under CCO, with the underlying comment text
          being governed<br></br>
          <span style={{ color: "blue" }}>by Wikipedias CC-SA-3.0</span>
        </p>
        <p>
          {`The "Unintended Bias in Toxicity" dataset is released under CCO, as is`}
          <br></br>
          <span style={{ color: "blue" }}>the underlying comment text</span>
        </p>
      </GridItem>
      <GridItem>
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedB}
              onChange={handleChange}
              name="checkedB"
              color="primary"
            />
          }
          label="Agree Terms & Conditions"
        />
      </GridItem>
      <GridItem style={{ marginTop: "10px" }}>
        <button
          style={{
            backgroundColor: "#2673ed",
            color: "white",
            padding: "12px",
            borderRadius: "12px",
            border: "none",
            width: "120px",
            fontSize: "18px",
            marginBottom: "10px"
          }}
        >
          Download
        </button>
      </GridItem>
    </GridContainer>
  );
}
