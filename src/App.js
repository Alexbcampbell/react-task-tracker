import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks';

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

//delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

  return (
    <div className='container'>
     <Header />
     {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} />) : (
       'No Tasks To Show'
     )}
    </div>
  );
}

export default App;
