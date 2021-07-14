import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import ExportAnswers from './components/ExportAnswers'
import ImportAnswers from './components/ImportAnswers'
// import Footer from './components/Footer'
// import About from './components/About'


function App() {
  const [isJsonLoaded, setJsonLoaded] = useState(false)
  const [tasks, setTasks] = useState([])

  const LoadJsonData = (jsonDataString) => {
    console.log("LoadJsonData", jsonDataString)
    //debugger
    if (jsonDataString) {
      setTasks(JSON.parse(jsonDataString))
      setJsonLoaded(true)
    }

  }  

  if (!isJsonLoaded) {
    console.log('reading from localStorage')
    const jsonQuestionnaire = localStorage.getItem("MyTasks")
    LoadJsonData(jsonQuestionnaire)

  }

  

  console.log('MyTask', tasks )

  /* Static Tasks.

  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'text sdfasedf',
        day: 'Feb 5th at 2:30 pm',
        reminder: true,
    
      },
      {
        id: 2,
        text: 'text 2',
        day: 'Feb 15th at 2:30 pm',
        reminder: true,
    
      },
      {
        id: 3,
        text: 'text 3',
        day: 'Feb 25th at 6:30 pm',
        reminder: false,
    
      },
    
    ])
  */
  
  const [showAddTask, setShowAddTask] = useState(false)


  
  // Add Task
  const addTask = (task) => {
    console.log(task)

    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    // console.log("delete ", id)
    setTasks(tasks.filter((task) => task.id !== id))

    //localStorage.setItem("MyTasks", JSON.stringify(tasks))
    
  }


  // Toggle Reminder
  const toggleReminder = (id) => {
    //console.log('reminder', id)
    setTasks(tasks.map((task) => task.id === id
      ? { ...task, reminder: !task.reminder }
      : task))

  }
  
  localStorage.setItem("MyTasks", JSON.stringify(tasks))

  
  
  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={ !showAddTask}
      />
      <ExportAnswers tasks={tasks} />
      <ImportAnswers onLoadJsonData={ LoadJsonData}/>
      {showAddTask && <AddTask onAdd={addTask}></AddTask>}
      {
        tasks.length > 0 ?
          (<Tasks tasks={tasks} onDelete={deleteTask} onTogggle={toggleReminder}></Tasks>)
          : ('No Task to Show')
      }

    </div>
  );
}

export default App;
