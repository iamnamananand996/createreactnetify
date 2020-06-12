/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
//import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import { API } from "backend";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700
  }
});

const FinalLeaderboard = props => {
  const classes = useStyles();
  const [leaderBoard, setLeaderBoard] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`${API}/leaderboard/${props.hackathon.HREFName}`)
      .then(response => {
        console.log(response);
        if (response.data.error) {
          setError(response.data.error);
        } else {
          setLeaderBoard(response.data.leaderboard);
        }
      })
      .catch(err => console.log(err));
  }, [props.hackathon.HREFName]);

  return (
    <Paper>
      {leaderBoard.length > 0 ? (
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Rank</StyledTableCell>
              <StyledTableCell align="right">Name</StyledTableCell>
              <StyledTableCell align="right">Profile</StyledTableCell>
              <StyledTableCell align="right">Best Score</StyledTableCell>
              <StyledTableCell align="right">Latest Score</StyledTableCell>
              <StyledTableCell align="right">
                Date of Submission
              </StyledTableCell>
              <StyledTableCell align="right">Time</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leaderBoard
              // .filter((row, index) => index < 10)
              .map((row, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell component="th" scope="row">
                    {index + 1}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.Name}</StyledTableCell>
                  <StyledTableCell align="right">
                    <img
                      src={row.ImageUrl}
                      width="50"
                      alt={row.Name}
                      style={{ borderRadius: "50%" }}
                    />
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.BestScore.toFixed(5)}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.LatestScore.toFixed(5)}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.DateOfSubmission}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.Time.slice(0, 8)}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      ) : (
        "This hackathon doesn't have leaderboard"
      )}
    </Paper>
  );
};

export default FinalLeaderboard;
