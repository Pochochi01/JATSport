import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Item from './Item'


const ItemList = ({datos}) => {
return(
    <>
    <Container>
        <Row>
        {
    datos?.map((items)=>(
        <Item 
            key={items.id}
            id={items.id}
            name={items.name}
            description={items.description}
            stock={items.stock}
            image={items.image}
        />
    )
    )
    }
    </Row>
    </Container>
</>
)
}

export default ItemList