import React,{useEffect,useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";

import { Home } from "./pages/Home/Home";
import { MenuTop } from "./components/MenuTop/MenuTop";

import './App.css';

import {TaskContext} from './providers/TaskContext'






function App() {
  

const [todos, setTodos] = useState() 
    useEffect( ()=> {
      setTodos(JSON.parse(localStorage.getItem('todos')) || []);
    }, []);





  return (
    <TaskContext.Provider value={{
      todos, 
      setTodos
    }}>
     
     <Users />
         

        
    </TaskContext.Provider>
    
  )
}

export default App;





function Users() {
  return (
    <Router>
    <MenuTop/>

    <Switch>
      <Route exact path="/">
        <Home  />
      </Route>
  
      <Route path="*">
          <NoMatch />
        </Route>
        </Switch>
      
    </Router>
  )
}

function NoMatch() {
  return <h2>Error 404</h2>;
}