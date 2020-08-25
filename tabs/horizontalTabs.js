import React from 'react';
import { makeStyles, withStyles, Tabs, Tab, Typography } from '@material-ui/core';

const AntTabs = withStyles({
  root: {
    borderBottom: '1px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: '#1890ff',
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$selected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

const HorizontalTabs = ({ value, handleChange, options }) => {
  return (
    <AntTabs value={value} onChange={handleChange} aria-label="ant example">
      {options.map(option => <AntTab label={option.primaryText} />)}
    </AntTabs>
  )
}

export default HorizontalTabs;