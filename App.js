import React, {useState} from 'react';
import InputForm from './Components/InputForm';
import Tasks from './Components/Tasks';
import './App.css';
import Clear from './Components/Clear';

const App = () => {
    const [taskList, setTaskList] = useState([])
    const [inputValue, setInputValue] = useState('')
    const handleAddTask = (mainInput) => {
        inputValue === ''? alert('Please enter your task!!'):setTaskList([...taskList,inputValue])
        setInputValue('')
        mainInput.current.focus()
    }
    
    const handleClear = () => {
        setTaskList([])
    }

    return(
        <>
        <div className='todo_box'>
            <InputForm handleAddTask={handleAddTask} inputValue={inputValue} setInputValue={setInputValue} />
            <Tasks taskList={taskList} setTaskList={setTaskList}  />
            {taskList.length ? <Clear handleClear={handleClear} /> : null}
        </div>
        </>
    )
}

export default App;