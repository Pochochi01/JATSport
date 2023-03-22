import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({id, name, description, stock}) => {
  
  return (
    <div key={id}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary">
          <Link to ={`/item/${id}`}>Detalle</Link>
          </Button>
      </Card.Body>
    </Card>
  </div>
  ); 
}

export default Item