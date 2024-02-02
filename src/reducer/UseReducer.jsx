import React, { useReducer, useState } from 'react'
import { reducer } from './reducer'
const UseReducer = () => {
    const [todo, setTodo] = useState()

    const initialState = {
        error: false,
        success: false,
        message: '',
        data: []
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const handleClick = (e) => {
        e.preventDefault()
        if (!todo) {
            dispatch({ type: "EMPTY" })
        } else {
            dispatch({ type: "ADD", payload: todo })
        }

        setTimeout(() => {
            dispatch({ type: "RESET" })
        }, 2000)

        setTodo('')
    }




    return (
        <>
            <div className="container col-lg-5 mx-auto shadow p-3">
                <form>
                    <input type="text" className='form-control' placeholder='enter your todo...' value={todo} onChange={(e) => setTodo(e.target.value)} />
                    {state.error &&
                        <p className="text-danger fw-bold">
                            {state.message}
                        </p>
                    }
                    {state.success &&
                        <p className="text-success fw-bold">
                            {state.message}
                        </p>
                    }
                    <button onClick={handleClick} className='btn btn-success w-100 my-2'>
                        Add
                    </button>
                </form>
            </div>

            <div className="container  mx-auto">
                <div className="row">

                    {state.data.map((item) => {
                        return <>
                            <div className="col-lg-3">
                                <div className="card">
                                    {item}
                                </div>
                            </div>
                        </>
                    })}
                </div>
            </div>
        </>
    )
}

export default UseReducer