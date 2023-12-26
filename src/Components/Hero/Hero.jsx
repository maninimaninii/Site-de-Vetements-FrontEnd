import React from 'react'
import './Hero.css'; 
import hand_icon from '../Assets/hand_icon.png'
import fleche from '../Assets/arrow.png'
import beck from '../Assets/beck.png'

export const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
        <h2>NOUVEL ARRIVAGE</h2>
        <div className='hero-hand-icon'>
            <p>Nouveau</p>
            <img src={hand_icon}/>
        
        <p>Collections</p>
        <p>Pour tous</p>
        </div>

        <div className='hero-latest-button'>
            <div>Dernière Collection</div>
            <img src={fleche}/>
        </div>
        
        
        </div>


        <div className='hero-right'>
            <img src={beck}/>
        </div>
    </div>
  )
}
