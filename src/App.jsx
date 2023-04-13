import { useEffect, useState } from "react"
import Header from "./Components/header"
import { TaskList } from "./Components/TaskList"
import { useCreateTask } from "./hooks/useTaskList"


function App() {

  const [newtasks, addTask, deleteTask, deleteAll] = useCreateTask([]);
  const [description, setDesciption] = useState('');
  const [value, setvalue] = useState('');
  const [formValidation, setFormValidation] = useState({
    task:undefined,
    description:undefined,
  })

  function handlechange (event) {
    const nametask = event.target.value;
    setFormValidation({...formValidation, task: nametask.length < 3 ? "Name Task is too short" : ""})
    setvalue(nametask);
  }

  function handleDescriptionChange(event){
    const valueDescription = event.target.value;
    setFormValidation({...formValidation, description:valueDescription.length === 0? "Description is required" : "",})
    setDesciption(valueDescription);
  }

  function handleSubmit(event){
    event.preventDefault();
    addTask(value)
    setvalue("")
    setDesciption("")
  }

  const handleDeleteItem = (itemdeleted) => {
      deleteTask(itemdeleted);
  }

  const handleDeleteAll = () =>{
    deleteAll();
  }

  const isValid = Object.keys(formValidation).every(key=>formValidation[key]==="")

  return (
    <div >
      <Header/>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Task
            <input type="text" id="inputtask" value={value} placeholder="Add your new todo" onChange={handlechange}></input> 
          </label>
          <span role = "alert" style={{color:"red"}}>{formValidation.task}</span>
        </div>
        <div>
          <label> Description
            <input type= "text" value = {description} onChange={handleDescriptionChange} ></input>
          </label>
          <span role = "alert" style={{color:"red"}}>{formValidation.description}</span>
        </div>
        <button disabled={!isValid} type="submit">Agregar Tarea</button>
      </form>
      <TaskList list={newtasks} onDeletetask={handleDeleteItem}/> 
      <button onClick={handleDeleteAll}>Delete All</button> 
    </div>
  )
}

export default App
