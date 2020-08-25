import React from 'react';
import { createMuiTheme } from "@material-ui/core";
import { indigo, orange, red, green } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: orange,
    error: red,
    success: green,
  },
  typography: {
    fontFamily: 'Rubik',
  }
});

export default theme;