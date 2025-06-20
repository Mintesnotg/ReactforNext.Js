
import { useState } from "react"
let nextId = 0;

export default function ToDoApp() {
    interface ToDoTasks {
        "name": string,
        "id": number
    };

    const [tasklist, setTask] = useState<ToDoTasks[]>([])
    const [taskname, setTaskName] = useState<string>('')

    const handleTask = () => {
    if (taskname.trim() === "") return;

        const newtask: ToDoTasks = {
            id: Date.now(),
            name: taskname
        }
        setTask((previoustask) => [...previoustask, newtask])
        setTaskName("")
    }

    const handleDelete = (id: number) => {
        setTask((prevTasks) => prevTasks.filter((task) => task.id !== id));
    };
    return (

        <div>

            <input className="border border-gray-300 px-3 py-1 rounded w-full" placeholder="Add your Task" value={taskname} onChange={(e) => setTaskName(e.target.value)} type="text" /> <button onClick={handleTask}> Insert</button>
            <ul>
                {tasklist.map(taskmap => (
                    <li>{taskmap.name}

                        <button onClick={()=>handleDelete(taskmap.id)}>Delete</button>
                    </li>

                ))}
            </ul>
        </div>
    )


}