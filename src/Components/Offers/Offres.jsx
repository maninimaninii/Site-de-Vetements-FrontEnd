import React from 'react'
import './Offres.css'
import exclu from '../Assets/exclusive_image.png'


export const Offres = () => {
  return (
    <div className='offres'>
        <div className="offers-left">
            <h1>Exclusif</h1>
            <p>Offres pour vous</p>
            <p>BEST SELLERS</p>
            <button>Consulter</button>
        </div>

        <div className="offers-right">
            <img src={exclu}/>
        </div>
        
    </div>
  )
}
