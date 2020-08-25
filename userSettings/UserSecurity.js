import React from "react";
import { Button } from "@material-ui/core";
import UserCard from './UserCard';
import UserSshKeys from './UserSshKeys';

const UserSecurity = () => {
  return (
    <div>
      <UserCard
        imageSrc="https://www.svgrepo.com/show/154211/unlocked.svg"
        primaryText="Secure Your Account"
        secondaryText="Two-factor authentication adds an extra layer of security to your account. To log in, you will need to provide a code along with your username and password.This let us know it's actually you."
        captionComponent={
          <Button variant="contained" color="primary">Enable Two-Factor authentication</Button>
        }
        showButton={false}
        buttonName="Edit"
      />
      <UserSshKeys />
    </div>
  );
}

export default UserSecurity;