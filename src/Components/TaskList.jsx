
import { TaskCard } from "./TaskCard"
import { useTaskList } from "../hooks/useTaskList";

export const TaskList = (prop) => {

    const {list, onDeletetask} = prop;
    const [tasks, checkTast, deleteTask] = useTaskList([]);

    const handleCheckClick = (name) =>{
        checkTast(name);
    }

    const handleDeleteCick = (name) =>{
        deleteTask(name);
        onDeletetask(name);
    }

    
    return <ul>
        {
            list.map((task) => <TaskCard name={task.name} onCheckClick={handleCheckClick}  onClickDelete={handleDeleteCick} isClicked={tasks.includes(task.name)}/>)
        }
    </ul>
}