import React, { useState } from 'react'
import './Todolist.css'
import Todolistitem from '../todoListitem/Todolistitem'
const Todolist = () => {

  // let [todo,setTodo]=useState('')
  // let [todoList,setTodolist]=useState([])

  // let addTaskfun=()=>{
  //     setTodolist([...todoList,todo])
  //     console.log(todoList)
  //     setTodo('')
  // }

  // let deletefun=(index)=>{
  //   setTodolist(todoList.filter((d, i) => i !== index));


  // }

  let [todo, setTodo] = useState('');
  let [todoList, setTodolist] = useState([]);
  let [completed, setCompleted] = useState(0);

  let addTaskfun = () => {
    setTodolist([...todoList, { task: todo, completed: false }]);
    setTodo('');
  };

  let deletefun = (index) => {
    let newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodolist(newTodoList);
  };

  let toggleCompleted = (index) => {
    let newTodoList = [...todoList];
    newTodoList[index].completed = !newTodoList[index].completed;
    setTodolist(newTodoList);
    setCompleted(newTodoList.filter((task) => task.completed).length);
  };

  return (
    <div>
      <div className="container border p-3 todo-list ">
      <div><h1 className='todo-app'>TODO-APP</h1></div>
        <div className="row  ">
            <div className="col d-flex gap-5 p-2 px-3 align-items-center">
                <div className="title">
                    <h3>Task Done</h3>
                   <p> Keep It Up </p>
                </div>
             <div className="task-complite">
               <h5>{completed}/{todoList.length}</h5>
              </div>   
            </div>
        </div>
        <div className="row ">
          <div className="col d-flex gap-3 align-items-center ">
           <div className="input-task">
           <input type="text" placeholder='type your next task' className=' border-0 ' onChange={(e)=>setTodo(e.target.value)} value={todo}/>
           </div>
            <div className='add-task ' onClick={addTaskfun} >
                <h1>+</h1>
            </div>
          </div>
        </div>
      </div>
      <div className=" todo-all-task container" >
        <div className="row t-all border">
          <div className="col">
          {
          todoList.length>0 && (
            todoList.map((t,i)=>{
              return(
                <div className="div"key={i} >
                   <Todolistitem  
                    index={i}
                    todo={t.task}
                    completed={t.completed}
                    deletef={() => deletefun(i)}
                    toggleCompleted={() => toggleCompleted(i)}
          
                   />

                </div>
              )
            })
          )
        }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Todolist
