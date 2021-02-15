import React from 'react'

function Clear({handleClear}) {
    return (
        <>
           <button className='clear_btn' onClick={handleClear} >Clear List</button>
        </>
    )
}

export default Clear
