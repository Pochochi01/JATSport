import React from 'react'
import { useState } from 'react';
import {collection, addDoc, getFirestore} from "firebase/firestore";
import { useContext } from 'react'
import { CartContext } from '../context/CartContext';

const Contact = () => {

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [orderId, setOrderId] = useState(null);
    const { cart, totalCart } = useContext(CartContext);
  
    const db = getFirestore();
    const ordersCollection = collection(db,"order");
  
    const handleSubmit = (e) => {
      e.preventDefault()
      addDoc(ordersCollection, order).then(({id}) => setOrderId(id));
    }


    const order={
      nombre,
      email,
      cart:({cart})
    };
  

  return (
    <>
    <form className="form" onSubmit={handleSubmit}>

      <header>
        Completar Compra
        <span className="message">Llenar el Formulario para confirmar compra.</span>
      </header>

      <label>
        <span>E-Mail</span>
        <input placeholder="Ingrese su Correo" className="input" type="text" required=""  onChange={(e)=>setEmail(e.target.value)}/>
      </label>

      <label>
        <span>Nombre Completo</span>
        <input placeholder="Ingrese su Nombre" className="input" type="text" required="" onChange={(e)=>setNombre(e.target.value)}/>
      </label>
      
      <div className="submitForm">
        <p>Orden de Compra Num:{orderId}</p>
        <button type='submit'>Completar Pago: ${totalCart()} </button>
      </div>

    </form>

  </>
  )
}

export default Contact