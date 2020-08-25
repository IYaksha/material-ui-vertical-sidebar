import React from "react";
import { Paper, Button, Typography, makeStyles, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from "@material-ui/core";
import SimpleTable from "../table/SimpleTable";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const UserTeamsStyles = makeStyles({
  root: {
    padding: "1rem",
    display: "flex",
  },
  rootHeader: {
    flex: 1,
  },
  teamsTable: {
    marginTop: -8,
  }
})

const UserTeams = () => {
  const classes = UserTeamsStyles();
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
      <TeamsTitle classes={classes} />
      <SimpleTable 
        className={classes.teamsTable}
        headers={["Name", "Email", "Role", "Actions"]} 
        data={[
          ["Akshay Mahajan", "akshay.m@serverguy.com", "ADMIN", actionControls()],
          ["Zeeshan Jamal", "zeeshan.j@serverguy.com", "OWNER", actionControls()]
        ]} 
      />
    </Paper>
  );
}

const TeamsTitle = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.rootHeader}>
        <Typography variant="h5">Members</Typography>
      </div>
      <div>
        <Button variant="contained" size="small" color="primary">Invite</Button>
      </div>  
    </div>
  )
}

export default UserTeams;