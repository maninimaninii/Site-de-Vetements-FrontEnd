import React from 'react'
import { Hero } from '../Components/Hero/Hero'
import { Populaires } from '../Components/Populaires/Populaires'
import { Offres } from '../Components/Offers/Offres'
import { NewCollections } from '../Components/NewCollections/NewCollections'
import { NewsLetter } from '../Components/NewsLetter/NewsLetter'
import { Footer } from '../Components/Footer/Footer'

export const Acceuil = () => {
  return (
    <div>
        <Hero/>
        <Populaires/>
        <Offres/>
        <NewCollections/>
        <NewsLetter/>
        <Footer/>
    </div>
  )
}
