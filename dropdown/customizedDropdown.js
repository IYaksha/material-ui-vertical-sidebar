import React from 'react';
import { Menu, ListItem, MenuItem, ListItemAvatar, Avatar, ListItemText, IconButton, Button } from '@material-ui/core/Button'
import {
  usePopupState,
  bindTrigger,
  bindMenu,
} from 'material-ui-popup-state/hooks'

const CustomizedDropdown = ({ dropdownType, isButton, buttonName, buttonClassName, icon, options }) => {
  const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' });
  const showDropdownItem = (option) => {
    switch (dropdownType) {
      case "simple":
        return (
          <MenuItem onClick={popupState.close}>{option.primaryText}</MenuItem>
        );
      case "complex":
        return (
          <ListItem onClick={popupState.close}>
            {option.hasAvatar && <ListItemAvatar>
              <Avatar>{option.avatarIcon}</Avatar>
            </ListItemAvatar>}
            <ListItemText primary={option.primaryText} secondary={option.secondaryText} />
          </ListItem>
        )
    }
  }
  const dropdownTriggerer = () => {
    if (isButton) {
      return (
        <Button  variant="contained" {...bindTrigger(popupState)}>
          {buttonName}
        </Button>
      )
    } else {
      return <IconButton color="default">{icon}</IconButton>;
    }
  }
  return (
    <div>
      {dropdownTriggerer()}
      <Menu
        {...bindMenu(popupState)}
        getContentAnchorEl={null}
        dense={true}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        {options.map(option => showDropdownItem(option))}
      </Menu>
    </div>
  )
}

export default CustomizedDropdown;