import React, { Component } from 'react';
import { render } from 'react-dom';
import { TextField, Grid, createMuiTheme, ThemeProvider, useTheme, makeStyles, withStyles, fade, Tabs, Tab } from '@material-ui/core';
import { blue, red, orange, green, indigo } from '@material-ui/core/colors'
import Sidebar from './sidebar/Sidebar';

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: orange,
    error: red,
    success: green,
  }
})

const useDrawerStyles = makeStyles (theme => ({
  root: {
    backgroundColor: indigo[900],
    height: '100vh'
  },
  tabRoot: {
    minWidth: '100%', // a number of your choice
    width: '100%',
  },
  tabLabel: {
    fontSize: 14,
    color: "white",
  },
  tabIcon: {
    fontSize: 30,
    color: "white",
  },
  tabIndicator: {
    width: 3,
    backgroundColor: "white",
    opacity: 0.7,
  }
}))

const App = () => {
    const classes = useDrawerStyles();
    return (
      <ThemeProvider theme={theme}>
        <div >
          <Grid container>
            <Grid item xs={3} md={2} lg={1}>
              <Sidebar classes={classes} />
            </Grid>
          </Grid>
        </div>
        </ThemeProvider>
    );
}

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

render(<App />, document.getElementById('root'));
