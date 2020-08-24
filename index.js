import React, { Component } from 'react';
import { render } from 'react-dom';
import { TextField, Grid, createMuiTheme, ThemeProvider, useTheme, makeStyles, withStyles, fade, Tabs, Tab } from '@material-ui/core';
import { blue, red, orange, green, indigo } from '@material-ui/core/colors'
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';

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
    backgroundColor: theme.palette.primary.main,
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
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const classes = useDrawerStyles();
    return (
      <ThemeProvider theme={theme}>
        <div >
          <Grid container>
            <Grid item xs={3} md={2} lg={1}>
              <Tabs
                classes={{
                  root: classes.root,
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
