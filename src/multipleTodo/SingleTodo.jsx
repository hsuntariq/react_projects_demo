import React from 'react'

const SingleTodo = ({ name, age, email, password, org }) => {
    return (
        <>
            <div className="col-lg-3">
                <div className="card my-1">
                    <p>Name:{name}</p>
                    <p>age:{age}</p>
                    <p>email:{email}</p>
                    <p>password:{password}</p>
                    <p>Organization:{org}</p>
                </div>
            </div>
        </>
    )
}

export default SingleTodo