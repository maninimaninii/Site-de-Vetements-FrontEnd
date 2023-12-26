import React from 'react'
import { Hero } from '../Components/Hero/Hero'
import { Populaires } from '../Components/Populaires/Populaires'
import { Offres } from '../Components/Offers/Offres'

export const Acceuil = () => {
  return (
    <div>
        <Hero/>
        <Populaires/>
        <Offres/>
    </div>
  )
}
