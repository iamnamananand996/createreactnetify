/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
//import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { useSelector } from "react-redux";
import axios from "axios";
import { API } from "backend";
//import { Paper } from "@material-ui/core";
//import Paper from "@material-ui/core/Paper";

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
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9)
// ];

const useStyles = makeStyles({
  table: {
    minWidth: 700
  }
});

export default function CustomizedTables(props) {
  const classes = useStyles();
  const user = useSelector(store => store.user.user);
  const [submissions, setSubmissions] = useState([]);
  console.log(user);
  console.log(props.hackathon);

  useEffect(() => {
    getSubmission(props.hackathon.HREFName, user._id);
  }, []);

  const getSubmission = (hackathonName, userId) => {
    axios
      .get(`${API}/submissions/info/${hackathonName}/${userId}`)
      .then(response => {
        console.log(response.data);
        setSubmissions(response.data.submissions);
      })
      .catch(err => console.log(err));
  };

  return (
    // <TableContainer component={Paper}>
    <Table className={classes.table} aria-label="customized table">
      <TableHead>
        <TableRow>
          <StyledTableCell>File</StyledTableCell>
          <StyledTableCell align="right">Submitted On</StyledTableCell>
          <StyledTableCell align="right">Comment&nbsp;</StyledTableCell>
          <StyledTableCell align="right">Score&nbsp;</StyledTableCell>
          {/* <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell> */}
        </TableRow>
      </TableHead>
      <TableBody>
        {submissions.map(row => (
          <StyledTableRow key={row.filename}>
            <StyledTableCell component="th" scope="row">
              {row.filename}
            </StyledTableCell>
            <StyledTableCell align="right">{row.submitted_on}</StyledTableCell>
            <StyledTableCell align="right">{row.comment}</StyledTableCell>
            <StyledTableCell align="right">{row.score}</StyledTableCell>
            {/* <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
    // </TableContainer>
  );
}
