import { deleteTasksApi, doneTasksApi, postTaskApi } from "../api/tasks";


export const todoReducer = ( state = [], action ) => {
   
    switch ( action.type ) {
        case 'add':
           
            postTaskApi(action.payload).then(result => {
                return result;
              })
                .catch(err => {
                return err.message;
            });
            return [ ...state, action.payload ];

        case 'delete':
            
            deleteTasksApi(action.payload).then(result => {
                return result;
              })
                .catch(err => {
                return err.message;
            });

            return state.filter( todo => todo.id !== action.payload ); // 123123123


        case 'toggle': 

            doneTasksApi(action.payload,action).then(result => {
                return result;
            })
                .catch(err => {
                return err.message;
            });

            return [...state];
            

        case 'toggle-old':
            return state.map( todo => {

                if ( todo.id === action.payload ) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                } else {
                    return todo;
                }

            })

        default:
            return state;
    }


}