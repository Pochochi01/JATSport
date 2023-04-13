import React from 'react'
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';

const CartWidget = () => {
  const {cart, setCart}= useContext(CartContext);

  const cantidad = cart.reduce((acc, curr) =>{return acc + curr.cantidad}, 0)
  
    return (
      <div >
        <Button variant="outline" size="lg" border="none" >
        <span className="material-symbols-outlined">
          shopping_cart
        </span>
        {cart !=0? (
          <span>{cantidad}</span>
        ):(
          <p></p>
        )}
        
        </Button>
      </div>
    )
  }


  
export default CartWidget