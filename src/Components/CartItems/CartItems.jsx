import React, { useContext } from 'react'
import './CartItems.css'
import { AcceuilContext } from '../../Context/AcceuilContext'

import remove from '../Assets/cart_cross_icon.png';

export const CartItems = () => {
  const{gettotal,getNumberItems, produits, cartItems, addToCart, removeFromCart} = useContext(AcceuilContext);
  return (
    
    <div className='cartitems'>
        <div className="cartitemsmain">
            <p>Produits</p>
            <p>Nom</p>
            <p>Prix</p>
            <p>Quantite</p>
            <p>Total</p>
            <p>Retirer</p>
        </div>
        <hr/>
        {produits.map((e)=>{
            if(cartItems[e.id] > 0){
                return <div>
                <div className="cartitemsformat cartitemsmain">
                    <img src={e.image} alt="" className='carticonproduct'/>
                    <p>{e.name}</p>
                    <p>${e.price}</p>
                    <button className='cartitemsquantite'>{cartItems[e.id]}</button>
                    <p>{e.price *cartItems[e.id]} </p>
                    <img className='enlver' src={remove} onClick={() => removeFromCart(e.id)} alt="" />
                </div>
    
                <hr/>
            </div>
            }

            return null;
        })}
        <div className="cartitemsdown">
            <div className="cartitemstotal">
                <h1>Total du panier</h1>
                <div>
                    <div className="cartitemstotalitem">
                        <p>Sous Total</p>
                        <p>${gettotal}</p>
                    </div>
                    <hr/>
                    <div className="cartitemstotalitem">
                        <p>Frais de port</p>
                        <p>Gratuit</p>
                    </div>

                    <hr/>
                    <div className="cartitemstotalitem">
                        <h3>Total</h3>
                        <p>${gettotal()}</p>
                    </div>
                </div>

                <button>Proceder au paiement</button>
            </div>
            <div className="cartitempromo">
                <p>Si vous avez un code pormo, veuillez le saisir</p>
                <div className="promobox">
                    <input type="text" placeholder='votre code' />
                    <button>Envoyer</button>
                </div>
            </div>
        </div>
    </div>
  )
}
