import React from 'react';
import "./TaskForm.css"
export default function TaskForm(){
    const addtask= "Add a task"
return(
    <div className="form">
        <input type="text" name="task" id=""/>
        <button ClassName="button" type="submit">{addtask}</button>
    </div>
)
}