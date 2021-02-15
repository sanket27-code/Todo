import React, {useState} from 'react';
import EditTask from './EditTask';

const LoopingBlock = ({item, index, taskList, setTaskList}) => {
    // const [delStatus, setDelStatus] = useState(false)
    const [isUpdate, setIsUpdate] = useState(false)
    // const CutIt = () => {
    //     setDelStatus(!delStatus)
    // }
     const UpdateTask = () => {
         setIsUpdate(!isUpdate)
     }

     const handleUpdateSubmit = (updateInput) => {
        setTaskList(prev => prev.map((updatetask, indexs)=> (index===indexs?updateInput:updatetask)))
        setIsUpdate(false)
    }

      const DeleteTask = () => {
          taskList = taskList.filter((task, ind)=>{
              return index !== ind
          })
          setTaskList(taskList)
      }
    return(
            <>
            <div className='Task'>
                 <h4 className='msg'>{item}</h4>
                 <div className='options'>
                     <p><i className="fa fa-pencil-square-o edit" aria-hidden="true" onClick={UpdateTask} ></i></p>
                     <p><i className="fa fa-trash-o del" aria-hidden="true" onClick={DeleteTask} ></i></p>
                 </div>
            </div>
            {isUpdate?<EditTask UpdateTask={UpdateTask} taskList={taskList} setTaskList={setTaskList} index={index} setIsUpdate={setIsUpdate} handleUpdateSubmit={handleUpdateSubmit} />:null}
            </>
        )
    }

    // onClick={CutIt} style={{textDecorationLine: delStatus?'line-through':'none'}}
export default LoopingBlock;