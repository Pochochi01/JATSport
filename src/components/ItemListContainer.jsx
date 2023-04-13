import React from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import { useState, useEffect } from 'react'
import { collection, getDocs, getFirestore} from 'firebase/firestore'



const ItemListContainer = ({}) => {

const { categoria } = useParams();
const [products, setProducts] =useState([])

useEffect(()=>{
    const db = getFirestore();
    const itemsCollection = collection(db, "Products");
    
    getDocs(itemsCollection).then((snapshot)=>{
      const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()}));
      setProducts(docs);
    })
  }, [])
    
      
  
const catFilter = products.filter((prod) => prod.categoria === categoria);


return (
<>
    
        {categoria? <ItemList products={catFilter}/> : <ItemList products={products}/>}
    
</>
)
}


export default ItemListContainer