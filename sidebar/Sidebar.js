import React from 'react';
import { Tabs, Tab } from "@material-ui/core";
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import logo from '../assets/logo';

const Sidebar = ({ classes }) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <img src={logo} className={classes.logoStyles} />
      <Tabs
        classes={{
          indicator: classes.tabIndicator,
        }}
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
      >
      <Tab icon={<PhoneIcon className={classes.tabIcon} />} label="RECENTS" classes={{
        root: classes.tabRoot,
        labelIcon: classes.tabLabel,
      }} />
      <Tab icon={<FavoriteIcon className={classes.tabIcon} />} label="FAVORITES" classes={{
        root: classes.tabRoot,
        labelIcon: classes.tabLabel,
      }} />
      <Tab icon={<PersonPinIcon className={classes.tabIcon} />} label="NEARBY" classes={{
        root: classes.tabRoot,
        labelIcon: classes.tabLabel,
      }} />
    </Tabs>
    </div>
  )
};

export default Sidebar;