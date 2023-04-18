import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const Item = ({id, name, description, stock, image}) => {
  
  return (
          
            <Card className='card text-center bg-dark' border = "primary" style={{ width: '16rem' , height: '20rem', margin:'1rem', paddingTop:'1rem'}} key={id}>
              <Card.Img variant="top" src={image} style={{height:'8rem'}}/>
              <Card.Body className='card-body text-light'>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                  {description}
                </Card.Text>
                <Card.Footer>
                  <Link to ={`/item/${id}`} className= "btn btn-outline-primary">Detalle</Link>
                </Card.Footer>
              </Card.Body>
            </Card>
           
  
  ); 
}

export default Item