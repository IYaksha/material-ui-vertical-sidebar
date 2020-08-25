import React from 'react';
import { Grid, InputBase, IconButton, Paper } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useHeaderStyles from "../styles/headerStyles";
import CustomizedDropdown from "../dropdown/customizedDropdown";
import NewServerIcon from '@material-ui/icons/Language';
import StoreIcon from '@material-ui/icons/Store';

const RootHeader = () => {
  const classes = useHeaderStyles();
  return (
    <Paper square elevation={3}>
      <Grid container>
        <Grid item xs={8}>
          <RootSearchBar classes={classes} />
        </Grid>
        <Grid item xs={4}>
          <AdditionalHeaderOptions classes={classes} />
        </Grid>
      </Grid>
    </Paper>
  );
}

const RootSearchBar = ({ classes }) => {
  return (
    <div className={classes.rootHeaderSearch}>
      <IconButton color="primary" aria-label="menu">
        <SearchIcon />
      </IconButton>
      <InputBase
        className={classes.inputBaseStyles}
        placeholder="Search your servers"
      />
    </div>
  )
}

const AdditionalHeaderOptions = ({ classes }) => {
  const createOptions = [
    { primaryText: "Server", secondaryText: "Create new server", hasAvatar: true, avatarIcon: <NewServerIcon /> },
    { primaryText: "Migrate", secondaryText: "Migrate existing server", hasAvatar: true, avatarIcon: <StoreIcon /> },
  ]
  return (
    <div>
      <CustomizedDropdown 
        dropdownType={"complex"}
        isButton={true}
        buttonName={"Create +"}
        buttonClassName={classes.createServerButtonStyles}
        options={createOptions}
      />
    </div>
  )
}

export default RootHeader;