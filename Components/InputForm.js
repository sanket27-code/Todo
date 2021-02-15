import React, {useEffect, useRef} from 'react';

const InputForm = ({handleAddTask,inputValue,setInputValue}) => {

    const mainInput = useRef(null);
    useEffect(()=>{
        mainInput.current.focus();
    })
    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    return(
        <>
        <div className='Form_box'>
                <input type='text' ref={mainInput} className='Input_type' value={inputValue} placeholder='Add your TASK...' onChange={handleChange} />
                <button className='btn' onClick={()=>handleAddTask(mainInput)} >Add Task</button>
        </div>
        </>
    )
}

export default InputForm;