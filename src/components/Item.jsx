import React from 'react'
import { Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Cards.css';

const Item = ({id, name, description, stock, image}) => {
  
  return (
    <div key={id}>
      {/* <div className="container d-flex justify-content-center align-items-center h-100 bg-info"> */}
            <Card className='card text-center bg-dark col-md-4' style={{ width: '15rem' , height: '25rem'}} >
              <Card.Img variant="top" src={image} style={{ width: '15rem' , height: '15rem'}} />
              <Card.Body className='card-body text-light'>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                  {description}
                </Card.Text>
                
                  <Link to ={`/item/${id}`} className= "btn btn-outline-primary">Detalle</Link>
                  
              </Card.Body>
            </Card>
           
  {/* </div> */}
  </div>
  ); 
}

export default Item