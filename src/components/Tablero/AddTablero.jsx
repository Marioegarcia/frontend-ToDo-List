import React  from 'react'
import {makeStyles} from '@material-ui/core/styles';
import { TextField,Button } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

import { useForm } from '../../hooks/useForm';





  
const useStyles = makeStyles((theme) => ({
    root: {
      margin: theme.spacing(1),
     
    },
    margin: {
      float:'left',     
    },
    formControl: {
      marginBottom: 35,
      width:'100%',
     
    },
    input: {
       
        "& label.Mui-focused": {
            color: "green"
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "#13aafa"
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#13aafa"
            },
            "&:hover fieldset": {
              borderColor: "yellow"
            },
            "&.Mui-focused fieldset": {
              borderColor: "#13aafa"
            }
          }
    },
    button:{
    // padding: theme.spacing(1),
    width:'100%',
    fontSize: 12,
    float:'left', 
    height:'60px'
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
      
    },
    chip: {
      margin: 2,
    },
    noLabel: {
      marginTop: theme.spacing(3),
    },

  }));

const names = [
    'Mario Garcia',
    'Jeremias Garcia',
    'Miriam Wagner',
    'Bruce Wayne',
    'Bradley Wilkerson',
    'Barry Allen',
    'Virginia Andrews',
    'Kelly Snyder', 
    'Clark Kent',
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};



export const AddTablero = ({handleAddTodo,onClose}) => {
    const classes = useStyles();
    const [ { titulo,colaboradores }, handleInputChange, reset ] = useForm({
        titulo: '',
        colaboradores:[],
        dateStart: Date.now(),
        dateEnd: ''
    });
   



    const handleSubmit = (e) => {
        e.preventDefault();

        if ( titulo.trim().length <= 1 ) {
            return;
        }

        const newTask = {
            titulo: titulo,
            colaboradores:colaboradores,
            create_at: Date.now(),
            done: false
        };
        
        handleAddTodo( newTask );
        reset();
        onClose();
       
        
    }



    return (
        <>

        <form 
        className={classes.root} 
         autoComplete="off" 
        onSubmit={ handleSubmit }
        >
          
          <FormControl className={classes.formControl} >
             <TextField 
           
            className={classes.margin}
            InputProps={{
                className: classes.input
              }}
            id="filled-basic" 
            label="Titulo de tarea" 
            variant="outlined" 
            name="titulo"
            value={ titulo }
            onChange={ handleInputChange }
            />
          </FormControl>
          
          <FormControl className={classes.formControl} >

          <InputLabel id="demo-mutiple-chip-label">Colaboradores</InputLabel>
            <Select
              labelId="demo-mutiple-chip-label"
              id="demo-mutiple-chip"
              multiple
              name="colaboradores"
              value={colaboradores}
              onChange={handleInputChange}
              input={<Input id="select-multiple-chip" />}
              renderValue={(selected) => (
                <div className={classes.chips}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} className={classes.chip} />
                  ))}
                </div>
              )}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name} >
                  {name}
                </MenuItem>
              ))}
            </Select>

          </FormControl>

          <FormControl className={classes.formControl} >
         

            <Button 
            color="primary"
            variant="contained"
            type="submit"
            className={classes.button}
            >
                Nueva tarea
            </Button>
          </FormControl>
                
              


        </form>
        
    </>
    )
}
