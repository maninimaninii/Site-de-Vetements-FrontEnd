import React from 'react'
import './Populaires.css'
import produits from '../Assets/data'
import data_product from '../Assets/data'
import { Item } from '../Items/Item'


export const Populaires = () => {
  return (
    <div className='populaire'>
      <h1>POPULAIRES CHEZ LES FEMMES</h1>
      <hr/>
      <div className='popular-item'>
        {data_product.map((item,i) => {
          return <Item key={i} id={item.id} name={item.name} image={item.image} price = {item.price}/>
        })}
      </div>
    </div>
  )
}
