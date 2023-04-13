import React from 'react'
import { useState } from 'react';
import {collection, addDoc, getFirestore} from "firebase/firestore";
import { useContext } from 'react'
import { CartContext } from '../context/CartContext';

const Contact = () => {

    const [nombre, setNombre] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [orderId, setOrderId] = useState(null);
    const { cart, totalCart, setCart } = useContext(CartContext);
  
    const db = getFirestore();
    const ordersCollection = collection(db,"order");
  
    const handleSubmit = (e) => {
      e.preventDefault()
      addDoc(ordersCollection, order).then(({ id }) =>
        setOrderId(id));
    }
    const order={
      nombre,
      cardNumber,
      cart
     
      
    };
  

  return (
    <>
    <form className="form" onSubmit={handleSubmit}>
      <header>
        Credit card information
        <span className="message">Fill the form to continue.</span>
      </header>
      <label>
        <span>Card Number</span>
        <input placeholder="Type your card number" className="input" type="number" required=""  onChange={(e)=>setCardNumber(e.target.value)}/>
      </label>
      <label>
        <span>Name on card</span>
        <input placeholder="Type your name as appear on card" className="input" type="text" required="" onChange={(e)=>setNombre(e.target.value)}/>
      </label>
      <fieldset>
        <label className="sm">
          <span>Exp. Month</span>
          <div className="custom-select">
            <select className="input" type="select" required="">
              <option></option>
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>Dicember</option>
            </select>
          </div>
        </label>
        <label className="sm">
          <span>Exp. Year </span>
          <div className="custom-select">
            <select className="input" type="select" required="">
              <option></option>
              <option>2023</option>
              <option>2024</option>
              <option>2025</option>
              <option>2026</option>

            </select>
          </div>
        </label>
        <label className="sm">
          <span>CW </span>
          <input className="input" placeholder="1234" size="4"  type="text" required="" />
        </label>
      </fieldset>
      <div className="submitCard">
        <button type='submit'>Complete payment: ${totalCart()} </button>
        
      </div>
    </form>

  </>
  )
}

export default Contact