import React, { Component } from 'react';
import { render } from 'react-dom';
import { TextField, Grid, createMuiTheme, ThemeProvider, useTheme, makeStyles, withStyles, fade, Tabs, Tab } from '@material-ui/core';
import { blue, red, orange, green, indigo } from '@material-ui/core/colors';
import theme from './themes/rootTheme';
import useDrawerStyles from "./styles/drawerStyles";
import Sidebar from './sidebar/Sidebar';
import RootHeader from './header/rootHeader';
import UserSettings from './userSettings/UserSettings';

const App = () => {
  const classes = useDrawerStyles();
  return (
    <ThemeProvider theme={theme}>
      <div >
        <Grid container>
          <Grid item xs={3} md={1} lg={1}>
            <Sidebar classes={classes} />
          </Grid>
          <Grid item xs={9} md={10} lg={11}>
            <RootHeader />
            <div style={{ margin: "0.3rem 1.2rem" }}>
              <UserSettings />
            </div>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

render(<App />, document.getElementById('root'));
