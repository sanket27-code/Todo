import React, {useState} from 'react'

const EditTask = ({UpdateTask, taskList, index, handleUpdateSubmit}) => {
    const [updateInput, setUpdateInput] = useState(taskList[index])
    const handleUpdateData = (e) => {
        setUpdateInput(e.target.value)
    }
    
    return (
        <div className='Update_Modal'>
            <div className='Update_box'>
                <div className='close_modal' onClick={UpdateTask} >+</div>
                <div className='Update_form'>
                     <input className='Update_input' type='text' value={updateInput} onChange={handleUpdateData} />
                     <button className='Update_btn' onClick={()=>handleUpdateSubmit(updateInput)} >Update</button>
                </div>
            </div>
        </div>
    )
}

export default EditTask;
