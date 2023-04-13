import { useEffect, useState } from "react"
import Header from "./Components/header"
import { TaskList } from "./Components/TaskList"
import { useCreateTask } from "./hooks/useTaskList"
import {Flex, Button, FormControl, FormLabel, Input, FormHelperText, useColorMode} from "@chakra-ui/react";


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

  const {toggleColorMode} = useColorMode();

  return (
    <Flex  alignItems="center" justifyContent="center" minHeight="auto" height="50%" flexDirection="column" className="App">
      <Header />
        <FormControl isInvalid={formValidation.task} width="50%">
            <FormLabel color="#4FD1C5">Tarea</FormLabel>
            <Input value = {value} onChange={handlechange}/>
            <FormHelperText color={"red"}>{formValidation.task}</FormHelperText>
        </FormControl>
        <FormControl isInvalid={formValidation.description} width="50%">
            <FormLabel color="#4FD1C5">Descripcion</FormLabel>
            <Input value = {description} onChange={handleDescriptionChange}/>
            <FormHelperText color={"red"}>{formValidation.description}</FormHelperText>
        </FormControl>
        <Button mb="30" colorScheme="teal" onClick={handleSubmit} isDisabled={!isValid}>Agregar Tarea</Button>
      <TaskList list={newtasks} onDeletetask={handleDeleteItem}/> 
      <Button mt="50" colorScheme="teal" onClick={handleDeleteAll}>Delete All</Button> 
      <Button mt={6} onClick={toggleColorMode}>Toggle Color Mode</Button>
    </Flex>
    
  )
}

export default App
