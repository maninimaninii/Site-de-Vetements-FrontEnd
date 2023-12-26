import React, { useContext } from 'react'
import'./CSS/Categories.css';
import { AcceuilContext } from '../Context/AcceuilContext';
import icondrop from'../Components/Assets/dropdown_icon.png';
import { Item } from '../Components/Items/Item';


export const AcceuilCat = (props) => {

  const {produits} = useContext(AcceuilContext);
  return (
    <div className='categories'>
      <img className='banniere' src={props.banner} alt="" />


      <div className="indexsort">
        <p>
          <span>Affichage de 1-12</span> A partir de 36 produits
        </p>
        <div className="sort">
          Classés par <img src={icondrop} alt="" />
        </div>
      </div>


      <div className="produits">
        {produits.map((nouvo, i) => {
                  if(props.category ===nouvo.category){
                    return <Item key={i} id={nouvo.id} name={nouvo.name} image={nouvo.image} price = {nouvo.price}/>
                  }else{return null}
              })}
      </div>

      <div className="plus">
        Voir plus
      </div>
      
    </div>
  )
}
