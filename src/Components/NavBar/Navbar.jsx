import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import car_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'


export const Navbar = () => {

  const [menu, setMenu] = useState('Acceuil')

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo}/>
        <p>MANNY SHOPPER</p>
      </div>
      <ul className='nav-menu'>
        {/* chaque link refere a une route qui renvoie l'element recherche */}
        <li onClick={() =>{setMenu("Acceuil")}}><Link style={{textDecoration:'none',  color:'#626262'} } to='/'>Acceuil</Link> {menu==='Acceuil'?<hr/>:<></>}</li>
        <li onClick={() =>{setMenu('Hommes')}}><Link Link style={{textDecoration:'none',  color:'#626262'} } to='/Hommes'>Hommes</Link>{menu==='Hommes'?<hr/>:<></>}</li>
        <li onClick={() =>{setMenu('Femmes')}}><Link Link style={{textDecoration:'none',  color:'#626262'} } to='/Femmes'>Femmes</Link>{menu==='Femmes'?<hr/>:<></>}</li>
        <li onClick={() =>{setMenu('Enfants')}}><Link Link style={{textDecoration:'none',  color:'#626262'} } to='/Enfants'>Enfants</Link>{menu==='Enfants'?<hr/>:<></>}</li>
      </ul>
      <div className='nav-login-cart'>
      <Link to='/login'><button>Connexion</button></Link>
      <Link to='/cart'><img src={car_icon}/></Link>
      <div className='nombrearticles'>0</div>
      </div>
      
    </div>
  )
}
