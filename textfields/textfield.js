import React from 'react';
import { TextField, withStyles, makeStyles } from "@material-ui/core";

const CssTextField = withStyles(theme => ({
  root: {
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  },
}))(TextField);

const textFieldStyles = makeStyles(theme => ({
  root: {
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  },
}));

const MyTextField = props => {
  const { label, value, handleChange, color } = props;
  const classes = textFieldStyles();
  return (
    <TextField 
      InputProps={{
        classes: {
          root: classes.root,
        }
      }}
      label={label} 
      value={value} 
      onChange={handleChange}
      variant="outlined" 
      margin="dense"
      fullWidth
      />
  );
}