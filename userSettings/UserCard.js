import React from 'react';
import { Paper, Grid, Typography, Button, makeStyles } from "@material-ui/core";

const UserCardStyles = makeStyles({
  root: {
    padding: "1rem",
  },
  imageStyle: {
    height: 85, width: 85, borderRadius: "50%",
  }
});

const UserCard = ({ primaryText, secondaryText, captionComponent, imageSrc, buttonName, showButton }) => {
  const classes = UserCardStyles();
  return (
    <Paper square elevation={3} className={classes.root}>
      <Grid container spacing={2}>
        <Grid item>
          <img src={imageSrc} className={classes.imageStyle} />
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography style={{ marginBottom: 4 }} variant="h5">{primaryText}</Typography>
              <Typography gutterBottom variant="body1">{secondaryText}</Typography>
              {captionComponent}
            </Grid>
          </Grid>
          {showButton && <Grid item>
            <Button size="small" color="primary" variant="contained" fullWidth>{buttonName}</Button>
          </Grid>}
        </Grid>
      </Grid>
    </Paper>
  );
}

export default UserCard;