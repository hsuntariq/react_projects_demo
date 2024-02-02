import { createContext, useState } from "react";
import { myData } from "../PropDrilling/data";

// create the context
export const AppContext = createContext();

// create the provider

export const AppProvider = ({ children }) => {
    const [data, setData] = useState(myData)
    return (
        <AppContext.Provider value={{
            data,
            setData
        }}>
            {children}
        </AppContext.Provider>
    )
}