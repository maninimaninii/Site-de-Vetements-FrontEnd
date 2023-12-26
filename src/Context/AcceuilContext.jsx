import React, { createContext } from 'react'

import produits from '../Components/Assets/all_product'

export const AcceuilContext = createContext(null); 

const AcceuilContextProvider = (props)=>{
    const contextvalue ={ produits };

    return (
        <AcceuilContext.Provider value = {contextvalue}>
            {props.childern}
            </AcceuilContext.Provider>
    )
}
export default AcceuilContextProvider;