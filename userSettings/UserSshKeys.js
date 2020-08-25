import React from "react";
import { Paper, Button, Typography, makeStyles } from "@material-ui/core";

const UserSshKeysStyles = makeStyles({
  root: {
    padding: "1rem",
    display: "flex",
  },
  rootHeader: {
    flex: 1,
  },
  sshButtonStyles: {
    marginRight: 8,
  }
})

const UserSshKeys = () => {
  const classes = UserSshKeysStyles();
  return (
    <Paper square elevation={4}>
      <UserSshKeysTitle classes={classes} />
      <UserSshKeysTable classes={classes} />
    </Paper>
  );
}

const UserSshKeysTitle = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.rootHeader}>
        <Typography variant="h5">SSH Keys</Typography>
      </div>
      <div>
        <Button className={classes.sshButtonStyles} variant="contained" size="small" color="primary">Generate</Button>
        <Button variant="contained" size="small" color="secondary">Add</Button>
      </div>  
    </div>
  )
}

const UserSshKeysTable = ({ classes }) => {
  return (
    <div>

    </div>
  );
}

export default UserSshKeys;