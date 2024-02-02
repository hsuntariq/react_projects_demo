import React, { useState } from 'react'

const ObjectState = () => {
    const [user, setUser] = useState({
        name: 'Ali', age: 20, email: 'ali@mail.com'
    })
    // destructure the user
    const { name, age, email, org } = user;
    const press = () => {
        setUser({ ...user, name: '', org: 'Test' })
    }
    return (
        <>
            <div className="container text-center">

                <h1>{name}</h1>
                <h1>{age}</h1>
                <h1>{email}</h1>
                <h1>{org}</h1>
                <button onClick={press} className="btn btn-dark">
                    Change name
                </button>
            </div>
        </>
    )
}

export default ObjectState