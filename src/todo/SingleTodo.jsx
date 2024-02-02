import React from 'react'

const SingleTodo = ({ id, todo }) => {
    return (
        <>
            <div className="col-lg-3">
                <div className="d-flex card">
                    <h5>{todo}</h5>
                </div>
            </div>
        </>
    )
}

export default SingleTodo