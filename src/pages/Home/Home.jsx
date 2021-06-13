import React,{useEffect,useReducer,useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container,Typography,Grid } from '@material-ui/core';

import { todoReducer } from '../../reducer/todoReducer';
import { ListTablero } from '../../components/Tablero/ListTablero';
import { Modal } from '../../components/Modal/Modal';
import { BottomMenu } from '../../components/BottomMenu/BottomMenu';
import { getTasksApi } from '../../api/tasks';




const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        color:'#ffffff'
      },
    titulo:{
        textAlign:'center'
    },
    footer:{
        display:'block'
    }
     
  }));


const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];

}

export const Home = () => {
    const classes = useStyles();
    const [ todos, dispatch ] = useReducer(todoReducer, [], init);
    const [tasks, setTasks] = useState([]);
    const [total, setTotal] = useState(0);
    const [terminadas, setTerminadas] = useState(0);
    const [abiertas, setAbiertas] = useState(0);

    useEffect( ()=> {

        (async ()=> {
            const result = await getTasksApi();
            setTasks(result.tasks);
            setTotal(result.total);
            setTerminadas(result.terminadas);
            setAbiertas(result.abiertas);
        })();

    }, [todos]);

    
    const handleDelete = ( todoId ) => {

        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch( action );
    }

    const handleToggle = ( todoId,taskDone ) =>{
        
        dispatch({
            type: 'toggle',
            payload: todoId,
            taskDone: taskDone,
            date_end: Date.now()
        });

    }

    const handleAddTodo = ( newTask ) => {
        
        dispatch({
            type: 'add',
            payload: newTask
        });

    }


    return (
        <div className={classes.root} >
            <Typography className={classes.titulo} variant="h4">
                Espacio de Trabajo
            </Typography>
            <hr />
            <Container >
            <Grid container spacing={3}>
                <Grid item xs={12}  sm={12}>
                    <Modal handleAddTodo={handleAddTodo} />
                    {/* <AddTablero  handleAddTodo={handleAddTodo} /> */}
                </Grid>
                <Grid item xs={12} sm={12}>
                    {
                        total >= 1 && <ListTablero  
                        tasks={ tasks }
                        handleDelete={ handleDelete }
                        handleToggle={ handleToggle }
                        />
                    }
                    
                </Grid>
               
            </Grid>
                
            </Container>
            <BottomMenu 
            total={total} 
            abiertas={abiertas}
            terminadas={terminadas}
            className={classes.footer} 
            />
        </div>
    )
}
