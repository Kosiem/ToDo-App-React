import React, {useState, useEffect, Component, useLocalStorage} from 'react';
import TodoList from './TodoList';
import ReactDOM from 'react-dom';
import SaveToDo from './SaveToDo'




function App() {
  // Create Array with things
  const [todoThings, Todos] = useState([]);

  function addNewThing(){
    if(document.querySelector(".sendToDo").value != ""){
      Todos([...todoThings, document.querySelector(".sendToDo").value]);
      console.log(todoThings)
      console.log(document.querySelector(".sendToDo").value)
    }
   if(localStorage.getItem("Tasks") !== null){
    
    const parse = JSON.parse(localStorage.getItem("Tasks"))
    const newTable = parse.todos;

    if(todoThings.length >= 1){
    newTable.push(todoThings[todoThings.length-1])
    }

   

    const newSave = {
      todos: newTable

    }

    localStorage.setItem("Tasks",JSON.stringify(newSave));
    console.log("work")
  }
  }
   
  

  return (
    <div 
    className = 'Main'
    >
      <div 
      className = "Title"
      >
        <h1>Todo List App</h1>
         <input 
          type="text" 
          className = "sendToDo"
          />
          <button 
          className = "sendBtn"
          onClick = {addNewThing}
          > Add new </button> 
          <SaveToDo todos={todoThings}/>
          </div>
          <div
          className = "task-container">
            <table className='tbl'>
              <tr><th  colSpan={10} >Task Name</th><th>Delete</th><th>Mark as done</th></tr>
               {/* Submit array to TodoList */}
              <TodoList todos={todoThings}/>
            </table>
          </div>
            </div>
 
  );



  }


export default App;
