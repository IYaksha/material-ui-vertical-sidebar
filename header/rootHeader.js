import React from 'react';
import { Grid, InputBase, IconButton, Paper, Divider, Typography } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useHeaderStyles from "../styles/headerStyles";
import CustomizedDropdown from "../dropdown/customizedDropdown";
import NewServerIcon from '@material-ui/icons/Language';
import StoreIcon from '@material-ui/icons/Store';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import AccountIcon from '@material-ui/icons/Face';
import CompanyIcon from '@material-ui/icons/Business';
import LogoutIcon from '@material-ui/icons/VpnKey';

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
  ];
  const notificationOptions = [{ primaryText: "No new notifications" }];
  const userOptions = [
    { primaryText: "Akshay Mahajan", secondaryText: "akshay.m@serverguy.com", hasAvatar: true, avatarIcon: <AccountIcon /> },
    { primaryText: "New Company", secondaryText: "Create new company", hasAvatar: true, avatarIcon: <CompanyIcon /> },
    { primaryText: "Logout", secondaryText: "Logout user", hasAvatar: true, avatarIcon: <LogoutIcon /> },
  ];
  return (
    <Grid container justify="flex-end">
    <Grid item xs={6} style={{ textAlign: "right" }}>
      <CustomizedDropdown 
        dropdownType={"complex"}
        isButton={true}
        buttonName={"Create +"}
        buttonClassName={classes.createServerButtonStyles}
        options={createOptions}
      />
      <CustomizedDropdown 
        dropdownType={"simple"}
        iconSize={"medium"}
        isButton={false}
        icon={<NotificationsActiveIcon />}
        options={notificationOptions}
      />
      </Grid>
      <Divider orientation="vertical" style={{ height: "1cm", paddingTop: 10, width: 4,}} />
      <Grid item style={{ flex: 1, padding: "1px 8px" }}>
        <Typography variant="body1">Akshay</Typography>
        <Typography variant="body2">Yorozuya Company</Typography>
      </Grid>
      <Grid item>
      <CustomizedDropdown 
        dropdownType={"complex"}
        isButton={false}
        iconSize={"small"}
        icon={<img 
          src="https://uxpin.s3.amazonaws.com/faces/86.png?1594291316738" 
          style={{ height: 35, width: 35, borderRadius: "50%", marginTop: 4, marginRight: 4 }} 
        />}
        options={userOptions}
      />
      </Grid>
    </Grid>
  )
}

export default RootHeader;