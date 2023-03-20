import Header from "./Components/header"
import { TaskList } from "./Components/TaskList"

const newtasks = [
  {name: "New task"},
  {name: "Task1"},
  {name: "Task2"}
]

function App() {

  return (
    <div >
      <Header/>
      <TaskList list={newtasks}/>  
    </div>
  )
}

export default App
