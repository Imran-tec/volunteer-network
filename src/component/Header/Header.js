import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import MenuItem from '@material-ui/core/MenuItem';
import logo from '../../resources/logos/Group 1329.png'
import { Link } from 'react-router-dom';






const useStyles = makeStyles((theme) => ({
    backgroundColor:'#FFF',
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));


const Header = () => {
    const classes = useStyles();
    return (
        <div>
              <div className={classes.root}>
      <AppBar color="default" position="static">
        <Toolbar>
          
        <Typography variant="h6" className={classes.title}>
          <img src={logo} style={{width:'100px',marginRight:'90%'}} alt=""/>
          </Typography>
          <Link to="/home"> <MenuItem >Home</MenuItem> </Link>
         
         <Link to="/orderedTask"> <MenuItem >My Task</MenuItem></Link>
        
          
          <MenuItem >Blog</MenuItem>
          <Link to="/admin"> <button style={{margin:'1rem'}} className="btn btn-primary">Admin</button>  </Link>
        </Toolbar>
      </AppBar>
      </div>
        </div>
    );
};

export default Header;