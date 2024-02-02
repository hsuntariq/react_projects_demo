import React, { useState, createContext, useContext } from 'react'
import { myData } from './data'

const personContext = createContext()


const Drilling = () => {
    const [data, setData] = useState(myData)
    const removePerson = (id) => {
        const newPerson = data.filter((item) => {
            return item.id !== id
        })

        setData(newPerson)

    }
    return (
        <personContext.Provider value={{
            removePerson,
            data
        }}>
            <List items={data} remove={removePerson} />
        </personContext.Provider>
    )
}



const List = ({ items, remove }) => {
    const test = useContext(personContext);
    return (
        <>
            {items.map((item) => {
                return <SingleData key={item.id} item={item} />
            })}
        </>
    )
}


const SingleData = ({ item }) => {

    return (
        <>
            <div className="card p-3">
                <h4>{item.name}</h4>
                <h4>{item.age}</h4>
                <button onClick={() => text(item.id)} className="btn btn-danger">
                    Delete
                </button>
            </div>
        </>
    )
}



export default Drilling