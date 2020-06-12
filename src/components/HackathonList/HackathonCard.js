/* eslint-disable react/prop-types */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import GridItem from "components/Grid/GridItem";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
    marginBottom: "6%"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

const HackathonCard = props => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const halfHackathonDesc = (start, end) => {
    return props.hackathon.HProfile.overview.slice(start, end);
  };

  return (
    <GridItem xs={12} sm={6} md={4}>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              <img
                src="https://www.machinehack.com/wp-content/uploads/2018/01/machine-hack-logo-19.png"
                width="27"
                alt="machine hack"
              />
            </Avatar>
          }
          //   action={
          //     <IconButton aria-label="settings">
          //       <MoreVertIcon />
          //     </IconButton>
          //   }
          title={props.hackathon.HName}
          subheader={props.hackathon.HStartDate}
        />
        <CardMedia
          className={classes.media}
          image={props.hackathon.HImage}
          title={props.hackathon.HName}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {halfHackathonDesc(0, 100)} ...
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button aria-label="add to favorites">
            <Link to={`/hackathons/${props.hackathon._id}`}>
              Go to Hackathon
            </Link>
          </Button>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {/* <Typography paragraph>Method:</Typography> */}
            <Typography paragraph>
              {/* Heat 1/2 cup of the broth in a pot until simmering, add saffron
              and set aside for 10 minutes. */}
              {halfHackathonDesc(100)}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </GridItem>
  );
};

export default HackathonCard;
