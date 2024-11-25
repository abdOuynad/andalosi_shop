import { createContext } from "react";
//
export const NameContext = createContext()
//
export const NameProvider =({children})=>{
    //
    
    //
    return(
        <NameContext.Provider value={'abdouy'}>
            {children}
        </NameContext.Provider>
    )
}