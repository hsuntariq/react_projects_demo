import React, { useState } from 'react'

const WhyReducer = () => {
    const [todo, setTodo] = useState('');
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState('')
    const [data, setData] = useState([])
    const handleClick = (e) => {
        e.preventDefault()
        if (!todo) {
            setError(true)
            setSuccess(false)
            setMessage('Please enter a value')
        } else {
            setError(false)
            setSuccess(true)
            setMessage('Todo added successfully!')
            setData([...data, todo])
        }
    }
    return (
        <>
            <div className="shadow p-4 container col-lg-5 mx-auto">
                <form>
                    <input value={todo} onChange={(e) => setTodo(e.target.value)} type="text" className='form-control' placeholder='todo...' />
                    {
                        error ? <p className="text-danger fw-bolder">
                            {message}
                        </p>
                            :
                            <p className="text-success fw-bolder">
                                {message}
                            </p>
                    }
                    <button onClick={handleClick} className='btn btn-dark my-2 w-100'>
                        Add Todo
                    </button>
                </form>
            </div>
        </>
    )
}

export default WhyReducer