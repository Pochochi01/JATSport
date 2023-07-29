import React from "react";
import { useState, useContext } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { CartContext } from "../context/CartContext";

const Contact = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirm, setEmailConfirm] = useState("");
  const [error, setError] = useState("");
  const [orderId, setOrderId] = useState("");
  const { cart, nullCart, totalCart } = useContext(CartContext);

  const db = getFirestore();
  const ordersCollection = collection(db, "orders");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!nombre || !apellido || !telefono || !email || !emailConfirm) {
      setError("Por Favor Completar Todos Los Campos");
      return;
    }

    if (email !== emailConfirm) {
      setError("Los Campos Email no Coinciden");
      return;
    }
    
    

    const order = {
       items: cart.map(prod => ({
         id: prod.id,
         name: prod.name,
         cantidad: prod.cantidad,
       })),
       //total: totalCart,
       fecha: new Date(),
       nombre,
       apellido,
       telefono,
       email,
    };


    addDoc(ordersCollection, order)
    .then(docRef => {
      setOrderId(docRef.id);
      nullCart();
    });

    };

  return (
    <div>
      <h2> Formulario de Confirmacion</h2>
      <form className="form" onSubmit={handleSubmit}>
        <header>
          Completar Compra.
          <span className="message">
            {" "}
            Llenar el Formulario para confirmar compra.
          </span>
        </header>

        <label>
          <span>Nombre</span>
          <input
            placeholder="Ingrese su Nombre"
            className="input"
            type="text"
            required=""
            onChange={(e) => setNombre(e.target.value)}
          />
        </label>

        <label>
          <span>Apellido</span>
          <input
            placeholder="Ingrese su Apellido"
            className="input"
            type="text"
            required=""
            onChange={(e) => setApellido(e.target.value)}
          />
        </label>

        <label>
          <span>Telefono</span>
          <input
            placeholder="Ingrese su Telefono"
            className="input"
            type="text"
            required=""
            onChange={(e) => setTelefono(e.target.value)}
          />
        </label>

        <label>
          <span>E-Mail</span>
          <input
            placeholder="Ingrese su Correo"
            className="input"
            type="text"
            required=""
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          <span>Confirmar E-Mail</span>
          <input
            placeholder="Repita su Correo"
            className="input"
            type="text"
            required=""
            onChange={(e) => setEmailConfirm(e.target.value)}
          />
        </label>

        <div className="submitForm">
          <p>Orden de Compra Num:</p>
          <button type="submit">Completar Pago: ${totalCart()} </button>
        </div>

        {error && <p style={{ color: red }}>{error}</p>}
      </form>
      {orderId && (
        <strong>Gracias por su compra. Su Numero de Orden es {orderId}</strong>
      )}
    </div>
  );
};

export default Contact;
