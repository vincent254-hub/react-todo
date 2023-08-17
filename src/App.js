import {useState} from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState ([
    {
        id: 1,
        text: 'Do some laravel Programming',
        day: 'Aug 5th at 10:00 am',
        reminder: true,
    },

    {
        id: 2,
        text: 'Start Planning on Malila project wireframe',
        day: 'Sept 10th at 06:00 am',
        reminder: true,
    },
    {
        id: 3,
        text: 'Finish a clients task',
        day: 'Sept 15th at 10:00 pm',
        reminder: false,
    }
])

// delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !==id))
}
// toggle reminder


// const toggleReminder = (id) => {
//   setTasks(tasks.map((task) => 
// task.id === id ? {...task, reminder: !task.reminder} :
//   task)
//   )
// }

const toggleReminder = (id) => {
  // const taskToToggle = await fetchTask(id)
  // const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

  // const res = await fetch(`http://localhost:5000/tasks/${id}`, {
  //   method: 'PUT',
  //   headers: {
  //     'Content-type': 'application/json',
  //   },
  //   body: JSON.stringify(updTask),
  // })

  // const data = await res.json()

  setTasks(
    tasks.map((task) =>
      task.id === id ? { ...task, reminder: !task.reminder } : task
    )
  )
}
  return (
    <div className="container">
      <Header title={"Task Manager"} />
      <AddTask />
      {tasks.length > 0 ? (<Tasks tasks={tasks} 
        onDelete = {deleteTask} onClick={true} onToggle={toggleReminder} />)
        : ('There are no Tasks for you today!!')
      }
    </div>

  );
}

export default App;
