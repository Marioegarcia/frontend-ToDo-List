import React from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

import Typography from '@material-ui/core/Typography';

import { AddTablero } from '../Tablero/AddTablero';


const useStyles = makeStyles({
  title:{
      background:'#308afb',
      color:'#ffffff'
  }, 
  content: {
    padding:50,
    
  },
});

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open,handleAddTodo } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };



  return (
    <Dialog
    onClose={handleClose} 
    aria-labelledby="simple-dialog-title" 
    open={open}
    >
      <DialogTitle className={classes.title} id="simple-dialog-title">Crear Tarea</DialogTitle>
      <div className={classes.content}>
          <AddTablero  
            handleAddTodo={handleAddTodo}
            open={open} 
            onClose={onClose} 
           />
      </div>
      
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  
};



export const Modal = ({handleAddTodo}) => {
    const [open, setOpen] = React.useState(false);
    

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
      
    };
  
    return (
      <div>
          
        <Button 
        variant="contained" 
        color="primary" 
        onClick={handleClickOpen}
       
        >
           <Typography variant="subtitle1">Crear Tarea</Typography>
        </Button>
        <hr />
        
       
        

        <SimpleDialog 
        
        open={open} 
        onClose={handleClose}
        handleAddTodo={handleAddTodo}
      
        />
      </div>
    );
  }