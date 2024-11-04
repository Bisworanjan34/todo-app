import React from 'react'
import './Todolistitem.css'
let Todolistitem=({ todo, completed, deletef, toggleCompleted})=>{
    return (
        <>
          <div className=" todo-item d-flex justify-content-between gap-3 my-2  align-items-center" style={{ height: '40px' }}>
      <input type="checkbox" checked={completed} onChange={toggleCompleted} />
      <div className="todo-task ">
        <h5 style={{ textDecoration: completed ? 'line-through' : 'none' ,color:completed? 'rgb(0, 231, 15)':'none'}}>{todo}</h5>
      </div>
      <div className="todo-delet">
        <button className='deletebtn' onClick={deletef}>Delete</button>
      </div>
    </div>

        </>
    )
}
export default Todolistitem
