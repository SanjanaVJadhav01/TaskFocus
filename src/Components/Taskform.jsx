// import { useState } from "react"

// export default function Taskform({addTask}) {
//     const [task, setTask]= useState('');
//     const [priority, setPriority] = useState('medium');
//     const [category, setCategory] = useState('general');

//     const handlesubmit = (e) => {
//         e.preventDefault(); //doesn't refresh the page upon add task 
//         addTask({text: task, priority, category, completed: false});

//         //reset task input area, priority and category after adding task
//         setTask('');
//         setPriority('medium');
//         setCategory('general');
//     }

//     return (
//         <form onSubmit={handlesubmit}>
//             <div>
//                 <input type="text" placeholder="Enter the task" value={task}
//                 onChange={(e) => setTask(e.target.value)} />
//                 <button type="submit">Add Task</button>
//                 <h1>{task} {priority} {category}</h1>
//             </div>

//             <div>
//                 <select value={priority} onChange={(e) => setPriority(e.target.value)}>
//                     <option value="high">High</option>
//                     <option value="medium">Medium</option>
//                     <option value="low">Low</option>
//                 </select>

//                 <select value={category} onChange={(e) => setCategory(e.target.value)}>
//                     <option value="general">General</option>
//                     <option value="work">Work</option>
//                     <option value="personal">Personal</option>
//                 </select>
//             </div>
//         </form>
//     )
// }


import React from 'react'
import { useState } from 'react'

export default function TaskForm({addTask}) {
    const [task, setTask] = useState('');
    const [priority, setPriority] = useState("Medium")
    const [category, setCategory] = useState("General")

    const handlesubmit = (e)=>{
        e.preventDefault();
        addTask({text:task, priority, category, completed: false})
        //Reset State:
        setTask(" ");
        setPriority("Medium")
        setCategory('General')
    }
  return (
    <form onSubmit={handlesubmit} className='task-form'>
        <div id="inp">
            <input 
            type = "text"
            placeholder='Enter Your Task'
            value={task}
            onChange={(e)=>setTask(e.target.value)} />
            <span><button type='submit'>Add Task</button></span>
        </div>

        <div id="btns">
            <select value={priority} onChange={(e)=>setPriority(e.target.value)}>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>

            <select value={category} onChange={(e)=>setCategory(e.target.value)}>
                <option value="General">General</option>
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
            </select>
        </div>
    </form>
  )
}