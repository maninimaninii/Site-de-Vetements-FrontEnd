import React, { createContext } from 'react'

import produits from '../Components/Assets/all_product'

export const AcceuilContext = createContext(null); //creation du contexte(permet de partgaer les donnéees entre les pages)

const AcceuilContextProvider = (props)=>{
    const contextvalue ={ produits };

    return (  //le provider quant à lui définit les données par défaut qui seront partagées
        <AcceuilContext.Provider value = {contextvalue}>
            {props.children}
            </AcceuilContext.Provider>
    )
}
export default AcceuilContextProvider;