import React, { useState } from 'react'
import Values from 'values.js'
import SingleColor from './SingleColor'
const Color = () => {
    const [colorValue, setColorValue] = useState('')
    const [error, setError] = useState(false)
    const [data, setData] = useState([])
    const handleClick = () => {
        try {
            setError(false)
            const color = new Values(colorValue).all(10);
            setData(color)
        } catch (error) {
            setError(true)
        }
    }
    return (
        <>
            <div className="container col-lg-5 mx-auto shadow p-4">
                <h1 className='display-5 text-center'>Color Generator App</h1>
                <input value={colorValue} onChange={(e) => setColorValue(e.target.value)} type="text" placeholder='e.g. Red' className={`form-control ${error && 'border-danger'}`} />
                <button onClick={handleClick}
                    style={{
                        background: `${colorValue}`,
                        

                    }}
                    className="btn btn-dark w-100 my-2">
                        
                    Generate Color
                </button>
            </div>
            <div className="container">
                <div className="row">
                    {data.map((item) => {
                        return <SingleColor {...item} color={item.hex} />
                    })}
                </div>
            </div>
        </>
    )
}

export default Color