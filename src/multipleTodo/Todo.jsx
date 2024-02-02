import React, { useState } from 'react'
import SingleTodo from './SingleTodo'

const Todo = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [age, setAge] = useState('')
    const [org, setOrg] = useState('')
    const [data, setData] = useState([])
    const handleClick = (e) => {
        e.preventDefault();
        setData([...data, { id: Date.now(), name, email, password, age, org }])

    }
    return (
        <>
            <div className="container col-lg-5 mx-auto shadow p-4 mt-5">

                <form>
                    <label htmlFor="">Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" />
                    <label htmlFor="">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" />
                    <label htmlFor="">Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" className="form-control" />
                    <label htmlFor="">Age</label>
                    <input value={age} onChange={(e) => setAge(e.target.value)} type="text" className="form-control" />
                    <label htmlFor="">Organization</label>
                    <input value={org} onChange={(e) => setOrg(e.target.value)} type="text" className="form-control" />
                    <button onClick={handleClick} className="btn btn-dark w-100 my-3">
                        Add
                    </button>
                </form>
            </div>

            <div className="container row mx-auto">
                {data.map((item) => {
                    return <SingleTodo key={item.id} {...item} />
                })}
            </div>

        </>
    )
}

export default Todo