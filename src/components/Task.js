import React from 'react'
import Button from './Button'

const Task = ({ task, onDelete }) => {
  return (
    <li>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>{task.location}</p>
      <input type="checkbox" value={task.done} />
      <Button text='Удалить' color='white' backgroundColor='black' onDelete={onDelete} />
    </li>
  )
}

export default Task
