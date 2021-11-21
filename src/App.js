import Header from './components/Header'
import Button from './components/Button'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { tasksList } from './mockTasks.js'
import { useState } from 'react'

const App = () => {
  // создание/добавление таски
  // const create
  const addTask = (task) => {
    const id = Date.now()
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // редактирование массив тасок
  // const update

  // delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  const [tasks, setTasks] = useState(tasksList);
  return (
    <div className="App">
      <Header title='To Do List' />
      <AddTask onAdd={addTask} />
      <Button text='Добавить' color='moccasin' backgroundColor='black' />
      { tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> : 'You have no tasks'}
    </div>
  );
}

export default App;
