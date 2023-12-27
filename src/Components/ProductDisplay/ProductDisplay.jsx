import React, { useContext } from 'react'
import './ProductDisplay.css'
import star from '../Assets/star_icon.png'
import stard from '../Assets/star_dull_icon.png'
import { AcceuilContext } from '../../Context/AcceuilContext'

export const ProductDisplay = (props) => {

    const {produit} = props; 
    const {addToCart} = useContext(AcceuilContext)
    const randomNumber = Math.floor(Math.random() * 200) + 1;
  return (
    <div className='productdisplay'>


    <div className="productdisplayleft">
        <div className="productdisplayimglist">
            <img src={produit.image} alt="" />
            <img src={produit.image} alt="" />
            <img src={produit.image} alt="" />
            <img src={produit.image} alt="" />
        </div>

        <div className="productdisplayimage">
            <img className = 'productdisplaymainimg' src={produit.image} alt="" />
        </div>
    </div>

    <div className="productdisplayright">
        <h1>{produit.name}</h1>
        <div className="productdisplaystar">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={stard} alt="" />
            <p>({randomNumber})</p>
        </div>


        <div className="displayprice">${produit.price}</div>
        <div className='size'>
            <h1>Choisissez votre taille</h1>
            <div className="sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>

            </div>
        </div>
        <button onClick={() => {addToCart(produit.id)}}>Ajouter au panier</button>
    </div>

    </div>
  )
}
