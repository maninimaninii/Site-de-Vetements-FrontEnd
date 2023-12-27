import React from 'react'
import './BreadCrums.css'
import arrow from '../Assets/breadcrum_arrow.png'

export const BreadCrums = (props) => {
    const{produit} = props; 
  return (
    <div className='breadcrum'>
        Acceuil <img src={arrow}/>SHOP <img src={arrow}/>{produit.category} <img src={arrow}/>{produit.name}
    </div> 
  )
}
