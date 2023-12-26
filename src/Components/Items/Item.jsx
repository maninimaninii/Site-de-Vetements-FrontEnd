import React from 'react'
import './Item.css'

export const Item = (props) => {
  return (
    <div className='item'>
        <img src={props.image}/>
        <p>{props.name}</p>
        <div className="item-price">€{props.price}</div>
    </div>
  )
}
