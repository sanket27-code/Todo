import React from 'react';
import LoopingBlock from './LoopingBlock'

const Tasks = ({taskList, setTaskList}) => {
    return(
        <>
         <div className='Tasks_box'>
             {taskList.length?taskList.map((item, index) => {
                 return(
                         <LoopingBlock key={index} item={item} index={index} taskList={taskList} setTaskList={setTaskList}  />
                 )
             }):null}
         </div>
        </>
    )
}

export default Tasks;