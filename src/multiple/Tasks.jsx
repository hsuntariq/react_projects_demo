import React, { useState } from 'react'

const Tasks = () => {
    const [task, setTask] = useState({
        name: '', email: '', password: '', age: '', org: ''
    })
    const [data, setData] = useState([])
    // destructure
    const { name, email, password, age, org } = task



    const handleChange = (eve) => {
        setTask((prevValue) => ({
            ...prevValue,
            [eve.target.name]: eve.target.value
        }))
    }





    return (
        <>
            <div className="container col-lg-5 mx-auto shadow p-4 mt-5">

                <form>
                    <label htmlFor="">Name</label>
                    <input value={name} onChange={handleChange} name='name' className="form-control" />
                    <label htmlFor="">Email</label>
                    <input value={email} onChange={handleChange} name='email' className="form-control" />
                    <label htmlFor="">Password</label>
                    <input value={password} onChange={handleChange} name='password' className="form-control" />
                    <label htmlFor="">Age</label>
                    <input value={age} onChange={handleChange} name='age' n className="form-control" />
                    <label htmlFor="">Organization</label>
                    <input value={org} onChange={handleChange} name='org' className="form-control" />
                    <button onClick={handleChange} className="btn btn-dark w-100 my-3">
                        Add
                    </button>
                </form>
            </div>
        </>
    )
}

export default Tasks