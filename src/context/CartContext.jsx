import {createContext, useState, useEffect} from 'react';

export const CartContext = createContext();


const cartContext = ({children}) => {
const [cart, setCart] = useState([]);


// const addToCart = (prod) => {
//   const prodInCart = cart.find((item) => item.id === prod.id);
//   // console.log(prodInCart)
//   if (prodInCart) {
//     const updatedCart = cart.map((item) =>
//       item.id === prod.id ? { ...item, cantidad: item.cantidad + prod.cantidad} : item);
//     setCart(updatedCart);
//   } else {
//     setCart([...cart,prod])
//   }
// };

    const addToCart = (prod) => {
     setCart([...cart, prod]);
    }


    const removeItem = (prod)=>{
      console.log(prod)
      const deleteItem = cart.filter(prod => prod.id !== prod);
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