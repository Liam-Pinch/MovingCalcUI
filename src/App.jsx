import { useState } from 'react'
import './Index.css'
import MortgageCalcForm from './MortgageCalcComponent'
import BathroomComponent from './BathroomComponent'
import KitchenComponent from './KitchenComponent'
import LivingroomComponent from './LivingroomComponent'
import DecoratingComponent from './DecoratingComponent'


function App() {

  return (
    <>
    <div className="landing-page">
    <MortgageCalcForm></MortgageCalcForm>
    <BathroomComponent></BathroomComponent>
    <KitchenComponent></KitchenComponent>
    <LivingroomComponent></LivingroomComponent>
    <DecoratingComponent></DecoratingComponent>
    </div>
    </>
  )
}

export default App
