import React, { useContext } from 'react'
import { AcceuilContext } from '../Context/AcceuilContext'
import { useParams } from 'react-router-dom';

export const Produits = () => {

  const {produits} = useContext(AcceuilContext);
  const {productId} = useParams(); 
  const produit = produits.find((e) => e.id === Number(productId)); 

  return (
    <div>
      
    </div>
  )
}
