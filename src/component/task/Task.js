import React from 'react'
import './Task.css'
export default function Task(props){

    const renderAction =()=>{
        return(
            <div className="task">
            <div className="title">
               {props.title}
            </div>
            <div className="duration">
               {props.duration} 
               <br/>
            </div>
            <div className="details">
               {props.details.type}
            <br/>
               ({props.details.date})

            </div>
            
            <div className="action">
                <span> delete</span>
                <span> update</span>

            </div>
            </div>)
    }
    return(
        <div className="task">
        <div className="title">
        {props.title}        </div>
        
            {renderAction()}
        
    </div>)
}