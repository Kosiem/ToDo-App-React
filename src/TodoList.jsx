import React, { useState } from 'react'
import { useEffect } from 'react';
import SaveToDo from './SaveToDo';




// Get todolist from App.js and return every element of array in list element

export default function TodoList( {todos} ) {

    useEffect(()=>{
        localMark();
    })



// If there is localStorage (saved tasks), show them
    let savedTodos = [];
    let save = "";
    if(localStorage.getItem("Tasks") !== null){
        console.log("aa")
        save = JSON.parse(localStorage.getItem("Tasks"));
        for(let i=0; i<save.todos.length; i++){
            savedTodos.push(save.todos[i])
        }
    } 

    else {
        savedTodos = todos;
    }


   // create and show also marked tasks, saved in localStorage 
    

  const[ marked, markedArray ] = useState([]);

    function MarkAsDone(e){
        const cells = document.querySelectorAll(".taskName");  
        const value = e.target.value;      
        let mark = []
        console.log(cells);
        for(let i = 0; i<cells.length; i++){
            if(cells[i].textContent == value){
                console.log(cells[i].textContent)
                marked.push(cells[i].textContent)
                cells[i].style.textDecoration = "line-through";
            }
            
        }
         mark = marked

         const newSave = {
            markedThings: mark
      
          }

          localStorage.setItem("Marked", JSON.stringify(newSave));
   

    } 






    return(
    
        savedTodos.map(todo => {
           return (
               
                    <tr 
                    onLoad={localMark}
                    value = {todo}
                    className = {todo}
                    >
                        <td 
                        className='taskName'
                        colSpan={10}> 
                        {todo} 
                        </td>
                        <td>
                            <button 
                            className="delBtn" 
                            value={todo}
                            onClick = {DeleteTask}>
                            <i class="fa fa-trash"></i>
                            </button>
                        </td>
                        <td>
                            <button 
                            className='markBtn'
                            value = {todo}
                            onClick = {MarkAsDone}
                            >
                            <i class="fa fa-check">
                            </i>
                            </button>
                        </td>
                    </tr>

                          
                )
        })
    )





    function localMark(e){
        if(localStorage.getItem("Marked") !== null){
            const readMarked = JSON.parse(localStorage.getItem("Marked"))
            let markedThings = readMarked.markedThings;
            const cells = document.querySelectorAll(".taskName");
            for(let i = 0; i<cells.length;i++){
                if(cells[i].textContent == markedThings[i]){
                    cells[i].style.textDecoration = "line-through"
                }
            }
        }
    }

    function DeleteTask(e){
        const value = e.target.value;
        const cells = document.querySelectorAll(".taskName");
        const rows = document.getElementsByTagName("tr");
        for(let i = 0; i<cells.length; i++){
            if(cells[i].textContent == value){
                for(let i = 1; i<rows.length; i++){
                    console.log(rows[i].getAttribute("class"))
                    if(rows[i].getAttribute("class") == value){
                        rows[i].remove()
                        console.log(i)
                        console.log(savedTodos)
                        savedTodos.splice(i-1, 1);
                        console.log(savedTodos);
                        const newSave = {
                            todos: savedTodos
                        }
                        localStorage.setItem("Tasks", JSON.stringify(newSave))
                        console.log(newSave.todos.length)
                        if(1 > newSave.todos.length){
                            localStorage.removeItem("Tasks");
                        }

                    }
                }
                }
            }
        }
    }




