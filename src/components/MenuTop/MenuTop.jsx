import React from 'react'
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


import {Home} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
   
  },
  appbar:{
    background:'transparent',
  },
  menuButton: {
    background:'rgba(255,255,255,0.1)',
    boxShadow:'20px 20px 40px -6px rgba(0,0,0,0.2)',
    backdropFilter: 'blur(3px)',
    WebkitBackdropFilter:'blur(3px)',
    borderRadius:'5px',
    border:'none',
    color:'#ffffff'
   
  },
  title: {
    flexGrow: 1,
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    width: '100%',
    textAlign:'center'
   
  },
}));


export const MenuTop = () => {
  const classes = useStyles();

    return (
    <>
     <div className={classes.root}>
      <AppBar className={classes.appbar} position="static">
        <Toolbar>
         
          <Link to="/"> 
            <Button 
            edge="start" 
            className={classes.menuButton} 
             
            variant="outlined" 
            aria-label="menu">
              <Home /> 
            </Button>
          </Link>
           
          
          <Typography variant="h6" className={classes.title}>
            To-Do List:
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
           
     

    </>
    
    )
}
