import { useState } from "react";


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
    <button onClick={() => setContador(contador+1)}>Sumar</button>
    {contador}
    <button onClick={(restar)}>Restar</button>
    </>
  )
}

export default ItemCount;