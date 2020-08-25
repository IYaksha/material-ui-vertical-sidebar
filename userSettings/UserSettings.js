import React from 'react';
import { Typography, Button } from "@material-ui/core";
import HorizontalTabs from '../tabs/horizontalTabs';
import UserCard from './UserCard';
import UserSecurity from './UserSecurity';

const UserSettings = () => {
  const [ value, setValue ] = React.useState(0);
  const handleChange = (event, newValue) => setValue(newValue);
  const userProfileTabs = [
    { primaryText: "Profile" }, 
    { primaryText: "Company Profile" },
    { primaryText: "Security" },
    { primaryText: "Team" },
  ];
  const getTabPanelByValue = () => {
    switch (value) {
      case 0:
        return (
          <UserCard
            imageSrc="https://uxpin.s3.amazonaws.com/faces/86.png?1594291316738"
            primaryText="Akshay Mahajan"
            secondaryText="akshay.m@serverguy.com"
            captionComponent={
              <Typography variant="body2" secondaryText>Role: ADMIN</Typography>
            }
            showButton
            buttonName="Edit"
          />
        );
      case 1:
        return (
          <UserCard
            imageSrc="https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM4MDE5fQ"
            primaryText="Yorozuya"
            secondaryText="Bangalore"
            captionComponent={
              <Typography variant="body2" secondaryText>23, 5th Avenue, NY, USA</Typography>
            }
            showButton
            buttonName="Edit"
          />
        );
      case 2:
        return <UserSecurity />
      default: 
    }
  }
  return (
    <div>
      <HorizontalTabs 
        value={value} 
        handleChange={handleChange} 
        options={userProfileTabs} 
      />
      {getTabPanelByValue()}
    </div>
  );
}

export default UserSettings;