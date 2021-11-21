import React from 'react'
import Button from './Button'

const Task = ({ task, onDelete }) => {
  const handleDelete = () => {
    onDelete(task.id)
  }
  return (
    <li>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>{task.location}</p>
      <input type="checkbox" value={task.done} />
      <Button text='Удалить' color='white' backgroundColor='black' onClick={handleDelete} />
    </li>
  )
}

export default Task
