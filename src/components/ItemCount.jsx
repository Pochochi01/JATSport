import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { Link } from "react-router-dom";
import { useState,useContext } from 'react';
import { CartDataContext } from '../context/CartContext';

const ItemCount = ({id,title,price,image,stock}) => {
// funciones de suma y resta
const {addToCart, cart} = useContext (CartDataContext)
const [counter, setCounter] = useState (0);
const productCart = cart.filter(prod => prod.id === id);
const productsCart = productCart.length > 0 ? productCart[0].cantidad : 0;

const sumar = () => {
  if (counter + productsCart < stock) {
    setCounter (counter + 1);
  }
  else {
    alert('Stock Maximo')
  }
}

const restar = () => {
  if (counter === 0) {
    alert('No pude ingresar cantidad negativa')
    return;
  }
  setCounter(counter - 1);
};

const addProdCart = () => {
  const prod = {
      id,
      image,
      title,
      price,
      cantidad:counter
  }
  addToCart(prod);
};

return (
    <>
      <ButtonToolbar className="justify-content-between" aria-label="Toolbar with Butcantiton groups">
      Cantidad
        <ButtonGroup style={{ width: '10rem', margin:'2rem' }} aria-label="Basic example" className="justify-content-md-center" >
          <Button variant="primary" onClick={restar}> - </Button>
          <Button variant="outline-primary" > {counter} </Button>
          <Button variant="primary" onClick={sumar}> + </Button>
        </ButtonGroup>
      {/* </ButtonToolbar>
      <ButtonToolbar className="justify-content-between" aria-label="Toolbar with Button groups" > */}
        <Button style={{ width:"10rem" ,marginLeft:'0.7rem' }} variant="outline-primary" className="justify-content-md-center"  onClick={addProdCart} as={Link} to={`/cart`} >
        Agregar al carrito 
        </Button>
      </ButtonToolbar>
    </>
)
}

export default ItemCount