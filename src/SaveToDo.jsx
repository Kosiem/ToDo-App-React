import React from 'react';

export default function SaveToDo(todos) {


  return(
      <button
      className='saveBtn'
      onClick = {saveState}
      >Save current tasks</button>
  )


  function saveState(e){
    if(localStorage.getItem("Tasks")){
      console.log("saved");
    } else {
   localStorage.setItem("Tasks", JSON.stringify(todos));
    }
  } 


}
