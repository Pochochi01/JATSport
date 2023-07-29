
import { useContext } from 'react';
import {Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../context/CartContext';
import Contact from './Contact';


const Cart = () => {
  const { cart, removeItem, totalCart, nullCart } = useContext(CartContext);
  
  return (
    <div>
      {cart.length !== 0 ? (
      <div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Table responsive hover style={{ boxSizing: 'inherit', textAlign: 'left', marginTop:'3rem' }}>
        <thead>
          <tr>
            <th>Eliminar</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Sub-Total</th>
          </tr>
        </thead>
        <tbody style={{ verticalAlign: 'middle' }}>
          {cart.map((prod) => (
            <tr key={prod.id}>
              <td>
                <Button variant="outline-danger" onClick={() => removeItem (prod.id)} >
                <span className="material-symbols-outlined" style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                  Delete
                </span>
                </Button>
              </td>
              {/* <td><img src={prod.image} alt="" style={{ height:'5rem', width: '5rem' }} /> </td> */}
              <td>{prod.name}</td>
              <td>${prod.price}</td>
              <td>{prod.cantidad}</td>
              <td>${prod.cantidad * prod.price}</td>
              <td></td>
              
            </tr>
          ))}
        </tbody>
        <td>
                <Button variant="outline-danger" onClick={() => nullCart()} >
                <span className="material-symbols-outlined" style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                  
                </span>Limpiar Carrito
                </Button>
              </td>
      </Table>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
      <Table responsive hover style={{width:'36rem'}}>
        <thead >
          <tr >
            <th colSpan={4}>Total De Compras</th>
          </tr>
        </thead>
        <tbody >
          <tr >
          <th>Total</th>
          <td>${totalCart()}</td>
          <td></td>
          <td></td>
          </tr>
        </tbody>
      </Table>
      </div>

      <div>
            <Button  variant="outline-primary" size="lg" as={Link} to="/contact">"Finalizar Compra"</Button>
      </div>
      

      </div>
            ):(
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop:'2rem'}}>
                <h3>El Carrito Esta Vacio</h3>
                <Button variant="outline-primary" size="lg" as={Link} to="/productos">Volver al Catalogo</Button>
              </div>
            )}
    </div>

  );
};


export default Cart