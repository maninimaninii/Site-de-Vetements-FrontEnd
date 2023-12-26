import React from 'react'
import './Footer.css'
import logo from '../Assets/logo_big.png'
import insta from '../Assets/instagram_icon.png'
import pint from '../Assets/pintester_icon.png'
import what from '../Assets/whatsapp_icon.png'





export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footerlogo">
        <img src={logo}/>
        </div>
        <div>
            <ul className="footerlinks">
                <li>Entreprise</li>
                <li>Produits</li>
                <li>A propos de nous</li>
                <li>Contact</li>
            </ul>

            <div className="footersocialicon">

                <div className="footericoncontainer">
                    <img src = {insta}/>
                </div>

                <div className="footericoncontainer">
                    <img src = {pint}/>
                </div>

                <div className="footericoncontainer">
                    <img src = {what}/>
                </div>
            </div>

            <div className="footercopyright">
                <hr/>
                <p>Copyright @ 2023 - Tout Droits Réservés</p>
            </div>
        </div>
    </div>
  )
}
