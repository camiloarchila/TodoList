import { useEffect, useState } from "react";

export function useTaskList(){
    const [tasks, setTasks] = useState([]);

    function checkTast(name){
        
        let taskschecked = [...tasks];

        if(!tasks.includes(name)){
            taskschecked = [...tasks, name];
        }else{
            taskschecked = taskschecked.filter(task => name != task);
        }

        setTasks(taskschecked)

        localStorage.setItem("Checked", JSON.stringify(taskschecked))
    }

    function deleteTask(name){
        let taskschecked = [...tasks];
        taskschecked = taskschecked.filter(task => name != task);
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

    return [tasks, checkTast, deleteTask];
}

export function useCreateTask(){
    const [newtasks, setnewtasks] = useState([]);
    const [value, setvalue] = useState('');

  function addTask(value){
    let taskslist = [...newtasks];
    taskslist = [...newtasks, {name: value}];
    
    setnewtasks(taskslist);
    setvalue(event.target.value);
    localStorage.setItem("TasksList", JSON.stringify(taskslist));
  }

  function deleteTask(itemdeleted){
    let tasks = newtasks.filter(item => item.name != itemdeleted);
      setnewtasks(tasks);
      localStorage.setItem("TasksList", JSON.stringify(tasks));
  }

  function deleteAll(){
    localStorage.clear();
    setnewtasks([]);
  }
   
  useEffect(()=>{
    let data = localStorage.getItem("TasksList");
    let datalist = JSON.parse(data);
    if(datalist != null){
    setnewtasks(datalist);
  }
  }, [])

  return [newtasks, addTask, deleteTask, deleteAll]
}