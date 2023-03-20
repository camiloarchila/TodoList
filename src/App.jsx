import { useEffect, useState } from "react"
import Header from "./Components/header"
import { TaskList } from "./Components/TaskList"


function App() {

  const [newtasks, setnewtasks] = useState([]);
  const [value, setvalue] = useState('');

  const handlechange = (event) => {
    setvalue(event.target.value);
  }

  const handleClickButton = (event) => {
    let taskslist = [...newtasks];
    event.preventDefault();
    taskslist = [...newtasks, {name: value}];
    localStorage.setItem("TasksList", JSON.stringify(taskslist));
    setnewtasks(taskslist);
    setvalue('');
  }

  const handleDeleteItem = (itemdeleted) => {
      let tasks = newtasks.filter(item => item.name != itemdeleted);
      setnewtasks(tasks);
      localStorage.setItem("TasksList", JSON.stringify(tasks));
  }

  const handleDeleteAll = () =>{
    setnewtasks([]);
  }

  useEffect(()=>{
    let data = localStorage.getItem("TasksList");
    let datalist = JSON.parse(data);
    if(datalist != null){
    setnewtasks(datalist);
  }
  }, [])

  return (
    <div >
      <Header/>
      <input type="text" id="inputtask" value={value} placeholder="Add your new todo" onChange={handlechange}></input> 
      <button onClick={handleClickButton}>+</button>
      <TaskList list={newtasks} onDeletetask={handleDeleteItem}/> 
      <button onClick={handleDeleteAll}>Delete All</button> 
    </div>
  )
}

export default App
