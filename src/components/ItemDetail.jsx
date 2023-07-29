import React from 'react'
import ItemCount from './ItemCount';
import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { Spinner, Stack } from 'react-bootstrap';


const ItemDetail = ({ products, id1 }) => {
  
console.log(id1);
const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000)
    
  }, [])


  return (
    <>
      {loading ? (
      
        <div>  
          <Row className="justify-content-center" >
            <Card border="primary" style={{ width: '15rem', height: '30rem', margin:'1rem',paddingTop:'1rem' }} key={id1}>
            <Card.Img variant="top" src= {products.image} />

                <Stack>
                  <Card.Body>
                    <Card.Title>{products.name}</Card.Title>
                    <Card.Text py='2'>
                      {products.Descripcion}
                    </Card.Text>
                    <Card.Text color="blue.400" fontSize="xl">
                      Categoria: {products.categoria}
                    </Card.Text>
                    <Card.Text color="orange.300" fontSize="xl">
                      Stock: {products.stock}
                    </Card.Text>
                    <Card.Text color="green.600" fontSize="xl">
                      Precio: ${products.price}
                    </Card.Text>
                  </Card.Body>

                  <Card.Footer className="justify-content-center">
                    <ItemCount id={id1}
                      name={products.name}
                      price={products.price}
                      stock={products.stock} />
                  </Card.Footer>

                </Stack>
              </Card>
              </Row>
            </div>
          
        
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        

      )}
    </>
  )
}

export default ItemDetail