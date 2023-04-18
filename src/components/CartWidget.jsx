import React from 'react'
import { CartDataContext } from '../context/CartContext';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';

const CartWidget = () => {
  const {cart, setCart}= useContext(CartDataContext);

  const cantidad = cart.reduce((acc, curr) =>{return acc + curr.cantidad}, 0)
  
    return (
      <div >
        <Button variant="outline" size="lg" border="none" >
        <span className="material-symbols-outlined" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
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