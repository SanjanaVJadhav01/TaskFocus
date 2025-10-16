import { useState } from "react";
import Progresstracker from "./Components/Progresstracker";
import Taskform from "./Components/Taskform";
import TaskList from "./Components/Tasklist";


export default function App() {
  const [tasks, setTasks] = useState([]);
  
  const addTask = (task) => {
    setTasks(task);
  }
  return (
    <div>
      <h1>Task Focus</h1>
      <p>Our Friendly TaskManager</p>
      <Taskform addTask = {addTask}/>
      <TaskList />
      <Progresstracker />
      <button>Clear all tasks</button>
    </div>
  )
}
