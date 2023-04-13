import { useEffect, useState } from "react"
import Header from "./Components/header"
import { TaskList } from "./Components/TaskList"
import { useCreateTask } from "./hooks/useTaskList"


function App() {

  const [newtasks, addTask, deleteTask, deleteAll] = useCreateTask([]);
  const [value, setvalue] = useState('');

  const handlechange = (event) => {
    setvalue(event.target.value);
  }

  const handleClickButton = (event) => {
    event.preventDefault();
    addTask(value);
    setvalue('');
  }

  const handleDeleteItem = (itemdeleted) => {
      deleteTask(itemdeleted);
  }

  const handleDeleteAll = () =>{
    deleteAll();
  }

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
