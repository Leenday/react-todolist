import Task from './Task'

const Tasks = ({ tasks }) => {
  const deleteTask = (id) => {
    console.log('!!', id)
  }
  return (
    <ul>
      {tasks.map((task) =>
        <Task key={task.id} task={task} onDelete={deleteTask} />
      )}
    </ul>
  )
}

export default Tasks
