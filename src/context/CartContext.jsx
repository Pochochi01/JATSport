import {createContext, useState, useEffect} from 'react';

export const CartDataContext = createContext();


const CartContext = ({children}) => {
// local storage para guardar cart
const [cart, setCart] = useState(() => {
  const savedCart = JSON.parse(localStorage.getItem("cart"));
  return savedCart || [];
});


useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);

const addToCart = (prod) => {
  // function para que los items se sumen y no se repitan
  const prodInCart = cart.find((item) => item.id === prod.id);
  console.log(prodInCart)
  if (prodInCart) {
    const updatedCart = cart.map((item) =>
      item.id === prod.id ? { ...item, cantidad: item.cantidad + prod.cantidad} : item
    );
    setCart(updatedCart);
  } else {
    setCart([...cart,prod])
  }
};


    const removeItem = (prodId)=>{
      const deleteItem = cart.filter(prod => prod.id !== prodId);
      setCart(deleteItem);
    }

    const nullCart = () =>{
      setCart([]); 
    }
    const totalCart = () => {
      return cart.reduce((total, prod) => total + (prod.price * prod.cantidad), 0);
  }

  
  return (
    <CartDataContext.Provider value={{cart, removeItem, totalCart, nullCart, addToCart, setCart}}>
        {children}
        </CartDataContext.Provider>
  )
}

export default CartContext