import React from 'react'
import './Task.css'

const Task = ({id,title,description,priority}) => {
  return (
    <div className='task-container'>
        <h3 className='task-title'>{title}</h3>
        <h6 className='task-description'>{description}</h6>
        <p className='task-prority'><span>{priority}</span></p>
    </div>
  )
}

export default Task
