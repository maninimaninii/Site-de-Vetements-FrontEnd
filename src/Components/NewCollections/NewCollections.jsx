import React from 'react'
import './NewCollections.css'
import nouveau from '../Assets/new_collections'
import { Item } from '../Items/Item'

export const NewCollections = () => {
  return (
    <div className='new-collections'>
        <h1>NOUVELLE COLLECTION</h1>
        <div className="collections">
            {nouveau.map((nouvo, i) => {
                return <Item key={i} id={nouvo.id} name={nouvo.name} image={nouvo.image} price = {nouvo.price}/>
            })}
        </div>
    </div>
  )
}
