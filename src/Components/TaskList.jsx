import { useEffect, useState } from "react";
import { TaskCard } from "./TaskCard"

export const TaskList = (prop) => {

    const {list, onDeletetask} = prop;
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

    const handleDeleteCick = (name) =>{
        let taskschecked = [...tasks];
        taskschecked = taskschecked.filter(task => name != task);
        setTasks(taskschecked)
        localStorage.setItem("Checked", JSON.stringify(taskschecked))
        onDeletetask(name);
    }

    useEffect(() => {
        const datastored = localStorage.getItem("Checked");
        const datatasksChecked = JSON.parse(datastored);
        if(datatasksChecked != null){
        setTasks(datatasksChecked);
        }
    }, [])

    return <ul>
        {
            list.map((task) => <TaskCard name={task.name} onCheckClick={handleCheckClick}  onClickDelete={handleDeleteCick} isClicked={tasks.includes(task.name)}/>)
        }
    </ul>
}