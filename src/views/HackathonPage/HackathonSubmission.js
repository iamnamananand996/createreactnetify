/* eslint-disable react/prop-types */
import React, { useState } from "react";
import axios, { post } from "axios";
import { DropzoneArea } from "material-ui-dropzone";
import { Button } from "@material-ui/core";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import CustomInput from "../../components/CustomInput/CustomInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import CustomizedTables from "../../components/Table/Table";
import SnackbarContent from "components/Snackbar/SnackbarContent";

export default function HackathonSubmission(props) {
  const [selectedFile, setSelectedFile] = useState([]);
  const [comment, setComment] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [task, setTask] = useState("");
  const [currentState, setCurrentState] = useState("");
  const [result, setResult] = useState({});
  const [status, setStatus] = useState("");
  const [total, setTotal] = useState(Number);
  console.log(props);
  console.log("props", props.hackathon.HREFName);

  const handleCommentChange = event => {
    setComment(event.target.value);
  };

  const onFileUpload = event => {
    event.preventDefault();
    setError("");
    setMessage("");
    console.log(selectedFile[0]);
    fileUpload(selectedFile[0], comment)
      .then(response => {
        console.log(response.data);
        if (response.data.message) {
          setTask(response.data.task_id);
          setMessage(response.data.message);
          getStatus(response.data.task_id);
        }
        if (response.data.error) {
          setError(response.data.error);
        }
      })
      .catch(err => console.log(err));
  };

  const getStatus = taskId => {
    axios
      .get(`https://futurekrux.com/tasks/${taskId}`)
      .then(response => {
        console.log(response.data);
        if (response.data.error) {
          setError(response.data.error);
        }
        if (response.data.state === "STARTED") {
          setMessage("");
          setStatus(response.data.status);
          setCurrentState(response.data.state);
          setTimeout(getStatus(taskId), 1000);
        }
        if (response.data.state === "PROGRESS") {
          setMessage("");
          setStatus(response.data.status);
          setStatus(response.data.status);
          setCurrentState(response.data.state);
          setTimeout(getStatus(taskId), 1000);
        }
        if (response.data.state === "SUCCESS") {
          setMessage("");
          setResult(response.data.result);
          setCurrentState(response.data.state);
          setStatus(response.data.status);
          setTotal(response.data.total);
          window.location.reload();
        }
      })
      .catch(err => console.log(err));
  };

  const fileUpload = (file, comment) => {
    const url = `https://futurekrux.com/submissions/${props.hackathon.HREFName}`;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("comment", comment);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    console.log(formData);
    return post(url, formData, config);
  };

  return (
    <GridContainer>
      <GridItem>
        <h3>
          {" "}
          <strong> Make your submission </strong>
        </h3>
        <form>
          <DropzoneArea
            acceptedFiles={[
              ".csv",
              "application/vnd.ms-excel",
              "text/csv",
              ".xlsx"
            ]}
            onChange={files => setSelectedFile(files)}
            maxFileSize={5242880}
          />
          <div>
            <CustomInput
              labelText="Add your file comment here"
              id="fileDesc"
              value={comment}
              onChange={handleCommentChange}
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                type: "text",
                endAdornment: <InputAdornment position="end"> </InputAdornment>
              }}
            />
          </div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{
              marginTop: "10px",
              float: "right"
            }}
            onClick={onFileUpload}
          >
            Submit
          </Button>
        </form>
      </GridItem>
      <GridItem
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        style={{ margin: "10px" }}
      >
        {status && (
          <SnackbarContent
            message={
              <span>
                {" "}
                <b>
                  {" "}
                  {status}
                  <span>{result && <p>{JSON.stringify(result)}</p>}</span>
                </b>
              </span>
            }
            close
            color={status === "STARTED" ? "danger" : "success"}
            icon="success_outline"
          />
        )}
      </GridItem>
      <GridItem
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        style={{ margin: "10px" }}
      >
        {message && (
          <SnackbarContent
            message={
              <span>
                {" "}
                <b>
                  {" "}
                  {message} and task Id is {task}{" "}
                </b>
              </span>
            }
            close
            color="info"
            icon="info_outline"
          />
        )}
      </GridItem>
      <GridItem
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        style={{ margin: "10px" }}
      >
        {error && (
          <SnackbarContent
            message={
              <span>
                {" "}
                <b> {error} </b>
              </span>
            }
            close
            color="danger"
            icon="info_outline"
          />
        )}
      </GridItem>
      <GridItem>
        <h3>
          {" "}
          <strong> My Submission History </strong>{" "}
        </h3>
      </GridItem>
      <CustomizedTables hackathon={props.hackathon} />
    </GridContainer>
  );
}
