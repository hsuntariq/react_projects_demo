import React, { useContext, useEffect, useState } from 'react'
import { data } from './data';
import Single from './Single';
import { AppContext } from '../context/Context';

const Lorem = () => {
    const [number, setNumber] = useState(null)
    const [myData, setMyData] = useState([]);
    const [error, setError] = useState(false);
    const { data, setData } = useContext(AppContext)
    useEffect(() => {
        if (number > data.length) {
            setError(true)
            setMyData([])
        } else {
            setError(false)
        }
    }, [number])

    const generateLorems = (e) => {
        e.preventDefault()
        const updatedData = data.slice(0, number);
        setMyData(updatedData)
        setData([])


    }
    return (
        <>
            <form className=' col-lg-4 mx-auto shadow p-5'>
                <h1 className="text-center display-3">
                    Lorem Generator
                </h1>
                <input value={number} onChange={(e) => setNumber(e.target.value)} type="number" placeholder='Enter the number' className='form-control' />
                {error &&
                    <p className='text-danger fw-bolder'>
                        Please enter a number less than {data.length}
                    </p>
                }
                <button disabled={error} onClick={generateLorems} className="btn btn-dark w-100 my-2">
                    Generate Lorems
                </button>
            </form>
            <div className="container">
                <div className="row">
                    {myData.map((d) => {
                        return <Single string={d} />
                    })}
                </div>
            </div>
        </>
    )
}

export default Lorem