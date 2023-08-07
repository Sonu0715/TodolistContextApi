import React, {useContext, useState} from 'react'
import { v1 } from 'uuid';
import { TodoContext } from '../context/TodoProvider';
import './todoInput.css';


const TodoInput = () => {
    const [name, setName] = useState("");
    var todoContext = useContext(TodoContext)
  return (
    <div className='row'>
        <input value={name} onChange={(e) => setName(e.target.value)} className='itemInput' type='text'/>
        <button className='addbutton'
        onClick={() => {
            if (name !== "") {
                todoContext.addTodo({
                    id: v1(),
                    title: name
                })
                setName("")
            }
        }}
        >ADD</button>
    </div>
  )
}

export default TodoInput