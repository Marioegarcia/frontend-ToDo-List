import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import GroupIcon from '@material-ui/icons/Group';


const useStyles = makeStyles({
  root: {
    fontSize:45,
    color:'#83abfc',
   
  },
  title: {
    textDecoration:'line-through',
    textDecorationColor:'#f54090',
    textDecorationThickness: '3px',
    fontStyle:'italic',
    color:'#c993e7',
  },
  sinSub:{
      fontWeight:'bold'
      
  },
  inline:{
  
    display: 'inline',
    color:'#b1e0df',
    marginRight: 5,
    marginLeft: 10
  }

});


export const ItemListTablero = ({ value,  handleDelete, handleToggle }) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const {colaboradores } = value;

  

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const labelId = `checkbox-list-label-${value.id}`;
  
   

  return (
    <ListItem key={value.id} role={undefined} 
    dense button onClick={ ()=> handleToggle(value._id,value.done)}
    className={classes.root}
    >
      <ListItemIcon>
        <Checkbox
            edge="start"
            checked={value.done}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': labelId }}
            style={{ color: '#4152b2' }}
        />
         <IconButton 
        aria-haspopup="true" onClick={handleClick}
        >
            
          <GroupIcon style={{ color: '#f54090' }} />
        
        </IconButton>
      </ListItemIcon>

      <ListItemText 
      id={labelId} 
      primary={
        <>
        <Typography
        component="span"
        variant="body1"
        className={value.done ? classes.title : classes.sinSub}
        
        >
           {value.titulo}  
        </Typography>
        </>
       
      }
      secondary={
        <>
          <Typography
            component="span"
            variant="body2"
            className={classes.inline}
           
          >
            creado: { moment(value.create_at).format('DD-MM-YY HH:mm')}  
          </Typography>
          
          {
            value.done && <Typography
            component="span"
            variant="body2"
            className={classes.inline}
           
          >
            {"— "} completada: {moment(value.date_end).format('DD-MM-YY HH:mm')}
          </Typography>

          }
          
          
        </>
      }
       />
      

      <ListItemSecondaryAction>
        
       
        <IconButton edge="end" aria-label="comments"
        onClick={() => handleDelete( value._id )}
        >
            <DeleteIcon style={{ color: '#f54090' }} />
        </IconButton>

       
      
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >

        {

          colaboradores.map((item,index) =>{
           
             return  <MenuItem key={index+1} onClick={handleClose}> {item} </MenuItem>
           } )

        } 
       
      </Menu>
       
      </ListItemSecondaryAction>
    </ListItem>
  );
    
}


