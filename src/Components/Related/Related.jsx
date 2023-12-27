import React from 'react'
import './Related.css'
import datawomen from '../Assets/data'
import datamen from '../Assets/datamen'
import datakids from '../Assets/datakids'
import { Item } from '../Items/Item'

export const Related = (props) => {

    let data;  
    const {produit} = props; 

    if (produit.category === 'men') {
        data = datamen;
    } else if (produit.category === 'women') {
        data = datawomen;
    } else {
        data = datakids;
    }

  return (
    <div className='related'>
        <h1></h1>
        <h1>Vous aimerez aussi</h1>
            <hr />
        <div className='relateditem'>
            {data.map((nouvo, i) => {
                
                return <Item key={i} id={nouvo.id} name={nouvo.name} image={nouvo.image} price = {nouvo.price}/>
            })}
        </div>

        
    </div>
  )
}
