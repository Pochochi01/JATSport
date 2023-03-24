import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import datos from './data/data.json'
import ItemList from './ItemList'



const ItemListContainer = () => {

const { category } = useParams();

      
  const getDatos = () => {
    return new Promise((resolve, reject) => {
        if (datos.lenght === 0) {
            reject(new Error("Arreglo Vacio"))
        }
        setTimeout(()=> {
            resolve(datos)
        },2000);
    });
};

async function fetchingData(){
    try {
        const datosFetched = await getDatos();
        console.log(datosFetched);
    } catch (err) {
        console.log(err);
    }
}

fetchingData();

const filtro = datos.filter((dato) => dato.categoria === category);

return (
<>
    
        {category ? <ItemList datos={filtro}/> : <ItemList datos={datos}/>}
    
</>
)
}


export default ItemListContainer