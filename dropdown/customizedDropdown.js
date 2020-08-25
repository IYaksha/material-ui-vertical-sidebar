import React from 'react';
import { Menu, ListItem, MenuItem, ListItemAvatar, Avatar, ListItemText, IconButton, Button, Divider, makeStyles, } from '@material-ui/core/'
import {
  usePopupState,
  bindTrigger,
  bindMenu,
} from 'material-ui-popup-state/hooks'

const useDropdownStyles = makeStyles({
  list: { padding: 0 }
})

const CustomizedDropdown = ({ dropdownType, isButton, buttonName, buttonClassName, icon, iconSize, options }) => {
  const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' });
  const classes = useDropdownStyles();
  const showDropdownItem = (option) => {
    switch (dropdownType) {
      case "simple":
        return (
          <MenuItem style={{ width: 270 }} onClick={popupState.close}>{option.primaryText}</MenuItem>
        );
      case "complex":
        return (
          <div>
            <ListItem button style={{ width: 270, }} onClick={popupState.close}>
            {option.hasAvatar && <ListItemAvatar>
              <Avatar>{option.avatarIcon}</Avatar>
            </ListItemAvatar>}
            <ListItemText primary={option.primaryText} secondary={option.secondaryText} />
          </ListItem>
          <Divider />
          </div>
        )
    }
  }
  const dropdownTriggerer = () => {
    if (isButton) {
      return (
        <Button color="primary" variant="contained" {...bindTrigger(popupState)}>
          {buttonName}
        </Button>
      )
    } else {
      return <IconButton size={iconSize} color="default" {...bindTrigger(popupState)}>{icon}</IconButton>;
    }
  }
  return (
    <span>
      {dropdownTriggerer()}
      <Menu
        {...bindMenu(popupState)}
        getContentAnchorEl={null}
        classes={{
          list: classes.list,
        }}
        variant="menu"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        {options.map(option => showDropdownItem(option))}
      </Menu>
    </span>
  )
}

export default CustomizedDropdown;