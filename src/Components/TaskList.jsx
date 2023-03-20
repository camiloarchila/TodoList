import { useEffect, useState } from "react";
import { TaskCard } from "./TaskCard"

export const TaskList = (prop) => {

    const {list} = prop;
    const [tasks, setTasks] = useState([]);

    const handleCheckClick = (name) =>{

        let taskschecked = [...tasks];

        if(!tasks.includes(name)){
            taskschecked = [...tasks, name];
        }else{
            taskschecked = taskschecked.filter(task => name != task);
        }

        setTasks(taskschecked)

        localStorage.setItem("Checked", JSON.stringify(taskschecked))
    }

    useEffect(() => {
        const datastored = localStorage.getItem("Checked");
        const datatasksChecked = JSON.parse(datastored);
        if(datatasksChecked != null){
        setTasks(datatasksChecked);
    }
    }, [])

    return <ul>
        <input type="text" id="inputtask" placeholder="Add your new todo"></input> 
        <button>+</button>
        {
            list.map((task) => <TaskCard name={task.name} onCheckClick={handleCheckClick}  isClicked={tasks.includes(task.name)}/>)
        }
    </ul>
}