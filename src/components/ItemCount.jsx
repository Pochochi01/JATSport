import { useState } from "react";
import './Cards.css'


const ItemCount = () => {

    const [contador, setContador] = useState(0);

    const restar = () => {
        if (contador < 1) {
            alert("No se pueden cargar cantidades negativas");
        } else  {
            setContador(contador-1);
        }
    };

  return (
    <>
    <button className="botonSuma" onClick={() => setContador(contador+1)}>+</button>
    <buttom className="contador">{contador}</buttom>
    <button className="botonRestar"onClick={(restar)}>-</button>
    </>
  )
}

export default ItemCount;