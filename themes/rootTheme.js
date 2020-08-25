import React from 'react';
import { createMuiTheme } from "@material-ui/core";
import { blue, indigo, orange, red, green } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: indigo,
    error: red,
    success: green,
  },
  typography: {
    fontFamily: 'Rubik',
  }
});

export default theme;