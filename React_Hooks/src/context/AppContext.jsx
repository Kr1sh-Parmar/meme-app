import { createContext } from "react";

export const AppContext = createContext()

const ContextProvider = (props) => {

    const phone = "+91 8384947938"
    const name = "Encode"

    return (
        <AppContext.Provider value={{phone, name}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider