import React from "react";
import "./Task.css";

const Task = ({ id, title, description, priority, removeTaskFromList,setTaskEditable }) => {
  return (
    <div className="task-container">
      <h3 className="task-title">{title}</h3>
      <h6 className="task-description">{description}</h6>
      <p className="task-prority">
        <span>{priority}</span>
      </p>


      <span className="edit-icon" onClick={()=>{
        setTaskEditable(id);
      }}>
        <i className="fa-solid fa-pen-to-square"></i>
      </span>

      
      <span className="delete-icon" onClick={()=>{
        removeTaskFromList(id);
      }}>
        <i className="fa-solid fa-trash"></i>
      </span>

      
    </div>
  );
};

export default Task;
