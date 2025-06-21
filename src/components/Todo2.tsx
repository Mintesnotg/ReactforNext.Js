import { useState } from "react";


export default function TodoApp2() {

    interface ToDoTasks {
        'TaskName': string,
        'Id': number
    }

    const [listoftasks,settasks]=useState<ToDoTasks []>([])
    const [taskName,settaskName]=useState<string>('')
   
    const handleInsert = ()=> {
      
       if (taskName.trim() === "") return;

       const newtask :ToDoTasks=  {

         TaskName:taskName,
         Id:Date.now()

       }
        settasks((prevtasks)=> [...prevtasks, newtask])
        settaskName('')

    }
    const handledelete = (id:number)=> {

       settasks((perv)=>perv.filter(task=>(
           task.Id!=id
       )))
    }

    return (

        <div>
            <h1>To do List App</h1>
             
             <input type="text " placeholder="Add your task here" value={taskName} onChange={(e)=> settaskName(e.target.value)}  /> { ' '}
             <button onClick={handleInsert}>Add</button>
              <ul>
                {listoftasks.map(tasks=>(
                    <ol>{tasks.TaskName} <button onClick={()=>handledelete(tasks.Id)} >Remove</button></ol> 
                ))}
              </ul>

            


        </div>
    )
}