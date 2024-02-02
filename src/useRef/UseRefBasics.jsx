import React, { useRef, useState } from 'react'

const UseRefBasics = () => {
    const heading = useRef()

    let circle = 0;
    const handleClick = () => {
        circle = circle + 360
        heading.current.style.color = 'red'
        heading.current.style.background = 'black'
        heading.current.style.transition = 'all 0.9s'
        // heading.current.style.transform = 'translateX(200px)'
        heading.current.style.rotate = `${circle}deg`

    }
    return (
        <>
            <div className="container text-center">

                <div ref={heading} className="display-6 text-center">
                    Change My Color
                </div>
                <button onClick={handleClick} className='my-2 btn btn-dark'>
                    Change Color
                </button>
            </div>
        </>
    )
}

export default UseRefBasics