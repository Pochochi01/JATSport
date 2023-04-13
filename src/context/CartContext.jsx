import {createContext,useState} from 'react';

export const CartContext = createContext();

const cartContext = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (prod) => {
      setCart([...cart, prod]);
  }

    const removeItem = (id)=>{
      const deleteItem = cart.filter(prod => prod.id !== id);
      setCart([...deleteItem]);
    }

    const nullCart = () =>{
      setCart([]); 
    }
    const totalCart = () => {
      return cart.reduce((total, prod) => total + (prod.price * prod.cantidad), 0);
  }
  
  return (
    <CartContext.Provider value={{cart, removeItem, totalCart,nullCart, addToCart,setCart}}>
        {children}
        </CartContext.Provider>
  )
}

export default cartContext