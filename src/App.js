import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

import { useState } from "react"

function App() {
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Appointment',
            day: 'April 5',
            reminder: true,
        },
        {
            id: 2,
            text: 'Meeting',
            day: 'April 12',
            reminder: true,
        },
        {
            id: 3,
            text: 'Shopping',
            day: 'April 11',
            reminder: true,
        }
    ]
)

//add task
const addTask = (task) => {
  console.log(task);
}

//delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

//toggle reminder
const toggleReminder = (id) => {
setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}

  return (
    <div className='container'>
     <Header />
     <AddTask onAdd={addTask} />
     {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : (
       'No Tasks To Show'
     )}
    </div>
  );
}

export default App;
