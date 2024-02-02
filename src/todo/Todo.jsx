import React, { useState } from 'react'
import SingleTodo from './SingleTodo';

const Todo = () => {
    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState([]);
    const handleClick = () => {
        setTodos([...todos, { id: Date.now(), todo }])
    }
    return (
        <>
            <div className="col-lg-5 mx-auto shadow p-3 text-center">
                <input value={todo} onChange={(e) => setTodo(e.target.value)} type="text" className='form-control' />
                <button onClick={handleClick} className='btn btn-info w-100 my-2'>
                    Add
                </button>
            </div>
            <div className="container">
                <div className="row">
                    {todos.map((item) => {
                        return <SingleTodo {...item} />
                    })}
                </div>
            </div>
        </>
    )
}

export default Todo