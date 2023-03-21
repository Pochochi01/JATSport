import React from 'react'
import { Container } from 'react-bootstrap'
import Item from './Item'


const ItemList = ({datos}) => {
return(
    <>
    <Container>
    {
    datos?.map((items)=>(
        <Item 
            key={items.id}
            id={items.id}
            name={items.name}
            description={items.description}
            stock={items.stock}
        />
    )
    )
    }
    </Container>
</>
)
}

export default ItemList