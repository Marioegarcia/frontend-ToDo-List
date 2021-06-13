import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(() => ({
   
    appBar: {
        top: 'auto',
        bottom: 0,
        backgroundColor:'#011625',
       
     
    },
    tool: {
        justifyContent:'space-around',
        textAlign:'center',
        
    },
    
  }));

export const BottomMenu = ({total,terminadas,abiertas}) => {
    const classes = useStyles();


  
    return (
        <AppBar  color="primary" className={classes.appBar}>
        <Toolbar  className={classes.tool}>
            <Typography variant="caption" >
             {total} Tareas 
            </Typography>
         
             <Typography variant="caption" >
             {terminadas} Terminadas 
            </Typography>
         
         
            <Typography variant="caption" >
             {abiertas} Abiertas 
            </Typography>
        </Toolbar>
      </AppBar>
    )
}
