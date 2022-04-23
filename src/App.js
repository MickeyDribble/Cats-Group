import { useState } from 'react'
import { BiShoppingBag } from "react-icons/bi";
import './App.css';
import Navbar from "./Navbar"
import Data from './Data'
import React from "react";
import Modal from './Modal'





const App = () => {

  const [basket, setBasket] = useState([]);
  const [show, setShow] = useState(false)

    const handleAddProduct = (i) => {
      setBasket([...basket, i])
    }
    console.log(basket)
    
    const handleRemoveProduct = (i) => {
      const removeBasket = basket.filter(cat => cat.id !== i.id)
        setBasket(removeBasket)
    }

  return (

    <div>

        <div className='App'>
        <div className='basketButton'>
          <BiShoppingBag className="checkout" onClick={() => setShow(true)}></BiShoppingBag>
          </div>
          <Modal 
          basket={basket}
          handleRemoveProduct={handleRemoveProduct}
          onClose={() => setShow(false)} show={show}/>

        </div>

        <Navbar />
        <Data 
        handleAddProduct={handleAddProduct}
        handleRemoveProduct={handleRemoveProduct}
        />

    </div>

  )
}
      
export default App
