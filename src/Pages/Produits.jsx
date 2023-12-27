import React, { useContext } from 'react'
import { AcceuilContext } from '../Context/AcceuilContext'
import { useParams } from 'react-router-dom';
import { BreadCrums } from '../Components/BreadCrums/BreadCrums';
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay';
import { Related } from '../Components/Related/Related';


export const Produits = () => {

  const {produits} = useContext(AcceuilContext);
  const {productId} = useParams(); 
  const produit = produits.find((e) => e.id === Number(productId)); 

  return (
    <div>
      <BreadCrums produit = {produit}/>
      <ProductDisplay produit = {produit}/>
      <Related produit = {produit}/>
    </div>
  );
}
