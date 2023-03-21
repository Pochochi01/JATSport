import React from 'react'
import { useParams } from 'react-router-dom'
import ItemCount from './ItemCount'

const ItemDetailContainer = ({ datos }) => {

  const { id } = useParams();

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

  const itemfilter = datos.filter((dato) => dato.id === id);

  return (
    <>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary">
          <ItemCount />
          </Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default ItemDetailContainer