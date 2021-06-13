import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';


import { ItemListTablero } from './ItemListTablero';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    backgroundColor: '#01111d',
    overflow: 'auto',
    marginBottom:100,
    alignItems: 'stretch',
    maxHeight: 400,
  },
}));






export const ListTablero = ({ tasks, handleDelete, handleToggle }) => {
    const classes = useStyles();

  

    return (
        <>
        <List className={classes.root}>
            {tasks.map( (value, i) => (
                                <ItemListTablero 
                                key={ value._id }
                                value={ value }
                                index={ i }
                                handleDelete={ handleDelete }
                                handleToggle={ handleToggle }
                                
                            />
            ))
            }
      </List>
      
     
      </>
    
    //     <ul>
    //     {
    //         todos.map( (todo, i) => (
                // <ItemListTablero 
                //     key={ todo.id }
                //     todo={ todo }
                //     index={ i }
                //     handleDelete={ handleDelete }
                //     handleToggle={ handleToggle }
                // />
    //         ))
    //     }
    // </ul>
    )
}
