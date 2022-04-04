const tasks = [
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

const Tasks = () => {
  return (
    <>
    {tasks.map((task) => (<h3>{task.text}</h3>))}
    </>
  )
}

export default Tasks