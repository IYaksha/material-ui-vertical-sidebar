import React from "react";
import { Paper, Button, Typography, makeStyles, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from "@material-ui/core";
import SimpleTable from "../table/SimpleTable";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const UserSshKeysStyles = makeStyles({
  root: {
    padding: "1rem",
    display: "flex",
    marginTop: 2,
  },
  rootHeader: {
    flex: 1,
  },
  sshButtonStyles: {
    marginRight: 8,
  },
  sshKeysTable: {
    marginTop: -8,
  }
})

const UserSshKeys = () => {
  const classes = UserSshKeysStyles();
  const actionControls = () => {
    return (
      <React.Fragment>
        <IconButton size="small"><EditIcon /></IconButton>
        <IconButton size="small"><DeleteIcon /></IconButton>
      </React.Fragment>
    )
  }
  return (
    <Paper square elevation={4}>
      <UserSshKeysTitle classes={classes} />
      <SimpleTable 
        className={classes.sshKeysTable}
        headers={["Name", "Actions"]} 
        data={[
          ["Manjaro-G", actionControls()],
          ["Nix-K", actionControls()]
        ]} 
      />
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

export default UserSshKeys;