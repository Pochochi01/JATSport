import {createContext, useState, useEffect} from 'react';

export const CartContext = createContext();


const cartContext = ({children}) => {
const [cart, setCart] = useState([]);


const addToCart = (prod) => {
const prodInCart = cart.find((item) => item.id === prod.id);
   
   if (prodInCart) {
     const updatedCart = cart.map((item) =>
       item.id === prod.id ? { ...item, cantidad: item.cantidad + prod.cantidad} : item);
     setCart(updatedCart);
   } else {
     setCart([...cart,prod])
   }
 };


    const removeItem = (prodId)=>{      
      const deleteItem = cart.filter(prodT => prodT.id !== prodId);
      setCart(deleteItem);
    }

    const nullCart = () =>{
      setCart([]); 
    }
    const totalCart = () => {
      return cart.reduce((total, prod) => total + (prod.price * prod.cantidad), 0);
  }

  
  return (
    <CartContext.Provider value={{cart, removeItem, totalCart, nullCart, addToCart, setCart}}>
        {children}
        </CartContext.Provider>
  )
}

export default cartContext