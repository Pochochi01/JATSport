import React from 'react'
import { useParams } from 'react-router-dom'
import datos from './data/data.json'
import ItemCount from './ItemCount'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemDetail = () => {

    const {id}=useParams();
    console.log(id);

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
    
      const itemFilter = datos.filter((dato) => dato.id === id);
      console.log(itemFilter)
      
  return (
    <>
    {itemFilter.map((dato) => (
        <div key = {dato.id}>
      <Card className='card text-center bg-light col-md-4' style={{ width: '15rem', height: '25rem' }}>
      <Card.Img variant="top" src={dato.image} style={{ width: '14.9rem' , height: '15rem'}}/>
      <Card.Body>
        <Card.Title>{dato.name}</Card.Title>
        <Card.Text>
          {dato.description}
        </Card.Text>
        <Button variant="primary">
          <ItemCount 
            stock = {dato.stock}
            id={dato.id}
            price={dato.price}
            name={dato.name}
          />
          </Button>
      </Card.Body>
    </Card>
    </div>
    )
    )
}
    </>
  )
}

export default ItemDetail