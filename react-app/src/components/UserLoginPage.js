import React from 'react';
import './userlogin.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
//import CardMedia from '@material-ui/core/CardMedia';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
//import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 485,
  },
  media: {
    height: 240,
  },
});

export default function UserLoginPage() {
  const classes = useStyles();

  return (
      <div>
          <div>
    <Card id="maincard" className={classes.root}>
        <CardContent> 
          <div id="main1">
        <h1 id="title">LOGIN PAGE</h1>
        </div>
        <div id="main2">
        <TextField id="tfiled1" label="Username" type="text" variant="outlined" /><br/>
        </div>
        <div id="main3"> 
        <TextField
          id="tfiled2"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
          <div id="Btn">
          <Button variant="contained" color="primary" id="btn1">LOGIN</Button>
          </div>
        </div>
        </CardContent>
    </Card>
    </div>
    </div>
  );
}

