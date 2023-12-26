import React from 'react'
import './NewsLetter.css'


export const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Recevez des offres exclusives  par mail!</h1>
        <p>Abonnez vous à notre newsletter!</p>
        <div className='inp'>
            <input type='email' placeholder='votremail@random.com'/>
            <button>S'abonner</button>
        </div>
    </div>
  )
}
