import React, { createContext, useState } from 'react'

import produits from '../Components/Assets/all_product'

export const AcceuilContext = createContext(null); //creation du contexte(permet de partgaer les donnéees entre les pages)


const getDefaultCart = ()=>{
    let cart = {}; 
    for (let index = 0; index < produits.length + 1; index++) {
        cart[index] = 0; 
        
    }
    return cart; 
}


const AcceuilContextProvider = (props)=>{


    const [cartItems, setCartItems] = useState(getDefaultCart()); //panier vide de base
    

    const addToCart = (id)=>[
        setCartItems((prev) => ({...prev, [id]:prev[id] + 1}))
    ]

    const removeFromCart = (id)=>[
        setCartItems((prev) => ({...prev, [id]:prev[id] + -1}))
    ]

    const gettotal = () =>{
        let total = 0; 
        for(const item in cartItems){
            if(cartItems[item] >0){
                let iteminfo = produits.find((produit) => produit.id === Number(item))
                total += iteminfo.price * cartItems[item]; 
            }
        }
        return total; 
    }

    const getNumberItems = () =>{
        let total = 0; 
        for(const item in cartItems){
            total += cartItems[item]; 
        }

        return total;
    }

    console.log(cartItems)
    
    const contextvalue ={ gettotal,getNumberItems, produits , cartItems, addToCart, removeFromCart};
    return (  //le provider quant à lui définit les données par défaut qui seront partagées
        <AcceuilContext.Provider value = {contextvalue}>
            {props.children}
            </AcceuilContext.Provider>
    )
}
export default AcceuilContextProvider;