import Header from './components/Header'
import Button from './components/Button'
import Tasks from './components/Tasks'

const App = () => {
  const tasks = [
    {
      id: 1,
      title: 'TItle',
      description: 'Desc',
      location: 'Location',
      done: false
    },
    {
      id: 2,
      title: 'TItle2',
      description: 'Desc2',
      location: 'Location2',
      done: false
    }
  ]
  return (
    <div className="App">
      <Header title='To Do List' />
      <Button text='Добавить' color='moccasin' backgroundColor='black' />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
