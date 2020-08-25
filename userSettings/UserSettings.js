import React from 'react';
import HorizontalTabs from '../tabs/horizontalTabs';

const UserSettings = () => {
  const [ value, setValue ] = React.useState(0);
  const handleChange = (event, newValue) => setValue(newValue);
  const userProfileTabs = [
    { primaryText: "Profile" }, 
    { primaryText: "Company Profile" },
    { primaryText: "Security" },
    { primaryText: "Team" },
  ];
  return (
    <HorizontalTabs 
      value={value} 
      handleChange={handleChange} 
      options={userProfileTabs} 
    />
  );
}

export default UserSettings;